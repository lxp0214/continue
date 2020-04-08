<template>
    <div class='list' ref='wrapper'>
        <ul class='wrapper'>
            <li class='item'>
                <div class='item-top'>
                    <div class='item-title'>|| 谁偷走了我的昨天</div>
                    <img src='static\icons\small\组件 61 – 1.png'>
                </div>
                <div class='item-content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟……</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <img src='static\icons\middle\组件 86 – 1.png' class='item-name-img'>
                        <div class='item-name-name'>用户名称</div>
                    </div>
                    <div class='item-name-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>
                    <div class='item-title'>|| 谁偷走了我的昨天</div>
                    <img src='static\icons\small\组件 61 – 1.png'>
                </div>
                <div class='item-content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟……</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <div class='item-name-img'></div>
                        <div class='item-name-name'>用户名称</div>
                    </div>
                    <div class='item-name-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>
                    <div class='item-title'>|| 谁偷走了我的昨天</div>
                    <img src='static\icons\small\组件 61 – 1.png'>
                </div>
                <div class='item-content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟……</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <div class='item-name-img'></div>
                        <div class='item-name-name'>用户名称</div>
                    </div>
                    <div class='item-name-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>
                    <div class='item-title'>|| 谁偷走了我的昨天</div>
                    <img src='static\icons\small\组件 61 – 1.png'>
                </div>
                <div class='item-content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟……</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <div class='item-name-img'></div>
                        <div class='item-name-name'>用户名称</div>
                    </div>
                    <div class='item-name-right'>3月10日</div>
                </div>
            </li>
        </ul>
        <div class='foot'>没有了呢</div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'CollectionsList',
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .list 
    .foot 
      font-size: .22rem
      text-align: center
      margin-bottom: 2rem
    .wrapper
      .item
        height: 2.28rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .3rem
        //border: solid .01rem
        background-color rgba(255,255,255,0.9)
        .item-top 
          display: flex 
          justify-content: space-between
          align-items: center
          img  
            height: .4rem
          .item-title
            height: .72rem
            line-height: .8rem
            font-size: .32rem
        .item-content
          height: 1rem
          font-size: .3rem
          color: #707070
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          padding-bottom: .2rem
          .item-name-right 
            height: .56rem
            line-height: .56rem
          .item-name-left
            height: .56rem
            display: flex 
            align-items: center
            .item-name-img
              border-radius: 100%
              width: .4rem
              height: .4rem
              background: red
              float: left 
            .item-name-name
              float: right
              height: .56rem
              line-height: .56rem
              margin-left: .1rem
</style>
