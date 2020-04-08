<template>
  <div id="app" :style="createStyle" ref='wrapper'>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'App',
  data: function() {
      return {
          createStyle: {
                backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%",
                position:"fixed"
          }
      }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang='stylus' scoped>
</style>
