<script setup lang="ts">
import type { TeamMember } from '@/types'
import { pascalCase } from 'scule'

type Props = {
  member: TeamMember
}
const props = defineProps<Props>()
const customCard:any = resolveComponent(`Card${pascalCase(props.member.id)}`)

</script>

<template>
  <component :is="customCard" v-if="customCard.name" :member="props.member" :id="props.member.id"/>
  <CardDefault v-else :member="props.member" :id="props.member.id"/>
</template>