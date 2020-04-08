<template>
    <div>
        <div class='header'>
            <router-link to='/createEdit'>
                <img src='static\icons\middle\组件 39 – 1.png'>
            </router-link>
            创作
            <img src='static\icons\middle\组件 44 – 1.png' @click="handlePopTop">
        </div>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom" class="popTop">
           <mt-picker :slots="items" showToolbar @change="onValuesChange">
             <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="close">取消</div>
               <div class="choose">若选择原创则他人不可续写</div>
               <div class="usi-btn-sure" @click="sure">确定</div>
             </div>
           </mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
    name: 'CreateHeader',
    data() {
        return {
            showToolbar: true,
            popupVisible:false,
            items:[
                {
                    values:['原创','续写'],
                    textAlign: 'center',
                    defaultIndex:0
                }
            ],
            message:'',
        }
    },
    methods: {
        handlePopTop() {
            this.popupVisible = true
        },
        close() {
            this.popupVisible = false
        },
        sure() {
            var _this = this;
            Indicator.open({
                text: '发布中...',
                spinnerType: 'fading-circle'
            });
            this.popupVisible = false
            this.timer = setTimeout(function(){
                //console.log(this); // 这里的this指向window对象
                _this.$router.push('/create');
                Indicator.close();
            }, 500)         
            console.log('ok')
        },
        onValuesChange(picker,values) {
            this.message = values[0]
            console.log(values[0])
        }
    }
}
</script>

<style lang='stylus' scoped>
    .header
        margin-top: .4rem
        margin-bottom: .4rem
        padding-left: .4rem
        padding-right: .4rem
        height: 0.88rem
        line-height: 0.88rem
        font-size: .5rem
        //border-bottom: solid .01rem
        //border-top: solid .01rem
        display: flex 
        justify-content: space-between
        align-items: center
        background-color #ffffff
        img 
            height: .6rem
    .popTop 
        width 100%
        .picker-toolbar-title 
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            .choose
                padding-top 10px
            .usi-btn-cancel,
            .usi-btn-sure
                padding-top 10px 
                color: #000000
</style>
