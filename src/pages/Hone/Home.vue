<template>
  <div id="wrapper">
    <div class="header">
      <img src="../../common/images/logo.png" alt />
      <div class="search" @click="toHeaderNav">
        <i class="iconfont icon-search1"></i>
        <span class="content">搜索商品, 共20261款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="listContainer">
      <ul class="navList" v-if="IndexList">
        <li v-for="(item, index) in IndexList.kingKongModule.kingKongList" :key="index">{{item.text}}</li>

      </ul>
      <div class="btn">
        <i class="iconfont icon-Icon_ArrowDown"></i>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(item, index) in IndexList.focusList" :key="index">
          <img :src="item.picUrl" alt />
        </div>
      </div>
      <div class=".swiper-pagination">
        <span class="swiper-pagination-bullet"></span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="bList">
      <div v-for="(item, index) in IndexList.policyDescList" :key="index">
        <img class="iconfont" :src="item.icon" alt />
        <span>{{item.desc}}</span>
      </div>
    </div>
    <!-- 商品列表 -->
    <div  class="shopList-container">
      <div class="shop-list">
        <ul class="shopL" v-if="IndexList">
          <li v-for="(item, index) in IndexList.kingKongModule.kingKongList" :key="index"> 
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
          </li>
          
        </ul> 
      </div>
    </div>
    <!-- 蓝块 -->
      <div class="random-show-top" v-if="IndexList.bigPromotionModule">
        <img :src=IndexList.bigPromotionModule.floorList[0].cells[0].picUrl alt="">
        <div class="change-category">
          <img :src=IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].picUrl alt="">
          <div class="yellow-price">
            <span>${{IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].counterPrice}}</span>
            <span v-show="IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].retailPrice">${{this.IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].retailPrice}}</span>
          </div>
        </div>
      </div>
      <div class="random-show-bottom" v-if="IndexList.bigPromotionModule">
        <img :src=IndexList.bigPromotionModule.floorList[1].cells[0].picUrl alt="">
      </div>
      <div class="random-show-list" v-if="IndexList.bigPromotionModule">
        <img v-for="(item, index) in IndexList.bigPromotionModule.floorList[2].cells" :key="'1'+index" :src=item.picUrl alt="">
        <img v-for="(item, index) in IndexList.bigPromotionModule.floorList[3].cells" :key="'2'+index" :src=item.picUrl alt="">
      </div>
      
    <!-- 新人专享 -->
    <div class="newcomersContainer">
      <div class="comersTop">
        <span class="line1 line"></span>
        <span>新人专享礼</span>
        <span class="line2 line"></span>
      </div>
      <div class="comersBottom">
        <div class="leftContainer">
          <span>新人专享礼包</span>
          <img src="../../common/images/swiper/8.png" alt />
        </div>
        <div class="rightContainer">
          <div class="top1">
            <span>福利社</span>
            <span class="today">今日特价</span>
            <img src="../../common/images/swiper/8.png" alt />
          </div>
          <div class="bottom1">
            <span>新人拼团</span>
            <span class="one">一元起包邮</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 类目热销榜 -->
    <div class="demand">
      <div class="text">类目热销榜</div>
      <div class="demandTop" v-if="IndexList.categoryHotSellModule">
        <div class="demL" v-for="(item, index) in newCategoryList" :key="index">
          <span class="rexiao">{{item.categoryName}}</span>
          <i class="iconfont icon-xiahuaxian"></i>
          <img :src="item.picUrl" alt />
        </div>

        <div class="demandList">
          <ul v-if="IndexList.categoryHotSellModule">
            <li v-for="(item, index) in newHotSellCategoryList" :key="'5'+index">
              <span>{{item.categoryName}}</span>
              <img :src="item.picUrl" alt />
            </li>
 
          </ul>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    <!-- 限时购 -->
    <div class="purchaseContainer">
      <div class="purchase">
        <span>限时购</span>
        <div class="timeContainer">
          <div></div>
          <span>:</span>
          <div></div>
          <span class="t2">:</span>
          <div></div>
        </div>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>

      <div class="newListContainer">
        <ul class="newList" v-if="IndexList.flashSaleModule">
          <li v-for="(item, index) in IndexList.flashSaleModule.itemList" :key="index">
            <img :src="item.picUrl" alt />
            <div class="price">
              <span class="y1">￥{{item.activityPrice}}</span>             
              <span class="y2">￥{{item.originPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 新品首发 -->
    <div class="newGoodsContainer">
      <div class="newGoodsTop">
        <span>新品首发</span>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div class="newGoodsBottom">
        <ul class="newGoodsList">
          <li v-for="(item, index) in newItemLists" :key="index">
            <img :src="item.listPicUrl" alt />
            <span class="newGoodsText">{{item.name}}</span>
            <span class="newGoodsPrice">￥{{item.retailPrice}}</span>
            <span class="newGoodsT">{{item.itemTagList[0].name}}</span>
          </li>
       
        </ul>
      </div>
    </div>

    <!-- 断货补单网 -->
    <div class="replenishment">
      <ul class="replenishmentList">
        <li v-for="(item, index) in IndexList.sceneLightShoppingGuideModule" :key="index">
          <span>{{item.styleItem.title}}</span>
          <span class="title">{{item.styleItem.desc}}</span>
          <div>
            <img v-for="(url, index) in item.styleItem.picUrlList" :key="index" :src="url" alt />
          </div>
        </li>
      </ul>
    </div>

    <!-- 尾部 -->
    <div class="fotter">
      <div>
        <div class="footerT">
          <div class="leftApp div">
            <span>下载APP</span>
          </div>
          <div class="div RApp">电脑版</div>
        </div>
        <div class="footerText">
          <span>网易公司版权所有 © 1997-2020</span>
          <br />
          <span>食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScorll from "better-scroll";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import { mapState } from "vuex";
export default {
  data() {
    return {
      // priceIndex:0
    };
  },
  methods: {
    toHeaderNav(){
      this.$router.push('/HeaderNav')
    }
  },
  async mounted() {
    // new BScorll(".listContainer", {
    //   scrollX: true
    // });
    this.$store.dispatch("getIndexLists");
    
  },
  computed: {
    ...mapState({
      IndexList: state => state.IndexList
    }),
    newCategoryList(){
      return this.IndexList.categoryHotSellModule.categoryList.filter((item,index)=>{
        return index <2
      })
    },
    newHotSellCategoryList(){
      return this.IndexList.categoryHotSellModule.categoryList.filter((item,index)=>{
        return index > 1
      })
    },
    newItemLists(){
      return this.IndexList.newItemList.filter((item,index)=>{
        return index < 6
      })
    }
   
  },
  watch: {
    IndexList() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          autoplay: true, //自动轮播
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true
        });
        new BScorll(".listContainer", {
          scrollX: true
        });
      });
    }
  }
};
</script>

