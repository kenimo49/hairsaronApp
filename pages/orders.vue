<template>
  <section style="margin-top: 24px;">
    <v-list three-line>
      <template v-for="order in orders">
        <v-list-tile avatar :key="order.userName" @click="propose(order.userName)" >
          <v-list-tile-avatar><img :src="order.userPhotoPath"></v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="order.userName"></v-list-tile-title>
            <v-list-tile-sub-title>
              エリア: {{ order.area }},
              日時: {{ order.proporsalDate.estimateStart }} ～ {{ order.proporsalDate.proporsalDateEnd }},
              予算: {{ order.estimate.estimateStart }} ～ {{ order.estimate.estimateEnd }},
              希望: {{ order.hope }}
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
    console.log(app)
    return {
      orders: [
        {
          userName: "スタイリスト太郎",
          userPhotoPath: "https://camo.qiitausercontent.com/7081d402d9361d63ba0c157726c1bd15b6920603/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3235363532302f34303465323836662d623238662d393837382d396235662d3661653833633437613435642e6a706567",
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
          userPhotoPath: "https://camo.qiitausercontent.com/7081d402d9361d63ba0c157726c1bd15b6920603/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3235363532302f34303465323836662d623238662d393837382d396235662d3661653833633437613435642e6a706567",
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
      ]
    }
  },
  methods: {
    propose(userName: string) {
      this.$router.push({ path: `/propose?${userName}` });
    }
  }
});
</script>


<style scoped>
.theme--dark.v-list {
  background-color: rgba(32, 16, 16, .6);
}
</style>
