import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/allPages/Login'
import Explore from '@/allPages/explore/Explore'
import MyselfFocus from '@/allPages/myself/myself-pages/myself-focus/MyselfFocus'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        }, {
            path: '/explore',
            name: 'Explore',
            component: Explore
        }, {
            path: '/focus',
            name: 'MyselfFocus',
            component: MyselfFocus
        }

    ]
})