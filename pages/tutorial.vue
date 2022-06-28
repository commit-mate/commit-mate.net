<script setup>
const origin = ref(
  [
    {
      name: 'origin/main',
      commits: []
    }
  ]
)

const local = ref(
  [
    {
      name: 'main',
      commits: []
    }
  ]
)

const repositories = computed(() => [origin.value, local.value])

const createKey = () => {
  return Math.random().toString(32).substring(2)
}

const currentBranch = ref(0)
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
  local.value[currentBranch.value].commits.push(randomKey)
  edit.value = false
}

const doPush = () => {
  const snapLocalBranch = toRaw(local.value)
  const snapCurrentBranch = toRaw(currentBranch.value)
  const copiedBranch = toRaw(snapLocalBranch[snapCurrentBranch])
  copiedBranch.name = 'origin/' + copiedBranch.name
  origin.value.push({ name: 'test', co1mmits: copiedBranch.commits, spacer: copiedBranch.spacer })
}

const doSwitchBranch = () => {
  currentBranch.value == Object.keys(local.value).length -1
  ? currentBranch.value = 0
  : currentBranch.value += 1
}

const doCreateBranch = () => {
  const count = Object.keys(local.value).length
  const commitsLength = toRaw(local.value)[toRaw(currentBranch.value)].commits.length
  const spacer = toRaw(local.value)[toRaw(currentBranch.value)].spacer
  local.value[count] = {
    name: `dev-${count}`,
    commits: [],
    spacer: commitsLength + (spacer ? spacer : 0)
  }
  currentBranch.value = count
  add.value = false
}

const clone = ref(false)
const doClone = () => {
  local.value[0].commits.push(currentCommit.value)
  clone.value = true
}

onMounted(() => {
  currentCommit.value = createKey()
  origin.value[0].commits.push(currentCommit.value)
})

</script>

<template>

  <div class="max-w-7xl mx-auto section-inner">

    <div id="branches">

      <div
        v-for="(repository, index) in repositories"
        :key="index"
        class="mb-4"
      >

        <div
          v-for="(branch, index) in repository"
          :key="index"
          class="mb-2 p-2 flex items-center"
          :class="{'bg-slate-200': branch.name === local[currentBranch].name}"
          >

          <div class="w-28">{{branch.name}}</div>

          <div class="flex">

            <div
              v-show="branch.spacer"
              class="flex"
            >
              <div
              v-for="(space, index) of branch.spacer"
              :key="index"
              class="mr-2 w-4 h-4"
              ></div>

            </div>

            <div
              v-for="(commit, index) in branch.commits"
              :key="index"
              :id="commit"
              class="mr-2 w-4 h-4 bg-yellow-500 rounded-full"
              >
            </div>

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
            @click="doPush"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
            git push -u origin {{local[currentBranch].name}}
          </button>

          <button
            @click="doSwitchBranch"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            switch {{(currentBranch == Object.keys(local).length -1) ? local[0].name : local[currentBranch+1].name}}
          </button>

          <button
            @click="doCreateBranch"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
            switch -c dev-x
          </button>

        </div>

      </div>

    </div>

  </div>

</template>