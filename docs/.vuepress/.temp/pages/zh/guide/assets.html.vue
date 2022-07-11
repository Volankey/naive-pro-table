<template>
  <div>
    <h1 id="静态资源" tabindex="-1">
      <a class="header-anchor" href="#静态资源" aria-hidden="true">#</a>
      静态资源
    </h1>
    <h2 id="相对路径" tabindex="-1">
      <a class="header-anchor" href="#相对路径" aria-hidden="true">#</a>
      相对路径
    </h2>
    <p>你可以在你的 Markdown 内容中使用相对路径来引用静态资源：</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">./image.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      一般情况下，我们推荐你使用这种方式来引用图片，因为人们通常会把图片放在引用它的
      Markdown 文件附近。
    </p>
    <h2 id="public-文件" tabindex="-1">
      <a class="header-anchor" href="#public-文件" aria-hidden="true">#</a>
      Public 文件
    </h2>
    <p>
      你可以把一些静态资源放在 Public
      目录中，它们会被复制到最终生成的网站的根目录下。
    </p>
    <p>
      默认的 Public 目录是 <code v-pre>.vuepress/public</code> ，可以通过
      <RouterLink to="/zh/reference/config.html#public">public</RouterLink>
      配置项来修改。
    </p>
    <p>在下列这些情况中，你可能会用到它：</p>
    <ul>
      <li>
        你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown
        文件引用，比如 favicon 和 PWA 图标。
      </li>
      <li>
        你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如
        Logo 图片。
      </li>
      <li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li>
    </ul>
    <p>
      以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>└─ docs
   ├─ .vuepress
   <span class="token operator">|</span>  └─ public
   <span class="token operator">|</span>     └─ images
   <span class="token operator">|</span>        └─ hero.png  <span class="token comment"># &lt;- Logo 文件</span>
   └─ guide
      └─ assets.md       <span class="token comment"># &lt;- 我们在这里</span>
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
    <p>我们可以这样在当前页面引用 Logo ：</p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>Output</strong></p>
    <p><img src="/images/hero.png" alt="VuePress Logo" /></p>
    <h3 id="base-helper" tabindex="-1">
      <a class="header-anchor" href="#base-helper" aria-hidden="true">#</a> Base
      Helper
    </h3>
    <p>
      如果你的网站部署在非根路径下，例如
      <code v-pre>https://foo.github.io/bar/</code> ，那么你应该把
      <RouterLink to="/zh/reference/config.html#base">base</RouterLink> 设置为
      <code v-pre>'/bar/'</code>。显然，此时你的 Public 文件会被部署在
      <code v-pre>https://foo.github.io/bar/images/hero.png</code>
      这样的链接下。
    </p>
    <p>
      在大多数情况下，你不需要担心这些 Public 文件的引用路径，因为 VuePress
      会自动帮你处理 <code v-pre>base</code> 前缀：
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 你不需要给 `/images/hero.png` 手动添加 `/bar/` 前缀 --></span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      然而，有些情况下，你可能会有一些指向 Public
      文件的动态路径，尤其是在你开发一个自定义主题的时候。在这种情况下，
      <code v-pre>base</code> 无法被自动处理。为了解决这个问题，VuePress 提供了
      <RouterLink to="/zh/reference/client-api.html#withbase"
        >withBase</RouterLink
      >
      工具函数，它可以帮助你添加 <code v-pre>base</code> 前缀：
    </p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>withBase(logoPath)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">const</span> logoPath <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'/images/hero.png'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
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
      </div>
    </div>
    <p>你也可以通过 <code v-pre>$withBase</code> 来直接使用这个工具函数：</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$withBase(<span class="token punctuation">'</span>/images/hero.png<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>VuePress Logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="依赖包和路径别名" tabindex="-1">
      <a class="header-anchor" href="#依赖包和路径别名" aria-hidden="true">#</a>
      依赖包和路径别名
    </h2>
    <p>尽管这不是常见用法，但是你可以从依赖包中引用图片：</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> <span class="token function">install</span> -D package-name
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">来自依赖包的图片</span>](<span class="token url">package-name/image.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>在配置文件中设置的路径别名也同样支持：</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'@alias'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./path/to/some/dir'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">来自路径别名的图片</span>](<span class="token url">@alias/image.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/plugin-api.html#alias">alias</RouterLink>
      </p>
    </div>
  </div>
</template>
