<template>
  <div>
    <Html lang="ja" />
    <TheHeader class="the-header"/>
    <slot/>
    <TheFooter class="the-footer"/>
  </div>
</template>

<style scoped>
/* body {
  @apply bg-gray-300 dark:bg-gray-900;
} */
.the-header {
  @apply sticky top-0 z-[99]
}
</style>
