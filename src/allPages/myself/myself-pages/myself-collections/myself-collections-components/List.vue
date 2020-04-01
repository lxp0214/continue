<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="list-item border" v-for="item in 13" :key="item">
                <div class="item-header">
                    <div class="header-desc">|| 谁偷走了我的昨天</div>
                    <div class="header-icon">
                        <span class="iconfont">&#xe617;</span>
                    </div>
                </div>
                <div class="item-content">日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟哈哈哈哈哈哈哈</div>
                <div class="item-last">
                    <div class="circle border-circle"></div>
                    <div class="username">用户昵称</div>
                    <div class="date">3月20日</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'CollectionsList',
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .border {
        &:before {
            border: 2px solid #ccc
            border-radius :0.22rem
        }
        &:after  {
            border: 2px solid #ccc
            border-radius :0.22rem
        }
    }
    .border-circle {
        &:before {
            border: 2px solid #ccc
        }
        &:after  {
            border: 2px solid #ccc
        }
    }
    .list {
        overflow:hidden
        position:absolute
        left :0.4rem;
        top:4.02rem
        bottom :0
        .list-item {
            width: 6.72rem;
            height: 2.28rem;       
            margin-bottom:0.4rem
            .item-header {
                display:flex
                margin-left:0.28rem
                padding-top:0.2rem
                .header-desc {
                    line-height:0.42rem
                    font-size: 0.32rem;
                    font-weight:600
                    color: #000000;
                    flex:1
                    font-family: PingFang SC;
                }
                .header-icon {
                    line-height:0.42rem
                    margin-right:0.22rem
                    .iconfont {
                        text-align:center
                        font-size :25px
                        font-weight:600
                    }
                }
            }
            .item-content {
                margin-left:0.28rem
                margin-top:0.1rem
                width:6.16rem;
                height:0.9rem
                line-height:0.4rem
                overflow :hidden
                white-space :nowrap
                text-overflow:ellipsis
                // word-break:break-all;
                // word-wrap:break-word;
                font-size: 0.32rem
                color: #707070
            }
            .item-last {
                display:flex
                .circle {
                    text-align :center
                    width :20px;
                    height 20px;
                    background-color red
                    margin-left:0.28rem
                    border-radius:50%
                }
                .username {
                    text-align:center
                    flex 1
                    font-size:0.24rem;
                    color: #000000;
                }
                .date {
                    text-align:center
                    font-size:0.24rem;
                    color: #000000;
                    margin-right:0.3rem
                }
            }
        }
    }
</style>
