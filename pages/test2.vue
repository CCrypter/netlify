<template>
  <div id="LinkIndex">Это элемент с ID "LinkIndex"</div>
  <button @click="addColorBgClass">Добавить класс "colorbg"</button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Функция для добавления класса к элементу с ID "LinkIndex"
const addColorBgClass = () => {
  const element = document.getElementById('LinkIndex');
  if (element) {
    element.classList.add('colorbg');
  }
};

// Если нужно, чтобы класс добавлялся автоматически при загрузке страницы
onMounted(() => {
  // addColorBgClass(); // Раскомментируйте, если нужно автоматическое добавление
});
</script>

<style>
.colorbg {
  background-color: yellow;
  padding: 10px;
  border: 2px solid orange;
  color: black;
}
</style>