import { fetchNewsList, fetchAskList , fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList} from '../api/index.js';
export default {
    async FETCH_NEWS(context) {
        try{
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        } catch(err) {
            console.log('FETCH_NEWS >>>>> ',  err )
            context.commit('SET_NEWS', []);
        }
    },

    async FETCH_ASK (context) {
        try{
            const response = await fetchAskList();
            context.commit('SET_ASK', response.data);
            return response;
        } catch(err) {
            console.log('FETCH_ASK >>>>> ',  err );
            context.commit('FETCH_ASK', []);
        }
    },

    async FETCH_JOBS ({commit}) {
        try{
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch(err) {
            console.log('FETCH_JOBS >>>>> ',  err );
            commit('SET_JOBS', []);
        }
    },

    async FETCH_USER ({commit}, sId) {
        try{
            const response = await fetchUserInfo(sId);
            commit('SET_USER', response.data);
            return response;
        } catch(err) {
            console.log('FETCH_USER >>>>> ',  err );
        }
       
    },

    async FETCH_ITEM ({commit}, sId) {
        try{
            const response = await fetchItemInfo(sId); 
            commit('SET_ITEM', response.data);
            return response;
        } catch(err) {
            console.log('FETCH_ITEM >>>>> ',  err );
        }
        
    },

    async FETCH_LIST ({commit}, pageName) {
        try{
            const response = await fetchList(pageName)
            commit('SET_LIST', response.data);
            return response;
        } catch(err) {
            commit('SET_LIST', []);
        }
    }


}