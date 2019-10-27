<template>
  <div class="text">
    <ExerciseLine
      v-for="(line, lineKey) in selectedExercise"
      class="max_height"
      :class="{hidden_line: hidePassedLines(lineKey)}"
      :key="lineKey"
      :line="line"
      :line-key="lineKey"
      :correct-chars-ids="correctKeysIds"
      :wrong-chars-ids="wrongKeysIds"
      :current-char-position="currCharPosition"
      :current-line="currentLine"
    />

    <Tips v-if="selectedExercise.length !== 0"/>
    
  </div>
</template>

<script>
import ExerciseLine from "./ExerciseLine";
import Tips from "./Tips";

export default {
  name: "Exercise",

  props: {
    allowedKeys: Array,
    typeSound: HTMLAudioElement,
    errorSound: HTMLAudioElement,
    backspaceSound: HTMLAudioElement,
    selectedExercise: Array,
  },
  watch: {
    selectedExercise: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.resetProgress();
          this.currExercise = this.selectedExercise;
        }
      }
    }
  },

  components: {
    ExerciseLine,
    Tips
  },

  data() {
    return {
      startLine: 0,
      currCharPosition: 0,
      currentLine: 0,
      correctKeysIds: {},
      wrongKeysIds: {},
      currExercise: []
    };
  },

  mounted() {
    window.addEventListener("keydown", e => {
      this.callKeyPressedEvent(e.key);
    });
  },

  methods: {
    playSound(key) {
      if (this.isLatestPressedKeyCorrect(key)) {
        this.typeSound.currentTime = 0;
        this.typeSound.play();
        return;
      }
      if (key === "Backspace") {
        this.backspaceSound.currentTime = 0;
        this.backspaceSound.play();
        return;
      }
      this.errorSound.currentTime = 0;
      this.errorSound.play();
    },
    isLatestPressedKeyCorrect(key) {
      return this.currExercise[this.currentLine][this.currCharPosition] === key;
    },
    callKeyPressedEvent(key) {
      if (this.allowedKeys.includes(key)) {
        this.pushToCorrectOrWrongKeysIdsArray(key);
        this.playSound(key);
        this.currCharPosition++;
        this.goToNextLineIfEnded();
      }
      if (key === "Backspace" && !(this.currentLine === 0 && this.currCharPosition === 0)) {
        this.playSound(key);
        this.callBackspacePressedEvent();
      }
    },
    callBackspacePressedEvent() {
      if (this.currCharPosition === 0) {
        this.currentLine--;
        this.currCharPosition = this.currExercise[this.currentLine].length - 1;
        this.deleteChar();
        return;
      } 
      this.currCharPosition--;
      this.deleteChar();      
    },
    deleteChar() {
      if (this.wrongKeysIds[this.currentLine].includes(this.currCharPosition)) {
        this.wrongKeysIds[this.currentLine].splice(-1, 1);
      }
      if (this.correctKeysIds[this.currentLine].includes(this.currCharPosition)) {
        this.correctKeysIds[this.currentLine].splice(-1, 1);
      }
    },
    pushToCorrectOrWrongKeysIdsArray(key) {
      if (!this.isLatestPressedKeyCorrect(key)) {
        this.wrongKeysIds[this.currentLine].push(this.currCharPosition);
        return;
      }
      this.correctKeysIds[this.currentLine].push(this.currCharPosition);
    },
    goToNextLineIfEnded() {
      if (this.currCharPosition === this.currExercise[this.currentLine].length) {
        this.currCharPosition = 0;
        this.currentLine++;
        this.correctKeysIds[this.currentLine] = [];
        this.wrongKeysIds[this.currentLine] = [];
      }
    },
    hidePassedLines(lineId) {
      return this.currentLine - lineId >= 2;
    },
    resetProgress() {
      this.currCharPosition = 0, this.currentLine = 0;      
      this.correctKeysIds = {}, this.wrongKeysIds = {};      
      this.correctKeysIds[this.startLine] = [], this.wrongKeysIds[this.startLine] = [];
    },
  }
};
</script>

<style scoped>
.text {
  font-family: "Roboto Mono", monospace;
  text-align: left;
  width: 500px;
  margin: 30px auto;
  font-size: 28px;
  white-space: pre;
}
.max_height {
  max-height: 500px;
}
.hidden_line {
  max-height: 0;
  transition: max-height 1s ease-out;
  overflow: hidden;
}
</style>
