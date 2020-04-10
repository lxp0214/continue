<template>
  <div class='wrapper'>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for='(item,index) of contents' :key='index'>
        <div class='body' @click="handleGetArtical">
          <div class='top'>
            <div class='title'>
              {{item.passage.title}}
              <span class='number'>{{item.passage.collection}}</span>
              <img src ='static\icons\middle\组件 69 – 2@3x.png'>
            </div>
            <div class='user'>
              <div class='left'>
                <img src='static\icons\middle\组件 86 – 1.png' class='img'>
                <span class='name'>{{item.passage.user_nickname}}</span>
              </div>
              <span class='time'>3月10日</span>
            </div>
          </div>
          <div class='bottom'>
            <div class='smallTitle'>{{item.sections[0].title}}</div>
            <div class='text'>{{item.sections[0].content}}</div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>


<script >
export default({
    name: 'NewAndHot',
    props:{
      contents: Array,
    },
    data () {
      return {
        swiperOption: {
          loop: true
        }
      }
    },
    methods: {
        handleGetArtical() {
            this.$router.push('/articaldetails')
        }
    }
})
</script>>
<style lang="stylus" scoped>
  .body 
    height: 10.68rem
    background: #eee
    margin: 0 .76rem
    padding: 0 .4rem
    border-radius: .6rem
    box-shadow: -5px -5px 16px 0px rgba(255, 255, 255, 0.5)
    .top 
      height: 1.28rem
      border-bottom: solid .02rem #f6f6f6
      padding-top: .2rem
      .title 
        height: .44rem
        line-height: .44rem 
        font-size: .32rem
        img 
          float: right
        .number 
          font-size: .26rem
          float: right
      .user 
        height: 0.64rem
        //line-height: 0.64rem 
        display: flex 
        align-items: center
        justify-content: space-between 
        .left
          display: flex
          align-items: center
          .img 
            height: .4rem 
            width: .4rem 
            border-radius: 100%
            background: red
          .name 
            font-size: .26rem
            margin-left: .1rem
        .time 
          font-size: .22rem
    .bottom 
      .smallTitle 
        height:.8rem
        line-height: .8rem
        font-size: .32rem
      .text 
        font-size: .3rem
        color: #000000
        opacity: 0.54
        line-height: .4rem   
</style>