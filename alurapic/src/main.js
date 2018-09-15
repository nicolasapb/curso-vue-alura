import Vue from 'vue'
// @ts-ignore
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
