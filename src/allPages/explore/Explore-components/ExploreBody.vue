<template>
    <div class='body'>
        <div class='button'>
            <div class="button-left border">
                <div class="left-desc text">最新续作 ||</div>
            </div>
            <div class="button-right border">
                <div class="right-desc text">最新原创 |</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExploreBody'
}
</script>

<style lang='stylus' scoped>
    .border {
        border:1px solid #000000
    }
    .body {
        height :1.2rem
        padding-left:0.4rem;
        .button-left,.button-right {
            width:3.14rem
            height:1.2rem;
            border-radius:0.2rem
        }
        .button-left {
            margin-bottom:0.2rem
        }
        .button-left {
            float:left
        }
    }
</style>
