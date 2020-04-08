<template>
    <div>
        <div id="app" :style="createStyle" ref='wrapper'>
            <keep-alive>
                <router-view></router-view> 
            </keep-alive>
        </div>
        <navigation class="navBar" v-show="showTab"></navigation>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Navigation from './allPages/Navigation'
import router from './router'

// router.afterEach((to, from) => {
//     console.log(from)
//     console.log(to)
//     console.log(to.path)
//     if((to.path === '/create') || (to.path === '/explore') || (to.path === '/myself')) {
//         console.log('ok')
//         this.showTab = false
//         console.log(this.showTab)
//     }
// })

export default {
  name: 'App',
  components: {
      Navigation:Navigation
  },
  data: function() {
      return {
          createStyle: {
                backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%",
                position:"fixed"
          },
      }
  },
  mounted() {
      console.log(this.$route)
      this.scroll = new BScroll(this.$refs.wrapper, {
          mouseWheel: true
      })
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
  }
}
</script>

<style lang='stylus' scoped>
    #app {
        overflow hidden
    }
</style>