<style scoped lang='stylus'>
#wrapper {
  .header {
    width: 100%;
    height: 88px;
    padding: 16px 30px;
    background: #fff;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    img {
      width: 138px;
      height: 56px;
      margin-right: 20px;
    }

    .search {
      width: 442px;
      height: 56px;
      background: #ededed;
      border-radius: 10px;
      line-height: 54px;
      font-size: 28px;
      position: relative;

      i {
        line-height: 58px;
        font-size: 32px;
        position: absolute;
        left: 20px;
        margin-top 22px
      }

      .content {
        position: absolute;
        left: 20%;
      }
    }

    .login {
      width: 74px;
      height: 40px;
      border: 1px solid #dd1a21;
      color: #dd1a21;
      border-radius: 10px;
      text-align: center;
      line-height: 40px;
      margin-left: 16px;
    }
  }

  .listContainer {
    position: relative;
    height: 60px;
    line-height: 60px;
    display: flex;
    overflow: hidden;

    .navList {
      display: flex;
      white-space: nowrap;
      font-size: 28px;

      li {
        padding: 0 16px;
        margin-right: 20px;
        color: #333;
        font-size: 28px;
        position: relative;
        right: 0;

        &:first-child:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: #dd1a21;
        }
      }
    }

    .btn {
      width: 100px;
      height: 60px;
      background: #fff;
      display: flex;
      position: absolute;
      right: 0;

      .iconfont {
        width: 100px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 42px;
      }
    }
  }

  .swiper-container {
    width: 100%;
    height: 370px;

    .swiper-wrapper {
      width: 100%;
      height: 370px;

      .swiper-slide {
        width: 100%;
        height: 370px;

        img {
          width: 100%;
          height: 370px;
        }
      }
    }

    /deep/.swiper-pagination {
      .swiper-pagination-bullet {
        width: 40px;
        height: 4px;
        background: #fff;
        border-radius: 0;
      }
    }
  }

  .bList {
    width: 100%;
    height: 72px;
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    align-items: center;

    div {
      width: 228px;
      height: 36px;
      display: flex;
      align-items: center;

      img {
        width: 32px;
        heihgt: 32px;
        font-size: 32px;
        color: #dd1a21;
      }

      span {
        font-size: 24px;
        padding-left: 8px;
        0;
      }
    }
  }

  .shopList-container {
    width: 100%;
    height: 373px;
    .shop-list {
      width: 100%;
      height: 341px;
      .shopL {
        width: 100%;
        height: 341px;
        li {
          float left
          width: 110px;
          height 156px
          margin: 10px 20px;
          text-align center
          img {
            width: 110px;
            height: 110px;
            margin-bottom: 10px;
          }

          span {
            display: block;
            width: 110px;
            height: 36px;
            line-height: 30px;
            font-size: 24px;
            text-align: center;
          }
        }
      }
    }
  }

