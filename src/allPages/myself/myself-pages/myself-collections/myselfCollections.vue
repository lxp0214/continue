<template>
     <div class="myselfCollections">
         <collections-header :collections="collections"></collections-header>
         <collections-list></collections-list>
     </div>
</template>

<script>
import axios from 'axios'
import CollectionsHeader from './myself-collections-components/Header'
import CollectionsList from './myself-collections-components/List'
export default {
  name: 'MyselfCollections',
  data: function() {
      return {
          collections:[]
      }
  },
  components: {
      CollectionsHeader:CollectionsHeader,
      CollectionsList:CollectionsList
  },
  methods: {
      getInfoCollection() {
          axios.get('static/mock/collection.json').then(this.handleGetCollection);
      },
      handleGetCollection(res) {
          res = res.data;
          if(res.ret && res.data) {
              var data = res.data;
              this.collections = data.collections
              console.log(this.collections);
          }
      }
  },
  mounted() {
      this.getInfoCollection()
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
</style>
