// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import apiHelpers from './axios/apiHelpers'
import * as filters from './filters'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$http = apiHelpers;

//集成vue过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
