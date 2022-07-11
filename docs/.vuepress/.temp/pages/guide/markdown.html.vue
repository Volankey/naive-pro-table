<template>
  <div>
    <h1 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      Markdown
    </h1>
    <p>
      Make sure you already know Markdown well before reading this section. If
      not, please learn some
      <a
        href="https://commonmark.org/help/"
        target="_blank"
        rel="noopener noreferrer"
        >Markdown tutorials<ExternalLinkIcon
      /></a>
      first.
    </p>
    <h2 id="syntax-extensions" tabindex="-1">
      <a class="header-anchor" href="#syntax-extensions" aria-hidden="true"
        >#</a
      >
      Syntax Extensions
    </h2>
    <p>
      The Markdown content in VuePress will be parsed by
      <a
        href="https://github.com/markdown-it/markdown-it"
        target="_blank"
        rel="noopener noreferrer"
        >markdown-it<ExternalLinkIcon /></a
      >, which supports
      <a
        href="https://github.com/markdown-it/markdown-it#syntax-extensions"
        target="_blank"
        rel="noopener noreferrer"
        >syntax extensions<ExternalLinkIcon
      /></a>
      via markdown-it plugins.
    </p>
    <p>
      This section will introduce built-in Markdown syntax extensions of
      VuePress.
    </p>
    <p>
      You can also configure those built-in extensions, load more markdown-it
      plugins and implement your own extensions via
      <RouterLink to="/reference/config.html#markdown">markdown</RouterLink>
      option and
      <RouterLink to="/reference/plugin-api.html#extendsmarkdown"
        >extendsMarkdown</RouterLink
      >
      option.
    </p>
    <h3 id="embedded" tabindex="-1">
      <a class="header-anchor" href="#embedded" aria-hidden="true">#</a>
      Embedded
    </h3>
    <p>Embedded by markdown-it:</p>
    <ul>
      <li>
        <a
          href="https://help.github.com/articles/organizing-information-with-tables/"
          target="_blank"
          rel="noopener noreferrer"
          >Tables<ExternalLinkIcon
        /></a>
        (GFM)
      </li>
      <li>
        <a
          href="https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text"
          target="_blank"
          rel="noopener noreferrer"
          >Strikethrough<ExternalLinkIcon
        /></a>
        (GFM)
      </li>
    </ul>
    <h3 id="header-anchors" tabindex="-1">
      <a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a>
      Header Anchors
    </h3>
    <p>
      You might have noticed that, a <code v-pre>#</code> anchor is displayed
      when you hover the mouse on the headers of each section. By clicking the
      <code v-pre>#</code> anchor, you can jump to the section directly.
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        This header anchors extension is supported by
        <a
          href="https://github.com/valeriangalliat/markdown-it-anchor"
          target="_blank"
          rel="noopener noreferrer"
          >markdown-it-anchor<ExternalLinkIcon /></a
        >.
      </p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-anchor"
          >markdown.anchor</RouterLink
        >
      </p>
    </div>
    <h3 id="links" tabindex="-1">
      <a class="header-anchor" href="#links" aria-hidden="true">#</a> Links
    </h3>
    <p>
      When using Markdown
      <a
        href="https://spec.commonmark.org/0.29/#link-reference-definitions"
        target="_blank"
        rel="noopener noreferrer"
        >link syntax<ExternalLinkIcon /></a
      >, VuePress will implement some conversions for you.
    </p>
    <p>Take our documentation source files as an example:</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  ├─ markdown.md    <span class="token comment"># &lt;- Here we are</span>
   │  └─ README.md
   ├─ reference
   │  └─ config.md
   └─ README.md
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
      </div>
    </div>
    <p><strong>Raw Markdown</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- relative path --></span>
