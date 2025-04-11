// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "src/",
  css: ["~/assets/css/global.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@pinia/nuxt"],
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: "pt",
        iso: "pt-BR",
        file: "pt.json",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    lazy: true,
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
    strategy: "no_prefix",
  },
});
