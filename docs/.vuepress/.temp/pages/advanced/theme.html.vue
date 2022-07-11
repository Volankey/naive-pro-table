<template>
  <div>
    <h1 id="writing-a-theme" tabindex="-1">
      <a class="header-anchor" href="#writing-a-theme" aria-hidden="true">#</a>
      Writing a Theme
    </h1>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Before reading this guide, you'd better learn the guide of
        <RouterLink to="/advanced/plugin.html">Writing a Plugin</RouterLink>
        first.
      </p>
    </div>
    <h2 id="create-a-theme" tabindex="-1">
      <a class="header-anchor" href="#create-a-theme" aria-hidden="true">#</a>
      Create a Theme
    </h2>
    <p>
      A VuePress theme is a special plugin, which should satisfy the
      <RouterLink to="/reference/theme-api.html">Theme API</RouterLink>. Like
      plugins, a theme should also be a <em>Theme Object</em> or a
      <em>Theme Function</em>, and could be wrapped with a function to receive
      options:
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
      The <code v-pre>layouts</code> field declares the layouts provided by your
      theme. A theme must provide at least two layouts:
      <code v-pre>Layout</code> and <code v-pre>404</code>. The former is to
      provide default layout for common pages, while the latter is to provide
      layout for 404 page.
    </p>
    <p>
      The <code v-pre>Layout</code> layout should contain the
      <RouterLink to="/reference/components.html#content">Content</RouterLink>
      component to display the markdown content:
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
      The <code v-pre>404</code> layout will be used for the
      <code v-pre>404.html</code> page:
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
      You can provide more layouts, and users can change layout via
      <RouterLink to="/reference/frontmatter.html#layout">layout</RouterLink>
      frontmatter.
    </p>
    <h2 id="publish-to-npm" tabindex="-1">
      <a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a>
      Publish to NPM
    </h2>
    <p>
      Also, there are some conventions for theme in
      <a
        href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json"
        target="_blank"
        rel="noopener noreferrer"
        >package.json<ExternalLinkIcon /></a
      >:
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
        Set <code v-pre>name</code> to follow the naming convention:
        <code v-pre>vuepress-theme-xxx</code> or
        <code v-pre>@org/vuepress-theme-xxx</code>, which should be consistent
        with the
        <RouterLink to="/reference/theme-api.html#name">name</RouterLink> field
        of the <em>Theme Object</em>.
      </li>
      <li>
        Set <code v-pre>keywords</code> to include
        <code v-pre>vuepress-theme</code>, so that users can search your theme
        on NPM.
      </li>
    </ul>
  </div>
</template>
