<template>
    <div class='search'>
        || 最新续作
        <router-link :to="'/search'+'?name='+'newcontinue'">
            <span class='iconfont icon'>&#xe60a;</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NewestContinueSearch'
}
</script>

<style lang='stylus' scoped>
  .search
    margin-top: .4rem
    height: .86rem
    line-height: .86rem
    margin-left: .4rem
    margin-right: .4rem
    margin-bottom: .4rem
    position: relative
    font-size: .64rem
    .icon
      position: absolute
      top: 0
      bottom: 0
      right: 0
      font-size: .7rem
</style>
