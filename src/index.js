import Vue from 'vue'
import App from './App.vue'
import router from './router'

let vm = new Vue({
  el: "#app",
  router,
  render: h => h(App)
})

Vue.use({
  vm
})