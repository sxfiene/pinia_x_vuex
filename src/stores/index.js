import { createStore } from 'vuex'
const store = createStore({
    state: {
        countx: 0,
},
    mutations: {
        increment (state) {
            state.countx++
        },
        decrement (state) {
            state.countx--
        }

    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        decrement (context) {
            context.commit('decrement')
        }

    },
    modules: {


    },
    getters: {

    },
})

export default store

