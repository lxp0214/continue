<template>
    <div class="hot-continue">
        <hot-continue-header class="header"></hot-continue-header>
        <myself-list></myself-list>
    </div>
</template>

<script>
import HotContinueHeader from './hot-continue-components/Header'
import ContentList from '@/allPages/commonList/contentList'
import MyselfList from '../../../myself/Myself-components/MyselfList'
export default {
  name: 'HotContinue',
  components: {
      HotContinueHeader:HotContinueHeader,
      ContentList:ContentList,
      MyselfList:MyselfList
  }
}
</script>
<style lang="stylus" scoped>
    .hot-continue {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
