<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">Exercise</div>
      <div class="grid-item">Weight</div>
      <div class="grid-item">Sets</div>
      <div class="grid-item">Reps</div>

      <div class="grid-item">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full block appearance-none leading-normal"
          type="text"
          placeholder="Chest Press"
        />
      </div>
      <div class="grid-item">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
          type="number"
          placeholder="50kg"
        />
      </div>
      <div class="grid-item">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
          type="number"
          placeholder="10"
        />
      </div>
      <div class="grid-item">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
          type="number"
          placeholder="3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  margin: 0 10vw;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
