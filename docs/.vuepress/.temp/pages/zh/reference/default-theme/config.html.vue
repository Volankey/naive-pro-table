<template>
  <div>
    <h1 id="配置" tabindex="-1">
      <a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 在这里进行配置</span>
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
      </div>
    </div>
    <h2 id="基础配置" tabindex="-1">
      <a class="header-anchor" href="#基础配置" aria-hidden="true">#</a>
      基础配置
    </h2>
    <h3 id="locales" tabindex="-1">
      <a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >{ [path: string]: Partial&lt;DefaultThemeLocaleData&gt; }</code
          >
        </p>
      </li>
      <li>
        <p>默认值： <code v-pre>{}</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>多语言支持的各个语言 locales 。</p>
        <p>
          所有在
          <a href="#locale-%E9%85%8D%E7%BD%AE">Locale 配置</a>
          章节内的配置项都可以在 locales 中使用。
        </p>
        <p>
          该配置项仅能在默认主题内生效，注意不要和
          <RouterLink to="/zh/reference/config.html#locales"
            >站点配置</RouterLink
          >
          中的 <code v-pre>locales</code> 混淆。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/i18n.html"
              >指南 &gt; 多语言支持</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="locale-配置" tabindex="-1">
      <a class="header-anchor" href="#locale-配置" aria-hidden="true">#</a>
      Locale 配置
    </h2>
    <p>
      该章节内的配置项可以作为一般配置使用，也可以使用在
      <a href="#locales">locales</a> 内。
    </p>
    <h3 id="colormode" tabindex="-1">
      <a class="header-anchor" href="#colormode" aria-hidden="true">#</a>
      colorMode
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>'auto' | 'light' | 'dark'</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'auto'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>默认颜色模式。</p>
        <p>
          如果设置为 <code v-pre>'auto'</code> ，则会根据
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
            target="_blank"
            rel="noopener noreferrer"
            >prefers-color-scheme<ExternalLinkIcon
          /></a>
          自动设置初始颜色模式。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a href="#colormodeswitch"
              >默认主题 &gt; 配置 &gt; colorModeSwitch</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="colormodeswitch" tabindex="-1">
      <a class="header-anchor" href="#colormodeswitch" aria-hidden="true">#</a>
      colorModeSwitch
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否启用切换颜色模式的功能。</p>
        <p>
          如果设置为
          <code v-pre>true</code> ，将会在导航栏展示一个切换颜色模式的按钮。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li>
          <li>
            <a href="#togglecolormode"
              >默认主题 &gt; 配置 &gt; toggleColorMode</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="home" tabindex="-1">
      <a class="header-anchor" href="#home" aria-hidden="true">#</a> home
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
        <p>首页的路径。</p>
        <p>它将被用于：</p>
        <ul>
          <li>导航栏中 Logo 的链接</li>
          <li>404 页面的 <em>返回首页</em> 链接</li>
        </ul>
      </li>
    </ul>
    <h3 id="navbar" tabindex="-1">
      <a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre>false | (NavbarItem | NavbarGroup | string)[]</code>
        </p>
      </li>
      <li>
        <p>默认值： <code v-pre>[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>导航栏配置。</p>
        <p>设置为 <code v-pre>false</code> 可以禁用导航栏。</p>
        <p>
          为了配置导航栏元素，你可以将其设置为
          <em>导航栏数组</em> ，其中的每个元素是
          <code v-pre>NavbarItem</code> 对象、
          <code v-pre>NavbarGroup</code> 对象、或者字符串：
        </p>
        <ul>
          <li>
            <code v-pre>NavbarItem</code> 对象应该有一个
            <code v-pre>text</code> 字段和一个
            <code v-pre>link</code> 字段，还有一个可选的
            <code v-pre>activeMatch</code> 字段。
          </li>
          <li>
            <code v-pre>NavbarGroup</code> 对象应该有一个
            <code v-pre>text</code> 字段和一个
            <code v-pre>children</code> 字段。
            <code v-pre>children</code> 字段同样是一个 <em>导航栏数组</em> 。
          </li>
          <li>
            字符串应为目标页面文件的路径。它将会被转换为
            <code v-pre>NavbarItem</code> 对象，将页面标题作为
            <code v-pre>text</code> ，将页面路由路径作为
            <code v-pre>link</code> 。
          </li>
        </ul>
      </li>
      <li>
        <p>示例 1：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// NavbarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/foo/'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// NavbarGroup</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Group'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/group/foo.md'</span><span class="token punctuation">,</span> <span class="token string">'/group/bar.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径</span>
      <span class="token string">'/bar/README.md'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      <li>示例 2：</li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 嵌套 Group - 最大深度为 2</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Group'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'SubGroup'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/group/sub/foo.md'</span><span class="token punctuation">,</span> <span class="token string">'/group/sub/bar.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 控制元素何时被激活</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Group 2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Always active'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
            <span class="token comment">// 该元素将一直处于激活状态</span>
            <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Active on /foo/'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/not-foo/'</span><span class="token punctuation">,</span>
            <span class="token comment">// 该元素在当前路由路径是 /foo/ 开头时激活</span>
            <span class="token comment">// 支持正则表达式</span>
            <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">'^/foo/'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
    <h3 id="logo" tabindex="-1">
      <a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>null | string </code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>Logo 图片的 URL。</p>
        <p>Logo 图片将会显示在导航栏的左端。</p>
        <p>设置为 <code v-pre>null</code> 可以禁用 Logo 。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// Public 文件路径</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/images/hero.png'</span><span class="token punctuation">,</span>
    <span class="token comment">// URL</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <ul>
      <li>
        参考：
        <ul>
          <li>
            <RouterLink to="/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"
              >指南 &gt; 静态资源 &gt; Public 文件</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="logodark" tabindex="-1">
      <a class="header-anchor" href="#logodark" aria-hidden="true">#</a>
      logoDark
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>null | string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>在夜间模式中使用的 Logo 图片的 URL。</p>
        <p>如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。</p>
        <p>
          设置为 <code v-pre>null</code> 可以在夜间模式下禁用 Logo
          。忽略该配置项将会在夜间模式中使用 <a href="#logo">logo</a> 配置。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#logo">默认主题 &gt; 配置 &gt; logo</a></li>
          <li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="repo" tabindex="-1">
      <a class="header-anchor" href="#repo" aria-hidden="true">#</a> repo
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>项目仓库的 URL。</p>
        <p>
          它将被用作 <em>仓库链接</em> 的链接。<em>仓库链接</em>
          将会显示为导航栏的最后一个元素。
        </p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 如果你按照 `organization/repository` 的格式设置它</span>
    <span class="token comment">// 我们会将它作为一个 GitHub 仓库</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'vuejs/vuepress'</span><span class="token punctuation">,</span>
    <span class="token comment">// 你也可以直接将它设置为一个 URL</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'https://gitlab.com/foo/bar'</span><span class="token punctuation">,</span>
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
    <h3 id="repolabel" tabindex="-1">
      <a class="header-anchor" href="#repolabel" aria-hidden="true">#</a>
      repoLabel
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>项目仓库的标签。</p>
        <p>
          它将被用作 <em>仓库链接</em> 的文字。<em>仓库链接</em>
          将会显示为导航栏的最后一个元素。
        </p>
        <p>
          如果你不明确指定该配置项，它将会根据
          <a href="#repo">repo</a> 配置项自动推断。
        </p>
      </li>
    </ul>
    <h3 id="selectlanguagetext" tabindex="-1">
      <a class="header-anchor" href="#selectlanguagetext" aria-hidden="true"
        >#</a
      >
      selectLanguageText
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><em>选择语言菜单</em> 的文字。</p>
        <p>
          如果你在站点配置中设置了多个
          <RouterLink to="/zh/reference/config.html#locales"
            >locales</RouterLink
          >
          ，那么 <em>选择语言菜单</em> 就会显示在导航栏中仓库按钮的旁边。
        </p>
      </li>
    </ul>
    <h3 id="selectlanguagearialabel" tabindex="-1">
      <a
        class="header-anchor"
        href="#selectlanguagearialabel"
        aria-hidden="true"
        >#</a
      >
      selectLanguageAriaLabel
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><em>选择语言菜单</em> 的 <code v-pre>aria-label</code> 属性。</p>
        <p>它主要是为了站点的可访问性 (a11y) 。</p>
      </li>
    </ul>
    <h3 id="selectlanguagename" tabindex="-1">
      <a class="header-anchor" href="#selectlanguagename" aria-hidden="true"
        >#</a
      >
      selectLanguageName
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>Locale 的语言名称。</p>
        <p>
          该配置项
          <strong
            >仅能在主题配置的 <a href="#locales">locales</a> 的内部生效</strong
          >
          。它将被用作 locale 的语言名称，展示在 <em>选择语言菜单</em> 内。
        </p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">'English'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">'简体中文'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
    <h3 id="sidebar" tabindex="-1">
      <a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >false | 'auto' | SidebarConfigArray | SidebarConfigObject</code
          >
        </p>
      </li>
      <li>
        <p>默认值： <code v-pre>'auto'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>侧边栏配置。</p>
        <p>
          你可以通过页面的
          <RouterLink to="/zh/reference/default-theme/frontmatter.html#sidebar"
            >sidebar</RouterLink
          >
          frontmatter 来覆盖这个全局配置。
        </p>
        <p>设置为 <code v-pre>false</code> 可以禁用侧边栏。</p>
        <p>
          如果你设置为 <code v-pre>'auto'</code>，侧边栏会根据页面标题自动生成。
        </p>
        <p>
          为了手动配置侧边栏元素，你可以将其设置为
          <em>侧边栏数组</em> ，其中的每个元素是一个
          <code v-pre>SidebarItem</code> 对象或者一个字符串：
        </p>
        <ul>
          <li>
            <code v-pre>SidebarItem</code> 对象应该有一个
            <code v-pre>text</code> 字段，有一个可选的
            <code v-pre>link</code> 字段和一个可选的
            <code v-pre>children</code> 字段。
            <code v-pre>children</code> 字段同样是一个 <em>侧边栏数组</em> 。当
            <code v-pre>SidebarItem</code>
            对象处于根节点时，它还有一个额外可选的
            <code v-pre>collapsible</code> 字段来控制它是否可折叠。
          </li>
          <li>
            字符串应为目标页面文件的路径。它将会被转换为
            <code v-pre>SidebarItem</code> 对象，将页面标题作为
            <code v-pre>text</code> ，将页面路由路径作为
            <code v-pre>link</code> ，并根据页面小标题自动生成
            <code v-pre>children</code> 。
          </li>
        </ul>
        <p>
          如果你想在不同子路径中使用不同的侧边栏，你可以将该配置项设置为
          <em>侧边栏对象</em> ：
        </p>
        <ul>
          <li>Key 为路径前缀。</li>
          <li>Value 为 <em>侧边栏数组</em> 。</li>
        </ul>
      </li>
      <li>
        <p>示例 1：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 侧边栏数组</span>
    <span class="token comment">// 所有页面会使用相同的侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// SidebarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/foo/'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// SidebarItem</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://github.com'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 字符串 - 页面文件路径</span>
          <span class="token string">'/foo/bar.md'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径</span>
      <span class="token string">'/bar/README.md'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
    <ul>
      <li>示例 2：</li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 侧边栏对象</span>
    <span class="token comment">// 不同子路径下的页面会使用不同的侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/guide/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/guide/README.md'</span><span class="token punctuation">,</span> <span class="token string">'/guide/getting-started.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/reference/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Reference'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/reference/cli.md'</span><span class="token punctuation">,</span> <span class="token string">'/reference/config.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
    <ul>
      <li>示例 3：</li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 可折叠的侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/reference/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'VuePress Reference'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/reference/cli.md'</span><span class="token punctuation">,</span> <span class="token string">'/reference/config.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Bundlers Reference'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/reference/bundler/vite.md'</span><span class="token punctuation">,</span> <span class="token string">'/reference/bundler/webpack.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
    <h3 id="sidebardepth" tabindex="-1">
      <a class="header-anchor" href="#sidebardepth" aria-hidden="true">#</a>
      sidebarDepth
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>number</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>2</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>设置根据页面标题自动生成的侧边栏的最大深度。</p>
        <ul>
          <li>设为 <code v-pre>0</code> 来禁用所有级别的页面标题。</li>
          <li>
            设为 <code v-pre>1</code> 来包含
            <code v-pre>&lt;h2&gt;</code> 标题。
          </li>
          <li>
            设为 <code v-pre>2</code> 来包含 <code v-pre>&lt;h2&gt;</code> 和
            <code v-pre>&lt;h3&gt;</code> 标题。
          </li>
          <li>...</li>
        </ul>
        <p>
          最大值取决于你通过
          <RouterLink to="/zh/reference/config.html#markdown-headers"
            >markdown.headers.level</RouterLink
          >
          提取了哪些级别的标题。
        </p>
        <p>
          由于 <code v-pre>markdown.headers.level</code> 的默认值是
          <code v-pre>[2, 3]</code> ，因此
          <code v-pre>sidebarDepth</code> 的默认最大值是 <code v-pre>2</code> 。
        </p>
        <p>
          你可以通过页面的
          <RouterLink
            to="/zh/reference/default-theme/frontmatter.html#sidebardepth"
            >sidebarDepth</RouterLink
          >
          frontmatter 来覆盖这个全局配置。
        </p>
      </li>
    </ul>
    <h3 id="editlink" tabindex="-1">
      <a class="header-anchor" href="#editlink" aria-hidden="true">#</a>
      editLink
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否启用 <em>编辑此页</em> 链接。</p>
        <p>
          你可以通过页面的
          <RouterLink to="/zh/reference/default-theme/frontmatter.html#editlink"
            >editLink</RouterLink
          >
          frontmatter 来覆盖这个全局配置。
        </p>
      </li>
    </ul>
    <h3 id="editlinktext" tabindex="-1">
      <a class="header-anchor" href="#editlinktext" aria-hidden="true">#</a>
      editLinkText
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'Edit this page'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><em>编辑此页</em> 链接的文字。</p>
      </li>
    </ul>
    <h3 id="editlinkpattern" tabindex="-1">
      <a class="header-anchor" href="#editlinkpattern" aria-hidden="true">#</a>
      editLinkPattern
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><em>编辑此页</em> 链接的 Pattern 。</p>
        <p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
        <p>
          如果你不设置该选项，则会根据
          <a href="#docsrepo">docsRepo</a> 配置项来推断 Pattern
          。但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、
          Bitbucket 、 Gitee 等，那么你必须设置该选项才能使
          <em>编辑此页</em> 链接正常工作。
        </p>
      </li>
      <li>
        <p>用法：</p>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code v-pre>:repo</code></td>
              <td>文档仓库 URL ，即 <a href="#docsrepo">docsRepo</a></td>
            </tr>
            <tr>
              <td><code v-pre>:branch</code></td>
              <td>文档仓库分支 ，即 <a href="#docsbranch">docsBranch</a></td>
            </tr>
            <tr>
              <td><code v-pre>:path</code></td>
              <td>
                页面源文件的路径，即
                <a href="#docsdir">docsDir</a> 拼接上页面文件的相对路径
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">docsRepo</span><span class="token operator">:</span> <span class="token string">'https://gitlab.com/owner/name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">docsBranch</span><span class="token operator">:</span> <span class="token string">'master'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">editLinkPattern</span><span class="token operator">:</span> <span class="token string">':repo/-/edit/:branch/:path'</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <p>
      则会生成类似于
      <code v-pre
        >'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md'</code
      >
      的链接。
    </p>
    <h3 id="docsrepo" tabindex="-1">
      <a class="header-anchor" href="#docsrepo" aria-hidden="true">#</a>
      docsRepo
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>文档源文件的仓库 URL 。</p>
        <p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
        <p>
          如果你不设置该选项，则默认会使用
          <a href="#repo">repo</a>
          配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。
        </p>
      </li>
    </ul>
    <h3 id="docsbranch" tabindex="-1">
      <a class="header-anchor" href="#docsbranch" aria-hidden="true">#</a>
      docsBranch
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'main'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>文档源文件的仓库分支。</p>
        <p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
      </li>
    </ul>
    <h3 id="docsdir" tabindex="-1">
      <a class="header-anchor" href="#docsdir" aria-hidden="true">#</a> docsDir
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
        <p>文档源文件存放在仓库中的目录名。</p>
        <p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
      </li>
    </ul>
    <h3 id="lastupdated" tabindex="-1">
      <a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a>
      lastUpdated
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否启用 <em>最近更新时间戳</em> 。</p>
        <p>
          你可以通过页面的
          <RouterLink
            to="/zh/reference/default-theme/frontmatter.html#lastupdated"
            >lastUpdated</RouterLink
          >
          frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了
          <code v-pre>false</code> ，那么这个功能会被完全禁用，并且无法在
          locales 或页面 frontmatter 中启用。
        </p>
      </li>
    </ul>
    <h3 id="lastupdatedtext" tabindex="-1">
      <a class="header-anchor" href="#lastupdatedtext" aria-hidden="true">#</a>
      lastUpdatedText
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'Last Updated'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><em>最近更新时间戳</em> 标签的文字。</p>
      </li>
    </ul>
    <h3 id="contributors" tabindex="-1">
      <a class="header-anchor" href="#contributors" aria-hidden="true">#</a>
      contributors
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>是否启用 <em>贡献者列表</em> 。</p>
        <p>
          你可以通过页面的
          <RouterLink
            to="/zh/reference/default-theme/frontmatter.html#contributors"
            >contributors</RouterLink
          >
          frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了
          <code v-pre>false</code> ，那么这个功能会被完全禁用，并且无法在
          locales 或页面 frontmatter 中启用。
        </p>
      </li>
    </ul>
    <h3 id="contributorstext" tabindex="-1">
      <a class="header-anchor" href="#contributorstext" aria-hidden="true">#</a>
      contributorsText
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'Contributors'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><em>贡献者列表</em> 标签的文字。</p>
      </li>
    </ul>
    <h3 id="tip" tabindex="-1">
      <a class="header-anchor" href="#tip" aria-hidden="true">#</a> tip
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'TIP'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          Tip
          <RouterLink
            to="/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"
            >自定义容器</RouterLink
          >
          的默认标题。
        </p>
      </li>
    </ul>
    <h3 id="warning" tabindex="-1">
      <a class="header-anchor" href="#warning" aria-hidden="true">#</a> warning
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'WARNING'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          Warning
          <RouterLink
            to="/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"
            >自定义容器</RouterLink
          >
          的默认标题。
        </p>
      </li>
    </ul>
    <h3 id="danger" tabindex="-1">
      <a class="header-anchor" href="#danger" aria-hidden="true">#</a> danger
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'DANGER'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          Danger
          <RouterLink
            to="/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"
            >自定义容器</RouterLink
          >
          的默认标题。
        </p>
      </li>
    </ul>
    <h3 id="notfound" tabindex="-1">
      <a class="header-anchor" href="#notfound" aria-hidden="true">#</a>
      notFound
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>['Not Found']</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>404 页面的提示信息。</p>
        <p>当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。</p>
      </li>
    </ul>
    <h3 id="backtohome" tabindex="-1">
      <a class="header-anchor" href="#backtohome" aria-hidden="true">#</a>
      backToHome
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'Back to home'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>404 页面中 <em>返回首页</em> 链接的文字。</p>
      </li>
    </ul>
    <h3 id="openinnewwindow" tabindex="-1">
      <a class="header-anchor" href="#openinnewwindow" aria-hidden="true">#</a>
      openInNewWindow
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'open in new window'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          <RouterLink
            to="/zh/reference/plugin/external-link-icon.html#externallinkicon"
            >ExternalLinkIcon</RouterLink
          >. 链接内的 <code v-pre>sr-only</code> 文字。
        </p>
        <p>它主要是为了站点的可访问性 (a11y) 。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a href="#themeplugins-externallinkicon"
              >默认主题 &gt; 配置 &gt; themePlugins.externalLinkIcon</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="togglecolormode" tabindex="-1">
      <a class="header-anchor" href="#togglecolormode" aria-hidden="true">#</a>
      toggleColorMode
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'toggle color mode'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>切换颜色模式按钮的标题文字。</p>
        <p>它主要是为了站点的可访问性 (a11y) 。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a href="#colormodeswitch"
              >默认主题 &gt; 配置 &gt; colorModeSwitch</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="togglesidebar" tabindex="-1">
      <a class="header-anchor" href="#togglesidebar" aria-hidden="true">#</a>
      toggleSidebar
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'toggle sidebar'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>切换侧边栏按钮的标题文字。</p>
        <p>它主要是为了站点的可访问性 (a11y) 。</p>
      </li>
    </ul>
    <h2 id="插件配置" tabindex="-1">
      <a class="header-anchor" href="#插件配置" aria-hidden="true">#</a>
      插件配置
    </h2>
    <h3 id="themeplugins" tabindex="-1">
      <a class="header-anchor" href="#themeplugins" aria-hidden="true">#</a>
      themePlugins
    </h3>
    <ul>
      <li>
        <p>详情：</p>
        <p>设置默认主题使用的插件。</p>
        <p>
          默认主题使用了一些插件，如果你确实不需要该插件，你可以选择禁用它。在禁用插件之前，请确保你已了解它的用途。
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-activeheaderlinks" tabindex="-1">
      <a
        class="header-anchor"
        href="#themeplugins-activeheaderlinks"
        aria-hidden="true"
        >#</a
      >
      themePlugins.activeHeaderLinks
    </h3>
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
          是否启用
          <RouterLink to="/zh/reference/plugin/active-header-links.html"
            >@vuepress/plugin-active-header-links</RouterLink
          >
          。
        </p>
      </li>
    </ul>
    <h4 id="themeplugins-backtotop" tabindex="-1">
      <a class="header-anchor" href="#themeplugins-backtotop" aria-hidden="true"
        >#</a
      >
      themePlugins.backToTop
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
          是否启用
          <RouterLink to="/zh/reference/plugin/back-to-top.html"
            >@vuepress/plugin-back-to-top</RouterLink
          >
          。
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-container" tabindex="-1">
      <a class="header-anchor" href="#themeplugins-container" aria-hidden="true"
        >#</a
      >
      themePlugins.container
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Record&lt;ContainerType, boolean&gt;</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          是否启用由
          <RouterLink to="/zh/reference/plugin/container.html"
            >@vuepress/plugin-container</RouterLink
          >
          支持的自定义容器。
        </p>
        <p><code v-pre>ContainerType</code> 类型为：</p>
        <ul>
          <li><code v-pre>tip</code></li>
          <li><code v-pre>warning</code></li>
          <li><code v-pre>danger</code></li>
          <li><code v-pre>details</code></li>
          <li><code v-pre>codeGroup</code></li>
          <li><code v-pre>codeGroupItem</code></li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"
              >默认主题 &gt; Markdown &gt; 自定义容器</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="themeplugins-externallinkicon" tabindex="-1">
      <a
        class="header-anchor"
        href="#themeplugins-externallinkicon"
        aria-hidden="true"
        >#</a
      >
      themePlugins.externalLinkIcon
    </h3>
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
          是否启用
          <RouterLink to="/zh/reference/plugin/external-link-icon.html"
            >@vuepress/plugin-external-link-icon</RouterLink
          >
          。
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-git" tabindex="-1">
      <a class="header-anchor" href="#themeplugins-git" aria-hidden="true">#</a>
      themePlugins.git
    </h3>
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
          是否启用
          <RouterLink to="/zh/reference/plugin/git.html"
            >@vuepress/plugin-git</RouterLink
          >
          。
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-mediumzoom" tabindex="-1">
      <a
        class="header-anchor"
        href="#themeplugins-mediumzoom"
        aria-hidden="true"
        >#</a
      >
      themePlugins.mediumZoom
    </h3>
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
          是否启用
          <RouterLink to="/zh/reference/plugin/medium-zoom.html"
            >@vuepress/plugin-medium-zoom</RouterLink
          >
          。
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-nprogress" tabindex="-1">
      <a class="header-anchor" href="#themeplugins-nprogress" aria-hidden="true"
        >#</a
      >
      themePlugins.nprogress
    </h3>
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
          是否启用
          <RouterLink to="/zh/reference/plugin/nprogress.html"
            >@vuepress/plugin-nprogress</RouterLink
          >
          。
        </p>
      </li>
    </ul>
  </div>
</template>