.random-show-top {
  height: 240px;
  position: relative;

  img {
    width: 100%;
  }

  .change-category {
    width: 168px;
    height: 168px;
    position: absolute;
    left: 75px;
    top: 30px;

    img {
      width: 100%;
    }

    .yellow-price {
      width: 152px;
      height: 32px;
      border-radius: 15px;
      background: orange;
      position: absolute;
      bottom: 5px;
      left: 5px;
      text-align: center;
      color: white;
    }
  }
}

.random-show-bottom {
  height: 160px;
  background: #1377E5;
  text-align: center;

  img {
    width: 95%;
  }
}

.random-show-list {
  height: 390px;
  width: 710px;
  background: #1377E5;
  padding: 10px 20px;

  img {
    float: left;
    width: 351px;
    height: 186px;
    margin-bottom: 10px;

    &:nth-child(2n+1) {
      margin-right: 5px;
    }
  }
}

  .newcomersContainer {
    width: 750px;
    height: 588px;
    padding-bottom: 30px;
    padding-top: 20px;
    box-sizing: border-box;
    background: #ededed;
  }
}

.comersTop {
  width: 750px;
  height: 90px;
  background: #ffffff;
  color: #333;
  font-size: 32px;
  text-align: center;
  line-height: 90px;
  position: relative;

  .line {
    display: block;
    width: 24px;
    height: 3px;
    background: #333;
    position: absolute;
    top: 0;
    right: 0;
    left: -220px;
    bottom: 0;
    margin: auto;
  }

  .line2 {
    left: 220px;
  }
}

.comersBottom {
  width: 750px;
  height: 458px;
  background: #fff;
  padding: 0 30px;
  box-sizing: border-box;

  .leftContainer {
    width: 343px;
    height: 434px;
    background: #f9e9cf;
    float: left;

    span {
      width: 100%;
      height: 78px;
      display: block;
      color: #333;
      font-size: 32px;
      padding: 30px 0 0 30px;
    }

    img {
      width: 258px;
      height: 257px;
      display: block;
      margin: 0 auto;
    }
  }

  .rightContainer {
    width: 343px;
    height: 215px;
    background: #FBE2D3;
    float: right;
    padding: 20px 0 0 30px;
    box-sizing: border-box;

    .top1 {
      position: relative;

      span {
        font-size: 32px;
        display: block;
        margin-bottom: 10px;
      }

      .today {
        font-size: 24px;
        color: #7f7f7f;
      }

      img {
        width: 200px;
        height: 200px;
        display: block;
        position: absolute;
        left: 120px;
        top: -10px;
      }
    }

    .bottom1 {
      width: 343px;
      height: 215px;
      background: #F9E9CF;
      float: right;
      margin-top: 123px;
      padding: 20px 0 0 30px;
      box-sizing: border-box;

      span {
        font-size: 32px;
        color: #333;
        display: block;
      }

      .one {
        width: 120px;
        height: 32px;
        background: #cbb693;
        color: #ffffff;
        font-size: 22px;
        text-align: center;
        line-height: 32px;
        border-radius: 6px;
        margin-top: 5px;
      }
    }
  }
}

.demand {
  width: 750px;
  height: 100px;
  line-height: 100px;

  .text {
    font-size: 32px;
    color: #333;
    margin-left: 30px;
  }

  .demandTop {
    width: 750px;
    height: 610px;
    padding: 0 20px 20px 30px;
    box-sizing: border-box;

    .demL {
      width: 340px;
      height: 200px;
      background: #f9f3e4;
      position: relative;
      float: left;

      .rexiao {
        font-size: 28px;
        color: #333;
        position: absolute;
        top: 30px;
        left: 30px;
      }

      .iconfont {
        font-size: 70px;
        position: absolute;
        top: 30px;
        left: 28px;
      }

      img {
        width: 200px;
        height: 200px;
        margin-left: 140px;
      }
    }

    .demR {
      width: 340px;
      height: 200px;
      background: #ebeff6;
      position: relative;
      float: left;
      margin-left: 10px;

      .haoping {
        font-size: 28px;
        color: #333;
        position: absolute;
        top: 30px;
        left: 30px;
      }

      .iconfont {
        font-size: 70px;
        position: absolute;
        top: 30px;
        left: 28px;
      }

      img {
        width: 200px;
        height: 200px;
        margin-left: 140px;
      }
    }

    .demandList {
      float: left;
      margin-top: 10px;
      text-align: center;
      
      ul {
        li {
          width: 165px;
          height: 180px;
          background: #f5f5f5;
          float: left;
          margin-right: 10px;
          margin-bottom: 10px;
          position: relative;

          span {
            font-size: 24px;
            color: #333;
            position: absolute;
            top: -20px;
          }

          img {
            width: 120px;
            height: 120px;
            margin-top: 50px;
          }
        }
      }
    }
  }
}

