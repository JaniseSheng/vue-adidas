<template>
<div class="main-wrapper">
  <img class='logo-title' src="../../assets/logo.png" :class="{'bounceInUp animated' :  animate1}">
  <div class="close-menu" @click='handleClickBack'>
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11456"><path d="M512.008698 63.575967c-247.689219 0-448.459848 200.771653-448.459848 448.440405 0 247.669776 200.77063 448.441429 448.459848 448.441429 247.650333 0 448.441429-200.77063 448.441429-448.441429C960.449104 264.346597 759.658008 63.575967 512.008698 63.575967zM695.461917 715.852828 328.53706 715.852828c-33.760918 0-61.151755-6.997368-61.151755-40.767496 0-33.781384 27.390837-40.767496 61.151755-40.767496l366.924857 0c33.780361 0 61.150732 6.986111 61.150732 40.767496C756.612649 708.85546 729.242278 715.852828 695.461917 715.852828zM695.461917 552.783869 328.53706 552.783869c-33.760918 0-61.151755-7.006578-61.151755-40.767496 0-33.780361 27.390837-40.766472 61.151755-40.766472l366.924857 0c33.780361 0 61.150732 6.986111 61.150732 40.766472C756.612649 545.777291 729.242278 552.783869 695.461917 552.783869zM695.461917 389.714909 328.53706 389.714909c-33.760918 0-61.151755-6.997368-61.151755-40.767496 0-33.780361 27.390837-40.766472 61.151755-40.766472l366.924857 0c33.780361 0 61.150732 6.987135 61.150732 40.766472C756.612649 382.717542 729.242278 389.714909 695.461917 389.714909z" p-id="11457"></path></svg>
  </div>
  <div class="distruction-wrapper">
    <img :src="require('./2-' + dis_index + '.png')" alt="" :class="{'bounceInUp animated' :  animate1}">
    <div class="text-wrapper" :class="'info-wrapper' + dis_index">
      <p v-if='dis_index != 0' class='info-1' :class="{'fadeInLeft animated' :  animate2}"><span><img style='width: 45%' :src="require('./2345Word1.png')" alt=""></span></p>
      <p v-if='texts[dis_index].summary' class='info-2' :class="{'fadeInRight animated' :  animate3}">
        <img style='width: 80%' :src="require('./' + texts[dis_index].summary)" alt="">
      </p>
      <p class='info-3' :class="{'fadeInLeft animated' :  animate4}">
        <img v-if='dis_index == 0' style="width:70%" :src="require('./' + texts[dis_index].label)" alt="">
        <img v-else style="width:80%" :src="require('./' + texts[dis_index].label)" alt="">
      </p>
    </div>
    <div class="button-wrapper" :class="{'bounceInUp animated' :  animate5}">
      <p @click='handleScranQrcode' style="display: inline-block">
        <img style='width: 45%' src="./sacnBtn.png" alt="">
      </p>
    </div>
  </div>
</div>
</template>

<script>
import wx from 'weixin-js-sdk'
import device from 'device.js'
import storage from '@/lib/storage'
import {
  questWechat
} from '../../api/index';
import {
  getFileName
} from '@/lib/jsFactory';
export default {
  data() {
    return {
      animate1: false,
      animate2: false,
      animate3: false,
      animate4: false,
      animate5: false,
      dis_index: 0,
      localInfo: '',
      texts: [{
        label: '1Word.png'
      }, {
        summary: '2Word2.png',
        label: '2Word3.png'
      }, {
        summary: '3Word2.png',
        label: '3Word3.png'
      }, {
        summary: '4Word2.png',
        label: '4Word3.png'
      }, {
        summary: '5Word2.png',
        label: '5Word3.png'
      }]
    }
  },
  created() {
    for (let i = 0; i < 5; i++){
      if (storage.get(`detail${i}`)) {
        this.localInfo += `_detail${i}@${storage.get(`detail${i}`)}`
      }
    }
    this.handleWechatShare()
    this.animate1 = true;
    this.animate2 = true;
    this.animate3 = true;
    this.animate4 = true;
    setTimeout(() => {
      this.animate5 = true;
    }, 500)
    const data = this.$route.query;
    this.dis_index = data.name
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
        jsApiList: ['scanQRCode']
      })
    })
  },
  methods: {
    handleWechatShare() {
      const that = this
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
      wx.ready(function() {
        const imgUrl = 'http://event.obstm.com/upload/shareIcon.jpg'
        const _localInfo = that.localInfo.substring(1,that.localInfo.length);
        var link = `http://event.obstm.com/?stroge=${_localInfo}`
        wx.onMenuShareTimeline({
          title: 'This is ULTIMATE', //分享卡片标题
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
          desc: 'adidas neo首度空降YOHOOD,扫码获得自己的酷玩瞬间', //摘要,如果分享到朋友圈的话，不显示摘要。
          title: 'This is ULTIMATE', //分享卡片标题
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
    },
    handleClickBack() {
      this.$router.push({
        name: '0',
        query: {
          page: 2
        }
      })
    },
    handleScranQrcode() {
      const that = this;
      wx.scanQRCode({
        needResult: 1,
        scanType: ['qrCode'],
        success: function(resqr) {
          const item = resqr.resultStr.split('.')
          if (['mp4', 'MP4', 'mov', 'gif', 'jpg', 'png', 'jpeg'].indexOf(item[item.length - 1]) > -1) {
            window.location.href = `http://event.obstm.com/adidasShare?content=${that.dis_index}_${item[0]}_${item[1]}`
            // that.$router.push({
            //   name: '3',
            //   params: {
            //     name: that.dis_index,
            //     media: item[0],
            //     type: item[1]
            //   }
            // })
          } else {
            that.$router.push({
              name: '0',
              query: {
                page: 2
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/color.less";
.main-wrapper {
    background-image: url("./2-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    z-index: 10;
}
.distruction-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    img {
        width: 100%;
        align-self: center;
    }
}
.button-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 36px;
    height: 80px;
    .button {
        border: 1px solid @text-color;
        width: 120px;
        border-radius: 38px;
        color: @text-color;
    }
}
.text-wrapper {
    position: absolute;
    padding: 12px 36px;
    color: @text-color;
    bottom: 110px;
    left: 0;
    right: 0;
}
.logo-title {
  position: fixed;
  z-index: 10;
  top: 36px;
  left: 18px;
  width: 30%;
  }
.close-menu {
    position: fixed;
    z-index: 10;
    top: 36px;
    right: 18px;
    width: 32px;
    svg {
        width: 100%;
        fill: @primary-color;
    }
}
.info-wrapper0 {
    text-align: center;

}

.info-1 {
    color: @primary-color;
    span {
        font-weight: bold;
        margin-right: 6px;
    }
}
.info-2 {
    font-size: 2rem;
    letter-spacing: 10px;
    margin: 8px 0 14px;
}
.info-3 {
    line-height: 1.6;
}
</style>
