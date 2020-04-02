<template>
    <div class='header'>
        <div class='left'>
            <div class='left-top'>探索</div>
            <div class='left-bottom'>多少人的思维，一笔笔勾勒出来的华章...</div>
        </div>
        <div class='right'>
            <span class="iconfont search">&#xe60a;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExplorefHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    height: 1.24rem
    padding-left: 0.4rem
    padding-right: 0.4rem
    padding-top: 1.16rem
    padding-bottom: 0.46rem
    .left
      float: left 
      height: 1.24rem
      .left-top
        font-weight:600
        font-size: 0.64rem
        height 0.86rem
        line-height:0.86rem
      .left-bottom
        height: 0.38rem
        line-height: 0.38rem
    .right
        .search
            margin-left :0.8rem
            font-size:30px
            font-weight:500
            color:#000000;
</style>
