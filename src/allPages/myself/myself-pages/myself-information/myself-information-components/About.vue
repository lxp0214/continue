<template>
    <div class="about">
        <div class="about-header border-topbottom">
            <div class="header-arrow">
                <span class="iconfont icon">&#xe65e;</span>
            </div>
            <div class="header-content">关于</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'About',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .border-topbottom {
        &:before {
            border-color:#707070
        }
        &:after {
            border-color:#707070
        }
    }
    .about-header {
        margin-top:0.4rem
        width :100%;
        height:0.88rem
        line-height:0.88rem
        position relative
        .header-arrow {
            position:absolute
            left:0.3rem
            float left;
            .icon {
                font-size 0.48rem
                font-weight:600
            }
        }
        .header-content {
            text-align:center
            font-size: 18px
            color: #000000
            font-weight:600
        }
    }
</style>
