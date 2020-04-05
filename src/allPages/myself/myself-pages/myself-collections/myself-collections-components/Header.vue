<template>
    <div class="header">
        <router-link to='/myself'>
            <div class="back-arrow">
            <span class="iconfont">&#xe65e;</span>
            </div>
        </router-link>
        <div class="title">我的收藏</div>
        <div class="search">
            <input class='input border' v-model="keyword" type='text' placeholder='搜索我收藏的创作'>
            <span class="iconfont search-icon">&#xe60a;</span>
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li class="search-item" v-for="(item,index) in List" :key="index">
                    <div class="list-item border">
                        <div class="item-header">
                            <div class="header-desc">|| {{item.name}}</div>
                            <div class="header-icon">
                                <span class="iconfont">
                                    <img src="static/icons/small/组件 61 – 1.png" alt="">
                                </span>
                            </div>
                        </div>
                        <div class="item-content">{{item.desc}}</div>
                        <div class="item-last">
                            <div class="circle border-circle"></div>
                            <div class="username">{{item.user}}</div>
                            <div class="date">3月20日</div>
                        </div>
                    </div>
                </li>
                <li class="search-item border-bottom" v-show="hasCollections">没有找到哦~再搜搜试试吧！</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FocusHeader',
  props: {
      collections:Array
  },
  data: function() {
      return {
          keyword:'',
          timer:null,
          List:[],
      }
  },
  computed: {
      hasCollections() {
          return !this.List.length
      }
  },
  watch: {
      keyword() {
          if(this.timer) {
              clearTimeout(this.timer);
          }
          if(!this.keyword) {
              this.List = [];
              return
          }
          this.timer = setTimeout(() => {
              const result = [];
              this.collections.forEach(value => {
                  if(value.name.indexOf(this.keyword) > -1) {
                      result.push(value);
                  }
              })
              this.List = result;
          },100)
      }
  }
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
        .search-content {
            position absolute
            left 0.52rem
            right 0.52rem
            top 3.87rem
            overflow hidden
            bottom 0
            z-index 1
            background-color #ffffff
            .search-item {
                .list-item {
                    border-radius 0.22rem
                    height: 2.28rem
                    width: 100%     
                    margin-bottom:0.4rem
                    .item-header {
                        display:flex
                        margin-left:0.28rem
                        padding-top:0.2rem
                        .header-desc {
                            line-height:0.42rem
                            font-size: 0.32rem;
                            font-weight:600
                            color: #000000;
                            flex:1
                            font-family: PingFang SC;
                        }
                        .header-icon {
                            line-height:0.12rem
                            margin-right:0.22rem
                            .iconfont {
                                text-align:center
                                font-size :25px
                                font-weight:600
                            }
                        }
                    }
                    .item-content {
                        margin-left:0.28rem
                        margin-top:0.1rem
                        width:6.16rem;
                        height:0.9rem
                        line-height:0.4rem
                        overflow :hidden
                        white-space :nowrap
                        text-overflow:ellipsis
                        font-size: 0.32rem
                        color: #707070
                    }
                    .item-last {
                        display:flex
                        align-items center;
                        .circle {
                            width :.4rem
                            height : .4rem
                            background-color: red
                            margin-left:0.28rem
                            border-radius:50%
                        }
                        .username {
                            padding-left 0.08rem
                            flex 1
                            font-size:0.24rem
                            color: #000000
                            line-height: .4rem
                        }
                        .date {
                            font-size:0.24rem;
                            color: #000000;
                            margin-right:0.3rem
                            line-height: .4rem
                        }
                    }
                }
            }
        }
    }
</style>