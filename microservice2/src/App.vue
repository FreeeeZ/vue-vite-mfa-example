<template>
  <div id="app">
    <Microservice2 />
  </div>
</template>

<script>
import Microservice2 from './components/Microservice2.vue';

export default {
  name: 'App',
  components: {
    Microservice2,
  },
};
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