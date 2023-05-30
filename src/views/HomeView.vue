<template>
  <div class="home">
    <Counter />
    
    <div class="buttons">
      <button @click="counterStore.increaseCount">+</button>
      <button @click="counterStore.decreaseCount">-</button>  
    </div>
    <hr>

    <div>
      this counter is {{ counterStore.oddOrEven }}
    </div>
    <hr>
  <div>
    <h3>Edit Counter :</h3>
    <input v-model="counterStore.count" type="number">
  </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter' 
import Counter from '@/components/Counter.vue'
const counterStore = useCounterStore()
</script>


<style scoped>
.buttons button{
  font-size: 40px;
  margin: 20px;
}
</style>

