<template>
  <div class="found">
    <div class="header">
        <div class="icon">
            <router-link to='/'>
                <img src='static\icons\middle\组件 39 – 1.png' class='left'>
            </router-link>
            <img src='static\icons\middle\组件 33 – 1.png' class='right'>
        </div>
        <div class="desc">
            <div class="desc-top">找回您的密码</div>
            <div class="desc-bottom">能忘了密码，却也忘不了续</div>
        </div>
    </div>
    <div class="info">
        <div class="infoPhone border">
            <img src='static\icons\middle\组件 29 – 1.png'>
            <input type="text" class="infoPhone-text border" placeholder="请输入手机号">
        </div>
        <div class="infoCode border">
            <img src='static\icons\middle\组件 28 – 1.png'>
            <input type="password" class="infoCode-text border" placeholder="请输入验证码">
            <span class="send-code">发送验证码</span>
        </div>
        <div class="infoNewPass border">
            <img src='static\icons\middle\组件 23 – 1.png'>
            <input type="password" class="infoNewPass-text border" placeholder="请设置新密码">
        </div>
        <div class="infoPass border">
            <img src='static\icons\middle\组件 23 – 1.png'>
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
            .icon {
                height: .9rem
                line-height: .8rem
                .left {
                    float: left
                    height: .52rem
                }
                .right{
                    float: right
                    height: .52rem
                } 
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
            align-items: center
            img{
                height: .5rem
                margin-left: .4rem
            }
            .infoPhone-text,.infoPass-text,.infoNewPass-text,.infoCode-text {
                height :1.04rem
                line-height :1.0rem
                padding-left:0.2rem
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
