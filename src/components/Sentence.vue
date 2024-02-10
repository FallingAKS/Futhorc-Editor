<script setup lang="ts">
defineProps<{
  msg: string,
  size: number
}>();
</script>

<template>
    <span v-for="letter in msg.split('')" :key="letter">
      <img v-if="/^[A-Z]$/.test(letter)" :style="{ height: size + 'em' }" :src="'/letter/upper/' + letter.toLowerCase() + '.jpg'" alt="letter" />
      <img v-if="/^[a-z]$/.test(letter)" :style="{ height: size + 'em' }" :src="'/letter/lower/' + letter + '.jpg'" alt="letter" />
      <img v-if="/^[0-9]$/.test(letter)" :style="{ height: size + 'em' }" :src="'/letter/lower/sn.jpg'" alt="letter" />
      <img v-if="/^[1-9]$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/${String.fromCharCode(96 + parseInt(letter))}.jpg`" alt="letter" />
      <img v-if="/^0$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/j.jpg`" alt="letter" />

      <img v-if="/^[\[({<]$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/sl.jpg`" alt="letter" />
      <img v-if="/^[\])}>]$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/sr.jpg`" alt="letter" />
      <img v-if="/^,$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/s0.jpg`" alt="letter" />
      <img v-if="/^\.$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/s1.jpg`" alt="letter" />
      <img v-if="/^!$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/s2.jpg`" alt="letter" />
      <img v-if="/^\^$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/s3.jpg`" alt="letter" />
      <img v-if="/^\?$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/sq.jpg`" alt="letter" />
      <img v-if="/^\?$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/s1.jpg`" alt="letter" />
      <img v-if="/^'$/.test(letter)" :style="{ height: size + 'em' }" :src="`/letter/lower/su.jpg`" alt="letter" />

      <br v-if="/^\\$/.test(letter)" />
    </span>
</template>

<style scoped>
</style>
