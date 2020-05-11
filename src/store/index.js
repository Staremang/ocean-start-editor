import Vue from 'vue'
import Vuex from 'vuex'

import slides from './modules/slides'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    slides,
    app
  }
})
