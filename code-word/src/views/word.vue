<template>
<div>
<div class="wrapper">
    <div class="word-wrapper">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="上策词" name="1">
                <div class="list">
                    <div class="txt">unit1</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/34</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini" @click="toLook">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit2</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/46</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit3</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/45</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit4</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/59</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>  
                <div class="list">
                    <div class="txt">unit5</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/62</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>  
                <div class="list">
                    <div class="txt">unit6</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/51</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>          
            </el-collapse-item>
             <el-collapse-item title="中策词" name="2">
                <div class="list">
                    <div class="txt">unit7</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/34</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit8</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/46</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit9</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/45</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit10</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/59</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>  
                <div class="list">
                    <div class="txt">unit11</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/62</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>  
                <div class="list">
                    <div class="txt">unit12</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/51</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>          
            </el-collapse-item>
             <el-collapse-item title="下策词" name="3">
                <div class="list">
                    <div class="txt">unit13</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/34</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit14</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/46</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit15</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/45</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>
                <div class="list">
                    <div class="txt">unit16</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/59</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>  
                <div class="list">
                    <div class="txt">unit17</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/62</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>  
                <div class="list">
                    <div class="txt">unit18</div>
                    <div class="progress">
                        <div class="progress1">
                            <el-progress :percentage="20">
                                <el-button type="text">0/51</el-button>
                            </el-progress>
                        </div>
                        <div class="progress2">
                            <el-button type="primary" round size="mini">背词</el-button>
                        </div>
                        <div class="progress3">
                            <el-button round size="mini">查看</el-button>
                        </div>
                    </div>
                    </div>          
            </el-collapse-item>
        </el-collapse>
    </div>
</div>
<v-tab></v-tab>
</div>



</template>

<script>
import { useRouter } from "vue-router";
import  tab  from '@/components/tab.vue'
  export default {
      components:{
          'v-tab' : tab
      },
      setup(){
          const router = useRouter()
          const toLook = () =>{
              router.push({path : '/look'})
          }


          return {
              toLook
          }
      }
//     data() {
//       return {
//         activeNames: ['1']
//       };
//     },
//     methods: {
//       handleChange(val) {
//         console.log(val);
//       }
//     }
  }
</script>

<style lang="less">
.wrapper{
    padding:10px;
    .word-wrapper{
        .list{
            margin-left:20px;
            .txt{
                margin-top: 10px;
            }
            .progress{
                display: flex;
                line-height: 40px;
                .progress1{
                    width: 50%;
                    margin-right: 35px;
                }
                .progress2{
                  margin-right: 10px;
                }
            }
        }
    }
}
</style>
