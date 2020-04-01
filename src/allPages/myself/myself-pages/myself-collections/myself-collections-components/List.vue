<template>
    <div class="list">
        <div class="list-item">
            <div class="item-header"></div>
            <div class="item-content"></div>
            <div class=""></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CollectionsList',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
    .list {
        overflow :hidden
        position:absolute
        top:0.4rem;
        left:0.4rem;

    }
</style>
