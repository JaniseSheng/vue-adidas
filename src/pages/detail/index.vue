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
    //分享
    this.handleWechatShare();
    const data = this.$route.query;
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
    handleWechatShare() {
      const url = window.location.href.split('#')
      questWechat(url).then(res => {
        wx.config({
          debug: false,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ'
          ]
        });
        const share_config = {
          imgUrl: 'http://event.obstm.com/upload/AREA31502076803.jpg', //分享图，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
          desc: '你对页面的描述', //摘要,如果分享到朋友圈的话，不显示摘要。
          title: '分享卡片的标题', //分享卡片标题
          link: url, //分享出去后的链接，这里可以将链接设置为另一个页面。
          success: function() { //分享成功后的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        }
        wx.onMenuShareAppMessage(share_config);
        wx.onMenuShareTimeline(share_config);
        wx.onMenuShareQQ(share_config);
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
