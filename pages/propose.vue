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
              <div>エリア: {{ order.area[0] }}</div>
              <div>日時: {{ order.proporsalDate.proporsalDateStart }} ～ {{ order.proporsalDate.proporsalDateEnd }}</div>
              <div>予算: {{ String(order.estimate.estimateStart).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') }} ～ {{ String(order.estimate.estimateEnd).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') }}</div>
              <div>希望: {{ order.hope[0] }}</div>
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
    message: 'モヒカンには熱い思いがあるんだ～～～\nお任せください！！',
    dialog: false
  }),
  async asyncData({ query }: NuxtContext): Promise<object> {
    const orders = [
        {
          userName: "マツコ",
          userPhotoPath: "https://camo.qiitausercontent.com/7081d402d9361d63ba0c157726c1bd15b6920603/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3235363532302f34303465323836662d623238662d393837382d396235662d3661653833633437613435642e6a706567",
          hope: [ "インパクトのある" ],
          area: [ "シブヤ" ],
          estimate: {
            estimateStart : 2000,
            estimateEnd : 4000
          },
          proporsalDate: {
            proporsalDateStart: "2019/2/9",
            proporsalDateEnd: "2019/2/10"
            }
        },
        {
          userName: "マツコ次郎",
          userPhotoPath: "http://image.news.livedoor.com/newsimage/stf/e/0/e030e3c6c0ef1e8bf7461029c64bf14d-cm.jpg?v=20190222071729",
          hope: ["キレイ目"],
          area: ["シブヤ"],
          estimate: {
            estimateStart : 2000,
            estimateEnd : 5000
          },
          proporsalDate: {
            proporsalDateStart: "2019/2/10",
            proporsalDateEnd: "2019/2/10"
            }
        },
        {
          userName: "マツコ三郎",
          userPhotoPath: "https://pbs.twimg.com/profile_images/670404289060171776/1GAWu4JF_400x400.jpg",
          hope: ["女優"],
          area: ["１０９"],
          estimate: {
            estimateStart : 5000,
            estimateEnd : 8000
          },
          proporsalDate: {
            proporsalDateStart: "2019/2/10",
            proporsalDateEnd: "2019/2/28"
            }
        }
      ];

    return {
      order: orders.filter(o => o.userName === query.target)[0]
    }
  },
  methods: {
    propose() {
      const data = {
        stylistId: 10,
        message: this.message
      };
      console.log(data)
      this.dialog = false;
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
  background-color: rgba(248, 242, 242, .75);
  padding: 0 20px;
  color: black;
}
</style>
