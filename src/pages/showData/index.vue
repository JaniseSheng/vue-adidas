<template>
<div class="view-wrapper">
  <p>菜单点击统计</p>
  <ul>
    <li v-for='item in allData.dataListsMenu'><span>{{item.label}}</span>{{item.value}}</li>
    <li style='color:#23a9e4'><span>统计</span>{{allData.menuData}}</li>
  </ul>
  <p style="margin-top: 24px">分享浏览统计</p>
  <ul>
    <li v-for='item in allData.dataListsShare'><span>{{item.label}}</span>{{item.value}}</li>
    <li style='color:#23a9e4'><span>统计</span>{{allData.detailData}}</li>
  </ul>
</div>
</template>

<script>
import {
  getAllData
} from '@/api/index';
export default {
  data() {
    return {
      allData: {}
    }
  },
  created() {
    localStorage.removeItem('detail0')
    localStorage.removeItem('detail1')
    localStorage.removeItem('detail2')
    localStorage.removeItem('detail3')
    localStorage.removeItem('detail4')
    getAllData('getAllData').then(res => {
      if (res.success) {
        this.allData = res.data
      } else {
        alert('可能服务器挂了，数据请求有点慢')
      }

    })
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/color.less";
.view-wrapper {
    min-height: 100vh;
    background-color: @bg-color;
    color: white;
    padding: 18px 12px;
    font-size: 1rem;
    p {
      text-align: center;
      font-size: 1.2rem;
      color: @primary-color;
    }
    li {
      padding: 6px;
      text-align: right;
      span {
        float: left;
      }
    }
}
</style>
