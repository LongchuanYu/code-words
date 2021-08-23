<template>
  <div id="app">
      <!-- <v-tab></v-tab> -->

     <router-view/>
  </div>
 
</template>

<script>
// import tab from "@/components/tab.vue"
export default {
  components:{
    // "v-tab": tab
  }
}
</script>

<style lang="less">
body{
  // width: 100%;
  // height: 100%;
  padding: 0;
  margin: 0;
  background-color: #FFFFFF;
}
</style>
