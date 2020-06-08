<template>
  <article class="order-item">
    <div class="wrapper name">
      <div class="item" v-for="myItem in filteredProducts" v-bind:key="myItem._id">
        <div class>
          <span>Produkt:</span>
          <span>{{myItem.title}}</span>
        </div>
        <div>
          <span>Kategori:</span>
          <span>{{myItem.category}}</span>
        </div>
      </div>
    </div>
    <div class="wrapper quantity">
      <p class="label quantity">Antal:</p>
      <p class="data quantity">{{item.quantity}}</p>
    </div>
    <div class="wrapper id">
      <p class="label id">Artikelnummer:</p>
      <p class="data id">{{item.id}}</p>
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
  },
  computed: {
    filteredProducts() {
      let tmp = this.$store.state.products.filter(
        item => item._id == this.orderItem.id
      );
      return tmp;
    }
  }
};
</script>


<style lang="scss" scoped>
.order-item {
  margin-bottom: 12px;
}

h5 {
  font-size: 0.8rem;
}
</style>