<script setup>
// @TODO change random key to color code
// @TODO describe direction line between commits

const origin = ref(
  {
    main: {
      name: 'origin/main',
      commits: []
    }
  }
)

const local = ref(
  {
    main: {
      name: 'main',
      commits: []
    }
  }
)

const repositories = computed(() => [origin.value, local.value])
const branching = ref([])

const createKey = () => {
  return Math.random().toString(32).substring(2)
}

/** current state */
const currentBranchIndex = ref(0)
const currentBranchName = computed(() => {
  const branchNames = Object.keys(local.value)
  return branchNames[currentBranchIndex.value]
})
const currentBranch = computed(() => local.value[currentBranchName.value])
const currentCommit = ref(null)
const countBranch = computed(() => Object.keys(local.value).length)

/** edit */
const edited = ref(false)
const doEdit = () => {
  edited.value = true
}

/** git add */
const canAdd = ref(true)
const doAdd = () => {
  canAdd.value = false
}

/** git commit */
const canCommit = computed(() => edited.value && !canAdd.value ? true : false )
const doCommit = () => {
  const randomKey = createKey()
  currentBranch.value.commits.push(randomKey)
  currentCommit.value = randomKey
  edited.value = false
}

/** git push */
const targetBranch = computed(() => origin.value[currentBranchName.value])

const canPush = computed(() => targetBranch.value?.name ? true : false )
const doPush = () => {
  targetBranch.value.commits = [...currentBranch.value.commits]
}

const canPushUpStream = computed(() => !canPush.value )
const doPushUpStream = () => {

  const newName = 'origin/' + currentBranchName.value
  origin.value[currentBranchName.value] = {
    name: newName,
    commits: [...currentBranch.value.commits],
    spacer: currentBranch.value.spacer
  }
}

/** github pull request */

/** github approval pull request */

/** git pull */


/** git switch */
const doSwitchBranch = () => {
  currentBranchIndex.value === countBranch.value -1
  ? currentBranchIndex.value = 0
  : currentBranchIndex.value += 1
}

const doCreateBranch = () => {
  const newBranchName = `dev_${countBranch.value}`
  const commitsLength = [...currentBranch.value.commits].length
  const spacer = currentBranch.value.spacer
  local.value[newBranchName] = {
    name: newBranchName,
    commits: [],
    spacer: commitsLength + (spacer ? spacer : 0)
  }
  currentBranchIndex.value = countBranch.value -1
  branching.value.push(currentCommit.value)
  canAdd.value = true
}

/** git clone */
const clone = ref(false)
const doClone = () => {
  currentBranch.value.commits.push(currentCommit.value)
  clone.value = true
}

onMounted(() => {
  currentCommit.value = createKey()
  origin.value['main'].commits.push(currentCommit.value)
})

</script>

<template>

  <div class="max-w-7xl mx-auto section-inner">

    <div id="branches">

      <div
        v-for="(repository, index) in repositories"
        :key="index"
        class="mb-8 py-4"
        :class="{'bg-slate-200': index === 0}"
      >

        <div
          v-for="(branch, index) in repository"
          :key="index"
          class="py-2 flex items-center"
          :class="{'bg-slate-200': branch.name === local[currentBranchName].name}"
          >

          <div class="w-28 text-xs">{{branch.name}}</div>

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
              :class="{'branching': branching?.find(id => id === commit ? true : false)}"
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
            :class="{'focus:outline-none focus:ring-2 bg-red-300 focus:ring-offset-2 transition-all cursor-not-allowed': !canAdd, 'hover:bg-red-600 bg-red-500': canAdd}"
            :disabled="!canAdd"
            >
            add .
          </button>

          <button
            @click="doCommit"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            :class="{'focus:outline-none focus:ring-2 bg-yellow-300 focus:ring-offset-2 transition-all cursor-not-allowed': !canCommit, 'hover:bg-yellow-600 bg-yellow-500': canCommit}"
            :disabled="!canCommit"
            >
            commit
          </button>

          <button
            @click="doPush"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            :class="{'focus:outline-none focus:ring-2 bg-green-300 focus:ring-offset-2 transition-all cursor-not-allowed': !canPush, 'hover:bg-green-600 bg-green-500': canPush}"
            :disabled="!canPush"
            >
            git push
          </button>

          <button
            @click="doPushUpStream"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            :class="{'focus:outline-none focus:ring-2 bg-green-300 focus:ring-offset-2 transition-all cursor-not-allowed': !canPushUpStream, 'hover:bg-green-600 bg-green-500': canPushUpStream}"
            :disabled="!canPushUpStream"
            >
            git push -u origin {{local[currentBranchName].name}}
          </button>

          <button
            @click="doSwitchBranch"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            switch {{(currentBranchIndex === countBranch-1) ? 'main' : `dev_${currentBranchIndex+1}`}}
          </button>

          <button
            @click="doCreateBranch"
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
            switch -c dev_{{countBranch}}
          </button>

        </div>

      </div>

    </div>

    <div class="bg-slate-900 text-white p-4">
      <p class="text-xs">origin - target: {{targetBranch}}</p>
      <p class="text-xs">local - snap: {{currentBranch}}</p>
      <p class="text-xs">branching: {{branching}}</p>
    </div>

  </div>

</template>

<style scoped>

.branching {
  position: relative;
}
.branching::before {
  content: '';
  position: absolute;
  display: block;
  top: calc(50% - 1px);
  left: .5rem;
  width: 2rem;
  height: 2px;
  background: gray;
  transform: rotate(45deg);
  transform-origin: left center;
}
</style>