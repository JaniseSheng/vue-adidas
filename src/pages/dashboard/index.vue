<template>
<div class="main-wrapper" id='fullpage'>
  <div class="section first-wrapper">
    <div class="title-icon" :class="{'bounceInLeft animated' :  isIconclass}">
      <img style="width: 100%" src="./dash_1.png" alt="">
    </div>
    <div class='bg-wrapper' :class="{'bounceInUp animated' :  isBgclass}">
      <img src="./text.png" alt="" style="position:absolute; width: 50%; left:0;right:0;bottom: 110px;margin:auto">
    </div>
    <div class='arrow-down' @click='hanldeClickToNext'>
      <svg class='fadeOutUp animated infinite' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37574"><path d="M190.124969 453.976492c-11.727581 11.608386-30.726058 11.608386-42.454663 0-11.711208-11.592013-11.727581-30.419823 0-42.029232L490.761412 72.244394c11.728605-11.608386 30.743455-11.608386 42.471036 0l343.090083 339.702865c11.728605 11.608386 11.728605 30.419823 0 42.029232-11.728605 11.608386-30.726058 11.608386-42.454663 0.016373L511.99693 144.184867 190.124969 453.976492z" p-id="37575"></path><path d="M190.124969 653.549853c-11.727581 11.608386-30.726058 11.608386-42.454663 0-11.711208-11.592013-11.727581-30.419823 0-42.029232l343.090083-339.702865c11.728605-11.608386 30.743455-11.608386 42.471036 0L876.321508 611.520621c11.728605 11.608386 11.728605 30.419823 0 42.029232-11.728605 11.608386-30.726058 11.608386-42.454663 0.016373L511.99693 343.758228 190.124969 653.549853z" p-id="37576"></path><path d="M190.124969 853.123214c-11.727581 11.608386-30.726058 11.608386-42.454663 0-11.711208-11.592013-11.727581-30.419823 0-42.029232l343.090083-339.702865c11.728605-11.608386 30.743455-11.608386 42.471036 0l343.090083 339.702865c11.728605 11.608386 11.728605 30.419823 0 42.029232-11.728605 11.608386-30.726058 11.608386-42.454663 0.016373L511.99693 543.331589 190.124969 853.123214z" p-id="37577"></path></svg>
    </div>
  </div>
  <div class="section menu-wrapper">
    <div class="close-menu" @click="handleClickBack">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2933"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM723.2 642.752c22.112 22.112 22.112 58.336 0 80.448s-58.336 22.112-80.448 0L512 592.448 381.248 723.2c-22.112 22.112-58.336 22.112-80.448 0s-22.112-58.336 0-80.448L431.552 512 300.8 381.248c-22.112-22.112-22.112-58.336 0-80.448s58.336-22.112 80.448 0L512 431.552 642.752 300.8c22.112-22.112 58.336-22.112 80.448 0s22.112 58.336 0 80.448L592.448 512 723.2 642.752z" p-id="2934"></path></svg>
    </div>
    <div class="menu-lists">
      <ul>
        <li data-index='one' @click='handleClickMenu(0)' :class="{'active': menuActive0, 'fadeInLeft animated' :  isMenuActive}">
          <div class="img-wrapper" style="left: -45%">
            <p></p>
            <img src="./menu0.png">
          </div>
          <span style="right: 40%"><img :src="require(menuActive0 ? './menu0c.png' : './menu0b.png')" style="vertical-align: middle; width: 90px"></span>
        </li>
        <li @click='handleClickMenu(1)' :class="{'active': menuActive1, 'fadeInRight animated' :  isMenuActive}">
          <div class="img-wrapper">
            <p></p>
            <img src="./menu1.png" alt="">
          </div>
          <span><img :src="require(menuActive1 ? './menu1c.png' : './menu1b.png')" style="vertical-align: middle; width: 90px"></span>
        </li>
        <li @click='handleClickMenu(2)' :class="{'active': menuActive2, 'fadeInLeft animated' :  isMenuActive}">
          <div class="img-wrapper" style="left: -40%">
            <p></p>
            <img src="./menu2.png" alt="">
          </div>
          <span style="right: 20%"><img :src="require(menuActive2 ? './menu2c.png' : './menu2b.png')" style="vertical-align: middle; width: 90px"></span>
        </li>
        <li @click='handleClickMenu(3)' :class="{'active': menuActive3, 'fadeInRight animated' :  isMenuActive}">
          <div class="img-wrapper">
            <p></p>
            <img src="./menu3.png" alt="">
          </div>
          <span style="left: 25%"><img :src="require(menuActive3 ? './menu3c.png' : './menu3b.png')" style="vertical-align: middle; width: 90px"></span>
        </li>
        <li @click='handleClickMenu(4)' :class="{'active': menuActive4, 'fadeInLeft animated' :  isMenuActive}">
          <div class="img-wrapper" style="left: -45%">
            <p></p>
            <img src="./menu4.png" alt="">
          </div>
          <span style="right: 0%; letter-spacing:0"><img :src="require(menuActive4 ? './menu4c.png' : './menu4b.png')" style="vertical-align: middle; width: 130px"></span>
        </li>
      </ul>
    </div>
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import wx from 'weixin-js-sdk'
import fullpage from 'fullpage.js'
import storage from '@/lib/storage';
import {
  visitCounts, questWechat
} from '@/api/index';
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      isBgclass: false,
      isIconclass: false,
      isMenuActive: false,
      menuActive0: false,
      menuActive1: false,
      menuActive2: false,
      menuActive3: false,
      menuActive4: false,
      localInfo: ''
    }
  },
  created(){
    for (let i = 0; i < 5; i++){
      if (storage.get(`detail${i}`)) {
        this.localInfo += `_detail${i}@${storage.get(`detail${i}`)}`
        this[`menuActive${i}`] = true
      }
    }
  },
  computed: {
  ...mapState({
    loginStatus: state => state.userInfo.loginStatus
  })
},
  mounted() {
    this.handleWechatShare()
    const that = this;
    $('#fullpage').fullpage({
      afterRender(event) {
        const pageindex = that.$route.query.page;
        if (pageindex) {
          $.fn.fullpage.moveTo(pageindex);
          that.isMenuActive = true;
          setTimeout(() => {
            that.isMenuActive = false
          }, 1000)
        } else {
          that.isIconclass = true
          setTimeout(() => {
            that.isIconclass = false
          }, 1000)
        }
      },
      onLeave(index, nextIndex, direction) {
        if (nextIndex == '1') {
          setTimeout(() => {
            that.isIconclass = true
            that.isBgclass = true
          }, 200)
          setTimeout(() => {
            that.isIconclass = false
            that.isBgclass = false
          }, 2000)
        } else {
          that.isMenuActive = true;
          setTimeout(() => {
            that.isMenuActive = false
          }, 1000)
        }
      }
    });
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
        const imgUrl = 'http://ultimate.obstm.com/upload/shareIcon.jpg'
        const _localInfo = that.localInfo.substring(1,that.localInfo.length);
        var link = `http://ultimate.obstm.com/?stroge=${_localInfo}`
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
    hanldeClickToNext(){
      $.fn.fullpage.moveTo(2);
    },
    handleClickMenu(item) {
      const detail = storage.get(`detail${item}`)
      if (this.$store.state.userInfo.isShare && !detail) {
          return
      }
      visitCounts(`menu${item}`).then(res => {
        console.log(res);
      })
      if (detail) {
        window.location.href = `http://ultimate.obstm.com/adidasShare?content=${item}_${detail.split('.')[0]}_${detail.split('.')[1]}`
        // this.$router.push({
        //   name: '3',
        //   query: {
        //     name: item,
        //     media: detail.split('.')[0],
        //     type: detail.split('.')[1]
        //   }
        // })
      } else {
        this.$router.push({
          name: '2',
          query: {
            name: item
          }
        })
      }
    },
    handleClickBack() {
      $.fn.fullpage.moveTo(1)
    }
  },
  destroyed() {
    $.fn.fullpage.destroy('all');
  }
}
</script>

