<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
html {
  min-height: 100%;
  background-image: url(assets/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
@media screen and (max-width: 600px) {
  #app {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  html {
    background-position: top left;
  }
}
</style>
