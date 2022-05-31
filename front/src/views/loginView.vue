<template>
  <div class="login">
    <LoginWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginWorld from '@/components/login.vue'

export default {
  name: 'loginView',
  components: {
    LoginWorld
  }
}
</script>

<style>
img {
  width: 200px;
}

</style>
