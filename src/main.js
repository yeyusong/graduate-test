import Vue from 'vue'
import App from './App'
import router from './router'


import {Swipe,SwipeItem,NoticeBar,Search,Card,Button,PullRefresh,Field} from 'vant'

Vue.config.productionTip = false



Vue.use(Swipe).use(SwipeItem).use(NoticeBar).use(Search).use(Card).use(Button).use(PullRefresh).use(Field)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
