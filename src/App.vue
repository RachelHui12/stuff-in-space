<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:11:54
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 19:25:32
 -->
<template>
    <v-app>
        <navigation/>
        <earth id="0"/>
        <statistics id="1"/>
        <search/>
    </v-app>
</template>

<script>
import navigation from './components/navigation';
import search from './components/search';
import earth from './components/earth';
import statistics from './components/statistics'
import {EventBus} from '@/eventBus'

export default {
    name: 'App',
    components: {
        navigation,
        search,
        earth,
        statistics
    },
    created() {
        EventBus.$on('switch',this.switch);
    },
    beforeDestroy() {
        EventBus.$off('switch',this.switch);
    },
    data: () => ({
        show: [
            false,
            true
        ]
    }),
    methods: {
        switch(id) {
            if(this.show[id]) return;
            for(let i=0;i<this.show.length;i++) this.show[i]=false;
            this.show[id]=true;
            console.log(this.show);
        }
    }
};
</script>
