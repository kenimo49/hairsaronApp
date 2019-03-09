<template>
  <section style="margin-top: 24px;">
    <v-list three-line>
      <template v-for="order in orders">
        <v-list-tile avatar :key="order.userName" @click="propose(order.userName)" >
          <v-list-tile-avatar><img :src="order.userPhotoPath"></v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="order.userName"></v-list-tile-title>
            <v-list-tile-sub-title>
              エリア: {{ order.area[0] }},　
              日時: {{ order.proporsalDate.proporsalDateStart }} ～ {{ order.proporsalDate.proporsalDateEnd }},　
              予算: {{ String(order.estimate.estimateStart).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') }} ～ {{ String(order.estimate.estimateEnd).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') }},　
              希望: {{ order.hope[0] }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </section>
</template>


<script lang="ts">
import { NuxtContext } from 'nuxt';
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ app }: NuxtContext): Promise<object> {
    const data = (await app.$axios.get('http://850b2c9b.ngrok.io/hairsaron/apiv1/orders?stylistId=1')).data.orders
    data.concat()
    console.log(data)

    return {
      orders: [
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
      ].concat(data)
    }
  },
  methods: {
    propose(userName: string) {
      this.$router.push({ path: `/propose?target=${userName}` });
    }
  }
});
</script>


<style scoped>
.v-list {
  background-color: rgba(248, 242, 242, .75);
}
</style>
