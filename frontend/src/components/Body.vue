<template>
    <div>
        <div class="grid-container">
            <div class="grid-item">
                <div class="pb-3 text-white font-bold">Exercise</div>
                <input
                    v-model="exercise"
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full block appearance-none leading-normal"
                    type="text"
                    placeholder="Chest Press"
                />
            </div>
            <div class="grid-item">
                <div class="pb-3 text-white font-bold">Weight</div>
                <input
                    v-model="weight"
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
                    type="number"
                    placeholder="50kg"
                />
            </div>
            <div class="grid-item">
                <div class="pb-3 text-white font-bold">Sets</div>
                <input
                    v-model="sets"
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
                    type="number"
                    placeholder="10"
                />
            </div>
            <div class="grid-item">
                <div class="pb-3 text-white font-bold">Reps</div>
                <input
                    v-model="reps"
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full align-center appearance-none leading-normal"
                    type="number"
                    placeholder="3"
                />
            </div>
            <div class="grid-item flex">
                <div class="m-auto">
                    <button
                        @click="addWorkout()"
                        class="bg-indigo-800 border-yellow-300 px-8 py-1 text-white rounded-full hover:bg-indigo-900"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Body",
    data: () => ({
        exercise: "",
        weight: "",
        sets: "",
        reps: "",
    }),
    methods: {
        addWorkout: function () {
            console.log("POST workout");

            axios
                .post("http://localhost:3000/workout", [
                    {
                        exercise: this.exercise,
                        weight: this.weight,
                        weight_measurement: "kg",
                        sets: this.sets,
                        reps: this.reps,
                        rest: this.reps,
                    },
                ])
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
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
