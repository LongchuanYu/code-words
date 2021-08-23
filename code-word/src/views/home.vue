<template>
<div>
 <div class="home-wrap">
    <div class="header">
      <div class="header-img">
        <!-- <img src="/assets/qqq.jpeg"> -->
        <img src="https://pica.zhimg.com/80/v2-27b061cddd2b937deaed7ec5c826390b_1440w.jpg?source=1940ef5c">
        <!-- <img src="https://pic1.zhimg.com/80/v2-4205dee3ed758ee335d66b843924dabc_1440w.jpg" > -->
      </div>
    </div>
    <div class="mid-wrap">
      <div class="mid-top">
        <div class="mid-top_txt">考研核心800+</div>
        <div class="mid-top_change">
          <div class="change-txt">切换词库</div>
        </div>
      </div>
      <div class="mid-bottom">
        <div class="bottom-txt">
          已掌握  <span style="color:#0163FE">545</span>/1091
        </div>
        <div class="bottom-tiao">
            <el-progress :percentage="50"></el-progress>
        </div>
      </div>
      <div class="mid-down">
        <div class="mid-down_number">
          <div class="down-today_number">
            0
          </div>
          <div class="down-last_number">
            -
          </div>
        </div>
        <div class="mid-down_txt">
          <div class="mid-down_txt1">今日已掌握单词</div>
          <div class="mid-down_txt2">上次学习至</div>
        </div>
      </div>
      <v-button></v-button>
    </div>
  </div>
  <v-tab></v-tab>
</div>
 
</template>

<script>
import button from '@/components/button.vue'
import tab from '@/components/tab.vue'
export default {
  components:{
    "v-button":button,
    "v-tab": tab
  }
}
</script>

<style lang="less">
.home-wrap{
  width: 100%;
  height: 100%;
  .header{
    width: 100%;
    height: 100%;
    .header-img{
      overflow: hidden;
      width: 100%;
      height: 200px;
      img{
        max-width: 100%;
      }
    }
  }
  .mid-wrap{
    margin-top: 20px;
    .mid-top{
      display: flex;
      .mid-top_txt{
        flex: 1;
        text-align: center;
        font-size: 20px;
      }
      .mid-top_change{
        flex: 1;
        background-color: #EAF3FE;
        border-radius: 30px;
        flex-grow:0;
        flex-shrink:0;
        margin-right: 20px;
        margin-left: 125px;
        .change-txt{
          text-align: center;
          color: #2165FE;
          width: 60px;
          font-size: 8px;
          padding: 5px;
        }
      }
    }
    .mid-bottom{
      // margin-right: 20px;
      // margin-left: 20px;
      // padding: 5px;
      width: 100%;
      margin-top: 30px;
      .bottom-txt{
        color: #7C86A3;
        font-size: 10px;
        margin-left: 30px;
      }
      .bottom-tiao{
        // margin: 5px 5px 20px 0;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-left: 30px;
        // text-align: center;
        .el-progress{
          width: 95%;
        }
      }
    }
    .mid-down{
      width: 100%;
      margin-bottom: 50px ;
      .mid-down_number{
        display: flex;
        .down-today_number{
          flex: 1;
          text-align: center;
          font-size: 35px;
        }
        .down-last_number{
          flex: 1;
          text-align: center;
          font-size: 35px;
        }
      }
      .mid-down_txt{
        display: flex;
        .mid-down_txt1{
          flex: 1;
          text-align: center;
          font-size: 6px;
          color: #7C86A3;
        }
        .mid-down_txt2{
          flex: 1;
          text-align: center;
          font-size: 6px;
          color: #7C86A3;
        }
      }
    }
  }
}
</style>