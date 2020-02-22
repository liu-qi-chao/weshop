<template>
  <div id="footerWrap">
    <div :class="{active: $route.path === '/home'}" @click="goPath('/home')" class="navItem">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/sort'}" @click="goPath('/sort')" class="navItem">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>
    <div :class="{active: $route.path === '/buy'}" @click="goPath('/buy')" class="navItem">
      <i class="iconfont icon-zhidemai"></i>
      <span>值得买</span>
    </div>
    <div :class="{active: $route.path === '/cart'}" @click="goPath('/cart')" class="navItem">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
    <div :class="{active: $route.path === '/person'}" @click="goPath('/person')" class="navItem">
      <i class="iconfont icon-gerenzhongxin"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goPath(path) {
      //跳转至指定的路径
      path !== this.$route.path && this.$router.push(path);
    }
  }
};
</script>
<style  lang='stylus'>
 @import "../../common/stylus/mixins.styl"
#footerWrap 
  width 100%
  height 98px
  display flex
  position fixed
  bottom 0
  left  0
  justify-content space-around
  padding 10px 0 0 0
  box-sizing border-box
  background white
  .navItem 
    display flex
    flex-direction column
    height 70px
    &.active
      color $red
    .iconfont
      line-height 0px
      font-size 45px
      margin-top 50px
 

</style>
