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
            <input type="text" class="infoPhone-text border" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="infoCode border">
            <img src='static\icons\middle\组件 28 – 1.png'>
            <input type="password" class="infoCode-text border" placeholder="请输入验证码" v-model="code">
            <span class="send-code" @click="handleGetCode">{{isRun?`${this.runTime}s后重获取`:`获取验证码`}}</span>
        </div>
        <div class="infoNewPass border">
            <img src='static\icons\middle\组件 23 – 1.png'>
            <input type="password" class="infoNewPass-text border" placeholder="请设置新密码" v-model="password1">
        </div>
        <div class="infoPass border">
            <img src='static\icons\middle\组件 23 – 1.png'>
            <input type="password" class="infoPass-text border" placeholder="请再次输入密码" v-model="password2">
        </div>
    </div>
    <router-link to='/'>
        <div class="FoundItem border" @click="handleChange">确认更改</div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  name: 'Login',
  data: function() {
      return {
          phone:'',
          code:'',
          password1:'',
          password2:'',
          isRun:false,
          runTime:30,
          url:'http://sim.gxy.ink/auth/login'  //待定URL！！！
      }
  },
  methods: {
      handleGetCode() {
          if(!this.phone) {
              MessageBox.alert("请输入手机号码哦~", '提示');
              return 
          }
          if(!/^1\d{10}$/.test(this.phone)) {
              MessageBox.alert("请输入正确的手机号", '提示');
              return 
          }
          this.isRun = true
          var autoTime = setInterval(() => {
             this.runTime--;
             if(this.runTime === 0) {
                this.runTime = 30;
                this.isRun = false;
                clearInterval(autoTime)
                return
             }
          },1000)
          if(this.password1 !== this.password2) {
              MessageBox.alert("两次密码要一致哦~", '提示');
              return
          }
      },
      handleChange() {
          let data = {
                login:this.name,
                password1:this.password1,
                password2:this.password2,
                code:this.code
            }
            fetch(this.url,{
                mode:'cors',
                method:'GET',
                body:JSON.stringify(data),
                headers:
                    new Headers({
                        'Content-Type':'application/json'
                })
            }).then(res => res.json().then(body => {
                console.log(body)
                //逻辑处理语句
                //1.注册成功之后清除token；
                //2.注册成功后push进入explore页面，去掉原来的router-link路由
            })
            ).catch(error => console.log("error: "+error))
      }
  }
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
