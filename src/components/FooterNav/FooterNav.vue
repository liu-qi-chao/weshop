<template>
  <div id="footerWrap">
    <div @click="goPath('/home')" class="navItem">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </div>
    <div @click="goPath('/sort')" class="navItem">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>
    <div @click="goPath('/buy')" class="navItem">
      <i class="iconfont icon-zhidemai"></i>
      <span>值得买</span>
    </div>
    <div @click="goPath('/cart')" class="navItem">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
    <div @click="goPath('/person')" class="navItem">
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
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang='stylus'>
#footerWrap 
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 98px;
  border-top 1px 
  box-sizing border-box
  background #fff
  .navItem 
    width: 20%;
    height: 98px;
    text-align: center;
    padding-top 20px
    display flex
    flex-direction column
    &.active
      color red
    .iconfont
      font-size 42px
      line-height 30px
 

</style>
