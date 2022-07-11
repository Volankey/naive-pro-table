<template>
  <div>
    <h1 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      Markdown
    </h1>
    <p>
      在阅读本章节之前，请确保你已经对 Markdown 有所了解。如果你还不了解
      Markdown ，请先学习一些
      <a
        href="https://commonmark.org/help/"
        target="_blank"
        rel="noopener noreferrer"
        >Markdown 教程<ExternalLinkIcon /></a
      >。
    </p>
    <h2 id="语法扩展" tabindex="-1">
      <a class="header-anchor" href="#语法扩展" aria-hidden="true">#</a>
      语法扩展
    </h2>
    <p>
      VuePress 会使用
      <a
        href="https://github.com/markdown-it/markdown-it"
        target="_blank"
        rel="noopener noreferrer"
        >markdown-it<ExternalLinkIcon
      /></a>
      来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现
      <a
        href="https://github.com/markdown-it/markdown-it#syntax-extensions"
        target="_blank"
        rel="noopener noreferrer"
        >语法扩展<ExternalLinkIcon
      /></a>
      。
    </p>
    <p>本章节将会介绍 VuePress 内置支持的 Markdown 语法扩展。</p>
    <p>
      你也可以通过
      <RouterLink to="/zh/reference/config.html#markdown">markdown</RouterLink>
      和
      <RouterLink to="/zh/reference/plugin-api.html#extendsmarkdown"
        >extendsMarkdown</RouterLink
      >
      来配置这些内置扩展、加载更多 markdown-it 插件、实现你自己的扩展等。
    </p>
    <h3 id="内置" tabindex="-1">
      <a class="header-anchor" href="#内置" aria-hidden="true">#</a> 内置
    </h3>
    <p>由 markdown-it 内置支持：</p>
    <ul>
      <li>
        <a
          href="https://help.github.com/articles/organizing-information-with-tables/"
          target="_blank"
          rel="noopener noreferrer"
          >表格<ExternalLinkIcon
        /></a>
        (GFM)
      </li>
      <li>
        <a
          href="https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text"
          target="_blank"
          rel="noopener noreferrer"
          >删除线<ExternalLinkIcon
        /></a>
        (GFM)
      </li>
    </ul>
    <h3 id="标题锚点" tabindex="-1">
      <a class="header-anchor" href="#标题锚点" aria-hidden="true">#</a>
      标题锚点
    </h3>
    <p>
      你可能已经注意到，当你把鼠标放在各个章节的标题上时，会显示出一个
      <code v-pre>#</code> 锚点。点击这个
      <code v-pre>#</code> 锚点，可以直接跳转到对应章节。
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        标题锚点扩展由
        <a
          href="https://github.com/valeriangalliat/markdown-it-anchor"
          target="_blank"
          rel="noopener noreferrer"
          >markdown-it-anchor<ExternalLinkIcon
        /></a>
        支持。
      </p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-anchor"
          >markdown.anchor</RouterLink
        >
      </p>
    </div>
    <h3 id="链接" tabindex="-1">
      <a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接
    </h3>
    <p>
      在你使用 Markdown 的
      <a
        href="https://spec.commonmark.org/0.29/#link-reference-definitions"
        target="_blank"
        rel="noopener noreferrer"
        >链接语法<ExternalLinkIcon
      /></a>
      时， VuePress 会为你进行一些转换。
    </p>
    <p>以我们文档的源文件为例：</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>└─ docs
   └─ zh
      ├─ guide
      │  ├─ getting-started.md
      │  ├─ markdown.md    <span class="token comment"># &lt;- 我们在这里</span>
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
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>原始 Markdown</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 相对路径 --></span>
<span class="token url">[<span class="token content">首页</span>](<span class="token url">../README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考</span>](<span class="token url">../reference/config.md</span>)</span>  
<span class="token url">[<span class="token content">快速上手</span>](<span class="token url">./getting-started.md</span>)</span>  
<span class="token comment">&lt;!-- 绝对路径 --></span>
<span class="token url">[<span class="token content">指南</span>](<span class="token url">/zh/guide/README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考 > markdown.links</span>](<span class="token url">/zh/reference/config.md#links</span>)</span>  
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
    <p><strong>转换为</strong></p>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/zh/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/zh/reference/config.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>配置参考<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/zh/guide/getting-started.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>快速上手<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/zh/guide/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>指南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/zh/reference/config.html#links<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>配置参考 <span class="token entity named-entity" title="&gt;">&amp;gt;</span> markdown.links<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
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
    <p><strong>渲染为</strong></p>
    <p>
      <RouterLink to="/zh/">首页</RouterLink><br />
      <RouterLink to="/zh/reference/config.html">配置参考</RouterLink><br />
      <RouterLink to="/zh/guide/getting-started.html">快速上手</RouterLink
      ><br />
      <RouterLink to="/zh/guide/">指南</RouterLink><br />
      <RouterLink to="/zh/reference/config.html#links"
        >配置参考 &gt; markdown.links</RouterLink
      ><br />
      <a href="https://github.com" target="_blank" rel="noopener noreferrer"
        >GitHub<ExternalLinkIcon
      /></a>
    </p>
    <p><strong>解释</strong></p>
    <ul>
      <li>
        内部链接会被转换为 <code v-pre>&lt;RouterLink&gt;</code> 以便进行 SPA
        导航。
      </li>
      <li>
        指向 <code v-pre>.md</code> 文件的内部链接会被转换为目标页面的
        <RouterLink to="/zh/guide/page.html#%E8%B7%AF%E7%94%B1"
          >路由路径</RouterLink
        >，并且支持绝对路径和相对路径。
      </li>
      <li>
        外部链接会被添加
        <code v-pre
          >target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code
        >
        属性。
      </li>
    </ul>
    <p><strong>建议</strong></p>
    <p>对于指向内部 Markdown 文件的链接，尽可能使用相对路径而不是绝对路径。</p>
    <ul>
      <li>
        相对路径是指向目标文件的有效链接，在你的编辑器或者代码仓库中浏览源文件时也可以正确跳转。
      </li>
      <li>
        相对路径在不同 locales 下都是一致的，这样在翻译你的内容时就不需要修改
        locale 路径了。
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>链接扩展是由我们的内置插件支持的。</p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-links"
          >markdown.links</RouterLink
        >
      </p>
    </div>
    <h3 id="emoji" tabindex="-1">
      <a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji 🎉
    </h3>
    <p>
      你可以在你的 Markdown 内容中输入 <code v-pre>:EMOJICODE:</code> 来添加
      Emoji 表情。
    </p>
    <p>
      前往
      <a
        href="https://github.com/ikatyang/emoji-cheat-sheet"
        target="_blank"
        rel="noopener noreferrer"
        >emoji-cheat-sheet<ExternalLinkIcon
      /></a>
      来查看所有可用的 Emoji 表情和对应代码。
    </p>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>VuePress 2 已经发布 :tada: ！
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>输出</strong></p>
    <p>VuePress 2 已经发布 🎉 ！</p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Emoji 扩展由
        <a
          href="https://github.com/markdown-it/markdown-it-emoji"
          target="_blank"
          rel="noopener noreferrer"
          >markdown-it-emoji<ExternalLinkIcon
        /></a>
        支持。
      </p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-emoji"
          >markdown.emoji</RouterLink
        >
      </p>
    </div>
    <h3 id="目录" tabindex="-1">
      <a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录
    </h3>
    <p>
      如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用
      <code v-pre>[[toc]]</code> 语法。
    </p>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>[[toc]]
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>输出</strong></p>
    <nav class="table-of-contents">
      <ul>
        <li>
          <RouterLink to="#语法扩展">语法扩展</RouterLink>
          <ul>
            <li><RouterLink to="#内置">内置</RouterLink></li>
            <li><RouterLink to="#标题锚点">标题锚点</RouterLink></li>
            <li><RouterLink to="#链接">链接</RouterLink></li>
            <li><RouterLink to="#emoji">Emoji 🎉</RouterLink></li>
            <li><RouterLink to="#目录">目录</RouterLink></li>
            <li><RouterLink to="#代码块">代码块</RouterLink></li>
            <li><RouterLink to="#导入代码块">导入代码块</RouterLink></li>
          </ul>
        </li>
        <li>
          <RouterLink to="#在-markdown-中使用-vue"
            >在 Markdown 中使用 Vue</RouterLink
          >
          <ul>
            <li><RouterLink to="#模板语法">模板语法</RouterLink></li>
            <li><RouterLink to="#组件">组件</RouterLink></li>
          </ul>
        </li>
        <li>
          <RouterLink to="#注意事项">注意事项</RouterLink>
          <ul>
            <li>
              <RouterLink to="#非标准的-html-标签"
                >非标准的 HTML 标签</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <p>
      目录中的标题将会链接到对应的
      <a href="#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9">标题锚点</a
      >，因此如果你禁用了标题锚点，可能会影响目录的功能。
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        目录扩展由
        <a
          href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc"
          target="_blank"
          rel="noopener noreferrer"
          >@mdit-vue/plugin-toc<ExternalLinkIcon
        /></a>
        支持。
      </p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-toc"
          >markdown.toc</RouterLink
        >
      </p>
    </div>
    <h3 id="代码块" tabindex="-1">
      <a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块
    </h3>
    <p>
      下列代码块扩展是在 Node 端进行 Markdown
      解析的时候实现的。这意味着代码块并不会在客户端被处理。
    </p>
    <h4 id="行高亮" tabindex="-1">
      <a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮
    </h4>
    <p>你可以在代码块添加行数范围标记，来为对应代码行进行高亮：</p>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts{1,6-8}</span>
<span class="token code-block language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

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
    <p><strong>输出</strong></p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

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
    <p>行数范围标记的例子：</p>
    <ul>
      <li>行数范围： <code v-pre>{5-8}</code></li>
      <li>多个单行： <code v-pre>{4,7,9}</code></li>
      <li>组合： <code v-pre>{4,7-13,16,23-27,40}</code></li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        行高亮扩展是由我们的内置插件支持的，该扩展 Fork 并修改自
        <a
          href="https://github.com/egoist/markdown-it-highlight-lines"
          target="_blank"
          rel="noopener noreferrer"
          >markdown-it-highlight-lines<ExternalLinkIcon /></a
        >。
      </p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-code-highlightlines"
          >markdown.code.highlightLines</RouterLink
        >
      </p>
    </div>
    <h4 id="行号" tabindex="-1">
      <a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号
    </h4>
    <p>
      你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。
    </p>
    <p>
      你可以在代码块添加 <code v-pre>:line-numbers</code> /
      <code v-pre>:no-line-numbers</code> 标记来覆盖配置项中的设置。
    </p>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="token punctuation">```</span></span>

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts:no-line-numbers</span>
<span class="token code-block language-ts"><span class="token comment">// 行号被禁用</span>
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
    <p><strong>输出</strong></p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token comment">// 行号默认是启用的</span>
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
      ><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>行号扩展是由我们的内置插件支持的。</p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-code-linenumbers"
          >markdown.code.lineNumbers</RouterLink
        >
      </p>
    </div>
    <h4 id="添加-v-pre" tabindex="-1">
      <a class="header-anchor" href="#添加-v-pre" aria-hidden="true">#</a> 添加
      v-pre
    </h4>
    <p>
      由于
      <a href="#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95"
        >模板语法可以在 Markdown 中使用</a
      >，它也同样可以在代码块中生效。
    </p>
    <p>
      为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加
      <a
        href="https://v3.vuejs.org/api/directives.html#v-pre"
        target="_blank"
        rel="noopener noreferrer"
        >v-pre<ExternalLinkIcon
      /></a>
      指令。这一默认行为可以在配置中关闭。
    </p>
    <p>
      你可以在代码块添加 <code v-pre>:v-pre</code> /
      <code v-pre>:no-v-pre</code> 标记来覆盖配置项中的设置。
    </p>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>
        模板语法的字符有可能会被语法高亮器解析，比如 &quot;Mustache&quot;
        语法（即双花括号）。因此，就像下面的例子一样，在某些语言中
        <code v-pre>:no-v-pre</code> 可能并不能生效。
      </p>
      <p>
        如果你无论如何都想在这种语言中使用 Vue
        语法，你可以尝试禁用默认的语法高亮，然后在客户端实现你的自定义代码高亮。
      </p>
    </div>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">md</span>
<span class="token code-block language-md"><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}</span>
<span class="token punctuation">```</span></span>

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">md:no-v-pre</span>
<span class="token code-block language-md"><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}</span>
<span class="token punctuation">```</span></span>

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js:no-v-pre</span>
<span class="token code-block language-js"><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
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
    <p><strong>输出</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
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
      ><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <!--
在 JS 代码块上使用 :no-v-pre 的话，会在使用 shiki 时遇到一些潜在的问题，所以这里
我们实际上没有使用 :no-v-pre ，只是作为一个错误用法的示例。
-->
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>v-pre 扩展是由我们的内置插件支持的。</p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-code-vpre-block"
          >markdown.code.vPre.block</RouterLink
        >
      </p>
    </div>
    <h3 id="导入代码块" tabindex="-1">
      <a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a>
      导入代码块
    </h3>
    <p>你可以使用下面的语法，从文件中导入代码块：</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 最简单的语法 --></span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>如果你只想导入这个文件的一部分：</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 仅导入第 1 行至第 10 行 --></span>
@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 指定代码语言 --></span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      实际上，<code v-pre>[]</code>
      内的第二部分会被作为代码块标记来处理，因此在上面
      <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a>
      章节中提到的语法在这里都可以支持：
    </p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token comment">&lt;!-- 行高亮 --></span>
@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>下面是一个复杂的例子：</p>
    <ul>
      <li>导入 <code v-pre>'../foo.js'</code> 文件的第 3 行至第 10 行</li>
      <li>指定语言为 <code v-pre>'js'</code></li>
      <li>
        对导入代码的第 3 行进行高亮，即 <code v-pre>'../foo.js'</code> 文件的第
        5 行
      </li>
      <li>禁用行号</li>
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
      需要注意的是，路径别名在导入代码语法中不会生效。你可以通过下面的配置来自行处理路径别名：
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
      ><code><span class="token comment">&lt;!-- 会被解析至 'path/to/src/foo.js' --></span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/foo.js</span>)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>导入代码扩展是由我们的内置插件支持的。</p>
      <p>
        配置参考：
        <RouterLink to="/zh/reference/config.html#markdown-importcode"
          >markdown.importCode</RouterLink
        >
      </p>
    </div>
    <h2 id="在-markdown-中使用-vue" tabindex="-1">
      <a class="header-anchor" href="#在-markdown-中使用-vue" aria-hidden="true"
        >#</a
      >
      在 Markdown 中使用 Vue
    </h2>
    <p>这一章节会介绍 Vue 在 Markdown 中一些基本用法。</p>
    <p>
      可以前往
      <RouterLink to="/zh/advanced/cookbook/markdown-and-vue-sfc.html"
        >Cookbook &gt; Markdown 和 Vue SFC</RouterLink
      >
      来了解更多内容。
    </p>
    <h3 id="模板语法" tabindex="-1">
      <a class="header-anchor" href="#模板语法" aria-hidden="true">#</a>
      模板语法
    </h3>
    <p>我们知道：</p>
    <ul>
      <li>Markdown 中允许使用 HTML。</li>
      <li>Vue 模板语法是和 HTML 兼容的。</li>
    </ul>
    <p>
      这意味着， Markdown 中允许直接使用
      <a
        href="https://v3.vuejs.org/guide/template-syntax.html"
        target="_blank"
        rel="noopener noreferrer"
        >Vue 模板语法<ExternalLinkIcon /></a
      >。
    </p>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>一加一等于： {{ 1 + 1 }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> span: {{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>输出</strong></p>
    <p>一加一等于： {{ 1 + 1 }}</p>
    <p>
      <span v-for="i in 3"> span: {{ i }} </span>
    </p>
    <h3 id="组件" tabindex="-1">
      <a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件
    </h3>
    <p>你可以在 Markdown 中直接使用 Vue 组件。</p>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>这是默认主题内置的 <span class="token code-snippet code keyword">`&lt;Badge />`</span> 组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>演示<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p><strong>输出</strong></p>
    <p>
      这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件
      <Badge text="演示" />
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        前往
        <RouterLink to="/zh/reference/components.html">内置组件</RouterLink>
        查看所有内置组件。
      </p>
      <p>
        前往
        <RouterLink to="/zh/reference/default-theme/components.html"
          >默认主题 &gt; 内置组件</RouterLink
        >
        查看默认主题中的所有内置组件。
      </p>
    </div>
    <h2 id="注意事项" tabindex="-1">
      <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a>
      注意事项
    </h2>
    <h3 id="非标准的-html-标签" tabindex="-1">
      <a class="header-anchor" href="#非标准的-html-标签" aria-hidden="true"
        >#</a
      >
      非标准的 HTML 标签
    </h3>
    <p>
      非标准的 HTML 标签不会被 Vue 模板编译器识别成原生 HTML 标签。相反，Vue
      会尝试将这些标签解析为 Vue 组件，而显然这些组件通常是不存在的。 例如：
    </p>
    <ul>
      <li>
        已废弃的 HTML 标签，比如
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center"
          target="_blank"
          rel="noopener noreferrer"
          >&lt;center&gt;<ExternalLinkIcon
        /></a>
        和
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font"
          target="_blank"
          rel="noopener noreferrer"
          >&lt;font&gt;<ExternalLinkIcon
        /></a>
        等。
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/MathML"
          target="_blank"
          rel="noopener noreferrer"
          >MathML 标签<ExternalLinkIcon /></a
        >，它们可能会被一些 markdown-it 的 LaTeX 插件用到。
      </li>
    </ul>
    <p>如果你无论如何都要使用这些标签的话，可以尝试下面两种方法之一：</p>
    <ul>
      <li>
        添加一个
        <a
          href="https://v3.cn.vuejs.org/api/directives.html#v-pre"
          target="_blank"
          rel="noopener noreferrer"
          >v-pre<ExternalLinkIcon
        /></a>
        指令来跳过这个元素和它的子元素的编译过程。注意所有的模板语法也都会失效。
      </li>
      <li>
        设置
        <a
          href="https://v3.vuejs.org/api/application-config.html#compileroptions"
          target="_blank"
          rel="noopener noreferrer"
          >compilerOptions.isCustomElement<ExternalLinkIcon
        /></a>
        来告诉 Vue 模板编译器不要尝试作为组件来解析它们。
        <ul>
          <li>
            对于 <code v-pre>@bundler-webpack</code> ，设置
            <RouterLink to="/zh/reference/bundler/webpack.html#vue"
              >vue.compilerOptions</RouterLink
            >
          </li>
          <li>
            对于 <code v-pre>@bundler-vite</code> ，设置
            <RouterLink to="/zh/reference/bundler/vite.html#vuepluginoptions"
              >vuePluginOptions.template.compilerOptions</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
