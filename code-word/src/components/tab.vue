<template>
    <div id="tab">
  <router-link to='/home' tag="li" class="tab-item">
   <i class="icon iconfont icon-shu"></i>
    <span>背单词</span>
  </router-link>
   <router-link to='/test' tag="li" class="tab-item">
   <i class="icon iconfont icon-youxi"></i>
    <span>挑战</span>
</router-link>
 <router-link to='/user' tag="li" class="tab-item">
    <i class="icon iconfont icon-wode"></i>
    <span>我的</span>
  </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
#tab{
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    border-top: solid 1px #9DA2AE;
    .tab-item{
        flex: 1;
        text-align: center;
        margin: auto;
        text-decoration: none;
        color: #9DA2AE;
    }
}
</style>