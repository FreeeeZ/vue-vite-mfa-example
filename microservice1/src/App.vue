<template>
  <div id="app">
    <Microservice1 />
  </div>
</template>

<script>
import Microservice1 from './components/Microservice1.vue';

export default {
  name: 'App',
  components: {
    Microservice1,
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