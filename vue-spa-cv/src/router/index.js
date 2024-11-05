// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import QuemSouEu from '@/components/QuemSouEu.vue';
import OQueFaco from '@/components/OQueFaco.vue';
import Hobbies from '@/components/Hobbies.vue';

const routes = [
  { path: '/', component: QuemSouEu },
  { path: '/o-que-faco', component: OQueFaco },
  { path: '/hobbies', component: Hobbies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

