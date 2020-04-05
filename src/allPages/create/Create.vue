<template>
    <div>
        <create-header></create-header>
        <create-body></create-body>
        <create-message></create-message>
        <navigation></navigation>
    </div>
</template>


<script>
import CreateHeader from './create-components/CreateHeader'
import CreateBody from './create-components/CreateBody'
import CreateMessage from './create-components/CreateMessage'
import Navigation from '../Navigation'
export default {
    name: 'Create',
    components: {
        CreateHeader,
        CreateBody,
        CreateMessage,
        Navigation
    }
}
</script>

<style lang='stylus' scoped>
</style>