.purchaseContainer {
  width: 750px;
  height: 740px;
  background: #eee;
  padding: 20px 0;
  box-sizing: border-box;

  .purchase {
    width: 750px;
    height: 100px;
    background: #ffffff;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 32px;
    color: #333;
    line-height: 100px;
    position: relative;

    .timeContainer {
      display: flex;
      position: absolute;
      top: 35px;
      left: 135px;

      div {
        width: 36px;
        height: 36px;
        background: #333;
        border-radius: 5px;
        margin: 0 10px;
      }

      span {
        position: absolute;
        top: -35px;
        left: 52px;
      }

      .t2 {
        left: 108px;
      }
    }

    .more {
      display: inline-block;
      float: right;
      font-size: 28px;
    }
  }

  .newListContainer {
    width: 750px;
    height: 600px;
    background: #fff;

    .newList {
      width: 750px;
      height: 600px;
      padding: 0 10px 0 30px;
      box-sizing: border-box;

      li {
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;

        img {
          width: 216px;
          height: 216px;
          background: #eee;
        }

        .price {
          width: 216px;
          height: 40px;
          padding: 0 0 0 20px;
          box-sizing: border-box;
          margin-top: 20px;

          .y1 {
            font-size: px;
            color: #dd1a21;
            font-weight: 600;
          }

          .y2 {
            font-size: 24px;
            color: #7f7f7f;
            text-decoration line-through //字体中划线
          }
        }
      }
    }
  }
}

.newGoodsContainer {
  width: 100%;
  height: 942px;
  background: #eee;

  .newGoodsTop {
    width: 100%;
    height: 100px;
    background: #ffffff;
    padding: 0 30px;
    box-sizing: border-box;
    line-height: 100px;

    span {
      font-size: 32px;
    }

    .more {
      display: inline-block;
      float: right;
      font-size: 28px;
    }
  }

  .newGoodsBottom {
    width: 750px;
    height: 820px;
    background: #fff;
    padding-left: 10px;
    box-sizing: border-box;

    .newGoodsList {
      width: 740px;
      padding-bottom: 13px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;

      li {
        margin-left: 20px;
        margin-bottom: 20px;
      }

      img {
        width: 216px;
        height: 216px;
        background: #f5f5f5;
      }

      .newGoodsText {
        font-size: 24px;
        color: #333;
        display: block;
        width: 216px;
        height: 68px;
        display: -webkit-box;          //文本溢出隐藏
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 35px;
        margin-top: 10px;
      }

      .newGoodsPrice {
        font-size: 32px;
        color: #dd1a21;
        display: block;
        margin-left: -5px;
        margin: 10px 0;
      }

      .newGoodsT {
        display: block;
        // width: 54px;
        height: 30px;
        border: 1px solid #dd1a21;
        font-size: 18px;
        border-radius: 40px;
        text-align: center;
        line-height: 30px;
        margin-top: 10px;
      }
    }
  }
}

.replenishment {
  width: 750px;
  height: 596px;
  background: #eee;

  .replenishmentList {
    width: 100%;
    height: 576px;
    background: #fff;
    padding: 10px 30px;
    box-sizing: border-box;

    li {
      width: 340px;
      height: 260px;
      background: #f5f5f5;
      margin: 4px 0 0 4px;
      padding: 20px 0 0 20px;
      box-sizing: border-box;
      float: left;

      span {
        color: #333;
        font-size: 32px;
        display: block;
        margin-left: 10px;
        margin-bottom: 10px;
      }

      .title {
        font-size: 24px;
        color: #7f7f7f;
      }

      div {
        display: flex;

        img {
          width: 150px;
          height: 150px;
          margin-right: 4px;
        }
      }
    }
  }
}

div {
  position: relative;

  .footerT {
    width: 750px;
    height: 244px;
    background: #333;
    padding: 54px 20px 28px;
    box-sizing: border-box;
    position: relative;

    .div {
      width: 172px;
      height: 62px;
      color: #fff;
      font-size: 24px;
      border: 1px solid #666;
      text-align: center;
      line-height: 62px;
      margin-bottom: 36px;
      margin-left: 50px;
    }

    .RApp, .leftApp {
      float: left;
    }

    .leftApp {
      margin-left: 150px;
    }
  }

  .footerText {
    color: #999;
    display: block;
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 168px;
    line-height: 30px;
  }
}
</style>
