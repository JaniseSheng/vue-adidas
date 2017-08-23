// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storage from '@/lib/storage';
import '@/styles/global.less'
import '~/fullpage.js/dist/jquery.fullpage.min.css'
import '~/video.js/dist/video-js.css'
import '~/vue-video-player/src/custom-theme.css'

import VueVideoPlayer from 'vue-video-player'

Vue.use(VueVideoPlayer)
Vue.config.productionTip = false
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App
    }
  })
