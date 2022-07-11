<template>
  <div>
    <h1 id="开发一个可继承的主题" tabindex="-1">
      <a class="header-anchor" href="#开发一个可继承的主题" aria-hidden="true"
        >#</a
      >
      开发一个可继承的主题
    </h1>
    <p>
      有时用户可能希望对一个主题进行一些小改动，但是又不想 Fork 并修改整个项目。
    </p>
    <p>
      借助于
      <RouterLink to="/zh/reference/theme-api.html">主题 API</RouterLink>
      ，你可以让用户继承你的主题，允许用户对你的主题进行改动。
    </p>
    <p>
      你肯定已经知道了如何
      <RouterLink to="/zh/reference/default-theme/extending.html"
        >继承默认主题</RouterLink
      >
      。接下来我们将介绍如何让你的主题像默认主题一样被用户继承。
    </p>
    <h2 id="布局插槽" tabindex="-1">
      <a class="header-anchor" href="#布局插槽" aria-hidden="true">#</a>
      布局插槽
    </h2>
    <p>
      这种方式需要你来决定主题的哪些部分是可以被扩展的，它更适合用于一些常见的自定义需求，比如页眉或页脚。
    </p>
    <p>你只需要在你的布局文件中提供 slots ，并告诉用户如何使用它们即可：</p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-theme-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-header<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-footer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
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
    <h2 id="组件别名" tabindex="-1">
      <a class="header-anchor" href="#组件别名" aria-hidden="true">#</a>
      组件别名
    </h2>
    <p>
      这种方式需要你考虑清楚你的主题的哪些组件可以被替换，并且你需要将组件拆分到合适的粒度。
    </p>
    <p>首先，为你主题的可替换组件设置 <code v-pre>alias</code> 别名：</p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/core'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> fooTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'vuepress-theme-foo'</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 为可替换的组件设置别名</span>
      <span class="token string-property property">'@theme/Navbar.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'components/Navbar.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'@theme/Sidebar.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'components/Sidebar.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <p>然后，在你的主题中通过别名来使用这些组件：</p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'@theme/Navbar.vue'</span>
<span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">'@theme/Sidebar.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-theme-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navbar</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sidebar</span> <span class="token punctuation">/></span></span>
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
      这样，用户在继承或使用你的主题时，就可以通过覆盖
      <code v-pre>alias</code> 来替换特定的组件了。
    </p>
  </div>
</template>
