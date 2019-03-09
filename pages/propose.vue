<template>
  <section style="margin-top: 24px;">

    <v-card>
      <v-layout>
        <v-flex xs5>
          <v-img :src="order.userPhotoPath" height="240px"></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ order.userName }}</div>
              <div>エリア: {{ order.area }}</div>
              <div>日時: {{ order.proporsalDate.estimateStart }} ～ {{ order.proporsalDate.proporsalDateEnd }}</div>
              <div>予算: {{ order.estimate.estimateStart }} ～ {{ order.estimate.estimateEnd }}</div>
              <div>希望: {{ order.hope }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>

    <v-form>
      <v-textarea name="message" label="メッセージ" height="300"></v-textarea>
      <v-btn flat @click="signin">ご提案！</v-btn>
    </v-form>

  </section>
</template>


<script lang="ts">
import { NuxtContext } from 'nuxt';
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ query }: NuxtContext): Promise<object> {
    const orders = [
      {
        userName: "スタイリスト太郎",
        userPhotoPath: "http://image.news.livedoor.com/newsimage/9/5/954a07e8244511d6e87c4d3233413596-cm.jpg?v=20180718161102",
        hope: ["キレイ目"],
        area: ["東京"],
        estimate: {
          estimateStart : 2000,
          estimateEnd : 5000
        },
        proporsalDate: {
          proporsalDateStart: "2019/01/05",
          proporsalDateEnd: "2019/01/10"
          }
      },
      {
        userName: "スタイリスト次郎",
        userPhotoPath: "http://image.news.livedoor.com/newsimage/9/5/954a07e8244511d6e87c4d3233413596-cm.jpg?v=20180718161102",
        hope: ["キレイ目"],
        area: ["東京"],
        estimate: {
          estimateStart : 2000,
          estimateEnd : 5000
        },
        proporsalDate: {
          proporsalDateStart: "2019/01/05",
          proporsalDateEnd: "2019/01/10"
          }
      }
    ];

    return {
      order: orders.filter(o => o.userName === query.target)[0]
    }
  },
  methods: {
  }
});
</script>


<style scoped>
.v-card {
  width: 70%;
  margin: 0 auto;
}

.v-form {
  width: 70%;
  margin: 0 auto;
  background-color: rgba(248, 242, 242, .4);
  padding: 0 20px;
  color: black;
}
</style>
