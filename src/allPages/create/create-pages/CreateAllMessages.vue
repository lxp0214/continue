<template>
    <div>
        <div class='header'>
            <router-link to='/create'>
                <img src='static\icons\middle\组件 39 – 1.png'>
            </router-link>
            所有消息
            <img @click='changeShow()' :src=this.rightUrl ref='change'>
        </div>
        <div class='list' v-show='messageShow'>
            <ul class='wrapper'>
                <li class='item' v-for="(item,index) in 4" :key="index">
                    <div class='item-title'>|| 谁偷走了我的昨天<span class='gray'> 有了新的续作</span></div>
                    <div class='item-content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟……</div>
                    <div class='item-name'>
                        <div class='item-name-left'>
                            <img src='static\icons\middle\组件 86 – 1.png' class='item-name-img'>
                            <div class='item-name-name'>用户名称</div>
                        </div>
                        <div class='item-name-right'>3月10日</div>
                    </div>
                </li>
            </ul>
            <div class='foot'>没有了呢</div>
        </div>
        <transition>
        <div class='reverse' v-show='!messageShow'>
            <div class='reverse-item'>收藏创作更新</div>
            <div class='reverse-item'>关注的用户</div>
            <div class='reverse-item'>收藏的续作</div>
            <div class='reverse-item'>收藏的原创</div>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CreateAllMessages',
    data () {
        return {
            messageShow: true,
            rightUrl:'static'+'/'+'icons'+'/'+'middle'+'/'+'组件 36 – 1.png'
        }
    },
    methods: {
        changeShow () {
            this.messageShow = !this.messageShow 
            if(!this.messageShow) {
                this.$refs.change.src='static'+'/'+'icons'+'/'+'middle'+'/'+'组件 35 – 1.png'
            } else {
                this.$refs.change.src = 'static'+'/'+'icons'+'/'+'middle'+'/'+'组件 36 – 1.png'
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
  .header
    background-color: #ffffff
    margin-top: .4rem
    margin-bottom: .4rem
    padding-left: .4rem
    padding-right: .4rem
    height: .88rem
    line-height: .88rem
    font-size: .36rem
    display: flex 
    justify-content: space-between 
    align-items: center
    img 
      height: .46rem
  .list 
    .foot 
      font-size: .22rem
      text-align: center
    .wrapper
      .item
        height: 2.28rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .2rem
        opacity: 0.9
        background-color: #ffffff
        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.16)
        .item-title
          height: .8rem
          line-height: .8rem
          font-size: .32rem
          .gray 
            color: #000000
            opacity: 0.54
            font-size: .3rem
        .item-content
          height: .9rem
          line-height: .4rem
          font-size: .3rem
          color: #707070
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          .item-name-right 
            height: .58rem
            line-height: .58rem
          .item-name-left
            height: .58rem
            .item-name-img
              border-radius: 100%
              width: .54rem
              height: .54rem
              background: red
              float: left 
            .item-name-name
              float: right
              height: .58rem
              line-height: .58rem
              margin-left: .1rem
  .reverse
    position: absolute 
    top: 1.5rem
    right: 0
    width: 3.6rem
    .reverse-item
      height: 1.2rem
      line-height: 1.2rem
      font-size: .36rem
      width: 3.6rem
      padding-left: .26rem
      margin-top: .12rem
      margin-bottom: .12rem
      border: solid .02rem #707070
  .v-enter,.v-leave-to 
    opacity: 0
  .v-enter-active,.v-leave-active 
    transition: opacity .5s
</style>