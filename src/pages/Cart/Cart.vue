<template>
  <div id="wraper">
    <div class="cartTop">
      <div class="cartTop-l">
        <span>购物车</span>
      </div>
      <div class="cartTop-r">
          <span>领券</span>
      </div>
    </div>
    <div class="cartBottom">
        <ul class="cartNav">
          <li>
            <span>30天无忧退货</span>
          </li>
          <li>
            <span>48小时快速退款</span>
          </li>
          <li>
            <span>满88元免费包邮</span>
          </li>
        </ul>
        <div class="container">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
        </div>
        <div class="text">
          <div class="cartLogin">
            <div class="cartTitle">去添加点什么吧</div>
            <div class="cartBtn">登录</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang='stylus'>
#wraper
  width 100%
  height 100%
  .cartTop
    width 100%
    height 88px
    position fixed !important
    left 0
    top 0
    z-index 5
    background #fff
    padding 0 30px
    box-sizing border-box
    display flex
    .cartTop-l
      height 88px
      line-height 88px
      text-align center
      span 
        float left 
        font-size 36px
    .cartTop-r
      position: absolute;
      top: 0;
      right: 30px;
      height: 88px
      font-size: 30px
      margin-top: 25px
      margin-right: 30px
      line-height 38px
      color #DD1A21
  .cartBottom
    position: fixed;
    top: 88px;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;  
    .cartNav
      position: relative;
      z-index: 1;
      height: 70px;
      padding: 0 30px;
      background: #eee;
      display flex
      justify-content space-between
      li
        display flex
        --webkit-box-align center
        align-items center
        font-size: .32rem;
        color: #666;
  .container
    position absolute
    top -50px
    right 0
    bottom 0
    left 0
    height 300px
    margin auto 
  .text
    position absolute
    top 695px
    left 135px
    font-size 28px
    color #7f7f7f
    .cartLogin
      margin-top -20px
      .cartTitle
        margin-bottom 50px
        font-size 28px
        color #999
      .cartBtn
        margin auto 
        width 480px
        height 92px
        font-size 30px
        line-height 92px
        color #fff  
        background #DD1A21
        border-radius 3px
    
</style>
