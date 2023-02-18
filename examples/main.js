import Vue from 'vue'
import App from './App.vue'

import '../packages/css/Demo.scss';
import '../packages/css/Card.scss';
// import Demo from '../packages/Demo/index';
// import Card from '../packages/Card/index';
// Vue.use(Demo);  //调用的是 Demo.install  ->Vue.component();
// Vue.use(Card);

import res from '../packages/index-res';
Vue.use(res)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
