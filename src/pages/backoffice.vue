<script lang="ts" setup>
import BackofficePage from '~/components/backoffice/BackofficePage.vue'
import appConfig from '~/appConfig.json'

definePageMeta({
  layout: 'backoffice'
})

useHead({
  title: 'Backoffice',
  meta: [
    {
      name: 'description',
      content: 'Administratorske stranice'
    },
    { property: 'og:title', content: 'Backoffice' },
    {
      property: 'og:description',
      content: 'Administratorske stranice'
    }
  ]
})

useSeoMeta({
  description: 'Administratorske stranice',
  ogTitle: `Backoffice`,
  ogDescription: 'Administratorske stranice',
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})
</script>

<template><BackofficePage /></template>

<style lang="css" scoped></style>
