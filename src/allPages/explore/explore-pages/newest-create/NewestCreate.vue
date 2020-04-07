<template>
    <div class="newest-create">
        <newest-create-header class="header"></newest-create-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import NewestCreateHeader from './newest-create-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotCreate',
  components: {
      NewestCreateHeader:NewestCreateHeader,
      NewAndHot
  }
}
</script>
<style lang="stylus" scoped>
    .newest-create {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
