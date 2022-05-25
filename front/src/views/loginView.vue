<template>
  <div class="signin">
    <img alt="Vue logo" src="../assets/logo.png" />
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
import login from "@/components/login.vue";

export default {
  name: "loginView",
  components: {
    login,
  },
};
</script>
