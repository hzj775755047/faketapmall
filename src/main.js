import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'
Vue.config.productionTip = false
Vue.prototype.$qs = qs

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
Vue.use(ElementUI);
