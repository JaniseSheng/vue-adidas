import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/pages/dashboard/index'
import distruction from '@/pages/distruction/index'
import detail from '@/pages/detail/index'
import showData from '@/pages/showData/index'

Vue.use(Router)

export default new Router({
   mode: 'history',
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
    },
    {
      path: '/detail/:name/:media/:type',
      name: '3',
      component: detail
    },
    {
      path: '/showData',
      name: '4',
      component: showData
    }
  ]
})
