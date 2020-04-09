<template>
    <div ref="wrapper">
        <div>
            <create-header></create-header>
            <create-body></create-body>
            <create-message></create-message>
            <!-- <navigation></navigation> -->
        </div>
    </div>
</template>


<script>
import CreateHeader from './create-components/CreateHeader'
import CreateBody from './create-components/CreateBody'
import CreateMessage from './create-components/CreateMessage'
import Navigation from '../Navigation'
import BScroll from 'better-scroll'
export default {
    inject: ['reload'],
    name: 'Create',
    components: {
        CreateHeader,
        CreateBody,
        CreateMessage,
        Navigation
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang='stylus' scoped>
</style>