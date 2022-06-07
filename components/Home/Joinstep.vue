<template>
  <div>
    <h2 class="text-2xl">コミュニティ参加方法</h2>
    <div class="join-step">
      <h3>
        <span>STEP 1</span>
        <span>commit mate リポジトリを Fork する</span>
      </h3>

      <p>
        まずは <a href="https://github.com/commit-mate/commit-mate.net">commit-mate.net リポジトリ</a> をフォークします。<br>
        フォークとは、他のユーザーのリモートリポジトリ（GitHub上のリポジトリ）を、自分のリモートリポジトリとして複製する行為です。<br>
        これをすることで、プルリクエストを送ったりなどの、見知らぬユーザーとの共同開発が可能になります。<br>
        複製したリポジトリ名は同じく「commit-mate.net」で良いでしょう。
      </p>

      <h3>
        <span>STEP 2</span>
        <span>Fork したリポジトリをローカル環境に Clone する</span>
      </h3>

      <p>
        フォークした自分のリポジトリのページを開き、右上の Code から Clone の SSH を選択して表示された Key をコピーします。<br>
        次に、PC（ローカル）に作業用のディレクトリを作成し、コマンドラインツールで <br>
      </p>

      <img src="/assets/images/joinstep/step2-b.png" alt="" class="rounded-lg shadow-2xl mb-3" />

      <p>を実行します。</p>

      <h3>
        <span>STEP 3</span>
        <span>Members.vue を編集</span>
      </h3>

      <h3>
        <span>STEP 4</span>
        <span>Commit & Push</span>
      </h3>

      <h3>
        <span>STEP 5</span>
        <span>Fork 元へ Pull Request を送信</span>
      </h3>
    </div>
  </div>
</template>

<style scoped>
.join-step {
  min-height: 100rem;
  @apply border-gray-200 text-slate-900
}
.join-step h3 {
  @apply mt-12 mb-4
}
.join-step h3 span {
  @apply block
}
.join-step h3 span:first-child {
  @apply text-sm
}
.join-step h3 span:last-child {
  @apply text-xl
}
.join-step p {
  @apply leading-7 text-base mb-3
}
</style>