import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import Notifications from 'vue-notification'

import store from './store'

import router from "./router";


Vue.use(Notifications);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  Notifications,
  render: h => h(App)
}).$mount('#app')
