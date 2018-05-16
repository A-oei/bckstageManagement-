<template>
  <div class="company-news">
    <!--标签-->
    <div class="common-title">编辑公司新闻</div>
    <el-tabs type="border-card" @tab-click="handleClick">
      <!--标签-->
      <template v-for="item in tabsLists">
        <el-tab-pane :label="item"></el-tab-pane>
      </template>
      <!--列表-->
      <!--scope element自带的data  scope.row = tableData-->
      <!--循环出每一行，向对应的行中添加列-->
      <template>
        <el-table
          :data="tableLists"
          style="width: 100%"
          stripe
          border
        >
          <el-table-column
            label="编号"
            width="80"
            type="index"
            :index="indexMethod"
            header-align="center"
            fixed>
          </el-table-column>
          <el-table-column
            label="标题"
            width="180"
            fixed
            align="center">
            <template slot-scope="scope" align>
              <span>{{ scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="发布人"
            width="100"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.username}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="封面"
            width="200">
            <template slot-scope="scope">
              <img :src="scope.row.topicPicUrl" style="width: 100%;">
            </template>
          </el-table-column>
          <el-table-column
            label="摘要"
            min-width="300"
            show-overflow-tooltip
          style="padding: 0">
            <template slot-scope="scope">
              <span>{{ scope.row.source}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="日期"
            width="180"
            align="center"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.publishDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="400" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                icon="el-icon-upload2"
                v-show=topButton
                @click="handleEdit(scope.$index, scope.row)">置顶
              </el-button>
              <el-button
                size="mini"
                icon="el-icon-edit"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                icon="el-icon-delete"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

    </el-tabs>
  </div>
</template>
<style lang="less">
  .company-news {
    .test{
      color: red;
      display: none;
    }
    /*列表header*/
    .el-table th{
      background-color: #eef1f6;
    }

    .el-table__body, .el-table__footer, .el-table__header tr{
      background-color: greenyellow;
    }
    /*顶部标签栏*/
    .el-tabs--border-card {
      border: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      background-color: #fff;
    }
    .el-tabs--border-card > .el-tabs__header {
      background-color: #f5f5f5;
    }

    .el-tabs__item {
      -webkit-border-radius: 5px 5px 0 0;
      -moz-border-radius: 5px 5px 0 0;
      border-radius: 5px 5px 0 0;
    }
    .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
      /*border: 1px solid #ccc;*/
      /*border-bottom: none;*/
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        //控制置顶标签是否显示
        topButton:true,
        //标签列表
        tabsLists: [
          "已发布",
          "待发布",
          "未发布"
        ],
        //列表数据
        tableLists:[]
      }
    },
    created() {
      this.getNewsLists();
    },
    methods: {
      //获取数据
      getNewsLists(status=1,cid=0,username=0,publish_date=0,showstatus=-1) {
        this.$http.get("/api/findAddNewsList/1/999999/" + status + "/" + cid + "/" + username + "/" + publish_date + "/" + showstatus)
          .then(res => {
            console.log(res, "公司新闻列表");
            this.tableLists=res.data.data.rows;
          })
          .catch(err=>{
            console.log(err);
          })
      },
      //标签栏点击
      handleClick(tab) {
        let status=tab.index*1+1;
        if(status != 1){
          this.topButton=false;
        }else{
          this.topButton=true;
        }
        this.getNewsLists(status);
      },

      //编辑按钮
      handleEdit(index, row) {
        console.log(index, row);
        console.log(this.$router);
        this.$router.push("/editor/123")
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      indexMethod(index) {
        return index+1;
      }
    }
  }
</script>
