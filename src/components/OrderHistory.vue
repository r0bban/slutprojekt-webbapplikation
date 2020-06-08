<template>
  <div class="orders-list-wrapper">
    <Order v-for="order in orderHistory" :key="order._id" :order="order" />
  </div>
</template>

<script>
import Order from "@/components/Order.vue";

export default {
  components: {
    Order
  },

  props: {},

  computed: {
    orderHistory() {
      return this.$store.state.orderHistory;
    },

    products() {
      return this.$store.state.products;
    }
  },
  methods: {},

  beforeMount() {
    this.$store.dispatch("refreshOrderHistory");
  },
  mounted(){
    this.orderedProducts
  }
};
</script>

<style lang="scss" scoped>
.orders-list-wrapper {
  background: cadetblue;
  border: 2px dotted black;
}

article p:nth-child(n) {
  background-color: red;
}
</style>