<template>
    <div :style="createStyle" ref='wrapper'>
        <div>
            <create-header></create-header>
            <create-body></create-body>
            <create-message></create-message>
            <navigation></navigation>
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
    name: 'Create',
    components: {
        CreateHeader,
        CreateBody,
        CreateMessage,
        Navigation
    },
    data: function() {
        return {
            createStyle: {
                backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                width:"100%",
                height:"100%",
                position:"fixed"
            }
        }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
}
</script>

<style lang='stylus' scoped>
</style>