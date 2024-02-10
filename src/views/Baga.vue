<script setup lang="ts">
import Sentence from "@/components/Sentence.vue";
</script>

<template>
  <div>
    <router-link to="/" class="logo">
      <Sentence msg="Baga" size="5"/>
    </router-link>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>