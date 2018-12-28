import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    showTabBar:true
};

export default new Vuex.Store({
    state
})