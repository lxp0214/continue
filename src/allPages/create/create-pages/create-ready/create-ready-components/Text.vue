<template>
    <div>
        <ul>
            <li class='item'>
                <div class='item-title'>1 || 雨停了</div>
                <div class='content'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟，这样的天气恐怕不再适宜户外运动。大雄迷迷糊糊地睁开眼睛，他看了看周边的环境，发觉自己就站在小时候经常玩耍的空地上。那边的三根钢管仍旧横着，堆叠在一起，仿佛会一直持续下去。</div>
                <div class='foot'>
                    <div class='left'>
                        <div class='img'></div>
                        <span class='desc'>xxx用户</span>
                        <span class='desc'>3月10日16:30</span>
                    </div>
                    <div class='right'>
                        <span class='iconfont icon'>&#xe65e;</span>
                        <span class='iconfont icon'>&#xe607;</span>
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
  .item 
    background: #eee
    box-sizing:border-box
    -moz-box-sizing:border-box
    -webkit-box-sizing:border-box
    width: 100%
    margin-top:1.4rem
    padding-left: .28rem
    padding-right: .28rem
    padding-bottom: .2rem
    .item-title 
      line-height: .96rem
      font-size: .36rem
    .content 
      font-size: .32rem
      line-height: .42rem
    .foot 
      height: .36rem
      margin-top: .4rem
      background: blue
      overflow: hidden
      .left 
        float: left 
        height: .36rem
        line-height: .36rem
        .img 
          border-radius: 100%
          background: red 
          width: .36rem
          height: .36rem
          display: inline-block
        .desc 
          line-height: .36rem
      .right 
        float: right
        .icon
          margin-left: .5rem
          line-height: .36rem

</style>