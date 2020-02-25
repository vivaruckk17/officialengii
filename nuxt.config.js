
export default {
  generate:{
    fallback: true
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/home.vue')
      })
    }
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'EnGii',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name: 'description' ,content:'EnGiiはあなたのなりたい姿を実現する”きっかけ”を作ります。なりたい姿がある人はEnGiiにお任せください'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto',
    '~plugins/scroll.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['bootstrap-vue/nuxt'],
  /*
  ** Build configuration
  */
  build: {

    extend (config, ctx) {
      
    }
    
  }
}
