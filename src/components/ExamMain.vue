<template>
  <div class="text-center">
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
          <span class="badge bg-success rounded-pill">{{ speed }}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Точность - процент правильности:
          <span class="badge bg-success rounded-pill">{{ mistakes }}%</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Объем - общее количество символов в тексте:
          <span class="badge bg-success rounded-pill">{{ result[2] }}</span>
        </li>
      </ul>
    </div>
    <button
      v-on:click="back"
      type="button"
      class="btn btn-lg btn-outline-success mt-4"
    >
      Тренироваться снова</button
    ><br />
    <router-link to="/results" class="mb-5 btn btn-lg btn-link"
      >К результатам</router-link
    >
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ExamMain",
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
      return ((this.result[2] / this.result[0]) * 60).toFixed();
    },
    mistakes: function () {
      return 100 - ((this.result[1] / this.result[2]) * 100).toFixed();
    },
    uid() {
      return this.$store.getters.uid;
    },
  },
  async mounted() {
    try {
      await firebase
        .database()
        .ref(`/users/${this.uid}/results`)
        .push({
          speed: +this.speed,
          mistakes: this.mistakes,
          date: Date.now(),
        });
    } catch {}
  },
};
</script>

<style></style>
