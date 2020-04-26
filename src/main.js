/*
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:11:54
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 19:48:44
 */
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCesium from 'vue-cesium';
import VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.use(VueCesium)
Vue.use(VCharts)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
