// const pkg = require('./package')


// module.exports = {
//   mode: 'universal',
//   axios: {
//     // proxyHeaders: false
//   },

//   /*
//   ** Headers of the page
//   */
//   head: {
//     title: pkg.name,
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: pkg.description }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   /*
//   ** Customize the progress-bar color
//   */
//   loading: { color: '#fff' },

//   /*
//   ** Global CSS
//   */
//   css: [
//     'ant-design-vue/dist/antd.css',
//     'assets/main.css'
//   ],

//   /*
//   ** Plugins to load before mounting the App
//   */
//   plugins: [
//     '@/plugins/antd-ui',
//     // '@/plugins/vue-notifications',
//     // '~/plugins/vue-inject.js'
//     { src: '~/plugins/vue-inject', ssr: false }
//     // { src: '~/plugins/vue-notifications', mode: 'client' }vue-notifications.client
    
//   ],

//   /*
//   ** Nuxt.js modules
//   */
//  modules: [
//   // Simple usage
//   '~/modules/loadConfig',
//   '~/modules/simple',
//   '@nuxtjs/axios',
//   '@nuxtjs/auth'

//   // Passing options
//   // ['~/modules/simple', { token: '123' }]
// ],

//   /*
//   ** Build configuration
//   */
//   build: {
//     /*
//     ** You can extend webpack config here
//     */
//     extend(config, ctx) {
//     }
//   },
//   router: {
//     middleware: 'stats',
//     extendRoutes(routes, resolve) {
//       const indexIndex = routes.findIndex(route => route.name === 'name');
//       let index = routes[indexIndex].children.findIndex(route => route.name === 'name-child-id');
//       routes[indexIndex].children[index] = {
//         ...routes[indexIndex].children[index],
//         components: {
//           default: routes[indexIndex].children[index].component,
//           left: resolve(__dirname, 'components/childLeft.vue')
//         },
//         chunkNames: {
//           left: 'components/childLeft'
//         }
//       }

//       index = routes.findIndex(route => route.name === 'main')
      
//       routes[index] = {
//         ...routes[index],
//         components: {
//           default: routes[index].component,
//           top: resolve(__dirname, 'components/mainTop.vue')
//         },
//         chunkNames: {
//           top: 'components/mainTop'
//         }
//       }
//     }
//   }
// }

import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  // Type or Press `Ctrl + Space` for autocompletion
  mode: 'universal',
}

export default config
