<script setup>
const { data } = await useAsyncData('page-data', () => queryContent('/joinsteps').find())
const steps = ref(null)
const currentImgs = ref(['step-1'])
const half = ref(false)

const options = {
  root: null,
  rootMargin: "0% 0%",
  threshold: 1.0,
}

const doWhenIntersect = async (entries) => {
  const entry = entries.find(entry => entry.isIntersecting)
  if (entry && (entry !== currentImgs.value)) {
    currentImgs.value = data.value[entry.target.dataset.number].image
    if (currentImgs.value[1]) {
      setTimeout(() => {
        half.value = true
      }, 300);
    } else {
      half.value = false
    }
  }
}

onMounted(() => {
  const snapsteps = unref(steps)
  const observer = new IntersectionObserver(doWhenIntersect, options);
  snapsteps.forEach(target => {
    observer.observe(target)
  })
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
          <div class="absolute top-0 left-0 w-full h-full">

            <img
              :src="`/assets/images/joinstep/${currentImgs[0]}.jpg`"
              alt=""
              class="flexible-full inline-block w-[100%] h-full object-cover"
              :class="{'half': (half && currentImgs[1])}"
            />

            <img
              v-show="currentImgs[1]"
              :src="`/assets/images/joinstep/${currentImgs[1]}.jpg`"
              alt=""
              class="flexible inline-block w-[0%] h-full object-cover"
              :class="{'half': (half && currentImgs[1])}"
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

.flexible-full {
  transition: all 1s ease;
}

.flexible.half {
  width: 50%;
  transition: all 1s ease;
}

.flexible-full.half {
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