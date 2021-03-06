import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

