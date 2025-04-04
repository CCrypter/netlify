<template>
  <div class="bg-gray-900 flex flex-col items-center justify-center">
    <p class="text-5xl font-bold text-center mb-5 no-select text-white max-sm:text-4xl">Select your meme!</p>
    <div class="flex-wrap flex w-full justify-center space-x-2 max-sm:hidden">
      <button v-for="button in pages" @click="changePages(button.pageName)" class="bg-yellow-500 mb-2 p-2 rounded-xl flex flex-col justify-center items-center">
        <p class="text-black font-bold text-xl">{{button.name}}</p>
      </button>
    </div>
    <select class="max-sm:flex hidden w-3/4 px-4 py-2 mt-1 text-white bg-gray-600 border-gray-800 rounded-xl focus:border-yellow-500 border-4" id="select" v-model="currentPage">
      <option value = "meme1">Oh my god meme</option>
      <option value = "meme2">Sad Smile meme</option>
      <option value = "meme3">Bruh Cringe Skeleton Meme</option>
    </select>
    <div class="border-yellow-500 border-4 rounded-xl p-2 mt-2 mb-2 flex items-start h-1/2" v-if="currentPage == 'meme1'">
      <meme1/>
    </div>
    <div class="border-yellow-500 border-4 rounded-xl p-2 mt-2 mb-2 flex items-start h-1/2" v-else-if="currentPage == 'meme2'">
      <meme2/>
    </div>
    <div class="border-yellow-500 border-4 rounded-xl p-2 mt-2 mb-2 flex items-start h-1/2" v-else-if="currentPage == 'meme3'">
      <meme3/>
    </div>
    <p class="text-4xl font-bold text-center mb-2 no-select text-white max-sm:text-3xl">Find pictures!</p>
    <input name = "filter" v-model = "search" placeholder="find up me =)" class="flex w-[400px] max-sm:w-2/3 px-4 py-2 mt-1 mb-2 text-white bg-gray-600 border-gray-800 rounded-xl focus:border-yellow-500 border-4">
    <div v-for = "(image, index) in finder" :key = "index" :class = "{'flex flex-row justify-center w-[400px] max-sm:w-3/4': image.image == 'img/lenovo_incident.jpg', 'flex flex-row justify-center w-[300px]': image.image != 'img/lenovo_incident.jpg', 'flex flex-row justify-center object-cover w-[300px]': image.image == 'img/mlg_ccrypter.png'}">
      <img :src="image.image" class="rounded-xl">
    </div>
  </div>
</template>

<script setup lang = "ts">

  import {ref, computed, reactive} from 'vue'

  interface stking {
    names: string[],
    image: string
  }

  const currentSurvivorId = ref<number>(0)
  const currentPage = ref<HTMLElement | null>()
  const search = ref<string>('')

  const filtering = reactive<stking[]>([
  {names: ['lenov', 'lenovo', 'laptop', 'incident', 'ленов', 'леново', 'ты что творишь', 'леново ты что творишь', 'это rofls', 'rofls', 'рофлс', 'это рофлс', 'ktyjdj', 'ktyjd'], image: "img/lenovo_incident.jpg"},
  {names: ['glasses', 'cool', 'ccrypter', 'krupter', 'cc', 'никита', 'круптер', 'очки', 'крутой'], image: "img/ccrypter_cool.png"},
  {names: ['smile', 'smil', 'ухмылка', 'улыбка'], image: "img/ccrypter_smile.png"},
  {names: ['psy', 'psycho', 'psyc', 'psych', 'пси', 'псих', 'пизд', 'пизде', 'пиздец'], image: "img/ccrypter_psycho.png"},
  {names: ['mlg', 'ccrypter mlg', 'doritos', 'but my hope will never die', 'but my hope', 'млг', 'мем доритос', 'доритос'], image: "img/mlg_ccrypter.png"},
  {names: ['olga', 'buy beer', '300m','290m', 'ольга', 'куплю пива', 'пиво'], image: "img/olga.png"},
])

const finder = computed(() => {
  return filtering.filter(img => 
    img.names.some(name => name === search.value)
  )
})

  const pages = [
    {pageName: "meme1", name: "Oh my god meme"},
    {pageName: "meme2", name: "Sad Smile meme"},
    {pageName: "meme3", name: "Bruh Cringe Skeleton Meme"}
  ]

  const changePages = (curLink: number) => {
  currentPage.value = curLink
}
</script>