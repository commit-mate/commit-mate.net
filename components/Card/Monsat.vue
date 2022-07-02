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
    class="wrapper block bg-slate-50 rounded-md px-6 py-5 drop-shadow">

    <div class="w-full flex items-center space-x-4">
      <div>
        <img class="w-16 h-16 object-cover rounded-full" :src="`https://github.com/${props.member.id}.png`" alt="">
        <div class="glasses hidden absolute w-12 top-[48%] left-[0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 88.672 33.155">
            <defs>
              <filter id="ifn0653" x="0" y="0" width="88.672" height="33.155" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g transform="translate(4342.337 -4540)">
              <g transform="matrix(1, 0, 0, 1, -4342.34, 4540)" filter="url(#ifn0653)">
                <path id="ifn0653-2" data-name="ifn0653" d="M9.5,271.088c-.769,6.332.329,13.432,3.427,16.712,5.233,5.54,21.665,6.01,27.206.777,2.635-2.489,4.118-7.512,4.39-12.689h6.115c.127,4.83,1.325,9.449,3.652,11.914,5.233,5.54,21.666,6.01,27.206.777,3.453-3.262,4.935-10.875,4.294-17.489H9.5Z" transform="translate(-3.26 -268.09)"/>
              </g>
              <path d="M0,0H10V2.619L0,6Z" transform="translate(-4332 4546)" fill="#fff"/>
              <path d="M0,0H10V2.619L0,6Z" transform="translate(-4291 4546)" fill="#fff"/>
            </g>
          </svg>
        </div>
      </div>
      <div>
        <div class="text-lg text-slate-800 font-bold" v-html="props.member.displayname"></div>
        <div class="text-sm text-slate-500" v-html="props.member.id"></div>
      </div>
    </div>

    <div class="mt-6">
      <p class="text-sm text-slate-700 leading-6" v-html="props.member.bio"></p>
    </div>

  </a>

</template>

<style scoped>
a.wrapper:hover .glasses {
  display: block;
}
</style>