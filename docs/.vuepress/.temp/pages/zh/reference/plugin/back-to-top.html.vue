<template>
  <div>
    <h1 id="back-to-top" tabindex="-1">
      <a class="header-anchor" href="#back-to-top" aria-hidden="true">#</a>
      back-to-top
    </h1>
    <NpmBadge package="@vuepress/plugin-back-to-top" />
    <p>
      该插件会给你的站点添加一个
      <em>返回顶部</em>
      按钮。当页面向下滚动时，该按钮会显示在页面的右下角，点击它就会滚动到页面顶部。
    </p>
    <p>该插件已经集成到默认主题中。</p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-back-to-top@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> backToTopPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-back-to-top'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">backToTopPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <h2 id="样式" tabindex="-1">
      <a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式
    </h2>
    <p>你可以通过 CSS 变量来自定义 <em>返回顶部</em> 按钮的样式：</p>
    <div class="language-css ext-css line-numbers-mode">
      <pre v-pre class="language-css"><code>File not found</code></pre>
      <div class="line-numbers" aria-hidden="true"></div>
    </div>
  </div>
</template>
