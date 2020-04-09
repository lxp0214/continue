<template>
    <div>
        <artical-details-header></artical-details-header>
        <artical-details-title :contents='contents'></artical-details-title>
        <artical-details-chapter :contents='contents'></artical-details-chapter>
    </div>
</template>

<script>
import ArticalDetailsHeader from './artical-details-components/ArticalDetailsHeader'
import ArticalDetailsTitle from './artical-details-components/ArticalDetailsTitle'
import ArticalDetailsChapter from './artical-details-components/ArticalDetailsChapter'
export default {
    name: 'ArticalDetails',
    data () {
      return {
          contents: {}
      }
    },
    components: {
        ArticalDetailsHeader,
        ArticalDetailsTitle,
        ArticalDetailsChapter
    },
    mounted () {
    fetch('http://api.gxy.ink/v1/hot/sequels?page=1',{
              mode:'cors',
              method:'GET',
              headers:
                new Headers({
                    'Content-Type':'application/json',
                    'Authorization':localStorage.token_id
                })
    }).then(res => res.json().then(body => {
        console.log(body)
        if(body.code===0) {
            this.contents = body.data[0]
            console.log(this.contents)
        }
    }))
  }
}
</script>

<style lang='stylus' scoped>
</style>