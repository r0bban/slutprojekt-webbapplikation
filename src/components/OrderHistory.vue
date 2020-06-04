<template>
  <article>
    <!-- <div @click="addToCart" class="add"><img src="../assets/graphics/add.svg" alt=""></div> -->
    <div class="text">
      <p class="id">ID: {{order._id}}</p>
      <p class="timestamp">Datum: {{order._timeStamp}}</p>
      <p class="status">Status: {{order.status}}</p>
      <!-- <p class="items">{{order.items}}</p> -->
      <p>Artiklar:</p>
      <div @click="lookupItem(item)" v-for="(item) in order.items" v-bind:key="item">{{item}}</div>
      
      <p class="ordersum">Summa: {{order.orderValue}} kr</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    order: Object,
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProductById", this.order.items);
    },
    lookupItem(item) {
      let retrievedItem = this.$store.dispatch("getProductById", item);
      console.log(retrievedItem)
    }
  },
  mounted(){
  }
};
</script>

<style lang="scss" scoped>
article p:nth-child(n) {
  background-color: red;
}
</style>