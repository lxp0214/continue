<template>
    <div class="body">
        <div class="body-header">雨打芭蕉湿</div>
        <div class="body-foot">
            <div class="foot-left">
                <div class="icon"></div>
                <div class="desc">由xxx用户发起</div>
            </div>
            <div class="foot-right">
                <img src='static\icons\middle\组件 74 – 1.png'>
                <img src='static\icons\middle\组件 73 – 1.png'>
                <img src='static\icons\middle\组件 49 – 1.png'>
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
            color #ffffff
            font-family PingFang 
        }
        .body-foot {
            margin-top 0.38rem
            line-height 0.6rem
            height: .6rem
            display: flex
            justify-content: space-between
            .foot-left {
                display: flex
                .icon {
                    border-radius: 100%
                    background: red 
                    width: .6rem 
                    height: .6rem
                }
                .desc {
                    font-size 0.24rem
                    color #000000
                    margin-left: .1rem
                }
            }
            .foot-right {
                img {
                    height: .48rem
                    margin-left: .36rem
                }
            }
        }
    }
</style>
