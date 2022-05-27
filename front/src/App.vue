<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="hub">
      <nav>
        <router-link to="/">Se connecter</router-link> |
        <router-link to="/register">S'enregistrer</router-link>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: #FFD7D7;
}

#hub {
  background-color: #2c3e50;
  width: 500px;
  margin: auto;
  padding: 50px 0px;
  border-radius: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-bottom: 30px;

  a {
    font-weight: bold;
    color: #FFD7D7;
    text-decoration: none;

    &.router-link-exact-active {
      color: #FD2D01;
    }
  }
}
</style>
