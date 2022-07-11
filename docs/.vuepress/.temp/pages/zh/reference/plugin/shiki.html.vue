<template>
  <div>
    <h1 id="shiki" tabindex="-1">
      <a class="header-anchor" href="#shiki" aria-hidden="true">#</a> shiki
    </h1>
    <NpmBadge package="@vuepress/plugin-shiki" />
    <p>
      该插件使用
      <a
        href="https://shiki.matsu.io/"
        target="_blank"
        rel="noopener noreferrer"
        >Shiki<ExternalLinkIcon
      /></a>
      来为 Markdown 代码块启用代码高亮。
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        <a
          href="https://shiki.matsu.io/"
          target="_blank"
          rel="noopener noreferrer"
          >Shiki<ExternalLinkIcon
        /></a>
        是 VSCode 正在使用的代码高亮器。它具有更高的保真度，但比
        <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer"
          >Prism.js<ExternalLinkIcon
        /></a>
        要慢一些，特别是在有大量代码块需要处理的时候。
      </p>
      <p>
        你可以考虑在
        <code v-pre>dev</code> 模式下禁用该插件来获取更好的开发体验。
      </p>
    </div>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-shiki@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> shikiPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-shiki'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">shikiPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h3 id="theme" tabindex="-1">
      <a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>IThemeRegistration</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'nord'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>Shiki 的主题。</p>
        <p>
          该配置项会被传递到 Shiki 的
          <code v-pre>getHighlighter()</code> 方法中。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a
              href="https://github.com/shikijs/shiki/blob/master/docs/themes.md"
              target="_blank"
              rel="noopener noreferrer"
              >shiki &gt; themes<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="langs" tabindex="-1">
      <a class="header-anchor" href="#langs" aria-hidden="true">#</a> langs
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>(Lang | ILanguageRegistration)[]</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>Shiki 的语言。</p>
        <p>
          该配置项会被传递到 Shiki 的
          <code v-pre>getHighlighter()</code> 方法中。
        </p>
        <p>如果没有传入语言， Shiki 会自动加载所有可用的语言。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a
              href="https://github.com/shikijs/shiki/blob/master/docs/languages.md"
              target="_blank"
              rel="noopener noreferrer"
              >shiki &gt; languages<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
