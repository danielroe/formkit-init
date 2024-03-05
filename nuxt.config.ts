// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],
  formkit: {
    autoImport: true
  },
  tailwindcss: {
    config: {
      content: ['./formkit.theme.ts']
    }
  }
})
