import { fetchNewsList, fetchAskList , fetchJobsList, fetchUserInfo } from '../api/index.js';
export default {
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
    },

    FETCH_USER ({commit}, sId) {
        fetchUserInfo(sId) 
        . then (({data}) => commit('SET_USER', data)) 
        . catch(err => console.log('err >>>>> ',  err ));
    }


}