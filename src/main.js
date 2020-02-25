import Vue from 'vue'
import 'lib-flexible'
import router from './router'
import store from './store'
import waterfall from 'vue-waterfall2'
import * as API from "./api";

import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$API = API  //直接放到原型上 
Vue.use(waterfall)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
