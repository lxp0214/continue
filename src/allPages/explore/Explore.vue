<template>
    <div class="explore" ref="wrapper">
        <div>
            <explore-header></explore-header>
            <explore-swiper></explore-swiper>
            <explore-body></explore-body>
            <explore-continue-list></explore-continue-list>
            <explore-create-list></explore-create-list>
            <!-- <navigation></navigation> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ExploreHeader from './Explore-components/ExploreHeader'
import ExploreBody from './Explore-components/ExploreBody'
import ExploreContinueList from './Explore-components/ExploreContinueList'
import ExploreCreateList from './Explore-components/ExploreCreateList'
import ExploreSwiper from './Explore-components/ExploreSwiper'
import Navigation from '../Navigation'
import BScroll from 'better-scroll'
export default {
    name: 'Explore',
    components: {
        ExploreHeader:ExploreHeader,
        ExploreBody:ExploreBody,
        ExploreContinueList:ExploreContinueList,
        ExploreCreateList:ExploreCreateList,
        ExploreSwiper:ExploreSwiper,
        Navigation:Navigation
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    // data: function() {
    //     return {
    //         createStyle: {
    //             backgroundImage:"url('static/imgs/创作页动态背景1.gif')",
    //             backgroundRepeat:"no-repeat",
    //             backgroundSize:"100% 100%",
    //             width:"100%",
    //             height:"100%",
    //             position:"fixed"
    //         }
    //     }
    // },
}
</script>

<style>
    .explore {
        margin-top:0.4rem
    }
</style>