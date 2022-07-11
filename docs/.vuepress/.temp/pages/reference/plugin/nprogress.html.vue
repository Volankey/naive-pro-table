<template>
  <div>
    <!-- `# nprogress` will be rendered as `<h1 id="nprogress">`, and the id will conflict with the nprogress bar (stupid) -->
    <!-- so we add a 'plugin' suffix in the h1 title, and use title frontmatter to set the page title -->
    <h1 id="nprogress-plugin" tabindex="-1">
      <a class="header-anchor" href="#nprogress-plugin" aria-hidden="true">#</a>
      nprogress Plugin
    </h1>
    <NpmBadge package="@vuepress/plugin-nprogress" />
    <p>
      Integrate
      <a
        href="https://github.com/rstacruz/nprogress"
        target="_blank"
        rel="noopener noreferrer"
        >nprogress<ExternalLinkIcon
      /></a>
      into VuePress, which can provide a progress bar when navigating to another
      page.
    </p>
    <p>This plugin has been integrated into the default theme.</p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-nprogress@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> nprogressPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-nprogress'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">nprogressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
    <h2 id="styles" tabindex="-1">
      <a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles
    </h2>
    <p>You can customize the style of the progress bar via CSS variables:</p>
    <div class="language-css ext-css line-numbers-mode">
      <pre v-pre class="language-css"><code>File not found</code></pre>
      <div class="line-numbers" aria-hidden="true"></div>
    </div>
  </div>
</template>
