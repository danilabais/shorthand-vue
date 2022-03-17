<template>
  <div>
    <h2 class="display-6 pt-4">Выберите количество предложений</h2>
    <p class="lead">
      Выборано <span class="fw-bold">{{ rangeValue }}</span> предложени{{
        caseWord
      }}
      в тексте
    </p>
    <input
      v-model="rangeValue"
      type="range"
      class="form-range mb-3"
      min="1"
      max="8"
      step="1"
      style="width: 30%; transform: scale(1.7)"
    />
    <br />
    <button
      v-on:click="start"
      type="button"
      class="btn btn-lg btn-outline-success mt-4 mb-5"
    >
      Начать тренировку
    </button>
  </div>
</template>

<script>
export default {
  name: "TrainingLobby",
  data() {
    return {
      rangeValue: 1,
      caseWord: "е",
    };
  },
  watch: {
    rangeValue: function (val) {
      if (val > 4) {
        this.caseWord = "й";
      } else if (val > 1) {
        this.caseWord = "я";
      } else this.caseWord = "е";
    },
  },
  methods: {
    start() {
      this.$emit("start", this.rangeValue);
    },
  },
};
</script>

<style></style>
