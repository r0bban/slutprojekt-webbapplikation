<template>
<article>
    <!-- <div @click="addToCart" class="add"><img src="../assets/graphics/add.svg" alt=""></div> -->
    <div class="text">
        <p class="id">{{order._id}}</p>
        <p class="timestamp">{{order._timeStamp}}</p>
        <p class="status">{{order.status}}</p>
        <p class="items">{{order.items}}</p>
    </div>
    <p class="total">{{order.orderValue}}</p>
</article>
</template>

<script>
export default {
    props: {
        Order: Object
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    .add {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        clip-path: circle();
        background-color: #2f2926;
        img {
            width: 1rem;
        }
        cursor: pointer;
    }

    .text {
        margin-left: 2rem;
        margin-right: auto;
        .title {
            font-size: 2rem;
        }
    }

    .price {
        font-size: 2rem;
    }
}

</style>