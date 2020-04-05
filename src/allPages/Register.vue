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
            <div class="desc-top">注册新账户</div>
            <div class="desc-bottom">快来打开续世界的大门吧</div>
        </div>
    </div>
    <div class="info">
        <div class="infoPhone border">
            <span class="iconfont infoPhone-icon">&#xe608;</span>
            <input type="text" class="infoPhone-text border" placeholder="请输入手机号" v-model="name">
        </div>
        <div class="infoCode border">
            <span class="iconfont infoCode-icon">&#xe6e9;</span>
            <input type="password" class="infoCode-text border" placeholder="请输入验证码" v-model="code">
            <span class="send-code" @click="handleGetCode">发送验证码</span>
        </div>
        <div class="infoNewPass border">
            <span class="iconfont infoNewPass-icon">&#xe6e9;</span>
            <input type="password" class="infoNewPass-text border" placeholder="请设置密码" v-model="password">
        </div>
        <!-- <div class="infoPass border">
            <span class="iconfont infoPass-icon">&#xe6e9;</span>
            <input type="password" class="infoPass-text border" placeholder="请再次输入密码">
        </div> -->
    </div>
    <register-have></register-have>
    <router-link to='/explore'>
        <div class="FoundItem border" @click="handleRegister">注册</div>
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
          name:'',
          password:'',
          code:'',
          token:'',
          authenticate:'',
          url:'http://sim.gxy.ink/auth/login',   //待定URL！！！
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
          }
          
      },
      handleRegister() {
          let data = {
              login:this.name,
              password:this.password
          }
          fetch(this.url,{
              mode:'cors',
              method:'POST',  //method方式待商议！！！
              body:JSON.stringify(data),
              headers:
                  new Headers({
                      'Content-Type':'application/json'
              })
          }).then(
              //逻辑处理语句
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
                margin-bottom 0.42rem
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
        .infoPhone,.infoCode,.infoNewPass {
            width :5.78rem
            height :1.02rem
            line-height :1.02rem
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
            .infoPhone-text,.infoNewPass-text,.infoCode-text {
                height :1.02rem
                line-height :1.02rem
                padding-left:0.4rem
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
        }
    }
</style>
