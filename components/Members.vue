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
    bio: 'Vue, Nuxtがすきです。ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。'
  },
  {
    id: 'monsat',
    displayname: 'Koji',
    bio: 'Vue, Nuxtがすきです。'
  },
  {
    id: 'rie-oki-agn',
    displayname: 'Rie',
    bio: 'Vue, Nuxtがすきです。ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。'
  },
  {
    id: 'monsat',
    displayname: 'Koji',
    bio: 'Vue, Nuxtがすきです。ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。'
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
    <div class="px-4 sm:px-12 lg:px-0 py-6">
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-6">
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