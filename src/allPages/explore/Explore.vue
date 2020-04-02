<template>
    <div class="explore">
        <explore-header></explore-header>
        <explore-swiper></explore-swiper>
        <explore-body></explore-body>
        <explore-continue-list></explore-continue-list>
        <explore-create-list></explore-create-list>
    </div>
</template>

<script>
import ExploreHeader from './Explore-components/ExploreHeader'
import ExploreBody from './Explore-components/ExploreBody'
import ExploreContinueList from './Explore-components/ExploreContinueList'
import ExploreCreateList from './Explore-components/ExploreCreateList'
import ExploreSwiper from './Explore-components/ExploreSwiper'
export default {
    name: 'Explore',
    components: {
        ExploreHeader:ExploreHeader,
        ExploreBody:ExploreBody,
        ExploreContinueList:ExploreContinueList,
        ExploreCreateList:ExploreCreateList,
        ExploreSwiper:ExploreSwiper
    }
}
</script>

<style>
    .explore {
        margin-top:0.4rem
    }
</style>