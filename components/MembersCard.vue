<script setup lang="ts">
import type { TeamMember } from '@/types'
import { pascalCase } from 'scule'

type Props = {
  member: TeamMember
}
const props = defineProps<Props>()

const CustomCardName = `Card${pascalCase(props.member.id)}`
const CustomCardComponent = resolveComponent(CustomCardName)

const exists = computed(() => CustomCardComponent !== CustomCardName)
</script>

<template>
  <component :is="CustomCardComponent" v-if="exists" :member="props.member"/>
  <CardDefault v-else :member="props.member"/>
</template>