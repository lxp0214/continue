<template>
    <div>
        <div id="app">
            <keep-alive>
                <router-view></router-view> 
            </keep-alive>
        </div>
        <navigation class="navBar" v-show="showTab"></navigation>
        <div class="photo"></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Navigation from './allPages/Navigation'
import router from './router'

export default {
  name: 'App',
  components: {
      Navigation:Navigation
  },
  computed: {
      showTab: function() {
          if((this.$route.path === '/create') || (this.$route.path === '/myself') || (this.$route.path === '/explore')) {
              return true
          }
          else {
              return false
          }
      }
  },
}
</script>

<style lang='stylus' scoped>
    .photo 
        background-image url('../static/imgs/img.gif')
        background-repeat no-repeat
        background-size 100% 100%
        height 100%
        width 100%
        position fixed
        top 0
        z-index -1
</style>
