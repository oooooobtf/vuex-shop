import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/components/demo'
import product from '@/components/product'
import cart from '@/components/cart'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
    // ,{
    //   path: '/product',
    //   name: 'product',
    //   component: product
    // },{
    //   path: '/cart',
    //   name: 'cart',
    //   component: cart
    // },{
    //   path: '/info',
    //   name: 'info',
    //   component: info
    // }
  ]
})
