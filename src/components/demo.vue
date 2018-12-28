<template>
  <div>
    <p class="bold">Vuex购物车demo</p>
    <product></product>
    <cart></cart>
    <info></info>
  </div>

</template>
<script>
  import product from './product.vue'
  import cart from './cart.vue'
  import info from './info.vue'
  import store from './../store'
  export default {
    name: 'demo',
    store,
    components:{
      product,
      cart,
      info
    }
  }
</script>
<style scoped="">
  .bold {
    font-weight: bold;
  }
</style>
