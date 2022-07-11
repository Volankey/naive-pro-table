<template>
  <div>
    <h1 id="开发主题" tabindex="-1">
      <a class="header-anchor" href="#开发主题" aria-hidden="true">#</a>
      开发主题
    </h1>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        在阅读该指南之前，你最好先了解一下
        <RouterLink to="/zh/advanced/plugin.html">开发插件</RouterLink> 指南。
      </p>
    </div>
    <h2 id="创建一个主题" tabindex="-1">
      <a class="header-anchor" href="#创建一个主题" aria-hidden="true">#</a>
      创建一个主题
    </h2>
    <p>
      VuePress 主题是一个特殊的插件，它应该符合
      <RouterLink to="/zh/reference/theme-api.html">主题 API</RouterLink>
      。和插件一样，主题可以是一个 <em>主题对象</em> 或一个
      <em>主题函数</em> ，并且通常通过一个函数来接收配置项：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/utils'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">fooTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vuepress-theme-foo'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layouts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">Layout</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">barTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vuepress-theme-bar'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layouts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">Layout</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
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
      </div>
    </div>
    <p>
      <code v-pre>layouts</code>
      字段声明了你的主题提供的布局。一个主题必须提供至少两个布局：<code v-pre
        >Layout</code
      >
      和 <code v-pre>404</code> 。前者用于提供一般页面的默认布局，后者用于提供
      404 页面的布局。
    </p>
    <p>
      <code v-pre>Layout</code> 布局应该包含
      <RouterLink to="/zh/reference/components.html#content"
        >Content</RouterLink
      >
      组件来展示 Markdown 内容：
    </p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      <code v-pre>404</code> 布局会被用于 <code v-pre>404.html</code> 页面：
    </p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>404 Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      你可以提供多个布局，用户可以通过
      <RouterLink to="/zh/reference/frontmatter.html#layout">layout</RouterLink>
      Frontmatter 来修改布局。
    </p>
    <h2 id="发布到-npm" tabindex="-1">
      <a class="header-anchor" href="#发布到-npm" aria-hidden="true">#</a>
      发布到 NPM
    </h2>
    <p>
      同样的，对于主题也有
      <a
        href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json"
        target="_blank"
        rel="noopener noreferrer"
        >package.json<ExternalLinkIcon
      /></a>
      相关的约定：
    </p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"vuepress-theme-foo"</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"vuepress-theme"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        将 <code v-pre>name</code> 按照约定命名：
        <code v-pre>vuepress-theme-xxx</code> 或
        <code v-pre>@org/vuepress-theme-xxx</code> ，它应该和
        <em>主题对象</em> 的
        <RouterLink to="/zh/reference/theme-api.html#name">name</RouterLink>
        字段保持一致。
      </li>
      <li>
        在 <code v-pre>keywords</code> 中包含
        <code v-pre>vuepress-theme</code> ，这样用户可以在 NPM
        上搜索到你的主题。
      </li>
    </ul>
  </div>
</template>
