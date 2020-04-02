<template>
    <div>
        <div class='header'>
            <span class='iconfont left'>&#xe65e;</span>
            所有消息
            <span class='iconfont right'>&#xe65e;</span>
        </div>
        <div class='list' v-show='messageShow'>
            <ul class='wrapper'>
                <li class='item'>
                    <div class='item-title'>|| 谁偷走了我的昨天<span class='gray'> 有了新的续作</span></div>
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
                    <div class='item-title'>|| 谁偷走了我的昨天<span class='gray'> 有了新的续作</span></div>
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
                    <div class='item-title'>|| 谁偷走了我的昨天<span class='gray'> 有了新的续作</span></div>
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
                    <div class='item-title'>|| 谁偷走了我的昨天<span class='gray'> 有了新的续作</span></div>
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
    </div>
</template>

<script>
export default {
    name: 'CreateAllMessages',
    data () {
        return {
            messageShow: true
        }
    }
}
</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
    margin-bottom: .4rem
    padding-left: .4rem
    padding-right: .4rem
    height: 1.1rem
    line-height: 1.1rem
    text-align: center
    font-size: .5rem
    border-bottom: solid .01rem
    border-top: solid .01rem
    .left
      float: left
      font-size: .7rem
    .right 
      float: right
      font-size: .7rem
  .list 
    .foot 
      font-size: .22rem
      text-align: center
    .wrapper
      .item
        height: 3rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .2rem
        border: solid .01rem
        .item-title
          height: .72rem
          line-height: .8rem
          font-size: .4rem
          .gray 
            color: #707070
            font-size: .4rem
        .item-content
          height: 1.5rem
          font-size: .37rem
          color: #707070
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          padding-bottom: .2rem
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
</style>