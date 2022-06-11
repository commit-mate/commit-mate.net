<script setup>
const steps = ref(null) // 普通にDOM参照しようとすると最後の要素しか取得されなくて、v-for で回さないと配列にならない仕様らしい（公式より）
const currentImg = ref('step-1')

const options = {
  root: null,
  rootMargin: "0% 0%",
  threshold: 1.0,
}

const doWhenIntersect = async (entries) => {
  const entry = entries.find(entry => entry.isIntersecting)
  if (entry && (entry !== currentImg.value)) {
    currentImg.value = entry.target.id
  }
}

onMounted(() => {
  const snapsteps = unref(steps)
  const observer = new IntersectionObserver(doWhenIntersect, options);
  snapsteps.forEach(target => {
    observer.observe(target)
  })
})

// @TODO: put these doms in an array
const contents = [
  {
    title: 'commit mate リポジトリを Fork する',
    sentenceHTML: `
    <p class="leading-7 text-base">
      まずは <a href="https://github.com/commit-mate/commit-mate.net">commit-mate.net リポジトリ</a> をフォークします。<br>
      フォークとは、他のユーザーのリモートリポジトリ（GitHub上のリポジトリ）を、自分のリモートリポジトリとして複製する行為です。<br>
      これをすることで、プルリクエストを送ったりなどの、見知らぬユーザーとの共同開発が可能になります。<br>
      複製したリポジトリ名は同じく「commit-mate.net」で良いでしょう。
    </p>`,
  },
  {
    title: 'Fork したリポジトリをローカル環境に Clone する',
    sentenceHTML: `
    <p class="leading-7 text-base">
      フォークした自分のリポジトリのページを開き、右上の Code から Clone の SSH を選択して表示された Key をコピーします。<br>
      次に、PC（ローカル）に作業用のディレクトリを作成し、コマンドラインツールでクローン <br>
    </p>
    <img src="/assets/images/joinstep/step-2-b.png" alt="" class="rounded-lg shadow-2xl my-3" />
    <p class="leading-7 text-base">を実行します。<br>
    これでリモートリポジトリのコピーがローカルに置かれました。<br>
    その後ローカルにて、パッケージをインストールして開発環境を立ち上げます。</p>
    `,
  },
  {
    title: 'Members.vue を編集（仮）',
    sentenceHTML: `
    <p class="leading-7 text-base">
      component/Members.vue を開いて、前回の人の続きから自分の情報を書き込みます。
    </p>
    <p class="leading-7 my-6 text-base">
      ・キー「id」、値「"GitHubアカウントID"」<br>
      ・キー「displayname」、値「"希望の表示名"」<br>
      ・キー「bio」、値「"簡単な自己紹介文"」<br>
    </p>
    <p class="leading-7 text-base">
      の3つが必須となります。
    </p>
    `,
  },
  {
    title: 'Commit & Push',
    sentenceHTML: `
    <p class="leading-7 text-base mb-6">
      編集が終わったら、git commit コマンドをします。<br>
      オプション -m でメッセージが書けます。できれば英語でメッセージを書いてみましょう。<br>
      コミットとは、現在の状態を最新バージョンとしてリポジトリに保存する行為です。編集する前のデータは古いバージョンとなります。
    </p>
    <p class="leading-7 text-base">
      次に git push コマンドをします。<br>
      プッシュとは、現在までのローカルリポジトリのデータを、リモートリポジトリに送信する行為です。これで新しい作業分がリモートリポジトリに追加され、ローカルと同じ最新版になりました。<br>
      普通は別ブランチを切って作業しますが、今回はコミュニティ参加のための作業なので、mainブランチのまま作業して（component/Members.vue 以外は編集せず）プッシュしましょう。
    </p>
    `,
  },
  {
    title: 'Fork 元へ Pull request を送信',
    sentenceHTML: `
    <p class="leading-7 text-base">
      自分の commit-mate.net リポジトリを開き、「Pull request」のタブへ移動して、プルリクエストを作成します。<br>
      Camparing Changes で、自分のリポジトリのmainとフォーク元のリポジトリのmainを比較していることを確認しましょう。<br>
      確認できたら、右下の Create Pull Request をクリックします。<br>
      参加の旨をメッセージで添えて送信します。<br>
      リクエストが承認され、マージされたら参加完了です。
    </p>`,
  },
]
</script>

<template>
  <div class="pt-24">

    <h2 class="text-2xl md:text-3xl text-center mb-2">コミュニティ参加方法</h2>
    <span class="block text-base text-slate-800 text-center mb-0 md:mb-12">5ステップで手軽に共同開発を体験しよう！</span>

    <div class="md:flex md:flex-row-reverse md:flex-wrap w-full h-auto justify-center items-start">

      <div class="md:basis-0 grow md:pt-12 z-10">

        <div
          v-for="(content, index) in contents"
          :key="index"
          :id="`step-${index + 1}`"
          ref="steps"
          :class="{ 'pt-20': index === 1 }"
          class="border-gray-200 text-slate-900 pt-20 md:pt-0 md:pb-32"
        >

          <h3 class="mb-8">
            <span class="block text-sm font-bold text-indigo-700 mb-2">STEP {{ index + 1 }}</span>
            <span class="block text-xl leading-8" v-html="content.title" />
          </h3>
          <div class="content" v-html="content.sentenceHTML" />

        </div>
      </div>

      <div class="md:mr-12 md:basis-5/12 grow-0 shrink-0 sticky bottom-6 md:top-48 pt-6 md:pt-12 z-20">
        <div class="relative w-full pt-[38%]">
          <img
            :src="`/assets/images/joinstep/${currentImg}.jpg`"
            alt=""
            class="absolute bottom-0 md:bottom-auto md:top-0 left-0 rounded-lg shadow-2xl"
          />
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
</style>