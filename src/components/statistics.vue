<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 18:36:35
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 20:16:40
 -->
<template>
    <div class="div2" v-show="show">
        <ve-line left="100px" width="50%" :data="chartData" :settings="chartSettings"></ve-line>
    </div>
</template>
<script>
import {EventBus} from '@/eventBus';
export default {
    props: {
        id:Number
    },
    data() {
        this.chartSettings = {
            stack: { '用户': ['访问用户', '下单用户'] },
            area: true
        }
        return {
            show: false,
            chartData: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            }
        }
    },
    created() {
        EventBus.$on('switch',this.switch);
    },
    beforeDestroy() {
        EventBus.$off('switch',this.switch);
    },
    methods: {
        switch(id) {
            this.show = this.id==id;
        }
    }
}
</script>
<style>
.div2 {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
}
</style>