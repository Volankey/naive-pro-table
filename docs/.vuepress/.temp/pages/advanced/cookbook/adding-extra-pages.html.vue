<template>
  <div>
    <h1 id="adding-extra-pages" tabindex="-1">
      <a class="header-anchor" href="#adding-extra-pages" aria-hidden="true"
        >#</a
      >
      Adding Extra Pages
    </h1>
    <p>
      Sometimes you might want to add some extra pages without creating a
      markdown file in the source directory.
    </p>
    <p>
      With the help of
      <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink> and
      <RouterLink to="/reference/node-api.html">Node API</RouterLink>, we can do
      that with ease.
    </p>
    <h2 id="add-a-default-homepage" tabindex="-1">
      <a class="header-anchor" href="#add-a-default-homepage" aria-hidden="true"
        >#</a
      >
      Add a Default Homepage
    </h2>
    <p>
      As a theme author, you may not require users to create a
      <code v-pre>/README.md</code> file as the homepage, but you want to
      provide a default one:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// all pages have been loaded after initialization</span>
  <span class="token keyword">async</span> <span class="token function">onInitialized</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if the homepage does not exist</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// create a homepage</span>
      <span class="token keyword">const</span> homepage <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPage</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
        <span class="token comment">// set frontmatter</span>
        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>
          layout<span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// set markdown content</span>
        content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\
# Welcome to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">

This is the default homepage
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// add it to `app.pages`</span>
      app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>homepage<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
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
  </div>
</template>
