<script setup lang="ts">
import type { TeamMember } from '@/types'

type Props = {
  member: TeamMember
}
const props = defineProps<Props>()

</script>

<template>

  <a
    :href="`https://github.com/${props.member.id}`" target="_blank" rel="noopener noreferrer"
    class="wrapper block w-full">
    <div class="bg w-full h-full bg-blue-100 rounded-tl-[50%] rounded-tr-lg rounded-br-[20%] rounded-bl-lg transition ease-in-out duration-300">

      <div class="px-8 py-6">
        <div class="w-full flex items-center">
          <div class="basis-14 grow-0 shrink-0 mr-6">
            <img class="w-full drop-shadow-md" :src="`https://github.com/${props.member.id}.png`" alt="">
          </div>
          <div>
            <div class="text-lg text-sky-900 font-bold" v-html="props.member.displayname"></div>
            <div class="text-sm text-blue-300" v-html="props.member.id"></div>
            <p class="mt-2 text-sm text-sky-900 leading-6" v-html="props.member.bio"></p>
          </div>
        </div>
      </div>

    </div>

    <div class="circle-blue w-5 h-5 top-0 left-0"></div>
    <div class="circle-blue w-3 h-3 top-0 left-12"></div>
    <div class="circle-blue w-7 h-7 top-3 left-8"></div>
    <div class="circle-blue w-4 h-4 top-7 left-6"></div>

    <div class="circle-white w-4 h-4 bottom-4 left-6"></div>
    <div class="circle-white w-2 h-2 bottom-8 left-10"></div>
    <div class="circle-white w-1 h-1 bottom-5 left-14"></div>
  </a>

</template>

<style scoped>
.circle-blue {
  @apply
  bg-blue-100
  border-2
  border-white
  absolute
  rounded-full
  transition
  ease-in-out
  duration-300
}

.circle-white {
  @apply
  bg-white
  absolute
  rounded-full
  transition
  ease-in-out
  duration-300
}

a.wrapper:hover .circle-blue,
a.wrapper:hover .circle-white,
a.wrapper:hover .bg {
  @apply
  transition
  ease-in-out
  duration-300
  translate-y-1
  scale-90
}



</style>