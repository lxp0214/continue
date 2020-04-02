<template>
    <div>
        <newest-continue-header></newest-continue-header>
        <newest-continue-search></newest-continue-search>
        <myself-list></myself-list>
    </div>
</template>

<script>
import NewestContinueHeader from './newest-continue-components/NewestContinueHeader'
import NewestContinueSearch from './newest-continue-components/NewestContinueSearch'
import MyselfList from '../../../myself/Myself-components/MyselfList'
export default {
    name: 'NewestContinue',
    components: {
        NewestContinueHeader,
        NewestContinueSearch,
        MyselfList
    }
}
</script>

<style lang='stylus' scoped>
</style>