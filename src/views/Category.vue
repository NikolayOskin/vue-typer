<template>
  <div class="container">
    <ul>
      <li v-for="exercise in categoryExercises" :key="exercise.id">
        <router-link
          :to="{ name: 'exercise', params: {id: exercise.id } }"
          class="link"
        >{{exercise.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { exercises } from "@/core/exercises";
export default {
  data() {
    return {
      exercises
    };
  },
  computed: {
    categoryExercises() {
      return exercises.filter(exercise => {
        return exercise.category === this.$route.params.categoryName;
      });
    }
  }
};
</script>