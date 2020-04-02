<template>
  <div class="search">
    <div class="info">
        <div class="infoName border">         
            <input type="text" class="infoName-text border" placeholder="搜：晴天娃娃">
            <span class="iconfont infoName-icon">&#xe60a;</span>
        </div>
    </div>
    <div class="lastest">
        <div class="content">最近搜索</div>
    </div>
    <search-list></search-list>
  </div>
</template>

<script>
import axios from 'axios'
import SearchList from './commonList/searchList'
export default {
  name: 'Search',
  components: {
      SearchList,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .border {
        border: solid 1px #707070
    }
    .search {
        margin-top:0.7rem
        .infoName {
            width :6.7rem
            height :1.04rem
            line-height :1.04rem
            border-radius 0.52rem
            //background-color red
            margin:0 auto
            display:flex
            .iconfont{
                text-align :center
                margin-left :2.16rem
                font-size:0.51rem
                color :#000
            }
            .infoName-text {
                margin-left:0.44rem
                height :1.04rem
                line-height :1.0rem
                font-family :Microsoft YaHei;
                border :none
            }
        }
        .lastest {
            margin-left:0.4rem;
            margin-top:0.42rem;
            font-size:0.22rem;
            font-family: Segoe UI;
            color: #000000;
        }
    }
</style>
