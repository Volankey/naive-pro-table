<template>
  <div>
    <h1 id="shiki" tabindex="-1">
      <a class="header-anchor" href="#shiki" aria-hidden="true">#</a> shiki
    </h1>
    <NpmBadge package="@vuepress/plugin-shiki" />
    <p>
      This plugin will enable syntax highlighting for markdown code fence with
      <a
        href="https://shiki.matsu.io/"
        target="_blank"
        rel="noopener noreferrer"
        >Shiki<ExternalLinkIcon /></a
      >.
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
        is the syntax highlighter being used by VSCode. It has higher fidelity,
        but it is slower than
        <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer"
          >Prism.js<ExternalLinkIcon /></a
        >.
      </p>
      <p>
        You could consider disabling this plugin in <code v-pre>dev</code> mode
        to get better development experience.
      </p>
    </div>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
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
      <span class="token comment">// options</span>
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
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="theme" tabindex="-1">
      <a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>IThemeRegistration</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'nord'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Theme of shiki.</p>
        <p>
          This option will be forwarded to
          <code v-pre>getHighlighter()</code> method of shiki.
        </p>
      </li>
      <li>
        <p>Also see:</p>
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
        <p>Type: <code v-pre>(Lang | ILanguageRegistration)[]</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Languages of shiki.</p>
        <p>
          This option will be forwarded to
          <code v-pre>getHighlighter()</code> method of shiki.
        </p>
        <p>
          If no languages are provided, shiki will load all available languages
          automatically.
        </p>
      </li>
      <li>
        <p>Also see:</p>
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
