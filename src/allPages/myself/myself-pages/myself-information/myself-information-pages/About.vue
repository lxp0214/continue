<template>
    <div>
        <div class='header'>
            <img src='static\icons\middle\组件 39 – 1.png'>
            <span>关于</span>
        </div>
        <div class='desc'>更新</div>
        <div class='wrapper'>
            <div>您已是最新版本</div>
            <div>1.0.0</div>
        </div>
        <div class='desc'>关于我们</div>
        <div class='about'></div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang='stylus' scoped>
  .header 
    margin-top: .4rem
    height: .88rem 
    padding-left: .3rem
    background: #eee
    display: flex 
    align-items: center
    img 
      height: .46rem
    span 
      line-height: .88rem 
      font-size: .36rem
      margin-left: 2.8rem
  .desc 
    height: .84rem 
    line-height: .84rem
    padding-left: .4rem
    color: #ffffff
    background: pink
    font-size: .32rem
  .wrapper 
    height: 1rem 
    background: orange
    margin: 0 .4rem
    padding: 0 .4rem
    display: flex 
    align-items: center 
    justify-content: space-between
    border-radius: .22rem
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16)
    div 
      font-size: .3rem 
      color: #000000
  .about 
    height: 8.9rem
    margin: 0 .4rem
    border-radius: .22rem
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16)
    background: #eee
</style>