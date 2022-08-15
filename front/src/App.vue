<template>
  <div id="app"> 
    <header-app />
    <div id="hub">
      <router-view/>
    </div>
  </div>
</template>

<script>

import headerApp from '@/components/header.vue'

export default {
  name: 'appWorld',
  props: {
    msg: String
  },
  components: {
    headerApp
  }

}

</script>

<style lang="scss">
body {
  background-color: #FFD7D7;
  margin: 0;
}

nav{
  background-color: #2c3e50;
  text-align: center;
  padding-bottom: 15px;

  div {
    display: flex;
    justify-content: right;
    text-align: center;
    align-items: center;
    padding-top: 15px;
    margin-right: 20px;

    a, h1{
      font-size: 20px;
      margin: 0px 10px;
      font-weight: bold;
      color: #FFD7D7;
      text-decoration: none;
      cursor: pointer;

      &.router-link-exact-active {
        color: #FD2D01;
      }
    }
  }
}

.logo {
  position: absolute;
  top: -50px;
  left: 50px;
  width: 150px
}

#hub {
  background-color: #2c3e50;
  width: 500px;
  margin: auto;
  padding: 50px 0px;
  border-radius: 10px;
  margin-top: 100px;
  border: 1.5px solid black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

@media (max-width: 500px) {
  #hub {
    width: 340px;
  }
}
</style>
