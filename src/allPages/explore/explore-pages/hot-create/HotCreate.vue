<template>
    <div class="hot-create">
        <hot-create-header class="header"></hot-create-header>
        <content-list></content-list>
    </div>
</template>

<script>
import HotCreateHeader from './hot-create-components/Header'
import ContentList from '@/allPages/commonList/contentList'
export default {
  name: 'HotCreate',
  components: {
      HotCreateHeader:HotCreateHeader,
      ContentList:ContentList
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
