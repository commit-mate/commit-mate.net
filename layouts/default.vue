<template>
  <div>
    <Html lang="ja" />
    <div class="section-inner">
      <slot/>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-300 dark:bg-gray-900;
}
.section-inner {
  margin: auto;
  width: calc(100% - 6rem);
  max-width: 600px;
}
</style>
