import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 初始化状态
        count: 23,
        someLists: []
    },
    mutations: {
        // 处理状态
        increment(state,a) {
            state.count +=  a;
        }
    },
    actions: {
        // 提交改变后的状态
        increment(context, param) {
            context.state.count += param.step;
            context.commit('increment', context.state.count)//提交改变后的state.count值
        },
        incrementStep({state, commit, rootState}) {
            if (rootState.count < 100) {
                store.dispatch('increment', {//调用increment()方法
                    step: 10
                })
            }
        }
    },
    getters: {
        //处理列表项
        someLists: state =>param=> {
            return state.someLists.filter(() => param.done)
        }
    }
})

export default store
