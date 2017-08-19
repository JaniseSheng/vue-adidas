<template>
<div class="main-wrapper" id='fullpage'>
  <div class="section first-wrapper">

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
import fullpage from 'fullpage.js'
export default {
  data() {
    return {}
  },
  mounted() {
    const that = this;
    $('#fullpage').fullpage({
      afterRender(event) {
        const pageindex = that.$route.query.page;
        if (pageindex) {
          $.fn.fullpage.moveTo(pageindex);
        }
      }
    });
  },
  methods: {
    handleClickMenu(item){
      this.$router.push({
        name: '2',
        query: {
          name: item
        }
      })
    },
    handleClickBack(){
      $.fn.fullpage.moveTo(1)
    }
  },
  destroyed(){
    $.fn.fullpage.destroy('all');
  }
}
</script>

<style lang='less' scoped>
@import "../../styles/color.less";
.first-wrapper {
    background-image: url("./bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    z-index: 10;
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
</style>
