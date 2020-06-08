<template>
  <article class="order-card">
    <div class="wrapper id" @click="isExpanded = !isExpanded">
      <p class="label id">Ordernummer</p>
      <p class="data id">{{orderObject._id}}</p>
    </div>
    <div class="expandable" v-if="isExpanded">
      <div class="wrapper time">
        <p class="label time">Orderdatum</p>
        <p class="data time">{{orderObject.timeStamp}}</p>
      </div>
      <div class="wrapper amount">
        <p class="label quantity">Summa</p>
        <p class="data quantity">{{orderObject.orderValue}}</p>
      </div>
      <div class="wrapper status">
        <p class="label status">Status</p>
        <p class="data status">{{orderObject.status}}</p>
      </div>
      <span class="label">Products</span>
      <div class="items-list-wrapper">
        <OrderHistoryArticle v-for="item in orderObject.items" :key="item.id" :orderItem="item" />
      </div>
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
  }
};
</script>

<style lang="scss" scoped>
.order-card {
  // border: 2px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
}

.header {
  display: block;
  border-bottom: solid black 1px;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.label {
  font-size: 1.3rem;
  font-weight: 700;
}
.data {
  margin-left: 1rem;
}
</style>