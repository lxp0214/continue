<template>
    <div class='header'>
        <router-link to='/createEdit'>
            <img src='static\icons\middle\组件 39 – 1.png'>
        </router-link>
        创作
        <img src='static\icons\middle\组件 44 – 1.png' @click="handlePopTop">
        <mt-popup v-model="popupVisible" position="top">
            <!-- <div class="tip">
                <div class="top">
                    <div class="desc1">请选择</div>
                    <div class="desc2">发布为原创或发布为续作</div>
                    <div class="desc3">原创仅可由你编辑，续作可供其他用户编写</div>
                </div>
                <div class="bottom">
                    <div class="create">原创</div>
                    <div class="continue">续作</div>
                </div>
            </div> -->
            啦啦啦啦啦
        </mt-popup>
    </div>
</template>

<script>

export default {
    name: 'CreateHeader',
    data: function() {
        return {
            popupVisible:false
        }
    },
    methods: {
        handlePopTop() {
            this.popupVisible = true
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
    border-bottom: solid .01rem
    border-top: solid .01rem
    display: flex 
    justify-content: space-between
    align-items: center
    img 
      height: .6rem
</style>
