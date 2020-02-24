<template>
  <div id="wraper">
      <div class="header">
        <div class="header-w">
          <a href="/home">
            <i class="iconfont icon-home"></i>
          </a>
          <a class="home" href="/home">
            <img src="../../common/images/logo.png" alt="">
          </a>
          <div class="header-r">
            <a class="search" href="/headernav">
              <i class="iconfont icon-search1"></i>
            </a>
            <a href="/cart">
              <i class="iconfont icon-gouwuche"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="cont">
          <div class="logowrap">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
          </div>
          <div class="btnwrap">
            <div class="btnt">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快捷登录</span>
            </div>
            <div class="btnb">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
        </div>  
      </div>
      <!-- <div class="footer">
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-weixnhao"></i>
            <span class="name">微信</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-qq"></i>
            <span class="name">QQ</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-weibo"></i>
            <span class="name">微博</span>
          </span>
        </div>
      </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang='stylus'>
#wraper
  .header
    height 88px
    background #fafafa
    .header-w
      width 100%
      height 88px
      z-index 1
      margin auto
      position relative
      padding 16px 24px
      display flex
      -webkit-box-align center
      align-items center
      -webkit-box-pack justify
      justify-content space-between
      box-sizing border-box
      a
         padding-top 25px
        .iconfont
          line-height 1px
          font-size 50px
      .home
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        padding-left 250px
      .header-r
        margin-top 28px
        margin-left auto   
        margin-right: 5px;
        .search
          margin-right 40px
  .bottom
    position relative
    height 100%
    background: #F2F5F4  
    .cont
      .logowrap   
        text-align center
        padding-top 160px
        padding-bottom 232px 
        img 
          width 268px
          height 90px  
      .btnwrap
        padding 40px
        height 100%
        margin-bottom 205px
        .btnt
          margin-bottom 32px
          overflow visible  
          border-radius 2px  
          background #DD1A21
          text-align center;
          font-size 28px;
          color #fff;
          vertical-align middle;
          width 100%
          height 94px
          line-height: 94px
          .iconfont
            line-height 1px
            font-size 40px
            
        .btnb
          margin-bottom 340px
          overflow visible  
          border-radius 2px 
          border 1px solid #DD1A21 
          text-align center;
          font-size 28px;
          color #DD1A21;
          vertical-align middle;
          width 100%
          height 94px
          line-height: 94px 
          
          .iconfont
            line-height 1px
            font-size 40px   
    // .footer
    //   width 100%
    //   height 40px
    //   text-align center
    //   position absolute
    //   left 0
    //   bottom 80px     
    //   .itemWrap
    //     height 40px
    //     border-right 1px solid #979797 
    //     display inline-block
    //     text-align center
    //     padding 0 40px 
    //     .item
    //       height 40px
    //       position relative
    //       top -10px
    //       .name
    //         font-size .37333rem;
    //         line-height .53333rem;
    //         height .53333rem;
    //         color #7F7F7F;
    //         margin-left .06667rem;
</style>
