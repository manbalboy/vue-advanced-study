import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';



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
        component: NewsView,
      },

      {
        path: '/vue-newspage/ask',
        component: AskView,
      },

      {
        path: '/vue-newspage/jobs',
        component: JobsView,
      },

      {
        path: '/vue-newspage/item',
        component: ItemView,
      },

      {
        path: '/vue-newspage/user',
        component: UserView,
      }
    ]
  })