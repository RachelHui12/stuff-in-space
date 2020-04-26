<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:11:54
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 15:35:04
 -->
<template>
  <v-app>
      <navigation/>
      <search/>
  </v-app>
</template>

<script>
import navigation from './components/navigation';
import search from './components/search';

export default {
  name: 'App',

  components: {
    navigation,
    search
  },

  data: () => ({
    //
  }),
};
</script>
