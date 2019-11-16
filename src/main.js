import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueProgressiveImage from './plugins/vue-progressive-image';
import "vuetify/dist/vuetify.min.css";
import store from './store'

import router from "./router";

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueProgressiveImage,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
