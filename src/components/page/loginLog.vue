<template>
  <div class="login-log">
    <!--表格-->
    <el-table
      :data=total.slice((currentPage4-1)*pazeSize,currentPage4*pazeSize)
      stripe
      style="width: 100%">
      <el-table-column
        prop="createTime"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="地址">
      </el-table-column>
    </el-table>

    <!--分页器-->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[15, 20, 30, 50]"
        :page-size=pazeSize
        layout="total, sizes, prev, pager, next, jumper"
        :total="total.length">
      </el-pagination>
    </div>
  </div>
</template>
<style lang="less">
.login-log{
  .pagination{
    float: right;
  }
}
</style>
<script>
  export default {
    created(){
      this.getData()
    },
    methods: {
      getData(){
        const that=this;
        this.$http.get("/api/findLogList/1/99999999")
          .then(res=>{
           that.$nextTick(()=>{
             console.log(res);
             that.total=res.data.data.rows;
             console.log(typeof this.total.slice((this.currentPage4 - 1) *this.pazeSize, this.currentPage4 * this.pazeSize));
           })
          })
          .catch(err=>{
            console.log(err);
          })
      },
      //每页数目切换时触发
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pazeSize=val;
      },
      //点击当前页面时触发
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage4=val;
      }
    },
    data() {
      return {
        total:"",
        pazeSize:15,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      }
    }
  }
</script>
