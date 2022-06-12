<script setup lang="ts">
import type { TeamMember } from '@/types'
import { pascalCase } from 'scule'

type Props = {
  member: TeamMember
}
const props = defineProps<Props>()

// const nuxtApp = useNuxtApp()
// nuxtApp.vueApp.component('custom', () => import('./Card/' + pascalCase(props.member.id)))
// const customCard = defineAsyncComponent(() => import(`./${pascalCase(props.member.id)}.vue`))

// const Card = defineAsyncComponent({
//   loader: () => import(`./Card/${pascalCase(props.member.id)}.vue`),
//   errorComponent: () => import(`./Card/Default.vue`),
// })


// @TODO: don't know the best practice. it works but changing component to global in Nuxt config seems to be not good.
const customCard:any = resolveComponent(`Card${pascalCase(props.member.id)}`)

</script>

<template>
  <component :is="customCard" v-if="customCard.name" :member="props.member" :id="props.member.id"/>
  <CardDefault v-else :member="props.member" :id="props.member.id"/>
</template>