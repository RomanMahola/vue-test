import Vue from 'vue';
import Vuex from 'vuex';
import recipes from './recipes';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        recipes
    },
    plugins: [createPersistedState()]
});