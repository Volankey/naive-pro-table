<template>
  <div>
    <h1 id="extending" tabindex="-1">
      <a class="header-anchor" href="#extending" aria-hidden="true">#</a>
      Extending
    </h1>
    <p>
      VuePress default theme is widely used by users, so it is designed to be
      extendable, allowing users to make their own customization with ease.
    </p>
    <p>
      VuePress provides basic ability to extend a theme, but different themes
      may have different features to be extended. Thus, if you are using a
      community theme, you'd better refer to the theme's own documentation for
      how to extending it.
    </p>
    <h2 id="layout-slots" tabindex="-1">
      <a class="header-anchor" href="#layout-slots" aria-hidden="true">#</a>
      Layout Slots
    </h2>
    <p>Default theme's <code v-pre>Layout</code> provides some slots:</p>
    <ul>
      <li><code v-pre>navbar</code></li>
      <li><code v-pre>navbar-before</code></li>
      <li><code v-pre>navbar-after</code></li>
      <li><code v-pre>sidebar</code></li>
      <li><code v-pre>sidebar-top</code></li>
      <li><code v-pre>sidebar-bottom</code></li>
      <li><code v-pre>page</code></li>
      <li><code v-pre>page-top</code></li>
      <li><code v-pre>page-bottom</code></li>
      <li><code v-pre>page-content-top</code></li>
      <li><code v-pre>page-content-bottom</code></li>
    </ul>
    <p>
      With the help of them, you can add or replace content easily. Here comes
      an example to introduce how to extend default theme with layout slots.
    </p>
    <p>
      Firstly, create your local theme
      <code v-pre>.vuepress/theme/index.ts</code>:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/core'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> localTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> DefaultThemeOptions<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'vuepress-theme-local'</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>
    layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
      Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Then your theme will extend default theme, and override the
      <code v-pre>Layout</code> layout.
    </p>
    <p>
      Next, create the <code v-pre>.vuepress/theme/layouts/Layout.vue</code>,
      and make use of the slots that provided by the
      <code v-pre>Layout</code> of default theme:
    </p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ParentLayout <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default/lib/client/layouts/Layout.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ParentLayout</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-bottom</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is my custom page footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ParentLayout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.my-footer</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
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
      </div>
    </div>
    <p>Finally, remember to use your theme in the config file:</p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./theme'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">localTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// default theme options</span>
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
    <p>
      You will add a custom footer to every normal pages in default theme
      (excluding homepage):
    </p>
    <p>
      <img
        src="/images/cookbook/extending-a-theme-01.png"
        alt="extending-a-theme"
      />
    </p>
    <h2 id="components-replacement" tabindex="-1">
      <a class="header-anchor" href="#components-replacement" aria-hidden="true"
        >#</a
      >
      Components Replacement
    </h2>
    <p>
      The layout slots are useful, but sometimes you might find it's not
      flexible enough. Default theme also provides the ability to replace a
      single component.
    </p>
    <p>
      Default theme has registered
      <RouterLink to="/reference/plugin-api.html#alias">alias</RouterLink> for
      every
      <a
        href="https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/theme-default/src/client/components"
        target="_blank"
        rel="noopener noreferrer"
        >non-global components<ExternalLinkIcon
      /></a>
      with a <code v-pre>@theme</code> prefix. For example, the alias of
      <code v-pre>HomeFooter.vue</code> is
      <code v-pre>@theme/HomeFooter.vue</code>.
    </p>
    <p>
      Then, if you want to replace the
      <code v-pre>HomeFooter.vue</code> component, just override the alias:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/core'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> localTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> DefaultThemeOptions<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'vuepress-theme-local'</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@theme/HomeFooter.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components/MyHomeFooter.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      In fact, you can even use components replacement without extending default
      theme. The
      <RouterLink to="/reference/plugin-api.html#alias">alias</RouterLink>
      option is part of
      <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>, so
      you only need to set the aliases in your config file to replace
      components.
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'@theme/HomeFooter.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components/MyHomeFooter.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
      </div>
    </div>
  </div>
</template>
