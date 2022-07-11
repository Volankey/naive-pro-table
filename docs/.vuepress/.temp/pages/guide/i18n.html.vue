<template>
  <div>
    <h1 id="i18n" tabindex="-1">
      <a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n
    </h1>
    <h2 id="site-i18n-config" tabindex="-1">
      <a class="header-anchor" href="#site-i18n-config" aria-hidden="true">#</a>
      Site I18n Config
    </h2>
    <p>
      To take advantage of multi-language support in VuePress, you first need to
      use the following file and directory structure:
    </p>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
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
      </div>
    </div>
    <p>
      Then, specify the <code v-pre>locales</code> option in your
      <RouterLink to="/guide/configuration.html#config-file"
        >config file</RouterLink
      >:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// The key is the path for the locale to be nested under.</span>
    <span class="token comment">// As a special case, the default locale can use '/' as its path.</span>
    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'VuePress'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Vue-powered Static Site Generator'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'VuePress'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Vue 驱动的静态网站生成器'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      If a locale does not have a <code v-pre>lang</code>,
      <code v-pre>title</code>, <code v-pre>description</code> or
      <code v-pre>head</code>, VuePress will fallback to the root-level values.
      You can omit the root level config as long as they are provided in each
      locale.
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#locales">locales</RouterLink>
      </p>
    </div>
    <h2 id="theme-i18n-config" tabindex="-1">
      <a class="header-anchor" href="#theme-i18n-config" aria-hidden="true"
        >#</a
      >
      Theme I18n Config
    </h2>
    <p>
      VuePress does not restrict how themes provide multi-language support, so
      each theme may have different way to handle i18n, and some themes may not
      provide multi-language support at all. You'd better refer to the theme
      documentation for detailed guide.
    </p>
    <p>
      If you are using default theme, the multi-language support is the same as
      above:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vuepress'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">'English'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">'简体中文'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Config reference:
        <RouterLink to="/reference/default-theme/config.html#locales"
          >Default Theme &gt; locales</RouterLink
        >
      </p>
    </div>
  </div>
</template>
