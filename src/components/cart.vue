<template>
  <div>
    <div class="shop-container">
      <p>已选商品</p>
      <div>
        <table class="table">
          <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in cartProducts">
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td><div class="num-control" @click="reduceNum(item)">-</div>{{item.num}}<div class="num-control" @click="addNum(item)">+</div></td>
            <td>
              <button class="btn" @click="delProduct(item)">删除</button>
            </td>
          </tr>
          <tr v-if="!cartProducts.length">
            <td colspan="4">您的购物车空空如也</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default ({
    name: 'cart',
    computed: {
      ...mapGetters(['cartProducts'])
    },
    data() {
      return {
//        cartProducts:[]
      }
    },
    methods: {
      ...mapActions(['delProduct','reduceNum','addNum'])
    }
  })
</script>
<style scoped="">

  .table {
    width: 1000px;
    table-layout: fixed;
    margin: 0 auto;
    collapse: none;
    border-collapse: collapse;
    /*border:1px solid #eeeeee;*/
  }

  table th {
    border: 1px solid #d5d5d5;
    padding: 5px;
  }

  table td {
    border: 1px solid #d5d5d5;
    padding: 8px;
  }

  .btn:hover {
    border: 1px solid #e65a56;
    background-color: #e65a56;
    color: #fff;
  }

  .btn {
    border: 1px solid #e65a56;
    background-color: white;
    padding: 5px 8px;
    transition: all 0.2s;
    outline: none;
    cursor: pointer;
  }
  .num-control{
    height: 20px;
    line-height: 20px;
    width: 30px;
    outline: none;
    cursor: pointer;
    margin: 5px;
    display: inline-block;
    border:1px solid #e6e6e6;
    transition: all 0.3s;
  }
  .num-control:hover{
    border:1px solid #a0a0a0;
    background-color: #adadad;
    color: #fff;
  }
</style>
