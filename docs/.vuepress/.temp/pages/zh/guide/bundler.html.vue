<template>
  <div>
    <h1 id="打包工具" tabindex="-1">
      <a class="header-anchor" href="#打包工具" aria-hidden="true">#</a>
      打包工具
    </h1>
    <p>
      VuePress 一直以来都在使用
      <a
        href="https://webpack.js.org/"
        target="_blank"
        rel="noopener noreferrer"
        >Webpack<ExternalLinkIcon
      /></a>
      作为打包工具来进行网站的开发和构建。从 VuePress v2
      开始，我们还支持使用其他的打包工具，并且现在使用
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"
        >Vite<ExternalLinkIcon
      /></a>
      作为默认的打包工具。当然，你仍然可以选择使用 Webpack 。
    </p>
    <h2 id="选择一个打包工具" tabindex="-1">
      <a class="header-anchor" href="#选择一个打包工具" aria-hidden="true">#</a>
      选择一个打包工具
    </h2>
    <p>
      在使用
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      包时，会自动安装和使用 Vite 打包工具。
    </p>
    <p>
      如果你想改为使用 Webpack 打包工具，那么你可以移除它，改为安装
      <a
        href="https://www.npmjs.com/package/vuepress-webpack"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress-webpack<ExternalLinkIcon
      /></a>
      包：
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
        实际上，
        <a
          href="https://www.npmjs.com/package/vuepress"
          target="_blank"
          rel="noopener noreferrer"
          >vuepress<ExternalLinkIcon
        /></a>
        包只是
        <a
          href="https://www.npmjs.com/package/vuepress-vite"
          target="_blank"
          rel="noopener noreferrer"
          >vuepress-vite<ExternalLinkIcon
        /></a>
        包的一个封装而已。
      </p>
    </div>
    <h2 id="配置打包工具" tabindex="-1">
      <a class="header-anchor" href="#配置打包工具" aria-hidden="true">#</a>
      配置打包工具
    </h2>
    <p>
      一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。
    </p>
    <p>
      通过
      <RouterLink to="/zh/reference/config.html#bundler">bundler</RouterLink>
      配置项，你可以对打包工具进行进阶配置：
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
      你可以参考
      <RouterLink to="/zh/reference/bundler/vite.html"
        >打包工具 &gt; Vite</RouterLink
      >
      和
      <RouterLink to="/zh/reference/bundler/webpack.html"
        >打包工具 &gt; Webpack</RouterLink
      >
      来查看对应打包工具的所有配置项。
    </p>
  </div>
</template>
