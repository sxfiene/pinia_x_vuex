<template>
    <div class="countV">
        {{ store.state.countx }}
        <hr>
        <p>
            Item in Vuex's Cart : {{ store.state.cartx }}
        </p>
    </div>
        <button @click="store.commit('addToCart', objetOne)">Add object 1</button>

    <div class="buttons">
        <button @click="store.commit('increment')">+</button>
        <button @click="store.commit('decrement')">-</button>
    </div>

    <a>Ce conteur est {{ store.state.countx % 2 === 0 ? 'pair' : 'impair' }} </a>
    <div>
        <h3>Edit Counter :</h3>

        <input v-model="store.state.countx" type="number">
    </div>

    <hr>

    <div id="cart">
        <h2>Cart</h2>
        <p>Items in Pinia's cart: {{ counterStore.cart }}</p>
    </div>

</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
    import { useStore } from 'vuex'
    const store = useStore()

let objetOne = {
    name: 'objet1',
    price: 10
}
</script>

<style scoped>
.countV{
    font-size: 2rem;
    font-weight: bold;
    color: #ff0000;
}
.buttons button{
    font-size: 40px;
    margin: 20px;
}
</style>