<template>
  <div class="profile">
    <!-- IMAGE DE l'utilisateur -->
    <img src="../assets/default_user.png" alt="photo de profile" class="user_picture">
    <div class="user_info">
      <input type="textbox" value="firstname" id="firstname" readonly="readonly" v-model="firstname"/>
      <input type="textbox" value="lastname" id="lastname" readonly="readonly" v-model="lastname"/>
      <input type="textbox" value="email" id="email" readonly="readonly" v-model="email"/>
    </div>
    <div class="user_logout-delete">
      <button @click="DeleteAccount()">Supprimer le compte</button>
      <button @click="disconnect()">Déconnexion</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'profileView',
  props: {
    msg: String
  },
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null
    }
  },
  async mounted() {
    await this.displayUserInfo()

    console.log('Router' ,this.$router);
  },
  methods: {
    disconnect() {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    DeleteAccount() {
      const ID = localStorage.getItem('userId')
      const url = 'http://localhost:3002/api/user/' + ID

      axios.delete(url)
        .then((response) => {
          console.log(response);
          localStorage.clear()
          this.$router.push({ path: '/login' })
          this.$store.dispatch('setConnected', false)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    displayUserInfo() {
      const ID = localStorage.getItem('userId')
      const url = 'http://localhost:3002/api/user/' + ID


      axios.get(url)
        .then((response) => {

          console.log(response);
          this.firstname = response.data.firstname
          this.lastname = response.data.lastname
          this.email = response.data.email
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}

</script>

<style scoped lang="scss">

.profile {

  .user_logout-delete {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      border-radius: 10px;
      padding: 5px;
      background-color: red;
      color: white;
      cursor: pointer;
    }
  }

  .user_picture {
    width: 140px;
    border-radius: 100%;
    border: 1.5px solid black;
  }

  .user_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    input {
      width: 200px;
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 5px;
      border-style: none;
    }
  }
}

</style>