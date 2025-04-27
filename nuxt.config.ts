// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'
import appConfig from './src/appConfig.json'
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@prisma/nuxt',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    'nuxt-viewport',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
    '@primevue/nuxt-module'
  ],
  runtimeConfig: {
    siteUrl: process.env.APP_BASE_URL,
    public: {
      enviroment: process.env.ENVIROMENT,
      appBaseUrl: process.env.APP_BASE_URL,
      axiosApiBaseUrl: process.env.AXIOS_API_BASE_URL,
      cloudinaryPreset: process.env.CLOUDINARY_PRESET,
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME
    }
  },
  site: {
    url: appConfig.url,
    name: appConfig.title
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    },
    components: {
      include: ['Editor']
    }
  },
  css: ['~/assets/styles/main.css'],
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser':
          './node_modules/.prisma/client/index-browser.js'
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://js.stripe.com/v3/buy-button.js',
          async: true
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Inclusive+Sans&display=swap'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: appConfig.useHead.images.favicon180
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: appConfig.useHead.images.favicon32
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: appConfig.useHead.images.favicon16
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: appConfig.useHead.images.favicon96
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: appConfig.useHead.images.favicon180
        }
      ],
      meta: [
        {
          name: appConfig.title,
          content: appConfig.useHead.keywords
        },
        {
          name: 'keywords',
          content: appConfig.useHead.dashboardContent
        },
        { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
        { property: 'og:title', content: appConfig.title },
        {
          property: 'og:description',
          content: appConfig.useHead.dashboardContent
        },
        {
          property: 'og:image',
          content: appConfig.useHead.images.favicon180
        }
      ]
    }
  }
})
