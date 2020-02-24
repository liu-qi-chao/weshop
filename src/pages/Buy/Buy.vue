<template>
  <div id="wraper">
    <div class="header">
        <div class="header-w">
          <a href="/home">
            <i class="iconfont icon-home"></i>
          </a>
          <a class="home" href="/home">
            <span>值得买</span>
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
    <div class="m-swiperContainer">
      <div class="swiperTop">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="text">严选好物&nbsp;用心生活</div>
      </div>
      <div class="swiperBottom" >
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-item" v-for="(item, index) in navList" :key="index">
              <div class="firstItem" v-for="(list, index) in item" :key="index">
                <img :src="list.picUrl" alt="">
                <div class="itemBottom">
                  <div class="sub-title">{{list.mainTitle}}</div>
                  <span>{{list.viceTitle}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import {mapState} from 'vuex'
import _ from 'lodash'
  export default {
    data() {
      return {
        navList:[]
      }
    },
    mounted() {
      this.$store.dispatch('getBuyNavDatas')
      this.$nextTick(() => {
        this.splitData()
      })
    },
    computed: {
      ...mapState({
        BuyNavDatas: state => state.BuyNavDatas.navList
      })
    },
    methods: {
      splitData(){
        if (this.BuyNavDatas) {
          let splitArray = _.chunk(this.BuyNavDatas,this.BuyNavDatas.length/2)
          let splitArr = []

          for (let index = 0; index < splitArray.length; index++) {
            splitArr.push(_.chunk(splitArray[index],1))
          }
          let result = []

          for (let index = 0; index < splitArr[0].length; index++) {
            result.push(splitArr[0][index].concat(splitArr[1][index]))
          }
          this.navList = result
          console.log(result);
        }
      } 
    },
    watch: {
      BuyNavDatas(){
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            slidesPerView: "auto",
            pagination:{
              el:'.swiper-pagination',
              bulletClass : 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }  
          })
        })
      }
    },
  }
</script>

<style scoped lang='stylus'>
#wraper
  width 100%
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
        font-size 36px
        margin auto
        padding-left 250px
      .header-r
        margin-top 28px
        margin-left auto   
        margin-right: 5px;
        .search
          margin-right 40px
  .m-swiperContainer
    width 100%
    height 685px
    position relative
    .swiperTop
      width 100%
      height 524px
      background-image url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png')
      background-repeat no-repeat
      background-size cover
      position relative
      img
        position absolute
        left 12px
        top 60px 
        width 128px
        height 68px
      .text
        height 44px
        font-size 30px
        color #fff
        position absolute
        top 79px
        left 146px
    .swiperBottom
      width 710px
      margin 0 20px
      height 540px
      background #fff
      position absolute
      bottom 0
      left 0
      border-radius 20px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-item
            width 177px
            height 540px
            padding 8px 6px 6px
            box-sizing border-box
            .firstItem
              width 168px
              height 201px
              display flex
              margin-top 28px
              flex-direction column
              align-items center
              img  
                width 120px
                height 120px
              .itemBottom
                width 168px
                height 201px
                text-align center
                margin-top 8px
                .sub-title
                  font-size 28px
                  color #333
                  height 40px
                  font-weight bold
                  line-height 40px
                span 
                  display block
                  height 30px
                  line-height 30px
                  margin-top 2px
                  color #999
    /deep/.swiper-pagination
      margin-bottom 15px
      .swiper-pagination-bullet
        width 40px
        height 4px
        margin 0
        &.swiper-pagination-bullet-active
          background #DD1A21
</style>
