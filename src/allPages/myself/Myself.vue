<template>
    <div>
        <div>
            <myself-header></myself-header>
            <myself-body @changeList="changeList" @changeSearch="searchContent"></myself-body>
            <create-list v-show='MyselfListShow'></create-list>
            <!-- <all-navigation></all-navigation> -->
            <collections-list v-show='CollectionsListShow' ></collections-list>
            <focus-list v-show='FocusListShow'></focus-list>
            <content-list :datas="contents" v-show="disContent"></content-list>
            <person-list :datas="contents" v-show="disPerson"></person-list> 
            <div class="tip" v-show="display">没有找到结果哦~换个词搜索看吧！</div>
        </div>
    </div>
</template>

<script>
//新加的：line-10 line-50 line-51 line-9 line-10(v-show)
import axios from 'axios'
import ContentList from '../../allPages/commonList/contentList'
import PersonList from '../../allPages/commonList/personsList'
import MyselfHeader from './Myself-components/MyselfHeader'
import MyselfBody from './Myself-components/MyselfBody'
import CreateList from './myself-pages/myself-create/List'
import AllNavigation from '../Navigation'
import CollectionsList from './myself-pages/myself-collections/List'
import FocusList from './myself-pages/myself-focus/List'
import BScroll from 'better-scroll'
export default {
    name: 'Myself',
    components: {
        MyselfHeader,
        MyselfBody,
        CreateList,
        AllNavigation,
        CollectionsList,
        FocusList,
        ContentList,
        PersonList
    },
    mounted() {
    //   this.scroll = new BScroll(this.$refs.wrapper)
    },
    data () {
        return {
            MyselfListShow: true,
            CollectionsListShow: false,
            FocusListShow: false,
            index:'a',
            createContent:false,
            CollectionsContent:false,
            FocusContent:false,
            contents:[],
            timer:null,
            display:false,
            disContent:true,
            disPerson:false,
        }
    },
    methods: {
        searchContent(searchIndex) {
            console.log('ok')
            if(searchIndex) {
                if(this.index === 'a') {
                    this.MyselfListShow = false,
                    this.createContent = true,
                    this.disContent = true,
                    this.disPerson = false
                    axios.get('static/mock/collection.json').then(res => {
                        res = res.data;
                        if(res.ret && res.data) {
                            const data = res.data;
                            console.log(data);
                            //改了 记得同步到下面的两个if
                            var List = data.collections;
                            if(this.timer) {
                                clearTimeout(this.timer);
                            }
                            this.timer = setTimeout(() => {
                                const result = [];
                                List.forEach(value => {
                                    if(value.name.indexOf(searchIndex) > -1) {
                                        result.push(value);
                                    }
                                })
                                this.contents = result;
                                if(!this.contents.length) {
                                    this.display = true
                                }
                            },100)
                        }
                    })
                }
                if(this.index === 'b') {
                    this.CollectionsListShow = false
                    this.CollectionsContent = true
                    this.disContent = true,
                    this.disPerson = false
                    axios.get('static/mock/collection.json').then(res => {
                        res = res.data;
                        if(res.ret && res.data) {
                            const data = res.data;
                            console.log(data);
                            var List = data.collections;
                            if(this.timer) {
                                clearTimeout(this.timer);
                            }
                            this.timer = setTimeout(() => {
                                const result = [];
                                List.forEach(value => {
                                    if(value.name.indexOf(searchIndex) > -1) {
                                        result.push(value);
                                    }
                                })
                                this.contents = result;
                                if(!this.contents.length) {
                                    this.display = true
                                }
                            },100)
                        }
                    })
                }
                if(this.index === 'c') {
                    this.FocusListShow = false
                    this.FocusContent = true
                    this.disContent = false,
                    this.disPerson = true
                    axios.get('static/mock/focus.json').then(res => {
                        res = res.data;
                        if(res.ret && res.data) {
                            const data = res.data;
                            console.log(data);
                            var List = data.persons;
                            if(this.timer) {
                                clearTimeout(this.timer);
                            }
                            this.timer = setTimeout(() => {
                                const result = [];
                                List.forEach(value => {
                                    if(value.name.indexOf(searchIndex) > -1) {
                                        result.push(value);
                                    }
                                })
                                this.contents = result;
                                if(!this.contents.length) {
                                    this.display = true
                                }
                            },100)
                        }
                    })
                }
            }
            if(!searchIndex) {
                if(this.index === 'a') {
                    this.MyselfListShow = true,
                    this.createContent = false
                }
                if(this.index === 'b') {
                    this.CollectionsListShow = true
                    this.CollectionsContent = false
                }
                if(this.index === 'c') {
                    this.FocusListShow = true
                    this.FocusContent = false
                }
            }
        },
        changeList (val) {
            this.index = val
            console.log("此时选择的是：" + this.index)
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
<style lang='stylus' scoped>
    .tip
        padding-left 0.4rem
</style>
