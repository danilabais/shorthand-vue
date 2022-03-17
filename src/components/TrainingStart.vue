<template>
  <div class="">
    <div class="d-flex justify-content-around align-items-center p-1">
      <button v-on:click="back" type="button" class="btn btn-lg btn-link">
        Вернуться назад
      </button>
      <button
        v-on:click="fetchText"
        type="button"
        onclick="blur()"
        class="btn btn-outline-secondary"
      >
        Другой текст
      </button>
      <h3 class="fix">{{ speedNaN }}</h3>
    </div>
    <hr style="width: 90%" class="m-auto" />
    <p ref="text" class="text p-3" v-html="text.newArr"></p>

    <div
      class="progress bg-dark mb-3"
      style="height: 45px; border-radius: 0px 0px 21px 21px"
    >
      <div
        class="progress-bar bg-success progress-bar-striped progress-bar-animated"
        role="progressbar"
        v-bind:style="{ width: progress + '%' }"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span>{{ Math.floor(progress) }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainingStart",
  props: {
    text: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      window: window,
      i: 0,
      progress: 0,
      time: 0,
      interval: {},
      mistakes: null,
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    fetchText() {
      this.$emit("fetchText", this.text.n);
      this.i = 0;
      this.time = 0;
      clearInterval(this.interval);
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
        if (this.$refs.text.childNodes[this.i].innerHTML === e.key) {
          this.$refs.text.childNodes[this.i].classList.add("true");
          this.i++;
        } else {
          this.mistakes++;
          this.$refs.text.childNodes[this.i].classList.add("false");
        }

        if (this.i === this.$refs.text.childNodes.length) {
          this.$emit("finish", [this.i, this.time, this.mistakes]);
        }

        //отключение скролла на пробел
        if ((e.keycode || e.which) == 32) {
          e.preventDefault();
        }

        //включить таймер
        if (this.i == 1) {
          this.setInt();
        }
      }
    },
    setInt() {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
    },
  },
  computed: {
    speedNaN: function () {
      return !isFinite(isNaN(((this.i / this.time) * 60).toFixed())? "0": ((this.i / this.time) * 60).toFixed())?'0':isNaN(((this.i / this.time) * 60).toFixed())? "0": ((this.i / this.time) * 60).toFixed();
    },
  },
  watch: {
    i: function (val) {
      this.progress = (val / this.$refs.text.childNodes.length) * 100;
    },
  },

  mounted() {
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
  transition: color 0.3s;
}
.btn:focus {
  outline: none;
}
span {
  font-size: 2rem;
}
.fix {
  width: 150px;
}
</style>
