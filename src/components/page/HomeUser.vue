<template>
  <div class="home-user">
    <el-row :gutter="40">
      <el-col :span="8">
        <el-card shadow="hover" class="user">
          <div class="user-info clearfix">
            <div class="user-header">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1085482503,4263095848&fm=27&gp=0.jpg">
            </div>
            <div class="user-name">
              <h3>admin</h3>
              <p>茶几管理员</p>
            </div>
          </div>
          <div class="logon-info">
            <div class="login-time">
              上次登陆时间：
              <span>2018.03.26</span>
            </div>
            <div class="login-address">
              上次登录地点：
              <span>上海</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">

      </el-col>
    </el-row>
  </div>
</template>
<style lang="less">
  /*卡片*/
  .el-card {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .home-user {
    .user {
      padding: 20px;
      .user-info {
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        -khtml-align-items: center;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
        img {
          width: 120px;
          height: 120px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          vertical-align: middle;
        }
        .user-name {
          -webkit-flex: 1;
          -moz-flex: 1;
          -ms-flex: 1;
          -o-flex: 1;
          -khtml-flex: 1;
          flex: 1;
          padding-left: 50px;
          text-align: left;
          h3{
            font-size: 20px;
            color: #222;
          }
          p{
            font-size: 14px;
            color: #999;
          }
        }

      }
      .logon-info{
        >div{
          font-size: 14px;
          line-height: 25px;
          color: #999;
          span{
            margin-left: 70px;
          }
        }
      }
    }
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
<script>
  export default {}
</script>
