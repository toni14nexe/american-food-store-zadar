<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import appConfig from '~/appConfig.json'
import ExternalLinks from '../shared/ExternalLinks.vue'
import CompanyDetails from '../shared/CompanyDetails.vue'
import GoogleMap from '~/components/shared/GoogleMap.vue'
import ContactImage from '@/assets/images/contact.jpg'

interface RuleForm {
  fullname: string
  email: string
  message: string
}

const { $axios } = useNuxtApp()
const ruleFormRef = ref<FormInstance>()
const loading = ref({ submit: false })
const form = reactive<RuleForm>({
  fullname: '',
  email: '',
  message: ''
})
const rules = reactive<FormRules<RuleForm>>({
  fullname: [{ max: 100, message: 'Maximalno 100 znakova', trigger: 'change' }],
  email: [
    { required: true, message: 'Unesite email adresu', trigger: 'blur' },
    {
      validator: (_, value, callback) => {
        if (!validateEmail(value)) callback(new Error('Netočna email adresa'))
        else callback()
      },
      trigger: 'blur'
    }
  ],
  message: [
    { min: 10, message: 'Minimalno 10 znakova', trigger: 'change' },
    { max: 10000, message: 'Maximalno 10,000 znakova', trigger: 'change' }
  ]
})

async function sendMessage(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      loading.value.submit = true
      try {
        await $axios.post(`/contact/email`, form)
        ElNotification({
          type: 'success',
          message: 'Email je uspješno poslan.',
          duration: 3000
        })
        form.fullname = ''
        form.email = ''
        form.message = ''
      } catch (error) {
        ElNotification({
          type: 'error',
          message: 'Došlo je do greške prilikom slanja emaila.',
          duration: 3000
        })
        console.error('API Error:', error)
      } finally {
        loading.value.submit = false
      }
    }
  })
}
</script>

<template>
  <div class="page-container mb-24">
    <ElRow align="middle" justify="center">
      <h2 class="color-primary">KONTAKTIRAJTE NAS</h2>
    </ElRow>

    <ElRow justify="center">
      <ClientOnly>
        <img
          :src="ContactImage"
          alt="Kontakt slika"
          style="max-width: 100%; max-height: 40dvh; border-radius: 8px"
          class="mb-24"
        />
      </ClientOnly>
    </ElRow>

    <div class="px-16">
      <ElRow align="middle">
        <ElCol>
          <span
            ><b>Imate pitanje, prijedlog ili želite podijeliti dojam?</b></span
          >
        </ElCol>
        <ElCol>
          <span><b>Tu smo da slušamo, odgovorimo i povežemo se.</b></span>
        </ElCol>
      </ElRow>
      <ElRow align="middle"> </ElRow>
      <ElRow align="middle">
        <ElCol>
          <p>
            Bilo da vas zanima rad, suradnja, ili jednostavno želite reći “hej”
            — slobodno nam pišite.
          </p>
        </ElCol>
        <ElCol>
          <span>Vaša poruka nam znači.</span>
        </ElCol>
      </ElRow>
      <ElRow align="middle">
        <p>
          Kontaktirajte nas putem obrasca ispod ili na našu email adresu:
          <a :href="`mailto:${appConfig.companyData.email}`">
            {{ appConfig.companyData.email }}
          </a>
        </p>
      </ElRow>

      <ElRow justify="center">
        <ElForm
          :label-position="$viewport.isLessThan('tablet') ? 'top' : 'left'"
          require-asterisk-position="right"
          ref="ruleFormRef"
          class="form"
          :model="form"
          :rules="rules"
          label-width="auto"
          status-icon
          style="width: 100%"
        >
          <ElFormItem label="" prop="fullname">
            <ElInput
              v-model="form.fullname"
              type="text"
              placeholder="Pero Perić"
              class="max-w-250"
            />
          </ElFormItem>
          <ElFormItem label="" prop="email">
            <ElInput
              v-model="form.email"
              type="text"
              placeholder="pero.peric@mail.com"
              class="max-w-250"
            />
          </ElFormItem>
          <ElFormItem prop="message">
            <ElInput
              v-model="form.message"
              :autosize="{ minRows: 6 }"
              type="textarea"
              placeholder="Poruka..."
            />
          </ElFormItem>
          <ElRow
            align="middle"
            :justify="$viewport.isLessThan('tablet') ? 'center' : 'end'"
            class="mt-16"
          >
            <ElButton
              type="primary"
              :loading="loading.submit"
              @click="sendMessage(ruleFormRef)"
              size="large"
              >Pošalji
            </ElButton>
          </ElRow>
        </ElForm>
      </ElRow>

      <CompanyDetails class="mt-24" align="left" />

      <ExternalLinks class="mt-24" />

      <ElRow justify="center" align="middle" class="w-100 mt-24">
        <GoogleMap />
      </ElRow>
    </div>
  </div>
</template>

<style scoped>
p,
span {
  letter-spacing: 0.75px;
  color: #737373;
  font-size: 18px;
  font-weight: 500;
}
h2 {
  font-size: 44px;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  h2 {
    font-size: 32px;
  }
}
</style>
