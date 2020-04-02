<template>
    <div class="body">
        <div class="body-header">雨打芭蕉湿</div>
        <div class="body-foot">
            <div class="foot-left">
                <div class="icon">
                    <span class="iconfont">&#xe608;</span>
                </div>
                <div class="desc">由xxx用户发起</div>
            </div>
            <div class="foot-right">
                <div class="iconfont icon-right">&#xe61a;</div>
                <div class="iconfont icon-right">&#xe628;</div>
                <div class="iconfont icon-right">&#xe617;</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateBody'
}
</script>

<style lang='stylus' scoped>
    .body {
        margin-top 0.58rem
        margin-left 0.4rem
        margin-right 0.4rem
        .body-header {
            font-size 0.64rem
            color #000000
            font-family PingFang 
        }
        .body-foot {
            margin-top 0.38rem
            line-height 0.4rem
            .foot-left {
                display flex
                float left
                .icon {
                    margin-right 0.08rem
                }
                .desc {
                    font-size 0.24rem
                    color #000000
                    align-items center
                }
            }
            .foot-right {
                float right
                display flex
                text-align center
                .icon-right {
                    font-size 30px
                    margin-left 0.42rem
                }
            }
        }
    }
</style>
