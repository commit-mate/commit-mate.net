<script setup lang="ts">
import type { TeamMember } from '@/types'
// @TODO: call ↓ from another component
const members: TeamMember[] = [
  {
    id: 'monsat',
    displayname: 'Kohji',
    bio: `Front End Engineer I love JavaScript. Of course, I also love TypeScript.`
  },
  {
    id: 'rie-oki-agn',
    displayname: 'Rie',
    bio: `I'm so struggling with TypeScript. Vue and Nuxt are what I'm living for. Those who believe them shall be saved.`
  },
]
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