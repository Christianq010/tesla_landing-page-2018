import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Flag Icons 
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

new Vue({
  render: h => h(App)
}).$mount('#app')
