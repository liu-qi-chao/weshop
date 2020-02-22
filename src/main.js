import Vue from 'vue'
import 'lib-flexible'
import router from './router'
import store from './store'
import * as API from "./api";

import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$API = API  //直接放到原型上 

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
