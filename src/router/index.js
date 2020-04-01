import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/allPages/Login'
import Explore from '@/allPages/explore/Explore'
import Myself from '@/allPages/myself/Myself'
import MyselfFocus from '@/allPages/myself/myself-pages/myself-focus/MyselfFocus'
import MyselfCollections from '@/allPages/myself/myself-pages/myself-collections/MyselfCollections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/explore',
      name: 'Explore',
      component: Explore
    },{
      path: '/myself',
      name: 'Myself',
      component: Myself
    },{ 
      path: '/focus',
      name: 'MyselfFocus',
      component: MyselfFocus
    }, {
    path: '/collections',
    name: 'MyselfCollections',
    component: MyselfCollections
    }

  ]
})