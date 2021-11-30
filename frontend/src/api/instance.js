import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_INSTANCE,
  headers: {
    accept: 'application/json',
  }
})
console.log(process.env.VUE_APP_INSTANCE)
export default instance 