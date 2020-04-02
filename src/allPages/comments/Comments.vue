<template>
    <div>
        <comments-header></comments-header>
        <comments-body></comments-body>
    </div>
</template>

<script>
import CommentsHeader from './comments-components/Header'
import CommentsBody from './comments-components/Body'
export default {
    name: 'Comments',
    components: {
        CommentsBody,
        CommentsHeader
    }
}
</script>
<style lang='stylus' scoped>
</style>