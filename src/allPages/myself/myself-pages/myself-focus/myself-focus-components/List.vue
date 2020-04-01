<template>
    <div>
        <div class="list" ref='wrapper'>
            <div>
                <div class="list-item border-bottom" v-for="item in 13" :key="item">
                    <div class="item-icon border">
                        <span class="iconfont iconContent">&#xe608;</span>
                    </div>
                    <div class="item-user">
                        <div class="user-name">晴天娃娃</div>
                        <div class="user-desc">做不一样的自己</div>
                    </div>
                    <div class="item-last">
                        <span class="iconfont">&#xe700;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'FocusList',
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .border {
        &:before {
            border:2px solid #ccc
            border-radius 50%;
        }
    }
    .border-bottom {
        &:after  {
            border:1px solid #ccc
        }
    }
    .list {
        overflow:hidden
        position:absolute
        top:4.22rem;
        left :0.4rem;
        bottom :0
        .list-item {
            line-height:0.74rem
            display :flex
            margin-bottom:0.4rem
            .item-icon {
                height:0.77rem;
                width:0.77rem;
                line-height:0.77rem
                border-radius 50%;
                .iconContent {
                    text-align:center !important 
                    display:block;
                    font-size 0.44rem
                }
            }
            .item-user {
                flex :1
                padding-left 0.28rem
                .user-name {
                    font-size :0.34rem;
                    line-height:0.42rem
                    font-weight:600
                }
                .user-desc {
                    padding-top :0.08rem
                    font-size :0.2rem;
                    line-height:0.28rem;
                }
            }
            .item-last {
                margin-left:3.45rem
                .iconfont {
                    font-size 0.58rem
                }
            }
        }
    }
</style>
