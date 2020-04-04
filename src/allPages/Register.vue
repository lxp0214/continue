<template>
    <div class="login">
    <div class="loginImg border">
        <img src="" class="loginImg-content">
    </div>
    <div class="title">续</div>
    <div class="info">
        <div class="infoName border">
            <span class="iconfont infoName-icon">&#xe608;</span>
            <input type="number" class="infoName-text border" placeholder="请输入手机号码">
        </div>
        <div class="infoPass border">
            <input type="number" class="infoPass-text border" placeholder="请输入验证码">
        </div>
        <router-link to='/create'>
            <button class="loginItem border">注册</button>
        </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style lang='stylus' scoped>
.loginImg {
        height :2.16rem
        width 2.16rem
        border-radius 50%
       // background-color red
        margin :0 auto
        margin-top:1.8rem
        margin-bottom none 
    }
    .title {
        font-family:PingFang SC
        font-size 0.48rem 
        width :0.48rem
        height :0.6rem
        line-height :0.64rem
        margin:0 auto
        margin-bottom :0.46rem
    }
    .border {
        border: solid 1px #707070
    }
    .infoName,.infoPass {
        width :5.78rem
        height :1.04rem
        line-height :1.04rem
        border-radius 0.52rem
        //background-color red
        margin:0 auto
        display:flex
        .iconfont{
            text-align :center
            margin-left :0.48rem
            font-size:0.48rem
            color :#000
        }
        .infoPass-icon {
            font-size:0.52rem !important 
        }
        .infoName-text,.infoPass-text {
            height :1.04rem
            line-height :1.0rem
            padding-left:0.4rem
            font-family :Microsoft YaHei;
            border :none
        }
    }
    .infoPass {
        margin-top :0.26rem
        padding-left: .48rem
        width: 5.38rem
    }
    
    .loginItem {
        display: block
        margin:0 auto
        width :5.78rem
        height :1.04rem
        line-height :1.04rem
        border-radius 0.52rem
        margin-top: .4rem
        text-align: center
        font-family: Microsoft YaHei
	    font-size: .4rem
        color: #6c6a6a
        letter-spacing: 0.1rem
    }
</style>