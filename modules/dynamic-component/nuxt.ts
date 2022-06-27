import { defineNuxtModule } from '@nuxt/kit'
import type { ComponentsDir } from '@nuxt/schema'

// dynamic components loader
export default defineNuxtModule({
  defaults: {
    dirs: [] as (string | ComponentsDir)[]
  },
  async setup(moduleOptions, nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.unshift(...moduleOptions.dirs)
    })
  },
})
