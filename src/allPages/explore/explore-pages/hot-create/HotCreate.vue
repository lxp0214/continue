<template>
    <div class="hot-create">
        <hot-create-header class="header"></hot-create-header>
        <myself-list></myself-list>
    </div>
</template>

<script>
import HotCreateHeader from './hot-create-components/Header'
import ContentList from '@/allPages/commonList/contentList'
import MyselfList from '../../../myself/Myself-components/MyselfList'
export default {
  name: 'HotCreate',
  components: {
      HotCreateHeader:HotCreateHeader,
      MyselfList:MyselfList
  }
}
</script>
<style lang="stylus" scoped>
    .hot-create {
        margin-top:0.4rem
        .header {
            margin-bottom:1.62rem
        }
    }
    
</style>
