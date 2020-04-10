import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '', //操作令牌
        artical: [],
        darkImg: true
    },
    actions: {
        getToken(ctx, token) {
            ctx.commit('getToken', token)
        },
        getArtical(ctx, content) {
            ctx.commit('getArtical', content)
        }
    },
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
        }
    }
})