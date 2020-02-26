import Vue from 'vue'
import Vuex from 'vuex'

import slides from './modules/slides'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    slides
  }
})
