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

    },
    modules: {


    },
    getters: {

    },
})

export default store

