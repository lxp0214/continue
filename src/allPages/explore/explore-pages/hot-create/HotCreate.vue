<template>
    <div class="hot-create">
        <hot-create-header class="header"></hot-create-header>
        <new-and-hot></new-and-hot>
    </div>
</template>

<script>
import HotCreateHeader from './hot-create-components/Header'
import NewAndHot from '../../../commonList/NewAndHot'
export default {
  name: 'HotCreate',
  components: {
      HotCreateHeader:HotCreateHeader,
      NewAndHot
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
