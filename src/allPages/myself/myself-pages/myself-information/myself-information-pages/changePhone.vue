<template>
    <div>
       <div class='header'>
           <router-link to='/myselfInformation'>
                <img src='static\icons\middle\组件 39 – 1.png'>
           </router-link>
           <span>手机号</span>
           <img src='static\icons\middle\组件 44 – 1.png'>
        </div>
        <div class='desc'>用户确认</div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入您的密码'>
            <div>密码错误</div>
        </div>
        <div class='desc'>更改资料</div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入新的手机号'>
            <div>发送验证码</div>
        </div>
        <div class='wrapper'>
            <input type='text' placeholder='请输入验证码'>
        </div>
    </div>
</template>

<script>
export default {
    name: 'changePassword'
}
</script>

<style lang='stylus' scoped>
  .header 
    margin-top: .4rem
    display: flex 
    justify-content: space-between 
    align-items: center 
    height: .88rem 
    background-color: #ffffff
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16)
    padding: 0 .4rem
    img 
      height: .46rem
    span 
      color: #000000
      font-size: .36rem
  .desc 
    height: .84rem
    padding-left: .4rem
    line-height: .84rem
    color: #ffffff
  .wrapper 
    margin: 0 .4rem 
    margin-bottom: .3rem
    padding: 0 .4rem
    background-color: #ffffff
    height: 1rem
    display: flex 
    justify-content: space-between
    border-radius:.22rem
    input 
      height: 100%
    div 
      line-height: 1rem

</style>