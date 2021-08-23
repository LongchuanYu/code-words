<template>
  <div class="wrapper">
      <div class="list">
          <div class="list-a">
              <div class="icon1">
                <i class="icon iconfont icon-shu1"></i>
              </div>
              <div class="txt">选择词库</div>
              <div class="icon2">
                <i class="icon iconfont icon-jiantou"></i>  
              </div>
          </div>
      </div>
      <div class="list">
          <div class="list-a">
              <div class="icon1">
                <i class="icon iconfont icon-gerenziliao"></i>
              </div>
              <div class="txt">个人资料</div>
              <div class="icon2">
                <i class="icon iconfont icon-jiantou"></i>  
              </div>
          </div>
      </div>
      <div class="list">
          <div class="list-a">
              <div class="icon1">
                <i class="icon iconfont icon-shezhi"></i>
              </div>
              <div class="txt">设置</div>
              <div class="icon2">
                <i class="icon iconfont icon-jiantou"></i>  
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.wrapper{
    .list{
        width: 100%;
        height: 50px;
        .list-a{
            display: flex;
            width: 100%;
            height: 50px;
            .icon1{
                line-height: 50px;
                margin-right: 20px;
                margin-left: 20px;
                .icon-shu1{
                    font-size: 24px;
                    color: #353F56;
                }
                .icon-shezhi{
                    font-size: 24px;
                    color: #353F56;
                }
                .icon-gerenziliao{
                    font-size: 24px;
                    color: #353F56;
                }
            }
            .txt{
                line-height: 50px;
                color: #353F56;
            }
            .icon2{
                line-height: 50px;
                margin-left: auto;
                .icon-jiantou{
                    font-size: 24px;
                    color: #353F56;
                }
            }
        }
    }
}
</style>