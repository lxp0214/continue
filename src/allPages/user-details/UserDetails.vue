<template>
    <div>
        <user-details-header></user-details-header>
        <user-details-search></user-details-search>
        <user-details-list></user-details-list>
    </div>
</template>

<script>
import UserDetailsHeader from './user-details-components/UserDetailsHeader'
import UserDetailsSearch from './user-details-components/UserDetailsSearch'
import UserDetailsList from './user-details-components/UserDetailsList'
export default {
    name: 'UserDetails',
    components: {
        UserDetailsHeader,
        UserDetailsSearch,
        UserDetailsList
    }
}
</script>

<style lang='stylus' scoped>
 
</style>