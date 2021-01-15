import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: createEl => createEl(App),
  router,
  store,
}).$mount('#app')
