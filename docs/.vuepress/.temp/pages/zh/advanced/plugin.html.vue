<template>
  <div>
    <h1 id="开发插件" tabindex="-1">
      <a class="header-anchor" href="#开发插件" aria-hidden="true">#</a>
      开发插件
    </h1>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        在阅读该指南之前，你最好先了解一下 VuePress 的
        <RouterLink to="/zh/advanced/architecture.html">架构</RouterLink> 。
      </p>
    </div>
    <h2 id="创建一个插件" tabindex="-1">
      <a class="header-anchor" href="#创建一个插件" aria-hidden="true">#</a>
      创建一个插件
    </h2>
    <p>
      插件是一个符合
      <RouterLink to="/zh/reference/plugin-api.html">插件 API</RouterLink>
      的普通 JavaScript 对象，称之为 <em>插件对象</em> ：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> fooPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      插件还可以是一个接收
      <RouterLink to="/zh/reference/node-api.html#app">App 实例</RouterLink>
      作为参数，且返回值为 <em>插件对象</em> 的函数，称之为 <em>插件函数</em> ：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">barPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-bar'</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
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
      </div>
    </div>
    <p>
      插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将
      <em>插件对象</em> 或者
      <em>插件函数</em> 作为返回值。于是，你的插件应该转换成这样的形式：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">fooPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">barPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-bar'</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <h2 id="发布到-npm" tabindex="-1">
      <a class="header-anchor" href="#发布到-npm" aria-hidden="true">#</a>
      发布到 NPM
    </h2>
    <p>
      在创建了插件之后，你需要在
      <a
        href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json"
        target="_blank"
        rel="noopener noreferrer"
        >package.json<ExternalLinkIcon
      /></a>
      文件中遵循一定的约定，然后再将其发布到 NPM 上：
    </p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"vuepress-plugin-foo"</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"vuepress-plugin"</span>
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
        将 <code v-pre>name</code> 按照约定命名，即
        <code v-pre>vuepress-plugin-xxx</code> 或
        <code v-pre>@org/vuepress-plugin-xxx</code> ，它应该和
        <em>插件对象</em> 的
        <RouterLink to="/zh/reference/plugin-api.html#name">name</RouterLink>
        字段保持一致。
      </li>
      <li>
        在 <code v-pre>keywords</code> 中包含
        <code v-pre>vuepress-plugin</code> ，这样用户可以在 NPM
        上搜索到你的插件。
      </li>
    </ul>
  </div>
</template>
