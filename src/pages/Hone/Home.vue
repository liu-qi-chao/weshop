<template>
  <div id="wrap">
    <div class="header">
        <img src="../../common/images/logo.png" alt />
      <div class="search">
        <i class="iconfont icon-search1"></i>
        <span class="content">搜索商品, 共20261款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="listWrap">
     <ul class="navList">
           <li>推荐</li>
           <li>居家生活</li>
           <li>服饰鞋包</li>
           <li>美食酒水</li>
           <li>个护清洁</li>
           <li>母婴亲子</li>
           <li>运动旅行</li>
           <li>数码家电</li>
           <li>全球特色</li>
      </ul>
      <div class="btn">
          <i class="iconfont icon-Icon_ArrowDown"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    mounted() {
      new BScroll('.listWrap',{
            scrollX:true
          })
    },
  }
</script>

<style scoped lang='stylus'>
#wrap 
  .header 
    width: 100%;
    height: 88px;
    padding 16px 30px
    background: #fff;
    display flex
    align-items center
    box-sizing border-box
    img 
      width 138px
      height 56px
      margin-right 20px
    .search
      width 442px
      height 56px
      background #ededed
      border-radius 10px
      line-height 54px
      font-size 28px
      position relative
      i 
        line-height 58px
        font-size 32px
        position absolute
        left 20px
      .content
        position absolute
        left 20%
    .login
      width 74px
      height 40px
      border 1px solid #dd1a21
      color #dd1a21
      border-radius 10px
      text-align center
      line-height 40px
      margin-left 16px
  .listWrap
    position relative
    height 60px
    line-height 60px
    display flex
    overflow hidden
	.navList
      display flex
      white-space nowrap
      font-size 28px
      li
        padding 0 16px
        margin-right 20px
        color #333
        font-size 28px
        position relative
        right 0
        &:first-child:after
          content ''
          position absolute
          left 0
          bottom 0
          width 100%
          height 4px
          background #dd1a21  
    .btn
      width 100px
      height 60px
      background #fff
     
      position absolute
      right 0  
      i 
        line-height 60px
        text-align center
        font-size 32px  
        color red   
</style>
