<template>
     <div class="myselfFocus">
         <focus-header></focus-header>
         <focus-list></focus-list>
     </div>
</template>

<script>
import axios from 'axios'
import FocusHeader from './myself-focus-components/Header'
import FocusList from './myself-focus-components/List'
export default {
  name: 'MyselfFocus',
  components: {
      FocusHeader : FocusHeader,
      FocusList : FocusList
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
</style>
