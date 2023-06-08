<template>
    <div class="countP">
        {{ count }}
    </div>

    <div class="buttons">
        <button @click="increaseCount">+</button>
        <button @click="decreaseCount">-</button>
    </div>

  This counter is :  {{ oddOrEven }}
    <div>
        <h3>Edit Counter :</h3>
        <input v-model.number="count" type="number">
    </div>

    <hr>

    <div id="cart">
        <h2>Cart</h2>
        <p>Items in Pinia cart: {{ cart }}</p>
        <button @click="addToCart(objetOne)">Add object 1</button>
    </div>

</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const { count, increaseCount, oddOrEven, decreaseCount, addToCart, cart } = useCounterStore();

const objetOne = {
    name: 'objet1',
    price: 10
};
</script>

<style scoped>
.countP{
    font-size: 2rem;
    font-weight: bold;
    color: #ff0000;
}
.buttons button{
    font-size: 40px;
    margin: 20px;
}
</style>
```