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
    bio: `Vue and Nuxt are what I'm living for. Those who believe them shall be 𝓼𝓪𝓿𝓮𝓭.`
  },
  {
    id: 'tenpei-peso',
    displayname: 'Tenpei',
    bio: `I'm a beginner of Engineer. I want to learn Laravel Nuxt Flutter`
  },
  {
    id: 'kuritahisami',
    displayname: 'Kurichan',
    bio: `I'm a FrontEnd Engineer who loves web and animation`
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