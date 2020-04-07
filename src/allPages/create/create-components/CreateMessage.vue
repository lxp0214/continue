<template>
    <div>
        <div class='head'>
            <div class='head-left'>消息</div>
            <router-link to='/createAllMessages'>
                <div class='head-right'>更多</div>
            </router-link>
        </div>
        <ul class='wrapper'>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
            <li class='item'>
                <div class='item-top'>|| 谁偷走了我的昨天</div>
                <div class='item-bottom'>
                    <div class='bottom-left'>
                        <div class='img'></div>
                        <div class='desc'>用户名称</div>
                    </div>
                    <div class='bottom-right'>3月10日</div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'CreateMessage'
}
</script>

<style lang='stylus' scoped>
  .head 
    color #ffffff
    height: .6rem
    line-height: .6rem
    font-size: .36rem
    margin-left: .4rem
    margin-right: .4rem
    margin-bottom: .1rem
    .head-left
      float: left 
    .head-right
      float: right
      color #ffffff
  .wrapper 
    .item 
      background-color rgba(255,255,255,0.9)
      height: 1.3rem
      margin-left: .4rem
      margin-right: .4rem
      margin-bottom: .2rem
      border-radius: .22rem
      border: solid .01rem
      padding-top: .2rem
      padding-left: .28rem
      padding-right: .28rem
      .item-top 
        line-height: .5rem
        font-size: .32rem
        margin-bottom: .2rem
      .item-bottom 
        height: .4rem
        color: #707070
        display: flex
        justify-content: space-between
        .bottom-left 
          height: .4rem
          min-width: 1.44rem
          display: flex
          justify-content: space-between
          .img 
            height: .38rem
            width: .38rem
            border-radius: 100%
            background: red
          .desc 
            line-height: .4rem
            font-size: .24rem
        .bottom-right 
          line-height: .4rem
</style>