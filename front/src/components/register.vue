<template>
  <div class="register">
    <h1>S'inscrire</h1>
    <div id="register-item">
      <input type="text" placeholder="Prenom" id="firstname" minlength="3" v-model="firstname">
      <input type="text" placeholder="Nom" id="lastname" minlength="2" v-model="lastname">
      <input type="text" placeholder="E-mail" id="email" minlength="5" v-model="email">
      <input type="password" placeholder="Mot de passe" id="password" minlength="4" v-model="password">
      <input type="submit" value="S'inscrire" id="submit" @click="register()">
    </div>
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'

export default {
  name: 'LoginWorld',
  props: {
    msg: String
  },
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null
    }
  },
  mounted() {

  },
  methods: {
    register() {
      const payload = {
        firstname : this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }

      const url = 'http://localhost:3002/api/user/signup'

      axios.post(url, payload)
        .then(() => {
          router.push({ path: '/login' })
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

#register-item {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;

    #submit {
    width: 100px;
    margin: auto;
    cursor: pointer;
    }

    #firstname, #lastname, #email {
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