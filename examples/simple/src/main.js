import Vue from 'vue'
import Ripple from 'vue-material-design-ripple';
import 'vue-material-design-ripple/dist/vue-material-design-ripple.css';
import App from './App.vue'

Vue.directive('ripple', Ripple);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
