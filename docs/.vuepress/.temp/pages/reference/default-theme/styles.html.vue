<template>
  <div>
    <h1 id="styles" tabindex="-1">
      <a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <p>
      Default theme uses
      <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"
        >SASS<ExternalLinkIcon
      /></a>
      as the CSS pre-processor.
    </p>
    <p>
      Users can custom style variables via
      <a href="#palette-file">palette file</a>, and add extra styles via
      <a href="#style-file">style file</a>.
    </p>
    <h2 id="palette-file" tabindex="-1">
      <a class="header-anchor" href="#palette-file" aria-hidden="true">#</a>
      Palette File
    </h2>
    <p>
      The path of palette file is
      <code v-pre>.vuepress/styles/palette.scss</code>.
    </p>
    <p>
      You can make use of it to override predefined SASS variables of default
      theme.
    </p>
    <details class="custom-container details">
      <summary>Click to expand SASS variables</summary>
      <div class="language-scss ext-scss line-numbers-mode">
        <pre
          v-pre
          class="language-scss"
        ><code>File <span class="token operator">not</span> found</code></pre>
        <div class="line-numbers" aria-hidden="true"></div>
      </div>
    </details>
    <h2 id="style-file" tabindex="-1">
      <a class="header-anchor" href="#style-file" aria-hidden="true">#</a> Style
      File
    </h2>
    <p>
      The path of style file is <code v-pre>.vuepress/styles/index.scss</code>.
    </p>
    <p>You can add extra styles here, or override default styles:</p>
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
    <p>
      You can also make use of it to override predefined CSS variables of
      default theme.
    </p>
    <details class="custom-container details">
      <summary>Click to expand CSS variables</summary>
      <div class="language-scss ext-scss line-numbers-mode">
        <pre
          v-pre
          class="language-scss"
        ><code>File <span class="token operator">not</span> found</code></pre>
        <div class="line-numbers" aria-hidden="true"></div>
      </div>
    </details>
    <details class="custom-container details">
      <summary>Click to expand dark mode CSS variables</summary>
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
