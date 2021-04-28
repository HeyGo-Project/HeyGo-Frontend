import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'
import moment from 'moment'

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount("#app");




