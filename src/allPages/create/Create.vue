<template>
    <div>
        <div>
            <create-body></create-body>
            <create-message></create-message>
            <!-- <navigation></navigation> -->
        </div>
    </div>
</template>


<script>
import CreateBody from './create-components/CreateBody'
import CreateMessage from './create-components/CreateMessage'
import Navigation from '../Navigation'
import BScroll from 'better-scroll'
export default {
    name: 'Create',
    components: {
        CreateBody,
        CreateMessage,
        Navigation
    },
    mounted() {
    //   this.scroll = new BScroll(this.$refs.wrapper)
    },
}
</script>

<style lang='stylus' scoped>
</style>