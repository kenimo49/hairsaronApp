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



    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-form>
          <v-textarea v-model="message" label="メッセージ"></v-textarea>
          <v-btn color="red lighten-2" dark v-on="on">ご提案！</v-btn>
        </v-form>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>提案を送信します。</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="propose()">ＯＫ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </section>
</template>


<script lang="ts">
import { NuxtContext } from 'nuxt';
import Vue from 'vue';

export default Vue.extend({
  data: (): object => ({
    message: '',
    dialog: false
  }),
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
    propose() {
      this.dialog = false;
      console.log(this.message)
    }
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
