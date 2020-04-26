<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:40:26
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 15:14:12
 -->
<template>
    <v-navigation-drawer
        permanent
        expand-on-hover
        dark
        src="/navigation.jpg"
    >
        <v-list>

        <v-list-item link>
            <v-list-item-content>
            <v-list-item-title class="title">Stuff in Space</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
        nav
        dense
        >
        <v-list-item link>
            <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    //
  }
</script>