<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <div class="bg-gradient-to-r from-purple-500 to-teal-400 p-1 rounded-xl">
      <div class="bg-gray-900 rounded-xl p-10">
        <h1 class="text-white text-lg font-bold text-center">Вычислятор попадания на стипендию</h1>
        <p class="text-gray-200 text-center">{{result}}</p>
        <p class="text-teal-200 text-5xl font-bold text-center mt-2 mb-5">{{score}}</p>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="0" max="100" v-model="rating" type="number" @input="filterInput" placeholder="Введите свой рейтинг">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="0" max="100" v-model="exam" type="number" @input="filterInput" placeholder="Введите баллы за экзамен">
        <div class ="flex items-center justify-center">
          <button class="rounded-lg bg-teal-400 flex items-center justify-center p-2" @click = 'scoresolver'>Жми-жми</button>
        </div>
        <h1 class="text-white text-lg font-bold text-center mt-10">Сколько баллов на экзамене мне нужно, чтобы получить стипедию?</h1>
        <p class="text-gray-200 text-center">{{result1}}</p>
        <p class="text-teal-200 text-5xl font-bold text-center mt-2 mb-5">{{score1}}</p>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required max="100" v-model="rating1" type="number" @input="filterInput" placeholder="Введите свой рейтинг">
        <div class ="flex items-center justify-center">
          <button class="rounded-lg bg-teal-400 flex items-center justify-center p-2" @click = 'scoresolver1'>Жми-жми</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script setup lang = "ts">

    import {ref} from 'vue';
  
    const result = ref<string>('Давай узнаем, попадаешь ли ты на стипендию?')
    const result1 = ref<string>('Сколько тебе нужно баллов на экзамене для стипендии?')
    const score = ref<number>(0);
    const score1 = ref<number>(0);
    let rating = ref<number>(0);
    let rating1 = ref<number>(0);
    let exam = ref<number>(0);
  
    const scoresolver = ()=> {
      score.value = rating.value * 0.6 + exam.value * 0.4
      if (rating.value < 50 || exam.value < 25) {
        result.value = "Ну все, здарова летник =("
      }
      else if (exam.value < 50) {
        result.value = "Попал на пересдачу..."   
      }
      else if (score.value > 100) {
        result.value = "Чет многовато -_-"
      }
      else if (score.value >=70) {
        result.value = "Красава, поздравляю! =)"
      }
      else if (score.value < 70) {
        result.value = "Bruh man, старайся лучше!"
      }
    }

    const scoresolver1 = ()=> {
      score1.value = (((6*rating1.value-10*70)/4)*-1)
      if (score1.value < 50) {
        score1.value = 50
      }
      if (rating1.value < 50) {
        result1.value = "Тебя уже не спасти..."
      }
      if (rating1.value >= 50 && rating1.value < 65) {
        result1.value = "Тяжко будет конечно -_-"
      }
      if (rating1.value >= 65 && rating1.value < 75) {
        result1.value = "Нормас"
      }
      if (rating1.value >= 75) {
        result1.value = "Кайфуем друзья =)"
      }
    }

    const filterInput = ()=> {
      if (rating.value >= 100) {
        rating.value = 100;
      }
      if (exam.value >= 100) {
        exam.value = 100;
      }
      if (exam.value < 0) {
        exam.value = 0;
      }
      if (rating.value < 0){
        rating.value = 0;
      }
      if (rating1.value >= 100){
        rating1.value = 100;
      }
      if (rating1.value < 0){
        rating1.value = 0
      }
  }
</script>
  