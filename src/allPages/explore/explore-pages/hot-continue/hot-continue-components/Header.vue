<template>
    <div class="header">
        <div class="header-icon">
            <span class="iconfont arrow">&#xe65e;</span>
        </div>
        <div class="header-content">
            <div class="content-desc">
                <span class="desc-f">||</span>
                <span class="desc-l">热门续作</span>
            </div>
            <div class="content-icon">
                <span class="iconfont search">&#xe60a;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HotContinueHeader',
}
</script>
<style lang="stylus" scoped>
    .header {
        position:relative
        .header-icon {
            position :absolute
            left:0.4rem
            top:0.22rem
            .arrow {
                color :#000000
                font-size:0.54rem
                font-weight:600
            }
        }
        .header-content {
            position:relative
            left :0.5rem
            top:1.22rem
            .content-desc {
                text-align:center
                display:flex
                .desc-f,.desc-l {
                    font-size:0.64rem
                    color: #000000
                    font-weight:500
                    text-align:center
                }
                .desc-l {
                    margin-left:0.2rem
                }
            }
            .content-icon {
                position:absolute
                top:0.07rem
                right:1.1rem
                .search {
                    font-size:0.56rem
                    color:#000000
                    font-weight:500
                }
            }
        }
    }
</style>
