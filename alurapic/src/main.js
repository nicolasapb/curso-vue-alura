import Vue from 'vue'
// @ts-ignore
import App from './App.vue'

import VueResource from 'vue-resource';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueRouter from 'vue-router';
import { routes } from './routes';

library.add(faSearch);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
