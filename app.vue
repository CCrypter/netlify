<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <div class="bg-gradient-to-r from-purple-500 to-teal-400 p-1 rounded-lg">
      <div class="bg-gray-900 rounded-lg p-10">
        <h1 class="text-white text-lg font-bold text-center">Вычислятор попадания на стипендию</h1>
        <p class="text-gray-200 text-center">{{result}}</p>
        <p class="text-teal-200 text-5xl font-bold text-center mt-2 mb-5">{{score}}</p>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="0" max="100" v-model="rating" type="number" placeholder="Рейтинг">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="0" max="100" v-model="exam" type="number" placeholder="Экзамен">
        <div class ="flex items-center justify-center">
          <button class="rounded-lg bg-teal-400 flex items-center justify-center p-2" @click = 'scoresolver'>Жми-жми</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script setup lang = "ts">
    import {ref} from 'vue';
  
    const result = ref<string>('Давай узнаем, попадаешь ли ты на стипендию?')
    const score = ref<number>(0);
    let rating = ref<number>(null);
    let  exam = ref<number>(null);
  
    const scoresolver = ()=> {
      score.value = rating.value * 0.6 + exam.value * 0.4
      if (score.value >= 100) {
        result.value = "Чет многовато -_-"
      }
      else if (score.value >=70) {
        result.value = "Красава, поздравляю! =)"
      }
      else if (score.value < 70) {
        result.value = "Bruh man, старайся лучше!"
      }
    }
  </script>
  