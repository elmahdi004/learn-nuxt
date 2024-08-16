// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app:{
    head:{
      meta:[
        {
          name:"description",
          content:"this is our description how we can help u"
        }
      ]
    }
  }
})
