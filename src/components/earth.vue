<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 15:39:23
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 19:15:00
 -->
<template>
  <div class="viewer" v-show="show">
    <vc-viewer :shouldAnimate="true" @ready="ready">
      <vc-datasource-czml czml="./simple.czml" @ready="subReady" :show="show"></vc-datasource-czml>
    </vc-viewer>
  </div>
</template>

<script>
import {EventBus} from '@/eventBus'
export default {
    props: {
        id:Number
    },
    data() {
      return {
        show: true
      }
    },
    created() {
        EventBus.$on('switch',this.switch);
    },
    beforeDestroy() {
        EventBus.$off('switch',this.switch);
    },
    methods: {
      // eslint-disable-next-line no-unused-vars
      ready(cesiumInstance) {},
      subReady(cesiumInstance) {
        // eslint-disable-next-line no-unused-vars
        const { Cesium, viewer } = cesiumInstance
        viewer.camera.flyHome(0)
      },
      switch(id) {
          this.show = this.id==id;
      }
    }
  }
</script>

<style>
.viewer{
    width: 100%;
    height: 100%;
}
</style>