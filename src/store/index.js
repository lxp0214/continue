import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '', //操作令牌
        artical: [],
        darkImg: true,
        fontColor: '#000000',
        bgColor: '#ffffff',
        bgApColor: 'rgba(255,255,255,0.8)'
    },
    // actions: {
    //     getToken(ctx, token) {
    //         ctx.commit('getToken', token)
    //     },
    //     getArtical(ctx, content) {
    //         ctx.commit('getArtical', content)
    //     },
    //     getFont(ctx, font) {
    //         ctx.commit('getFont', font)
    //     },
    //     getbg(ctx, bg) {
    //         ctx.commit('getbg', bg)
    //     },
    //     getbgAp(ctx, bgAp) {
    //         ctx.commit('getbgAp', bgAp)
    //     },
    // },
    mutations: {
        getToken(state, token) {
            state.token = token
            localStorage.token_id = token
            console.log(state.token)
        },
        getArtical(state, artical) {
            state.artical = artical
            console.log(artical)
            console.log('ok')
        },
        getFont(state, font) {
            state.fontColor = font
            console.log(state.fontColor)
        },
        getbg(state, bg) {
            state.bgColor = bg
            console.log(state.bgColor)
        },
        getbgAp(state, bgAp) {
            state.bgApColor = bgAp
            console.log(state.bgApColor)
        }
    }
})