<template>
  <div class="bg-light pt-3 px-3 pt-md-5 px-md-5 mb-4 text-center">
    <h2 class="display-5">Результаты твоих тестов</h2>
    <p class="lead">Оттачивай навыки каждый день - бей рекорды</p>

    <div
      class="bg-body shadow-lg mx-auto"
      style="
        width: 80%;
        min-height: 200px;
        border-radius: 21px 21px 21px 21px;
        padding-bottom: 1px;
      "
    >
      <Table v-on:sort="sorting" v-if="arr.length" v-bind:results="arr" />
      <button
        v-if="arr.length == 6"
        class="btn btn-link mb-3"
        v-on:click="sorting(sortby, 100)"
      >
        Загрузить все результаты
        <img src="@/assets/icons/arrow-down.svg" alt="arrow-down" />
      </button>
      <div v-if="arr.length == 0">
        <h2 class="display-6 pt-4">Пока нет результатов</h2>
        <router-link to="/exam" class="btn btn-lg btn-link"
          >Пройти экзамен
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Table from "@/components/Table.vue";

export default {
  data() {
    return {
      arr: [],
      isEmpty: true,
      sortby: "speed",
      count: 3,
    };
  },
  components: {
    Table,
  },
  computed: {
    uid() {
      return this.$store.getters.uid;
    },
  },
  methods: {
    async fetchMyResults(n = 6, sort = "speed") {
      const Results =
        (
          await firebase
            .database()
            .ref(`/users/${this.uid}/results`)
            .orderByChild(sort)
            .limitToLast(n)
            .once("value")
        ).val() || {};
      return Object.keys(Results).map((key) => ({ ...Results[key] }));
    },
    async sorting(sortby, count) {
      const arr = await this.fetchMyResults(count, sortby);
      this.sortby = sortby;
      if (sortby == "speed") {
        arr.sort((a, b) => a.speed - b.speed);
      } else if (sortby == "mistakes") {
        arr.sort((a, b) => a.mistakes - b.mistakes);
      } else if (sortby == "date") {
        arr.sort((a, b) => a.date - b.date);
      }

      this.arr = arr.reverse();
    },
  },
  async mounted() {
    this.sorting("speed");
  },
};
</script>

<style></style>
