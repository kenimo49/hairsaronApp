<template>
  <v-app :style="wallpaper()">
    <v-toolbar app flat height="36px">
      <v-toolbar-title class="title">
        <router-link to="/">
          <img src="@/static/icon.png" />
          <span class="neon">{{ require('~/package.json').displayName }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat fab color="black" class="no-margin"><v-icon>notifications_none</v-icon></v-btn>
      <v-btn flat fab color="black" class="no-margin"><v-icon>settings</v-icon></v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app class="footer" height="18px">
      <v-spacer></v-spacer>
      <small>© Since 2019 CTO-Hackathon.</small>
    </v-footer>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    wallpaper(): object {
      return { background: `url("${require(`~/assets/image/wallpaper-top.jpg`)}") center top / cover no-repeat fixed !important` };
    }
  }
});
</script>


<style>
nav {
  background-color: rgba(0, 0, 0, 0) !important;
}

.application {
  height: 100%;
}

.v-toolbar__content {
  padding-left: 4px;
}

.title a span {
  font-size: medium;
  font-weight: bold;
}
.title img {
  width: 48px;
  margin-top: 38px;
  margin-right: 4px;
}

.title .neon {
  color: white;
  font-size: 24px;
}

.footer {
  background-color: rgba(0, 0, 0, 0) !important;
  padding-right: 4px;
  min-height: 0px;
  text-align: right;
}
.footer a {
  color: #fff;
}
</style>
