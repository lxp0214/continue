<template>
    <div class="header">
        <router-link to='/myself'>
            <div class="back-arrow">
            <span class="iconfont">&#xe65e;</span>
            </div>
        </router-link>
        <div class="title">我的关注</div>
        <div class="search">
            <input class='input border' v-model="keyword" type='text' placeholder='搜索我关注的用户'>
            <span class="iconfont search-icon">&#xe60a;</span>
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="(item,index) in List" :key="index">
                    <div class="person-img">

                    </div>
                    <div class="person">
                        <div class="person-name">{{item.name}}</div>
                        <div class="person-desc">{{item.desc}}</div>
                    </div>
                    <div class="person-icon">
                        <span class="iconfont person-icon">&#xe700;</span>
                    </div>
                </li>
                <li class="search-item border-bottom" v-show="hasPersons">没有找到哦~再搜搜试试吧！</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FocusHeader',
  props: {
      persons:Array
  },
  data: function() {
      return {
          keyword:'',
          timer:null,
          List:[],
      }
  },
  computed: {
      hasPersons() {
          return !this.List.length
      }
  },
  watch: {
      keyword() {
          //console.log(this.persons)
          if(this.timer) {
              clearTimeout(this.timer);
          }
          if(!this.keyword) {
              this.List = [];
              return
          }
          this.timer = setTimeout(() => {
              const result = [];
              this.persons.forEach(value => {
                  if(value.name.indexOf(this.keyword) > -1) {
                      result.push(value);
                  }
              })
              this.List = result;
              //console.log(this.persons)
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
                display flex
                align-items center;
                //position relative
                //line-height 0.74rem
                padding-left 0.2rem
                background-color #fff
                color #000
                .person-img {
                    width 0.78rem
                    height 0.78rem
                    border-radius 50%
                    background-color  red
                }
                .person {
                    flex 1
                    padding-left 0.2rem
                    .person-name {
                        margin-top:0.2rem
                        font-size :0.34rem;
                        line-height:0.42rem
                        font-weight:600
                        }
                        .person-desc {
                            padding-bottom 0.2rem 
                            padding-top :0.08rem
                            font-size :0.2rem;
                            line-height:0.28rem;
                        }
                }
                .person-icon {
                    //position absolute
                    // top 0
                    // right 0
                    font-size 0.58rem
                    text-align center
                }
            }
        }
    }
</style>
