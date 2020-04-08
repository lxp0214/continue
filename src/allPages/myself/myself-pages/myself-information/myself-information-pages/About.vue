<template>
    <div>
        <div class='header'>
            <router-link to='/myselfInformation'>
                <img src='static\icons\middle\组件 39 – 1.png'>
            </router-link>
            <span>关于</span>
        </div>
        <div class='desc'>更新</div>
        <div class='wrapper'>
            <div>您已是最新版本</div>
            <div>1.0.0</div>
        </div>
        <div class='desc'>关于我们</div>
        <div class='about-wrapper'>
          <textarea class='about' disabled="disabled">
                                关于产品

 嗨，历时两周，Continue终于成功和大家见面啦！
Continue是一款专注于故事续写和原创故事的APP。在这里，次元壁被打破，文字构造全新的宇宙，每一个有趣的脑洞都被小心翼翼地收藏，每一份生动的喜欢都会毫无保留地表达，每一次真诚的续写都是不同灵魂的碰撞。在这里，最美妙的问候无非是一句：我可以参与你的故事吗？

                                关于团队

我们是一支很普通的大学生团队，在Continue的想法出现之前，我们甚至是一群没有交集的个体，有完全不同的生活轨迹。然而，我们拥有同样的对未知的探求、对脑洞的忠诚以及对创作的热情，于是，六个独特的灵魂在同一个故事邂逅，用同一份热爱让Continue诞生。

Continue的中文翻译是“延续”，之所以选择动词形式，是因为我们想要表达的是关于动态的创作，是有生机的文字，是源源不断的灵感。
在这个宇宙，不只有我，还有我们。

团队成员
产品：徐操兵
运营：黄卉 李雅施
设计：连海鸿
前端：李欣苹 王子安
后端：古新语

          </textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang='stylus' scoped>
  .header 
    margin-top: .4rem
    height: .88rem 
    padding-left: .3rem
    background: #ffffff
    display: flex 
    align-items: center
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3)
    img 
      height: .46rem
    span 
      line-height: .88rem 
      font-size: .36rem
      margin-left: 2.67rem
  .desc 
    height: .84rem 
    line-height: .84rem
    padding-left: .4rem
    color: #ffffff
    font-size: .32rem
  .wrapper 
    height: 1rem 
    background: #ffffff
    margin: 0 .4rem
    padding: 0 .4rem
    display: flex 
    align-items: center 
    justify-content: space-between
    border-radius: .22rem
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16)
    div 
      font-size: .3rem 
      color: #000000
  .about-wrapper 
    height: 8.9rem
    margin: 0 .4rem
    border-radius: .22rem
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16)
    background: #ffffff
    .about 
      height: 100%
      width: 100%
      border-radius: .22rem
      box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16)
      background: #ffffff
      touch-action: none
</style>