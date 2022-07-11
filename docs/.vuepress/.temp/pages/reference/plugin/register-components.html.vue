<template>
  <div>
    <h1 id="register-components" tabindex="-1">
      <a class="header-anchor" href="#register-components" aria-hidden="true"
        >#</a
      >
      register-components
    </h1>
    <NpmBadge package="@vuepress/plugin-register-components" />
    <p>
      Register Vue components from component files or directory automatically.
    </p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-register-components@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-register-components'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="components" tabindex="-1">
      <a class="header-anchor" href="#components" aria-hidden="true">#</a>
      components
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Record&lt;string, string&gt;</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>{}</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          An object that defines name of components and their corresponding file
          path.
        </p>
        <p>
          The key will be used as the component name, and the value is an
          absolute path of the component file.
        </p>
        <p>
          If the component name from this option conflicts with
          <a href="#componentsdir">componentsDir</a> option, this option will
          have a higher priority.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/utils'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">FooBar</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components/FooBar.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <h3 id="componentsdir" tabindex="-1">
      <a class="header-anchor" href="#componentsdir" aria-hidden="true">#</a>
      componentsDir
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Absolute path to the components directory.</p>
        <p>
          Files in this directory which are matched with
          <a href="#componentspatterns">componentsPatterns</a> will be
          registered as Vue components automatically.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/utils'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">componentsDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <p>Components directory:</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>components
├─ FooBar.vue
└─ Baz.vue
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>Components will be registered like this:</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
  <span class="token string">'FooBar'</span><span class="token punctuation">,</span>
  <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'/path/to/components/FooBar.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
  <span class="token string">'Baz'</span><span class="token punctuation">,</span>
  <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'/path/to/components/Baz.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
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
      </div>
    </div>
    <h3 id="componentspatterns" tabindex="-1">
      <a class="header-anchor" href="#componentspatterns" aria-hidden="true"
        >#</a
      >
      componentsPatterns
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>['**/*.vue']</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Patterns to match component files using
          <a
            href="https://github.com/sindresorhus/globby"
            target="_blank"
            rel="noopener noreferrer"
            >globby<ExternalLinkIcon /></a
          >.
        </p>
        <p>
          The patterns are relative to
          <a href="#componentsdir">componentsDir</a>.
        </p>
      </li>
    </ul>
    <h3 id="getcomponentname" tabindex="-1">
      <a class="header-anchor" href="#getcomponentname" aria-hidden="true">#</a>
      getComponentName
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>(filename: string) =&gt; string</code></p>
      </li>
      <li>
        <p>
          Default:
          <code v-pre
            >(filename) =&gt; path.trimExt(filename.replace(/\/|\\/g,
            '-'))</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>A function to get component name from the filename.</p>
        <p>
          It will only take effect on the files in the
          <a href="#componentsdir">componentsDir</a> which are matched with the
          <a href="#componentspatterns">componentsPatterns</a>.
        </p>
        <p>
          Notice that the <code v-pre>filename</code> is a filepath relative to
          <a href="#componentsdir">componentsDir</a>.
        </p>
      </li>
    </ul>
  </div>
</template>
