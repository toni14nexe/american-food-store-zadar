<script lang="ts" setup>
import appConfig from '~/appConfig.json'
</script>

<template>
  <div class="map-wrapper">
    <iframe
      width="100%"
      height="350"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="appConfig.googleMapSrc"
    ></iframe>
  </div>
</template>

<style lang="css" scoped>
.map-wrapper {
  width: 100%;
  max-width: 800px;
}
iframe {
  border: 0;
  border-radius: 8px;
}
</style>
