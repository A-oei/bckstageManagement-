import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import {state} from './state'
import {mutations} from './mutations'

console.log(state);
export default new Vuex.Store({
    state,
    mutations
})

