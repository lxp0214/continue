<template>
    <div class='body'>
        <div class='top'>
            <router-link to='/myselfCollection'>
                <button class='top-left'>个人收藏</button>
            </router-link>
            <router-link to='/myselfFocus'>
                <button class='top-right'>我的关注</button>
            </router-link>
        </div>
        <router-link to='/search'>
            <div class='bottom'>
                <input class='input' type='text' placeholder='搜索我收藏的创作'>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MyselfBody'
}
</script>

<style lang='stylus' scoped>
  .body
    height: 3rem
    .top
      height 1.2rem
      padding-left: .4rem 
      padding-right: .4rem
      .top-left
        float:left
        border-radius: 0.2rem
        height:1.2rem
        line-height:1.2rem
        width:3.14rem
        font-size: 0.5rem
        text-align: center
      .top-right
        float: right
        border-radius: 0.2rem
        height:1.2rem
        line-height:1.2rem
        width:3.14rem
        font-size: 0.5rem
        text-align: center
    .bottom
      height: 1rem
      margin-top: .4rem
      margin-left: .4rem 
      margin-right: .4rem
      .input
        box-sizing: border-box
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        height: 1rem
        width: 100%
        padding-left: .4rem
        padding-right: .4rem
        font-size: .4rem
        border-radius: .22rem
        background: #eee
      
</style>
