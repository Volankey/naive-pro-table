<template>
  <div>
    <h1 id="样式" tabindex="-1">
      <a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <p>
      默认主题使用
      <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"
        >SASS<ExternalLinkIcon
      /></a>
      作为 CSS 预处理器。
    </p>
    <p>
      用户可以通过
      <a href="#palette-%E6%96%87%E4%BB%B6">palette 文件</a>
      来自定义样式变量，还可以通过
      <a href="#style-%E6%96%87%E4%BB%B6">style 文件</a> 来添加额外的样式。
    </p>
    <h2 id="palette-文件" tabindex="-1">
      <a class="header-anchor" href="#palette-文件" aria-hidden="true">#</a>
      Palette 文件
    </h2>
    <p>
      Palette 文件的路径是 <code v-pre>.vuepress/styles/palette.scss</code> 。
    </p>
    <p>你可以利用它来覆盖默认主题的预定义 SASS 变量。</p>
    <details class="custom-container details">
      <summary>点击查看 SASS 变量</summary>
      <div class="language-scss ext-scss line-numbers-mode">
        <pre
          v-pre
          class="language-scss"
        ><code>File <span class="token operator">not</span> found</code></pre>
        <div class="line-numbers" aria-hidden="true"></div>
      </div>
    </details>
    <h2 id="style-文件" tabindex="-1">
      <a class="header-anchor" href="#style-文件" aria-hidden="true">#</a> Style
      文件
    </h2>
    <p>Style 文件的路径是 <code v-pre>.vuepress/styles/index.scss</code> 。</p>
    <p>你可以在这里添加额外的样式，或者覆盖默认样式：</p>
    <div class="language-scss ext-scss line-numbers-mode">
      <pre
        v-pre
        class="language-scss"
      ><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>你也可以利用它来覆盖默认主题的预定义 CSS 变量。</p>
    <details class="custom-container details">
      <summary>点击查看 CSS 变量</summary>
      <div class="language-scss ext-scss line-numbers-mode">
        <pre
          v-pre
          class="language-scss"
        ><code>File <span class="token operator">not</span> found</code></pre>
        <div class="line-numbers" aria-hidden="true"></div>
      </div>
    </details>
    <details class="custom-container details">
      <summary>点击查看暗黑模式 CSS 变量</summary>
      <div class="language-scss ext-scss line-numbers-mode">
        <pre
          v-pre
          class="language-scss"
        ><code>File <span class="token operator">not</span> found</code></pre>
        <div class="line-numbers" aria-hidden="true"></div>
      </div>
    </details>
  </div>
</template>
