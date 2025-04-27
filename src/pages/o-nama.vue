<script setup lang="ts">
import appConfig from '~/appConfig.json'
import CompanyDetails from '~/components/shared/CompanyDetails.vue'
import GoogleMap from '~/components/shared/GoogleMap.vue'
import backgroundImage from '@/assets/images/background.jpeg'
import aboutUsTopLeft from '@/assets/images/about-us-top-left.jpg'
import aboutUsTopRight from '@/assets/images/about-us-top-right.jpg'
import aboutUsLeft from '@/assets/images/about-us-left.jpg'
import aboutUsRight from '@/assets/images/about-us-right.jpg'

useHead({
  title: 'O nama',
  meta: [
    {
      name: 'O nama',
      content: appConfig.useHead.dashboardContent
    },
    { property: 'og:title', content: 'O-nama' },
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
  <div class="page-container mb-24">
    <ClientOnly>
      <div
        class="main-head-container background-image-black"
        v-motion-slide-left
        :duration="1000"
        :delay="300"
      />
      <div />
      <div
        class="main-head-container background-image"
        :style="`background-image: url(${backgroundImage})`"
        v-motion-slide-left
        :duration="1000"
        :delay="300"
      />
      <div class="head-front-content">
        <div
          class="big-title"
          v-motion-slide-left
          :duration="1000"
          :delay="900"
        >
          {{ appConfig.title.toUpperCase() }}
        </div>
        <p
          v-motion-slide-bottom
          :duration="1000"
          :delay="600"
          class="on-image-text"
        >
          {{ appConfig.aboutUs.mainParagraph }}
        </p>
      </div>
    </ClientOnly>

    <ElRow
      class="mt-24 mb-24"
      style="text-align: center"
      justify="center"
      align="middle"
    >
      <p style="width: 80%">
        {{ appConfig.aboutUs.secondParagraph }}
      </p>
    </ElRow>

    <ClientOnly>
      <ElRow class="middle-container" :gutter="12">
        <ElCol :xs="24" :sm="12" align="center">
          <div
            class="middle-image"
            :style="`background-image: url(${aboutUsTopLeft})`"
          />
        </ElCol>
        <ElCol :xs="24" :sm="12" align="center">
          <div
            class="middle-image"
            :style="`background-image: url(${aboutUsTopRight})`"
          />
        </ElCol>
      </ElRow>
    </ClientOnly>

    <ElRow class="bottom-container">
      <ElCol :xs="1" :sm="4" />
      <ElCol :xs="22" :sm="7">
        <h2>{{ appConfig.aboutUs.leftSideTitle }}</h2>
        <p>
          <b>
            {{ appConfig.aboutUs.leftSideText }}
          </b>
        </p>
        <ClientOnly>
          <div :style="`background-image: url(${aboutUsLeft})`" class="image" />
        </ClientOnly>
      </ElCol>
      <ElCol :span="1" class="hidden-sm-and-up" />
      <ElCol :xs="1" :sm="1" />
      <ElCol :xs="22" :sm="7">
        <ClientOnly>
          <div
            :style="`background-image: url(${aboutUsRight})`"
            class="image hidden-sm-and-down"
          />
        </ClientOnly>
        <h2>{{ appConfig.aboutUs.rightSideTitle }}</h2>
        <p>
          <b>
            {{ appConfig.aboutUs.rightSideText }}
          </b>
        </p>
        <ClientOnly>
          <div
            :style="`background-image: url(${aboutUsRight})`"
            class="image hidden-md-and-up"
          />
        </ClientOnly>
      </ElCol>
    </ElRow>

    <CompanyDetails
      class="mt-24"
      :font-size="$viewport.isLessThan('tablet') ? '14px' : '16px'"
    />

    <ElRow justify="center" class="mt-24">
      <GoogleMap />
    </ElRow>
  </div>
</template>

<style lang="css" scoped>
.main-head-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 1;
  margin-top: -90px;
}
.background-image-black {
  background-color: black;
}
.background-image {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  opacity: 0.35 !important;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
.head-front-content {
  height: 100dvh;
  position: relative;
  z-index: 2;
  padding-top: 50px;
}
.big-title {
  margin-top: 70px;
  font-size: 80px;
  color: white;
  text-align: center;
  padding: 0 20px;
}
.on-image-text {
  color: white;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 0 20px;
}
.company-info-text {
  font-weight: 600;
  letter-spacing: 0.75px;
  color: #737373;
  font-size: 16px;
  font-weight: 500;
}
.middle-container {
  height: 80dvh;
}
.middle-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  border-radius: 8px;
}
.image {
  height: 500px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  margin: 24px 0;
  border-radius: 8px;
}
.bottom-container {
  margin-top: 50px;
}
h2 {
  color: black;
  font-weight: 700;
  letter-spacing: 2px;
}
p {
  font-weight: 300;
  letter-spacing: 0.75px;
  color: #737373;
}

@media only screen and (max-width: 991px) {
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
  }
  .on-image-text {
    font-size: 24px;
  }
}
@media only screen and (max-width: 768px) {
  .main-head-container {
    margin-top: -60px;
  }
  h2 {
    font-size: 24px;
  }
  .image {
    height: 300px;
  }
  .big-title {
    margin-top: 24px;
    font-size: 34px;
  }
  .on-image-text {
    font-size: 18px;
  }
  .middle-container {
    height: 500px;
    gap: 12px;
  }
  .middle-image {
    width: 100%;
  }
}
</style>
