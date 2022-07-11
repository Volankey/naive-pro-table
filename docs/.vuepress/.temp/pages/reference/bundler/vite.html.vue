<template>
  <div>
    <h1 id="vite" tabindex="-1">
      <a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite
    </h1>
    <NpmBadge package="@vuepress/bundler-vite" />
    <p>
      Vite bundler is provided by
      <a
        href="https://www.npmjs.com/package/@vuepress/bundler-vite"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/bundler-vite<ExternalLinkIcon
      /></a>
      package. It is a dependency of the
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      package, and you can also install it separately.
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
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <p>Reference of vite bundler options:</p>
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
        <p>Details:</p>
        <p>Accepts all options of Vite.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://vitejs.dev/config/"
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
        <p>Details:</p>
        <p>
          Accepts all options of
          <a
            href="https://www.npmjs.com/package/@vitejs/plugin-vue"
            target="_blank"
            rel="noopener noreferrer"
            >@vitejs/plugin-vue<ExternalLinkIcon /></a
          >.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://vitejs.dev/plugins/#vitejs-plugin-vue"
              target="_blank"
              rel="noopener noreferrer"
              >Vite &gt; Plugins &gt; Official Plugins<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="faq" tabindex="-1">
      <a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ
    </h2>
    <h3 id="ssr-externals-issue" tabindex="-1">
      <a class="header-anchor" href="#ssr-externals-issue" aria-hidden="true"
        >#</a
      >
      SSR Externals Issue
    </h3>
    <p>
      When you are importing a third-party library (called
      <code v-pre>foo-lib</code>), a common error your might meet in build is:
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
    <p>
      To get rid of it, you need to set
      <code v-pre>ssr.noExternal</code> option:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-expect-error: vite does not provide types for ssr options yet</span>
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
      VuePress is using Vite server-side rendering (SSR) to pre-render markdown
      to HTML files. Although it's quite usable and work well with VuePress,
      it's still marked as experimental and might have some issues. To fully
      understand what the above error is, reading
      <a
        href="https://vitejs.dev/guide/ssr.html#ssr-externals"
        target="_blank"
        rel="noopener noreferrer"
        >Vite SSR Externals Guide<ExternalLinkIcon
      /></a>
      would be helpful.
    </p>
  </div>
</template>
