<template>
    <div>
        <myself-header></myself-header>
        <myself-body></myself-body>
        <myself-list></myself-list>
    </div>
</template>

<script>
import MyselfHeader from './Myself-components/MyselfHeader'
import MyselfBody from './Myself-components/MyselfBody'
import MyselfList from './Myself-components/MyselfList'
export default {
    name: 'Myself',
    components: {
        MyselfHeader,
        MyselfBody,
        MyselfList
    }
}
</script>

<style>
</style>
