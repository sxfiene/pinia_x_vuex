<template>
  <div class="about">
    <button @click="counterStore.increaseCount" class="counter-button">{{ counterStore.count }}</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore()


</script>

<style scoped>
.counter-button {
  font-size: 50px;
}
</style>
