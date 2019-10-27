<template>
  <div id="app">

    <Menu @change-exercise="changeExerciseType"/>

    <Exercise
      :allowed-keys="allowedKeys"
      :type-sound="typeSound"
      :error-sound="errorSound"
      :backspace-sound="backspaceSound"
      :selected-exercise="selectedExercise"
    />
  </div>
</template>

<script>
import "@/assets/styles.scss";

import { allowedKeys } from "./core/allowed-keys";
import { exercises } from "./core/exercises";
import { sounds } from "./core/sounds";

import Exercise from "./components/Exercise";
import Menu from "./components/Menu";


export default {
  data() {
    return {
      allowedKeys,
      exercises,
      selectedExercise: [],
      ...sounds
    };
  },
  name: "app",
  components: {
    Exercise,
    Menu
  },
  methods: {
    changeExerciseType(type) {
      this.selectedExercise = this.exercises[type];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
