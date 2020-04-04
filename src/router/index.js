import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/allPages/Login'
import Register from '@/allPages/Register'
import Explore from '@/allPages/explore/Explore'
import Create from '@/allPages/create/Create'
import Myself from '@/allPages/myself/Myself'
import MyselfFocus from '@/allPages/myself/myself-pages/myself-focus/MyselfFocus'
import MyselfCollections from '@/allPages/myself/myself-pages/myself-collections/MyselfCollections'
import MyselfInformation from '@/allPages/myself/myself-pages/myself-information/MyselfInformation'
import NickName from '@/allPages/myself/myself-pages/myself-information/myself-information-components/NickName'
import MyseflAbout from '@/allPages/myself/myself-pages/myself-information/myself-information-components/About'
import UserDetails from '@/allPages/user-details/UserDetails'
import NewestCreate from '@/allPages/explore/explore-pages/newest-create/NewestCreate'
import NewestContinue from '@/allPages/explore/explore-pages/newest-continue/NewestContinue'
import Search from '@/allPages/Search'
import HotContinue from '@/allPages/explore/explore-pages/hot-continue/HotContinue'
import HotCreate from '@/allPages/explore/explore-pages/hot-create/HotCreate'
import CreateEdit from '@/allPages/create/create-pages/CreateEdit'
import CreateAllMessages from '@/allPages/create/create-pages/CreateAllMessages'
import CreateReady from '@/allPages/create/create-pages/create-ready/CreateReady'
import ArticalDetails from '@/allPages/artical-details/ArticalDetails'
import Comments from '@/allPages/comments/Comments'
import Found from '@/allPages/Found'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/create',
        name: 'Create',
        component: Create
    }, {
        path: '/forget',
        name: 'Found',
        component: Found
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/myself',
        name: 'Myself',
        component: Myself
    }, {
        path: '/myselfInformation',
        name: 'MyselfInformation',
        component: MyselfInformation
    }, {
        path: '/myselfCollection',
        name: 'MyselfCollections',
        component: MyselfCollections
    }, {
        path: '/myselfFocus',
        name: 'MyselfFocus',
        component: MyselfFocus
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    }, {
        path: '/explore',
        name: 'Explore',
        component: Explore
    }, {
        path: '/newContinue',
        name: 'NewestContinue',
        component: NewestContinue
    }, {
        path: '/newCreate',
        name: 'NewestCreate',
        component: NewestCreate
    }, {
        path: '/hotCreate',
        name: 'HotCreate',
        component: HotCreate
    }, {
        path: '/hotContinue',
        name: 'HotContinue',
        component: HotContinue
    }, {
        path: '/createEdit',
        name: 'CreateEdit',
        component: CreateEdit
    }, {
        path: '/createAllMessages',
        name: 'CreateAllMessages',
        component: CreateAllMessages
    }, {
        path: '/readyEdit',
        name: 'CreateReady',
        component: CreateReady
    }],

})