<script setup lang="ts">
import appConfig from '~/appConfig.json'
import CompanyDetails from '../shared/CompanyDetails.vue'
import ExternalLinks from '../shared/ExternalLinks.vue'
import FooterMenuCard from '~/components/layout/FooterMenuCard.vue'
import LogoIcon from '~/assets/icons/logo.vue'

defineProps(['dividerMarginTop'])

const thisYear = new Date().getFullYear()
const categoriesStore = useCategoriesStore()
const { categoriesLoading, webshopCategories } = storeToRefs(categoriesStore)
const mainCategories = ref([
  { id: 1, name: 'Naslovnica', url: '' },
  { id: 2, name: 'Trgovina', url: 'webshop' },
  { id: 3, name: 'O nama', url: 'o-nama' },
  { id: 5, name: 'Kontakt', url: 'kontakt' }
])
</script>

<template>
  <div class="footer-top">
    <ElDivider
      class="divider"
      :style="`margin-top: ${dividerMarginTop ? `${dividerMarginTop}px` : '4px'} !important`"
    />

    <FooterMenuCard :categories="mainCategories" title="Izbornik" />

    <FooterMenuCard
      :categories="webshopCategories"
      title="Trgovina"
      urlPrefix="/webshop/"
      :loading="categoriesLoading"
    />

    <ExternalLinks :showContactPageOption="true" />

    <CompanyDetails class="mt-16" />

    <ElRow justify="center" align="middle" class="w-100 mt-8">
      <NuxtLink to="/">
        <ElIcon :size="80">
          <LogoIcon />
        </ElIcon>
      </NuxtLink>
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      <NuxtLink to="/kolacici" class="link"> Politika kolačića </NuxtLink>
    </ElRow>
    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/zastita-privatnosti" class="link">
        Zaštita privatnosti
      </NuxtLink>
    </ElRow>
    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/uvjeti-koristenja" class="link">
        Uvjeti korištenja
      </NuxtLink>
    </ElRow>
    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/uvjeti-prodaje" class="link"> Uvjeti prodaje </NuxtLink>
    </ElRow>
    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/online-placanje" class="link"> Online plaćanje </NuxtLink>
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center fs-16"
    >
      Sva prava pridržana, {{ appConfig.companyData.title }}
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      <NuxtLink to="https://innova-tech.hr/" class="link" target="_blank">
        Web aplikaciju izradio Innovatech obrt za informatičke usluge
      </NuxtLink>
    </ElRow>
  </div>

  <ElRow justify="center" align="middle" class="w-100 bottom-line mt-8">
    Copyright © {{ appConfig.copyrightYear
    }}{{ String(thisYear) !== appConfig.copyrightYear ? `-${thisYear}` : '' }}
    {{ appConfig.companyData.title }}
  </ElRow>
</template>

<style scoped>
.divider {
  margin-bottom: 24px !important;
}
.footer-top {
  max-width: calc(1920px - 40px);
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
.link {
  font-size: 16px;
  color: var(--el-text-color-secondary);
}
.link:hover {
  text-decoration: none;
  color: var(--el-color-primary);
}
.bottom-line {
  background-color: var(--el-text-color-secondary);
  height: 30px;
  font-size: small;
}
.color-zinc {
  color: var(--el-text-color-secondary);
}
.text-align-center {
  text-align: center;
}
.fs-16 {
  font-size: 16px;
}
</style>
