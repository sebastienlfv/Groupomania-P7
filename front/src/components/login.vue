<template>
  <div class="login">
    <div id="connection-item">
      <input type="text" placeholder="E-mail" id="email" minlength="5" v-model="email">
      <input type="text" placeholder="password" id="password" minlength="4" v-model="password">
      <input type="submit" value="Se connecter" id="submit" @click="login()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWorld',
  props: {
    msg: String
  },
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      // recupéré les params
      console.log(this.email, this.password);

      // envoyer au back
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#connection-item {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;

  #submit {
    width: 100px;
    margin: auto;
  }

  #email{
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border-style: none;
  }

  #password {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    border-style: none;
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
