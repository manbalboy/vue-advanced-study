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
    routes: [
        {
            path: '/vue-newspage',
            redirect: '/vue-newspage/news' 
        },

        {
            path: '/vue-newspage/news',
            name : 'news',
            // component: CreateListView('NewsView'),
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                // setTimeout(()=> {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
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
            path: '/vue-newspage/ask',
            name : 'ask',
            // component: CreateListView('AskView'),
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                // setTimeout(()=> {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
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
            path: '/vue-newspage/jobs',
            name : 'jobs',
            // component: CreateListView('JobsView'),
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                // setTimeout(()=> {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
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
            path: '/vue-newspage/item/:id',
            component: ItemView,
        },

        {
            path: '/vue-newspage/user/:id',
            component: UserView,
        }
        ]
    })