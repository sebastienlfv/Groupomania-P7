<template>
  <div id="app">
    <nav>
      <router-link to="/">Se connecter</router-link> |
      <router-link to="/signup">S'inscrire</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  font-size: 25px;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(10, 209, 150);
}
</style>
