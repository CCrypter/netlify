<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center" @click = 'ClickerIncrease'>
    <div class="bg-gradient-to-r from-purple-500 to-teal-400 p-1 rounded-lg">
      <div class="bg-gray-900 rounded-lg p-10">
        <h1 class="text-purple-500 text-5xl font-bold text-center mb-5 no-select">Кликер!</h1>
        <p class="text-gray-200 text-center no-select">{{text1}}</p>
        <p class="text-teal-200 text-9xl font-bold text-center mt-2 mb-5 no-select" >{{clickerScore}}</p>
        <p class="text-gray-200 text-center text-lg font-bold no-select">Жми на любую часть экрана!</p>
      </div>
    </div>
  </div>
  </template>
  <script setup lang = "ts">

  import {ref} from 'vue';

  const text1 = ref<string>('Просто потому что!')
  const clickerScore = ref<number>(0);

  const ClickerIncrease = ()=> {
    clickerScore.value += 1
  }
</script>
<style>
.no-select {
  user-select: none; /* Основное свойство */
  -webkit-user-select: none; /* Для Safari */
  -moz-user-select: none;    /* Для Firefox */
  -ms-user-select: none;     /* Для Internet Explorer/Edge */
}
</style>

  