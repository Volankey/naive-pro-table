<template>
  <div>
    <h1 id="vite" tabindex="-1">
      <a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite
    </h1>
    <NpmBadge package="@vuepress/bundler-vite" />
    <p>
      Vite 打包工具是由
      <a
        href="https://www.npmjs.com/package/@vuepress/bundler-vite"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/bundler-vite<ExternalLinkIcon
      /></a>
      包提供的。它是
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      包的依赖之一，当然你也可以单独安装它：
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/bundler-vite@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <p>Vite 打包工具的配置项：</p>
    <CodeGroup>
      <CodeGroupItem title="JS" active>
        <div class="language-javascript ext-js line-numbers-mode">
          <pre
            v-pre
            class="language-javascript"
          ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/bundler-vite'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">viteOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vuePluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
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
          </div>
        </div>
      </CodeGroupItem>
      <CodeGroupItem title="TS">
        <div class="language-typescript ext-ts line-numbers-mode">
          <pre
            v-pre
            class="language-typescript"
          ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      </CodeGroupItem>
    </CodeGroup>
    <h3 id="viteoptions" tabindex="-1">
      <a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a>
      viteOptions
    </h3>
    <ul>
      <li>
        <p>详情：</p>
        <p>接收 Vite 的所有配置项。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a
              href="https://cn.vitejs.dev/config/"
              target="_blank"
              rel="noopener noreferrer"
              >Vite &gt; Config<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="vuepluginoptions" tabindex="-1">
      <a class="header-anchor" href="#vuepluginoptions" aria-hidden="true">#</a>
      vuePluginOptions
    </h3>
    <ul>
      <li>
        <p>详情：</p>
        <p>
          接收
          <a
            href="https://www.npmjs.com/package/@vitejs/plugin-vue"
            target="_blank"
            rel="noopener noreferrer"
            >@vitejs/plugin-vue<ExternalLinkIcon
          /></a>
          的所有配置项。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a
              href="https://cn.vitejs.dev/plugins/#vitejsplugin-vue"
              target="_blank"
              rel="noopener noreferrer"
              >Vite &gt; 插件 &gt; 官方插件<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="常见问题" tabindex="-1">
      <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a>
      常见问题
    </h2>
    <h3 id="ssr-externals-问题" tabindex="-1">
      <a class="header-anchor" href="#ssr-externals-问题" aria-hidden="true"
        >#</a
      >
      SSR Externals 问题
    </h3>
    <p>
      当你引入一个第三方库（如
      <code v-pre>foo-lib</code>）时，你可能会在构建时遇到一个常见的错误：
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code>Error <span class="token punctuation">[</span>ERR_REQUIRE_ESM<span class="token punctuation">]</span>: Must use <span class="token function">import</span> to load ES Module: /path/to/foo-lib
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>此时，你需要设置 <code v-pre>ssr.noExternal</code> 配置项来解决它：</p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-expect-error: vite 还没有给 ssr 配置项提供类型</span>
      ssr<span class="token operator">:</span> <span class="token punctuation">{</span>
        noExternal<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo-lib'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      VuePress 使用 Vite 服务端渲染 (SSR) 来将 Markdown 预渲染成 HTML
      文件。尽管它可以在 VuePress
      中正常使用，但该功能仍然被标记为实验性能力，因此可能会有一些小问题。想要完全理解上面的报错原因，你可以去了解一下
      <a
        href="https://cn.vitejs.dev/guide/ssr.html#ssr-externals"
        target="_blank"
        rel="noopener noreferrer"
        >Vite SSR Externals 文档<ExternalLinkIcon
      /></a>
      。
    </p>
  </div>
</template>
