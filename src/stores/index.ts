import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
const store = createStore({
    state: {
        countx: 0,
        cartx: []
},
    plugins: [createPersistedState()],

    mutations: {
        increment (state) {
            state.countx++
        },
        decrement (state) {
            state.countx--
        },
        addToCart (state, obj) {
            state.cartx.push(obj)
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


