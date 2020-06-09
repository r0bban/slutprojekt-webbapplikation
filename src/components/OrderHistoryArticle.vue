<template>
  <article class="order-item">
    <div class="wrapper name">
      <div class="item" v-for="myItem in filteredProducts" v-bind:key="myItem._id">
        <div>
          <h4>Produkt:</h4>
          <p>{{myItem.title}}</p>
        </div>
        <div>
          <h4>Kategori:</h4>
          <p>{{myItem.category}}</p>
        </div>
                <div>
          <h4>Pris:</h4>
          <p>{{myItem.price}} kr</p>
        </div>
      </div>
      <div>
        <h4>Antal:</h4>
        <p>{{item.quantity}}</p>
      </div>
      <div>
        <h4>Artikelnummer:</h4>
        <p>{{item.id}}</p>
      </div>
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
  methods: {},
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
  display: inline-block;
  margin: 0.4rem;
  background-color: rgba($color: #000000, $alpha: 0.7);
  border-radius: 1rem;
  padding: 0.6rem;
  h4 {
    color: rgb(235, 235, 235);
  }
  p {
    color: rgb(197, 197, 197);
  }
}
</style>