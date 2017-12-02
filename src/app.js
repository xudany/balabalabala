
'use strict'

// Polyfills for IE Support
import 'babel-polyfill'
import 'event-source-polyfill'
import Vue from 'vue'
// import AMap from 'vue-amap'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
// import Buildfilters from './filters'
// import config from './config'
// import BuildGlobalVueComponents from './components/global/index.js'

import { createStore } from './store/index'
import { createRouter } from './router/index'
import { sync } from 'vuex-router-sync'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

Vue.use(ElementUI)

// doc: https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
Vue.use(VueResource)

// doc: https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install
// Vue.use(AMap)

// Set global filters
// Buildfilters(Vue)

// build global vue components
// BuildGlobalVueComponents(Vue)

// configure Global Vue-resource
// doc: https://github.com/pagekit/vue-resource/blob/develop/docs/config.md
// ConfigurateHttpService(Vue)

// // 初始化vue-amap
// AMap.initAMapApiLoader({
//   // 高德的key
//   key: config.AMAP_KEY,
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// })

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp (ssrContext) {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
