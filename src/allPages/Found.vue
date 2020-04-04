<template>
  <div class="found">
    <div class="header">
        <div class="icon">
            <router-link to='/'>
                <span class="iconfont arrow">&#xe65e;</span>
            </router-link>
            <span class="iconfont question">&#xe60a;</span>
        </div>
        <div class="desc">
            <div class="desc-top">找回您的密码</div>
            <div class="desc-bottom">能忘了密码，却也忘不了续</div>
        </div>
    </div>
    <div class="info">
        <div class="infoPhone border">
            <span class="iconfont infoPhone-icon">&#xe608;</span>
            <input type="text" class="infoPhone-text border" placeholder="请输入手机号">
        </div>
        <div class="infoCode border">
            <span class="iconfont infoCode-icon">&#xe6e9;</span>
            <input type="password" class="infoCode-text border" placeholder="请输入验证码">
            <span class="send-code">发送验证码</span>
        </div>
        <div class="infoNewPass border">
            <span class="iconfont infoNewPass-icon">&#xe6e9;</span>
            <input type="password" class="infoNewPass-text border" placeholder="请设置新密码">
        </div>
        <div class="infoPass border">
            <span class="iconfont infoPass-icon">&#xe6e9;</span>
            <input type="password" class="infoPass-text border" placeholder="请再次输入密码">
        </div>
    </div>
    <router-link to='/'>
        <div class="FoundItem border">确认更改</div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .found {
        margin-top:0.4rem
        margin-left 0.4rem
        margin-right 0.4rem
        padding-top:0.22rem
        .border {
            border: solid 1px #707070
        }
        .header {
            .question {
                float right
            }
            .arrow,.question {
                font-size 0.6rem
                color #000000
                font-weight 500
            }
            .desc {
                margin-top 0.26rem
                margin-bottom 1.16rem
                text-align center
                .desc-top {
                    font-size 0.64rem
                    color #000000
                    font-weight 600
                }
                .desc-bottom {
                    margin-top 0.25rem
                    font-size 0.24rem
                    color #000000
                    font-weight 400
                }
            }
        }
        .infoPhone,.infoCode,.infoNewPass,.infoPass {
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
            .infoPhone-text,.infoPass-text,.infoNewPass-text,.infoCode-text {
                height :1.04rem
                line-height :1.0rem
                padding-left:0.4rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .infoCode,.infoNewPass,.infoPass {
            margin-top :0.26rem
        }
        .infoCode {
            position relative
            .send-code {
                position absolute
                top:0
                right 0.4rem
                font-size: 0.3rem;
            }
        }
        .FoundItem {
            width :3.62rem
            height :1.04rem
            line-height :1.04rem
            border-radius 0.52rem
            text-align :center
            margin:0 auto
            font-family: Microsoft YaHei;
            font-size: 18px;
            color: #6c6a6a;
            letter-spacing: 0.05rem;
            margin-top :2.32rem;
        }
    }
</style>
