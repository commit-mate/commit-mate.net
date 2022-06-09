<script setup>
const steps = ref(null)
const currentImg = ref('step-1')

const options = {
  root: null,
  rootMargin: "0% 0%",
  threshold: 1.0
};

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
    observer.observe(target);
  });
})


const contents = [
  {
    title: 'commit mate リポジトリを Fork する',
    sentenceHTML: `
    <p class="leading-7 text-base">
      まずは <a href="https://github.com/commit-mate/commit-mate.net">commit-mate.net リポジトリ</a> をフォークします。<br>
      フォークとは、他のユーザーのリモートリポジトリ（GitHub上のリポジトリ）を、自分のリモートリポジトリとして複製する行為です。<br>
      これをすることで、プルリクエストを送ったりなどの、見知らぬユーザーとの共同開発が可能になります。<br>
      複製したリポジトリ名は同じく「commit-mate.net」で良いでしょう。
    </p>`
  },
  {
    title: 'Fork したリポジトリをローカル環境に Clone する',
    sentenceHTML: `
    <p class="leading-7 text-base">
      フォークした自分のリポジトリのページを開き、右上の Code から Clone の SSH を選択して表示された Key をコピーします。<br>
      次に、PC（ローカル）に作業用のディレクトリを作成し、コマンドラインツールでクローン <br>
    </p>
    <img src="/assets/images/joinstep/step-2-b.png" alt="" class="rounded-lg shadow-2xl my-3" />
    <p class="leading-7 text-base">を実行します。これでリモートリポジトリのデータのコピーがローカルに置かれました。<br>
    その後、パッケージをインストールして開発環境を立ち上げます。</p>
    `
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
    `
  },
  {
    title: 'Commit & Push',
    sentenceHTML: `
    <p class="leading-7 text-base">
      編集が終わったら、git commit コマンドをします。<br>
      コミットとは、現在の状態をリポジトリに保存して最新バージョンとする行為です。編集する前のデータは古いバージョンとなります。<br>
      コミットしたら次に git push コマンドをします。<br>
      プッシュとは、ローカルリポジトリの最新バージョンを、リモートリポジトリ（GitHub）での最新バージョンとして更新することです。<br>
      普通はブランチを切って作業しますが、今回はコミュニティ参加のための作業なので、mainブランチのまま作業してプッシュしましょう。
    </p>
    `
  },
  {
    title: 'Fork 元へ Pull Request を送信',
    sentenceHTML: `
    `
  },
]
</script>

<template>
  <div>

    <div class="md:flex md:flex-wrap w-full h-auto justify-center items-start">

      <div class="md:mr-12 md:basis-5/12 grow-0 shrink-0 sticky top-0 md:top-12 pt-24 z-20">
        <div class="relative w-full pt-[38%]">
          <img :src="`/assets/images/joinstep/${currentImg}.jpg`" alt="" class="absolute top-0 left-0 rounded-lg shadow-2xl" />
        </div>
      </div>

      <div class="md:basis-0 grow pt-12 md:pt-24 z-10">
        <h2 class="text-2xl -mb-10 md:mb-12">コミュニティ参加方法</h2>

        <div 
          v-for="(content, index) in contents" 
          :key="index" 
          class="border-gray-200 text-slate-900 pt-20 md:pt-0 md:pb-32"
          :class="(index==1)&&'pt-20'"
          :id="`step-${index+1}`" 
          ref="steps">

          <h3 class="mb-4">
            <span class="block text-sm">STEP {{index+1}}</span>
            <span class="block text-xl" v-html="content.title"></span>
          </h3>
          <div v-html="content.sentenceHTML" class="content"></div>

        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
</style>