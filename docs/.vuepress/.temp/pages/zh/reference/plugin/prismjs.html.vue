<template>
  <div>
    <h1 id="prismjs" tabindex="-1">
      <a class="header-anchor" href="#prismjs" aria-hidden="true">#</a> prismjs
    </h1>
    <NpmBadge package="@vuepress/plugin-prismjs" />
    <p>
      该插件使用
      <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer"
        >Prism.js<ExternalLinkIcon
      /></a>
      来为 Markdown 代码块启用代码高亮。
    </p>
    <p>该插件已经集成到默认主题中。</p>
    <p>
      需要注意的是，该插件仅会给代码块添加 HTML
      标记，而不会添加样式。当你在一个自定义主题中使用它时，可能需要自己选择并引入
      Prism.js 样式主题。
    </p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-prismjs@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> prismjsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-prismjs'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">prismjsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <h3 id="preloadlanguages" tabindex="-1">
      <a class="header-anchor" href="#preloadlanguages" aria-hidden="true">#</a>
      preloadLanguages
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>['markdown', 'jsdoc', 'yaml']</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>需要预加载的语言。</p>
        <p>默认情况下，语言会在解析 Markdown 文件时按需加载。</p>
        <p>
          然而， Prism.js 在动态加载语言时可能会遇到
          <a
            href="https://github.com/PrismJS/prism/issues/2716"
            target="_blank"
            rel="noopener noreferrer"
            >一些潜在的问题<ExternalLinkIcon
          /></a>
          。为了避免这些问题，你可以使用该配置项来预加载一些语言。
        </p>
      </li>
    </ul>
  </div>
</template>
