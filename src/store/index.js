import Vue from 'vue';
import Vuex from 'vuex';
import phones from './phones';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    phones,
  }
});
