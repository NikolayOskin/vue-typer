<template>
  <div class="main-content">
    <div class="tabs is-medium">
      <ul>
        <li
          v-for="(type, key) in exerciseTypes"
          :key="key"
          :class="{'is-active': checkCurrentType(type)}"
          @click="changeCurrentType(type)"
        >
          <a>{{type}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentExerciseType: "",
      exerciseTypes: ["Text", "Numbers", "Symbols", "Code", "All"]
    };
  },
  methods: {
    checkCurrentType(type) {
      return this.currentExerciseType === type;
    },
    changeCurrentType(type) {
      this.$emit("change-exercise", type);
      this.currentExerciseType = type;
    }
  }
};
</script>

<style scoped>
.main-content {
  max-width: 500px;
  margin: 30px auto;
}
</style>

