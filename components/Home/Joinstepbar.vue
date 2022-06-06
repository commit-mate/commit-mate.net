<template>
  <div class="join-step-bar">

    <h2 class="text-xl">コミュニティ参加方法</h2>

    <ul>
      <li>
        <span>STEP 1</span>
        <span>commit mate リポジトリをFork</span>
      </li>

      <li>
        <span>STEP 2</span>
        <span>ローカルで開発環境を構築</span>
      </li>

      <li>
        <span>STEP 3</span>
        <span>Members.vue を編集</span>
      </li>

      <li>
        <span>STEP 4</span>
        <span>Commit & Push</span>
      </li>

      <li>
        <span>STEP 5</span>
        <span>Pull Request を送信</span>
      </li>
    </ul>

  </div>
</template>

<style scoped>

.join-step-bar li {
  @apply mt-12
}
.join-step-bar span {
  @apply block
}
.join-step-bar span:first-child {
  @apply text-sm
}
.join-step-bar span:last-child {
  @apply text-base
}
</style>