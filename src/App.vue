<template>
  <div id="app">
    <span><router-link to="/palindrom"> Palindrom </router-link></span>
    <span><router-link to="/fibonacci"> Fibonacci </router-link></span>
    <br>

    <img alt="Vue logo" src="./assets/logo.png"><br>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
