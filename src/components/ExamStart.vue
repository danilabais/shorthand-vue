<template>
  <div>
    <div class="d-flex justify-content-around align-items-center p-1">
      <button
        v-on:click="fetchText"
        type="button"
        onclick="blur()"
        class="btn btn-outline-secondary"
      >
        Начать заново
      </button>
      <h3 class="fix">{{ speedNaN }}</h3>
      <h3 class="mistakes fix">{{ timeNaN }}%</h3>
    </div>
    <hr style="width: 90%" class="m-auto" />
    <p ref="traningText" v-html="text" class="text p-2"></p>
  </div>
</template>

<script>
export default {
  name: "ExamStart",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      i: 0,
      window: window,
      mistakes: 0,
      time: 0,
    };
  },
  computed: {
    speedNaN() {
      return isNaN(((this.i / this.time) * 60).toFixed())
        ? "0"
        : ((this.i / this.time) * 60).toFixed();
    },
    timeNaN() {
      return !isFinite(
        isNaN(100 - ((this.mistakes / this.i) * 100).toFixed())
          ? "0"
          : 100 - ((this.mistakes / this.i) * 100).toFixed()
      )
        ? "0"
        : isNaN(100 - ((this.mistakes / this.i) * 100).toFixed())
        ? "0"
        : 100 - ((this.mistakes / this.i) * 100).toFixed();
    },
  },
  methods: {
    fetchText() {
      this.$emit("fetchText");
    },
    setInt() {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
    },

    press(e) {
      const keys = [
        "Shift",
        "Tab",
        "Control",
        "Alt",
        "CapsLock",
        "Meta",
        "Backspace",
      ];
      if (!keys.includes(e.key)) {
        if (this.$refs.traningText.childNodes[this.i].innerHTML === e.key) {
          this.$refs.traningText.childNodes[this.i].classList.add("true");
          this.i++;
        } else {
          this.mistakes++;
          this.$refs.traningText.childNodes[this.i].classList.add("false");
        }

        if (this.i === this.$refs.traningText.childNodes.length) {
          this.$emit("finish", this.time, this.mistakes, this.i);
        }

        //отключение скролла на пробел
        if ((e.keycode || e.which) == 32) {
          e.preventDefault();
        }
      }
    },
  },
  mounted() {
    this.setInt();
    this.window.addEventListener("keydown", this.press);
  },
  beforeUnmount() {
    this.window.removeEventListener("keydown", this.press);
  },
};
</script>

<style>
.text {
  font-size: 2rem;
  font-weight: bold;
}
.false {
  color: red;
}
.true {
  color: green;
}
.mistakes {
  color: red;
}
.fix {
  width: 150px;
}
</style>
