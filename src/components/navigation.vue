<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:40:26
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 19:24:58
 -->
<template>
    <v-navigation-drawer
        permanent
        expand-on-hover
        dark
        absolute
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
        <v-list-item link @click="select(0)">
            <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="select(1)">
            <v-list-item-icon>
            <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Statistics</v-list-item-title>
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
import {EventBus} from '@/eventBus'
    export default {
        data() {
            return {
                current: 0
            }
        },
        methods: {
            select(id) {
                EventBus.$emit('switch',id);
            }
        }
    }
</script>