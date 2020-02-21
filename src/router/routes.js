import Home from '../pages/Hone/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Buy from '../pages/Buy/Buy.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'

export default [
    {
        path:'/home',
        component: Home
    },
    {
        path:'/sort',
        component: Sort
    },
    {
        path:'/buy',
        component: Buy
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path:'/person',
        component: Person
    },
    {
        path:'/',
        redirect:'/miste'
    }

]