<template>
  <div class="login">
    <h1>Se connecter</h1>
    <div id="connection-item">
      <input type="text" placeholder="E-mail" id="email" minlength="5" v-model="email">
      <input type="password" placeholder="Mot de passe" id="password" minlength="4" v-model="password">
      <input type="submit" value="Se connecter" id="submit" @click="login()">
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'LoginWorld',
  props: {
    msg: String
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  mounted() {

  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      }

      const url = 'http://localhost:3002/api/user/signin'

      axios.post(url, payload)
        .then((response) => {

          const token = JSON.stringify(response.data.token)

          localStorage.setItem('token', JSON.parse(token))
          localStorage.setItem('userId', JSON.stringify(response.data.userId))
          localStorage.setItem('email', JSON.stringify(response.data.email))

          this.$store.dispatch('setRole', JSON.parse(response.data.role))
          this.$store.dispatch('setConnected', true)

          this.$router.push({ path: '/' })
      })
      .catch((error) => {
        console.log(error);
        alert('Veuillez renseigner des informations valide !')
      })

    }
  }
}
</script>

<style scoped lang="scss">

h1 {
  font-size: 25px;
  margin-bottom: 30px;
}

#connection-item {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;

  #submit {
    width: 100px;
    margin: auto;
    cursor: pointer;
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
</style>
