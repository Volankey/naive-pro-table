<template>
  <div>
    <h1 id="passing-data-to-client-code" tabindex="-1">
      <a
        class="header-anchor"
        href="#passing-data-to-client-code"
        aria-hidden="true"
        >#</a
      >
      Passing Data to Client Code
    </h1>
    <p>
      As we know, VuePress plugin entries and theme entries are processed in
      Node side, but sometimes you might need to pass data to client side. For
      example, you want to generate different data when users use different
      options.
    </p>
    <h2 id="use-define-hook" tabindex="-1">
      <a class="header-anchor" href="#use-define-hook" aria-hidden="true">#</a>
      Use <code v-pre>define</code> Hook
    </h2>
    <p>
      Plugin API provides a
      <RouterLink to="/reference/plugin-api.html#define">define</RouterLink>
      hook to define global constants for client code. You can make use of it to
      pass data to client.
    </p>
    <p>First, define some constants in <code v-pre>define</code> hook:</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__FOO__</span><span class="token operator">:</span> options<span class="token punctuation">.</span>foo <span class="token operator">||</span> <span class="token string">'str'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__OBJ__</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> options<span class="token punctuation">.</span>bar <span class="token operator">||</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <p>Then use them in client code directly:</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> foo <span class="token operator">=</span> __FOO__
<span class="token keyword">const</span> obj <span class="token operator">=</span> __OBJ__
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      If you are using TypeScript in client code, you may need to declare the
      types of the global constants manually:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">declare</span> <span class="token keyword">const</span> __FOO__<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="write-and-load-temp-files" tabindex="-1">
      <a
        class="header-anchor"
        href="#write-and-load-temp-files"
        aria-hidden="true"
        >#</a
      >
      Write and Load Temp Files
    </h2>
    <p>
      If you need to achieve some more complex features, you can write temp
      files and load them dynamically in client code.
    </p>
    <p>
      First, write a temp file <code v-pre>foo.js</code>, which will be
      generated in the
      <RouterLink to="/reference/config.html#temp">temp</RouterLink> directory:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">onPrepared</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write temp file</span>
    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">writeTemp</span><span class="token punctuation">(</span><span class="token string">'foo.js'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export const foo = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      Then, load the temp file via <code v-pre>@temp</code> alias in client
      code:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@temp/foo'</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      If you are using TypeScript in client code, you may need to declare the
      type of the temp module manually:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'@temp/foo'</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
  </div>
</template>
