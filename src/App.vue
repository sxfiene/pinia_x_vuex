<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Pinia</RouterLink>
      <a> | </a>
      <RouterLink to="/VuexView">Vuex</RouterLink>
    </nav>

    <RouterView />
  </div>
  
</template>
<style scoped>
.app{
  text-align: center;
}
</style>