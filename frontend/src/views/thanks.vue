<template>
  <div class="thanks">
    <p class="thanks__text">
      {{thanks}}
    </p>
    <router-link :to="{name: 'Home', params: {login: true}}" class="appBtn appBtn--meduim mx-auto thanks__login">Войти</router-link>
  </div>
</template>

<script>
export default {
  name: 'Thanks',
  data: () => ({
    thanks: ''
  }),
  mounted(){
    this.thanks = this.$route.params.info
  }
}
</script>

<style>

</style>