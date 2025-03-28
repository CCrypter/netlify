<template>
  <div class="max-w-3xl mx-auto py-12">
    <Carousel :slides="slides" autoplay>
      <template #slide="{ slide }">
        <div class="aspect-video bg-gray-200 flex items-center justify-center">
          <h2 class="text-4xl font-bold">{{ slide.title }}</h2>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const slides = [
  { title: 'Slide 1', content: 'Content for slide 1' },
  { title: 'Slide 2', content: 'Content for slide 2' },
  { title: 'Slide 3', content: 'Content for slide 3' },
];
</script>