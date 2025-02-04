<template>
      <header class="">
    <div class="bg-gray-900 w-full flex flex-row p-2 justify-center">
        <div class = "bg-gradient-to-r from-purple-500 to-teal-400 justify-center rounded-xl p-1 w-full">
            <div class = "bg-gray-900 justify-start flex flex-auto rounded-xl p-2">
                <div class ="">
                    <img src="assets/img/CCrypter.png" class ="w-10 rounded-xl">
                </div>
                <nav class = "text-white text-center flex items-center px-4 gap-4">
                    
                    <p class="my-auto text-2xl rounded-xl hover:bg-gradient-to-r from-purple-500 to-teal-400 hover:text-black">CCrypter's Site</p>
                    <NuxtLink to = "/" class="my-auto p-2 rounded-xl bg-gray-700 hover:bg-gradient-to-r from-purple-500 to-teal-400 hover:text-black">Вычислятор</NuxtLink>
                    <NuxtLink to = "/clicker" class="my-auto p-2 rounded-xl bg-gray-700 hover:bg-gradient-to-r from-purple-500 to-teal-400 hover:text-black">Кликер</NuxtLink>
                </nav>
            </div>
        </div>
    </div>
  </header>
    <div>
        <slot/>
    </div>
</template>