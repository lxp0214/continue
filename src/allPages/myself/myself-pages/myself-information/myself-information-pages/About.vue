<template>
    <div>
        <div class='header'>
            <router-link to='/myselfInformation'>
                <img src='static\icons\middle\组件 39 – 1.png'>
            </router-link>
            <span>关于</span>
        </div>
        <div class='desc'>更新</div>
        <div class='wrapper'>
            <div>您已是最新版本</div>
            <div>1.0.0</div>
        </div>
        <div class='desc'>关于我们</div>
        <div class='about'>大家好我们是葫芦七兄弟</div>
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
    background: #ffffff
    display: flex 
    align-items: center
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3)
    img 
      height: .46rem
    span 
      line-height: .88rem 
      font-size: .36rem
      margin-left: 2.67rem
  .desc 
    height: .84rem 
    line-height: .84rem
    padding-left: .4rem
    color: #ffffff
    font-size: .32rem
  .wrapper 
    height: 1rem 
    background: #ffffff
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
    background: #ffffff
</style>