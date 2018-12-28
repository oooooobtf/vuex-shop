<template>
  <div class="container">
    <div class="flex">总数：{{totalNum}}</div>
    <div class="flex">总价：{{totalPrice}}</div>
    <div class="flex">
      <button class="btn" @click="clearCart">清空购物车</button>
    </div>
  </div>
</template>
<script>
  import { mapGetters,mapActions  } from 'vuex'
  export default {
    name: 'info',
    computed:{
      ...mapGetters(['totalPrice','totalNum'])
    },
    data() {
      return {
//        totalNum: 0,
//        totalPrice: 0
      }
    },
    methods:{
      ...mapActions(['clearCart'])
    }
  }
</script>
<style scoped="">
  .btn {
    color: #fff;
    border: 1px solid #e65a56;
    background-color: #e65a56;
    padding: 5px 8px;
    transition: all 0.2s;
    outline: none;
    cursor: pointer;
  }

  .container {
    width: 1000px;
    margin:0 auto;
    display: flex;
    margin-top: 20px;
  }

  .flex {
    flex: 1;
  }
</style>
