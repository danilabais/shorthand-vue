<template>
  <div class="center">
    <h2 class="display-5 pt-4">Экзамен</h2>
    <ul class="lead">
      <li>Нельзя выбрать количество предложений</li>
      <hr style="width: 20%" class="m-auto" />
      <li>Убраны лишнии визуальные элементы</li>
      <hr style="width: 20%" class="m-auto" />
      <li>Рекорды сохраняются</li>
      <hr style="width: 20%" class="m-auto" />
      <li>Максимальная концентрация</li>
      <hr style="width: 20%" class="m-auto" />
      <li>Отсчёт времени начинается с таймера</li>
    </ul>
    <button
      v-on:click="startCounter"
      type="button"
      class="btn btn-lg btn-outline-success mt-5 mb-5"
    >
      Начать экзамен
    </button>
  </div>
</template>

<script>
export default {
  name: "TrainingLobby",

  methods: {
    startCounter() {
      this.$emit("startCounter");
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
* {
  text-align: center;
}
</style>
