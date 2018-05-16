<template>
  <div class="baiduMap">
    <div class="common-title">百度地图</div>
    <div id="allmap"></div>
  </div>
</template>
<script>
  import BMap from 'BMap'

  console.log(BMap);
  export default {
    mounted() {
      alert(121)
      this.ready();
    },
    methods: {
      ready: function () {
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.289251, 40.039657);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
      }
    }
  }
</script>
<style lang="less">
  #allmap {
    width:100%;
    position: absolute;
    top: 100px;
    left: 0;
    bottom: 0;
    background-color: red;
  }
</style>
