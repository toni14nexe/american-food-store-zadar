<script lang="ts" setup>
import appConfig from '~/appConfig.json'

defineProps(['align', 'fontSize'])
</script>

<template>
  <ElRow
    justify="center"
    align="middle"
    :style="`font-size: ${fontSize || 'small'};`"
  >
    <ElCol
      v-if="appConfig.companyData.title"
      :align="align ? align : 'middle'"
      class="text"
      >{{ appConfig.companyData.title }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.addressLine1"
      :align="align ? align : 'middle'"
      class="text"
      >{{ appConfig.companyData.addressLine1 }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.addressLine2"
      :align="align ? align : 'middle'"
      class="text"
      >{{ appConfig.companyData.addressLine2 }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.addressLine3"
      :align="align ? align : 'middle'"
      class="text"
      >{{ appConfig.companyData.addressLine3 }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.addressLine4"
      :align="align ? align : 'middle'"
      class="text"
      >{{ appConfig.companyData.addressLine4 }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.registrationNumber"
      :align="align ? align : 'middle'"
      class="text"
      >Matični broj: {{ appConfig.companyData.registrationNumber }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.OIB"
      :align="align ? align : 'middle'"
      class="text"
      >OIB: {{ appConfig.companyData.OIB }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.telephone"
      :align="align ? align : 'middle'"
      class="text"
    >
      Telefon:
      <a :href="`tel:${appConfig.companyData.telephone}`">
        {{ appConfig.companyData.telephone }}
      </a>
    </ElCol>
    <ElCol
      v-if="appConfig.companyData.email"
      :align="align ? align : 'middle'"
      class="text"
      >Email:
      <a :href="`mailto:${appConfig.companyData.email}`">{{
        appConfig.companyData.email
      }}</a></ElCol
    >
    <ElCol
      v-if="appConfig.companyData.bank"
      :align="align ? align : 'middle'"
      class="text"
      >Banka: {{ appConfig.companyData.bank }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.bankSwiftOrBic"
      :align="align ? align : 'middle'"
      class="text"
      >SWIFT/BIC: {{ appConfig.companyData.bankSwiftOrBic }}</ElCol
    >
    <ElCol
      v-if="appConfig.companyData.IBAN"
      :align="align ? align : 'middle'"
      class="text"
      >IBAN: {{ appConfig.companyData.IBAN }}</ElCol
    >
  </ElRow>
</template>

<style>
.text {
  color: var(--el-text-color-secondary);
  font-family: Arial, Helvetica, sans-serif;
}
</style>
