<template>
  <div>
    <h1 id="toc" tabindex="-1">
      <a class="header-anchor" href="#toc" aria-hidden="true">#</a> toc
    </h1>
    <NpmBadge package="@vuepress/plugin-toc" />
    <p>This plugin will provide a table-of-contents (TOC) component.</p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-toc@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> tocPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-toc'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">tocPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h2 id="differences-with-markdown-toc-syntax" tabindex="-1">
      <a
        class="header-anchor"
        href="#differences-with-markdown-toc-syntax"
        aria-hidden="true"
        >#</a
      >
      Differences with Markdown TOC Syntax
    </h2>
    <p>
      Similar to the
      <RouterLink to="/guide/markdown.html#table-of-contents"
        >Table of Contents Markdown Syntax</RouterLink
      >, the TOC component that provided by this plugin could be used in your
      markdown content directly:
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- markdown toc syntax --></span>
[[toc]]

<span class="token comment">&lt;!-- vue toc component --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token punctuation">/></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Both of them can be pre-rendered correctly in build mode. However, there
      are some differences between them.
    </p>
    <p>
      The markdown syntax <code v-pre>[[toc]]</code> could only be used in
      markdown files. It is parsed by markdown-it, and the generated TOC is
      static content.
    </p>
    <p>
      The component <code v-pre>&lt;Toc/&gt;</code> could be used in both
      markdown files and vue files. It is loaded by vue, and the generated TOC
      is a vue component.
    </p>
    <p>
      This plugin could work together with
      <RouterLink to="/reference/plugin/active-header-links.html"
        >@vuepress/plugin-active-header-links</RouterLink
      >
      by setting the
      <RouterLink
        to="/reference/plugin/active-header-links.html#headerlinkselector"
        >headerLinkSelector</RouterLink
      >
      to match the <code v-pre>linkClass</code> option. When the page scroll to
      a certain header anchor, this corresponding link will be added
      <code v-pre>linkActiveClass</code> class name.
    </p>
    <p>Therefore, this plugin is more useful for theme developers.</p>
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="componentname" tabindex="-1">
      <a class="header-anchor" href="#componentname" aria-hidden="true">#</a>
      componentName
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'Toc'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the name of the TOC component.</p>
      </li>
    </ul>
    <h3 id="defaultpropsoptions" tabindex="-1">
      <a class="header-anchor" href="#defaultpropsoptions" aria-hidden="true"
        >#</a
      >
      defaultPropsOptions
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Partial&lt;TocPropsOptions&gt;</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>{}</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Override the default values of the component
          <a href="#options-1">options</a> prop.
        </p>
      </li>
    </ul>
    <h2 id="component-props" tabindex="-1">
      <a class="header-anchor" href="#component-props" aria-hidden="true">#</a>
      Component Props
    </h2>
    <p>The TOC component also accepts props for customization.</p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headers<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="headers" tabindex="-1">
      <a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers
    </h3>
    <ul>
      <li>Type: <code v-pre>PageHeader[]</code></li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">interface</span> <span class="token class-name">PageHeader</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token builtin">number</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  slug<span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">:</span> PageHeader<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
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
    <ul>
      <li>
        <p>Details:</p>
        <p>Specify the headers array to render.</p>
        <p>
          If this prop is not specified, the headers of current page will be
          used.
        </p>
      </li>
    </ul>
    <h3 id="options-1" tabindex="-1">
      <a class="header-anchor" href="#options-1" aria-hidden="true">#</a>
      options
    </h3>
    <ul>
      <li>Type: <code v-pre>Partial&lt;TocPropsOptions&gt;</code></li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">interface</span> <span class="token class-name">TocPropsOptions</span> <span class="token punctuation">{</span>
  containerTag<span class="token operator">:</span> <span class="token builtin">string</span>
  containerClass<span class="token operator">:</span> <span class="token builtin">string</span>
  listClass<span class="token operator">:</span> <span class="token builtin">string</span>
  itemClass<span class="token operator">:</span> <span class="token builtin">string</span>
  linkTag<span class="token operator">:</span> <span class="token string">'a'</span> <span class="token operator">|</span> <span class="token string">'RouterLink'</span>
  linkClass<span class="token operator">:</span> <span class="token builtin">string</span>
  linkActiveClass<span class="token operator">:</span> <span class="token builtin">string</span>
  linkChildrenActiveClass<span class="token operator">:</span> <span class="token builtin">string</span>
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
      </div>
    </div>
    <ul>
      <li>
        <p>Default:</p>
        <p>
          Following default values can be overridden by
          <a href="#defaultpropsoptions">defaultPropsOptions</a>.
        </p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  containerTag<span class="token operator">:</span> <span class="token string">'nav'</span><span class="token punctuation">,</span>
  containerClass<span class="token operator">:</span> <span class="token string">'vuepress-toc'</span><span class="token punctuation">,</span>
  listClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-list'</span><span class="token punctuation">,</span>
  itemClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-item'</span><span class="token punctuation">,</span>
  linkTag<span class="token operator">:</span> <span class="token string">'RouterLink'</span><span class="token punctuation">,</span>
  linkClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-link'</span><span class="token punctuation">,</span>
  linkActiveClass<span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span>
  linkChildrenActiveClass<span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <ul>
      <li>
        <p>Details:</p>
        <p>Customize the TOC component.</p>
        <p>
          If the <code v-pre>containerTag</code> is set to an empty string
          <code v-pre>''</code>, the <code v-pre>&lt;nav&gt;</code> container
          will be removed totally.
        </p>
      </li>
      <li>
        <p>Example:</p>
        <p>The rendered TOC component with default options looks like:</p>
      </li>
    </ul>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- container --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- list --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- item --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- link --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- item with children --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- link (children active) --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link active<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- list (children) --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- item --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- link (active) --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link active<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar-child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bar Child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
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
  </div>
</template>
