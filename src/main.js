// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storage from '@/lib/storage';
import store from './vuex/store'
import '@/styles/global.less'
import '~/fullpage.js/dist/jquery.fullpage.min.css'
import '~/video.js/dist/video-js.css'
import '~/vue-video-player/src/custom-theme.css'

import VueVideoPlayer from 'vue-video-player'

Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  //document.title = to.meta.title
  // 处理jssdk签名,兼容history模式
  if (!store.state.userInfo.url) {
   store.dispatch('setUrl', document.URL)
  }
  const query = to.query
  if (query.stroge) {
    const strogeArr = query.stroge.split('_')
    strogeArr.forEach((item)=> {
      const _item = item.split('@')
      storage.set(_item[0], _item[1])
    })
    delete query['stroge']
  }
  if (query.from) {
    if (to.path == '/' && from.path == '/') {
      store.dispatch('markShare', true)
    } else {
      store.dispatch('markShare', false)
    }
    delete query['from']
    delete query['isappinstalled']
    next({
      name: '0',
      query
    })
  }
  next();
})

/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
      App
    }
  })
