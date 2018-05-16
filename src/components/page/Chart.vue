<template>
  <div class="chart">
    <div class="vue-schart">
      <div class="common-title">vue-schart</div>
      <schart class="wrapper" :canvasId="canvasId" :type="type" :data="data" :options="options"></schart>
    </div>
    <div class="EChart">
      <div class="common-title">EChart</div>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>
<script>
  import Schart from 'vue-schart'

  import $ from  'jquery'

  import echarts from 'echarts'

  export default {
    created(){
      console.log($);
      console.log(echarts);
    },
    mounted(){
      this.drawLine()
    },
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'pie',
        data: [
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
          {name: '2016', value: 1654},
          {name: '2017', value: 1795},
        ],
        options: {
          title: '销量情况',
          titleColor:"#1E9FFF"
        }
      }
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({
          title: { text: '销量情况' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    },
    components:{
      Schart
    }
  }
</script>
<style lang="less">
  .wrapper{
    width: 525px;
    height: 375px;
  }
  .EChart{
    margin-top: 40px;
  }
</style>
