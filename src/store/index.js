import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutactions'
import actions from './actions'
import dispatch from './dispatch'


Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    dispatch
})