<template>
    <div class="warpper">
        <div class="swiper-content">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img src="static/imgs/swiper1.jpg" class="slide-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="static/imgs/swiper2.jpg" class="slide-img">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="item">本周热续 || 雨打芭蕉湿</div>
    </div>
</template>

<script>
export default {
  name: 'ExploreSwiper',
  data: function() {
      return {
          swiperOption: {
              autoplay:3000,
              pagination: '.swiper-pagination',
              loop:true
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
       .warpper {
           position relative
           overflow hidden
           //width 6.70rem
           height 3.54rem
           border-radius: 10px;
           //border: 1px solid 
           margin-left 0.4rem
           margin-right 0.4rem
           margin-bottom 0.4rem
           .slider-img {
               width: 100%
               height: 100%
           }
           .item {
               position absolute
               //top:0 
               left 0.28rem
               bottom 0.22rem
               z-index 2
               font-size: 16px;
               font-weight 600
	           color: white;
           }
       }
</style>
