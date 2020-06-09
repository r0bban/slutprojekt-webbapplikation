<template>
  <article class="order-card">
    <div class="wrapper id">
      <h4 class="label id">Ordernummer:</h4>
      <span class="data id">{{orderObject._id}}</span>
    </div>
    <div class="wrapper time">
      <h4 class="label time">Orderdatum:</h4>
      <p class="data time">{{orderObject.timeStamp}}</p>
    </div>
    <div class="wrapper amount">
      <h4 class="label quantity">Summa:</h4>
      <p class="data quantity">{{orderObject.orderValue}} kr</p>
    </div>
    <div class="wrapper status">
      <h4 class="label status">Status:</h4>
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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 1.2rem;
}

.wrapper {
  h4 {
    font-family: "PT Serif", serif;
    font-weight: 200;
    font-size: 1rem;
  }

  span {
    font-family: "Work Sans", sans-serif;
    font-size: 0.63rem;
  }
}
</style>