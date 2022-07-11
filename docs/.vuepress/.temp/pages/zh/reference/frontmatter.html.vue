<template>
  <div>
    <h1 id="frontmatter" tabindex="-1">
      <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a>
      Frontmatter
    </h1>
    <NpmBadge package="@vuepress/client" />
    <NpmBadge package="@vuepress/markdown" />
    <h2 id="date" tabindex="-1">
      <a class="header-anchor" href="#date" aria-hidden="true">#</a> date
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面的创建日期。</p>
        <p>
          应按照 <code v-pre>yyyy-MM-dd</code> 的格式来指定日期，或者遵循
          <a
            href="https://yaml.org/type/timestamp.html"
            target="_blank"
            rel="noopener noreferrer"
            >YAML Timestamp Type<ExternalLinkIcon
          /></a>
          。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/node-api.html#date"
              >Node API &gt; Page 属性 &gt; date</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="description" tabindex="-1">
      <a class="header-anchor" href="#description" aria-hidden="true">#</a>
      description
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面的描述。</p>
        <p>它将会覆盖站点配置中的 <code v-pre>description</code> 配置项。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#description"
              >配置 &gt; description</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="head" tabindex="-1">
      <a class="header-anchor" href="#head" aria-hidden="true">#</a> head
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>HeadConfig[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面 <code v-pre>&lt;head&gt;</code> 标签内添加的额外标签。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> yaml 数组语法
  <span class="token punctuation">-</span> <span class="token punctuation">[</span>meta<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> bar <span class="token punctuation">,</span> <span class="token key atrule">content</span><span class="token punctuation">:</span> 方括号语法 <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
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
    <p>渲染为：</p>
    <div class="language-html ext-html line-numbers-mode">
      <pre
        v-pre
        class="language-html"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yaml 数组语法<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方括号语法<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
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
            <RouterLink to="/zh/reference/config.html#head"
              >配置 &gt; head</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="lang" tabindex="-1">
      <a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面的语言。</p>
        <p>它将会覆盖站点配置中的 <code v-pre>lang</code> 配置项</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#lang"
              >配置 &gt; lang</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#lang"
              >Node API &gt; Page 属性 &gt; lang</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="layout" tabindex="-1">
      <a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面的布局。</p>
        <p>
          布局是由主题提供的。如果你不指定该 Frontmatter
          ，则会使用默认布局。你应该参考主题自身的文档来了解其提供了哪些布局。
        </p>
        <p>如果主题布局无法满足你的需求，你可以使用自定义布局组件。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <p>在 <code v-pre>.vuepress/client.ts</code> 文件中注册一个布局组件：</p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>
<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">'./CustomLayout.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'CustomLayout'</span><span class="token punctuation">,</span> CustomLayout<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
        <div class="line-number"></div>
      </div>
    </div>
    <p>在 Frontmatter 中设置自定义布局：</p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>
<span class="token punctuation">---</span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="permalink" tabindex="-1">
      <a class="header-anchor" href="#permalink" aria-hidden="true">#</a>
      permalink
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面的永久链接。</p>
        <p>它将会覆盖根据文件路径来决定的默认路由路径。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a href="#permalinkpattern">Frontmatter &gt; permalinkPattern</a>
          </li>
          <li>
            <RouterLink to="/zh/guide/page.html#%E8%B7%AF%E7%94%B1"
              >指南 &gt; 页面 &gt; 路由</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#permalink"
              >Node API &gt; Page 属性 &gt; permalink</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="permalinkpattern" tabindex="-1">
      <a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a>
      permalinkPattern
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>为页面生成永久链接的 Pattern 。</p>
        <p>
          它将会覆盖站点配置中的 <code v-pre>permalinkPattern</code> 配置项。
        </p>
        <p>
          如果 Frontmatter 中设置了
          <code v-pre>permalink</code> ，那么这个字段则不会生效。
        </p>
      </li>
      <li>
        <p>使用：</p>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code v-pre>:year</code></td>
              <td>创建日期的 年 部分</td>
            </tr>
            <tr>
              <td><code v-pre>:month</code></td>
              <td>创建日期的 月 部分</td>
            </tr>
            <tr>
              <td><code v-pre>:day</code></td>
              <td>创建日期的 日 部分</td>
            </tr>
            <tr>
              <td><code v-pre>:slug</code></td>
              <td>页面文件名的 Slug</td>
            </tr>
            <tr>
              <td><code v-pre>:raw</code></td>
              <td>原始路由路径</td>
            </tr>
          </tbody>
        </table>
        <p>
          <code v-pre>:year</code>, <code v-pre>:month</code> 和
          <code v-pre>:day</code> Pattern 根据如下优先级进行解析：
        </p>
        <ul>
          <li>Frontmatter 中的 <code v-pre>date</code> 字段。</li>
          <li>
            符合 <code v-pre>yyyy-MM-dd-foobar.md</code> 或
            <code v-pre>yyyy-MM-foobar.md</code> 日期格式的文件名。
          </li>
          <li>
            符合 <code v-pre>yyyy/MM/dd/foobar.md</code> 或
            <code v-pre>yyyy/MM/foobar.md</code> 日期格式的目录名。
          </li>
          <li>默认值 <code v-pre>0000-00-00</code> 。</li>
        </ul>
      </li>
      <li>
        <p>示例 1 ：</p>
        <p>页面文件名是 <code v-pre>foo-bar.md</code> 。</p>
        <p>页面 Frontmatter 是：</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2021-01-03</span>
<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      那么页面的永久链接将会是 <code v-pre>2021/01/03/foo-bar.html</code> 。
    </p>
    <ul>
      <li>
        <p>示例 2 ：</p>
        <p>页面文件名是 <code v-pre>2021-01-03-bar-baz.md</code>。</p>
        <p>页面 Frontmatter 是：</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      那么页面的永久链接将会是 <code v-pre>2021/01/03/bar-baz.html</code> 。
    </p>
    <ul>
      <li>
        参考：
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#permalinkpattern"
              >配置 &gt; permalinkPattern</RouterLink
            >
          </li>
          <li><a href="#date">Frontmatter &gt; date</a></li>
          <li><a href="#permalink">Frontmatter &gt; permalink</a></li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#permalink"
              >Node API &gt; Page 属性 &gt; permalink</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="routemeta" tabindex="-1">
      <a class="header-anchor" href="#routemeta" aria-hidden="true">#</a>
      routeMeta
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>Record&lt;string, unknown&gt;</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>附加到页面路由的自定义数据。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/node-api.html#routeMeta"
              >Node API &gt; Page 属性 &gt; routeMeta</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="title" tabindex="-1">
      <a class="header-anchor" href="#title" aria-hidden="true">#</a> title
    </h2>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面的标题。</p>
        <p>
          如果你不在 Frontmatter 中设置
          <code v-pre>title</code> ，那么页面中第一个一级标题（即
          <code v-pre># title</code>）的内容会被当作标题使用。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/node-api.html#title"
              >Node API &gt; Page 属性 &gt; title</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
