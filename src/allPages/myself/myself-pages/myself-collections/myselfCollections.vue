<template>
     <div class="myselfCollections">
         <collections-header></collections-header>
         <collections-list></collections-list>
     </div>
</template>

<script>
import axios from 'axios'
import CollectionsHeader from './myself-collections-components/Header'
import CollectionsList from './myself-collections-components/List'
export default {
  name: 'MyselfCollections',
  components: {
      CollectionsHeader:CollectionsHeader,
      CollectionsList:CollectionsList
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
</style>
