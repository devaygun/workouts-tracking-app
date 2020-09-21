<template>
  <div>
    <h1>Workout Tracking</h1>
    <h2>Capture and track your workouts!</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 100px 0 0 0;
  font-family: "Indie Flower", cursive;
  font-size: calc(45px + (45 - 14) * ((100vw - 300px) / (1600 - 300)));
  color: whitesmoke;
}
h2 {
  font-family: "Indie Flower", cursive;
  font-size: 32px;
  color: whitesmoke;
}
a {
  color: #42b983;
}
</style>
