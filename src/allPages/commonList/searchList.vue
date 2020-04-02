<template>
    <div class="search-list">
        <div class="list" v-for="(item,index) in list.slice(0,5)" :key="index">
            <div class="list-item">{{item}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchList',
  data:function() {
      return {
          list:['雨打芭蕉','晴天娃娃','罗密欧与朱丽叶','吴亦凡与与鹿晗新歌','啦啦啦啦啦','我是发明家']
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .search-list {
        margin-left:0.4rem;
        margin-top:0.45rem;
        .list {
            margin-bottom:0.52rem
            .list-item {
                font-size:0.22rem;
                font-family: Segoe UI;
                color: gray;
            }
        }
    }
</style>
