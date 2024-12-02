import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import Web3 from 'web3';
Vue.config.productionTip = false
Vue.use(ElementUI);
if (typeof window.ethereum !== 'undefined') {


  window.web3 = new Web3(window.ethereum);


  try {


    // Request account access if needed


    window.ethereum.enable();


  } catch (error) {


    console.error("User denied account access");


  }


} else if (typeof window.web3 !== 'undefined') {


  window.web3 = new Web3(window.web3.currentProvider);


} else {


  // Fallback to localhost; use dev console port by default...


  window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));


}




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
