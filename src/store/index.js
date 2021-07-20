import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    colors: [
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC'
      
      
    ]

  },
  mutations: {
    SET_USER(state, users){
      state.users = users
    }
  },
  actions: {
    getUsers( {commit}){
      axios.get('https://ti-react-test.herokuapp.com/users').then(response => {
        commit('SET_USER', response.data)
      })
    }
  },
  modules: {
  }
})
