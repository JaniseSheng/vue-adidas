<template>
<div class="detail-wrapper">
  <div class="shareArrow">
    <img src="./shareArrow.png" alt="">
  </div>

  <div class="media-wrapper">
    <video-player v-if="type == 'video'" id='janise' class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true">
    </video-player>
    <img v-if="type == 'img'" :src="media" alt="" style="width: 100%">
  </div>

  <div class="close-wrapper">
    <svg @click='handleClickBack' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2933"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM723.2 642.752c22.112 22.112 22.112 58.336 0 80.448s-58.336 22.112-80.448 0L512 592.448 381.248 723.2c-22.112 22.112-58.336 22.112-80.448 0s-22.112-58.336 0-80.448L431.552 512 300.8 381.248c-22.112-22.112-22.112-58.336 0-80.448s58.336-22.112 80.448 0L512 431.552 642.752 300.8c22.112-22.112 58.336-22.112 80.448 0s22.112 58.336 0 80.448L592.448 512 723.2 642.752z" p-id="2934"></path></svg>
  </div>

</div>
</template>

<script>
import wx from 'weixin-js-sdk'
import device from 'device.js'
import {
  visitCounts,
  questWechat
} from '@/api/index';
import {
  getFileName
} from '@/lib/jsFactory';
import storage from '@/lib/storage'
export default {
  data() {
    return {
      playerOptions: {
        language: 'en',
        controls: false,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: true,
        sources: [{
          type: 'video/mp4',
          src: ''
        }]
      },
      detail_index: 0,
      media: '',
      type: 'img'
    }
  },
  created() {
    //分享config
    this.wechartShareConfig();
    this.handleWechatShare();
    const data = this.$route.params;
    const _deltal = 'detail' + parseInt(data.name)
    // 统计浏览数
    visitCounts(_deltal).then(res => {
      console.log(res);
    })
    const storageItem = data.media + '.' + data.type
    storage.set(`detail${data.name}`, storageItem)
    this.detail_index = data.name
    this.media = './upload/' + data.media + '.' + data.type
    this.playerOptions.sources[0].src = this.media
    if (['mp4', 'mov'].indexOf(data.type) > -1) {
      this.type = 'video'
    } else {
      this.type = 'img'
    }
  },
  methods: {
    handleClickBack() {
      this.$router.push({
        name: '0',
        query: {
          page: 2
        }
      })
    },

    wechartShareConfig() {
      let url = ''
      if (device.ios()) {
        url = this.$store.state.userInfo.url.split('#')[0]
      } else {
        url = window.location.href.split('#')[0]
      }
      questWechat(url).then(res => {
        wx.config({
          debug: false,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['checkJsApi', 'onMenuShareTimeline',
            'onMenuShareAppMessage'
          ]
        })
      })
    },
    handleWechatShare() {
      url = window.location.href.split('#')[0]
      questWechat(url).then(res => {
        wx.config({
          debug: true,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['checkJsApi', 'onMenuShareTimeline',
            'onMenuShareAppMessage'
          ]
        })
      })
      wx.ready(function() {
        const imgUrl = 'http://ultimate.obstm.com/upload/AREA31502076803.jpg'
        var link = window.location.href

        wx.onMenuShareTimeline({
          title: '这是一个自定义的标题！',
          link: link,
          imgUrl: imgUrl, // 自定义图标
          trigger: function(res) {
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回.
            //alert('click shared');
          },
          success: function(res) {
            //alert('shared success');
            //some thing you should do
          },
          cancel: function(res) {
            //alert('shared cancle');
          },
          fail: function(res) {
            //alert(JSON.stringify(res));
          }
        });

        wx.onMenuShareAppMessage({
          title: '这是一个自定义的标题！', // 分享标题
          desc: '这是一个自定义的描述！', // 分享描述
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: imgUrl, // 自定义图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.detail-wrapper {
    height: 100vh;
    width: 100vw;
    background-color: black;
}
.media-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.shareArrow {
    position: absolute;
    right: 18px;
    top: 32px;
    img {
        height: 28px;
    }
}
.close-wrapper {
    position: absolute;
    bottom: 28px;
    left: 0;
    right: 0;
    text-align: center;
    svg {
        height: 28px;
        fill: white;
    }
}
</style>

<style lang="less">
.video-player-box {
    width: 100%;
    .video-js {
        width: 100% !important;
    }
    .vjs-big-play-button {
        display: none !important;
    }
}
</style>
