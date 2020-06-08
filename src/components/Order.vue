<template>
  <article class="order-card">
    <div class="wrapper id">
      <p class="label id">Ordernummer</p>
      <p class="data id">{{orderObject._id}}</p>
    </div>
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
    <div class="items-list-wrapper">
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
  }
};
</script>

<style lang="scss" scoped>
.order-card {
  background: burlywood;
  border: 2px solid black;
}
</style>