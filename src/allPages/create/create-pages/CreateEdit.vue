<template>
    <div>
        <div class='header'>
            <span class='iconfont left'>&#xe611;</span>
            创作
            <span class='iconfont right'>&#xe607;</span>
        </div>
        <div class='wrapper'>
            <div class='body'>
                <div class='title-wrapper'>
                    <input class='title' type='text' placeholder="你的标题" >
                </div>
                <div class='small-wrapper'>
                    <input class='small' type='text' placeholder='1 小标题'>
                </div>
                <div class='content-wrapper'>
                    <textarea class='content' placeholder='开始创作……'></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateEdit'
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
    .right 
      float: right
      font-size: .7rem
  .wrapper
    padding-left: .4rem
    padding-right: .4rem
    padding-top: .28rem
    height: 12.88rem
    .body 
      box-sizing:border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      width: 100%
      height: 100%
      border: solid .02rem #707070
      padding-left: .28rem
      padding-right: .28rem
      .title-wrapper 
        height: .86rem
        margin-top: .56rem
        margin-right: 1.94rem
        margin-left: 1.94rem
        .title 
          width: 100%   
          height: 100%
          text-align: center
          font-size: .4rem
          &::placeholder 
            color: #000000
          border-bottom: double 
          border-bottom-width: .05rem
      .small-wrapper 
        width: 100%
        height: .84rem
        .small
          width: 100% 
          height: 100%
          font-size: .32rem
          &::placeholder 
            color: #000000
          border-bottom:solid .01rem
      .content-wrapper 
        width: 100% 
        height: 10.58rem
        .content 
          width: 100%
          height: 100%
          &::placeholder 
            color: #000000
          line-height: .42rem
          font-size: .32rem

            
     
</style>