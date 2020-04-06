<template>
    <div>
        <myself-header></myself-header>
        <myself-body @changeList="changeList"></myself-body>
        <myself-list v-show='MyselfListShow'></myself-list>
        <all-navigation></all-navigation>
        <collections-list v-show='CollectionsListShow' ></collections-list>
        <focus-list v-show='FocusListShow'></focus-list>
    </div>
</template>

<script>
import MyselfHeader from './Myself-components/MyselfHeader'
import MyselfBody from './Myself-components/MyselfBody'
import MyselfList from './Myself-components/MyselfList'
import AllNavigation from '../Navigation'
import CollectionsList from './myself-pages/myself-collections/myself-collections-components/List'
import FocusList from './myself-pages/myself-focus/myself-focus-components/List'
export default {
    name: 'Myself',
    components: {
        MyselfHeader,
        MyselfBody,
        MyselfList,
        AllNavigation,
        CollectionsList,
        FocusList
    },
    data () {
        return {
            MyselfListShow: true,
            CollectionsListShow: false,
            FocusListShow: false
        }
    },
    methods: {
        changeList (val) {
            switch (val) {
                //根据value的不同选择要显示的子组件
                case 'a': 
                    this.MyselfListShow =  true
                    this.CollectionsListShow = false
                    this.FocusListShow = false
                    break 
                case 'b':
                    this.MyselfListShow =  false
                    this.CollectionsListShow = true
                    this.FocusListShow = false
                    break 
                case 'c':
                    this.MyselfListShow =  false
                    this.CollectionsListShow = false
                    this.FocusListShow = true
                    break
            }
        }
    }
}
</script>

<style>
</style>
