import Vue from 'vue'
import Router from 'vue-router'
import SaintsWin from '@/components/SaintsWin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SaintsWin',
      component: SaintsWin
    }
  ]
})
