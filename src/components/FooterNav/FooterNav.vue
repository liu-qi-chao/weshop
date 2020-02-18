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
  display: flex;
  top-border-1px(#eee)
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing border-box
  background #fff
  .navItem 
    width: 20%;
    height: 98px;
    text-align: center;
    // line-height 40px
    // padding-top 10px
    display flex
    flex-direction column
    font-size 24px
    &.active
      color red
    .iconfont
      font-size 42px
      line-height 60px

 

</style>
