<template>
    <div>
        <ul>
            <li class='item'>
                <div class='item-title'>1 || 雨停了</div>
                <div class='content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟，这样的天气恐怕不再适宜户外运动。大雄迷迷糊糊地睁开眼睛，他看了看周边的环境，发觉自己就站在小时候经常玩耍的空地上。那边的三根钢管仍旧横着，堆叠在一起，仿佛会一直持续下去。</div>
                <div class='foot'>
                    <div class='left'>
                        <img src='static\imgs\touxiang\批注 2020-02-10 002238.jpg' class='img'>
                        <span class='desc'>xxx用户</span>
                        <span class='time'>3月10日16:30</span>
                    </div>
                    <div class='right'>
                        <img src='static\icons\small\组件 57 – 1.png'>
                        <img src='static\icons\small\组件 60 – 1.png'>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ArticalDetailsChapter'
}
</script>

<style lang='stylus' scoped>
  @import '../../../../../assets/styles/dayChange.styl';
  .item 
    background-color $bgColor
    box-sizing:border-box
    -moz-box-sizing:border-box
    -webkit-box-sizing:border-box
    width: 100%
    margin-top: .4rem
    padding-left: .28rem
    padding-right: .28rem
    padding-bottom: .2rem
    .item-title 
      line-height: .96rem
      font-size: .36rem
      color $fontColor
    .content 
      font-size: .32rem
      line-height: .42rem
      color $fontColor
    .foot 
      height: .6rem
      margin-top: .4rem
      overflow: hidden
      .left 
        float: left 
        height: .6rem
        line-height: .6rem
        display: flex
        .img 
          border-radius: 100%
          background: red 
          width: .6rem
          height: .6rem
        .desc 
          line-height: .6rem
          margin-left: .1rem
          color $fontColor
        .time
          line-height: .6rem
          margin-left: .2rem
          color $fontColor
      .right 
        float: right
        height: .6rem
        line-height: .6rem
        img 
          height: .45rem
          margin-left: .36rem
          

</style>