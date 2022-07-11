<template>
  <div>
    <h1 id="webpack" tabindex="-1">
      <a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack
    </h1>
    <NpmBadge package="@vuepress/bundler-webpack" />
    <p>
      Webpack 打包工具是由
      <a
        href="https://www.npmjs.com/package/@vuepress/bundler-webpack"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/bundler-webpack<ExternalLinkIcon
      /></a>
      包提供的。它是
      <a
        href="https://www.npmjs.com/package/vuepress-webpack"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress-webpack<ExternalLinkIcon
      /></a>
      包的依赖之一，当然你也可以单独安装它：
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
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <p>Webpack 打包工具的配置项：</p>
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
          类型：
          <code v-pre
            >(config: WebpackConfiguration, isServer: boolean, isBuild: boolean)
            =&gt; WebpackConfiguration | void</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>用于修改内部的 Webpack 配置。</p>
        <p>
          该配置项接收一个函数，该函数的第一个参数是 Webpack
          配置对象，第二个参数是
          <code v-pre>isServer</code> 标志位，第三个参数是
          <code v-pre>isBuild</code> 标志位。
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
          类型：
          <code v-pre
            >(config: WebpackChainConfig, isServer: boolean, isBuild: boolean)
            =&gt; void</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          通过
          <a
            href="https://github.com/mozilla-neutrino/webpack-chain"
            target="_blank"
            rel="noopener noreferrer"
            >webpack-chain<ExternalLinkIcon
          /></a>
          来修改内部的 Webpack 配置。
        </p>
        <p>
          该配置项接收一个函数，该函数的第一个参数是由
          <code v-pre>webpack-chain</code> 提供的
          <code v-pre>Config</code> 实例，第二个参数是
          <code v-pre>isServer</code> 标志位，第三个参数是
          <code v-pre>isBuild</code> 标志位。
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
          类型：
          <code v-pre
            >(middlewares: Middleware[], devServer: Server) =&gt;
            Middleware[]</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          在 Webpack 的 <code v-pre>devServer.setupMiddlewares</code> 中调用的
          Hook 。
        </p>
        <p>
          函数的参数即是 <code v-pre>devServer.setupMiddlewares</code> 的参数。
        </p>
      </li>
      <li>
        <p>参考：</p>
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
        <p>类型： <code v-pre>VueLoaderOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><code v-pre>vue-loader</code> 的配置项。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <a
              href="https://vue-loader.vuejs.org/zh/options.html"
              target="_blank"
              rel="noopener noreferrer"
              >vue-loader &gt; 选项参考<ExternalLinkIcon
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
        <p>类型： <code v-pre>PostcssLoaderOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><code v-pre>postcss-loader</code> 的配置项。</p>
      </li>
      <li>
        <p>参考：</p>
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
        <p>类型： <code v-pre>StylusLoaderOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><code v-pre>stylus-loader</code> 的配置项。</p>
      </li>
      <li>
        <p>参考：</p>
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
        <p>类型： <code v-pre>SassLoaderOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          针对 <code v-pre>.scss</code> 文件的
          <code v-pre>sass-loader</code> 的配置项。
        </p>
      </li>
      <li>
        <p>参考：</p>
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
        <p>类型： <code v-pre>SassLoaderOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          针对 <code v-pre>.sass</code> 文件的
          <code v-pre>sass-loader</code> 的配置项。
        </p>
      </li>
      <li>
        <p>参考：</p>
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
        <p>类型： <code v-pre>LessLoaderOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><code v-pre>less-loader</code> 的配置项。</p>
      </li>
      <li>
        <p>参考：</p>
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
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>true</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成
          <code v-pre>true</code> 。这将会禁用一些转译过程和 Polyfills
          ，带来更快的构建速度和更小的文件体积。
        </p>
      </li>
    </ul>
    <h2 id="常见问题" tabindex="-1">
      <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a>
      常见问题
    </h2>
    <h3 id="在修改-base-后引用-public-文件" tabindex="-1">
      <a
        class="header-anchor"
        href="#在修改-base-后引用-public-文件"
        aria-hidden="true"
        >#</a
      >
      在修改 <code v-pre>base</code> 后引用 Public 文件
    </h3>
    <p>
      与 Vite 不同， Webpack 不会为 Public 文件自动处理
      <code v-pre>base</code>。因此如果你修改了网站的
      <code v-pre>base</code>，建议你在引用 Public 图片文件时使用
      <RouterLink to="/zh/guide/assets.html#base-helper">Base Helper</RouterLink
      >。
    </p>
    <h3 id="使用默认主题" tabindex="-1">
      <a class="header-anchor" href="#使用默认主题" aria-hidden="true">#</a>
      使用默认主题
    </h3>
    <p>
      默认主题使用
      <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"
        >SASS<ExternalLinkIcon
      /></a>
      作为 CSS 预处理器，因此你在使用 Webpack 时（特别是在使用
      <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer"
        >pnpm<ExternalLinkIcon
      /></a>
      时）可能需要手动安装
      <a
        href="https://www.npmjs.com/package/sass-loader"
        target="_blank"
        rel="noopener noreferrer"
        >sass-loader<ExternalLinkIcon
      /></a>
      来确保其正常工作。
    </p>
  </div>
</template>
