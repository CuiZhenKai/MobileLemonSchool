<template>
    <div class="hello">
        <headers :data='proresult' :tab='showTab'></headers>
    </div>
</template>



<script>
import headers from '@/components/SubComponents/headers'
export default {
  components:{
      headers,
      data() {
          return {
              proresult:'搜索结果页',
              showTab:false
          }
      },
      created() {
          this.$store.state.showTabBar = true
      },
      mounted() {
          this.getRem(750, 100)
      }
  }  
}
</script>


<style lang="less" scoped>

</style>
