<template>
  <table class="table border-primary mb-5 table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>

        <th scope="col" v-on:click="sort('speed')" class="clickable">
          Скорость
          <img
            v-bind:class="{ active: this.state == 'speed' }"
            src="@/assets/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </th>
        <th scope="col" v-on:click="sort('mistakes')" class="clickable">
          Правильность
          <img
            v-bind:class="{ active: this.state == 'mistakes' }"
            src="@/assets/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </th>
        <th scope="col" v-on:click="sort('time')" class="clickable">
          Дата
          <img
            v-bind:class="{ active: this.state == 'time' }"
            src="@/assets/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <transition-group name="result-list">
        <tr v-for="(items, idx) in results" :key="items.date">
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ items.speed }} кл/м</td>
          <td>{{ items.mistakes }}%</td>
          <td>{{ new Date(items.date).toLocaleDateString() }}</td>
        </tr>
        
      </transition-group>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    results: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      state: "speed",
    };
  },
  methods: {
    sort(sortby) {
      this.$emit("sort", sortby);
      this.state = sortby;
    },
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
  transition: all 0.3s;
}
.active {
  opacity: 1;
  transform: translateY(0);
}
th img {
  transition: all 0.3s;
  transform: translateY(-20px);
  opacity: 0;
}

.clickable:hover {
  background: rgb(236, 236, 236);
}
.clickable:last-child {
  border-radius: 0 23px 0 0;
}
.result-list-move {
  transition: ease 1s;
}
.result-list-item {
  margin-right: 10px;
}
.result-list-enter-active,
.result-list-leave-active {
  transition: ease all 0.3s;
}
.result-list-enter-from, .result-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(0);
}
</style>
