import nodemailer from 'nodemailer'
import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'
import appConfig from '~/appConfig.json'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    if (
      !body.totalPrice ||
      !body.buyerFullname ||
      !body.buyerEmail ||
      !body.buyerNumber ||
      !body.buyerAddress ||
      !body.buyerPlace ||
      !body.buyerZipCode ||
      !body.buyerCountry ||
      !body.list ||
      !body.shipping ||
      !body.payment
    )
      throw createError({
        statusCode: 400,
        statusMessage: 'Body parameter is missing.'
      })

    const order = await prisma.order.create({
      data: {
        list: body.list,
        totalPrice: body.totalPrice,
        buyerFullname: body.buyerFullname,
        buyerEmail: body.buyerEmail,
        buyerNumber: body.buyerNumber,
        buyerAddress: body.buyerAddress,
        buyerPlace: body.buyerPlace,
        buyerZipCode: body.buyerZipCode,
        buyerCountry: body.buyerCountry,
        description: body.description,
        payment: body.payment,
        shipping: body.shipping
      }
    })

    const transporter = nodemailer.createTransport({
      service:
        process.env.APP_EMAIL_HOST === 'smtp.zoho.eu' ? undefined : 'gmail',
      host: process.env.APP_EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD
      }
    })

    const orderItemsHtml = order.list
      // @ts-expect-error
      ?.map(
        (item: any) => `
      <div style="margin-bottom: 10px; padding: 8px; border-bottom: 1px solid #eee;">
        <p><b>${item.name}</b></p>
        ${item.image ? `<img src="${item.image}" alt="${item.name}" width="120" style="margin-top:5px;"/>` : ''}
        <p>Količina: ${item.quantity}</p>
        <p>Cijena: ${item.price.toFixed(2)} €</p>
        <p>Ukupno: ${item.totalPrice.toFixed(2)} €</p>
      </div>
    `
      )
      .join('')

    const mailOptions = {
      from: `"${appConfig.title}" <${process.env.APP_EMAIL}>`,
      to: [body.buyerEmail, process.env.APP_EMAIL],
      subject: `${appConfig.title} narudžba ${order.orderNumber}`,
      html: `
               <a href="${process.env.APP_BASE_URL}" style="text-decoration: none"><h1 style="background-color: ${appConfig.mainColor}; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">${appConfig.title}</h1></a>
               <h3>Narudžba ${order.orderNumber} je zaprimljena u ${formatToDatetime(String(order.createdAt))}.</h3>
               <br/>
               <b><p>Kupac</p></b>
               <p>Ime i prezime: ${order.buyerFullname}</p>
               <p>Email: ${order.buyerEmail}</p>
               <p>Mobitel: ${order.buyerNumber || '-'}</p>
               <p>Adresa: ${order.buyerAddress}</p>
               <p>Mjesto: ${order.buyerPlace}</p>
               <p>Poštanski broj: ${order.buyerZipCode}</p>
               <p>Država: ${order.buyerCountry}</p>
               <p>Napomena: ${order.description || '-'}</p>
               <br/>
               <b><p>Prodavač</p></b>
               <p>${appConfig.companyData.title}</p>
               <p>Email: ${appConfig.companyData.email}</p>
               <p>Mobitel: ${appConfig.companyData.telephone}</p>
               <p>Adresa: ${appConfig.companyData.addressLine1}
                ${appConfig.companyData.addressLine2 ? `, ${appConfig.companyData.addressLine2}` : ''}
                ${appConfig.companyData.addressLine3 ? `, ${appConfig.companyData.addressLine3}` : ''}
                ${appConfig.companyData.addressLine4 ? `, ${appConfig.companyData.addressLine4}` : ''}
               </p>
               <p>Država: ${appConfig.companyData.country}</p>
               <br/>
               <b><p>Dostava: ${order.shipping}${body.shippingPrice ? ` - ${body.shippingPrice.toFixed(2)} €` : ''}</p></b>
               <b><p>Plaćanje: ${order.payment}</p></b>
               <br/>
               <b><p>Narudžba</p></b>
               ${orderItemsHtml}
               <b><p>Ukupna cijena: ${body.totalPrice.toFixed(2)} €</p></b>
               <br/>
               <a href="${process.env.APP_BASE_URL}/narudzba/${order.id}">Narudžba dostupna ovdje</a>`
    }
    await transporter.sendMail(mailOptions)

    return order
  }
})
