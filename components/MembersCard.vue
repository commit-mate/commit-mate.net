<script setup>
const props = defineProps({
  member: {
    id: String,
    displayname: String,
    bio: String
  }
})
</script>

<template>
  <a class="prose dark:prose-invert" :href="`https://github.com/${props.member.id}`" target="_blank" rel="noopener noreferrer">
    <div>
      <div>
        <img class="w-10 h-10 rounded-full" :src="`https://github.com/${props.member.id}.png`" alt="">
      </div>
      <div v-html="props.member.displayname"></div>
      <div v-html="props.member.bio"></div>
    </div>
  </a>
</template>