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
import HotContinue from '@/allPages/explore/explore-pages/hot-continue/HotContinue'
import HotCreate from '@/allPages/explore/explore-pages/hot-create/HotCreate'
import UserDetails from '@/allPages/user-details/UserDetails'
import NewestCreate from '@/allPages/explore/explore-pages/newest-create/NewestCreate'
import NewestContinue from '@/allPages/explore/explore-pages/newest-continue/NewestContinue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/explore',
      name: 'Explore',
      component: Explore
    },{
      path: '/myself',
      name: 'Myself',
      component: Myself
    },{ 
      path: '/myself-focus',
      name: 'MyselfFocus',
      component: MyselfFocus
    },{
    path: '/collections',
    name: 'MyselfCollections',
    component: MyselfCollections
    },{
      path: '/myselfinformation',
      name: 'MyselfInformation',
      component: MyselfInformation
    },{
      path: '/nickname',
      name: 'NickName',
      component: NickName
    },{
      path: '/about',
      name: 'MyseflAbout',
      component: MyseflAbout
    },{
      path: '/hotcontinue',
      name: 'HotContinue',
      component: HotContinue
    },{
      path: '/hotcreate',
      name: 'HotCreate',
      component: HotCreate
    },{
      path: '/userdetails',
      name: 'UserDetails',
      component: UserDetails
    },{
      path: '/newestcontinue',
      name: 'NewestContinue',
      component: NewestContinue
    },{
      path: '/newestcreate',
      name: 'NewestCreate',
      component: NewestCreate
    }


  ]
    
})