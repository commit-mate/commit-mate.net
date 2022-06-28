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
    class="block mx-auto w-full max-w-[22.5rem] md:max-w-none transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-300">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 999.334 573.035" class="drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
      <g transform="translate(-6312.028 -4913.965)">
        <path d="M3.738,346.061c0-107.173,60.889-253.076,245.376-274.454,132.534-10.8,231.2-7.721,271.089-20.283s94.242-70.484,186.5-56.829S884.25,64.085,900.242,136.817c51.823,27.026,125.372,187.471,96.207,296.591S859.857,572.5,806.522,564.143s-75-25.509-90.392-79.021c-74.8,50.284-188.9,79.021-316.742,79.021C174.076,564.143,3.738,469.17,3.738,346.061Z" transform="translate(6308.29 4921.54)" fill="#fff"/>
        <path d="M82.843,17.183c43.5-.766,89.552,74.856,87.993,157.946S107.507,301.957,64.011,302.723-9.2,259.346-7.643,176.255,39.348,17.949,82.843,17.183Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 7146.725, 5128.575)" fill="#4e4e4e"/>
        <path d="M37.5,0C58.211,0,85.786,16.487,85.786,36.825S58.211,73.65,37.5,73.65,0,57.163,0,36.825,16.789,0,37.5,0Z" transform="translate(6385 5146)" fill="#4e4e4e"/>
      </g>
    </svg>

    <div class="absolute top-0 left-0 w-full h-full pl-12 pr-24 flex justify-center items-center">
      <div>
        <div class="text-lg text-right text-gray-800 font-bold" v-html="props.member.displayname"></div>
        <p class="mt-1 text-sm text-right text-gray-700 leading-6" v-html="props.member.bio"></p>
      </div>
    </div>

  </a>

</template>
