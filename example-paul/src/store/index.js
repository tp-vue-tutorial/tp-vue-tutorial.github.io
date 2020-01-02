import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--
      }
    },
    reset(state) {
      state.counter = 0
    }
  },
  actions: {},
  modules: {}
})
