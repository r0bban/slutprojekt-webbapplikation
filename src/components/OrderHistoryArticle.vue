<template>
  <article class="order-item">
    <div class="wrapper id">
      <p class="label id">Artikelnummer</p>
      <p class="data id">{{item.id}}</p>
    </div>
    <div class="wrapper quantity">
      <p class="label quantity">Artikelnummer</p>
      <p class="data quantity">{{item.quantity}}</p>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      item: this.orderItem,
      isExpanded: this.expandMode
    };
  },
  props: {
    orderItem: Object,
    expandMode: Boolean
  }
};
</script>


<style lang="scss" scoped>
.order-item {
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 0 1rem;
  background: lightpink;
}
.label {
  font-weight: 700;
}
.data {
  margin-left: 1rem;
}
</style>