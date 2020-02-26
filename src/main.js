import Vue from 'vue'
import store from './store'

import App from './App.vue'
import vuetify from './plugins/vuetify'

import './registerServiceWorker'

import './scss/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
