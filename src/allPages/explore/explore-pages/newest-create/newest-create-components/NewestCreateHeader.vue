<template>
    <div>
        <router-link to='/explore'>
            <div class='header'>
                <span class='iconfont left'>&#xe65e;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NewestCreateHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
    height: 1.1rem
    line-height: 1.1rem
    text-align: center
    font-size: .5rem
    border-top: solid .01rem
    .left
      float: left
      margin-left: .4rem
      font-size: .7rem
</style>