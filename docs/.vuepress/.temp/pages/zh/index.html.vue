<template>
  <div>
    <h3 id="像数-1-2-3-一样容易" tabindex="-1">
      <a class="header-anchor" href="#像数-1-2-3-一样容易" aria-hidden="true"
        >#</a
      >
      像数 1, 2, 3 一样容易
    </h3>
    <CodeGroup>
      <CodeGroupItem title="YARN" active>
        <div class="language-bash ext-sh line-numbers-mode">
          <pre
            v-pre
            class="language-bash"
          ><code><span class="token comment"># 在你的项目中安装</span>
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next

<span class="token comment"># 新建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> README.md

<span class="token comment"># 开始写作</span>
<span class="token function">yarn</span> vuepress dev

<span class="token comment"># 构建静态文件</span>
<span class="token function">yarn</span> vuepress build
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
          </div>
        </div>
      </CodeGroupItem>
      <CodeGroupItem title="NPM">
        <div class="language-bash ext-sh line-numbers-mode">
          <pre
            v-pre
            class="language-bash"
          ><code><span class="token comment"># 在你的项目中安装</span>
<span class="token function">npm</span> <span class="token function">install</span> -D vuepress@next

<span class="token comment"># 新建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> README.md

<span class="token comment"># 开始写作</span>
npx vuepress dev

<span class="token comment"># 构建静态文件</span>
npx vuepress build
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
          </div>
        </div>
      </CodeGroupItem>
    </CodeGroup>
  </div>
</template>
