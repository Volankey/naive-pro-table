<template>
  <div>
    <h1 id="主题" tabindex="-1">
      <a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题
    </h1>
    <p>
      VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown
      内容的写作。
    </p>
    <h2 id="默认主题" tabindex="-1">
      <a class="header-anchor" href="#默认主题" aria-hidden="true">#</a>
      默认主题
    </h2>
    <p>
      VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。
    </p>
    <p>如果你不指定要使用的主题，那么就会自动使用默认主题。</p>
    <p>
      为了配置默认主题，你需要在你的配置文件中通过
      <RouterLink to="/zh/reference/config.html#theme">theme</RouterLink>
      配置项来使用它：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vuepress'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      默认主题为文档网站提供了基础且实用的功能，你可以前往
      <RouterLink to="/zh/reference/default-theme/config.html"
        >默认主题配置参考</RouterLink
      >
      获取全部的配置列表。
    </p>
    <p>
      然而，你可能觉得默认主题不够出色，又或者你不想搭建一个文档网站，而是一个其他类型的网站，比如博客。此时，你可以尝试使用社区主题或者创建本地主题。
    </p>
    <h2 id="社区主题" tabindex="-1">
      <a class="header-anchor" href="#社区主题" aria-hidden="true">#</a>
      社区主题
    </h2>
    <p>
      社区用户创建了很多主题，并将它们发布到了
      <a
        href="https://www.npmjs.com/search?q=keywords:vuepress-theme"
        target="_blank"
        rel="noopener noreferrer"
        >NPM<ExternalLinkIcon
      /></a>
      上。查看主题本身的文档可以获取更详细的指引。
    </p>
    <h2 id="本地主题" tabindex="-1">
      <a class="header-anchor" href="#本地主题" aria-hidden="true">#</a>
      本地主题
    </h2>
    <p>
      如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。前往
      <RouterLink to="/zh/advanced/theme.html">深入 &gt; 开发主题</RouterLink>
      学习如何开发你自己的主题。
    </p>
  </div>
</template>
