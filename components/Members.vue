<script setup lang="ts">
import type { TeamMember } from '@/types'
// @TODO: call ↓ from another component
const members: TeamMember[] = [
  {
    id: 'monsat',
    displayname: 'Kohji',
    bio: 'Vue, Nuxtがすきです。'
  },
  {
    id: 'rie-oki-agn',
    displayname: 'Rie',
    bio: 'Vue, Nuxtがすきです。ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。'
  },
]

// import { pascalCase, kebabCase, camelCase } from 'scule'
// console.log(pascalCase('rie-oki-agn'))
// console.log(kebabCase('rie-oki-agn'))
// console.log(camelCase('rie-oki-agn'))

</script>

<template>
  <div>
    <div class="py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-8 xl:gap-6">
        <MembersCard
          v-for="member in members"
          :key="member.id"
          :member="member"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>