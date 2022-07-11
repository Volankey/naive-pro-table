<template>
  <div>
    <h1 id="assets" tabindex="-1">
      <a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets
    </h1>
    <h2 id="relative-urls" tabindex="-1">
      <a class="header-anchor" href="#relative-urls" aria-hidden="true">#</a>
      Relative URLs
    </h2>
    <p>
      You can reference any assets using relative URLs in your Markdown content:
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">An image</span>](<span class="token url">./image.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      This is generally the suggested way to import images, as users usually
      place images near the Markdown file that references them.
    </p>
    <h2 id="public-files" tabindex="-1">
      <a class="header-anchor" href="#public-files" aria-hidden="true">#</a>
      Public Files
    </h2>
    <p>
      You can put some static assets inside public directory, and they will be
      copied to the root of the generated directory.
    </p>
    <p>
      The default public directory is <code v-pre>.vuepress/public</code>, which
      can be changed by
      <RouterLink to="/reference/config.html#public">public</RouterLink> option.
    </p>
    <p>It would be useful in some cases:</p>
    <ul>
      <li>
        You may need to provide static assets that are not directly referenced
        in any of your Markdown files, for example, favicon and PWA icons.
      </li>
      <li>
        You may need to serve some shared static assets, which may even be
        referenced outside your site, for example, logo images.
      </li>
      <li>
        You may want to reference images using absolute URLs in your Markdown
        content.
      </li>
    </ul>
    <p>
      Take our documentation source files as an example, we are putting the logo
      of VuePress inside the public directory:
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>└─ docs
   ├─ .vuepress
   <span class="token operator">|</span>  └─ public
   <span class="token operator">|</span>     └─ images
   <span class="token operator">|</span>        └─ hero.png  <span class="token comment"># &lt;- Logo file</span>
   └─ guide
      └─ assets.md       <span class="token comment"># &lt;- Here we are</span>
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
    <p>We can reference our logo in current page like this:</p>
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
      If your site is deployed to a non-root URL, for example,
      <code v-pre>https://foo.github.io/bar/</code>, then the
      <RouterLink to="/reference/config.html#base">base</RouterLink> should be
      set to <code v-pre>'/bar/'</code>. Obviously, your public files would be
      served like
      <code v-pre>https://foo.github.io/bar/images/hero.png</code> after
      deployment.
    </p>
    <p>
      In most cases, you don't need to worry about the reference path of those
      public files, as VuePress will automatically handle
      <code v-pre>base</code> for you:
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- you don't need to prepend `/bar/` to `/images/hero.png` manually --></span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      However, sometimes you may have some dynamical links referencing public
      files, especially when you are authoring a custom theme. In such case, the
      <code v-pre>base</code> could not be handled automatically. To help with
      that, VuePress provides a
      <RouterLink to="/reference/client-api.html#withbase">withBase</RouterLink>
      helper to prepend <code v-pre>base</code> for you:
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
    <p>
      You can also access the helper by <code v-pre>$withBase</code> directly:
    </p>
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
    <h2 id="packages-and-path-aliases" tabindex="-1">
      <a
        class="header-anchor"
        href="#packages-and-path-aliases"
        aria-hidden="true"
        >#</a
      >
      Packages and Path Aliases
    </h2>
    <p>
      Although it is not a common usage, you can reference images from dependent
      packages:
    </p>
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
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Image from dependency</span>](<span class="token url">package-name/image.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>The path aliases that set in config file are also supported:</p>
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
      ><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Image from path alias</span>](<span class="token url">@alias/image.png</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Config reference:
        <RouterLink to="/reference/plugin-api.html#alias">alias</RouterLink>
      </p>
    </div>
  </div>
</template>
