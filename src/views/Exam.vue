<template>

    <div
      class="bg-body shadow-lg mx-auto mt-5"
      style="width: 80%; min-height: 200px; border-radius: 21px 21px 21px 21px"
    >
      <ExamLobby v-if="!isStart" v-on:startCounter="startCounter" />
      <Counter v-if="isStart && !isStartExam" v-on:exam="exam" />
      <ExamStart
        v-on:finish="finish"
        v-on:fetchText="repeat"
        v-bind:text="text"
        v-if="isStartExam && !isFinishExam"
      />
      <ExamMain v-on:back="repeat" v-bind:result="result" v-if="isFinishExam" />
    </div>
  
</template>

<script>
import axios from "axios";
import ExamLobby from "@/components/ExamLobby.vue";
import Counter from "@/components/Counter.vue";
import ExamStart from "@/components/ExamStart.vue";
import ExamMain from "@/components/ExamMain.vue";

export default {
  name: "Exam",
 
  data() {
    return {
      isStart: false,
      isStartExam: false,
      isFinishExam: false,
      text: "",
      result: [],
    };
  },
  components: {
    ExamLobby,
    Counter,
    ExamStart,
    ExamMain,
  },
  methods: {
    repeat() {
      this.isStart = true;
      this.isStartExam = false;
      this.fetchText();
      this.isFinishExam = false;
    },
    startCounter() {
      this.isStart = true;
      this.fetchText();
    },
    exam() {
      this.isStartExam = false;
      this.isStartExam = true;
    },
    finish(i, j, k) {
      this.isFinishExam = true;

      this.result = [i, j, k];
    },

    async fetchText() {
      try {
        const response = await axios.get(
          `https://fish-text.ru/get?format=text&number=3`
        );
        this.text = this.wrap(response.data.text);
      } catch (error) {
        alert("ошибка ", error);
      }
    },
    wrap(text) {
      const arr = text.split("");
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(`<span>${arr[i]}</span>`);
      }
      newArr = newArr.join("");
      return newArr;
    },
  },
};
</script>

<style></style>
