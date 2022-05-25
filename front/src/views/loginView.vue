<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/login.vue'

export default {
  name: 'signInView',
  components: {
    login
  }
}
</script>
