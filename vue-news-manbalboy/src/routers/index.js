import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

//HOC
// import CreateListView from '../views/CreateListView.js';


import bus from '../utils/bus.js';
import { store } from '../store/index.js';



Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    base : process.env.NODE_ENV == 'production' ? process.env.VUE_APP_BASE_URL : "",
    routes: [
        {
            path: '/',
            redirect: '/news' 
        },

        {
            path: '/news',
            name : 'news',
            // component: CreateListView('NewsView'),
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                // setTimeout(()=> {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(error => {
                        console.log(error);
                        bus.$emit('end:spinner');
                    });
                // }, 3000)
            }
        },

        {
            path: '/ask',
            name : 'ask',
            // component: CreateListView('AskView'),
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                // setTimeout(()=> {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(error => {
                        console.log(error);
                        bus.$emit('end:spinner');
                    });
                // }, 3000)
            }
        },

        {
            path: '/jobs',
            name : 'jobs',
            // component: CreateListView('JobsView'),
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                // setTimeout(()=> {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(error => {
                        console.log(error);
                        bus.$emit('end:spinner');
                    });
                // }, 3000)
            }
        },

        {
            path: '/item/:id',
            component: ItemView,
        },

        {
            path: '/user/:id',
            component: UserView,
        }
        ]
    })