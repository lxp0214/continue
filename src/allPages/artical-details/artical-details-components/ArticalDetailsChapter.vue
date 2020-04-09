<template>
    <div>
        <ul class='wrapper'>
            <li class='item' v-for='(item,index) of contents.sections' :key='index'>
                <div class='item-title'>{{item.title}}</div>
                <div class='content'>{{item.content}}</div>
                <div class='foot'>
                    <div class='left'>
                        <div class='img'></div>
                        <span class='desc'>{{item.user_nickname}}</span>
                        <span class='time'>3月10日16:30</span>
                    </div>
                    <div class='right'>
                        <img src='static\icons\small\组件 57 – 1.png'>
                        <img src='static\icons\small\组件 60 – 1.png'>
                    </div>
                </div>
            </li>
            <li class='item'>
                <div class='item-title'>5 || 期待你的续写....</div>
            </li>
        </ul>
<<<<<<< HEAD
        <router-link to='/comments'>
            <button>查看评论</button>
        </router-link>
=======
        <artical-details-title></artical-details-title>
        <button @click="handleGetComments">查看评论</button>
>>>>>>> cefeecae65fdd680074a94a81741379dd66da9ab
    </div>
</template>

<script>
import ArticalDetailsTitle from './ArticalDetailsTitle'
export default {
    name: 'ArticalDetailsChapter',
<<<<<<< HEAD
    props: {
      contents: Object
=======
    components: {
        ArticalDetailsTitle
    },
    methods: {
        handleGetComments() {
            this.$router.push('/comments')
        }
>>>>>>> cefeecae65fdd680074a94a81741379dd66da9ab
    }
}
</script>

<style lang='stylus' scoped>
  .wrapper
    .item 
      background-color: #ffffff
      box-sizing:border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      width: 100%
      margin-bottom: .3rem
      padding-left: .28rem
      padding-right: .28rem
      padding-bottom: .2rem
      .item-title 
        height: .8rem
        line-height: .8rem
        font-size: .32rem
      .content 
        font-size: .3rem
        line-height: .4rem
      .foot 
        height: .36rem
        margin-top: .2rem
        overflow: hidden
        .left 
          float: left 
          height: .36rem
          line-height: .36rem
          display: flex
          .img 
            border-radius: 100%
            background: red 
            width: .36rem
            height: .36rem
          .desc 
            line-height: .36rem
            font-size: .26rem
            margin-left: .1rem
          .time 
            line-height: .36rem
            font-size: .22rem
            margin-left: .2rem
        .right 
          float: right
          img 
            height: .36rem
            margin-left: .2rem
  button 
    height: .84rem 
    line-height: .84rem 
    background-color: #ffffff
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3)
    border-radius: .42rem
    width: 2.9rem
    text-align: center
    font-size: .32rem
    display: block
    margin: 0 auto
</style>