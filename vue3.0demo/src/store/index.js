import { createStore } from 'vuex'

export default createStore({
  state: {
    isDetail: false
  },
  getters: {
    isDetail(state, getters) {
      return state,isDetail
    }
  },
  mutations: {
    isDetail(state, isDetail) {
      state.isDetail = isDetail;
    }
  },
  actions: {
    isDetail({ commit }, isDetail) {
      commit("isDetail", isDetail)
    }
  },
  modules: {
  }
})
