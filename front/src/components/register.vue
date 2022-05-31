<template>
  <div class="register">
    <div id="register-item">
      <input type="text" placeholder="Prenom" id="firstname" minlength="3">
      <input type="text" placeholder="Nom" id="lastname" minlength="2">
      <input type="text" placeholder="E-mail" id="email" minlength="5">
      <input type="text" placeholder="Mot de passe" id="password" minlength="4">
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
    console.log(this.$router);
  },
  methods: {
    register() {
      // recupéré les params
      console.log(this.firstname, this.lastname, this.email, this.password);

      //envoyer au back
      const payload = {
        firstname : this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }

      const url = 'http://localhost:3000/api/user/signup'

      axios.post(url, payload)
        .then((response) => {
          console.log(response);
          // recupéré le token du back et l'enregistrer dans le localStorage
          // faire la redirection vers la page d'accueil
            router.push({ path: '/home' })
        })
    }
  }
}
</script>

<style scoped lang="scss">

#register-item {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;

    #submit {
    width: 100px;
    margin: auto;
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