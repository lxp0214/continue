<template>
    <div class="text">
        <div class="title">1 雨停了</div>
        <div class="content">
        </div>
        <div class="foot">
            <div class="foot-left">
                <div class="circle"></div>
                <div class="desc">由xxx用户</div>
                <div class="date">3月10日 16:30</div>
            </div>
            <div class="foot-right">
                <div class="iconfont icon-right">&#xe628;</div>
                <div class="iconfont icon-right">&#xe617;</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateText'
}
</script>

<style lang='stylus' scoped>
    .text {
        margin-top 1.6rem
        padding-top 0.2rem
        background-color lightgray
        .title {
            margin-left 0.28rem
            font-size 0.36rem
            color #000000
            font-weight 600
        }
        .foot {
            margin-top 0.42rem
            margin-left 0.28rem
            margin-right 0.3rem
            display flex
            line-height 0.4rem
            .foot-left {
                flex 1
                display flex
                .circle {
                    width 0.36rem
                    height 0.36rem
                    border-radius 50%
                    border 1px solid
                }
                .desc {
                    margin-left 0.1rem
                    font-size 0.21rem
                    color #000000
                }
                .date {
                    margin-left 0.1rem
                    font-size 0.17rem
                    color #000000
                    text-align bottom 
                }
            }
            .foot-right {
                display flex
                margin-bottom  0.3rem
                .icon-right {
                    margin-left 0.35rem
                    font-size 0.48rem
                }
            }
        }
    }
</style>
