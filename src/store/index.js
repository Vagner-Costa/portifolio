import { createStore } from 'vuex'

export default createStore({
  state: {
    identacao : null
  },
  getters: {
    gettersIdentacao(state){
      return state.identacao
    }
  },
  mutations: {
    mutationsIdentacao(state,payload){
      state.identacao = payload
    }
  },
  actions: {
    actionsDimensoes({commit}){
      if(window.innerWidth > 0 &&  window.innerWidth < 600){
        commit('mutationsIdentacao',10)
      }else if(window.innerWidth >= 600 &&  window.innerWidth < 800){
        commit('mutationsIdentacao',25)   
      }else if(window.innerWidth >= 800  ){
        commit('mutationsIdentacao',35)    
      }
    }
  },
  modules: {
  }
})
