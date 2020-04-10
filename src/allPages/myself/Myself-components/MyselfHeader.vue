<template>
  <div>
    <transition>
        <div v-show='headerShow' class='head' >
            个人主页
        </div>
    </transition>
    <div class='header'>
        <div class='left'>
            <router-link to='/myselfInformation'>
                <div class='left-top'>黑凤梨</div>
                <div class='left-bottom'>213天,5个原创,36条续写,79次评论……</div>
            </router-link>
        </div>
        <router-link to='/myselfInformation'>
            <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='right'>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MyselfHeader',
    data () {
        return {
            headerShow: false
        }
    },
    props: {
        datas:Array
    },
    methods: {
        handleScroll () {
           // console.log(document.documentElement.scrollTop)
            const top = document.documentElement.scrollTop
            if (top > 120) {
                this.headerShow = true
            } else {
                this.headerShow = false
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
  .head 
      //background: rgb(174,222,252)
      background #ffffff
      height: 1rem 
      line-height: 1rem 
      position: fixed 
      top: 0
      right: 0
      left: 0
      text-align: center 
      font-size: .64rem
      z-index 99
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all .5S 
      }
  .header
    height: 1.24rem
    padding-left: 0.4rem
    padding-right: 0.4rem
    padding-top: 1.16rem
    padding-bottom: 0.46rem
    .left
      float: left 
      height: 1.24rem
      .left-top
        font-size: 0.64rem
        height 0.86rem
        line-height:0.86rem
        color #ffffff
      .left-bottom
        height: 0.38rem
        line-height: 0.38rem
        color #ffffff
    .right
      float: right
      border-radius: 100%
      width:1.24rem 
      height: 1.24rem 
      background: red
</style>
