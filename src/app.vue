<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
import appConfig from '~/appConfig.json'
import hr from 'element-plus/es/locale/lang/hr'

useHead({
  titleTemplate: title =>
    appConfig.title ? `${appConfig.title}${title ? ' - ' + title : ''}` : '',
  meta: [
    {
      name: 'keywords',
      content: appConfig.useHead.keywords
    },
    { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
    { property: 'og:type', content: 'website' },

    // Image
    {
      property: 'og:image',
      content: appConfig.useHead.images.favicon180
    },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: process.env.APP_BASE_URL },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:image',
      content: appConfig.useHead.images.favicon180
    }
    // Optional
    /* {
      name: 'google-site-verification',
      content: 'XcMEZOdux3Ig-o3E4zproRBhHJiC-7GhdOnmmAogY7Q'
    } */
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: appConfig.useHead.images.favicon96
    },
    {
      rel: 'apple-touch-icon',
      href: appConfig.useHead.images.favicon180
    }
  ]
})
</script>

<template>
  <ClientOnly>
    <head>
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        :href="appConfig.useHead.images.favicon180"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        :href="appConfig.useHead.images.favicon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        :href="appConfig.useHead.images.favicon16"
      />
      <link
        rel="icon"
        type="image/png"
        :href="appConfig.useHead.images.favicon96"
        sizes="96x96"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        :href="appConfig.useHead.images.favicon180"
      />
      <meta name="apple-mobile-web-app-title" :content="appConfig.title" />
    </head>
  </ClientOnly>

  <ElConfigProvider :locale="hr">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>
