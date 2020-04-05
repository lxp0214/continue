<template>
  <div class="login">
    <div class="loginImg border">
        <img src="" class="loginImg-content">
    </div>
    <div class="title">续</div>
    <div class="info">
        <div class="infoName border">
            <span class="iconfont infoName-icon">&#xe608;</span>
            <input type="text" class="infoName-text border" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="infoPass border">
            <span class="iconfont infoPass-icon">&#xe6e9;</span>
            <input type="password" class="infoPass-text border" placeholder="请输入密码" v-model="password">
        </div>
        <router-link to='/forget'>
            <div class="forget">忘记密码？</div>
        </router-link>
    </div>
    <div class="loginItem border" @click="handleLogin">登录</div>
    <router-link to='/register'>
        <div class="registerEnter">注册账户</div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: 'Login',
  data: function() {
      return {
          phone:'',
          password:'',
          url:'http://api.gxy.ink/auth/login',
      }
  },
  methods: {
      handleLogin() {
          console.log(this.phone + ' '+ this.password)
          let data = {
              phone:this.phone,
              password:this.password
          }
          fetch(this.url,{
              mode:'cors',
              method:'POST',
              body: JSON.stringify(data),
              headers:
                  new Headers({
                      'Content-Type':'application/json'
                  })
          }).then(res => res.json().then(body => {
              console.log(body)
              if(body.code === 2) {
                  console.log(body.message)
                  MessageBox.alert("用户名或密码错误，请重试！", '提示');
                  return ;
              }
              if(body.code === 0) {
                console.log(body.message)
                var _this = this;
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                this.timer = setTimeout(function(){
                    //console.log(this); // 这里的this指向window对象
                    _this.$router.push('/explore');
                    Indicator.close();
                }, 500) 
                      
              }
          })).catch(error => console.log("error: ", error))
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
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
    .info {
        position relative
        margin-bottom 1.78rem
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
        }
        .forget {
            font-family: Microsoft
            font-size: 12px;
            color: #6c6a6a;
            width: 60px;
            height: 16px;
            line-height: 16px;
            text-align :center
            position absolute
            right 0.86rem
            bottom -0.41rem
        }
    }
    .loginItem {
        width :5.78rem
        height :1.04rem
        line-height :1.04rem
        border-radius 0.52rem
        text-align :center
        margin:0 auto
        font-family: Microsoft YaHei;
	    font-size: 18px;
        color: #6c6a6a;
        letter-spacing: 0.1rem;
        margin-bottom :0.16rem;
    }
    .registerEnter {
        width: 0.96rem;
	    height: 0.32rem;
        text-align :center
        line-height :0.32rem
        margin:0 auto;
        font-family: Microsoft YaHei;
        font-size :0.24rem;
        color:#6c6a6a;
    }
</style>
