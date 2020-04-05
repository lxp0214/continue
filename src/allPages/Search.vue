<template>
  <div class="search">
    <div class="info">
        <div class="infoName border">         
            <input type="text" class="infoName-text border" placeholder="搜：晴天娃娃" v-model="keyword">
            <span class="iconfont infoName-icon">&#xe60a;</span>
        </div>
    </div>
    <div class="lastest">
        <div class="content" v-show="!hasKeyword">最近搜索</div>
    </div>
    <search-list v-show="!hasKeyword"></search-list>
    <content-list v-show="hasKeyword" :datas="Lists"></content-list>
    <div class="tip" v-show="hasDisplay">没有找到哦~再搜搜试试吧！</div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchList from './commonList/searchList'
import ContentList from './commonList/contentList'
export default {
  name: 'Search',
  data: function() {
      return {
          link:this.$route.query.name,
          datas:[],
          keyword:'',
          Lists:[],
          timer:null
      }
  },
  computed: {
      hasKeyword() {
          if(!this.keyword) {
              return false
          }
          else {
              return true
          }
      },
      hasDisplay() {
          if(this.keyword && !this.Lists.length) {
              return true
          }
          else {
              return false
          }
      }
  },
  components: {
      SearchList,
      ContentList
  },
  watch: {
      keyword() {
          if(this.timer) {
              clearTimeout(this.timer);
          }
          if(!this.keyword) {
              this.Lists = [];
              return
          }
          this.timer = setTimeout(() => {
              const result = [];
              this.datas.forEach(value => {
                  if(value.name.indexOf(this.keyword) > -1) {
                      result.push(value);
                  }
              })
              this.Lists = result
          },100)
      }
  },
  mounted() {
      console.log(this.link)
      if(this.link === 'mycreate') {
          this.getMyCreateInfo()
          //console.log(this.link)
      }
      if(this.link === 'hotcontinue') {
          this.getHotContinueInfo()
      }
      if(this.link === 'hotcreate') {
          this.getHotCreateInfo()
      }
      if(this.link === 'newcontinue') {
          this.getNewContinueInfo()
      }
      if(this.link === 'newcreate') {
          this.getNewCreateInfo()
      }
  },
  methods: {
      getMyCreateInfo() {
          axios.get('static/mock/collection.json').then(res => {
              res = res.data;
              if(res.ret && res.data) {
                  const data = res.data;
                  this.datas = data.collections;
              }
          });
      },
      getHotContinueInfo() {
          axios.get('static/mock/collection.json').then(res => {
              res = res.data;
              if(res.ret && res.data) {
                  const data = res.data;
                  this.datas = data.collections;
              }
          });
      },
      getHotCreateInfo() {
          axios.get('static/mock/collection.json').then(res => {
              res = res.data;
              if(res.ret && res.data) {
                  const data = res.data;
                  this.datas = data.collections;
              }
          });
      },
      getNewContinueInfo() {
          axios.get('static/mock/collection.json').then(res => {
              res = res.data;
              if(res.ret && res.data) {
                  const data = res.data;
                  this.datas = data.collections;
              }
          });
      },
      getNewCreateInfo() {
          axios.get('static/mock/collection.json').then(res => {
              res = res.data;
              if(res.ret && res.data) {
                  const data = res.data;
                  this.datas = data.collections;
              }
          });
      }
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
        .tip {
            margin-left 0.4rem
        }
    }
</style>
