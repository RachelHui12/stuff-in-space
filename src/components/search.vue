<!--
 * @Descripttion: 
 * @Author: Qingao Chai
 * @Date: 2020-04-26 13:53:59
 * @LastEditors: Qingao Chai
 * @LastEditTime: 2020-04-26 15:12:42
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

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </div>

</template>

<style>
.search {
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 20px;
}
</style>