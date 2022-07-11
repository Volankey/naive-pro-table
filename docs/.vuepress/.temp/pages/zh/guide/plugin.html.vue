<template>
  <div>
    <h1 id="插件" tabindex="-1">
      <a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件
    </h1>
    <p>
      借助于
      <RouterLink to="/zh/reference/plugin-api.html">插件 API</RouterLink> ，
      VuePress 插件可以为你提供各种不同的功能。
    </p>
    <h2 id="社区插件" tabindex="-1">
      <a class="header-anchor" href="#社区插件" aria-hidden="true">#</a>
      社区插件
    </h2>
    <p>
      社区用户创建了很多插件，并将它们发布到了
      <a
        href="https://www.npmjs.com/search?q=keywords:vuepress-plugin"
        target="_blank"
        rel="noopener noreferrer"
        >NPM<ExternalLinkIcon
      /></a>
      上。 VuePress 团队也在
      <a
        href="https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress<ExternalLinkIcon
      /></a>
      Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。
    </p>
    <p>
      一般而言，你需要将插件放入到
      <RouterLink to="/zh/reference/config.html#plugins">plugins</RouterLink>
      配置项中来使用它。举例来说，你可以使用
      <RouterLink to="/zh/reference/plugin/google-analytics.html"
        >@vuepress/plugin-google-analytics</RouterLink
      >
      来使用 Google Analytics ：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-google-analytics'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span>
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
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。
      </p>
      <p>
        然而，部分插件是可以被多次使用的（例如
        <RouterLink to="/zh/reference/plugin/container.html"
          >@vuepress/plugin-container</RouterLink
        >），你应该查看插件本身的文档来获取详细指引。
      </p>
    </div>
    <h2 id="本地插件" tabindex="-1">
      <a class="header-anchor" href="#本地插件" aria-hidden="true">#</a>
      本地插件
    </h2>
    <p>如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。</p>
    <p>
      我们推荐你直接将
      <RouterLink
        to="/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"
        >配置文件</RouterLink
      >
      作为插件使用，因为
      <RouterLink to="/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api"
        >几乎所有的插件 API 都可以在配置文件中使用</RouterLink
      >，这在绝大多数场景下都更为方便。
    </p>
    <p>
      但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./path/to/my-plugin.js'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
    <p>
      前往
      <RouterLink to="/zh/advanced/plugin.html">深入 &gt; 开发插件</RouterLink>
      学习如何开发你自己的插件。
    </p>
  </div>
</template>
