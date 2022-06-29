<script setup lang="ts">
import type { TeamMember } from '@/types'
import { pascalCase } from 'scule';

type Props = {
  member: TeamMember
}
const props = defineProps<Props>()

</script>

<template>

  <a
    :href="`https://github.com/${props.member.id}`" target="_blank" rel="noopener noreferrer"
    class="block bg-slate-50 rounded-md px-6 py-5 drop-shadow transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300">
      <div class="w-full flex items-center space-x-4">
        <div>
          <img class="w-12 h-12 object-cover rounded-full" :src="`https://github.com/${props.member.id}.png`" alt="">
        </div>
        <div>
          <div class="text-lg text-slate-800 font-bold" v-html="props.member.displayname"></div>
          <div class="text-sm text-slate-500" v-html="props.member.id"></div>
        </div>
      </div>

      <div class="mt-6 i-understand-css-completely">
        <p class="text-sm text-slate-700 leading-6" v-html="props.member.bio"></p>
      </div>
  </a>

</template>

<style scoped>
.i-understand-css-completely {
  left: 50px;
}
</style>