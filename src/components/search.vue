<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:53:59
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 19:36:53
 -->
<template>
    <div>
        <v-toolbar
            dense
            floating
            dark
            class="search"
        >
            <v-text-field
                hide-details
                prepend-icon="search"
                single-line
            ></v-text-field>
            <v-menu transition="fade-transition">
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list dark>
                    <v-list-item v-for="(name,index) in stuff_class" :key="index" @click="alert(index)">
                    <v-list-item-title v-text="name"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
    </div>

</template>
<script>
export default {
    data() {
        return {
            stuff_class: [
                "GPS",
                "Iridium",
                "GLONASS",
                "Galileo",
                "Iridium 33 Collision Debris",
                "Westford Needles",
                "SpaceX"
            ]
        }
    }
}
</script>

<style>
.search {
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 20px;
}
</style>