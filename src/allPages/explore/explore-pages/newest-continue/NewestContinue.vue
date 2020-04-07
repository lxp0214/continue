<template>
    <div class="newest-continue">
        <newest-continue-header class="header"></newest-continue-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import NewestContinueHeader from './newest-continue-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotContinue',
  components: {
      NewestContinueHeader:NewestContinueHeader,
      NewAndHot
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
