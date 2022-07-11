<template>
  <div>
    <h1 id="插件-api" tabindex="-1">
      <a class="header-anchor" href="#插件-api" aria-hidden="true">#</a> 插件
      API
    </h1>
    <NpmBadge package="@vuepress/core" />
    <p>
      插件 API 是由
      <a
        href="https://www.npmjs.com/package/@vuepress/core"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/core<ExternalLinkIcon
      /></a>
      包支持的。你可以查看
      <RouterLink to="/zh/reference/node-api.html">Node API</RouterLink>
      来了解如何使用插件 Hooks 中的 VuePress App 实例。
    </p>
    <h2 id="概览" tabindex="-1">
      <a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览
    </h2>
    <p>插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理：</p>
    <ul>
      <li><a href="#name">name</a></li>
      <li><a href="#multiple">multiple</a></li>
    </ul>
    <p>下列 Hooks 会在初始化 App 时处理：</p>
    <ul>
      <li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li>
      <li><a href="#extendsmarkdown">extendsMarkdown</a></li>
      <li><a href="#extendspageoptions">extendsPageOptions</a></li>
      <li><a href="#extendspage">extendsPage</a></li>
      <li><a href="#oninitialized">onInitialized</a></li>
    </ul>
    <p>下列 Hooks 会在准备文件时处理：</p>
    <ul>
      <li><a href="#clientconfigfile">clientConfigFile</a></li>
      <li><a href="#onprepared">onPrepared</a></li>
    </ul>
    <p>下列 Hooks 会在 dev / build 时处理：</p>
    <ul>
      <li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li>
      <li><a href="#alias">alias</a></li>
      <li><a href="#define">define</a></li>
      <li><a href="#onwatched">onWatched</a></li>
      <li><a href="#ongenerated">onGenerated</a></li>
    </ul>
    <blockquote>
      <p>
        查看
        <RouterLink
          to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"
          >深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink
        >
        来更好地理解该流程。
      </p>
    </blockquote>
    <h2 id="基础配置项" tabindex="-1">
      <a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a>
      基础配置项
    </h2>
    <h3 id="name" tabindex="-1">
      <a class="header-anchor" href="#name" aria-hidden="true">#</a> name
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>插件的名称。</p>
        <p>
          它会被用来识别插件，以避免多次使用同一个插件，因此应确保你的插件名称是独一无二的。
        </p>
        <p>它应遵从如下命名约定：</p>
        <ul>
          <li>非 Scoped: <code v-pre>vuepress-plugin-foo</code></li>
          <li>Scoped: <code v-pre>@org/vuepress-plugin-foo</code></li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#multiple">插件 API &gt; multiple</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="multiple" tabindex="-1">
      <a class="header-anchor" href="#multiple" aria-hidden="true">#</a>
      multiple
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
        <p>插件是否能够被多次使用。</p>
        <p>
          如果设置为
          <code v-pre>false</code>
          ，当有相同名称的插件被使用时，先使用的会被后使用的替换掉。
        </p>
        <p>
          如果设置为
          <code v-pre>true</code> ，相同名称的插件可以被多次使用且不会被替换。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li><a href="#name">插件 API &gt; name</a></li>
        </ul>
      </li>
    </ul>
    <h2 id="开发-hooks" tabindex="-1">
      <a class="header-anchor" href="#开发-hooks" aria-hidden="true">#</a> 开发
      Hooks
    </h2>
    <h3 id="alias" tabindex="-1">
      <a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >Record&lt;string, any&gt; | ((app: App) =&gt; Record&lt;string,
            any&gt;)</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>定义路径别名。</p>
        <p>该 Hook 接收一个对象，或者一个返回对象的函数。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'@alias'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./path/to/alias'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="clientconfigfile" tabindex="-1">
      <a class="header-anchor" href="#clientconfigfile" aria-hidden="true">#</a>
      clientConfigFile
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>客户端配置文件路径。</p>
        <p>该 Hook 接收文件绝对路径，或者一个返回路径的函数。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/utils'</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">clientConfigFile</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
    __dirname<span class="token punctuation">,</span>
    <span class="token string">'./path/to/clientConfig.js'</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
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
            <RouterLink to="/zh/reference/client-api.html#defineclientconfig"
              >客户端 API &gt; defineClientConfig</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/advanced/cookbook/usage-of-client-config.html"
              >深入 &gt; Cookbook &gt; 客户端配置的使用方法</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="define" tabindex="-1">
      <a class="header-anchor" href="#define" aria-hidden="true">#</a> define
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >Record&lt;string, any&gt; | ((app: App) =&gt; Record&lt;string,
            any&gt;)</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>定义全局常量。</p>
        <p>该 Hook 接收一个对象，或者一个返回对象的函数。</p>
        <p>
          它可以被用于向客户端文件传递变量。注意这里的值都会自动被
          <code v-pre>JSON.stringify()</code> 处理。
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
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__GLOBAL_BOOLEAN__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__GLOBAL_STRING__</span><span class="token operator">:</span> <span class="token string">'foobar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__GLOBAL_OBJECT__</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <h3 id="extendsbundleroptions" tabindex="-1">
      <a class="header-anchor" href="#extendsbundleroptions" aria-hidden="true"
        >#</a
      >
      extendsBundlerOptions
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >(options: BundlerOptions, app: App) =&gt; void |
            Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>Bundler 配置项扩展。</p>
        <p>该 Hook 接收一个函数，在参数中会收到 Bundler 配置项。</p>
        <p>该 Hook 可以用于修改 Bundler 配置项。</p>
        <p>
          你可以通过
          <code v-pre>app.options.bundler.name</code> 判断用户当前使用的
          Bundler。
        </p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <p>
      添加默认的
      <a
        href="https://vuejs.org/api/application.html#app-config-compileroptions"
        target="_blank"
        rel="noopener noreferrer"
        >app.compilerOptions.isCustomElement<ExternalLinkIcon
      /></a>
      配置：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">bundlerOptions<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改 @vuepress/bundler-vite 的配置项</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>bundler<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'@vuepress/bundler-vite'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">const</span> isCustomElement <span class="token operator">=</span> bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span>isCustomElement
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isCustomElement<span class="token operator">?.</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'my-custom-element'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 修改 @vuepress/bundler-webpack 的配置项</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>bundler<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'@vuepress/bundler-webpack'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bundlerOptions<span class="token punctuation">.</span>vue <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">const</span> isCustomElement <span class="token operator">=</span> bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span>isCustomElement
      bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isCustomElement<span class="token operator">?.</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'my-custom-element'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
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
      <li>
        参考：
        <ul>
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
    <h3 id="extendsmarkdownoptions" tabindex="-1">
      <a class="header-anchor" href="#extendsmarkdownoptions" aria-hidden="true"
        >#</a
      >
      extendsMarkdownOptions
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >(options: MarkdownOptions, app: App) =&gt; void |
            Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>Markdown 配置项扩展。</p>
        <p>该 Hook 接收一个函数，在参数中会收到 Markdown 配置项。</p>
        <p>该 Hook 可以用于修改 Markdown 配置项。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <p>修改默认提取的子标题层级：</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsMarkdownOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">markdownOptions<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">.</span>headers <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    markdownOptions<span class="token punctuation">.</span>headers <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>level<span class="token punctuation">)</span> <span class="token keyword">return</span>
    markdownOptions<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
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
    <ul>
      <li>
        参考：
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#markdown"
              >配置 &gt; markdown</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="extendsmarkdown" tabindex="-1">
      <a class="header-anchor" href="#extendsmarkdown" aria-hidden="true">#</a>
      extendsMarkdown
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >(md: Markdown, app: App) =&gt; void | Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>Markdown 增强。</p>
        <p>
          该 Hook 接收一个函数，在参数中会收到一个由
          <a
            href="https://github.com/markdown-it/markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it<ExternalLinkIcon
          /></a>
          提供的 <code v-pre>Markdown</code> 实例。
        </p>
        <p>
          该 Hook 可以用来添加额外的 markdown-it 插件、应用额外的自定义功能。
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
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin1<span class="token punctuation">)</span>
    md<span class="token punctuation">.</span>linkify<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">fuzzyEmail</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
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
    <h3 id="extendspageoptions" tabindex="-1">
      <a class="header-anchor" href="#extendspageoptions" aria-hidden="true"
        >#</a
      >
      extendsPageOptions
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >(options: PageOptions, app: App) =&gt; void |
            Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面配置项扩展。</p>
        <p>
          该 Hook 接收一个函数，在参数中会收到
          <code v-pre>createPage</code> 传入的配置项。
        </p>
        <p>该 Hook 可以用于修改页面配置项。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <p>为 <code v-pre>_posts</code> 目录下的页面设置永久链接 Pattern ：</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsPageOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">pageOptions<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pageOptions<span class="token punctuation">.</span>filePath<span class="token operator">?.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">'_posts/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pageOptions<span class="token punctuation">.</span>frontmatter <span class="token operator">=</span> pageOptions<span class="token punctuation">.</span>frontmatter <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      pageOptions<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>permalinkPattern <span class="token operator">=</span> <span class="token string">'/:year/:month/:day/:slug.html'</span>
    <span class="token punctuation">}</span>
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
    <ul>
      <li>
        参考：
        <ul>
          <li>
            <RouterLink to="/zh/reference/node-api.html#createPage"
              >Node API &gt; Page &gt; createPage</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="extendspage" tabindex="-1">
      <a class="header-anchor" href="#extendspage" aria-hidden="true">#</a>
      extendsPage
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>页面扩展。</p>
        <p>
          该 Hook 接收一个函数，在参数中会收到一个
          <code v-pre>Page</code> 实例。
        </p>
        <p>
          该 Hook 可以用来在 Page 对象上添加额外的属性，或修改现有的属性等。
        </p>
        <p>
          值得一提的是，针对 <code v-pre>page.data</code> 和
          <code v-pre>page.routeMeta</code> 的改动可以在客户端代码中使用。
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
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'foo'</span>
    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">'bar'</span>
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
    <p>在客户端组件中：</p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">usePageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>bar<span class="token punctuation">)</span> <span class="token comment">// bar</span>
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
    <ul>
      <li>
        参考：
        <ul>
          <li>
            <RouterLink to="/zh/reference/client-api.html#usepagedata"
              >客户端 API &gt; usePageData</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#data"
              >Node API &gt; Page 属性 &gt; data</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/node-api.html#routemeta"
              >Node API &gt; Page 属性 &gt; routeMeta</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="生命周期-hooks" tabindex="-1">
      <a class="header-anchor" href="#生命周期-hooks" aria-hidden="true">#</a>
      生命周期 Hooks
    </h2>
    <h3 id="oninitialized" tabindex="-1">
      <a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a>
      onInitialized
    </h3>
    <ul>
      <li>
        <p>
          类型： <code v-pre>(app: App) =&gt; void | Promise&lt;void&gt;</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Hook 会在 VuePress App 初始化后被立即调用。</p>
      </li>
    </ul>
    <h3 id="onprepared" tabindex="-1">
      <a class="header-anchor" href="#onprepared" aria-hidden="true">#</a>
      onPrepared
    </h3>
    <ul>
      <li>
        <p>
          类型： <code v-pre>(app: App) =&gt; void | Promise&lt;void&gt;</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Hook 会在 VuePress App 完成文件准备后被立即调用。</p>
      </li>
    </ul>
    <h3 id="onwatched" tabindex="-1">
      <a class="header-anchor" href="#onwatched" aria-hidden="true">#</a>
      onWatched
    </h3>
    <ul>
      <li>
        <p>
          类型：
          <code v-pre
            >(app: App, watchers: Closable[], restart: () =&gt;
            Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          该 Hook 会在 VuePress App 启动开发服务器并开始监听文件修改后被调用。
        </p>
        <p>
          <code v-pre>watchers</code>
          是一个文件监听器的数组。在修改配置文件导致重启 dev
          命令时，这些监听器会被自动关闭。如果你在当前 Hook
          中添加了新的监听器，你应该把它们也加入到这个数组中，确保在重启 dev
          命令时它们能被正确关闭。
        </p>
        <p>
          <code v-pre>restart</code> 方法用来重启 dev 命令。调用该方法时，
          <code v-pre>watchers</code> 数组中的监听器也会被自动关闭。
        </p>
      </li>
    </ul>
    <h3 id="ongenerated" tabindex="-1">
      <a class="header-anchor" href="#ongenerated" aria-hidden="true">#</a>
      onGenerated
    </h3>
    <ul>
      <li>
        <p>
          类型： <code v-pre>(app: App) =&gt; void | Promise&lt;void&gt;</code>
        </p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Hook 会在 VuePress App 完成静态文件生成后被立即调用。</p>
      </li>
    </ul>
  </div>
</template>
