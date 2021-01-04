import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedInUserId: 0
  },
  getters: {
    getLoggedInUser: state => state.loggedInUserId
  },
  mutations: {
    setLoggedInUser(state, id) {
      state.loggedInUserId = id
    }
  },
  actions: {
  },
  modules: {
  }
})
