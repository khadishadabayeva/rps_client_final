import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Game from '../views/Game'
import store from '@/store'


Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        main:'login',
        component: Login
    },
    
    {
        path:'/game',
        main:'game',
        component: Game
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (store.getters.loggedIn && to.name == 'login') {
    next('game')
    } else if (! store.getters.loggedIn && to.name != 'login') {
    next('login')
    }
    else {
    next()
    }
    })

export default router

