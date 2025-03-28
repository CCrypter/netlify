<template>
  <div class="min-h-screen bg-gray-900 justify-center">
    <div class="flex flex-col justify-center items-center pb-4">
        <p class="font-bold text-5xl text-white text-center">Risk of Rain 2 Survivors</p>
    </div>
    <div class="flex-wrap flex w-full justify-center space-x-2">
      <button v-for="survivor in survivors" :key="survivor.id" @click="changeSurvivors(survivor.id)" class="bg-yellow-500 p-2 mb-2 rounded-xl flex flex-col justify-center items-center">
        <img :src='survivor.icon' class="w-10 h-10">
      </button>
    </div>  
    <div class="flex flex-col justify-center items-center pb-4">
        <p class="font-bold text-4xl text-white text-center">{{survivors[currentSurvivorId].name}}</p>
    </div>
    <div class="flex flex-row flex-wrap justify-center items-start space-x-2 h-1/2"> 
      <div class="flex flex-col items-center justify-center">
        <div class="aspect-square basis-1/3 h-72 overflow-hidden hover:aspect-auto">
          <img :src="survivors_skins[currentSurvivorId].skin_default" class="text-center w-full h-full object-cover border-4 border-yellow-500 object-top rounded-xl">
        </div>
        <p class=" text-white text-pretty text-xl text-center">{{survivors_skins[currentSurvivorId].desc_default}}</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div v-if="survivors_skins[currentSurvivorId].id !== 16" class="aspect-square basis-1/3 h-72 overflow-hidden hover:aspect-auto">
          <img :src="survivors_skins[currentSurvivorId].skin_hd"class="w-full h-full object-cover border-4 border-yellow-500 object-top rounded-xl">
        </div>
        <p class=" text-white text-pretty text-xl text-center">{{survivors_skins[currentSurvivorId].desc_hd}}</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div v-if="survivors_skins[currentSurvivorId].id !== 16 && survivors_skins[currentSurvivorId].id !== 13 && survivors_skins[currentSurvivorId].id !== 14 && survivors_skins[currentSurvivorId].id !== 15" class="aspect-square basis-1/3 h-72 overflow-hidden hover:aspect-auto">
          <img :src="survivors_skins[currentSurvivorId].skin_fs"class="w-full h-full object-cover border-4 border-yellow-500 object-top rounded-xl">
        </div>
        <p class=" text-white text-pretty text-xl text-center">{{survivors_skins[currentSurvivorId].desc_fs}}</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div v-if="survivors_skins[currentSurvivorId].id == 6" class="aspect-square basis-1/3 h-72 overflow-hidden hover:aspect-auto">
          <img :src="survivors_skins[currentSurvivorId].skin_special"class="w-full h-full object-cover border-4 border-yellow-500 object-top rounded-xl">
        </div>
        <p class=" text-white text-pretty text-xl text-center">{{survivors_skins[currentSurvivorId].desc_special}}</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center pt-4">
      <p class="font-bold text-3xl text-white">Description</p>
      <p class=" text-white text-pretty text-xl text-center">{{survivors[currentSurvivorId].desc}}</p>
    </div>
  </div>
</template>

