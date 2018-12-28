//初始化数据
const state = {
  shop_list: [{
    id: 0,
    name: '苹果',
    price: 58
  }, {
    id: 1,
    name: '梨子',
    price: 28
  }, {
    id: 2,
    name: '西瓜',
    price: 18
  }, {
    id: 3,
    name: '菠萝',
    price: 108
  }, {
    id: 4,
    name: '桃子',
    price: 53
  }
  ],
  added: []//已选商品
}

//getter抛出去的数据
const getters = {
  //商品列表
  shopList: state => state.shop_list,

  // 购物车里的商品
  cartProducts: state => {
    return state.added.map(({id, num}) => {
      let product = state.shop_list.find(n => n.id == id)
      product['num'] = num;
      console.log(product)
      return {
        ...product,
        num
      }
    })
  },
  totalPrice: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      total += n.price * n.num
    });
    return total;
  },
  totalNum: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      total += n.num
    })
    return total;
  }
}

//异步数据
const actions = {
  addToCart({commit}, product) {
    commit('add', { //传递一个add的方法，带参数商品id
      id: product.id
    })
  },
  clearCart({commit}) {
    commit('clearAll')
  },
  delProduct({commit}, product) {
    commit('del', product)
  },
  reduceNum({commit}, product) {
    commit('reduce', product)
  },
  addNum({commit}, product) {
    commit('addCount', product)
  }
}

const mutations = {
  add(state, {id}) {
    let record = state.added.find(n => n.id == id);
    if (!record) {
      state.added.push({
        id, num: 1
      })
    } else {
      record.num++
    }
  },
  clearAll(state) {
    state.added = []
  },
  del(state, product) {
    //console.info(state,product)
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        //找到下标值
        state.added.splice(i, 1)
      }
    })
  },
  reduce(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        state.added[i].num--
        if (state.added[i].num == 0) {
          state.added.splice(i, 1)
        }
      }
    })
  },
  addCount(state,product){
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        state.added[i].num++
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
