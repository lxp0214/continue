<template>
    <div class="hot-continue">
        <hot-continue-header class="header"></hot-continue-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import HotContinueHeader from './hot-continue-components/Header'
import ContentList from '@/allPages/commonList/contentList'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotContinue',
  components: {
      HotContinueHeader:HotContinueHeader,
      ContentList:ContentList,
      NewAndHot
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
