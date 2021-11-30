<template>
  <main class="emailCheck appWrapper">
    <p class="appText text-center">
      На вашу почту {{$route.params.email}} была отправлена ссылка для подтверждения почты. Перейдите чтобы войти в аккаунт.
    </p>
  </main>
</template>

<script>
export default {
  name: "EmailCheck",
}
</script>

<style>

</style>