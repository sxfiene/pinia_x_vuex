import { defineStore } from 'pinia';
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const cart = ref([]);

  function increaseCount() {
    count.value++;
  }

  function decreaseCount() {
    count.value--;
  }

  function addToCart(obj) {
    cart.value.push(obj);
  }

  const oddOrEven = computed(() => count.value % 2 === 0 ? 'even' : 'odd');

  return ({
    count,
    cart,
    oddOrEven,
    increaseCount,
    decreaseCount,
    addToCart,
  });
});