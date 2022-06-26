<script setup lang="ts">
const data = await queryContent('joinsteps').find()
const imageData = await queryContent('joinsteps').only(['images']).find()
const steps = ref(null)
const currentNumber = ref(0)
const currentImages = computed<string[]>(() => imageData[currentNumber.value].images)
const half = ref(false)
// SSR mode only
// const generateImgPath = (fileName) => {
//   return new URL(`../assets/images/joinstep/${fileName}.jpg`, 'http://localhost:3000/').href
// }

const options = {
  root: null,
  rootMargin: "0% 0%",
  threshold: 0.7,
}

onMounted(() => {
  const doWhenIntersect: IntersectionObserverCallback = async (entries) => {
    const entry = entries.find(entry => entry.isIntersecting)
    if (entry) {
      currentNumber.value = Number(entry.target.getAttribute('data-number'))
      half.value = !!currentImages.value[1]
    }
  }

  const snapsteps = unref(steps)
  const observer = new IntersectionObserver(doWhenIntersect, options);
  snapsteps.map(target => observer.observe(target))
})


</script>
<template>
  <div>

    <div class="md:flex md:flex-row-reverse md:flex-wrap w-full h-auto justify-center items-start">

      <div class="md:basis-0 grow md:pt-12 z-10 prose">

        <div
          v-for="(doc, index) of data"
          :key="index"
          :data-number="index"
          :id="`step-${index + 1}`"
          :class="{ 'pb-24': index === 4 }"
          class="border-gray-200 text-slate-900 pt-24 md:pt-0 md:pb-36"
          ref="steps">

          <h3 class="mb-8">
            <span class="block text-sm font-bold text-indigo-700 mb-2">STEP {{ index + 1 }}</span>
            <span class="block text-xl leading-8" v-html="doc.stepTitle" />
          </h3>

          <ContentRenderer :value="doc" class="prose"/>

        </div>

      </div>

      <div class="md:mr-12 md:basis-6/12 grow-0 shrink-0 sticky bottom-6 md:top-48 pt-6 md:pt-12 z-20">

        <div class="relative w-full pt-[56.25%] flex bg-zinc-900 rounded-lg shadow-2xl overflow-hidden">

          <div
            v-for="(images, index) in imageData"
            :key="index"
            :data-number="index"
            class="absolute top-0 left-0 w-full h-full"
            :class="{'z-1': index == currentNumber, 'z-10': index == currentNumber}"
            >

            <img
              v-for="(imageName, index) in images['images']"
              :key="index"
              :src="`../assets/images/joinstep/${imageName}.jpg`"
              :alt="imageName"
              class="flexible inline-block h-full object-cover"
              :class="{'w-[100%]': index === 0, 'w-[0%]': index === 1, 'half': (half && currentImages[1])}"
            />


          </div>

        </div>

      </div>


    </div>

  </div>
</template>

<style scoped>

.flexible {
  transition: all 1s ease;
}
.flexible.half {
  width: 50%;
  transition: all 1s ease;
}


/* @TODO: コマンドラインのインラインで擬似要素として$を置く */
:deep(code) {
  @apply
  mx-1
  px-3
  py-1
  rounded-md
}

:deep(a) {
  @apply
  underline
  text-indigo-700
}
</style>