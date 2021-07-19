import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [ ],
    colors: [
      '#CB4B44',
      '#918F90',
      '#FCB4AC',
      '#C4C4C4',
      '#FF5750'
    ]

  },
  mutations: {
    SET_USERS(state, users){
      state.users = users
    }
  },
  actions: {
    usersList( {commit}){
      axios.get('https://ti-react-test.herokuapp.com/users').then(response => {
        commit('SET_USERS', response.data)
      })
    }
  },
  modules: {
  }
})
