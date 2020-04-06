<template>
    <div class="newest-continue">
        <newest-continue-header class="header"></newest-continue-header>
        <myself-list></myself-list>
    </div>
</template>

<script>
import NewestContinueHeader from './newest-continue-components/Header'
import ContentList from '@/allPages/commonList/contentList'
import MyselfList from '../../../myself/Myself-components/MyselfList'
export default {
  name: 'HotContinue',
  components: {
      NewestContinueHeader:NewestContinueHeader,
      ContentList:ContentList,
      MyselfList:MyselfList
  }
}
</script>
<style lang="stylus" scoped>
    .newest-continue {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
