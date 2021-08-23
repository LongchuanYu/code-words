<template>
  <div class="button">
      <div class="join"  @click="toWord">
          进入学习
      </div>
      <div class="look">
          查看我的词本
      </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup(){
      const router = useRouter()
      const toWord = () =>{
          router.push({path: '/word'})
      }


    return {
        toWord
    }

  }
}
</script>

<style lang="less">
.button{
    width: 100%;
    .join{
        background-color: #297FFE;
        color: white;
        width: 300px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 50px;
        margin-bottom: 10px;
        margin-right: auto;
        margin-left: auto;
    }
    .look{
        background-color: #F8F8F8;
        color: #686E7C;
        width: 300px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 50px;
        border: 1px solid #afaaaa;
        margin-right: auto;
        margin-left: auto;
    }
}
</style>