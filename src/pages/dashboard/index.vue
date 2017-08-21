<template>
<div class="main-wrapper" id='fullpage'>
  <div class="section first-wrapper">
    <div class="title-icon" :class="{'bounceInLeft animated' :  isIconclass}">
      <img style="width: 100%" src="./dash_1.png" alt="">
    </div>
    <div class='bg-wrapper' :class="{'bounceInUp animated' :  isBgclass}">

    </div>
    <div class='arrow-down' @click='hanldeClickToNext'>
      <svg class='fadeOutDown animated infinite' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3470"><path d="M512 870.4l-396.8-320-55.466667 68.266667L512 981.333333l456.533333-362.666667-51.2-68.266667L512 870.4zM512 614.4 115.2 294.4 59.733333 362.666667 512 725.333333l456.533333-362.666667-51.2-68.266667L512 614.4zM968.533333 106.666667l-51.2-68.266667L512 358.4 115.2 38.4 59.733333 106.666667 512 469.333333 968.533333 106.666667z" p-id="3471"></path></svg>
    </div>
  </div>
  <div class="section menu-wrapper">
    <div class="close-menu" @click="handleClickBack">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2933"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM723.2 642.752c22.112 22.112 22.112 58.336 0 80.448s-58.336 22.112-80.448 0L512 592.448 381.248 723.2c-22.112 22.112-58.336 22.112-80.448 0s-22.112-58.336 0-80.448L431.552 512 300.8 381.248c-22.112-22.112-22.112-58.336 0-80.448s58.336-22.112 80.448 0L512 431.552 642.752 300.8c22.112-22.112 58.336-22.112 80.448 0s22.112 58.336 0 80.448L592.448 512 723.2 642.752z" p-id="2934"></path></svg>
    </div>
    <div class="menu-lists">
      <ul>
        <li data-index='one' @click='handleClickMenu(0)'>
          <span>此处有雷</span>
        </li>
        <li @click='handleClickMenu(1)'>
          <span>城市滑行</span>
        </li>
        <li @click='handleClickMenu(2)'>
          <span>创意公园</span>
        </li>
        <li @click='handleClickMenu(3)'>
          <span>地下尬舞</span>
        </li>
        <li @click='handleClickMenu(4)'>
          <span>ULTIMATE大现身</span>
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
import {
  questWechat
} from '../../api/index';
import fullpage from 'fullpage.js'
export default {
  data() {
    return {
      isBgclass: false,
      isIconclass: false
    }
  },
  mounted() {
    const that = this;
    $('#fullpage').fullpage({
      afterRender(event) {
        const pageindex = that.$route.query.page;
        if (pageindex) {
          $.fn.fullpage.moveTo(pageindex);
        } else {
          that.isIconclass = true
          setTimeout(() => {
            that.isIconclass = false
          }, 1000)
        }
      },
      onLeave(index, nextIndex, direction) {
        console.log(nextIndex);
        if (nextIndex == '1') {
          setTimeout(() => {
            that.isIconclass = true
            that.isBgclass = true
          }, 200)
          setTimeout(() => {
            that.isIconclass = false
            that.isBgclass = false
          }, 2000)
        }
      }
    });

    questWechat(location.href.split('#')[0]).then(res => {
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: ['scanQRCode']
      });

      wx.ready(function() {
        wx.checkJsApi({
          jsApiList: ['chooseImage'],
          success: function(res) {
            alert(res.errMsg);
          }
        });
        wx.scanQRCode({
          needResult: 1,
          scanType: ['qrCode'],
          success: function(res) {
            this.wedata = res.resultStr
            alert(res.resultStr)
          }
        })
      });
    })

  },
  methods: {
    hanldeClickToNext(){
      $.fn.fullpage.moveTo(2);
    },
    handleClickMenu(item) {
      this.$router.push({
        name: '2',
        query: {
          name: item
        }
      })
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
            span {
                line-height: calc(100vh / 5);
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
    display: flex;
    height: 100%;
    align-items: center;
}

.arrow-down {
    text-align: center;
    position: absolute;
    z-index: 2222;
    bottom: 18px;
    left: 0;
    right: 0;
    height: 24px;

    svg {
        height: 100%;
        animation-duration: 1.5s;
        fill: @primary-color;
    }
}
</style>
