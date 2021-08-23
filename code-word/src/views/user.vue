<template>
<div class="user">
    <div class="wrapper-top">
    <div class="header">
        <div class="userInfo">
            <div class="name">
                <div class="txt">一叶飘零、</div>
            </div>
        </div>
        <div class="avater">
            <!-- <img src="../assets/header.jpeg"> -->
            <img src="https://img1.baidu.com/it/u=3869515018,2735128030&fm=26&fmt=auto&gp=0.jpg">
        </div>
    </div>
    <div class="number-wrap">
        <div class="study">
            <div class="number">384</div>
            <div class="txt">学习单词</div>
        </div>
        <div class="day">
            <div class="number">18</div>
            <div class="txt">坚持天数</div>
        </div>
    </div>
    </div>
    <v-list></v-list>
    <v-tab></v-tab>
</div>

  
</template>

<script>
import userList from "@/components/userList.vue"
import tab from '@/components/tab.vue'
export default {
    components:{
    "v-list": userList,
    "v-tab": tab
  }
}
</script>

<style lang="less">
.wrapper-top{
    background-color:#1F5FE1 ;
    width: 100%;
    height: 200px;
    .header{
        width: 100%;
        display: flex;
        padding-top:50px;
        .userInfo{
            flex:3;
            font-size: 22px;
            justify-items: center;
            height: 85px;
            line-height: 85px;
            .txt{
                padding-left: 20px;
                color: white;
            }
        }
        .avater{
            flex:1;
            // width: 80px;
            // height: 80px;
            overflow: hidden;
            img{
                width: 70px;
                border-radius: 50%;
            }
        }
    }
    .number-wrap{
        display: flex;
        .study{
            margin-left: 20px;
            margin-right: 20px;
            .number{
                color:white;
                font-size: 20px;
                font-style:italic
            }
            .txt{
                color: #8FAAEE;
                font-size: 14px;
            }
        }
        .day{
           .number{
                color:white;
                font-size: 20px;
                font-style:italic
            }
            .txt{
                color: #8FAAEE;
                font-size: 14px;
            } 
        }
    }
}

</style>