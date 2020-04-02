<template>
    <div>
        <newest-create-header></newest-create-header>
        <newest-create-search></newest-create-search>
        <myself-list></myself-list>
    </div>
</template>

<script>
import NewestCreateHeader from './newest-create-components/NewestCreateHeader'
import NewestCreateSearch from './newest-create-components/NewestCreateSearch'
import MyselfList from '../../../myself/Myself-components/MyselfList'
export default {
    name: 'NewestCreate',
    components: {
        NewestCreateHeader,
        NewestCreateSearch,
        MyselfList
    }
}
</script>

<style lang='stylus' scoped>
</style>