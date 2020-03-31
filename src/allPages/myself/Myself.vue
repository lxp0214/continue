<template>
    <div>
        <myself-header></myself-header>
        <myself-body></myself-body>
    </div>
</template>

<script>
import MyselfHeader from './Myself-components/MyselfHeader'
import MyselfBody from './Myself-components/MyselfBody'
export default {
    name: 'Myself',
    components: {
        MyselfHeader,
        MyselfBody
    }
}
</script>

<style>
</style>
