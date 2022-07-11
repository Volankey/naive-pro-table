<template>
  <div>
    <h1 id="writing-a-plugin" tabindex="-1">
      <a class="header-anchor" href="#writing-a-plugin" aria-hidden="true">#</a>
      Writing a Plugin
    </h1>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Before reading this guide, you'd better learn the VuePress
        <RouterLink to="/advanced/architecture.html">architecture</RouterLink>
        first.
      </p>
    </div>
    <h2 id="create-a-plugin" tabindex="-1">
      <a class="header-anchor" href="#create-a-plugin" aria-hidden="true">#</a>
      Create a Plugin
    </h2>
    <p>
      A plugin should be a plain JavaScript object that satisfies the
      <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>, which
      is called a <em>Plugin Object</em>:
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
      A plugin could also be a function that receives the
      <RouterLink to="/reference/node-api.html#app">app instace</RouterLink> as
      the param and returns a <em>Plugin Object</em>, which is called a
      <em>Plugin Function</em>:
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
      A plugin usually needs to allow user options, so we typically provide
      users with a function to receive options, and returns a
      <em>Plugin Object</em> or a <em>Plugin Function</em>. Then your plugin
      should be converted like this:
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
    <h2 id="publish-to-npm" tabindex="-1">
      <a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a>
      Publish to NPM
    </h2>
    <p>
      After creating a plugin, you should follow some conventions in the
      <a
        href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json"
        target="_blank"
        rel="noopener noreferrer"
        >package.json<ExternalLinkIcon
      /></a>
      file before publishing it to NPM:
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
        Set <code v-pre>name</code> to follow the naming convention, i.e.
        <code v-pre>vuepress-plugin-xxx</code> or
        <code v-pre>@org/vuepress-plugin-xxx</code>, which should be consistent
        with the
        <RouterLink to="/reference/plugin-api.html#name">name</RouterLink> field
        of the <em>Plugin Object</em>.
      </li>
      <li>
        Set <code v-pre>keywords</code> to include
        <code v-pre>vuepress-plugin</code>, so that users can search your plugin
        on NPM.
      </li>
    </ul>
  </div>
</template>
