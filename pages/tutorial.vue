<script setup>
const repositories = ref({
  origin: {
    main: {
      name: 'origin/main',
      commits: []
    },
  },
  local: {
    main: {
      name: 'main',
      commits: []
    }
  }
})

const createKey = () => {
  return Math.random().toString(32).substring(2)
}

const currentBranch = ref('main')
const currentCommit = ref(null)

const edit = ref(false)
const doEdit = () => {
  edit.value = true
}

const add = ref(false)
const doAdd = () => {
  add.value = true
}

const commitAble = computed(() => edit.value && add.value ? true : false )
const doCommit = () => {
  const randomKey = createKey()
  repositories.value.local[currentBranch.value].commits.push(randomKey)
  edit.value = false
}

const doPush = () => {

}

const doSwitch = () => {

}

const clone = ref(false)

const doClone = () => {
  repositories.value.local.main.commits.push(currentCommit.value)
  clone.value = true
}

onMounted(() => {
  currentCommit.value = createKey()
  repositories.value.origin.main.commits.push(currentCommit.value)
})

</script>

<template>

  <div class="max-w-7xl mx-auto section-inner">

    <div id="branches">

      <div
        v-for="(repository, index) in repositories"
        :key="index"
      >

        <div
          v-for="(branch, index) in repository"
          :key="index"
          >

          <div>{{branch.name}}</div>

          <div
            v-for="(commit, index) in branch.commits"
            :key="index"
            class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white"
            >

          </div>

        </div>
      </div>

    </div>

    <div
      id="buttons"
      class="flex justify-center py-12">

      <div v-show="!clone">
        <button
          @click="doClone"
          type="button"
          class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
          >
          clone
        </button>
      </div>

      <div v-show="clone">

        <div class="space-x-4">

          <button
            @click="doEdit"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
            Edit
          </button>

          <span>$ git</span>

          <button
            @click="doAdd"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            :class="{'focus:outline-none focus:ring-2 bg-red-300 focus:ring-offset-2 transition-all cursor-not-allowed': add, 'hover:bg-red-600 bg-red-500': !add}"
            :disabled="add"
            >
            add .
          </button>

          <button
            @click="doCommit"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            :class="{'focus:outline-none focus:ring-2 bg-yellow-300 focus:ring-offset-2 transition-all cursor-not-allowed': !commitAble, 'hover:bg-yellow-600 bg-yellow-500': commitAble}"
            :disabled="!commitAble"
            >
            commit
          </button>

          <button
            @click="doSwitch"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
            git push -u origin {{currentBranch}}
          </button>

          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            switch branchX
          </button>

          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            switch -c branchX
          </button>

        </div>

      </div>

    </div>

  </div>

</template>