<template>
    <div class="countP">
      {{ counterStore.count }}
    </div>

    <div class="buttons">
        <button @click="counterStore.increaseCount">+</button>
        <button @click="counterStore.decreaseCount">-</button>
    </div>

  Ce conteur est :  {{ counterStore.oddOrEven }}
    <div>
        <h3>Edit Counter :</h3>

        <input v-model="counterStore.count" type="number">
    </div>
  <hr>

  <div id="cart">
      <h2>Cart</h2>
      <p>Items in cart: {{ counterStore.cart }}</p>
      <button @click="counterStore.addToCart(objetOne)">Add object 1</button>
  </div>

</template>

<script setup>
    import { useCounterStore } from '@/stores/counter' 
    const counterStore = useCounterStore()

    const objetOne = {
        name: 'objet1',
        price: 10
    }
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
