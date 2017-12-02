
'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import localStorage from '../localstorage/index.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      h1: null,
      drawer: true,
      managerBase: localStorage.get('managerBase'),
      permissionTree: localStorage.get('permissionTree')
    },

    actions: {},

    mutations: {
      'H1' (state, payload) {
        state.h1 = payload
      },
      'drawer' (state, payload) {
        state.drawer = payload
      },
      'managerBase' (state, payload) {
        state.managerBase = payload
      },
      'permissionTree' (state, payload) {
        state.permissionTree = payload
      }
    }
  })
}
