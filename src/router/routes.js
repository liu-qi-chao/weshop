import Home from '../pages/Hone/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Buy from '../pages/Buy/Buy.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'
import HeaderNav from '../pages/HeaderNav/HeaderNav.vue'

export default [
    {
        path:'/home',
        component: Home,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/headernav',
        component: HeaderNav,
        meta: {
            isShowFooter: false
          }
    },
    {
        path:'/sort',
        component: Sort,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/buy',
        component: Buy,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/cart',
        component: Cart,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/person',
        component: Person,
        meta: {
            isShowFooter: true
          }
    },
    {
        path:'/',
        redirect:'/home'
    }

]