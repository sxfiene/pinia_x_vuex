<template>
    <div class="countV">
        {{ store.state.countx }}
    </div>


    <div class="buttons">
        <button @click="store.commit('increment')">+</button>
        <button @click="store.commit('decrement')">-</button>
    </div>

    <a>Ce conteur est {{ store.state.countx % 2 === 0 ? 'pair' : 'impair' }} </a>
    <div>
        <h3>Edit Counter :</h3>

        <input v-model="store.state.countx" type="number">
    </div>

</template>

<script setup>
    import { useStore } from 'vuex'
    const store = useStore()


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

.about{
    text-align: center;
    display: flex; justify-content: space-between;
}  .buttons button{
       font-size: 40px;
       margin: 20px;
   }

.home{
    text-align: center;
    display: flex; justify-content: space-between;
}
</style>