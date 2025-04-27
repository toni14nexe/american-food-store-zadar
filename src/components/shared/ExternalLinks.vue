<script lang="ts" setup>
import appConfig from '~/appConfig.json'
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import TikTokIcon from '~/assets/icons/tiktok.vue'
import MessageIcon from '~/assets/icons/message.vue'

defineProps(['showContactPageOption'])
</script>

<template>
  <ElRow
    justify="center"
    align="middle"
    class="w-100 color-zinc text-align-center"
  >
    <NuxtLink to="/kontakt" class="icon-link" v-if="showContactPageOption">
      <ElIcon :size="46">
        <MessageIcon />
      </ElIcon>
    </NuxtLink>
    <NuxtLink
      v-if="appConfig.links.facebook"
      :to="appConfig.links.facebook"
      class="icon-link"
      style="margin-left: 2px"
      target="_blank"
    >
      <ElIcon :size="40">
        <FacebookIcon />
      </ElIcon>
    </NuxtLink>
    <NuxtLink
      v-if="appConfig.links.instagram"
      :to="appConfig.links.instagram"
      class="icon-link ml-4"
      target="_blank"
    >
      <ElIcon :size="40">
        <InstagramIcon />
      </ElIcon>
    </NuxtLink>
    <NuxtLink
      v-if="appConfig.links.tikTok"
      :to="appConfig.links.tikTok"
      class="icon-link ml-4"
      target="_blank"
    >
      <ElIcon :size="40">
        <TikTokIcon />
      </ElIcon>
    </NuxtLink>
  </ElRow>
</template>

<style lang="css" scoped>
.color-zinc {
  color: var(--el-text-color-secondary);
}
.text-align-center {
  text-align: center;
}
.icon-link {
  color: var(--el-text-color-secondary);
  transition: 0.3s ease-in-out;
}
.icon-link:hover {
  color: var(--el-color-primary);
}
</style>
