<template>
  <div id="wrapper">
    <div class="header">
        <img src="../../common/images/logo.png" alt />
      <div class="search">
        <i class="iconfont icon-search1"></i>
        <span class="content">搜索商品, 共20261款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="listContainer">
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
    <!-- 轮播图 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in this.IndexList.focusList" :key="index">
            <img :src=item.picUrl alt="">
          </div>
          <!-- <div class="swiper-slide">
            <img src="../../common/images/swiper/2.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/2.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/3.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/4.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/5.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/6.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/7.webp" alt="">
          </div> -->
        </div> 
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet"></span>
        </div>
      </div>
      <!-- 列表 -->
      <div class="bList">
            <!-- <div >
              <i class="iconfont icon-wangyi"></i>
              <span>网易自营品牌</span>
            </div> -->
            <div>
              <i class="iconfont icon-wangyi"></i>
              <span>网易自营品牌</span>
            </div>
            <div>
              <i class="iconfont icon-tianwuyou"></i>
              <span>30天无忧退货</span>
            </div>
            <div>
              <i class="iconfont icon-tuikuan"></i>
              <span>48小时极速退款</span>
            </div>
      </div>
      <!-- 商品列表 -->
      <div class="shopList-container">
        <div class="shop-list">
          <ul class="shopL">
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
          </ul>
          <ul class="shopL">
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 蓝块 -->
      <div class="blueBox">
        <img class="img1" src="" alt="">
        <img class="img2" src="" alt="">
        <div class="inTwo">
          <div class="inTwo1">
            <img src="" alt="">
          </div>
          <div class="inTwo2">
            <img src="" alt="">
            <img class="sos" src="" alt="">
          </div>
          <div class="inTwo3">
            <img src="" alt="">
            <img class="sos" src="" alt="">
          </div>
        </div>
      </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
import BScorll from 'better-scroll'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import {mapState} from 'vuex'
  export default {
    data() {
      return {
        // IndexList:{}
      }
    },
    async mounted() {
      new BScorll('.listContainer',{
            scrollX:true
         })
          // new Swiper(".swiper-container", {
          //   autoplay: true,//自动轮播
          //   pagination: {
          //     el: ".swiper-pagination"
          //   },
          //   loop: true
          // });
      this.$store.dispatch('getIndexLists',() => {
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            autoplay: true,//自动轮播
            pagination: {
              el: ".swiper-pagination"
            },
            loop: true
          });
        });
      })    
      
      
    },
    computed: {
      ...mapState({
        IndexList: state => state.IndexList
      })
    },
    
  }
</script>

<style scoped lang='stylus'>
#wrapper 
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
  .listContainer
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
       display flex
       position absolute
       right 0  
       .iconfont 
         width 100px
         height 60px
         text-align center
         line-height 60px
         font-size 42px 
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide
        width 100%
        height 370px
        img 
          width 100%
          height 370px
    /deep/.swiper-pagination
     .swiper-pagination-bullet
        width 40px
        height 4px
        background #fff
        border-radius 0
  .bList
    width 100%
    height 72px
    display flex
    padding 0 30px
    box-sizing border-box
    align-items center
    div
      width 228px
      height 36px
      display flex
      align-items center
      i 
        font-size 32px
        color #dd1a21 
      span
        font-size 24px 
        padding-left 8px
        0           
  .shopList-container
    width 100%
    height 373px
    .shop-list
      width 100%
      height 341px
      .shopL
        display flex
        li 
          width 20%
          margin 10px 20px
          img 
            width 110px
            height 110px
            margin-bottom 10px
          span 
            display block
            width 110px
            height 36px
            line-height 30px
            font-size 24px 
            text-align center           
</style>
