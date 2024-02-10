<script setup lang="ts">
import Sentence from '@/components/Sentence.vue'
import {ref, onMounted} from "vue";
import router from "../router";

const text = ref("");
const isUpper = ref(true);

onMounted(() => {
  const handleKeyDown = (event) => {
    const key = event.key;
    if ((key >= "0" && key <= "9") ||
        (key === ",") || (key === ".") || (key === "!") || (key === "?") ||
        (key === "'") || (key === "^") || (key === "(") || (key === ")") ||
        (key === "[") || (key === "]") || (key === "{") || (key === "}") ||
        (key === "<") || (key === ">")) {
      text.value += key;
      isUpper.value = false;
    } else if (key >= "a" && key <= "z") {
      if (isUpper.value) {
        text.value += key.toUpperCase();
        isUpper.value = false;
      } else {
        text.value += key;
      }
    } else if (key === " ") {
      isUpper.value = !isUpper.value;
    } else if (key === "Backspace") {
      text.value = text.value.slice(0, -1);
      isUpper.value = false;
    } else if (key === "Delete") {
      text.value = "";
      isUpper.value = true;
    } else if (key === "Enter") {
      text.value += "\\";
      isUpper.value = true;
    }
  }

  // 添加键盘事件监听
  document.addEventListener('keydown', handleKeyDown)
  if (localStorage.getItem("text")) {
    text.value = localStorage.getItem("text");
  }
});

const buttonClick = () => {
  localStorage.setItem("text", text.value);
  router.push("/baga");
}
</script>

<template>
  <div>
    <a @click="buttonClick" class="logo">
      <Sentence :msg=text size="1.6"/>
    </a>
  </div>
  <br><br>
  <Sentence msg="UpperCaseOn" size="1.2" v-if="isUpper" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
