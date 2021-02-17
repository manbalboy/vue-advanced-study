import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';
import { fetchAskList } from '../api/index.js';
import { fetchJobsList } from '../api/index.js';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        news : [],
        ask : [],
        jobs : []
    },

    actions : {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(err => console.log('str  >>>>> ', err));
        },

        FETCH_ASK (context) {
            fetchAskList()
            .then(response => context.commit('SET_ASK', response.data))
            .catch(err=>console.log('err >>>>> ', err));
        },

        FETCH_JOBS ({commit}) {
            fetchJobsList() 
            . then (({data}) => commit('SET_JOBS', data)) 
            . catch(err => console.log('err >>>>> ',  err ));
        }
    },

    mutations : {
        SET_NEWS(state, oData) {
            state.news = oData;
        },

        SET_ASK (state, oData) {
            state.ask = oData;
        },

        SET_JOBS (state, oData) {
            state.jobs = oData
        }

    }
});