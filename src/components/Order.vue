<template>
  <article class="order-card">
    <div class="wrapper id">
      <p class="label id">Ordernummer:</p>
      <p class="data id">{{orderObject._id}}</p>
    </div>
    <div class="wrapper time">
      <p class="label time">Orderdatum:</p>
      <p class="data time">{{orderObject.timeStamp}}</p>
    </div>
    <div class="wrapper amount">
      <p class="label quantity">Summa:</p>
      <p class="data quantity">{{orderObject.orderValue}} kr</p>
    </div>
    <div class="wrapper status">
      <p class="label status">Status:</p>
      <p class="data status">{{orderObject.status}}</p>
    </div>
    <button @click="toggleExpand()">Artiklar</button>
    <div v-if="this.isExpanded" class="items-list-wrapper">
      <OrderHistoryArticle v-for="item in orderObject.items" :key="item.id" :orderItem="item" />
    </div>
  </article>
</template>

<script>
import OrderHistoryArticle from "@/components/OrderHistoryArticle.vue";

export default {
  components: {
    OrderHistoryArticle
  },
  data() {
    return {
      orderObject: this.order,
      isExpanded: this.expandMode
    };
  },
  props: {
    order: Object,
    expandMode: Boolean
  },

  methods: {
    findItem(id) {
      let tmp = this.$store.state.products.filter(item => item._id == id);
      return tmp;
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    }
  },
  mounted() {
    console.log(this.order.items);
  }
};
</script>

<style lang="scss" scoped>
.order-card {
  border: 2px solid black;
  margin: 0 auto;
  p {
    display: inline;
  }
}
</style>