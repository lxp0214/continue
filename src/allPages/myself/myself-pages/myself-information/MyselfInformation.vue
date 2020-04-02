<template>
    <div>
        <div class='header'>
            <span class='iconfont left'>&#xe65e;</span>
            个人资料
        </div>
        <div class='basic-information'>
            <div class='head'>基本资料</div>
            <div class='img'>
                <div class='img-text'>头像</div>
                <div class='img-img'></div>
            </div>
            <div class='item'>昵称</div>
            <div class='item'>性别</div>
            <div class='item'>简介</div>
        </div>
        <div class='accout-information'>
            <div class='head'>账户资料</div>
            <div class='item'>手机号</div>
            <div class='item'>密码</div>
        </div>
        <div class='foot'>退出登录</div>
        <div class='foot'>关于</div>
    </div>
</template>

<script>

export default {
    name: 'MyselfInformation'
}
</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
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
  .basic-information
    height: 6.04rem
    .head
      height: .74rem
      line-height: .74rem
      font-size: .25rem
      padding-left: .4rem
    .img
      height: 1.64rem
      padding-left: .4rem
      padding-right: .4rem
      background: #efefef
      .img-text
        height: 1.64rem
        line-height: 1.64rem
        float: left
        font-size: .36rem
      .img-img
        height: 1.64rem
        width: 1.64rem
        border-radius: 100%
        background: purple
        float: right
    .item
      height: 1.22rem
      line-height: 1.22rem
      font-size: .36rem
      background: #efefef
      padding-left: .4rem
      padding-right: .4rem
  .accout-information
    height: 3.18rem
    .head
      height: .74rem
      line-height: .74rem
      font-size: .25rem
      padding-left: .4rem
    .item
      height: 1.22rem
      line-height: 1.22rem
      font-size: .36rem
      background: #efefef
      padding-left: .4rem
      padding-right: .4rem
  .foot
    margin-top: .5rem
    height: 1.22rem
    line-height: 1.22rem
    font-size: .36rem
    background: #efefef
    padding-left: .4rem
    padding-right: .4rem
</style>
