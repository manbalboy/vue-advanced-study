import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        news : []
    },

    actions : {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(err => console.log('str  >>>>> ', err));
        }
    },

    mutations : {
        SET_NEWS(state, oData) {
            state.news = oData;
        }
    }
});