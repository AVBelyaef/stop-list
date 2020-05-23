import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/phones',
  },
  {
    path: '/phones',
    name: 'Home',
    component: Home
  },
  {
    path: '/phones/new',
    name: 'NewPhone',
    component: () => import('../views/PhoneNew.vue')
  },
  {
    path: '/phones/:id/edit',
    name: 'Update',
    component: () => import( '../views/PhoneUpdate.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
