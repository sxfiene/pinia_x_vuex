import { defineStore } from 'pinia'
import {reactive} from "vue";

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 10,
    cart: reactive([]),
  }),

  actions: ({
    increaseCount(){
      this.count++
    },

    decreaseCount(){
      this.count--
    },

    addToCart(obj){
      this.cart.push(obj)
    },
  }),

  getters: ({
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'pair'
      return'impair'
    }

  })
})

