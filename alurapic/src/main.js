import Vue from 'vue'
// @ts-ignore
import App from './App.vue'

import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
