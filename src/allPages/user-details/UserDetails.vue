<template>
    <div>
        <user-details-header></user-details-header>
        <user-details-search></user-details-search>
        <myself-list></myself-list>
    </div>
</template>

<script>
import UserDetailsHeader from './user-details-components/UserDetailsHeader'
import UserDetailsSearch from './user-details-components/UserDetailsSearch'
import MyselfList from '../myself/Myself-components/MyselfList'
export default {
    name: 'UserDetails',
    components: {
        UserDetailsHeader,
        UserDetailsSearch,
        MyselfList
    }
}
</script>

<style lang='stylus' scoped>
 
</style>