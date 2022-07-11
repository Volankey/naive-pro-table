<template>
  <div>
    <h1 id="配置" tabindex="-1">
      <a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置
    </h1>
    <h2 id="配置文件" tabindex="-1">
      <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a>
      配置文件
    </h2>
    <p>
      如果没有任何配置，你的 VuePress
      站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个
      <code v-pre>.vuepress</code> 目录，所有 VuePress
      相关的文件都将会被放在这里。你的项目结构可能是这样：
    </p>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
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
      VuePress 站点的基本配置文件是
      <code v-pre>.vuepress/config.js</code> ，但也同样支持 TypeScript
      配置文件。你可以使用
      <code v-pre>.vuepress/config.ts</code> 来得到更好的类型提示。
    </p>
    <p>具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：</p>
    <ul>
      <li>
        当前工作目录 <code v-pre>cwd</code> 下：
        <ul>
          <li><code v-pre>vuepress.config.ts</code></li>
          <li><code v-pre>vuepress.config.js</code></li>
          <li><code v-pre>vuepress.config.cjs</code></li>
        </ul>
      </li>
      <li>
        源文件目录 <code v-pre>sourceDir</code> 下：
        <ul>
          <li><code v-pre>.vuepress/config.ts</code></li>
          <li><code v-pre>.vuepress/config.js</code></li>
          <li><code v-pre>.vuepress/config.cjs</code></li>
        </ul>
      </li>
    </ul>
    <p>
      你也可以通过
      <RouterLink to="/zh/guide/cli.html">命令行接口</RouterLink> 的
      <code v-pre>--config</code> 选项来指定配置文件：
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code>vuepress dev docs --config my-config.js
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>一个基础的配置文件是这样的：</p>
    <CodeGroup>
      <CodeGroupItem title="JS" active>
        <div class="language-javascript ext-js line-numbers-mode">
          <pre
            v-pre
            class="language-javascript"
          ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
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
      </CodeGroupItem>
      <CodeGroupItem title="TS">
        <div class="language-typescript ext-ts line-numbers-mode">
          <pre
            v-pre
            class="language-typescript"
          ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
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
          </div>
        </div>
      </CodeGroupItem>
    </CodeGroup>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        前往
        <RouterLink to="/zh/reference/config.html">配置参考</RouterLink>
        查看所有 VuePress 配置。
      </p>
    </div>
    <h2 id="客户端配置文件" tabindex="-1">
      <a class="header-anchor" href="#客户端配置文件" aria-hidden="true">#</a>
      客户端配置文件
    </h2>
    <p>
      在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress
      站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress
      通过客户端配置文件来支持这种需求：
    </p>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- 客户端配置文件
│  │  └─ config.js   &lt;--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
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
    <p>同样的，我们也有关于客户端配置文件的路径约定（按照优先顺序）：</p>
    <ul>
      <li>
        当前工作目录 <code v-pre>cwd</code> 下：
        <ul>
          <li><code v-pre>vuepress.client.ts</code></li>
          <li><code v-pre>vuepress.client.js</code></li>
          <li><code v-pre>vuepress.client.mjs</code></li>
        </ul>
      </li>
      <li>
        源文件目录 <code v-pre>sourceDir</code> 下：
        <ul>
          <li><code v-pre>.vuepress/client.ts</code></li>
          <li><code v-pre>.vuepress/client.js</code></li>
          <li><code v-pre>.vuepress/client.mjs</code></li>
        </ul>
      </li>
    </ul>
    <p>需要注意的是，客户端配置文件需要使用 ESM 格式：</p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。</p>
      <p>
        可以前往
        <RouterLink to="/zh/advanced/cookbook/usage-of-client-config.html"
          >深入 &gt; Cookbook &gt; 客户端配置的使用方法</RouterLink
        >
        来了解更多信息。
      </p>
    </div>
  </div>
</template>
