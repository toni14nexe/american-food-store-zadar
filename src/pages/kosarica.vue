<script setup lang="ts">
import appConfig from '~/appConfig.json'

useHead({
  title: 'Košarica',
  meta: [
    {
      name: 'description',
      content: `${appConfig.title} košarica proizvoda.`
    },
    { property: 'og:title', content: 'Kontakt' },
    {
      property: 'og:description',
      content: `${appConfig.title} košarica proizvoda.`
    }
  ]
})

useSeoMeta({
  description: `${appConfig.title} košarica proizvoda.`,
  ogTitle: `Košarica`,
  ogDescription: `${appConfig.title} košarica proizvoda.`,
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})
</script>

<template>
  <CartPage />
</template>
