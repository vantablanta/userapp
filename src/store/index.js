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
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
      '#CB4B44',
      '#918F90',
      '#C4C4C4',
      '#FF5750',
      '#FCB4AC',
    ]
  },
  mutations: {
    SET_USER(state, users){
      state.users = users
    },
    RENAME_USERS(state, users) {
      let newName = users.name
      let newBio = users.bio
      let newOccupation = users.occupation
      let newEmail = users.email
      let index = users.index
      state.users[index].name = newName
      state.users[index].bio = newBio
      state.users[index].name = newOccupation
      state.users[index].name = newEmail
    }
  },
  actions: {
    getUsers( {commit}){
      axios.get('https://ti-react-test.herokuapp.com/users').then(response => {
        commit('SET_USER', response.data)
      })
    },
    renameUsers({ commit }, users) {
      return axios
        .patch('https://ti-react-test.herokuapp.com/users.id',{
          name: users.newName,
          email: users.newEmail,
          bio: users.newBio,
          occupation: users.newOccupation
        }).then(res => {
          console.log(res)
          commit('RENAME_USERS', users)
        }).catch(error => console.log(error))
    }
  },
  getters: {
    allUsers: (state) => {
      return state.users
    }
  }
})
