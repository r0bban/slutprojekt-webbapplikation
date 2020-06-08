<template>
  <!-- <article>
    <div @click="addToCart" class="add"><img src="../assets/graphics/add.svg" alt=""></div>
    <div class="text">
      <p class="id">ID: {{order._id}} "bajs"</p>
      <p class="timestamp">Datum: {{order._timeStamp}}</p>
      <p class="status">Status: {{order.status}}</p>
      <p class="items">{{order.items}}</p>
      <p>Artiklar:</p>
      <div @click="lookupItem(item)" v-for="(item) in order.items" v-bind:key="item">{{item}}</div>
      <p class="ordersum">Summa: {{order.orderValue}} kr</p>
    </div>
  </article>-->

  <div class="orders-list-wrapper">
    <Order v-for="order in orderHistory" :key="order._id" :order="order" :expandMode="expandMode" />
  </div>
</template>

<script>
import Order from "@/components/Order.vue";

export default {
  components: {
    Order
  },

  props: {
    expandMode: Boolean
    // order: Object,
    // orders: Array
  },
  computed: {
    orderHistory() {
      return this.$store.state.orderHistory;
    },

    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProductById", this.order.items);
    },
    lookupItem(item) {
      return { retrievedItem: this.$store.dispatch("getProductById", item) };
    }
  },

  beforeMount() {
    this.$store.dispatch("refreshOrderHistory");
  }
  // mounted() {
  //   // Just nu skickas ett get med [id1, id2, id3] osv (från rad 28), behöver göra ett separat anrop för varje ID alternativt hämta direkt från storen
  //   this.getProducts();
  // }
};
</script>

<style lang="scss" scoped>
.orders-list-wrapper {
  box-shadow: 0 0 2px white;
  padding: 1rem;
  background: rgb(213, 250, 250);

  border-radius: 5px;
}

article p:nth-child(n) {
  background-color: red;
}
</style>