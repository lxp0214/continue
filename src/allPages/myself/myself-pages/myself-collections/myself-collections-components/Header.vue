<template>
    <div class="header">
        <router-link to='/myself'>
            <div class="back-arrow">
            <span class="iconfont">&#xe65e;</span>
            </div>
        </router-link>
        <div class="title">我的收藏</div>
        <div class="search border">
            <span class="search-desc">搜索我收藏的创作</span>
            <span class="iconfont search-icon">&#xe60a;</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CollectionsHeader',
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
            line-height: .86rem
            font-family: PingFang SC;
            font-size: .64rem
            font-weight: normal
            color: #000000;
            margin-left:0.52rem
            margin-top:0.32rem
        }
        .search {
            height: 1rem;
            border-radius:0.22rem
            line-height : 1rem;
            margin :0 .52rem;
            margin-top:0.28rem
            display:flex
            position: relative
            .search-desc {
                font-family: Microsoft Yahei;
                font-size: 16px;
                color: #000000;
                padding-left 14px;
                font-weight:500;
            }
            .search-icon {
                font-size:24px;
                position: absolute 
                right: .4rem
            }
        }
    }
</style>
