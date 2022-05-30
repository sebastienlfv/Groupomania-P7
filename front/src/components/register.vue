<template>
  <div class="register">
    <div id="register-item">
      <input type="text" placeholder="Prenom" id="firstname" minlength="3">
      <input type="text" placeholder="Nom" id="lastname" minlength="2">
      <input type="text" placeholder="E-mail" id="email" minlength="5">
      <input type="text" placeholder="password" id="password" minlength="4">
      <input type="submit" value="S'inscrire" id="submit">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWorld',
  props: {
    msg: String
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