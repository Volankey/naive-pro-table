<template>
  <div>
    <h1 id="prismjs" tabindex="-1">
      <a class="header-anchor" href="#prismjs" aria-hidden="true">#</a> prismjs
    </h1>
    <NpmBadge package="@vuepress/plugin-prismjs" />
    <p>
      This plugin will enable syntax highlighting for markdown code fence with
      <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer"
        >Prism.js<ExternalLinkIcon /></a
      >.
    </p>
    <p>This plugin has been integrated into the default theme.</p>
    <p>
      Notice that this plugin would only tokenize the code fence without adding
      styles. When using it with a custom theme, you may need to choose and
      import Prism.js style theme yourself.
    </p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
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
    <h3 id="preloadlanguages" tabindex="-1">
      <a class="header-anchor" href="#preloadlanguages" aria-hidden="true">#</a>
      preloadLanguages
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>['markdown', 'jsdoc', 'yaml']</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Languages to preload.</p>
        <p>
          By default, languages will be loaded on demand when parsing markdown
          files.
        </p>
        <p>
          However, Prism.js has
          <a
            href="https://github.com/PrismJS/prism/issues/2716"
            target="_blank"
            rel="noopener noreferrer"
            >some potential issues<ExternalLinkIcon
          /></a>
          about loading languages dynamically. To avoid them, you can preload
          languages via this option.
        </p>
      </li>
    </ul>
  </div>
</template>
