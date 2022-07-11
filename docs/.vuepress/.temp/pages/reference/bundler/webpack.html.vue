<template>
  <div>
    <h1 id="webpack" tabindex="-1">
      <a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack
    </h1>
    <NpmBadge package="@vuepress/bundler-webpack" />
    <p>
      Webpack bundler is provided by
      <a
        href="https://www.npmjs.com/package/@vuepress/bundler-webpack"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/bundler-webpack<ExternalLinkIcon
      /></a>
      package. It is a dependency of the
      <a
        href="https://www.npmjs.com/package/vuepress-webpack"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress-webpack<ExternalLinkIcon
      /></a>
      package, and you can also install it separately.
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/bundler-webpack@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <p>Reference of webpack bundler options:</p>
    <CodeGroup>
      <CodeGroupItem title="JS" active>
        <div class="language-javascript ext-js line-numbers-mode">
          <pre
            v-pre
            class="language-javascript"
          ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> webpackBundler <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/bundler-webpack'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
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
      </CodeGroupItem>
      <CodeGroupItem title="TS">
        <div class="language-typescript ext-ts line-numbers-mode">
          <pre
            v-pre
            class="language-typescript"
          ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webpackBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-webpack'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vue<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
            <div class="line-number"></div>
          </div>
        </div>
      </CodeGroupItem>
    </CodeGroup>
    <h3 id="configurewebpack" tabindex="-1">
      <a class="header-anchor" href="#configurewebpack" aria-hidden="true">#</a>
      configureWebpack
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >(config: WebpackConfiguration, isServer: boolean, isBuild: boolean)
            =&gt; WebpackConfiguration | void</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Edit the internal webpack config.</p>
        <p>
          This option accepts a function that will receive a webpack config
          object as the 1st argument, an <code v-pre>isServer</code> flag as the
          2nd argument and an <code v-pre>isBuild</code> flag as the 3rd
          argument. You can either mutate the config directly, or return an
          object to be merged by
          <a
            href="https://github.com/survivejs/webpack-merge"
            target="_blank"
            rel="noopener noreferrer"
            >webpack-merge<ExternalLinkIcon /></a
          >.
        </p>
      </li>
    </ul>
    <h3 id="chainwebpack" tabindex="-1">
      <a class="header-anchor" href="#chainwebpack" aria-hidden="true">#</a>
      chainWebpack
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >(config: WebpackChainConfig, isServer: boolean, isBuild: boolean)
            =&gt; void</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Edit the internal webpack config with
          <a
            href="https://github.com/mozilla-neutrino/webpack-chain"
            target="_blank"
            rel="noopener noreferrer"
            >webpack-chain<ExternalLinkIcon /></a
          >.
        </p>
        <p>
          This option accepts a function that will receive a
          <code v-pre>Config</code> instance that provided by
          <code v-pre>webpack-chain</code> as the 1st argument an
          <code v-pre>isServer</code> flag as the 2nd argument and an
          <code v-pre>isBuild</code> flag as the 3rd argument.
        </p>
      </li>
    </ul>
    <h3 id="devserversetupmiddlewares" tabindex="-1">
      <a
        class="header-anchor"
        href="#devserversetupmiddlewares"
        aria-hidden="true"
        >#</a
      >
      devServerSetupMiddlewares
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >(middlewares: Middleware[], devServer: Server) =&gt;
            Middleware[]</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          A hook to be called in
          <code v-pre>devServer.setupMiddlewares</code> of webpack.
        </p>
        <p>
          The arguments of the function are those of
          <code v-pre>devServer.setupMiddlewares</code>.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares"
              target="_blank"
              rel="noopener noreferrer"
              >Webpack &gt; Configuration &gt; DevServer &gt;
              devServer.setupMiddlewares<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="vue" tabindex="-1">
      <a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>VueLoaderOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for <code v-pre>vue-loader</code>.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://vue-loader.vuejs.org/options.html"
              target="_blank"
              rel="noopener noreferrer"
              >vue-loader &gt; Options Reference<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="postcss" tabindex="-1">
      <a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>PostcssLoaderOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for <code v-pre>postcss-loader</code>.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://github.com/webpack-contrib/postcss-loader#options"
              target="_blank"
              rel="noopener noreferrer"
              >postcss-loader &gt; Options<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="stylus" tabindex="-1">
      <a class="header-anchor" href="#stylus" aria-hidden="true">#</a> stylus
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>StylusLoaderOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for <code v-pre>stylus-loader</code>.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://github.com/webpack-contrib/stylus-loader#options"
              target="_blank"
              rel="noopener noreferrer"
              >stylus-loader &gt; Options<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="scss" tabindex="-1">
      <a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>SassLoaderOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Options for <code v-pre>sass-loader</code> for
          <code v-pre>.scss</code> files.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://github.com/webpack-contrib/sass-loader#options"
              target="_blank"
              rel="noopener noreferrer"
              >sass-loader &gt; Options<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="sass" tabindex="-1">
      <a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>SassLoaderOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Options for <code v-pre>sass-loader</code> for
          <code v-pre>.sass</code> files.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://github.com/webpack-contrib/sass-loader#options"
              target="_blank"
              rel="noopener noreferrer"
              >sass-loader &gt; Options<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="less" tabindex="-1">
      <a class="header-anchor" href="#less" aria-hidden="true">#</a> less
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>LessLoaderOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for <code v-pre>less-loader</code>.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://github.com/webpack-contrib/less-loader#options"
              target="_blank"
              rel="noopener noreferrer"
              >less-loader &gt; Options<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="evergreen" tabindex="-1">
      <a class="header-anchor" href="#evergreen" aria-hidden="true">#</a>
      evergreen
    </h3>
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
          Set to <code v-pre>true</code> if you are only targeting evergreen
          browsers. This will disable some transpilation and polyfills, and
          result in faster builds and smaller files.
        </p>
      </li>
    </ul>
    <h2 id="faq" tabindex="-1">
      <a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ
    </h2>
    <h3 id="referencing-public-files-after-changing-base" tabindex="-1">
      <a
        class="header-anchor"
        href="#referencing-public-files-after-changing-base"
        aria-hidden="true"
        >#</a
      >
      Referencing Public Files after Changing <code v-pre>base</code>
    </h3>
    <p>
      Unlike Vite, Webpack won't handle <code v-pre>base</code> for public files
      automatically. So if you change the <code v-pre>base</code> of your site,
      you'd better to use
      <RouterLink to="/guide/assets.html#base-helper">Base Helper</RouterLink>
      when referencing an public image file.
    </p>
    <h3 id="using-with-default-theme" tabindex="-1">
      <a
        class="header-anchor"
        href="#using-with-default-theme"
        aria-hidden="true"
        >#</a
      >
      Using with Default Theme
    </h3>
    <p>
      Default theme is using
      <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"
        >SASS<ExternalLinkIcon
      /></a>
      as CSS pre-processor, so you might need to install
      <a
        href="https://www.npmjs.com/package/sass-loader"
        target="_blank"
        rel="noopener noreferrer"
        >sass-loader<ExternalLinkIcon
      /></a>
      as a peer dependency to make it work with Webpack, especially when you are
      using
      <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer"
        >pnpm<ExternalLinkIcon /></a
      >.
    </p>
  </div>
</template>
