import Vue from 'vue'
import Router from 'vue-router'
import Lists from '../pages/Lists';
import NewList from '../pages/NewList'
import ShoppingList from '../pages/ShoppingList'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Lists,
      name: 'lists'
    },
    {
      path: '/new-list',
      component: NewList,
      name: 'newList'
    },
    {
      path: '/list/:something/',
      component: ShoppingList,
      name: 'shoppingList'
    }
  ]
})

export default router
