<template>
    <header class="flex flex-row w-full items-center relative max-sm:absolute max-sm:sticky max-sm:top-0 max-sm:justify-between">
        <div class="bg-gray-900 w-full flex flex-col px-2 pt-2 justify-start">
            <div :class = "{'bg-gray-900 justify-start border-t-4 border-r-4 border-l-4 border-yellow-500 flex flex-row w-full max-sm:flex-row items-center rounded-t-xl p-2': burger, 'bg-gray-900 justify-start max-sm:border-4 border-x-4 border-t-4 border-yellow-500 flex flex-row w-full max-sm:flex-row items-center max-sm:rounded-xl rounded-t-xl p-2': !burger}">
                    <div class="max-sm:basis-1/4 items-center flex flex-row">
                        <img src="assets/img/CCrypter.png" class ="w-10 h-10 rounded-xl mr-2">
                        <p class="text-3xl text-bold text-white mr-2">CCrypter</p>
                    </div>
                    <div class = "hidden max-sm:block basis-1/4 max:sm:basis-auto"></div>
                    <div class="max-sm:basis-1/2 justify-end flex -px-8">
                        <div v-if = "!burger" @click="switch_burger" class = "max-sm:flex max-sm:flex-col max-sm:mr-1 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6">
                            <span class = "h-[3px] w-full bg-yellow-500"></span>
                            <span class = "h-[3px] w-full bg-yellow-500"></span>
                            <span class = "h-[3px] w-full bg-yellow-500"></span>
                        </div>
                        <div v-else @click="switch_burger" class = "max-sm:flex max-sm:flex-col max-sm:mr-1 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6">
                            <span class = "h-[3px] w-full bg-yellow-500 rotate-45 relative top-[9px]"></span>
                            <span class = "h-[3px] w-full bg-yellow-500 opacity-0"></span>
                            <span class = "h-[3px] w-full bg-yellow-500 relative bottom-3 -rotate-45"></span>
                        </div>
                    </div>
            </div>
            <div :class = "{'bg-gray-900 justify-start border-b-4 border-r-4 border-l-4 border-yellow-500 flex flex-col w-full max-sm:flex-col rounded-b-xl px-2 pb-2 mb-2': burger, 'max-sm:hidden border-b-4 border-r-4 border-l-4 border-yellow-500 rounded-b-xl px-2 pb-2': !burger}">
                <nav class = "space-y-2 flex flex-row items-center max-sm:basis-auto max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:px-0">     
                    <div class="items-center flex flex-row space-x-2 justify-start max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0 w-full">
                        <NuxtLink to = "/" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:text-center">Вычислятор</NuxtLink>
                        <NuxtLink to = "/clicker" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:text-center">Кликер</NuxtLink>
                        <NuxtLink to = "/tictactoe" class="hidden my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:text-center">Крестики-Нолики</NuxtLink>
                        <div @click = "switch_labs" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:text-center">Labs
                            <div :class = "{'border-4 space-y-2 border-yellow-500 bg-gray-900 -translate-x-3 translate-y-4 0 justify-center rounded-b-xl p-1 flex flex-col absolute text-black w-56 text-center max-sm:p-0': labs, 'hidden': !labs}">
                                <NuxtLink to = "/lab1" class="my-auto p-2 rounded-xl max-sm:bg-gray-500 bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:mb-2 max-sm:text-center">Lab1</NuxtLink>
                                <NuxtLink to = "/lab2" class="my-auto p-2 rounded-xl max-sm:bg-gray-500 bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:mb-2 max-sm:text-center">Lab2</NuxtLink>
                                <NuxtLink to = "/lab3" class="my-auto p-2 rounded-xl max-sm:bg-gray-500 bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:mb-2 max-sm:text-center">Lab3</NuxtLink>
                                <NuxtLink to = "/lab4" class="my-auto p-2 rounded-xl max-sm:bg-gray-500 bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:mb-2 max-sm:text-center">Lab4</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div :class = "{'hidden w-full gap-2 text-center max-sm:flex': labs, 'hidden': !labs}">
                            <NuxtLink to = "/lab1" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black w-full mb-2 text-center">Lab1</NuxtLink>
                            <NuxtLink to = "/lab2" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:mb-2 max-sm:text-center">Lab2</NuxtLink>
                            <NuxtLink to = "/lab3" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:mb-2 max-sm:text-center">Lab3</NuxtLink>
                            <NuxtLink to = "/lab4" class="my-auto p-2 rounded-xl bg-gray-700 active:bg-yellow-500 text-white active:text-black max-sm:w-full max-sm:mb-2 max-sm:text-center">Lab4</NuxtLink>
                    </div>    
                </nav>
            </div>
        </div>   
    </header>
        <div class="p-2 bg-gray-900">
            <slot/>
        </div>
    <footer class = "flex flex-row w-full bg-gray-900 items-center justify-center px-4 py-2 gap-4">
        <a href = "https://www.youtube.com/@ccrypter"><img src="assets/img/youtube-yellow.svg" class="w-16 h-16"></a>
    </footer>
</template>

<script setup lang="ts">
import {useHead} from '#app';
import {ref} from 'vue'

const burger = ref<boolean>(false);
const labs = ref<boolean>(false);
const switch_burger = ()=> {burger.value = !burger.value};
const switch_labs = ()=> {labs.value = !labs.value}; 
</script>