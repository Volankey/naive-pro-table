<template>
  <div>
    <h1 id="配置" tabindex="-1">
      <a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置
    </h1>
    <NpmBadge package="@vuepress/cli" />
    <NpmBadge package="@vuepress/core" />
    <h2 id="站点配置" tabindex="-1">
      <a class="header-anchor" href="#站点配置" aria-hidden="true">#</a>
      站点配置
    </h2>
    <h3 id="base" tabindex="-1">
      <a class="header-anchor" href="#base" aria-hidden="true">#</a> base
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>/</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>部署站点的基础路径。</p>
        <p>
          如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到
          <code v-pre>https://foo.github.io/bar/</code>，那么
          <code v-pre>base</code> 应该被设置成
          <code v-pre>&quot;/bar/&quot;</code>。
        </p>
        <p>
          <code v-pre>base</code> 将会作为前缀自动地插入到所有以
          <code v-pre>/</code> 开始的其他选项的链接中，所以你只需要指定一次。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/assets.html#base-helper"
              >指南 &gt; 静态资源 &gt; Base Helper</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/guide/deployment.html"
              >指南 &gt; 部署</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="lang" tabindex="-1">
      <a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>en-US</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>站点的语言。</p>
        <p>
          它将会在最终渲染出的 HTML 中作为
          <code v-pre>&lt;html&gt;</code> 标签的 <code v-pre>lang</code> 属性。
        </p>
        <p>它可以设置在不同语言的 locales 中。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#locales">配置 &gt; locales</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="title" tabindex="-1">
      <a class="header-anchor" href="#title" aria-hidden="true">#</a> title
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>''</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>站点的标题。</p>
        <p>它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。</p>
        <p>它可以设置在不同语言的 locales 中。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#locales">配置 &gt; locales</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="description" tabindex="-1">
      <a class="header-anchor" href="#description" aria-hidden="true">#</a>
      description
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>''</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>站点的描述。</p>
        <p>
          它将会在最终渲染出的 HTML 中作为
          <code v-pre>&lt;meta name=&quot;description&quot; /&gt;</code> 标签的
          <code v-pre>content</code> 属性。它会被每个页面的 Frontmatter 中的
          <code v-pre>description</code> 字段覆盖。
        </p>
        <p>它可以设置在不同语言的 locales 中。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#locales">配置 &gt; locales</a></li>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#description"
              >Frontmatter &gt; description</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="head" tabindex="-1">
      <a class="header-anchor" href="#head" aria-hidden="true">#</a> head
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>HeadConfig[]</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          在最终渲染出的 HTML 的
          <code v-pre>&lt;head&gt;</code> 标签内加入的额外标签。
        </p>
        <p>
          你可以通过
          <code v-pre>[tagName, { attrName: attrValue }, innerHTML?]</code>
          的格式来添加标签。
        </p>
        <p>它可以设置在不同语言的 locales 中。</p>
      </li>
      <li>
        <p>示例：</p>
        <p>增加一个自定义的 favicon ：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/images/logo.png'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
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
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/logo.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        参考：
        <ul>
          <li><a href="#locales">配置 &gt; locales</a></li>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#head"
              >Frontmatter &gt; head</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="locales" tabindex="-1">
      <a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code>
        </p>
      </li>
      <li>
        <p>默认值： <code v-pre>{}</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>多语言支持的各个语言 locales 。</p>
        <p>可以使用的字段有：</p>
        <ul>
          <li><a href="#lang">lang</a></li>
          <li><a href="#title">title</a></li>
          <li><a href="#description">description</a></li>
          <li><a href="#head">head</a></li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/i18n.html">指南 &gt; I18n</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="主题配置" tabindex="-1">
      <a class="header-anchor" href="#主题配置" aria-hidden="true">#</a>
      主题配置
    </h2>
    <h3 id="theme" tabindex="-1">
      <a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Theme</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>设置站点要使用的主题。</p>
        <p>如果不设置该选项，将会使用默认主题。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/theme.html">指南 &gt; 主题</RouterLink>
          </li>
          <li>
            <RouterLink to="/zh/reference/default-theme/config.html"
              >默认主题 &gt; 配置</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="打包工具配置" tabindex="-1">
      <a class="header-anchor" href="#打包工具配置" aria-hidden="true">#</a>
      打包工具配置
    </h2>
    <h3 id="bundler" tabindex="-1">
      <a class="header-anchor" href="#bundler" aria-hidden="true">#</a> bundler
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Bundler</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>设置站点要使用的打包工具。</p>
        <p>如果不设置该选项，将会使用默认的打包工具：</p>
        <ul>
          <li>
            使用 <code v-pre>vuepress</code> 或
            <code v-pre>vuepress-vite</code> 时，默认的打包工具是 Vite 。
          </li>
          <li>
            使用 <code v-pre>vuepress-webpack</code> 时，默认的打包工具是
            Webpack 。
          </li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/bundler.html"
              >指南 &gt; 打包工具</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/bundler/vite.html"
              >打包工具 &gt; Vite</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/bundler/webpack.html"
              >打包工具 &gt; Webpack</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="通用配置项" tabindex="-1">
      <a class="header-anchor" href="#通用配置项" aria-hidden="true">#</a>
      通用配置项
    </h2>
    <h3 id="dest" tabindex="-1">
      <a class="header-anchor" href="#dest" aria-hidden="true">#</a> dest
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>`${sourceDir}/.vuepress/dist`</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定 <code v-pre>vuepress build</code> 命令的输出目录。</p>
      </li>
    </ul>
    <h3 id="temp" tabindex="-1">
      <a class="header-anchor" href="#temp" aria-hidden="true">#</a> temp
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>`${sourceDir}/.vuepress/.temp`</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定临时文件目录。</p>
      </li>
    </ul>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>
        VuePress
        在开发和构建时会加载临时文件，因此临时文件目录应位于项目根目录内部，以便可以正确地解析到依赖。
      </p>
    </div>
    <h3 id="cache" tabindex="-1">
      <a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>`${sourceDir}/.vuepress/.cache`</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定缓存文件目录。</p>
      </li>
    </ul>
    <h3 id="public" tabindex="-1">
      <a class="header-anchor" href="#public" aria-hidden="true">#</a> public
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>`${sourceDir}/.vuepress/public`</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定 Public 文件目录。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"
              >指南 &gt; 静态资源 &gt; Public 文件</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="debug" tabindex="-1">
      <a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否启用 Debug 模式。</p>
        <p>
          该配置项主要提供给开发者使用。同时，我们使用了
          <a
            href="https://github.com/visionmedia/debug"
            target="_blank"
            rel="noopener noreferrer"
            >debug<ExternalLinkIcon
          /></a>
          模块打印 Debug 日志，可以通过
          <code v-pre>DEBUG=vuepress*</code> 环境变量来启用。
        </p>
      </li>
    </ul>
    <h3 id="pagepatterns" tabindex="-1">
      <a class="header-anchor" href="#pagepatterns" aria-hidden="true">#</a>
      pagePatterns
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>
          默认值： <code v-pre>['**/*.md', '!.vuepress', '!node_modules']</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的。</p>
      </li>
    </ul>
    <h3 id="permalinkpattern" tabindex="-1">
      <a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a>
      permalinkPattern
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
        <p>指定为页面生成永久链接的 Pattern 。</p>
        <p>
          它会被每个页面的 Frontmatter 中的
          <code v-pre>permalinkPattern</code> 字段覆盖。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#permalinkpattern"
              >Frontmatter &gt; permalinkPattern</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="dev-配置项" tabindex="-1">
      <a class="header-anchor" href="#dev-配置项" aria-hidden="true">#</a> Dev
      配置项
    </h2>
    <h3 id="host" tabindex="-1">
      <a class="header-anchor" href="#host" aria-hidden="true">#</a> host
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'0.0.0.0'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定开发服务器的主机名。</p>
      </li>
    </ul>
    <h3 id="port" tabindex="-1">
      <a class="header-anchor" href="#port" aria-hidden="true">#</a> port
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>number</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>8080</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定开发服务器的端口号。</p>
      </li>
    </ul>
    <h3 id="open" tabindex="-1">
      <a class="header-anchor" href="#open" aria-hidden="true">#</a> open
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否在开发服务器启动后打开浏览器。</p>
      </li>
    </ul>
    <h3 id="templatedev" tabindex="-1">
      <a class="header-anchor" href="#templatedev" aria-hidden="true">#</a>
      templateDev
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'@vuepress/client/templates/dev.html'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定开发时使用的 HTML 模板。</p>
      </li>
    </ul>
    <h2 id="build-配置项" tabindex="-1">
      <a class="header-anchor" href="#build-配置项" aria-hidden="true">#</a>
      Build 配置项
    </h2>
    <h3 id="shouldpreload" tabindex="-1">
      <a class="header-anchor" href="#shouldpreload" aria-hidden="true">#</a>
      shouldPreload
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >((file: string, type: string) =&gt; boolean)) | boolean</code
          >
        </p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          一个函数，用来控制哪些文件是需要生成对应的
          <code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code> 标签的。设置为
          <code v-pre>true</code> 或者
          <code v-pre>false</code> 来完全启用或禁用它。
        </p>
        <p>
          默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用
          <code v-pre>true</code> 就可以了。
        </p>
      </li>
    </ul>
    <h3 id="shouldprefetch" tabindex="-1">
      <a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a>
      shouldPrefetch
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >((file: string, type: string) =&gt; boolean)) | boolean</code
          >
        </p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          一个函数，用来控制哪些文件是需要生成对应的
          <code v-pre>&lt;link rel=&quot;prefetch&quot;&gt;</code>
          标签的。设置为 <code v-pre>true</code> 或者
          <code v-pre>false</code> 来完全启用或禁用它。
        </p>
        <p>
          如果你将它设置为
          <code v-pre>true</code>
          ，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
        </p>
      </li>
    </ul>
    <h3 id="templatebuild" tabindex="-1">
      <a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a>
      templateBuild
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>
          默认值： <code v-pre>'@vuepress/client/templates/build.html'</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>指定构建时使用的 HTML 模板。</p>
      </li>
    </ul>
    <h2 id="markdown-配置" tabindex="-1">
      <a class="header-anchor" href="#markdown-配置" aria-hidden="true">#</a>
      Markdown 配置
    </h2>
    <h3 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      markdown
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>MarkdownOptions</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>{}</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>对 VuePress 内置的 Markdown 语法扩展进行配置。</p>
        <p>
          它可以接收
          <a
            href="https://github.com/markdown-it/markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it<ExternalLinkIcon
          /></a>
          的所有配置项，以及下列额外的配置项。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a
              href="https://github.com/markdown-it/markdown-it#init-with-presets-and-options"
              target="_blank"
              rel="noopener noreferrer"
              >markdown-it &gt; Init with presets and options<ExternalLinkIcon
            /></a>
          </li>
          <li>
            <RouterLink
              to="/zh/guide/markdown.html#%E8%AF%AD%E6%B3%95%E6%89%A9%E5%B1%95"
              >指南 &gt; Markdown &gt; 语法扩展</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-anchor" tabindex="-1">
      <a class="header-anchor" href="#markdown-anchor" aria-hidden="true">#</a>
      markdown.anchor
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>AnchorPluginOptions | false</code></p>
      </li>
      <li>
        <p>默认值：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  permalink<span class="token operator">:</span> anchorPlugin<span class="token punctuation">.</span>permalink<span class="token punctuation">.</span><span class="token function">ariaHidden</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'header-anchor'</span><span class="token punctuation">,</span>
    <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">'#'</span><span class="token punctuation">,</span>
    space<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    placement<span class="token operator">:</span> <span class="token string">'before'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
    <ul>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/valeriangalliat/markdown-it-anchor"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-anchor<ExternalLinkIcon
          /></a>
          的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 标题锚点</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-assets" tabindex="-1">
      <a class="header-anchor" href="#markdown-assets" aria-hidden="true">#</a>
      markdown.assets
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>AssetsPluginOptions | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>VuePress 内置的 markdown-it assets 插件的配置项。</p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>除非你了解它的用途，否则你不应该设置该配置项。</p>
    </div>
    <h3 id="markdown-code" tabindex="-1">
      <a class="header-anchor" href="#markdown-code" aria-hidden="true">#</a>
      markdown.code
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>CodePluginOptions | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>VuePress 内置的 markdown-it code 插件的配置项。</p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="markdown-code-highlightlines" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-code-highlightlines"
        aria-hidden="true"
        >#</a
      >
      markdown.code.highlightLines
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否启用代码块行高亮。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E8%A1%8C%E9%AB%98%E4%BA%AE"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt;
              行高亮</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="markdown-code-linenumbers" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-code-linenumbers"
        aria-hidden="true"
        >#</a
      >
      markdown.code.lineNumbers
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean | number</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>配置代码块行号。</p>
        <ul>
          <li>布尔值 <code v-pre>boolean</code> 代表是否启用代码块行号。</li>
          <li>
            数字
            <code v-pre>number</code>
            代表显示行号所需的最少行数。例如，如果你将它设置为
            <code v-pre>4</code> ，那么只有在你的代码块包含至少 4
            行代码时才会启用行号。
          </li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt;
              行号</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="markdown-code-prewrapper" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-code-prewrapper"
        aria-hidden="true"
        >#</a
      >
      markdown.code.preWrapper
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否在 <code v-pre>&lt;pre&gt;</code> 标签外额外包裹一层。</p>
        <p>
          <code v-pre>highlightLines</code> 和
          <code v-pre>lineNumbers</code>
          依赖于这个额外的包裹层。这换句话说，如果你禁用了
          <code v-pre>preWrapper</code> ，那么行高亮和行号也会被同时禁用。
        </p>
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        如果你想要在客户端来实现这些功能时，可以禁用该配置项。比如使用
        <a
          href="https://prismjs.com/plugins/line-highlight/"
          target="_blank"
          rel="noopener noreferrer"
          >Prismjs Line Highlight<ExternalLinkIcon
        /></a>
        或者
        <a
          href="https://prismjs.com/plugins/line-numbers/"
          target="_blank"
          rel="noopener noreferrer"
          >Prismjs Line Numbers<ExternalLinkIcon /></a
        >。
      </p>
    </div>
    <h4 id="markdown-code-vpre-block" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-code-vpre-block"
        aria-hidden="true"
        >#</a
      >
      markdown.code.vPre.block
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          是否在代码块的 <code v-pre>&lt;pre&gt;</code> 标签上添加
          <code v-pre>v-pre</code> 指令。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E6%B7%BB%E5%8A%A0-v-pre"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 添加
              v-pre</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="markdown-code-vpre-inline" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-code-vpre-inline"
        aria-hidden="true"
        >#</a
      >
      markdown.code.vPre.inline
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          是否在行内代码的 <code v-pre>&lt;code&gt;</code> 标签上添加
          <code v-pre>v-pre</code> 指令。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E6%B7%BB%E5%8A%A0-v-pre"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 添加
              v-pre</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-component" tabindex="-1">
      <a class="header-anchor" href="#markdown-component" aria-hidden="true"
        >#</a
      >
      markdown.component
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>undefined | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-component<ExternalLinkIcon
          /></a>
          插件的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>除非你了解它的用途，否则你不应该设置该配置项。</p>
    </div>
    <h3 id="markdown-emoji" tabindex="-1">
      <a class="header-anchor" href="#markdown-emoji" aria-hidden="true">#</a>
      markdown.emoji
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>EmojiPluginOptions | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/markdown-it/markdown-it-emoji"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-emoji<ExternalLinkIcon
          /></a>
          的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#emoji"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; Emoji</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-frontmatter" tabindex="-1">
      <a class="header-anchor" href="#markdown-frontmatter" aria-hidden="true"
        >#</a
      >
      markdown.frontmatter
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>FrontmatterPluginOptions | false</code></p>
      </li>
      <li>
        <p>默认值：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  grayMatterOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    excerpt<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    excerpt_separator<span class="token operator">:</span> <span class="token string">'&lt;!-- more -->'</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-frontmatter<ExternalLinkIcon
          /></a>
          插件的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/page.html#frontmatter"
              >指南 &gt; 页面 &gt; Frontmatter</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#frontmatter"
              >Node API &gt; Page 属性 &gt; frontmatter</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#excerpt"
              >Node API &gt; Page 属性 &gt; excerpt</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>除非你了解它的用途，否则你不应该设置该配置项。</p>
    </div>
    <h3 id="markdown-headers" tabindex="-1">
      <a class="header-anchor" href="#markdown-headers" aria-hidden="true">#</a>
      markdown.headers
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>HeadersPluginOptions | false</code></p>
      </li>
      <li>
        <p>默认值：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
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
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-headers<ExternalLinkIcon
          /></a>
          插件的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/node-api.html#headers"
              >Node API &gt; Page 属性 &gt; headers</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-title" tabindex="-1">
      <a class="header-anchor" href="#markdown-title" aria-hidden="true">#</a>
      markdown.title
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>undefined | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-title"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-title<ExternalLinkIcon
          /></a>
          插件的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>除非你了解它的用途，否则你不应该设置该配置项。</p>
    </div>
    <h3 id="markdown-importcode" tabindex="-1">
      <a class="header-anchor" href="#markdown-importcode" aria-hidden="true"
        >#</a
      >
      markdown.importCode
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>ImportCodePluginOptions | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>VuePress 内置的 markdown-it 导入代码插件的配置项。</p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 导入代码块</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="markdown-importcode-handleimportpath" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-importcode-handleimportpath"
        aria-hidden="true"
        >#</a
      >
      markdown.importCode.handleImportPath
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>(str: string) =&gt; string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>(str) =&gt; str</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>一个函数，用于处理导入代码语法中的文件导入路径。</p>
      </li>
    </ul>
    <h3 id="markdown-links" tabindex="-1">
      <a class="header-anchor" href="#markdown-links" aria-hidden="true">#</a>
      markdown.links
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>LinkPluginOptions | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>VuePress 内置的 markdown-it 链接插件的配置项。</p>
        <p>
          它可以把站内链接转换为
          <code v-pre>&lt;RouterLink&gt;</code>
          ，并且可以在站外链接上添加额外的属性和图标。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E9%93%BE%E6%8E%A5"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 链接</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="markdown-links-internaltag" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-links-internaltag"
        aria-hidden="true"
        >#</a
      >
      markdown.links.internalTag
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'RouterLink'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>内部链接所使用的标签。</p>
        <p>
          默认情况下，该插件会把内部链接转换为
          <code v-pre>&lt;RouterLink&gt;</code> 。你可以把该选项设置为
          <code v-pre>'a'</code> 来禁用这个功能。
        </p>
      </li>
    </ul>
    <h4 id="markdown-links-externalattrs" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-links-externalattrs"
        aria-hidden="true"
        >#</a
      >
      markdown.links.externalAttrs
    </h4>
    <ul>
      <li>
        <p>类型： <code v-pre>Record&lt;string, string&gt;</code></p>
      </li>
      <li>
        <p>
          默认值：
          <code v-pre>{ target: '_blank', rel: 'noopener noreferrer' }</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>为外部链接添加额外的属性。</p>
      </li>
    </ul>
    <h3 id="markdown-sfc" tabindex="-1">
      <a class="header-anchor" href="#markdown-sfc" aria-hidden="true">#</a>
      markdown.sfc
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>SfcPluginOptions | false</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-sfc<ExternalLinkIcon
          /></a>
          插件的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/advanced/cookbook/markdown-and-vue-sfc.html"
              >Cookbook &gt; Markdown 与 Vue SFC</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#sfcblocks"
              >Node API &gt; Page 属性 &gt; sfcBlocks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-slugify" tabindex="-1">
      <a class="header-anchor" href="#markdown-slugify" aria-hidden="true">#</a>
      markdown.slugify
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>(str: string) =&gt; string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>默认使用的 slugify 函数。</p>
      </li>
    </ul>
    <h3 id="markdown-toc" tabindex="-1">
      <a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a>
      markdown.toc
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>TocPluginOptions | false</code></p>
      </li>
      <li>
        <p>默认值：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
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
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-toc<ExternalLinkIcon
          /></a>
          插件的配置项。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/markdown.html#%E7%9B%AE%E5%BD%95"
              >指南 &gt; Markdown &gt; 语法扩展 &gt; 目录</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="插件配置" tabindex="-1">
      <a class="header-anchor" href="#插件配置" aria-hidden="true">#</a>
      插件配置
    </h2>
    <h3 id="plugins" tabindex="-1">
      <a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>PluginConfig[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>要使用的插件。</p>
        <p>该配置项接收一个数组，其中的每一个数组项是一个或一组插件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/plugin.html">指南 &gt; 插件</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="插件-api" tabindex="-1">
      <a class="header-anchor" href="#插件-api" aria-hidden="true">#</a> 插件
      API
    </h2>
    <p>
      用户配置文件同样可以作为一个 VuePress 插件，所以除了
      <code v-pre>name</code> 和
      <code v-pre>multiple</code> 配置项以外的所有插件 API
      都可以在配置文件中使用。
    </p>
    <p>
      前往
      <RouterLink to="/zh/reference/plugin-api.html">插件 API 参考</RouterLink>
      查看所有插件 API 。
    </p>
  </div>
</template>
