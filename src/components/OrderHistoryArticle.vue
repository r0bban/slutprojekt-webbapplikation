<template>
  <article class="order-item">
    <div class="wrapper name">
      <p
        v-for="myItem in filteredProducts"
        v-bind:key="myItem._id"
      >Produkt: {{myItem.title}}, Kategori: {{myItem.category}}</p>
    </div>
    <div class="wrapper quantity">
      <p class="label quantity">Antal:</p>
      <p class="data quantity">{{item.quantity}}</p>
    </div>
    <div class="wrapper id">
      <p class="label id">id:</p>
      <!-- <p class="data id">{{item.id}}</p> -->
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
        // item => item._id == "VQCZcEEEC6U7HrHf"
      );
      return tmp;
    }
  }
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