<template>
  <div>
    <span
      :class="{ 
        current_char: index === currentCharPosition && lineKey === currentLine, 
        correct_char: isCharCorrect(index, lineKey),
        wrong_char: isCharWrong(index, lineKey)
        }"
      v-for="(char, index) in line"
      :key="index"
    >{{char}}</span>
  </div>
</template>

<script>
export default {
  name: "ExerciseLine",
  props: {
    lineKey: Number,
    line: String,
    currentCharPosition: Number,
    currentLine: Number,
    correctCharsIds: Object,
    wrongCharsIds: Object
  },
  methods: {
    isCharCorrect(index, lineId) {
      if (this.correctCharsIds[lineId]) {
        return this.correctCharsIds[lineId].includes(index);
      }
    },
    isCharWrong(index, lineId) {
      if (this.wrongCharsIds[lineId]) {
        return this.wrongCharsIds[lineId].includes(index);
      }
    }
  }
};
</script>

<style scoped>
.current_char {
  background: #dae0dd;
  padding: 0;
}
.correct_char {
  background: #b7ffde;
}
.wrong_char {
  background: #ffd7d7;
}
</style>