<template>
  <div>
    <div class="shop-container">
      <p>商品信息</p>
      <div>
        <table class="table">
          <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for=" item in shopList">
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td><button class="btn" @click="addToCart(item)">加入购物车</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions } from "vuex";
  export default ({
    name: 'product',
    computed:{
      ...mapGetters(['shopList'])
    },
    data() {
      return {
//        shopList:
//          [
//            {
//          id:0,
//          name:'苹果',
//          price:58
//        }
//        ,{
//          id:1,
//          name:'梨子',
//          price:28
//        },{
//          id:2,
//          name:'西瓜',
//          price:18
//        }
//        ]
      }
    },
    methods:{
      ...mapActions(['addToCart'])
    }
  })
</script>
<style scoped="">

  .table{
    width: 1000px;
    table-layout: fixed;
    margin:0 auto;
    collapse: none;
    border-collapse: collapse;
    /*border:1px solid #eeeeee;*/
  }
  table th{
    border:1px solid #d5d5d5;
    padding: 5px;
  }
  table td{
    border:1px solid #d5d5d5;
    padding: 5px;
  }
  .btn:hover{
    border:1px solid #a0a0a0;
    background-color: #adadad;
    color: #fff;
  }
  .btn{
    border:1px solid #e6e6e6;
    background-color: white;
    padding: 5px 8px;
    transition: all 0.2s;
    outline: none;
    cursor: pointer;
  }
</style>
