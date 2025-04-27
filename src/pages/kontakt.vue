<script setup lang="ts">
import appConfig from '~/appConfig.json'

useHead({
  title: 'Kontakt',
  meta: [
    {
      name: 'description',
      content: appConfig.useHead.dashboardContent
    },
    { property: 'og:title', content: 'Kontakt' },
    {
      property: 'og:description',
      content: appConfig.useHead.dashboardContent
    }
  ]
})

useSeoMeta({
  description: appConfig.useHead.dashboardContent,
  ogTitle: `Kontakt`,
  ogDescription: appConfig.useHead.dashboardContent,
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})
</script>

<template>
  <ContactPage />
</template>
