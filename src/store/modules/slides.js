import _ from 'lodash'
// import templates from '@/components/Templates'

const state = {
  // activeTpl: 'tpl-about',
  activeSlide: null,
  items: [],
}

const getters = {
  getSlideIndexById: (state) => (id) => {
    return state.items.findIndex(slide => slide.id === id)
  },
  getSlideById: (state, getters) => (id) => {
    const slideIndex = getters.getSlideIndexById(id)
    return state.items[slideIndex]
  },
}

const actions = {
  NEW_SLIDE ({ state, commit }, tpl) {
    // const tpl = templates[state.activeTpl]
    const slide = {
      id: Date.now(),
      data: _.cloneDeep(tpl.data),
      type: tpl.type,
    }

    // commit('PUT_SLIDE', slide)

    commit('PUSH_SLIDE', slide)
    commit('SET_ACTIVE_SLIDE', slide)
  },
  MOVE_SLIDE ({ commit, getters }, { id, index, offset }) {
    if (typeof index === 'undefined') {
      index = getters.getSlideIndexById(id) + offset
    }

    commit('PUT_SLIDE', {
      id,
      index,
    })
  },
  REMOVE_SLIDE ({ commit }, payload) {
    commit('REMOVE_SLIDE', payload)
  },
  UPDATE_SLIDE ({ commit, getters }, payload) {
    commit('UPDATE_SLIDE', payload)
  },
  // CHANGE_ACTIVE_TPL ({ commit }, payload) {
  //   commit('SET_ACTIVE_TPL', payload)
  // },
  CHANGE_ACTIVE_SLIDE ({ commit }, payload) {
    commit('SET_ACTIVE_SLIDE', payload)
  },
}

const mutations = {
  SET_SLIDES (state, slides) {
    state.items = slides
  },
  PUSH_SLIDE (state, slide) {
    state.items.push(slide)
  },
  PUT_SLIDE (state, { index = state.items.length + 1, ...slide }) {
    state.items.splice(index, 0, slide)

    // const oldIndex = state.items.findIndex(item => item.id === slide.id)
    // if (oldIndex < 0) {
    //   state.items.splice(index, 0, slide)
    // } else {
    //   state.items.splice(index, 0, state.items.splice(oldIndex, 1)[0])
    // }
  },
  UPDATE_SLIDE (state, { id, ...slide }) {
    const index = state.items.findIndex(item => item.id === id)
    if (index !== -1) {
      state.items.splice(index, 1, Object.assign({}, state.items[index], slide))
    }
  },
  REMOVE_SLIDE (state, { id }) {
    state.items = state.items.filter(item => item.id !== id)
  },
  // SET_ACTIVE_TPL (state, type) {
  //   state.activeTpl = type
  // },
  SET_ACTIVE_SLIDE (state, type) {
    state.activeSlide = type
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
