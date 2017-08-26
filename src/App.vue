<template>
<div id="app">
  <dashboard v-if='page == 0 || page == 1' />
  <distruction v-if='page == 2' />
  <detail v-if='page == 3' />
</div>
</template>

<script>
import dashboard from '@/pages/dashboard'
import distruction from '@/pages/distruction'
import detail from '@/pages/detail'
export default {
  data() {
    return {
      page: 0,
      menu: 0
    }
  },
  created(){
    var str = '{' + this.$route.path.replace('/', '"').replace(/k/g,'":').replace(/w/g,',"') + '}'
    const url = JSON.parse(str)
    console.log(url);
    url.menu && (this.menu = url.menu)
    url.page && (this.page = url.page)

  },
components: {
  dashboard,
  distruction,
  detail
}
}
</script>
<style lang='less'>

</style>
