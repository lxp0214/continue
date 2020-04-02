<template>
    <div>
        <create-body></create-body>
        <create-message></create-message>
        <navigation></navigation>
    </div>
</template>


<script>
import CreateBody from './create-components/CreateBody'
import CreateMessage from './create-components/CreateMessage'
import Navigation from '../Navigation'
export default {
    name: 'Create',
    components: {
        CreateBody,
        CreateMessage,
        Navigation
    }
}
</script>

<style lang='stylus' scoped>
</style>