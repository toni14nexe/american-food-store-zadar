<script setup lang="ts">
import backgroundImage from '@/assets/images/background.jpeg'
import dashboardLeftImage from '@/assets/images/dashboard-left.jpg'
import dashboardRightImage from '@/assets/images/dashboard-right.jpg'
import Categories from '~/components/shared/Categories.vue'
import appConfig from '~/appConfig.json'
import { Search } from '@element-plus/icons-vue'

useHead({
  title: 'Naslovnica',
  meta: [
    {
      name: appConfig.title,
      content: appConfig.useHead.dashboardContent
    },
    { property: 'og:title', content: 'Naslovnica' },
    {
      property: 'og:description',
      content: appConfig.useHead.dashboardContent
    }
  ]
})

useSeoMeta({
  description: appConfig.useHead.dashboardContent,
  ogTitle: `Naslovnica`,
  ogDescription: appConfig.useHead.dashboardContent,
  ogImage: appConfig.useHead.images.favicon180,
  twitterCard: 'summary_large_image',
  twitterImage: appConfig.useHead.images.favicon180
})

const route = useRoute()
const searchValue = ref('')

watch(
  () => route.path,
  () => {
    if (route.name !== 'pretrazivanje') searchValue.value = ''
  }
)

function handleSearch() {
  if (searchValue.value.trim().length < 3)
    ElNotification({
      type: 'warning',
      message: 'Vrijednost pretraživanja ne smije biti kraća od 3 znaka!',
      duration: 3000
    })
  else if (searchValue.value.trim().length > 100)
    ElNotification({
      type: 'warning',
      message: 'Vrijednost pretraživanja ne smije biti duža od 100 znakova!',
      duration: 3000
    })
  else {
    navigateTo(`/pretrazivanje?value=${searchValue.value}`)
  }
}
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
          {{ appConfig.dashboard.mainParagraph }}
        </p>
        <ElRow
          justify="center"
          class="w-100"
          v-motion-slide-top
          :duration="1000"
          :delay="600"
        >
          <ElInput
            v-model="searchValue"
            placeholder="Pretraži..."
            size="large"
            class="search"
            @keyup.enter="handleSearch"
          >
            <template #suffix>
              <ElIcon :size="18" @click="handleSearch" class="cursor-pointer">
                <Search />
              </ElIcon>
            </template>
          </ElInput>
        </ElRow>
      </div>
    </ClientOnly>

    <Categories />

    <ElRow>
      <ElCol :xs="1" :sm="4" />
      <ElCol :xs="22" :sm="7">
        <h2>{{ appConfig.dashboard.leftSideTitle }}</h2>
        <p>
          <b>
            {{ appConfig.dashboard.leftSideText }}
          </b>
        </p>
        <ClientOnly>
          <div
            :style="`background-image: url(${dashboardLeftImage})`"
            class="image"
          />
        </ClientOnly>
      </ElCol>
      <ElCol :span="1" class="hidden-sm-and-up" />
      <ElCol :xs="1" :sm="1" />
      <ElCol :xs="22" :sm="7">
        <ClientOnly>
          <div
            :style="`background-image: url(${dashboardRightImage})`"
            class="image hidden-sm-and-down"
          />
        </ClientOnly>
        <h2>{{ appConfig.dashboard.rightSideTitle }}</h2>
        <p>
          <b>
            {{ appConfig.dashboard.rightSideText }}
          </b>
        </p>
        <ClientOnly>
          <div
            :style="`background-image: url(${dashboardRightImage})`"
            class="image hidden-md-and-up"
          />
        </ClientOnly>
      </ElCol>
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
.on-image-text {
  color: white;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 0 20px;
}
.search {
  margin-top: 24px;
  margin-bottom: 24px;
  width: 350px;
  height: 50px;
  font-family: 'Inclusive Sans';
  font-size: 18px;
  border-radius: 4px;
}
.big-title {
  margin-top: 70px;
  font-size: 80px;
  color: white;
  text-align: center;
  padding: 0 20px;
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
  .search {
    width: 260px;
  }
  .big-title {
    margin-top: 24px;
    font-size: 34px;
  }
  .waves-image {
    width: 100%;
  }
  .on-image-text {
    font-size: 18px;
  }
}
</style>
