<template>
  <div>
    <h1 id="从-v1-迁移" tabindex="-1">
      <a class="header-anchor" href="#从-v1-迁移" aria-hidden="true">#</a> 从 v1
      迁移
    </h1>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>
        VuePress v1 的插件和主题与 VuePress v2 不兼容。你需要将它们升级到与 v2
        对应的版本。
      </p>
    </div>
    <p>VuePress v2 的一些主要改动和优化：</p>
    <ul>
      <li>
        VuePress v2 现在使用 Vue 3
        ，因此你要保证你的组件和其他客户端文件是适用于 Vue 3 的。
      </li>
      <li>
        VuePress v2 是使用 TypeScript
        开发的，因此它现在提供了更好的类型支持。我们强烈推荐你使用 TypeScript
        来开发插件和主题。 VuePress 配置文件也同样支持 TypeScript
        ，你可以直接使用 <code v-pre>.vuepress/config.ts</code> 。
      </li>
      <li>
        VuePress v2 支持使用 Webpack 和 Vite 作为打包工具。现在默认的打包工具是
        Vite ，但你仍然可以选择使用 Webpack 。你甚至可以在开发模式使用 Vite
        来获取更好的开发体验，而在构建模式使用 Webpack
        来获取更好的浏览器兼容性。
      </li>
    </ul>
    <p>
      VuePress v2 的核心思想和流程是和 v1 一致的，但 v2 API
      经过了重新设计，更加标准化。因此在将现有的 v1 项目迁移至 v2
      时，你很可能会遇到一些 Breaking Changes 。本指南将帮助你将 v1 的站点 /
      插件 / 主题迁移至 v2 。
    </p>
    <ul>
      <li>
        如果你是一个普通用户，你需要阅读
        <a href="#%E7%BB%99%E7%94%A8%E6%88%B7">给用户</a> 的指南。
      </li>
      <li>
        如果你是一个插件作者，你需要阅读
        <a href="#%E7%BB%99%E6%8F%92%E4%BB%B6%E4%BD%9C%E8%80%85">给插件作者</a>
        的指南。
      </li>
      <li>
        如果你是一个主题作者，你需要阅读
        <a href="#%E7%BB%99%E4%B8%BB%E9%A2%98%E4%BD%9C%E8%80%85">给主题作者</a>
        的指南。
      </li>
    </ul>
    <h2 id="给用户" tabindex="-1">
      <a class="header-anchor" href="#给用户" aria-hidden="true">#</a> 给用户
    </h2>
    <h3 id="用户配置变更" tabindex="-1">
      <a class="header-anchor" href="#用户配置变更" aria-hidden="true">#</a>
      用户配置变更
    </h3>
    <h4 id="theme" tabindex="-1">
      <a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme
    </h4>
    <p>不再支持通过字符串使用主题。需要直接引入主题。</p>
    <div class="language-diff ext-diff line-numbers-mode">
      <pre
        v-pre
        class="language-diff"
      ><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   theme: '@vuepress/theme-default',
