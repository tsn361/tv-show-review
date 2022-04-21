import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from 'axios'
import VueAxios from 'vue-axios'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
