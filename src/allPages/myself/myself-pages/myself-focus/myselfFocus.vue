<template>
     <div class="myselfFocus">
         <focus-header :persons="persons"></focus-header>
         <focus-list></focus-list>
     </div>
</template>

<script>
import axios from 'axios'
import FocusHeader from './myself-focus-components/Header'
import FocusList from './myself-focus-components/List'
export default {
  name: 'MyselfFocus',
  data: function() {
      return {
          persons:[],
      }
  },
  components: {
      FocusHeader : FocusHeader,
      FocusList : FocusList
  },
  methods: {
      getInfoFocus() {
          axios.get('static/mock/focus.json').then(this.handleGetFocus);
      },
      handleGetFocus(res) {
          res = res.data;
          if(res.ret && res.data) {
              var data = res.data;
              this.persons = data.persons
             // console.log(this.persons);
          }
      }
  },
  mounted() {
      this.getInfoFocus()
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
</style>
