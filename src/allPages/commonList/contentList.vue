<template>
    <div class='list'>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in datas" :key="index">
                <div class='item-title'>|| {{item.name}}</div>
                <div class='item-content'>{{item.desc}}</div>
                <div class='item-name'>
                    <div class='item-name-left'>
                        <div class='item-name-img'></div>
                        <div class='item-name-name'>{{item.user}}</div>
                    </div>
                    <div class='item-name-right'>3月10日</div>
                </div>
            </li>
        </ul>
        <div class='foot' v-show="display">没有了呢</div>
    </div>
</template>

<script>
export default {
    name: 'MyselfList',
    props: {
        datas:Array
    },
    computed: {
        display() {
            if(this.datas) {
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
  .list 
    .foot 
      font-size: .22rem
      text-align: center
    .wrapper
      .item
        height: 3rem  
        margin-left: .4rem
        margin-right: .4rem
        border-radius: .22rem
        padding-left: .28rem
        padding-right: .28rem
        margin-bottom: .2rem
        border: solid .01rem
        .item-title
          height: .72rem
          line-height: .8rem
          font-size: .4rem
        .item-content
          height: 1.5rem
          font-size: .37rem
          color: #707070
        .item-name
          display: flex
          justify-content: space-between
          height: .58rem
          padding-bottom: .2rem
          .item-name-right 
            height: .58rem
            line-height: .58rem
          .item-name-left
            height: .58rem
            .item-name-img
              border-radius: 100%
              width: .54rem
              height: .54rem
              background: red
              float: left 
            .item-name-name
              float: right
              height: .58rem
              line-height: .58rem
              margin-left: .1rem
           
</style>

