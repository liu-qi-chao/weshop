<template>
  <div id="sortWrapper">
    <div class="sortTop">
      <div class="search">
        <i class="iconfont icon-search1"></i>
        <span class="content">搜索商品, 共20261款好物</span>
      </div>
    </div>
    <div class="sortBottom">
      <div class="left">
        <div class="wraper">
           <ul >
              <li :class="{active:content === index}" v-for="(item, index) in CateNavDatas.categoryL1List" :key="index">
                <span @click="navIndex(index,item.id)">{{item.name}}</span>
              </li>
            </ul>
        </div>
       
      </div>
      <div class="right">
        <SortList :listId='listId' :listData='CateListDatas'></SortList>
      </div>
    </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScorll from 'better-scroll'
import SortList from '../../components/SortList/SortList'

  export default {
    components:{SortList},
    data() {
      return {
        content:0,
        listId:11,
      }
    },
    mounted() {
      this.$store.dispatch('getNavListDatas'),
      this.$store.dispatch('getCateListDatas')
    },
    methods: {
      navIndex(index,id){
        this.content = index
        this.listId = id
        // console.log(id);
        
      }
    },
    computed: {
      ...mapState({
        CateNavDatas: state => state.CateNavDatas,
        CateListDatas: state => state.CateListDatas
      })
    },
    watch: {
      CateNavDatas(){
        this.$nextTick(() => {
          new BScorll(".wraper", {
            click:true,
            scrollY: true
          })
        })
      }
    },
  }
</script>

<style scoped lang='stylus'>
#sortWrapper 
  height 100%
  overflow hidden
  .sortTop
    width 100%
    height 88px
    margin  16px 30px
    box-sizing border-box
    border-bottom 1px solid #eee
    
    .search
      width 690px
      height 56px
      background #ededed 
      border-radius 10px
      position relative
      i 
        line-height: 56px;
        font-size: 32px;
        position: absolute;
        left: 20%;
        color #666
      span 
        position: absolute;
        left: 25%;
        line-height: 56px;
        font-size 28px
        color #666
  .sortBottom
    width 100%
    height 1044px
    padding-bottom  98px
    display flex
    justify-content space-between
    .left
      width 162px
      height 100%
      border-right 1px solid #eee
      .wraper
        width 100%
        height 100%
        overflow hidden
        ul
          width 100%
          li 
            width 100%
            height 50px
            margin-top 50px
            text-align center
            &:active
              color #ab2b2b
              border-left 5px solid #ab2b2b
              box-sizing border-box
            span 
              font-size 28px
    .right
      width 588px
      padding 40px 20px 0 30px
      box-sizing border-box
      float right
         
</style>
