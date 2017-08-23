<template>
<div class="main-wrapper">
  <div class="close-menu" @click='handleClickBack'>
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11456"><path d="M512.008698 63.575967c-247.689219 0-448.459848 200.771653-448.459848 448.440405 0 247.669776 200.77063 448.441429 448.459848 448.441429 247.650333 0 448.441429-200.77063 448.441429-448.441429C960.449104 264.346597 759.658008 63.575967 512.008698 63.575967zM695.461917 715.852828 328.53706 715.852828c-33.760918 0-61.151755-6.997368-61.151755-40.767496 0-33.781384 27.390837-40.767496 61.151755-40.767496l366.924857 0c33.780361 0 61.150732 6.986111 61.150732 40.767496C756.612649 708.85546 729.242278 715.852828 695.461917 715.852828zM695.461917 552.783869 328.53706 552.783869c-33.760918 0-61.151755-7.006578-61.151755-40.767496 0-33.780361 27.390837-40.766472 61.151755-40.766472l366.924857 0c33.780361 0 61.150732 6.986111 61.150732 40.766472C756.612649 545.777291 729.242278 552.783869 695.461917 552.783869zM695.461917 389.714909 328.53706 389.714909c-33.760918 0-61.151755-6.997368-61.151755-40.767496 0-33.780361 27.390837-40.766472 61.151755-40.766472l366.924857 0c33.780361 0 61.150732 6.987135 61.150732 40.766472C756.612649 382.717542 729.242278 389.714909 695.461917 389.714909z" p-id="11457"></path></svg>
  </div>
  <div class="distruction-wrapper">
    <img :src="require('./2-' + dis_index + '.png')" alt="" :class="{'bounceInUp animated' :  animate1}">
    <div class="text-wrapper" :class="'info-wrapper' + dis_index">
      <p v-if='dis_index != 0' class='info-1' :class="{'fadeInLeft animated' :  animate2}"><span>#CLOUDFOAM</span>ULTIMATE</p>
      <p v-if='texts[dis_index].summary' class='info-2' v-html='texts[dis_index].summary' :class="{'fadeInRight animated' :  animate3}"></p>
      <p class='info-3' v-html='texts[dis_index].label' :class="{'fadeInLeft animated' :  animate4}"></p>
    </div>
    <div class="button-wrapper" :class="{'bounceInUp animated' :  animate5}">
      <button type="button" class='button' @click='handleScranQrcode'><span>> 立即扫码</span></button>
    </div>
  </div>
</div>
</template>

<script>
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
      texts: [{
        label: '故障？艺术！不爱循规蹈矩 就爱生来好动</br>每个Moment都这么酷'
      }, {
        summary: '城 市 滑 行',
        label: '跳上滑板，闯入城市街头，</br>在喧闹中滑行穿梭。'
      }, {
        summary: '创 意 公 园',
        label: '才不是乱涂瞎画，城市街道那么多，</br>每面墙都替我表达。'
      }, {
        summary: '地 下 尬 舞',
        label: '蠢蠢欲动，在街头尬舞， </br>我和我的影子最潮。'
      }, {
        summary: "<span style='letter-spacing: normal; margin-right:6px'>ULTIMATE</span>大现身",
        label: 'Ultimate大揭, 在城市里找到更酷的自我，</br>终极奥义竟是它。'
      }]
    }
  },
  created() {
    this.animate1 = true;
    this.animate2 = true;
    this.animate3 = true;
    this.animate4 = true;
    setTimeout(() => {
      this.animate5 = true;
    }, 500)
    const data = this.$route.query;
    this.dis_index = data.name
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
    handleScranQrcode() {
      const that = this;
      questWechat(window.location.href.split('#')[0]).then(res => {
        wx.config({
          debug: false,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['scanQRCode']
        });
        wx.ready(function () {
          wx.scanQRCode({
            needResult: 1,
            scanType: ['qrCode'],
            success: function(resqr) {
              const item = resqr.resultStr.split('.')
              if (['mp4', 'MP4', 'mov', 'jpg', 'png', 'jpeg'].indexOf(item[item.length - 1]) > -1) {
                window.location.href = `http://event.obstm.com/adidasShare?name=${that.dis_index}&media=${item[0]}&type=${item[1]}`
                // that.$router.push({
                //   name: '3',
                //   query: {
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
        })
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
    padding: 12px 18px;
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
    padding: 12px 18px;
    color: @text-color;
    bottom: 110px;
    left: 0;
    right: 0;
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
