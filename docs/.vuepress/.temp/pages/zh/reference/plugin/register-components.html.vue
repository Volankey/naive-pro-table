<template>
  <div>
    <h1 id="register-components" tabindex="-1">
      <a class="header-anchor" href="#register-components" aria-hidden="true"
        >#</a
      >
      register-components
    </h1>
    <NpmBadge package="@vuepress/plugin-register-components" />
    <p>根据组件文件或目录自动注册 Vue 组件。</p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
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
      <span class="token comment">// 配置项</span>
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
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <h3 id="components" tabindex="-1">
      <a class="header-anchor" href="#components" aria-hidden="true">#</a>
      components
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Record&lt;string, string&gt;</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>{}</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>一个定义了组件名称和其对应文件路径的对象。</p>
        <p>键会被用作组件名称，值是组件文件的绝对路径。</p>
        <p>
          如果该配置项中的组件名称和
          <a href="#componentsdir">componentsDir</a>
          配置项发生冲突，那么该配置项会有更高的优先级。
        </p>
      </li>
      <li>
        <p>示例：</p>
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
        <p>类型： <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>null</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>组件目录的绝对路径。</p>
        <p>
          该目录下匹配
          <a href="#componentspatterns">componentsPatterns</a>
          的文件会被自动注册为 Vue 组件。
        </p>
      </li>
      <li>
        <p>示例：</p>
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
    <p>组件目录：</p>
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
    <p>组件会像这样被注册：</p>
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
        <p>类型： <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>['**/*.vue']</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          使用
          <a
            href="https://github.com/sindresorhus/globby"
            target="_blank"
            rel="noopener noreferrer"
            >globby<ExternalLinkIcon
          /></a>
          来匹配组件文件的 Patterns 。
        </p>
        <p>
          该 Patterns 是相对于
          <a href="#componentsdir">componentsDir</a> 目录的。
        </p>
      </li>
    </ul>
    <h3 id="getcomponentname" tabindex="-1">
      <a class="header-anchor" href="#getcomponentname" aria-hidden="true">#</a>
      getComponentName
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>(filename: string) =&gt; string</code></p>
      </li>
      <li>
        <p>
          默认值：
          <code v-pre
            >(filename) =&gt; path.trimExt(filename.replace(/\/|\\/g,
            '-'))</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>用于从文件名获取对应组件名称的函数。</p>
        <p>
          它只会对 <a href="#componentsdir">componentsDir</a> 目录下匹配了
          <a href="#componentspatterns">componentsPatterns</a> 的文件生效。
        </p>
        <p>
          注意，这里的 <code v-pre>filename</code> 是相对于
          <a href="#componentspatterns">componentsPatterns</a> 目录的文件路径。
        </p>
      </li>
    </ul>
  </div>
</template>
