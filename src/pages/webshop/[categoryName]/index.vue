<script lang="ts" setup>
import appConfig from '~/appConfig.json'
import WebshopCategoryPage from '~/components/webshop/WebshopCategoryPage.vue'

const route = useRoute()
const title = `${route.params.categoryName[0].toUpperCase()}${route.params.categoryName.slice(1, route.params.categoryName.length)}`

useHead({
  title: `${title}`,
  meta: [
    {
      name: 'description',
      content: appConfig.useHead.dashboardContent
    },
    { property: 'og:title', content: `${appConfig.title} - Trgovina` },
    {
      property: 'og:description',
      content: appConfig.useHead.dashboardContent
    }
  ]
})

useSeoMeta({
  description: appConfig.useHead.dashboardContent,
  ogTitle: `Trgovina - ${title}`,
  ogDescription: appConfig.useHead.dashboardContent,
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})
</script>

<template><WebshopCategoryPage :title="title" /></template>

<style lang="css" scoped></style>
