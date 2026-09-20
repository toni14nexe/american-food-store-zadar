import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async () => {
  const products = await prisma.product.findMany({
    where: { deletedAt: null },
    orderBy: { name: 'asc' }
  })

  const escapeXml = (value: any) =>
    String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')

  const xmlItems = products
    .map(
      product => `
  <Proizvod>
    <Naziv>${escapeXml(product.name)}</Naziv>
    <Cijena valuta="EUR">${escapeXml(Number(product.discountPrice ?? product.price).toFixed(2))}</Cijena>
    <SidrenaCijena valuta="EUR">${escapeXml(Number(product.anchorPrice).toFixed(2))}</SidrenaCijena>
  </Proizvod>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Cjenik datumAzuriranja="${escapeXml(new Date().toISOString())}">
${xmlItems}
</Cjenik>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
})
