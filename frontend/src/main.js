import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './plugins/localization'
import  instance  from '@/api/instance'

const token = localStorage.getItem('token')

if (token) {
  instance.defaults.headers.common['Authorization'] = 'Token ' + token
}

createApp(App).use(i18n).use(store).use(router).mount('#app')
