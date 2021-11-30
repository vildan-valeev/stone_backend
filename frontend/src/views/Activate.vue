<template>
  <main class="activate">
    <!-- {{$route.params.code}}
    {{$route.params.token}}
    <button class="appBtn appBtn--meduim">Войти</button>  -->
  </main>
</template>

<script>
import {ActivateUser} from '@/api/shop'

export default {
  name: 'Activate',
  async mounted(){
    try {
      let result = await ActivateUser({
        uid: this.$route.params.code,
        token: this.$route.params.token,
      })
      this.$router.push({name: 'Home', params: {login: true, message: 'Почта успешно подтверждена, введите логин и пароль для входа', check: 'success'}})
    }catch (e) {
      this.$router.push({name: 'Home', params: {registration: true, message: 'Нам не удалось обнаружить вашу почту', check: 'error',}})
    }
    
  }
}
</script>

<style>

</style>