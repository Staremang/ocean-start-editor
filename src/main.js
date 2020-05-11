import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import './registerServiceWorker'

import './scss/main.scss'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.performance = true

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
