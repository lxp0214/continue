<template>
    <div class='navigation'>
        <div class='item'>
            <router-link to='/create'>
                <img :src="'static/icons/tab/create'+ tab1 +'.png'" class="create-on" @click="handleClick(1)">
            </router-link>
        </div>
        <div class='item'>
            <router-link to='/explore'>
                <img :src="'static/icons/tab/explore'+ tab2 +'.png'" class="explore-on" @click="handleClick(2)">
            </router-link>
        </div>
        <div class='item'>
            <router-link to='/myself'>
                <img :src="'static/icons/tab/myself'+ tab3 +'.png'" class="myself-on" @click="handleClick(3)">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data: function() {
        return {
            tab1:'Off',
            tab2:'On',
            tab3:'Off'
        }
    },
    methods: {
        handleClick(num) {
            if(num === 1) {
                this.tab1 = 'On';
                this.tab2 = 'Off';
                this.tab3 = 'Off';
            }
            if(num === 2) {
                this.tab1 = 'Off';
                this.tab2 = 'On';
                this.tab3 = 'Off';
            }
            if(num === 3) {
                this.tab1 = 'Off';
                this.tab2 = 'Off';
                this.tab3 = 'On';
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
  .navigation
    height: 1.2rem
    line-height 1.2rem
    background: lightblue
    position: fixed
    right: 0
    left: 0
    bottom: 0   
    display flex
    .item
      text-align center
      width: 33.33%
      //float: left
      img {
          width 1.0rem
      }
</style>
