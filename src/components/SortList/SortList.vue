<template>
  <div class="warper">
      <div class="cateTop">
          <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
        </div>
        <div class="cateBottom">
          <ul v-if="srotData">
            <li v-for="(item, index) in srotData.categoryList || result.subCateList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
      props:['listId','listData'],
      data() {
          return {
              sortId:0,
              result:''
          }
      },
      mounted() {
          this.sortId = this.listId
      },
     computed: {
         srotData(){
             let {listData,result,listId} = this
            //  console.log(listData);
             if (listData) {
                 result = listData.find((item) => {
                     return item.id === listId
                 })
             }
             return result
         }
     },
      
  }
</script>

<style scoped lang='stylus'>
.cateTop
      img 
        width 528px
        height 192px
    .cateBottom
      ul
        width 100%
        display flex
        flex-wrap wrap
        li 
          height 216px
          width 144px
          text-align center
          margin-right 35px
          img 
            width 144px
            height 144px
          span 
            width 144px
            height 72px
            color #333 
 
</style>
