<template>
    <div class="explore">
        <explore-header></explore-header>
        <explore-body></explore-body>
    </div>
</template>

<script>
import ExploreHeader from './Explore-components/ExploreHeader'
import ExploreBody from './Explore-components/ExploreBody'
export default {
    name: 'Explore',
    components: {
        ExploreHeader:ExploreHeader,
        ExploreBody:ExploreBody
    }
}
</script>

<style>
    .explore {
        margin-top:0.4rem
    }
</style>