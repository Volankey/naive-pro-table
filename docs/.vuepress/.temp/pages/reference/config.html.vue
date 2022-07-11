<template>
  <div>
    <h1 id="config" tabindex="-1">
      <a class="header-anchor" href="#config" aria-hidden="true">#</a> Config
    </h1>
    <NpmBadge package="@vuepress/cli" />
    <NpmBadge package="@vuepress/core" />
    <h2 id="site-config" tabindex="-1">
      <a class="header-anchor" href="#site-config" aria-hidden="true">#</a> Site
      Config
    </h2>
    <h3 id="base" tabindex="-1">
      <a class="header-anchor" href="#base" aria-hidden="true">#</a> base
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>/</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>The base URL the site will be deployed at.</p>
        <p>
          You will need to set this if you plan to deploy your site under a sub
          path. It should always start and end with a slash. For example, if you
          plan to deploy your site to GitHub pages at
          <code v-pre>https://foo.github.io/bar/</code>, then you should set
          <code v-pre>base</code> to <code v-pre>&quot;/bar/&quot;</code>.
        </p>
        <p>
          The <code v-pre>base</code> is automatically prepended to all the URLs
          that start with <code v-pre>/</code> in other options, so you only
          need to specify it once.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/assets.html#base-helper"
              >Guide &gt; Assets &gt; Base Helper</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/guide/deployment.html"
              >Guide &gt; Deployment</RouterLink
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>en-US</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Language for the site.</p>
        <p>
          This will be the <code v-pre>lang</code> attribute of the
          <code v-pre>&lt;html&gt;</code> tag in the rendered HTML.
        </p>
        <p>This can be specified in different locales.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li><a href="#locales">Config &gt; locales</a></li>
          <li>
            <RouterLink to="/reference/frontmatter.html#lang"
              >Frontmatter &gt; lang</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="title" tabindex="-1">
      <a class="header-anchor" href="#title" aria-hidden="true">#</a> title
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>''</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Title for the site.</p>
        <p>
          This will be the suffix for all page titles, and displayed in the
          navbar in the default theme.
        </p>
        <p>This can be specified in different locales.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li><a href="#locales">Config &gt; locales</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="description" tabindex="-1">
      <a class="header-anchor" href="#description" aria-hidden="true">#</a>
      description
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>''</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Description for the site.</p>
        <p>
          This will be the <code v-pre>content</code> attribute of
          <code v-pre>&lt;meta name=&quot;description&quot; /&gt;</code> tag in
          the rendered HTML, which will be overrode by the
          <code v-pre>description</code> field of page frontmatter.
        </p>
        <p>This can be specified in different locales.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li><a href="#locales">Config &gt; locales</a></li>
          <li>
            <RouterLink to="/reference/frontmatter.html#description"
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
        <p>Type: <code v-pre>HeadConfig[]</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Extra tags to inject into the <code v-pre>&lt;head&gt;</code> tag in
          the rendered HTML.
        </p>
        <p>
          You can specify each tag in the form of
          <code v-pre>[tagName, { attrName: attrValue }, innerHTML?]</code>.
        </p>
        <p>This can be specified in different locales.</p>
      </li>
      <li>
        <p>Example:</p>
        <p>To add a custom favicon:</p>
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
    <p>Rendered as：</p>
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
        Also see:
        <ul>
          <li><a href="#locales">Config &gt; locales</a></li>
          <li>
            <RouterLink to="/reference/frontmatter.html#head"
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
          Type:
          <code v-pre>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code>
        </p>
      </li>
      <li>
        <p>Default: <code v-pre>{}</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify locales for i18n support.</p>
        <p>Acceptable fields:</p>
        <ul>
          <li><a href="#lang">lang</a></li>
          <li><a href="#title">title</a></li>
          <li><a href="#description">description</a></li>
          <li><a href="#head">head</a></li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/i18n.html">Guide &gt; I18n</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="theme-config" tabindex="-1">
      <a class="header-anchor" href="#theme-config" aria-hidden="true">#</a>
      Theme Config
    </h2>
    <h3 id="theme" tabindex="-1">
      <a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Theme</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Set the theme of your site.</p>
        <p>If this option is not set, the default theme will be used.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/theme.html">Guide &gt; Theme</RouterLink>
          </li>
          <li>
            <RouterLink to="/reference/default-theme/config.html"
              >Default Theme &gt; Config</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="bundler-config" tabindex="-1">
      <a class="header-anchor" href="#bundler-config" aria-hidden="true">#</a>
      Bundler Config
    </h2>
    <h3 id="bundler" tabindex="-1">
      <a class="header-anchor" href="#bundler" aria-hidden="true">#</a> bundler
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Bundler</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Set the bundler of your site.</p>
        <p>If this option is not set, the default bundler will be used:</p>
        <ul>
          <li>
            With <code v-pre>vuepress</code> or
            <code v-pre>vuepress-vite</code>, the default bundler is vite.
          </li>
          <li>
            With <code v-pre>vuepress-webpack</code>, the default bundler is
            webpack.
          </li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/bundler.html">Guide &gt; Bundler</RouterLink>
          </li>
          <li>
            <RouterLink to="/reference/bundler/vite.html"
              >Bundlers &gt; Vite</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/bundler/webpack.html"
              >Bundlers &gt; Webpack</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="common-config" tabindex="-1">
      <a class="header-anchor" href="#common-config" aria-hidden="true">#</a>
      Common Config
    </h2>
    <h3 id="dest" tabindex="-1">
      <a class="header-anchor" href="#dest" aria-hidden="true">#</a> dest
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>`${sourceDir}/.vuepress/dist`</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the output directory for
          <code v-pre>vuepress build</code> command.
        </p>
      </li>
    </ul>
    <h3 id="temp" tabindex="-1">
      <a class="header-anchor" href="#temp" aria-hidden="true">#</a> temp
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>`${sourceDir}/.vuepress/.temp`</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the directory for temporary files.</p>
      </li>
    </ul>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>
        Since VuePress will load temp files during dev and build, the temp
        directory should be inside project root to resolve dependencies
        correctly.
      </p>
    </div>
    <h3 id="cache" tabindex="-1">
      <a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>`${sourceDir}/.vuepress/.cache`</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the directory for cache files.</p>
      </li>
    </ul>
    <h3 id="public" tabindex="-1">
      <a class="header-anchor" href="#public" aria-hidden="true">#</a> public
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>`${sourceDir}/.vuepress/public`</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the directory for public files.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/assets.html#public-files"
              >Guide &gt; Assets &gt; Public Files</RouterLink
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Enable debug mode or not.</p>
        <p>
          This would be helpful for developers. Also, we are using
          <a
            href="https://github.com/visionmedia/debug"
            target="_blank"
            rel="noopener noreferrer"
            >debug<ExternalLinkIcon
          /></a>
          package for debug logging, which can be enabled via
          <code v-pre>DEBUG=vuepress*</code> environment variable.
        </p>
      </li>
    </ul>
    <h3 id="pagepatterns" tabindex="-1">
      <a class="header-anchor" href="#pagepatterns" aria-hidden="true">#</a>
      pagePatterns
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>
          Default: <code v-pre>['**/*.md', '!.vuepress', '!node_modules']</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the patterns of files you want to be resolved as pages. The
          patterns are relative to the source directory.
        </p>
      </li>
    </ul>
    <h3 id="permalinkpattern" tabindex="-1">
      <a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a>
      permalinkPattern
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the pattern to generate permalink.</p>
        <p>
          This will be overrode by the <code v-pre>permalinkPattern</code> field
          of page frontmatter.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html#permalinkpattern"
              >Frontmatter &gt; permalinkPattern</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="dev-config" tabindex="-1">
      <a class="header-anchor" href="#dev-config" aria-hidden="true">#</a> Dev
      Config
    </h2>
    <h3 id="host" tabindex="-1">
      <a class="header-anchor" href="#host" aria-hidden="true">#</a> host
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'0.0.0.0'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the host to use for the dev server.</p>
      </li>
    </ul>
    <h3 id="port" tabindex="-1">
      <a class="header-anchor" href="#port" aria-hidden="true">#</a> port
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>number</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>8080</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the port to use for the dev server.</p>
      </li>
    </ul>
    <h3 id="open" tabindex="-1">
      <a class="header-anchor" href="#open" aria-hidden="true">#</a> open
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Whether to open the browser after dev-server had been started.</p>
      </li>
    </ul>
    <h3 id="templatedev" tabindex="-1">
      <a class="header-anchor" href="#templatedev" aria-hidden="true">#</a>
      templateDev
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'@vuepress/client/templates/dev.html'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the path of the HTML template to be used for dev.</p>
      </li>
    </ul>
    <h2 id="build-config" tabindex="-1">
      <a class="header-anchor" href="#build-config" aria-hidden="true">#</a>
      Build Config
    </h2>
    <h3 id="shouldpreload" tabindex="-1">
      <a class="header-anchor" href="#shouldpreload" aria-hidden="true">#</a>
      shouldPreload
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >((file: string, type: string) =&gt; boolean)) | boolean</code
          >
        </p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          A function to control what files should have
          <code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code> resource hints
          generated. Set to <code v-pre>true</code> or
          <code v-pre>false</code> to enable or disable totally.
        </p>
        <p>
          By default, only those files that are required by current page will be
          preloaded. So you can keep it <code v-pre>true</code> in most cases.
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
          Type:
          <code v-pre
            >((file: string, type: string) =&gt; boolean)) | boolean</code
          >
        </p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          A function to control what files should have
          <code v-pre>&lt;link rel=&quot;prefetch&quot;&gt;</code> resource
          hints generated. Set to <code v-pre>true</code> or
          <code v-pre>false</code> to enable or disable for all files.
        </p>
        <p>
          If you set it to <code v-pre>true</code>, all files that required by
          other pages will be prefetched. This is good for small sites, which
          will speed up the navigation, but it might not be a good idea if you
          have lots of pages in your site.
        </p>
      </li>
    </ul>
    <h3 id="templatebuild" tabindex="-1">
      <a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a>
      templateBuild
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>
          Default: <code v-pre>'@vuepress/client/templates/build.html'</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the path of the HTML template to be used for build.</p>
      </li>
    </ul>
    <h2 id="markdown-config" tabindex="-1">
      <a class="header-anchor" href="#markdown-config" aria-hidden="true">#</a>
      Markdown Config
    </h2>
    <h3 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      markdown
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>MarkdownOptions</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>{}</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Configure VuePress built-in Markdown syntax extensions.</p>
        <p>
          It accepts all options of
          <a
            href="https://github.com/markdown-it/markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it<ExternalLinkIcon /></a
          >, and the following additional options.
        </p>
      </li>
      <li>
        <p>Also see:</p>
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
            <RouterLink to="/guide/markdown.html#syntax-extensions"
              >Guide &gt; Markdown &gt; Syntax Extensions</RouterLink
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
        <p>Type: <code v-pre>AnchorPluginOptions | false</code></p>
      </li>
      <li>
        <p>Default:</p>
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
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/valeriangalliat/markdown-it-anchor"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-anchor<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#header-anchors"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Header
              Anchors</RouterLink
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
        <p>Type: <code v-pre>AssetsPluginOptions | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for VuePress built-in markdown-it assets plugin.</p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>You should not configure it unless you understand what it is for.</p>
    </div>
    <h3 id="markdown-code" tabindex="-1">
      <a class="header-anchor" href="#markdown-code" aria-hidden="true">#</a>
      markdown.code
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>CodePluginOptions | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for VuePress built-in markdown-it code plugin.</p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#code-blocks"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Code
              Blocks</RouterLink
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Enable code line highlighting or not.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#line-highlighting"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Code Blocks &gt;
              Line Highlighting</RouterLink
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
        <p>Type: <code v-pre>boolean | number</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Configure code line numbers.</p>
        <ul>
          <li>
            A <code v-pre>boolean</code> value is to enable line numbers or not.
          </li>
          <li>
            A <code v-pre>number</code> value is the minimum number of lines to
            enable line numbers. For example, if you set it to
            <code v-pre>4</code>, line numbers will only be enabled when your
            code block has at least 4 lines of code.
          </li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#line-numbers"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Code Blocks &gt;
              Line Numbers</RouterLink
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Enable the extra wrapper of the <code v-pre>&lt;pre&gt;</code> tag or
          not.
        </p>
        <p>
          The wrapper is required by the <code v-pre>highlightLines</code> and
          <code v-pre>lineNumbers</code>. That means, if you disable
          <code v-pre>preWrapper</code>, the line highlighting and line numbers
          will also be disabled.
        </p>
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        You can disable it if you want to implement them in client side. For
        example,
        <a
          href="https://prismjs.com/plugins/line-highlight/"
          target="_blank"
          rel="noopener noreferrer"
          >Prismjs Line Highlight<ExternalLinkIcon
        /></a>
        or
        <a
          href="https://prismjs.com/plugins/line-numbers/"
          target="_blank"
          rel="noopener noreferrer"
          >Prismjs Line Numbers<ExternalLinkIcon /></a
        >.
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Add <code v-pre>v-pre</code> directive to
          <code v-pre>&lt;pre&gt;</code> tag of code block or not.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#wrap-with-v-pre"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Code Blocks &gt;
              Wrap with v-pre</RouterLink
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Add <code v-pre>v-pre</code> directive to
          <code v-pre>&lt;code&gt;</code> tag of inline code or not.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#wrap-with-v-pre"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Code Blocks &gt;
              Wrap with v-pre</RouterLink
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
        <p>Type: <code v-pre>undefined | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-component<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>You should not configure it unless you understand what it is for.</p>
    </div>
    <h3 id="markdown-emoji" tabindex="-1">
      <a class="header-anchor" href="#markdown-emoji" aria-hidden="true">#</a>
      markdown.emoji
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>EmojiPluginOptions | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/markdown-it/markdown-it-emoji"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-emoji<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#emoji"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Emoji</RouterLink
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
        <p>Type: <code v-pre>FrontmatterPluginOptions | false</code></p>
      </li>
      <li>
        <p>Default:</p>
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
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-frontmatter<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/page.html#frontmatter"
              >Guide &gt; Page &gt; Frontmatter</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/node-api.html#frontmatter"
              >Node API &gt; Page Properties &gt; frontmatter</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/node-api.html#excerpt"
              >Node API &gt; Page Properties &gt; excerpt</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>You should not configure it unless you understand what it is for.</p>
    </div>
    <h3 id="markdown-headers" tabindex="-1">
      <a class="header-anchor" href="#markdown-headers" aria-hidden="true">#</a>
      markdown.headers
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>HeadersPluginOptions | false</code></p>
      </li>
      <li>
        <p>Default:</p>
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
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-headers<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/node-api.html#headers"
              >Node API &gt; Page Properties &gt; headers</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="markdown-importcode" tabindex="-1">
      <a class="header-anchor" href="#markdown-importcode" aria-hidden="true"
        >#</a
      >
      markdown.importCode
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>ImportCodePluginOptions | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for VuePress built-in markdown-it import-code plugin.</p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#import-code-blocks"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Import Code
              Blocks</RouterLink
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
        <p>Type: <code v-pre>(str: string) =&gt; string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>(str) =&gt; str</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>A function to handle the import path of the import code syntax.</p>
      </li>
    </ul>
    <h3 id="markdown-links" tabindex="-1">
      <a class="header-anchor" href="#markdown-links" aria-hidden="true">#</a>
      markdown.links
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>LinksPluginOptions | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for VuePress built-in markdown-it links plugin.</p>
        <p>
          It will convert internal links to
          <code v-pre>&lt;RouterLink&gt;</code>, and add extra attributes and
          icon to external links.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#links"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Links</RouterLink
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
        <p>Type: <code v-pre>'a' | 'RouterLink'</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'RouterLink'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Tag for internal links.</p>
        <p>
          By default, this plugin will transform internal links to
          <code v-pre>&lt;RouterLink&gt;</code>. You can set this option to
          <code v-pre>'a'</code> to disable this feature.
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
        <p>Type: <code v-pre>Record&lt;string, string&gt;</code></p>
      </li>
      <li>
        <p>
          Default:
          <code v-pre>{ target: '_blank', rel: 'noopener noreferrer' }</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Additional attributes for external links.</p>
      </li>
    </ul>
    <h3 id="markdown-sfc" tabindex="-1">
      <a class="header-anchor" href="#markdown-sfc" aria-hidden="true">#</a>
      markdown.sfc
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>SfcPluginOptions | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-sfc<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/advanced/cookbook/markdown-and-vue-sfc.html"
              >Cookbook &gt; Markdown and Vue SFC</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/node-api.html#sfcblocks"
              >Node API &gt; Page Properties &gt; sfcBlocks</RouterLink
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
        <p>Type: <code v-pre>(str: string) =&gt; string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>The default slugify function.</p>
      </li>
    </ul>
    <h3 id="markdown-title" tabindex="-1">
      <a class="header-anchor" href="#markdown-title" aria-hidden="true">#</a>
      markdown.title
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>undefined | false</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-title"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-title<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
    </ul>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>You should not configure it unless you understand what it is for.</p>
    </div>
    <h3 id="markdown-toc" tabindex="-1">
      <a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a>
      markdown.toc
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>TocPluginOptions | false</code></p>
      </li>
      <li>
        <p>Default:</p>
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
        <p>Details:</p>
        <p>
          Options for
          <a
            href="https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc"
            target="_blank"
            rel="noopener noreferrer"
            >@mdit-vue/plugin-toc<ExternalLinkIcon /></a
          >.
        </p>
        <p>Set to <code v-pre>false</code> to disable this plugin.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#table-of-contents"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Table of
              Contents</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="plugin-config" tabindex="-1">
      <a class="header-anchor" href="#plugin-config" aria-hidden="true">#</a>
      Plugin Config
    </h2>
    <h3 id="plugins" tabindex="-1">
      <a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>(Plugin | Plugin[])[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Plugins to use.</p>
        <p>
          This option accepts an array, each item of which could be a plugin or
          an array of plugins.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/plugin.html">Guide &gt; Plugin</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="plugin-api" tabindex="-1">
      <a class="header-anchor" href="#plugin-api" aria-hidden="true">#</a>
      Plugin API
    </h2>
    <p>
      User config file also works as a VuePress plugin, so all of the Plugin
      APIs are available except the <code v-pre>name</code> and
      <code v-pre>multiple</code> options.
    </p>
    <p>
      Please check out
      <RouterLink to="/reference/plugin-api.html"
        >Plugin API Reference</RouterLink
      >
      for a full list of Plugin APIs.
    </p>
  </div>
</template>