<script setup lang = "ts">

  import {reactive} from 'vue'
  const currentSurvivorId = ref<number>(0)

  interface stking {id: number, name: string, icon: string, image: string, desc: string}

  const survivors = reactive<stking[]>([
    {id: 0, name: 'Commando', icon: '/img/lab4/icons/Commando_icon.webp', image: 'img/lab4/survivors/commando_default.webp', desc: "The Commando is a jack-of-all-trades character that is reliable in all situations of the game."},
    {id: 1, name: 'Huntress', icon: '/img/lab4/icons/huntress_icon.webp', image: 'img/lab4/huntress.png', desc: "The Huntress is an extremely mobile but fragile survivor with a high damage output."},
    {id: 2, name: 'Bandit', icon: '/img/lab4/icons/bandit_icon.webp', image: 'img/lab4/bandit.png', desc: "The Bandit is a high-skill combo character that can dish out devastating backstabs while weaving in and out of stealth."},
    {id: 3, name: 'MUL-T', icon: '/img/lab4/icons/MUL-T_icon.webp', image: 'img/lab4/commando_default.webp', desc: "MUL-T is an aggressive survivor who has the tools necessary for any job!"},
    {id: 4, name: 'Engineer', icon: '/img/lab4/icons/engineer_icon.webp', image: 'img/lab4/huntress.png', desc: "The Engineer is a unique class that requires planning and positioning to be successful."},
    {id: 5, name: 'Artificer', icon: '/img/lab4/icons/artificer_icon.webp', image: 'img/lab4/bandit.png', desc: "The Artificer is a high burst damage survivor who excels in fighting large groups and bosses alike."},
    {id: 6, name: 'Mercenary', icon: '/img/lab4/icons/mercenary_icon.webp', image: 'img/lab4/commando_default.webp', desc: "The Mercenary is a high skill melee survivor that uses his many dodges to weave in and out of combat."},
    {id: 7, name: 'REX', icon: '/img/lab4/icons/rex_icon.webp', image: 'img/lab4/huntress.png', desc: "REX is a half robot / half plant that uses HP to cast devastating skills from a distance. The plant nor the robot could survive this planet alone – but thankfully they have each other."},
    {id: 8, name: 'Loader', icon: '/img/lab4/icons/loader_icon.webp', image: 'img/lab4/bandit.png', desc: "The Loader is a slow but powerful bruiser that can use her grappling hook to uniquely navigate the environment."},
    {id: 9, name: 'Acrid', icon: '/img/lab4/icons/acrid_icon.webp', image: 'img/lab4/commando_default.webp', desc: "Acrid is a melee-range hybrid who uses powerful poisons to melt tanky enemies."},
    {id: 10, name: 'Captain', icon: '/img/lab4/icons/captain_icon.webp', image: 'img/lab4/huntress.png', desc: "The Captain is a unique survivor that can control the battlefield with utility and damage - with help from the UES Safe Travels."},
    {id: 11, name: 'Railgunner', icon: '/img/lab4/icons/railgunner_icon.webp', image: 'img/lab4/bandit.png', desc: "The Railgunner is a long-range, single target survivor that can instantly kill any high priority target - and from any range."},
    {id: 12, name: 'Void Fiend', icon: '/img/lab4/icons/void_fiend_icon.webp', image: 'img/lab4/commando_default.webp', desc: "The Void Fiend is a corrupted survivor that fluctuates between a controlled and corrupted form, each with different strengths and weaknesses. Managing this curse has become its fate."},
    {id: 13, name: 'Seeker', icon: '/img/lab4/icons/seeker_icon.webp', image: 'img/lab4/huntress.png', desc: "As a meditative mid-range brawler, Seeker utilizes powerful healing to sustain herself and her team."},
    {id: 14, name: 'False Son', icon: '/img/lab4/icons/false_son_icon.webp', image: 'img/lab4/bandit.png', desc: "The False Son is a slow but stalwart close-range warrior. With extreme health and defense, False Son can weather any storm. Use False Son's durability to stay in the fray and capitalize on his slow but deadly skills."},
    {id: 15, name: 'CHEF', icon: '/img/lab4/icons/chef_icon.webp', image: 'img/lab4/commando_default.webp', desc: "A survivor of high class, Chef specializes in only the most exquisite meals and combos. As a culinary master, Chef uses a variety of practiced skills in tandem for additional benefits."},
    {id: 16, name: 'Heretic', icon: '/img/lab4/icons/heretic_icon.webp', image: 'img/lab4/huntress.png', desc: "The Heretic is a powerful character who can only be accessed through extraordinary means."},
  ])

  const survivors_skins = [
    {id: 0, skin_default: 'img/lab4/survivors/commando_default.webp', skin_fs: 'img/lab4/survivors/commando_helot.webp', skin_hd: 'img/lab4/survivors/commando_hornet.webp', desc_default: 'Default', desc_fs: 'Helot', desc_hd: 'Hornet'},
    {id: 1, skin_default: 'img/lab4/survivors/huntress_default.webp', skin_fs: 'img/lab4/survivors/huntress_woodland.webp', skin_hd: 'img/lab4/survivors/huntress_arctic.webp', desc_default: 'Default', desc_fs: 'Arctic', desc_hd: 'Woodland'},
    {id: 2, skin_default: 'img/lab4/survivors/bandit_default.webp', skin_fs: 'img/lab4/survivors/bandit_outlaw.webp', skin_hd: 'img/lab4/survivors/bandit_chilly.webp', desc_default: 'Default', desc_fs: 'Outlaw', desc_hd: 'Chilly'},
    {id: 3, skin_default: 'img/lab4/survivors/MUL-T_default.webp', skin_fs: 'img/lab4/survivors/mul-t_sentry.webp', skin_hd: 'img/lab4/survivors/mul-t_janitor.webp', desc_default: 'Default', desc_fs: 'Sentry', desc_hd: 'janitor'},
    {id: 4, skin_default: 'img/lab4/survivors/engineer_default.webp', skin_fs: 'img/lab4/survivors/engineer_HC_tech.webp', skin_hd: 'img/lab4/survivors/engineer_eod_tech.webp', desc_default: 'Default', desc_fs: 'HC-Tech', desc_hd: 'EOD-Tech'},
    {id: 5, skin_default: 'img/lab4/survivors/artificer_default.webp', skin_fs: 'img/lab4/survivors/artificer_meridian.webp', skin_hd: 'img/lab4/survivors/artificer_chrome.webp', desc_default: 'Default', desc_fs: 'Meridian', desc_hd: 'Chrome'},
    {id: 6, skin_default: 'img/lab4/survivors/mercenary_default.webp', skin_fs: 'img/lab4/survivors/mercenary_frail.webp', skin_hd: 'img/lab4/survivors/mercenary_oni.webp', skin_special: 'img/lab4/survivors/mercenary_the_prisoner.webp', desc_default: 'Default', desc_fs: 'Frail', desc_hd: 'Oni', desc_special: 'The Prisoner'},
    {id: 7, skin_default: 'img/lab4/survivors/rex_default.webp', skin_fs: 'img/lab4/survivors/rex_verdant.webp', skin_hd: 'img/lab4/survivors/rex_smoothie.webp', desc_default: 'Default', desc_fs: 'Verdant', desc_hd: 'Smoothie'},
    {id: 8, skin_default: 'img/lab4/survivors/loader_default.webp', skin_fs: 'img/lab4/survivors/loader_neoteric.webp', skin_hd: 'img/lab4/survivors/loader_classic.webp', desc_default: 'Default', desc_fs: 'Neoteric', desc_hd: 'Classic'},
    {id: 9, skin_default: 'img/lab4/survivors/acrid_default.webp', skin_fs: 'img/lab4/survivors/acrid_iguania.webp', skin_hd: 'img/lab4/survivors/acrid_albino.webp', desc_default: 'Default', desc_fs: 'Inguania', desc_hd: 'Albino'},
    {id: 10, skin_default: 'img/lab4/survivors/captain_default.webp', skin_fs: 'img/lab4/survivors/captain_colonel.webp', skin_hd: 'img/lab4/survivors/captain_admiral.webp', desc_default: 'Default', desc_fs: 'Colonel', desc_hd: 'Admiral'},
    {id: 11, skin_default: 'img/lab4/survivors/railgunner_default.webp', skin_fs: 'img/lab4/survivors/railgunner_deadeye.webp', skin_hd: 'img/lab4/survivors/railgunner_marksman.webp', desc_default: 'Default', desc_fs: 'Deadeye', desc_hd: 'Marksman'},
    {id: 12, skin_default: 'img/lab4/survivors/void_fiend_default.webp', skin_fs: 'img/lab4/survivors/void_fiend_sanctified.webp', skin_hd: 'img/lab4/survivors/void_fiend_purified.webp', desc_default: 'Default', desc_fs: 'Sanctified', desc_hd: 'Purified'},
    {id: 13, skin_default: 'img/lab4/survivors/seeker_default.webp', skin_fs: 'img/lab4/survivors/seeker_beyond.webp', skin_hd: 'img/lab4/survivors/seeker_beyond.webp', desc_default: 'Default', desc_fs: '', desc_hd: 'Beyond'},
    {id: 14, skin_default: 'img/lab4/survivors/false_son_default.webp', skin_fs: 'img/lab4/survivors/false_son_unchained.webp', skin_hd: 'img/lab4/survivors/false_son_unchained.webp', desc_default: 'Default', desc_fs: '', desc_hd: 'Unchained'},
    {id: 15, skin_default: 'img/lab4/survivors/chef_default.webp', skin_fs: 'img/lab4/survivors/chef_pres-10.webp', skin_hd: 'img/lab4/survivors/chef_pres-10.webp', desc_default: 'Default', desc_fs: '', desc_hd: 'PRES-10'},
    {id: 16, skin_default: 'img/lab4/survivors/heretic_default.webp', skin_fs: 'img/lab4/survivors/heretic_default.webp', skin_hd: 'img/lab4/survivors/heretic_default.webp', desc_default: 'Default', desc_fs: '', desc_hd: ''},
  ]

  const changeSurvivors = (survivorId: number) => {
  currentSurvivorId.value = survivorId
  // Дополнительная логика
}
</script>