<template>
  <div class="found" :style="createStyle">
    <div class="header">
        <div class="icon">
            <router-link to='/'>
                <img src='static\icons\middle\组件 76 – 1.png' class='left'>
            </router-link>
            <img src='static\icons\middle\组件 84 – 1.png' class='right'>
        </div>
        <div class="desc">
            <div class="desc-top">注册新账户</div>
            <div class="desc-bottom">快来打开续世界的大门吧</div>
        </div>
    </div>
    <div class="info">
        <div class="infoPhone">
            <img src='static\icons\middle\组件 29 – 1.png'>
            <input type="text" class="infoPhone-text" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="infoCode">
            <img src='static\icons\middle\组件 28 – 1.png'>
            <input type="password" class="infoCode-text" placeholder="请输入验证码" v-model="code">
            <span class="send-code" @click="handleGetCode">{{isRun?`${this.runTime}s后重获取`:`获取验证码`}}</span>
        </div>
        <div class="infoNewPass">
            <img src='static\icons\middle\组件 23 – 1.png'>
            <input type="password" class="infoNewPass-text" placeholder="请设置密码" v-model="password">
        </div>
        <!-- <div class="infoPass">
            <span class="iconfont infoPass-icon">&#xe6e9;</span>
            <input type="password" class="infoPass-text" placeholder="请再次输入密码">
        </div> -->
    </div>
    <register-have></register-have>
    <router-link to='/explore'>
        <div class="FoundItem" @click="handleRegister">注册</div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
import RegisterHave from './Behavior'
export default {
  name: 'Login',
  components: {
      RegisterHave:RegisterHave
  },
  data: function() {
      return {
          phone:'',
          password:'',
          code:'',
          token:'',
          authenticate:'',
          isRun:false,
          runTime:30,
          url:'http://sim.gxy.ink/auth/login',   //待定URL！！！
          createStyle: {
                backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%",
                position:"fixed"
          }
      } 
  },
  methods: {
        handleGetCode() {
            if(localStorage.token && localStorage.authenticate) {
                this.token = localStorage.token;
                this.authenticate = localStorage.authenticate;
            }
            if(!this.token && !this.authenticate) {
                MessageBox.alert("请先点击下方蓝色按钮进行行为验证", '提示');
                return
            }
            if(this.isRun) {
                return
            }
            if(!/^1\d{10}$/.test(this.phone)) {
                MessageBox.alert("请输入正确的手机号", '提示');
                return 
            }
            //获取验证码的跨域请求操作
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
            
        },
        handleRegister() {
            let data = {
                login:this.name,
                password:this.password,
                code:this.code,
                token:this.token,
                authenticate:this.authenticate
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
    },
    activated() {
        window.addEventListener("beforeunload", function (e) {
            localStorage.removeItem('token');
            localStorage.removeItem('authenticate');
        })
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .found {
        margin-top:0.4rem
        // margin-left 0.4rem
        // margin-right 0.4rem
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
                margin-bottom 0.42rem
                text-align center
                color #ffffff
                .desc-top {
                    font-size 0.64rem
                    font-weight 600
                }
                .desc-bottom {
                    margin-top 0.25rem
                    font-size 0.24rem
                    font-weight 400
                }
            }
        }
        .infoPhone,.infoCode,.infoNewPass {
            width :5.78rem
            height :1.02rem
            line-height :1.02rem
            border-radius 0.52rem
            //background-color red
            margin:0 auto
            display:flex
            align-items: center
            background-color #ffffff
            img{
                height: .5rem
                margin-left: .4rem
            }
            .infoPhone-text,.infoNewPass-text,.infoCode-text {
                height :1.02rem
                line-height :1.02rem
                padding-left:0.2rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .infoCode,.infoNewPass {
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
            background-color #ffffff
        }
    }
</style>
