<template>
  <div class="look">
    <div class="back">
      <i class="icon iconfont icon-zuojiantou" @click="back"></i>
    </div>
    <div class="wrapper">
      <van-index-bar :index-list="Object.keys(afterDetail)">
          <div v-for="(item, index) in Object.entries(afterDetail)" :key="index">
            <van-index-anchor :index="item[0]" :key="index"></van-index-anchor>
            <van-cell :title="`${valItem}`"  v-for="(valItem, index) in item[1]" :key="index"/>
          </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getDetail } from "../api/service/detail.js";
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      afterDetail: {}, //用于存放分类后的数据
      ingDeatil: {}, //操作中的数据
      arr: []
    });
    const back = () => {
      router.push({ path: "/word" });
    };
    const toDetail = () => {
      router.push({ path: "/detail" });
    };
    onMounted(async () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      const { data } = await getDetail(); //取得单词数据
      console.log("测试数据", data);
      Toast.clear();

      for (var item in data.data) {
        console.log(item);
        console.log(data.data[item]);
        let firstWord = item.slice(0, 1).toUpperCase();
        // 如果项目集合里面有当前字母项则直接push一个对象如果没有则创建一个新的并赋值;
        if (state.ingDeatil[firstWord]) {
          state.ingDeatil[firstWord].push(item);
        } else {
          state.ingDeatil[firstWord] = [item];
        }
      } //提取每一个单词的首字母，并转换为大写
     
      console.log(state.ingDeatil);
      for( let key in state.ingDeatil){
          // console.log(key);
          state.arr.push(key)
      }
        state.arr.sort();
        console.log(state.arr);
        state.arr.forEach(item => {
            state.afterDetail[item] = state.ingDeatil[item]
        });
        console.log('排序好的的数据',state.afterDetail);
    });

    return {
      back,
      ...toRefs(state),
      toDetail,
    };
  },
};
</script>

<style lang="less">
.look {
  .back {
    margin-top: 10px;
    .icon-zuojiantou {
      margin-left: 20px;
    }
  }
}
</style>