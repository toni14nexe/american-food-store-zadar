<script setup lang="ts">
import appConfig from '~/appConfig.json'

useHead({
  title: 'Trgovina',
  meta: [
    {
      name: 'description',
      content: appConfig.useHead.dashboardContent
    },
    { property: 'og:title', content: 'Backoffice' },
    {
      property: 'og:description',
      content: appConfig.useHead.dashboardContent
    }
  ]
})

useSeoMeta({
  description: 'Trgovina',
  ogTitle: `Trgovina`,
  ogDescription: appConfig.useHead.dashboardContent,
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})
</script>

<template>
  <div class="page-container">
    <WebshopPage />
  </div>
</template>

<style lang="css" scoped></style>
