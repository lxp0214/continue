<template>
    <div class="header">
        <router-link to='/myself'>
            <div class="back-arrow">
            <span class="iconfont">&#xe65e;</span>
            </div>
        </router-link>
        <div class="title">我的关注</div>
        <div class="search border">
            <span class="search-desc">搜索我关注得用户</span>
            <span class="iconfont search-icon">&#xe60a;</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FocusHeader',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .border {
        border:1px solid #ccc
    }
    .header {
        .back-arrow {
            margin-top:0.58rem
            margin-left : 0.4rem
            color : #000000;
            .iconfont {
                font-size : 0.6rem
            }
        }
        .title {
            width: 128px;
            height: 43px;
            font-family: PingFang SC;
            font-size: 32px;
            font-weight: normal
            line-height: 43px;
            color: #000000;
            margin-left:0.52rem
            margin-top:0.32rem
        }
        .search {
            width: 6.72rem;
            height: 1rem;
            border-radius:0.22rem
            line-height : 1rem;
            margin :0 auto;
            margin-top:0.28rem
            display:flex
            .search-desc {
                font-family: Microsoft Yahei;
                font-size: 16px;
                color: #000000;
                padding-left 14px;
                font-weight:500;
            }
            .search-icon {
                font-size:24px;
                margin-left:3.06rem
            }
        }
    }
</style>
