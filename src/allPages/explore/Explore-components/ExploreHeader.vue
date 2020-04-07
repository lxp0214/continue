<template>
  <div>
    <transition>
        <div v-show='headerShow' class='head' >
            探索
        </div>
    </transition>
    <div class='header'>
        <div class='left'>
            <div class='left-top'>探索</div>
            <div class='left-bottom'>多少人的思维，一笔笔勾勒出来的华章...</div>
            <!-- <router-link to='/search'> -->
                <img src='static/icons/big/组件 67 – 2.png' @click="handleShowSearch">
            <!-- </router-link> -->
            <fade-animation>
                <search v-show="showSearch" @close="handleCloseSearch"></search>
            </fade-animation>
        </div>
    </div>
  </div>
</template>

<script>
import Search from '../../Search'
import FadeAnimation from '@/allPages/commonList/FadeAnimation'
export default {
    name: 'ExplorefHeader',
    components: {
        Search:Search,
        FadeAnimation:FadeAnimation
    },
    data () {
        return {
            headerShow: false,
            showSearch: false
        }
    },
    methods: {
        handleScroll () {
            console.log(document.documentElement.scrollTop)
            const top = document.documentElement.scrollTop
            if (top > 120) {
                this.headerShow = true
            } else {
                this.headerShow = false
            }
        },
        handleShowSearch() {
            this.showSearch = true
        },
        handleCloseSearch() {
            this.showSearch = false
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
  .head 
      background: rgb(174,222,252)
      height: 1rem 
      line-height: 1rem 
      position: fixed 
      top: 0
      right: 0
      left: 0
      text-align: center 
      font-size: .64rem
      z-index: 100
  .v-enter,.v-leave-to{
      opacity: 0;
  }
  .v-enter-active,.v-leave-active{
      transition: all .5S 
    }
  .header
    color #ffffff
    position relative
    height: 1.24rem
    padding-left: 0.4rem
    padding-right: 0.4rem
    padding-top: 1.16rem
    padding-bottom: 0.46rem
    .left 
      float: left 
      height: 1.24rem
      .left-top
        font-weight:600
        font-size: 0.64rem
        height 0.86rem
        line-height:0.86rem
      .left-bottom
        height: 0.38rem
        line-height: 0.38rem
      img
        position:absolute
        top:1.3rem
        right:.4rem
        height: .7rem
</style>
