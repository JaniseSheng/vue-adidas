<template>
  <div class="main-wrapper">
    <div class="close-menu" @click='handleClickBack'>
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2933"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM723.2 642.752c22.112 22.112 22.112 58.336 0 80.448s-58.336 22.112-80.448 0L512 592.448 381.248 723.2c-22.112 22.112-58.336 22.112-80.448 0s-22.112-58.336 0-80.448L431.552 512 300.8 381.248c-22.112-22.112-22.112-58.336 0-80.448s58.336-22.112 80.448 0L512 431.552 642.752 300.8c22.112-22.112 58.336-22.112 80.448 0s22.112 58.336 0 80.448L592.448 512 723.2 642.752z" p-id="2934"></path></svg>
    </div>
    <div class="distruction-wrapper" :style="{'background-image':'url('+ require('./2-' + dis_index + '.png') +')'}">
      <div class="text-wrapper">
        <p v-if='texts[dis_index].title'>{{texts[dis_index].title}}</p>
        <p v-if='texts[dis_index].summary'>{{texts[dis_index].summary}}</p>
        <p>{{texts[dis_index].label}}</p>
      </div>
      <div class="button-wrapper">
        <button type="button" class='button'><span>> 立即扫码</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next((vm)=>{
      vm.dis_index = to.query.name;
    });
},
  data(){
    return {
      dis_index: 0,
      texts: [
        {
          label: '故障？艺术！不爱循规蹈矩 就爱生来好动</br>每个Moment都这么酷'
        }, {
          title: '#CLOUDFOAM ULTIMATE',
          summary: '城 市 滑 行',
          label: '跳上滑板，闯入城市街头，</br>在喧闹中滑行穿梭。'
        }, {
          title: '#CLOUDFOAM ULTIMATE',
          summary: '创 意 公 园',
          label: '才不是乱涂瞎画，城市街道那么多，</br>每面墙都替我表达。'
        }, {
          title: '#CLOUDFOAM ULTIMATE',
          summary: '地 下 尬 舞',
          label: '蠢蠢欲动，在街头尬舞， </br>我和我的影子最潮。'
        }, {
          title: '#CLOUDFOAM ULTIMATE',
          summary: 'ULTIMATE 大 现 身',
          label: 'Ultimate大揭, 在城市里找到更酷的自我，</br>终极奥义竟是它。'
        }
      ]
    }
  },
  methods: {
    handleClickBack(){
      this.$router.push({
        name: '0',
        query: {
          page: 2
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
  background-size: 100%;
  background-position: 0, 0, 100%, 100%;
  background-repeat: no-repeat;
  position: relative;
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
</style>