<style lang='less' scoped>
@import "../../styles/color.less";
.first-wrapper {
    height: 100vh;
    z-index: 10;
    background-color: @bg-color;
}
.bg-wrapper {
    background-image: url("./bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}
.menu-wrapper {
    background-color: @bg-color;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
}
.menu-lists {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 10%;
    transform: rotate(25deg);
    color: white;
    ul {
        height: 100%;
        li {
            height: 20%;
            display: flex;
            position: relative;
            text-align: center;
            &[data-index='one'] {
                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -200%;
                    width: 400%;
                    height: 1px;
                    background-color: @text-color;
                }
            }
            &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: -200%;
                width: 400%;
                height: 1px;
                background-color: @text-color;
            }
            .img-wrapper {
              position: absolute;
              top: 1px;
              bottom: 0;
              width: 150%;
              p {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                background-color: fade(@bg-color, 70%);
              }
              img {
                height: 100%;
                max-width: none !important;
              }
            }
            span {
                align-self: center;
                line-height: calc(80vh / 5);
                letter-spacing: 3px;
                position: absolute;
                color: #d2d2d2;
                font-size: 1.1rem;
            }
            &.active {
              p {
                background-color: fade(@bg-color, 30%);
              }
              span {
                color: @primary-color;
              }
            }
        }
    }
}
.close-menu {
    position: absolute;
    top: 36px;
    right: 18px;
    width: 32px;
    svg {
        width: 100%;
        fill: @primary-color;
    }
}
.logo {
    position: absolute;
    bottom: 12px;
    left: 18px;
    width: 80px;
}
.title-icon {
    position: absolute;
    z-index: 100;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 100%;
    align-items: center;
}

.arrow-down {
    text-align: center;
    position: absolute;
    z-index: 2222;
    padding-bottom: 36px;
    bottom: 0;
    left: 0;
    right: 0;
    svg {
        height: 28px;
        animation-duration: 1.5s;
        fill: @primary-color;
    }
}
</style>
