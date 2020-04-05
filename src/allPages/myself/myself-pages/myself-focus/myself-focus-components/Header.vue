<template>
    <div class="header">
        <router-link to='/myself'>
            <div class="back-arrow">
            <span class="iconfont">&#xe65e;</span>
            </div>
        </router-link>
        <div class="title">我的关注</div>
        <div class="search">
            <input class='input border' type='text' placeholder='搜索我关注的用户'>
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
            line-height: .86rem
            font-family: PingFang SC;
            font-size: .64rem
            font-weight: normal
            color: #000000;
            margin-left:0.52rem
            margin-top:0.32rem
        }
        .search {
            height: 1rem
            line-height : 1rem
            margin-left: .52rem
            margin-right: .52rem
            margin-top:0.28rem
            position: relative
            .input {
              box-sizing:border-box
              -moz-box-sizing:border-box
              -webkit-box-sizing:border-box
              width: 100% 
              border-radius:0.22rem
              height: 1rem
              line-height: 1rem
              font-size: .36rem
              padding-left: .3rem
              padding-right: 1.1rem
            }
            .search-icon {
                position: absolute 
                right: .4rem
                top: .05rem
                font-size: .6rem
            }
        }
    }
</style>
