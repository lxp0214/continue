<template>
    <div>
        <div class='header'>
            <router-link to='/create'>
                <img src='static\icons\middle\组件 47 – 1.png'>
            </router-link>
            创作
            <router-link to='/readyEdit'>
                <img src='static\icons\middle\组件 45 – 1.png'>
            </router-link>
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
    font-size: .5rem
    //border-bottom: solid .01rem
    //border-top: solid .01rem
    display: flex 
    align-items: center
    justify-content: space-between
    background-color #ffffff
    img 
      height: .6rem
  .wrapper
    padding-left: .4rem
    padding-right: .4rem
    padding-top: .28rem
    height: 12.88rem
    .body 
      background-color rgba(255,255,255,0.8)
      box-sizing:border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      width: 100%
      height: 100%
      //border: solid .02rem #707070
      border-radius 0.2rem
      padding-left: .28rem
      padding-right: .28rem
      .title-wrapper 
        height: .86rem
        margin-top: .56rem
        margin-right: 1.94rem
        margin-left: 1.94rem
        border-bottom: double #707070 
        border-bottom-width: .1rem
        .title 
          width: 100%   
          height: 100%
          text-align: center
          font-size: .4rem
          background-color rgba(255,255,255,0.8)
          &::placeholder 
            color: #000000
      .small-wrapper 
        width: 100%
        height: .67rem
        margin-bottom: .2rem
        .small
          width: 100% 
          height: 100%
          font-size: .32rem
          background-color rgba(255,255,255,0.8)
          &::placeholder 
            color: #000000
          border-bottom: solid .01rem #707070
      .content-wrapper 
        width: 100% 
        height: 10.38rem
        .content 
          background-color rgba(255,255,255,0.8)
          width: 100%
          height: 100%
          &::placeholder 
            color: #000000
          line-height: .42rem
          font-size: .32rem

            
     
</style>