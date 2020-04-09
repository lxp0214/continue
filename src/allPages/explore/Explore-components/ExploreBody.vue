<template>
    <div class='body'>
        <div class='button'>
            <router-link to='/newContinue'>
                <div class="button-left ">
                    <div class="left-desc text">最新续作 ||</div>
                </div>
            </router-link>
            <router-link to='/newCreate'>
                <div class="button-right ">
                    <div class="right-desc text">最新原创 |</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExploreBody',
}
</script>

<style lang='stylus' scoped>
    .border {
        border:1px solid #000000
    }
    .body {
        height :1.2rem
        margin-left:0.4rem
        margin-right:0.4rem
        margin-bottom:0.4rem
        .button-left {
            float left
        }
        .button-right {
            float right
        }
        .button-left,.button-right {
            background-color rgba(255,255,255,0.9)
            width:3.14rem
            height:1.2rem;
            border-radius:0.2rem
            .text {
                padding-top:34px
                padding-left :16px
                color #000000
            }
        }
    }
</style>