<span class="token url">[<span class="token content">Home</span>](<span class="token url">../README.md</span>)</span>  
<span class="token url">[<span class="token content">Config Reference</span>](<span class="token url">../reference/config.md</span>)</span>  
<span class="token url">[<span class="token content">Getting Started</span>](<span class="token url">./getting-started.md</span>)</span>  
<span class="token comment">&lt;!-- absolute path --></span>
<span class="token url">[<span class="token content">Guide</span>](<span class="token url">/guide/README.md</span>)</span>  
<span class="token url">[<span class="token content">Config Reference > markdown.links</span>](<span class="token url">/reference/config.md#links</span>)</span>  
<span class="token comment">&lt;!-- URL --></span>
<span class="token url">[<span class="token content">GitHub</span>](<span class="token url">https://github.com</span>)</span>  
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
    <p><strong>Converted to</strong></p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/reference/config.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Config Reference<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/guide/getting-started.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Getting Started<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/guide/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Guide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/reference/config.html#links<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Config Reference <span class="token entity named-entity" title="&gt;">&amp;gt;</span> markdown.links<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://github.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>GitHub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
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
      </div>
    </div>
    <p><strong>Rendered as</strong></p>
    <p>
      <RouterLink to="/">Home</RouterLink><br />
      <RouterLink to="/reference/config.html">Config Reference</RouterLink
      ><br />
      <RouterLink to="/guide/getting-started.html">Getting Started</RouterLink
      ><br />
      <RouterLink to="/guide/">Guide</RouterLink><br />
      <RouterLink to="/reference/config.html#links"
        >Config Reference &gt; markdown.links</RouterLink
      ><br />
      <a href="https://github.com" target="_blank" rel="noopener noreferrer"
        >GitHub<ExternalLinkIcon
      /></a>
    </p>
    <p><strong>Explanation</strong></p>
    <ul>
      <li>
        Internal links will be converted to
        <code v-pre>&lt;RouterLink&gt;</code> for SPA navigation.
      </li>
      <li>
        Internal links to <code v-pre>.md</code> files will be converted to the
        <RouterLink to="/guide/page.html#routing">page route path</RouterLink>,
        and both absolute path and relative path are supported.
      </li>
      <li>
        External links will get
        <code v-pre
          >target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code
        >
        attrs.
      </li>
    </ul>
    <p><strong>Suggestion</strong></p>
    <p>
      Try to use relative paths instead of absolute paths for internal links to
      markdown files.
    </p>
    <ul>
      <li>
        Relative paths are a valid links to the target files, and they can
        navigate correctly when browsing the source files in your editor or
        repository.
      </li>
      <li>
        Relative paths are consistent in different locales, so you don't need to
        change the locale path when translating your content.
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>This links extension is supported by our built-in plugin.</p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-links"
          >markdown.links</RouterLink
        >
      </p>
    </div>
    <h3 id="emoji" tabindex="-1">
      <a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji 🎉
    </h3>
    <p>
      You can add emoji to your Markdown content by typing
      <code v-pre>:EMOJICODE:</code>.
    </p>
    <p>
      For a full list of available emoji and codes, check out
      <a
        href="https://github.com/ikatyang/emoji-cheat-sheet"
        target="_blank"
        rel="noopener noreferrer"
        >emoji-cheat-sheet<ExternalLinkIcon /></a
      >.
    </p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>VuePress 2 is out :tada: !
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>Output</strong></p>
    <p>VuePress 2 is out 🎉 !</p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        This emoji extension is supported by
        <a
          href="https://github.com/markdown-it/markdown-it-emoji"
          target="_blank"
          rel="noopener noreferrer"
          >markdown-it-emoji<ExternalLinkIcon /></a
        >.
      </p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-emoji"
          >markdown.emoji</RouterLink
        >
      </p>
    </div>
    <h3 id="table-of-contents" tabindex="-1">
      <a class="header-anchor" href="#table-of-contents" aria-hidden="true"
        >#</a
      >
      Table of Contents
    </h3>
    <p>
      If you want to put the table of contents (TOC) of your current page inside
      your Markdown content, you can use the <code v-pre>[[toc]]</code> syntax.
    </p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>[[toc]]
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>Output</strong></p>
    <nav class="table-of-contents">
      <ul>
        <li>
          <RouterLink to="#syntax-extensions">Syntax Extensions</RouterLink>
          <ul>
            <li><RouterLink to="#embedded">Embedded</RouterLink></li>
            <li>
              <RouterLink to="#header-anchors">Header Anchors</RouterLink>
            </li>
            <li><RouterLink to="#links">Links</RouterLink></li>
            <li><RouterLink to="#emoji">Emoji 🎉</RouterLink></li>
            <li>
              <RouterLink to="#table-of-contents">Table of Contents</RouterLink>
            </li>
            <li><RouterLink to="#code-blocks">Code Blocks</RouterLink></li>
            <li>
              <RouterLink to="#import-code-blocks"
                >Import Code Blocks</RouterLink
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink to="#using-vue-in-markdown"
            >Using Vue in Markdown</RouterLink
          >
          <ul>
            <li>
              <RouterLink to="#template-syntax">Template Syntax</RouterLink>
            </li>
            <li><RouterLink to="#components">Components</RouterLink></li>
          </ul>
        </li>
        <li>
          <RouterLink to="#cautions">Cautions</RouterLink>
          <ul>
            <li>
              <RouterLink to="#non-standard-html-tags"
                >Non-Standard HTML Tags</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <p>
      The headers in TOC will link to the corresponding
      <a href="#header-anchors">header anchors</a>, so TOC won't work well if
      you disable header anchors.
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        This toc extension is supported by
        <a
          href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc"
          target="_blank"
          rel="noopener noreferrer"
          >@mdit-vue/plugin-toc<ExternalLinkIcon /></a
        >.
      </p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-toc"
          >markdown.toc</RouterLink
        >
      </p>
    </div>
    <h3 id="code-blocks" tabindex="-1">
      <a class="header-anchor" href="#code-blocks" aria-hidden="true">#</a> Code
      Blocks
    </h3>
    <p>
      Following code blocks extensions are implemented during markdown parsing
      in Node side. That means, the code blocks won't be processed in client
      side.
    </p>
    <h4 id="line-highlighting" tabindex="-1">
      <a class="header-anchor" href="#line-highlighting" aria-hidden="true"
        >#</a
      >
      Line Highlighting
    </h4>
    <p>
      You can highlight specified lines of your code blocks by adding line
      ranges mark in your fenced code blocks:
    </p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts{1,6-8}</span>
<span class="token code-block language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="token punctuation">```</span></span>
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
    <p><strong>Output</strong></p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
      <div class="highlight-lines">
        <div class="highlight-line">&nbsp;</div>
        <br /><br /><br /><br />
        <div class="highlight-line">&nbsp;</div>
        <div class="highlight-line">&nbsp;</div>
        <div class="highlight-line">&nbsp;</div>
        <br />
      </div>
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
    <p>Examples for line ranges mark:</p>
    <ul>
      <li>Line ranges: <code v-pre>{5-8}</code></li>
      <li>Multiple single lines: <code v-pre>{4,7,9}</code></li>
      <li>Combined: <code v-pre>{4,7-13,16,23-27,40}</code></li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        This line highlighting extension is supported by our built-in plugin,
        which is forked and modified from
        <a
          href="https://github.com/egoist/markdown-it-highlight-lines"
          target="_blank"
          rel="noopener noreferrer"
          >markdown-it-highlight-lines<ExternalLinkIcon /></a
        >.
      </p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-code-highlightlines"
          >markdown.code.highlightLines</RouterLink
        >
      </p>
    </div>
    <h4 id="line-numbers" tabindex="-1">
      <a class="header-anchor" href="#line-numbers" aria-hidden="true">#</a>
      Line Numbers
    </h4>
    <p>
      You must have noticed that the number of lines is displayed on the left
      side of code blocks. This is enabled by default and you can disable it in
      config.
    </p>
    <p>
      You can add <code v-pre>:line-numbers</code> /
      <code v-pre>:no-line-numbers</code> mark in your fenced code blocks to
      override the value set in config.
    </p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token comment">// line-numbers is enabled by default</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="token punctuation">```</span></span>

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts:no-line-numbers</span>
<span class="token code-block language-ts"><span class="token comment">// line-numbers is disabled</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="token punctuation">```</span></span>
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
    <p><strong>Output</strong></p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token comment">// line-numbers is enabled by default</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-typescript ext-ts">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token comment">// line-numbers is disabled</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>This line numbers extension is supported by our built-in plugin.</p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-code-linenumbers"
          >markdown.code.lineNumbers</RouterLink
        >
      </p>
    </div>
    <h4 id="wrap-with-v-pre" tabindex="-1">
      <a class="header-anchor" href="#wrap-with-v-pre" aria-hidden="true">#</a>
      Wrap with v-pre
    </h4>
    <p>
      As <a href="#template-syntax">template syntax is allowed in Markdown</a>,
      it would also work in code blocks, too.
    </p>
    <p>
      To avoid your code blocks being compiled by Vue, VuePress will add
      <a
        href="https://vuejs.org/api/built-in-directives.html#v-pre"
        target="_blank"
        rel="noopener noreferrer"
        >v-pre<ExternalLinkIcon
      /></a>
      directive to your code blocks by default, which can be disabled in config.
    </p>
    <p>
      You can add <code v-pre>:v-pre</code> / <code v-pre>:no-v-pre</code> mark
      in your fenced code blocks to override the value set in config.
    </p>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>
        The template syntax characters, for example, the &quot;Mustache&quot;
        syntax (double curly braces) might be parsed by the syntax highlighter.
        Thus, as the following example, <code v-pre>:no-v-pre</code> might not
        work well in some languages.
      </p>
      <p>
        If you want to make Vue syntax work in those languages anyway, try to
        disable the default syntax highlighting and implement your own syntax
        highlighting in client side.
      </p>
    </div>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">md</span>
<span class="token code-block language-md"><span class="token comment">&lt;!-- This will be kept as is by default --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}</span>
<span class="token punctuation">```</span></span>

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">md:no-v-pre</span>
<span class="token code-block language-md"><span class="token comment">&lt;!-- This will be compiled by Vue --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}</span>
<span class="token punctuation">```</span></span>

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js:no-v-pre</span>
<span class="token code-block language-js"><span class="token comment">// This won't be compiled correctly because of js syntax highlighting</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">```</span></span>
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
    <p><strong>Output</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- This will be kept as is --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- This will be compiled by Vue --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <!--
using :no-v-pre on JS code blocks has potential issue with shiki, so we are
not actually using :no-v-pre here, just as an example of incorrect usage
-->
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token comment">// This won't be compiled correctly because of js syntax highlighting</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>This v-pre extension is supported by our built-in plugin.</p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-code-vpre-block"
          >markdown.code.vPre.block</RouterLink
        >
      </p>
    </div>
    <h3 id="import-code-blocks" tabindex="-1">
      <a class="header-anchor" href="#import-code-blocks" aria-hidden="true"
        >#</a
      >
      Import Code Blocks
    </h3>
    <p>You can import code blocks from files with following syntax:</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- minimal syntax --></span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>If you want to partially import the file:</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- partial import, from line 1 to line 10 --></span>
@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      The code language is inferred from the file extension, while it is
      recommended to specify it explicitly:
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- specify the code language --></span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      In fact, the second part inside the <code v-pre>[]</code> will be treated
      as the mark of the code fence, so it supports all the syntax mentioned in
      the above <a href="#code-blocks">Code Blocks</a> section:
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- line highlighting --></span>
@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>Here is a complex example:</p>
    <ul>
      <li>
        import line 3 to line 10 of the <code v-pre>'../foo.js'</code> file
      </li>
      <li>specify the language as <code v-pre>'js'</code></li>
      <li>
        highlight line 3 of the imported code, i.e. line 5 of the
        <code v-pre>'../foo.js'</code> file
      </li>
      <li>disable line numbers</li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>@<span class="token url">[<span class="token content">code{3-10} js{3}:no-line-numbers</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Notice that path aliases are not available in import code syntax. You can
      use following config to handle path alias yourself:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">importCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/src'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- it will be resolved to 'path/to/src/foo.js' --></span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>This import code extension is supported by our built-in plugin.</p>
      <p>
        Config reference:
        <RouterLink to="/reference/config.html#markdown-importcode"
          >markdown.importCode</RouterLink
        >
      </p>
    </div>
    <h2 id="using-vue-in-markdown" tabindex="-1">
      <a class="header-anchor" href="#using-vue-in-markdown" aria-hidden="true"
        >#</a
      >
      Using Vue in Markdown
    </h2>
    <p>This section will introduce some basic usage of Vue in Markdown.</p>
    <p>
      Check out
      <RouterLink to="/advanced/cookbook/markdown-and-vue-sfc.html"
        >Cookbook &gt; Markdown and Vue SFC</RouterLink
      >
      for more details.
    </p>
    <h3 id="template-syntax" tabindex="-1">
      <a class="header-anchor" href="#template-syntax" aria-hidden="true">#</a>
      Template Syntax
    </h3>
    <p>As we know:</p>
    <ul>
      <li>HTML is allowed in Markdown.</li>
      <li>Vue template syntax is compatible with HTML.</li>
    </ul>
    <p>
      That means,
      <a
        href="https://vuejs.org/guide/essentials/template-syntax.html"
        target="_blank"
        rel="noopener noreferrer"
        >Vue template syntax<ExternalLinkIcon
      /></a>
      is allowed in Markdown.
    </p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>One plus one equals: {{ 1 + 1 }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> span: {{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>Output</strong></p>
    <p>One plus one equals: {{ 1 + 1 }}</p>
    <p>
      <span v-for="i in 3"> span: {{ i }} </span>
    </p>
    <h3 id="components" tabindex="-1">
      <a class="header-anchor" href="#components" aria-hidden="true">#</a>
      Components
    </h3>
    <p>You can use Vue components directly in Markdown.</p>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>This is default theme built-in <span class="token code-snippet code keyword">`&lt;Badge />`</span> component <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>Output</strong></p>
    <p>
      This is default theme built-in
      <code v-pre>&lt;Badge /&gt;</code> component <Badge text="demo" />
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Check out the
        <RouterLink to="/reference/components.html"
          >Built-in Components</RouterLink
        >
        for a full list of built-in components.
      </p>
      <p>
        Check out the
        <RouterLink to="/reference/default-theme/components.html"
          >Default Theme &gt; Built-in Components</RouterLink
        >
        for a full list of default theme built-in components.
      </p>
    </div>
    <h2 id="cautions" tabindex="-1">
      <a class="header-anchor" href="#cautions" aria-hidden="true">#</a>
      Cautions
    </h2>
    <h3 id="non-standard-html-tags" tabindex="-1">
      <a class="header-anchor" href="#non-standard-html-tags" aria-hidden="true"
        >#</a
      >
      Non-Standard HTML Tags
    </h3>
    <p>
      Non-standard HTML tags would not be recognized as native HTML tags by Vue
      template compiler. Instead, Vue will try to resolve those tags as Vue
      components, and obviously these components usually don't exist. For
      example:
    </p>
    <ul>
      <li>
        Deprecated HTML tags such as
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center"
          target="_blank"
          rel="noopener noreferrer"
          >&lt;center&gt;<ExternalLinkIcon
        /></a>
        and
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font"
          target="_blank"
          rel="noopener noreferrer"
          >&lt;font&gt;<ExternalLinkIcon /></a
        >.
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/MathML"
          target="_blank"
          rel="noopener noreferrer"
          >MathML tags<ExternalLinkIcon /></a
        >, which might be used by some markdown-it LaTeX plugin.
      </li>
    </ul>
    <p>
      If you want to use those tags anyway, try either of the following
      workarounds:
    </p>
    <ul>
      <li>
        Adding a
        <a
          href="https://vuejs.org/api/built-in-directives.html#v-pre"
          target="_blank"
          rel="noopener noreferrer"
          >v-pre<ExternalLinkIcon
        /></a>
        directive to skip the compilation of the element and its children.
        Notice that the template syntax would also be invalid.
      </li>
      <li>
        Using
        <a
          href="https://vuejs.org/api/application.html#app-config-compileroptions"
          target="_blank"
          rel="noopener noreferrer"
          >compilerOptions.isCustomElement<ExternalLinkIcon
        /></a>
        to tell Vue template compiler not try to resolve them as components.
        <ul>
          <li>
            For <code v-pre>@bundler-webpack</code>, set
            <RouterLink to="/reference/bundler/webpack.html#vue"
              >vue.compilerOptions</RouterLink
            >
          </li>
          <li>
            For <code v-pre>@bundler-vite</code>, set
            <RouterLink to="/reference/bundler/vite.html#vuepluginoptions"
              >vuePluginOptions.template.compilerOptions</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
