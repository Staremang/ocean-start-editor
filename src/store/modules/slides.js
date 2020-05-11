// import _ from 'lodash'
// import api from '../../api'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
// import templates from '@/components/Templates'

const pageData = window.pageData || {}

// const types = {
//   REMOVE_SLIDE: 'REMOVE_SLIDE',
//   UPDATE_SLIDE: 'UPDATE_SLIDE',
// }

// Project
const state = {
  id: pageData.id || 0,
  title: pageData.pagetitle || 'Title 1',
  activeSlide: null,
  saveStatus: null,
  isSaved: false,
  isEditable: !!pageData.isAdmin,
  isPreview: !pageData.isAdmin,
  items: pageData.data || []
}

const getters = {
  getSlideIndexById: (state) => (id) => {
    return state.items.findIndex(slide => slide.id === id)
  },
  getSlideById: (state, getters) => (id) => {
    const slideIndex = getters.getSlideIndexById(id)
    return state.items[slideIndex]
  }
}

// function checkStatus (response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response
//   } else {
//     const error = new Error(response.statusText)
//     error.response = response
//     throw error
//   }
// }

const actions = {
  async GET_PROJECT ({ state, commit, dispatch }) {
    try {
      const { data } = await axios.get(`/api/project/${state.id}`)

      if (typeof data.data === 'string') {
        data.data = JSON.parse(data.data)
      }

      if (Array.isArray(data.data)) {
        commit('SET_SLIDES', data.data)
      }
    } catch (error) {
      if (error.response) {
        const {
          errors = 'Неизвестная ошибка'
        } = error.response.data

        dispatch('SET_ERRORS', errors)
      } else {
        dispatch('SET_ERRORS', error.message)
      }

      console.error(error)
    }
  },
  async SAVE_PROJECT ({ state, commit, dispatch }) {
    commit('SET_SAVE_STATUS', 'loading')

    try {
      const formData = new FormData()
      formData.append('data', JSON.stringify(state.items))

      await axios.post(`/api/project/${state.id}`, formData)

      commit('SET_SAVED', true)
    } catch (error) {
      if (error.response) {
        const {
          errors = 'Неизвестная ошибка'
        } = error.response.data

        dispatch('SET_ERRORS', errors)
      } else {
        dispatch('SET_ERRORS', error.message)
      }

      console.error(error)
    }

    commit('SET_SAVE_STATUS', null)
  },
  SET_ERRORS ({ state, commit }, errors) {
    if (Array.isArray(errors)) {
      alert(errors.join(', '))
    } else {
      alert(errors)
    }
  },
  NEW_SLIDE ({ state, commit }, tpl) {
    const slide = {
      id: uuidv4(),
      type: tpl.type
    }

    commit('PUT_SLIDE', slide)
    commit('SET_SAVED', false)
  },
  REMOVE_SLIDE ({ commit }, payload) {
    commit('REMOVE_SLIDE', payload)
    commit('SET_SAVED', false)
  },
  UPDATE_SLIDE ({ commit, getters }, payload) {
    commit('UPDATE_SLIDE', payload)
    commit('SET_SAVED', false)
  },
  // CHANGE_ACTIVE_TPL ({ commit }, payload) {
  //   commit('SET_ACTIVE_TPL', payload)
  // },
  CHANGE_ACTIVE_SLIDE ({ commit }, payload) {
    commit('SET_ACTIVE_SLIDE', payload)
  },
  CHANGE_EDITABLE ({ commit }, payload) {
    commit('SET_EDITABLE', payload)
  },
  CHANGE_PREVIEW ({ commit }, payload) {
    commit('SET_PREVIEW', payload)
  }
}

const mutations = {
  SET_SLIDES (state, slides) {
    state.items = slides
  },
  PUT_SLIDE (state, { index = state.items.length + 1, ...slide }) {
    state.items.splice(index, 0, slide)
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
  SET_EDITABLE (state, type) {
    state.isEditable = type
  },
  SET_PREVIEW (state, type) {
    state.isPreview = type
  },
  SET_SAVED (state, type) {
    state.isSaved = type
  },
  SET_SAVE_STATUS (state, type) {
    state.saveStatus = type
  },
  SET_ERRORS (state, type) {
    state.errors = type
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
