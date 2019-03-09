<template>
  <section class="bottom">
      <v-layout row>
        <v-flex xs12>
          <v-form>
            <v-text-field label="ユーザー名" v-model="username" required />
            <v-text-field label="パスワード" v-model="password" :type="show ? 'text' : 'password'" :append-icon="show ? 'visibility' : 'visibility_off'" @click:append="show = !show" />
            <v-btn flat @click="signin">ログイン</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
  </section>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: (): object => ({
    show: false
  }),
  methods: {
    signin(): void {
      this.$router.push({ path: '/orders' });
    }
  }
});
</script>


<style scoped>
.bottom {
  background-color: rgba(248, 242, 242, .4);
  padding: 0 20px;
  color: black;
}
</style>
