<template>
  <div class="home-warp">
    <!--侧边栏-->
    <div class="home-sidebar">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               background-color="#324157" text-color="#bfcbd9" active-text-color="#fff" router unique-opened>
        <template v-for="item in sldebarLists">
          <template v-if="item.children">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item v-for="(children,i) in item.children" :index="children.index" :key="i">{{children.title}}
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
    <!--顶部栏-->
    <div class="home-nav">
      <!--title-->
      <div class="nav-title">
        后台管理系统
      </div>
      <div class="home-user">
        <!--用户下拉菜单-->
        <el-dropdown @command="handleCommand" placement="bottom-start" trigger="click" class="userInfo">
                <div class="el-dropdown-link">
                  <div class="user-name">
                    王路飞
                  </div>
                  <div class="user-header">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1085482503,4263095848&fm=27&gp=0.jpg">
                  </div>
                </div>
          <el-dropdown-menu slot="dropdown" class="dropdown-menu">
            <el-dropdown-item command="a">修改资料</el-dropdown-item>
            <el-dropdown-item command="b">修改密码</el-dropdown-item>
            <el-dropdown-item command="c">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--用户头像-->
        <!--<div class="user-header">-->
          <!--<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1085482503,4263095848&fm=27&gp=0.jpg">-->
        <!--</div>-->
      </div>
    </div>
    <!--内容区域-->
    <div class="home-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .home-warp {
    width: 100%;
    height: 100%;
    /*侧边栏导航*/
    .home-sidebar {
      width: 250px;
      position: absolute;
      left: 0;
      top: 70px;
      bottom: 0;
      background-color: #324157;
      /*一级标题ul*/
      .el-menu-vertical-demo {
        width: 100%;
        height: 100%;
        background-color: #324157;
        li {
          .el-icon-setting {
            margin-right: 10px;
          }
          i {
            color: #bfcbd9;
          }
        }
        /*单导航li*/
        .el-menu-item {

        }
        /*嵌套导航li*/
        .el-submenu {

          /*嵌套导航title*/
          .el-submenu__title {

          }
          /*嵌套导航内ul*/
          .el-menu {
            /*嵌套导航内li*/
            .el-menu-item {

            }
          }
        }
      }
    }

    /*顶部导航*/
    .home-nav {
      width: 100%;
      height: 70px;
      background-color: #324157;
      position: relative;
      /*title*/
      .nav-title {
        width: 250px;
        height: 100%;
        line-height: 70px;
        float: left;
        text-align: center;
        color: #ffffff;
        font-size: 20px;
      }
      /*用户部分*/
      .home-user {
        float: right;
        padding-right: 50px;
        color: #ffffff;
        font-size: 16px;
        > div {
          float: right;
        }
        .userInfo {
          height: 70px;
          margin-left: 15px;
          line-height: 70px;
          color: #ffffff;
          .dropdown-menu {
            margin-top: 0px;
          }
          .user-name{
            float: left;
          }
          .user-header {
            float: left;
            width: 40px;
            height: 40px;
            margin-top: 15px;
            margin-left: 14px;
            overflow: hidden;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }

    /*内容区域*/
    .home-content {
      position: absolute;
      top: 70px;
      left: 250px;
      bottom: 0;
      right: 0;
      overflow-y: scroll;
      background-color: #f5f5f5;
      padding: 40px;
    }
    /*修改用户信息列表到顶部距离*/
    .el-popper[x-placement^=bottom]{
      margin-top: 5px;
    }
  }

</style>
<script>
  export default {
    data() {
      return {
        sldebarLists: [
          {
            index: "/user",
            icon: "el-icon-menu",
            title: "系统首页"
          },
          {
            index: "/clipping",
            icon: "el-icon-edit-outline",
            title: "图片上传插件"
          },
          {
            index:"/baidiMap",
            icon:"el-icon-menu",
            title:"百度地图"
          },
          {
            index: "/chart",
            icon: "el-icon-edit-outline",
            title: "图表绘制"
          },
          {
            index: "3",
            icon: "el-icon-edit-outline",
            title: "公司新闻管理",
            children: [
              {
                index: "/companyLists",
                title: "公司新闻管理"
              }
            ]
          },
          {
            index:"/loginLog",
            icon:"el-icon-tickets",
            title:"登录日志",
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }

</script>
