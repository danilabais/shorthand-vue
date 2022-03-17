<template>
  <div
    class="counter display-1 d-flex justify-content-center align-items-center"
  >
    <strong>
      {{ counter }}
    </strong>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 3,
    };
  },
  methods: {
    startCount() {
      setTimeout(() => {
        if (this.counter === 1) {
          this.$emit("exam");
          return;
        }

        this.counter--;
        this.startCount();
      }, 1000);
    },
  },
  mounted() {
    this.startCount();
  },
};
</script>

<style scoped>
.counter {
  font-size: 40em;
  font-family: "Lucida Console", Monaco, monospace;
  font-weight: 900;
}
</style>
