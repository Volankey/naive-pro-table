<template>
  <div>
    <h1 id="container" tabindex="-1">
      <a class="header-anchor" href="#container" aria-hidden="true">#</a>
      container
    </h1>
    <NpmBadge package="@vuepress/plugin-container" />
    <p>为你的 VuePress 站点注册自定义容器。</p>
    <p>
      该插件简化了
      <a
        href="https://github.com/markdown-it/markdown-it-container"
        target="_blank"
        rel="noopener noreferrer"
        >markdown-it-container<ExternalLinkIcon
      /></a>
      的使用方法，但同时也保留了其原本的能力。
    </p>
    <p>
      默认主题的
      <RouterLink
        to="/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"
        >自定义容器</RouterLink
      >
      就是由该插件支持的。
    </p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-container@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> containerPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-container'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">containerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h2 id="容器语法" tabindex="-1">
      <a class="header-anchor" href="#容器语法" aria-hidden="true">#</a>
      容器语法
    </h2>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [info]
[content]
:::
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <code v-pre>type</code> 是必需的，应通过
        <a href="#type">type</a> 配置项来指定。
      </li>
      <li>
        <code v-pre>info</code> 是可选的，其默认值可以通过
        <a href="#locales">locales</a> 的
        <code v-pre>defaultInfo</code> 配置项来指定。
      </li>
      <li><code v-pre>content</code> 可是任何合法的 Markdown 内容。</li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>该插件可以被多次使用，以便支持不同类型的容器。</p>
    </div>
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <h3 id="type" tabindex="-1">
      <a class="header-anchor" href="#type" aria-hidden="true">#</a> type
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>容器的类型。</p>
        <p>
          它将会被用作
          <a
            href="https://github.com/markdown-it/markdown-it-container#api"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-container<ExternalLinkIcon
          /></a>
          的 <code v-pre>name</code> 参数。
        </p>
      </li>
    </ul>
    <h3 id="locales" tabindex="-1">
      <a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre>Record&lt;string, { defaultInfo: string }&gt;</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>容器在不同 locales 下的默认 <code v-pre>info</code> 。</p>
        <p>
          如果没有指定该配置项，默认 <code v-pre>info</code> 会使用大写的
          <a href="#type">type</a> 。
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
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">containerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'tip'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">defaultInfo</span><span class="token operator">:</span> <span class="token string">'TIP'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">defaultInfo</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        参考：
        <ul>
          <li>
            <RouterLink to="/zh/guide/i18n.html"
              >指南 &gt; 多语言支持</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="before" tabindex="-1">
      <a class="header-anchor" href="#before" aria-hidden="true">#</a> before
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>(info: string) =&gt; string</code></p>
      </li>
      <li>
        <p>默认值：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span>
  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="custom-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p class="custom-container-title"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token template-punctuation string">`</span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>一个用于渲染容器起始标签的函数。</p>
        <p>
          第一个参数是
          <a href="#%E5%AE%B9%E5%99%A8%E8%AF%AD%E6%B3%95">容器语法</a> 的
          <code v-pre>info</code> 部分。
        </p>
        <p>
          如果你没有设置
          <a href="#after">after</a> 配置项，则该配置项也不会生效。
        </p>
      </li>
    </ul>
    <h3 id="after" tabindex="-1">
      <a class="header-anchor" href="#after" aria-hidden="true">#</a> after
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>(info: string) =&gt; string</code></p>
      </li>
      <li>
        <p>默认值：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token string">'&lt;/div>\n'</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>一个用于渲染容器结束标签的函数。</p>
        <p>
          第一个参数是
          <a href="#%E5%AE%B9%E5%99%A8%E8%AF%AD%E6%B3%95">容器语法</a> 的
          <code v-pre>info</code> 部分。
        </p>
        <p>
          如果你没有设置
          <a href="#before">before</a> 配置项，则该配置项也不会生效。
        </p>
      </li>
    </ul>
    <h3 id="render" tabindex="-1">
      <a class="header-anchor" href="#render" aria-hidden="true">#</a> render
    </h3>
    <ul>
      <li>类型：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">type</span> <span class="token class-name">MarkdownItContainerRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> MarkdownEnv<span class="token punctuation">,</span>
  self<span class="token operator">:</span> Renderer
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span>
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
    <ul>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/markdown-it/markdown-it-container#api"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-container<ExternalLinkIcon
          /></a>
          的 <code v-pre>render</code> 配置项。
        </p>
        <p>
          该插件使用了一个默认的
          <code v-pre>render</code> 函数。但如果你指定了该配置项，那么默认的
          <code v-pre>render</code> 函数就会被替换掉，此时
          <a href="#locales">locales</a> 、 <a href="#before">before</a> 和
          <a href="#after">after</a> 配置项都会被忽略。
        </p>
      </li>
    </ul>
    <h3 id="validate" tabindex="-1">
      <a class="header-anchor" href="#validate" aria-hidden="true">#</a>
      validate
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>(params: string) =&gt; boolean</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/markdown-it/markdown-it-container#api"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-container<ExternalLinkIcon
          /></a>
          的 <code v-pre>validate</code> 配置项。
        </p>
      </li>
    </ul>
    <h3 id="marker" tabindex="-1">
      <a class="header-anchor" href="#marker" aria-hidden="true">#</a> marker
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/markdown-it/markdown-it-container#api"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-container<ExternalLinkIcon
          /></a>
          的 <code v-pre>marker</code> 配置项。
        </p>
      </li>
    </ul>
  </div>
</template>
