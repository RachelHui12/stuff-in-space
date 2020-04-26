/*
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:11:54
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 15:26:48
 */
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
