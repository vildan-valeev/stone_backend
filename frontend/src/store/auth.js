import instance  from '@/api/instance'


export default{
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  actions: { 
    register({commit}, user){
      return new Promise((resolve, reject) => {
       commit('auth_request')
       instance.post('auth/users/', user)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    login({commit}, user){
      return new Promise((resolve, reject) => {
       commit('auth_request')
       instance.post('auth/token/login/', user)
        .then(resp => {
          const token = resp.data.auth_token
          localStorage.setItem('token', token)
          instance.defaults.headers.common['Authorization'] = 'Token ' + token
          commit('auth_success', token)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          console.log(err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        instance.post('auth/token/logout/')
        commit('logout')
        localStorage.removeItem('token')
        delete instance.defaults.headers.common['Authorization']
        resolve()
      })
    },
    getUser({commit}){
      return new Promise((resolve, reject) => {
        instance.get('auth/users/me/')
          .then(resp => {
            const user = resp.data
            commit('setUser', user)
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    setUser(state, user){
     state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.user = ''
    },
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  }
}
