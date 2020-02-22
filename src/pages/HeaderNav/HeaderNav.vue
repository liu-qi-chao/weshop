<template>
  <div id="searchWrapper">
    <div class="searchT">
      <div class="search">
        <i class="iconfont icon-search1"></i>
        <input type="text" placeholder="方便美味日式拉面,5分钟即享">
      </div>
      <span @click="toHome">取消</span>
    </div>  
      <div class="searchB">
        <header>
          <h3>热门搜索</h3>
        </header>
        <div class="list">
          <a href="##" v-for="(item, index) in SearchList.data.hotKeywordVOList" :key="index">{{item.keyword}}</a>
        </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
  export default {
    methods: {
    toHome(){
      this.$router.push('/home')
    }
  },
    mounted() {
      this.$store.dispatch('getSearchDatas')
    },
    computed: {
      ...mapState({
        SearchList: state => state.SearchList
      })
    },
  }
</script>

<style scoped lang='stylus'>
#searchWrapper
  background #ededed
  .searchT
    width 750px
    height 88px
    padding 16px 30px
    box-sizing border-box
    display flex
    background #fff
    .search
      display flex
      width 604px
      height 56px
      padding 16px 20px 0
      background #f4f4f4
      border-radius 4px
      box-sizing border-box
      i 
        font-size 32px
        width 50px
        height 50px 
      input
        float right
        width 520px
        height 39px
        background #f4f4f4
        font-size 32px
    span 
      display block 
      font-size 28px
      line-height 56px
      margin-left 20px
  .searchB
    width 100%
    height 436px
    padding 0 30px
    box-sizing border-box
    background #fff
    header 
      width 690px
      height 90px
      font-size 28px
      color #999
      display flex
      -webkit-box-align center
      align-items center
    .list
      width 720px
      height 316px
      a  
        float left
        padding: 0 15px;
        margin-right: 32px;
        margin-bottom: 32px;
        line-height: 46px;
        border: 1px solid #999;
        border-radius: 4px;

 
</style>