</span><span class="token prefix deleted">-</span><span class="token line">   themeConfig: {
</span><span class="token prefix deleted">-</span><span class="token line">     // 默认主题配置
</span><span class="token prefix deleted">-</span><span class="token line">   },
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const { defaultTheme } = require('@vuepress/theme-default')
</span><span class="token prefix inserted">+</span><span class="token line"> module.exports = {
</span><span class="token prefix inserted">+</span><span class="token line">   theme: defaultTheme({
</span><span class="token prefix inserted">+</span><span class="token line">     // 默认主题配置
</span><span class="token prefix inserted">+</span><span class="token line">   })
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre>
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
      </div>
    </div>
    <h4 id="themeconfig" tabindex="-1">
      <a class="header-anchor" href="#themeconfig" aria-hidden="true">#</a>
      themeConfig
    </h4>
    <p>移除。直接向主题传入配置。</p>
    <h4 id="plugins" tabindex="-1">
      <a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins
    </h4>
    <p>不再支持通过字符串使用插件。需要直接引入插件。</p>
    <div class="language-diff ext-diff line-numbers-mode">
      <pre
        v-pre
        class="language-diff"
      ><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   plugins: [
</span><span class="token prefix deleted">-</span><span class="token line">     [
</span><span class="token prefix deleted">-</span><span class="token line">       '@vuepress/plugin-google-analytics',
</span><span class="token prefix deleted">-</span><span class="token line">       {
</span><span class="token prefix deleted">-</span><span class="token line">         id: 'G-XXXXXXXXXX',
</span><span class="token prefix deleted">-</span><span class="token line">       },
</span><span class="token prefix deleted">-</span><span class="token line">     ],
</span><span class="token prefix deleted">-</span><span class="token line">   ],
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
</span><span class="token prefix inserted">+</span><span class="token line"> module.exports = {
</span><span class="token prefix inserted">+</span><span class="token line">   plugins: [
</span><span class="token prefix inserted">+</span><span class="token line">     googleAnalyticsPlugin({
</span><span class="token prefix inserted">+</span><span class="token line">         id: 'G-XXXXXXXXXX',
</span><span class="token prefix inserted">+</span><span class="token line">     }),
</span><span class="token prefix inserted">+</span><span class="token line">   ],
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre>
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
      </div>
    </div>
    <h4 id="shouldprefetch" tabindex="-1">
      <a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a>
      shouldPrefetch
    </h4>
    <p>
      默认值从 <code v-pre>() =&gt; true</code> 更改为
      <code v-pre>true</code> 。
    </p>
    <h4 id="extrawatchfiles" tabindex="-1">
      <a class="header-anchor" href="#extrawatchfiles" aria-hidden="true">#</a>
      extraWatchFiles
    </h4>
    <p>移除。</p>
    <p>
      你可以手动在
      <RouterLink to="/zh/reference/plugin-api.html#onwatched"
        >onWatched</RouterLink
      >
      Hook 中监听文件变化。
    </p>
    <h4 id="patterns" tabindex="-1">
      <a class="header-anchor" href="#patterns" aria-hidden="true">#</a>
      patterns
    </h4>
    <p>重命名为 <code v-pre>pagePatterns</code> 。</p>
    <h4 id="markdown-linenumbers" tabindex="-1">
      <a class="header-anchor" href="#markdown-linenumbers" aria-hidden="true"
        >#</a
      >
      markdown.lineNumbers
    </h4>
    <p>
      移动至
      <RouterLink to="/zh/reference/config.html#markdown-code-linenumbers"
        >markdown.code.lineNumbers</RouterLink
      >
      。
    </p>
    <p>默认值从 <code v-pre>false</code> 更改为 <code v-pre>true</code> 。</p>
    <h4 id="markdown-pagesuffix" tabindex="-1">
      <a class="header-anchor" href="#markdown-pagesuffix" aria-hidden="true"
        >#</a
      >
      markdown.pageSuffix
    </h4>
    <p>移除。</p>
    <h4 id="markdown-externallinks" tabindex="-1">
      <a class="header-anchor" href="#markdown-externallinks" aria-hidden="true"
        >#</a
      >
      markdown.externalLinks
    </h4>
    <p>
      移动至
      <RouterLink to="/zh/reference/config.html#markdown-links"
        >markdown.links.externalAttrs</RouterLink
      >
      。
    </p>
    <h4 id="markdown-toc" tabindex="-1">
      <a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a>
      markdown.toc
    </h4>
    <p>有改动。</p>
    <p>
      参考
      <RouterLink to="/zh/reference/config.html#markdown-toc"
        >配置 &gt; markdown.toc</RouterLink
      >
    </p>
    <h4 id="markdown-plugins" tabindex="-1">
      <a class="header-anchor" href="#markdown-plugins" aria-hidden="true">#</a>
      markdown.plugins
    </h4>
    <p>移除。</p>
    <p>
      在
      <RouterLink to="/zh/reference/plugin-api.html#extendsmarkdown"
        >extendsMarkdown</RouterLink
      >
      Hook 中使用 markdown-it 插件。
    </p>
    <h4 id="markdown-extendmarkdown" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-extendmarkdown"
        aria-hidden="true"
        >#</a
      >
      markdown.extendMarkdown
    </h4>
    <p>移除。</p>
    <p>
      使用
      <RouterLink to="/zh/reference/plugin-api.html#extendsmarkdown"
        >extendsMarkdown</RouterLink
      >
      Hook 。
    </p>
    <h4 id="markdown-extractheaders" tabindex="-1">
      <a
        class="header-anchor"
        href="#markdown-extractheaders"
        aria-hidden="true"
        >#</a
      >
      markdown.extractHeaders
    </h4>
    <p>
      移动至
      <RouterLink to="/zh/reference/config.html#markdown-headers"
        >markdown.headers</RouterLink
      >
      。
    </p>
    <h4 id="webpack-相关配置" tabindex="-1">
      <a class="header-anchor" href="#webpack-相关配置" aria-hidden="true">#</a>
      Webpack 相关配置
    </h4>
    <p>
      所有 Webpack 相关的配置都移动至
      <code v-pre>@vuepress/bundler-webpack</code> 的配置项中，包括：
    </p>
    <ul>
      <li><code v-pre>postcss</code></li>
      <li><code v-pre>stylus</code></li>
      <li><code v-pre>scss</code></li>
      <li><code v-pre>sass</code></li>
      <li><code v-pre>less</code></li>
      <li><code v-pre>chainWebpack</code></li>
      <li><code v-pre>configureWebpack</code></li>
      <li>
        <code v-pre>evergreen</code>：默认值从 <code v-pre>false</code> 更改为
        <code v-pre>true</code>
      </li>
    </ul>
    <div class="language-diff ext-diff line-numbers-mode">
      <pre
        v-pre
        class="language-diff"
      ><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   sass: { /* ... */ },
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const { webpackBundler } = require('@vuepress/bundler-webpack')
</span><span class="token prefix inserted">+</span><span class="token line"> module.exports = {
</span><span class="token prefix inserted">+</span><span class="token line">   bundler: webpackBundler({
</span><span class="token prefix inserted">+</span><span class="token line">     sass: { /* ... */ },
</span><span class="token prefix inserted">+</span><span class="token line">   }),
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre>
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
      请参考
      <RouterLink to="/zh/guide/bundler.html">指南 &gt; Bundler</RouterLink> 。
    </p>
    <h3 id="frontmatter-变更" tabindex="-1">
      <a class="header-anchor" href="#frontmatter-变更" aria-hidden="true">#</a>
      Frontmatter 变更
    </h3>
    <h4 id="meta" tabindex="-1">
      <a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta
    </h4>
    <p>移除。</p>
    <p>
      改为使用
      <RouterLink to="/zh/reference/frontmatter.html#head">head</RouterLink>
      。例如：
    </p>
    <div class="language-yaml ext-yml line-numbers-mode">
      <pre
        v-pre
        class="language-yaml"
      ><code><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> bar
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> link
    <span class="token punctuation">-</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> canonical
      <span class="token key atrule">href</span><span class="token punctuation">:</span> foobar
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> script
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> console.log('hello from frontmatter');
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
    <p>和以下结构相同：</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'meta'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'canonical'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'foobar'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'script'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">console.log('hello from frontmatter');</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
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
    <h3 id="永久链接-patterns-变更" tabindex="-1">
      <a class="header-anchor" href="#永久链接-patterns-变更" aria-hidden="true"
        >#</a
      >
      永久链接 Patterns 变更
    </h3>
    <ul>
      <li><code v-pre>:i_month</code>：移除</li>
      <li><code v-pre>:i_day</code>：移除</li>
      <li><code v-pre>:minutes</code>：移除（v1 文档中未列出）</li>
      <li><code v-pre>:seconds</code>：移除（v1 文档中未列出）</li>
      <li><code v-pre>:regular</code>：重命名为 <code v-pre>:raw</code></li>
    </ul>
    <p>
      参考
      <RouterLink to="/zh/reference/frontmatter.html#permalinkpattern"
        >Frontmatter &gt; permalinkPattern</RouterLink
      >
      。
    </p>
    <h3 id="调色板系统变更" tabindex="-1">
      <a class="header-anchor" href="#调色板系统变更" aria-hidden="true">#</a>
      调色板系统变更
    </h3>
    <p>
      VuePress v1 的 Stylus 调色板系统 （即
      <code v-pre>styles/palette.styl</code> 和
      <code v-pre>styles/index.styl</code>） 不再由 VuePress Core 默认提供支持。
    </p>
    <p>
      调色板系统提取到了
      <RouterLink to="/zh/reference/plugin/palette.html"
        >@vuepress/plugin-palette</RouterLink
      >
      当中。
    </p>
    <p>
      主题作者可以使用自己的方式来为用户提供自定义样式的能力，而不必被限制在
      Stylus 当中。
    </p>
    <p>
      如果你使用的是默认主题，那么调色板系统仍然存在，但改为使用 SASS
      ，并且大部分变量都迁移为 CSS 变量。参考
      <RouterLink to="/zh/reference/default-theme/styles.html"
        >默认主题 &gt; 样式</RouterLink
      >
      。
    </p>
    <h3 id="约定文件变更" tabindex="-1">
      <a class="header-anchor" href="#约定文件变更" aria-hidden="true">#</a>
      约定文件变更
    </h3>
    <h4 id="vuepress-enhanceapp-js" tabindex="-1">
      <a class="header-anchor" href="#vuepress-enhanceapp-js" aria-hidden="true"
        >#</a
      >
      .vuepress/enhanceApp.js
    </h4>
    <p>
      重命名为 <code v-pre>.vuepress/client.{js,ts}</code> ，使用方法也有改动。
    </p>
    <p>
      参考
      <RouterLink to="/zh/advanced/cookbook/usage-of-client-config.html"
        >深入 &gt; Cookbook &gt; 客户端配置的使用方法</RouterLink
      >
      。
    </p>
    <h4 id="vuepress-components" tabindex="-1">
      <a class="header-anchor" href="#vuepress-components" aria-hidden="true"
        >#</a
      >
      .vuepress/components/
    </h4>
    <p>在该目录下的文件不会被自动注册为 Vue 组件。</p>
    <p>
      你需要使用
      <RouterLink to="/zh/reference/plugin/register-components.html"
        >@vuepress/plugin-register-components</RouterLink
      >
      ，或者在 <code v-pre>.vuepress/client.{js,ts}</code> 中手动注册你的组件。
    </p>
    <h4 id="vuepress-theme" tabindex="-1">
      <a class="header-anchor" href="#vuepress-theme" aria-hidden="true">#</a>
      .vuepress/theme/
    </h4>
    <p>即使该目录存在，也不会被隐式默认当作本地主题目录。</p>
    <p>
      你需要在
      <RouterLink to="/zh/reference/config.html#theme">theme</RouterLink>
      配置项中显式引入并使用本地主题。
    </p>
    <h3 id="markdown-插槽变更" tabindex="-1">
      <a class="header-anchor" href="#markdown-插槽变更" aria-hidden="true"
        >#</a
      >
      Markdown 插槽变更
    </h3>
    <p>Markdown 插槽不再被支持。</p>
    <h3 id="cli-变更" tabindex="-1">
      <a class="header-anchor" href="#cli-变更" aria-hidden="true">#</a> CLI
      变更
    </h3>
    <h4 id="eject-命令" tabindex="-1">
      <a class="header-anchor" href="#eject-命令" aria-hidden="true">#</a> eject
      命令
    </h4>
    <p>移除。</p>
    <h4 id="cache-选项" tabindex="-1">
      <a class="header-anchor" href="#cache-选项" aria-hidden="true">#</a> cache
      选项
    </h4>
    <ul>
      <li>
        <code v-pre>-c, --cache [cache]</code>：修改为
        <code v-pre>--cache &lt;cache&gt;</code> ，意味着
        <code v-pre>-c</code> 不再是 <code v-pre>cache</code> 选项的缩写，并且
        <code v-pre>cache</code> 选项的值不再是可选的。
      </li>
      <li>
        <code v-pre>--no-cache</code>：重命名为
        <code v-pre>--clean-cache</code> 。
      </li>
    </ul>
    <h3 id="默认主题变更" tabindex="-1">
      <a class="header-anchor" href="#默认主题变更" aria-hidden="true">#</a>
      默认主题变更
    </h3>
    <h4 id="内置组件" tabindex="-1">
      <a class="header-anchor" href="#内置组件" aria-hidden="true">#</a>
      内置组件
    </h4>
    <ul>
      <li>
        <code v-pre>&lt;CodeGroup /&gt;</code> 和
        <code v-pre>&lt;CodeBlock /&gt;</code> 重命名为
        <code v-pre>&lt;CodeGroup /&gt;</code> 和
        <code v-pre>&lt;CodeGroupItem /&gt;</code>
      </li>
      <li>
        <code v-pre>&lt;Badge /&gt;</code>
        <ul>
          <li>
            <code v-pre>$badgeErrorColor</code> 调色板变量重命名为
            <code v-pre>$badgeDangerColor</code>
          </li>
          <li>
            <code v-pre>type</code> Prop 现在只接受 <code v-pre>tip</code> 、
            <code v-pre>warning</code> 和 <code v-pre>danger</code>
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="调色板系统" tabindex="-1">
      <a class="header-anchor" href="#调色板系统" aria-hidden="true">#</a>
      调色板系统
    </h4>
    <p>默认主题的调色板系统迁移为 SASS 和 CSS 变量。</p>
    <p>
      参考
      <RouterLink to="/zh/reference/default-theme/styles.html"
        >默认主题 &gt; 样式</RouterLink
      >
      。
    </p>
    <h4 id="主题配置" tabindex="-1">
      <a class="header-anchor" href="#主题配置" aria-hidden="true">#</a>
      主题配置
    </h4>
    <p>
      默认主题的配置有大量变更，建议你阅读 v2 的默认主题配置参考文档来进行迁移。
    </p>
    <p>
      参考
      <RouterLink to="/zh/reference/default-theme/config.html"
        >默认主题 &gt; 配置</RouterLink
      >
      。
    </p>
    <h3 id="官方插件变更" tabindex="-1">
      <a class="header-anchor" href="#官方插件变更" aria-hidden="true">#</a>
      官方插件变更
    </h3>
    <p>查看 v2 版本的官方插件文档。</p>
    <h3 id="社区主题和插件" tabindex="-1">
      <a class="header-anchor" href="#社区主题和插件" aria-hidden="true">#</a>
      社区主题和插件
    </h3>
    <p>v1 的主题和插件和 v2 并不兼容。</p>
    <p>
      请确保你在使用的主题和插件已经支持 v2 ，并前往它们各自的文档查看迁移指南。
    </p>
    <h2 id="给插件作者" tabindex="-1">
      <a class="header-anchor" href="#给插件作者" aria-hidden="true">#</a>
      给插件作者
    </h2>
    <p>一些主要的 Breaking Changes ：</p>
    <ul>
      <li>
        你不能再在你的插件中使用其他插件了，这避免了很多由于插件嵌套引发的问题。如果你的插件依赖于别的插件，你可以在文档中列出他们，并让用户手动引入。或者，你也可以向用户提供一个插件数组以方便使用。
      </li>
      <li>
        大部分 v1 Hook 都在 v2 中存在等效的 Hook 或实现方式。唯一的例外是
        <code v-pre>extendsCli</code> ，它被移除了。
      </li>
      <li>
        Webpack 相关的 Hook 都被移除了，因为 VuePress Core 已经和 Webpack
        解耦了。你可以尝试使用
        <RouterLink to="/zh/reference/plugin-api.html#extendsbundleroptions"
          >extendsBundlerOptions</RouterLink
        >
        Hook 来进行相似的操作，但要注意应适配所有不同的打包工具。
      </li>
    </ul>
    <p>
      你可以参考
      <RouterLink to="/zh/advanced/plugin.html">深入 &gt; 开发插件</RouterLink>
      来了解如何开发一个 v2 插件。
    </p>
    <h3 id="插件-api-变更" tabindex="-1">
      <a class="header-anchor" href="#插件-api-变更" aria-hidden="true">#</a>
      插件 API 变更
    </h3>
    <ul>
      <li><code v-pre>plugins</code>：移除</li>
      <li><code v-pre>ready</code>：重命名为 <code v-pre>onPrepared</code></li>
      <li><code v-pre>updated</code>：重命名为 <code v-pre>onWatched</code></li>
      <li>
        <code v-pre>generated</code>：重命名为 <code v-pre>onGenerated</code>
      </li>
      <li>
        <code v-pre>additionalPages</code>：移除，改为在
        <code v-pre>onInitialized</code> Hook 中使用
        <code v-pre>app.pages.push(createPage())</code>
      </li>
      <li>
        <code v-pre>clientDynamicModules</code>：移除，改为在
        <code v-pre>onPrepared</code> Hook 中使用
        <code v-pre>app.writeTemp()</code>
      </li>
      <li>
        <code v-pre>enhanceAppFiles</code>：移除，使用
        <code v-pre>clientConfigFile</code> Hook
      </li>
      <li>
        <code v-pre>globalUIComponents</code>：移除，使用
        <code v-pre>clientConfigFile</code> Hook
      </li>
      <li>
        <code v-pre>clientRootMixin</code>：移除，使用
        <code v-pre>clientConfigFile</code> Hook
      </li>
      <li>
        <code v-pre>extendMarkdown</code>：重命名为
        <code v-pre>extendsMarkdown</code>
      </li>
      <li><code v-pre>chainMarkdown</code>：移除</li>
      <li>
        <code v-pre>extendPageData</code>：重命名为
        <code v-pre>extendsPage</code>
      </li>
      <li><code v-pre>extendsCli</code>：移除</li>
      <li><code v-pre>configureWebpack</code>：移除</li>
      <li><code v-pre>chainWebpack</code>：移除</li>
      <li><code v-pre>beforeDevServer</code>：移除</li>
      <li><code v-pre>afterDevServer</code>：移除</li>
    </ul>
    <p>
      参考
      <RouterLink to="/zh/reference/plugin-api.html">插件 API</RouterLink> 。
    </p>
    <h2 id="给主题作者" tabindex="-1">
      <a class="header-anchor" href="#给主题作者" aria-hidden="true">#</a>
      给主题作者
    </h2>
    <p>
      请先浏览
      <a href="#%E6%8F%92%E4%BB%B6-api-%E5%8F%98%E6%9B%B4">插件 API 变更</a> 和
      <a href="#%E4%B8%BB%E9%A2%98-api-%E5%8F%98%E6%9B%B4">主题 API 变更</a>。
    </p>
    <p>
      虽然我们不允许在插件中使用其他插件了，但是你仍然可以在你的主题中使用插件。
    </p>
    <p>一些主要的 Breaking Changes ：</p>
    <ul>
      <li>
        所谓的 <strong>主题目录结构约定</strong> 不再存在。
        <ul>
          <li>
            <code v-pre>theme/enhanceApp.js</code> 文件不会被隐式作为 Client App
            Enhance 文件。你需要在 <code v-pre>clientConfigFile</code> Hook
            中显式指定它。
          </li>
          <li>
            <code v-pre>theme/global-components/</code>
            目录下的文件不会被自动注册为 Vue 组件。你需要使用
            <RouterLink to="/zh/reference/plugin/register-components.html"
              >@vuepress/plugin-register-components</RouterLink
            >
            ，或者在 <code v-pre>clientConfigFile</code> 中手动注册组件。
          </li>
          <li>
            <code v-pre>theme/layouts/</code>
            目录下的文件不会被自动注册为布局组件。你需要通过
            <code v-pre>layouts</code> 配置项来显式指定。
          </li>
          <li>
            <code v-pre>theme/templates/</code> 目录下的文件不会被自动用作 dev /
            ssr 的模板。你需要通过 <code v-pre>templateBuild</code> 和
            <code v-pre>templateDev</code> 配置项来显式指定。
          </li>
          <li>
            你始终需要提供一个合法的 JS 入口文件，不要再使用
            <code v-pre>&quot;main&quot;: &quot;layouts/Layout.vue&quot;</code>
            作为主题入口。
          </li>
        </ul>
      </li>
      <li>
        <code v-pre>themeConfig</code>
        已经从用户配置和站点数据中移除。如果你想要像 v1 一样通过
        <code v-pre>this.$site.themeConfig</code> 来访问
        <code v-pre>themeConfig</code> ，我们现在建议使用
        <RouterLink to="/zh/reference/plugin/theme-data.html"
          >@vuepress/plugin-theme-data</RouterLink
        >
        插件和它提供的 Composition API <code v-pre>useThemeData</code> 。
      </li>
      <li>
        Stylus 不再是默认的 CSS 预处理器，并且 Stylus
        调色板系统不再被默认支持。如果你仍然想要使用和 v1
        类似的调色板系统，可以使用
        <RouterLink to="/zh/reference/plugin/palette.html"
          >@vuepress/plugin-palette</RouterLink
        >
        。
      </li>
      <li>
        由 Prism.js 提供的 Markdown
        代码块的语法高亮不再被默认支持。你可以选择使用
        <RouterLink to="/zh/reference/plugin/prismjs.html"
          >@vuepress/plugin-prismjs</RouterLink
        >
        或
        <RouterLink to="/zh/reference/plugin/shiki.html"
          >@vuepress/plugin-shiki</RouterLink
        >
        ，或者用你自己的方式实现语法高亮。
      </li>
      <li>考虑到可扩展性， <code v-pre>this.$site.pages</code> 不再可用。</li>
    </ul>
    <p>
      你可以参考
      <RouterLink to="/zh/advanced/theme.html">深入 &gt; 开发主题</RouterLink>
      来了解如何开发一个 v2 主题。
    </p>
    <h3 id="主题-api-变更" tabindex="-1">
      <a class="header-anchor" href="#主题-api-变更" aria-hidden="true">#</a>
      主题 API 变更
    </h3>
    <h4 id="layouts" tabindex="-1">
      <a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts
    </h4>
    <p>现在你需要手动设置布局目录或布局组件。</p>
    <p>
      参考
      <RouterLink to="/zh/reference/theme-api.html#layouts"
        >主题 API &gt; layouts</RouterLink
      >
      。
    </p>
    <h4 id="extend" tabindex="-1">
      <a class="header-anchor" href="#extend" aria-hidden="true">#</a> extend
    </h4>
    <p>重命名为 <code v-pre>extends</code> 。</p>
    <p>
      你仍然可以通过
      <code v-pre>extends: parentTheme()</code>
      来继承一个父主题，这将会继承其插件和布局等。
    </p>
    <p>
      你可以参考
      <RouterLink to="/zh/reference/default-theme/extending.html"
        >默认主题 &gt; 继承</RouterLink
      >
      来了解如何继承默认主题。
    </p>
    <p>
      <code v-pre>@theme</code> 和
      <code v-pre>@parent-theme</code>
      别名默认被移除了，但你仍然可以使用类似的方式来开发一个可继承的主题，参考
      <RouterLink to="/zh/advanced/cookbook/making-a-theme-extendable.html"
        >深入 &gt; Cookbook &gt; 开发一个可继承的主题</RouterLink
      >
      。
    </p>
  </div>
</template>
