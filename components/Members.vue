<script setup>
const members = [
  {
    id: 'monsat',
    displayname: 'Koji',
    bio: 'Vue, Nuxtがすきです。'
  },
  {
    id: 'rie-oki-agn',
    displayname: 'Rie',
    bio: 'Vue, Nuxtがすきです。'
  },
]
</script>

<template>
  <div>
    <MembersCard v-for="member in members" :key="member.id" :member="member"/>
  </div>
</template>