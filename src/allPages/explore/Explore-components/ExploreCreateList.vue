<template>
    <div class="list">
        <div class="title">
            <div class="title-left">热门原创 |</div>
            <router-link to='/hotCreate'>
                <div class="title-right">更多</div>
            </router-link>
        </div>
        <ul class="list-item">
            <li class="item-content" v-for="(item,index) in 3" :key="index">
                <div class="content-img"></div>
                <div class="content-desc">谁偷走了我的昨天</div>
                <div class="content-hot">50热度</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ExploreCreateList',
}
</script>

<style lang='stylus' scoped>
    .list {
        margin-left: 0.4rem
        margin-right:0.4rem
        .title {
           height 0.48rem
           .title-left {
               float left
               line-height:0.48rem
               font-size 0.36rem
               colocr:#000000
               font-weight:600
               font-family: PingFang SC
           }
           .title-right {
               line-height 0.48rem
               font-size 0.3rem
               color:#707070
               float right
               font-family: PingFang SC
           }
        }
        .list-item {
            margin-top:0.14rem  
            .item-content {
                margin-bottom:0.2rem
                height 1rem
                border-radius 0.22rem
                border: solid .01rem
                display flex
                align-items: center; //flex子盒子垂直居中
                //justify-content: center;  //flex子盒子水平居中
                line-height:1rem
                .content-img {
                    margin-left:0.16rem 
                    width 0.68rem
                    height 0.68rem
                    border-radius 50%
                    background-color red
                } 
                .content-desc {
                    margin-left:0.16rem
                    flex 1
                    font-size 0.28rem
                    color:#000000
                    font-family: PingFang SC
                }
                .content-hot {
                    margin-right:0.34rem
                    color:#000000
                    font-size 0.24rem
                    font-family: PingFang SC
                }
            }
        }
    }
</style>