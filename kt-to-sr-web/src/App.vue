<template>
  <div id="app">
    <OneByOne/>
  </div>
</template>

<script>
  import OneByOne from './components/OneByOne.vue';

  export default {
    name: 'app',
    components: {
      OneByOne
    }
  };
</script>

<style>
  h1 {
    color: #FE414D;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    margin: 0;
  }
  body {
    font-family: 'Gudea', sans-serif;
    margin: 0;
  }
</style>
