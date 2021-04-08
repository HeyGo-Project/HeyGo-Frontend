import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
