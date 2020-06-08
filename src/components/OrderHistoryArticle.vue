<template>
  <article class="order-item">
    <div class="wrapper id">
      <p class="label id">ID:</p>
      <!-- <p class="data id">{{item.id}}</p> -->
      <p class="data id">{{item.id}}</p>
    </div>
    <div class="wrapper quantity">
      <p class="label quantity">Antal:</p>
      <p class="data quantity">{{item.quantity}}</p>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      item: this.orderItem,
      isExpanded: this.expandMode,
    };
  },
  props: {
    orderItem: Object,
    expandMode: Boolean,
    orderItems: Object
  },
  
};
</script>


<style lang="scss" scoped>
.order-item {
  background: coral;
  margin-bottom: 12px;
  p {
    display: inline;
  }
}
</style>