<script lang="ts" setup>
import OrderStatePage from '~/components/webshop/OrderStatePage.vue'
import appConfig from '~/appConfig.json'

useHead({
  title: 'Narudžba',
  meta: [
    {
      name: 'description',
      content: appConfig.useHead.dashboardContent
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: appConfig.useHead.dashboardContent
    }
  ]
})

useSeoMeta({
  description: appConfig.useHead.dashboardContent,
  ogTitle: `Narudžba`,
  ogDescription: appConfig.useHead.dashboardContent,
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})
</script>

<template><OrderStatePage /></template>

<style lang="css" scoped></style>
