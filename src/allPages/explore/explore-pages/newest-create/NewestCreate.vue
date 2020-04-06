<template>
    <div class="newest-create">
        <newest-create-header class="header"></newest-create-header>
        <myself-list></myself-list>
    </div>
</template>

<script>
import NewestCreateHeader from './newest-create-components/Header'
import ContentList from '@/allPages/commonList/contentList'
import MyselfList from '../../../myself/Myself-components/MyselfList'
export default {
  name: 'HotCreate',
  components: {
      NewestCreateHeader:NewestCreateHeader,
      MyselfList:MyselfList
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
