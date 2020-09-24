<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">
        <div class="pb-3 text-white font-bold">Exercise</div>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full block appearance-none leading-normal"
          type="text"
          placeholder="Chest Press"
        />
      </div>
      <div class="grid-item">
        <div class="pb-3 text-white font-bold">Weight</div>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
          type="number"
          placeholder="50kg"
        />
      </div>
      <div class="grid-item">
        <div class="pb-3 text-white font-bold">Sets</div>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
          type="number"
          placeholder="10"
        />
      </div>
      <div class="grid-item">
        <div class="pb-3 text-white font-bold">Reps</div>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
          type="number"
          placeholder="3"
        />
      </div>
      <div class="grid-item flex">
        <div class="m-auto">
          <button
            class="bg-indigo-800 border-yellow-300 px-8 py-1 text-white rounded-full hover:bg-indigo-900"
          >Add</button>
        </div>
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
  grid-template-columns: auto auto auto auto 10%;
  margin: 0 10vw;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
@media (max-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    margin: 0 5vw;
  }
  .grid-item {
    padding: 15px;
  }
}
</style>
