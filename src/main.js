import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import "./assets/styles/main.css";
import VueNoty from './plugins/noty';
import store from './store/store'
import router from "./router";


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  VueNoty,
  render: h => h(App)
}).$mount('#app')
