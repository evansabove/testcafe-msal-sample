<template>
  <div id="app">
    <p>Hello {{username}}, you are logged in!</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ["username"],
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
