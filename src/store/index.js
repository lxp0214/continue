import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '' //操作令牌
    },
    actions: {
        getToken(ctx, token) {
            ctx.commit('getToken', token)
        }
    },
    mutations: {
        getToken(state, token) {
            state.token = token
            localStorage.token_id = token
            console.log(state.token)
        }
    }
})