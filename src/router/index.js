import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/pages/dashboard/index'
import distruction from '@/pages/distruction/index'

Vue.use(Router)

export default new Router({
  routes: [

    /**
    * dashboard
    **/
    {
      path: '/',
      name: '0',
      component: dashboard
    },
    {
      path: '/distruction',
      name: '2',
      component: distruction
    }
  ]
})
