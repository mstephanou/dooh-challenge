<template>

  
  <router-view/>




</template>

<script>
import HomePage from './components/HomePage.vue'



export default {
  name: "App",
  components: {  HomePage },
  data() {
    return {
      title: "DOOH Challenge",
    };
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}

.full-height{
  min-height: 100vh;
}

</style>

