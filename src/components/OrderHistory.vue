<template>
  <article>
    <!-- <div @click="addToCart" class="add"><img src="../assets/graphics/add.svg" alt=""></div> -->
    <div class="text">
      <p class="id">{{order._id}}</p>
      <p class="timestamp">{{order._timeStamp}}</p>
      <p class="status">{{order.status}}</p>
      <p class="items">{{order.items}}</p>
      <p class="ordersum">{{order.orderValue}}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    order: Object
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProductById", this.order.items);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>