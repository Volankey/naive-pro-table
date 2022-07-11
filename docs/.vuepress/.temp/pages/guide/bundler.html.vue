<template>
  <div>
    <h1 id="bundler" tabindex="-1">
      <a class="header-anchor" href="#bundler" aria-hidden="true">#</a> Bundler
    </h1>
    <p>
      VuePress has been using
      <a
        href="https://webpack.js.org/"
        target="_blank"
        rel="noopener noreferrer"
        >Webpack<ExternalLinkIcon
      /></a>
      as the bundler to dev and build sites. Since VuePress v2, other bundlers
      are also supported, and now we are using
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"
        >Vite<ExternalLinkIcon
      /></a>
      as the default bundler. Of course, you can still choose to use Webpack.
    </p>
    <h2 id="choose-a-bundler" tabindex="-1">
      <a class="header-anchor" href="#choose-a-bundler" aria-hidden="true">#</a>
      Choose a Bundler
    </h2>
    <p>
      When using the
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      package, Vite bundler is installed and used automatically.
    </p>
    <p>
      If you want to use Webpack bundler instead, you can remove it and install
      the
      <a
        href="https://www.npmjs.com/package/vuepress-webpack"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress-webpack<ExternalLinkIcon
      /></a>
      package instead:
    </p>
    <CodeGroup>
      <CodeGroupItem title="YARN" active>
        <div class="language-bash ext-sh line-numbers-mode">
          <pre
            v-pre
            class="language-bash"
          ><code><span class="token function">yarn</span> remove vuepress
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-webpack@next
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
            <div class="line-number"></div>
          </div>
        </div>
      </CodeGroupItem>
      <CodeGroupItem title="NPM">
        <div class="language-bash ext-sh line-numbers-mode">
          <pre
            v-pre
            class="language-bash"
          ><code><span class="token function">npm</span> uninstall vuepress
<span class="token function">npm</span> <span class="token function">install</span> -D vuepress-webpack@next
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
            <div class="line-number"></div>
          </div>
        </div>
      </CodeGroupItem>
    </CodeGroup>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        In fact, the
        <a
          href="https://www.npmjs.com/package/vuepress"
          target="_blank"
          rel="noopener noreferrer"
          >vuepress<ExternalLinkIcon
        /></a>
        package is just a wrapper of the
        <a
          href="https://www.npmjs.com/package/vuepress-vite"
          target="_blank"
          rel="noopener noreferrer"
          >vuepress-vite<ExternalLinkIcon
        /></a>
        package.
      </p>
    </div>
    <h2 id="configure-bundler" tabindex="-1">
      <a class="header-anchor" href="#configure-bundler" aria-hidden="true"
        >#</a
      >
      Configure Bundler
    </h2>
    <p>
      Generally, you could use a bundler without extra configuration, because we
      have already configured them properly to work with VuePress.
    </p>
    <p>
      You can configure bundler for advanced usage via the
      <RouterLink to="/reference/config.html#bundler">bundler</RouterLink>
      option:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vuepress'</span><span class="token punctuation">)</span>
<span class="token comment">// const { webpackBundler } = require('vuepress-webpack')</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">vuePluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">isCustomElement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=></span> tag <span class="token operator">===</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
    <p>
      You can refer to
      <RouterLink to="/reference/bundler/vite.html"
        >Bundlers &gt; Vite</RouterLink
      >
      and
      <RouterLink to="/reference/bundler/webpack.html"
        >Bundlers &gt; Webpack</RouterLink
      >
      to check out all options of the corresponding bundler.
    </p>
  </div>
</template>
