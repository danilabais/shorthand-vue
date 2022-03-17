<template>
  <div>
    <p class="h1 pt-3">Поздравляем</p>
    <div
      class="container-sm p-4 d-flex justify-content-center"
      style="font-size: 1.6em"
    >
      <ul class="list-group" style="flex: 0 1 900px">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Скорость - количество символов в минуту:
          <span class="badge bg-success rounded-pill">{{
            ((result[0] / result[1]) * 60).toFixed()
          }}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Точность - процент правильности:
          <span class="badge bg-success rounded-pill"
            >{{ 100 - ((result[2] / result[0]) * 100).toFixed() }}%</span
          >
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Объем - общее количество символов в тексте:
          <span class="badge bg-success rounded-pill">{{ result[0] }}</span>
        </li>
      </ul>
    </div>
    <button
      v-on:click="back"
      type="button"
      class="mb-5 btn btn-lg btn-outline-success mt-4"
    >
      Тренироваться снова
    </button>
  </div>
</template>

<script>
export default {
  name: "TrainingFinish",
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  methods: {
    back() {
      this.$emit("back");
    },
  },
  computed: {
    speed: function () {
      return isNaN(((this.i / this.time) * 60).toFixed())
        ? "0"
        : ((this.i / this.time) * 60).toFixed();
    },
  },
};
</script>

<style></style>
