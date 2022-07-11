<template>
  <div>
    <h1 id="configuration" tabindex="-1">
      <a class="header-anchor" href="#configuration" aria-hidden="true">#</a>
      Configuration
    </h1>
    <h2 id="config-file" tabindex="-1">
      <a class="header-anchor" href="#config-file" aria-hidden="true">#</a>
      Config File
    </h2>
    <p>
      Without any configuration, the VuePress site is pretty minimal. To
      customize your site, let’s first create a
      <code v-pre>.vuepress</code> directory inside your docs directory. This is
      where all VuePress-specific files will be placed. Your project structure
      is probably like this:
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
      The essential file for configuring a VuePress site is
      <code v-pre>.vuepress/config.js</code>, while TypeScript config file is
      also supported. You can use <code v-pre>.vuepress/config.ts</code> instead
      to get better types hint for VuePress config.
    </p>
    <p>
      To be more specific, we have a convention for config file paths (in order
      of precedence):
    </p>
    <ul>
      <li>
        In current working directory <code v-pre>cwd</code>:
        <ul>
          <li><code v-pre>vuepress.config.ts</code></li>
          <li><code v-pre>vuepress.config.js</code></li>
          <li><code v-pre>vuepress.config.cjs</code></li>
        </ul>
      </li>
      <li>
        In source directory <code v-pre>sourceDir</code>:
        <ul>
          <li><code v-pre>.vuepress/config.ts</code></li>
          <li><code v-pre>.vuepress/config.js</code></li>
          <li><code v-pre>.vuepress/config.cjs</code></li>
        </ul>
      </li>
    </ul>
    <p>
      You can also specify the config file via
      <code v-pre>--config</code> option of
      <RouterLink to="/guide/cli.html">CLI</RouterLink>:
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
    <p>A basic config file looks like this:</p>
    <CodeGroup>
      <CodeGroupItem title="JS" active>
        <div class="language-javascript ext-js line-numbers-mode">
          <pre
            v-pre
            class="language-javascript"
          ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Hello, VuePress!'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is my first VuePress site'</span><span class="token punctuation">,</span>
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
  lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'Hello VuePress'</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">'Just playing around'</span><span class="token punctuation">,</span>
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
        Check out the
        <RouterLink to="/reference/config.html">Config Reference</RouterLink>
        for a full list of VuePress config.
      </p>
    </div>
    <h2 id="client-config-file" tabindex="-1">
      <a class="header-anchor" href="#client-config-file" aria-hidden="true"
        >#</a
      >
      Client Config File
    </h2>
    <p>
      In most cases, the config file is sufficient to configure your VuePress
      site. However, sometimes users may want to add some client-side code
      directly. To help with this, VuePress also supports a client config file:
    </p>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- client config file
│  │  └─ config.js   &lt;--- config file
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
    <p>
      Similarly, we also have a convention for client config file paths (in
      order of precedence):
    </p>
    <ul>
      <li>
        In current working directory <code v-pre>cwd</code>:
        <ul>
          <li><code v-pre>vuepress.client.ts</code></li>
          <li><code v-pre>vuepress.client.js</code></li>
          <li><code v-pre>vuepress.client.mjs</code></li>
        </ul>
      </li>
      <li>
        In source directory <code v-pre>sourceDir</code>:
        <ul>
          <li><code v-pre>.vuepress/client.ts</code></li>
          <li><code v-pre>.vuepress/client.js</code></li>
          <li><code v-pre>.vuepress/client.mjs</code></li>
        </ul>
      </li>
    </ul>
    <p>Notice that the client config file should be in ESM format:</p>
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
      <p>
        Unlike config file, client config file could not be specified via CLI
        options.
      </p>
      <p>
        To learn more about client config file, see
        <RouterLink to="/advanced/cookbook/usage-of-client-config.html"
          >Advanced &gt; Cookbook &gt; Usage of Client Config</RouterLink
        >
      </p>
    </div>
  </div>
</template>
