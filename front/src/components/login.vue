<template>
  <div class="login">
    <div id="connection-item">
      <input type="text" placeholder="E-mail" id="email" minlength="5">
      <input type="text" placeholder="password" id="password" minlength="4">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#connection-item {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;

  #email {
    margin-bottom: 10px;
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
