<template>
  <div>
    <h1 id="theme" tabindex="-1">
      <a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme
    </h1>
    <p>
      VuePress theme can provide layouts, styles and many other features for
      you, helping you to focus on writing Markdown content.
    </p>
    <h2 id="default-theme" tabindex="-1">
      <a class="header-anchor" href="#default-theme" aria-hidden="true">#</a>
      Default Theme
    </h2>
    <p>
      VuePress has a default theme out of the box, which is applied to our
      documentation site you are currently browsing.
    </p>
    <p>
      If you don't specify the theme to use, the default theme will be used
      automatically.
    </p>
    <p>
      To configure the default theme, you need to import and use it in your
      config file via the
      <RouterLink to="/reference/config.html#theme">theme</RouterLink> option:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vuepress'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// default theme config</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
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
      The default theme provides basic but useful features for documentation
      site, you can check out
      <RouterLink to="/reference/default-theme/config.html"
        >Default Theme Config Reference</RouterLink
      >
      for a full list of config.
    </p>
    <p>
      However, you might think it is not good enough. Or, you want to build a
      different type of site, for example, a blog, instead of a documentation.
      Then, you can try to use a community theme or create a local theme.
    </p>
    <h2 id="community-theme" tabindex="-1">
      <a class="header-anchor" href="#community-theme" aria-hidden="true">#</a>
      Community Theme
    </h2>
    <p>
      Community users have created lots of theme and published them to
      <a
        href="https://www.npmjs.com/search?q=keywords:vuepress-theme"
        target="_blank"
        rel="noopener noreferrer"
        >NPM<ExternalLinkIcon /></a
      >. You should check the theme's own documentation for detailed guide.
    </p>
    <h2 id="local-theme" tabindex="-1">
      <a class="header-anchor" href="#local-theme" aria-hidden="true">#</a>
      Local Theme
    </h2>
    <p>
      If you want to use your own custom theme but don't want to publish it, you
      can create a local theme. Refer to
      <RouterLink to="/advanced/theme.html"
        >Advanced &gt; Writing a Theme</RouterLink
      >
      for how to write your own theme.
    </p>
  </div>
</template>
