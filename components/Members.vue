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
    id: 'hisamikurita',
    displayname: 'Kurichan',
    bio: `I'm a FrontEnd Engineer who loves web and animation`
  },
  {
    id: 'masaya0521',
    displayname: 'Masaya',
    bio: `I'm a FrontEnd Engineer. I want to learn Nuxt, GraphQL, golang and Kubernetes `
  },
  {
    id: 'sudo-roa',
    displayname: 'roa',
    bio: `Ph.D.student of Information Science. I'm looking forward to developing with you`
  },
  {
    id: 'azufb',
    displayname: 'Azusa Okamoto',
    bio: `Frontend Developer in Hyogo. I usually use TypeScript and React. I'm interested in PHP, Express and Docker. Glad to study with you all.`
  },
  {
    id: 'wako-p',
    displayname: 'wako-p',
    bio: `I am not a front-end engineer, but I joined to learn the how-to of collaborative development on GitHub.`
  },
  {
    id: 'konn3g',
    displayname: 'Ako',
    bio: `I work in the web industry. I am a beginner in development. I'm looking to expand my knowledge in many ways.`
  },
  {
    id: 'sa-ji',
    displayname: 'sa-ji',
    bio: `I'm an automotive software engineer. I wish to learn the process of the front-end web developments.`
  },
  {
    id: 'Pomerican',
    displayname: 'Pomerican',
    bio: `I don't know who I am... because I'm dispatched engineer. I want to have fun with you all. Of all mushrooms, maitake are my favorite.`
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
