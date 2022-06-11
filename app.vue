<template>
  <div>

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

  </div>
</template>

<style>
body * {
  position: relative
}

.section-inner {
  @apply
  px-6 /** mobile 1column */
  sm:px-12 /** mobile -wide 1column */
  md:px-10 /** tablet 2column */
  lg:px-8 /** pc 3column */
  xl:px-0
}

</style>