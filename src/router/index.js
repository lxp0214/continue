import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/allPages/Login'
import Register from '@/allPages/Register'
import Explore from '@/allPages/explore/Explore'
import Myself from '@/allPages/myself/Myself'
import MyselfFocus from '@/allPages/myself/myself-pages/myself-focus/MyselfFocus'
import MyselfCollections from '@/allPages/myself/myself-pages/myself-collections/MyselfCollections'
import MyselfInformation from '@/allPages/myself/myself-pages/myself-information/MyselfInformation'
import NickName from '@/allPages/myself/myself-pages/myself-information/myself-information-components/NickName'
import MyseflAbout from '@/allPages/myself/myself-pages/myself-information/myself-information-components/About'
import Search from '@/allPages/Search'
import List from '@/allPages/commonList/contentList'
import HotContinue from '@/allPages/explore/explore-pages/hot-continue/HotContinue'
import HotCreate from '@/allPages/explore/explore-pages/hot-create/HotCreate'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        }, {
            path: '/register',
            name: 'Register',
            component: Register
        }, {
            path: '/explore',
            name: 'Explore',
            component: Explore
        }, {
            path: '/myself',
            name: 'Myself',
            component: Myself
        }, {
            path: '/myself-focus',
            name: 'MyselfFocus',
            component: MyselfFocus
        }, {
            path: '/collections',
            name: 'MyselfCollections',
            component: MyselfCollections
        }, {
            path: '/myselfinformation',
            name: 'MyselfInformation',
            component: MyselfInformation
        }, {
            path: '/nickname',
            name: 'NickName',
            component: NickName
        }, {
            path: '/about',
            name: 'MyselfAbout',
            component: MyseflAbout
        }, {
            path: '/search',
            name: 'MyselfAbout',
            component: Search
        }, {
            path: '/list',
            name: 'MyselfAbout',
            component: List
        }, {
            path: '/hot',
            name: 'HotContinue',
            component: HotContinue
        }, {
            path: '/create',
            name: 'HotContinue',
            component: HotCreate
        }, {
            path: '/explore',
            name: 'Explore',
            component: Explore
        }


    ]

})