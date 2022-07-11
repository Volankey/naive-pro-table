<template>
  <div>
    <h1 id="node-api" tabindex="-1">
      <a class="header-anchor" href="#node-api" aria-hidden="true">#</a> Node
      API
    </h1>
    <NpmBadge package="@vuepress/core" />
    <p>
      Node API 是由
      <a
        href="https://www.npmjs.com/package/@vuepress/core"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/core<ExternalLinkIcon
      /></a>
      包提供的。它是
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      包的依赖之一，当然你也可以单独安装它：
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/core@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="app" tabindex="-1">
      <a class="header-anchor" href="#app" aria-hidden="true">#</a> App
    </h2>
    <p>
      <RouterLink to="/zh/reference/plugin-api.html">插件 API</RouterLink>
      的所有 Hooks 中都可以获取到 App 实例。
    </p>
    <p>
      <code v-pre>BuildApp</code> 和 <code v-pre>DevApp</code> 除了
      <a href="#build">build</a> 和
      <a href="#dev">dev</a> 方法外，拥有一样的属性和方法。
    </p>
    <h3 id="createbuildapp" tabindex="-1">
      <a class="header-anchor" href="#createbuildapp" aria-hidden="true">#</a>
      createBuildApp
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">createBuildApp</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AppConfig<span class="token punctuation">)</span> <span class="token operator">=></span> BuildApp
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>参数：</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>config</td>
          <td><code v-pre>AppConfig</code></td>
          <td>创建 VuePress App 的选项。</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>详情：</p>
        <p>创建一个 Build 模式的 App 实例，用于构建静态文件。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">build</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createBuildApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...配置项</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 初始化和准备</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 构建</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 处理 onGenerated hook</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span>pluginApi<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>onGenerated<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
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
      </div>
    </div>
    <ul>
      <li>
        参考：
        <ul>
          <li><a href="#build">Node API &gt; App 方法 &gt; build</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="createdevapp" tabindex="-1">
      <a class="header-anchor" href="#createdevapp" aria-hidden="true">#</a>
      createDevApp
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">createDevApp</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AppConfig<span class="token punctuation">)</span> <span class="token operator">=></span> DevApp
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>参数：</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>config</td>
          <td><code v-pre>AppConfig</code></td>
          <td>创建 VuePress App 的选项。</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>详情：</p>
        <p>创建一个 Dev 模式的 App 实例，用于启动开发服务器。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">dev</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createDevApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...配置项</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 初始化和准备</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 启动开发服务器</span>
  <span class="token keyword">const</span> closeDevServer <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">dev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 准备文件监听器</span>
  <span class="token keyword">const</span> watchers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 重启开发服务器</span>
  <span class="token keyword">const</span> <span class="token function-variable function">restart</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token comment">// 关闭所有监听器</span>
      <span class="token operator">...</span>watchers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 关闭当前的开发服务器</span>
      <span class="token function">closeDevServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">dev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理 onWatched hook</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span>pluginApi<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>onWatched<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> watchers<span class="token punctuation">,</span> restart<span class="token punctuation">)</span>
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
      </div>
    </div>
    <ul>
      <li>
        参考：
        <ul>
          <li><a href="#dev">Node API &gt; App 方法 &gt; dev</a></li>
        </ul>
      </li>
    </ul>
    <h2 id="app-属性" tabindex="-1">
      <a class="header-anchor" href="#app-属性" aria-hidden="true">#</a> App
      属性
    </h2>
    <h3 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> options
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>AppOptions</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>VuePress App 的配置项。</p>
        <p>
          这些配置项来自于 <a href="#createbuildapp">createBuildApp</a> /
          <a href="#createdevapp">createDevApp</a> 的
          <code v-pre>config</code> 参数，但所有可选的字段都填充上了默认值。
        </p>
      </li>
    </ul>
    <h3 id="sitedata" tabindex="-1">
      <a class="header-anchor" href="#sitedata" aria-hidden="true">#</a>
      siteData
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>SiteData</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          由用户设置的站点数据，包含所有的
          <RouterLink
            to="/zh/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE"
            >站点配置</RouterLink
          >
          ，可以在客户端代码中使用。
        </p>
      </li>
    </ul>
    <h3 id="version" tabindex="-1">
      <a class="header-anchor" href="#version" aria-hidden="true">#</a> version
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          VuePress App 的版本，即 <code v-pre>@vuepress/core</code> 包的版本。
        </p>
      </li>
    </ul>
    <h3 id="env-isbuild" tabindex="-1">
      <a class="header-anchor" href="#env-isbuild" aria-hidden="true">#</a>
      env.isBuild
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          用于判断 App 是否运行在 Build 模式的环境标记，即当前 App 是否是
          <a href="#createbuildapp">BuildApp</a> 实例。
        </p>
      </li>
    </ul>
    <h3 id="env-isdev" tabindex="-1">
      <a class="header-anchor" href="#env-isdev" aria-hidden="true">#</a>
      env.isDev
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          用于判断 App 是否运行在 Dev 模式的环境标记，即当前 App 是否是
          <a href="#createdevapp">DevApp</a> 实例。
        </p>
      </li>
    </ul>
    <h3 id="env-isdebug" tabindex="-1">
      <a class="header-anchor" href="#env-isdebug" aria-hidden="true">#</a>
      env.isDebug
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>用于判断 App 是否开启 Debug 模式的环境标记。</p>
      </li>
    </ul>
    <h3 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      markdown
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>MarkdownIt</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          用于解析 Markdown 内容的
          <a
            href="https://github.com/markdown-it/markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it<ExternalLinkIcon
          /></a>
          实例。
        </p>
        <p>
          它仅在
          <RouterLink to="/zh/reference/plugin-api.html#oninitialized"
            >onInitialized</RouterLink
          >
          以及之后的 Hooks 中才可用。
        </p>
      </li>
    </ul>
    <h3 id="layouts" tabindex="-1">
      <a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Record&lt;string, string&gt;</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>布局组件 Map ，其键为布局名称，对应值为布局组件的绝对文件路径。</p>
        <p>
          它仅在
          <RouterLink to="/zh/reference/plugin-api.html#oninitialized"
            >onInitialized</RouterLink
          >
          以及之后的 Hooks 中才可用。
        </p>
      </li>
    </ul>
    <h3 id="pages" tabindex="-1">
      <a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Page[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p><a href="#page">Page</a> 对象数组。</p>
        <p>
          它仅在
          <RouterLink to="/zh/reference/plugin-api.html#oninitialized"
            >onInitialized</RouterLink
          >
          以及之后的 Hooks 中才可用。
        </p>
      </li>
    </ul>
    <h2 id="app-方法" tabindex="-1">
      <a class="header-anchor" href="#app-方法" aria-hidden="true">#</a> App
      方法
    </h2>
    <h3 id="dir" tabindex="-1">
      <a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir
    </h3>
    <ul>
      <li>
        <p>工具函数：</p>
        <ul>
          <li><code v-pre>dir.cache()</code>： 解析至缓存目录</li>
          <li><code v-pre>dir.temp()</code>： 解析至临时文件目录</li>
          <li><code v-pre>dir.source()</code>： 解析至源文件目录</li>
          <li><code v-pre>dir.dest()</code>： 解析至输出目录</li>
          <li>
            <code v-pre>dir.client()</code>： 解析至
            <code v-pre>@vuepress/client</code> 目录
          </li>
          <li><code v-pre>dir.public()</code>： 解析至 Public 文件目录</li>
        </ul>
      </li>
      <li>
        <p>函数签名：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">type</span> <span class="token class-name">AppDirFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>用于解析对应目录下的文件绝对路径的一些工具函数。</p>
        <p>如果你不传入任何参数，就会返回对应目录的绝对路径。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token comment">// 解析 `${sourceDir}/README.md` 文件的绝对路径</span>
<span class="token keyword">const</span> homeSourceFile <span class="token operator">=</span> app<span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">'README.md'</span><span class="token punctuation">)</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="writetemp" tabindex="-1">
      <a class="header-anchor" href="#writetemp" aria-hidden="true">#</a>
      writeTemp
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token function">writeTemp</span><span class="token punctuation">(</span>file<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>参数：</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>file</td>
          <td><code v-pre>string</code></td>
          <td>要写入的临时文件的路径，相对于临时文件目录。</td>
        </tr>
        <tr>
          <td>content</td>
          <td><code v-pre>string</code></td>
          <td>要写入的临时文件路径的内容。</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>详情：</p>
        <p>用于写入临时文件的方法。</p>
        <p>
          写入的文件可以在客户端文件中通过 <code v-pre>@temp</code> 别名来引入。
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
  <span class="token comment">// 在 onPrepared hook 中写入临时文件</span>
  <span class="token keyword">async</span> <span class="token function">onPrepared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">writeTemp</span><span class="token punctuation">(</span><span class="token string">'foo.js'</span><span class="token punctuation">,</span> <span class="token string">'export const foo = \'bar\''</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
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
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token comment">// 在客户端文件中引入临时文件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@temp/foo'</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="init" tabindex="-1">
      <a class="header-anchor" href="#init" aria-hidden="true">#</a> init
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>初始化 VuePress App 。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"
              >深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="prepare" tabindex="-1">
      <a class="header-anchor" href="#prepare" aria-hidden="true">#</a> prepare
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>准备客户端临时文件。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"
              >深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="build" tabindex="-1">
      <a class="header-anchor" href="#build" aria-hidden="true">#</a> build
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>生成静态站点文件。</p>
        <p>该方法仅在 <a href="#createbuildapp">BuildApp</a> 中可用。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"
              >深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="dev" tabindex="-1">
      <a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token function">dev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">>></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>详情：</p>
        <p>启动开发服务器。</p>
        <p>该方法仅在 <a href="#createdevapp">DevApp</a> 中可用。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink
              to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"
              >深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="page" tabindex="-1">
      <a class="header-anchor" href="#page" aria-hidden="true">#</a> Page
    </h2>
    <h3 id="createpage" tabindex="-1">
      <a class="header-anchor" href="#createpage" aria-hidden="true">#</a>
      createPage
    </h3>
    <ul>
      <li>函数签名：</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">createPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">,</span> options<span class="token operator">:</span> PageOptions<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Page<span class="token operator">></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>参数：</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>app</td>
          <td><code v-pre>App</code></td>
          <td>VuePress App 实例。</td>
        </tr>
        <tr>
          <td>options</td>
          <td><code v-pre>PageOptions</code></td>
          <td>创建 VuePress Page 的选项。</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>详情：</p>
        <p>创建一个 VuePress Page 对象。</p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/core'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在 onInitialized hook 中创建一个额外页面</span>
  <span class="token keyword">async</span> <span class="token function">onInitialized</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token keyword">await</span> <span class="token function">createPage</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/foo.html'</span><span class="token punctuation">,</span>
        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>
          layout<span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\
# 某个 Page

你好，世界。
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
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
      </div>
    </div>
    <ul>
      <li>
        参考：
        <ul>
          <li><a href="#pages">Node API &gt; App 属性 &gt; pages</a></li>
          <li>
            <RouterLink to="/zh/advanced/cookbook/adding-extra-pages.html"
              >Cookbook &gt; 添加额外页面</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="page-属性" tabindex="-1">
      <a class="header-anchor" href="#page-属性" aria-hidden="true">#</a> Page
      属性
    </h2>
    <h3 id="key" tabindex="-1">
      <a class="header-anchor" href="#key" aria-hidden="true">#</a> key
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的标识。</p>
        <p>
          Page Key 会被用作页面路由的
          <a
            href="https://router.vuejs.org/api/#name-2"
            target="_blank"
            rel="noopener noreferrer"
            >name<ExternalLinkIcon /></a
          >。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/components.html#content"
              >Built-in Components &gt; Content</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="path" tabindex="-1">
      <a class="header-anchor" href="#path" aria-hidden="true">#</a> path
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的路由路径。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/page.html#%E8%B7%AF%E7%94%B1"
              >指南 &gt; 页面 &gt; 路由</RouterLink
            >
          </li>
          <li>
            <a href="#pathinferred"
              >Node API &gt; Page 属性 &gt; pathInferred</a
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
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的标题。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#title"
              >Frontmatter &gt; title</RouterLink
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
        <p>详情：</p>
        <p>该 Page 的语言。</p>
      </li>
      <li>
        <p>示例：</p>
        <ul>
          <li><code v-pre>'en-US'</code></li>
          <li><code v-pre>'zh-CN'</code></li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#title"
              >Frontmatter &gt; lang</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="frontmatter" tabindex="-1">
      <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a>
      frontmatter
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>PageFrontmatter</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的 Frontmatter 。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html"
              >Frontmatter</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="excerpt" tabindex="-1">
      <a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的摘要。</p>
        <p>
          如果一个 Markdown 文件中包含一个
          <code v-pre>&lt;!-- more --&gt;</code>
          注释，那么该注释上方的内容都会被作为摘要提取并渲染。
        </p>
        <p>
          如果你在创建一个用于博客的自定义主题，那么它可以帮助你创建一个包含摘要的文章列表。
        </p>
      </li>
      <li>
        <p>示例：</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>在 <span class="token code-snippet code keyword">`&lt;!-- more -->`</span> 注释上方的内容会被当作摘要。

建议你在该注释前后添加空行，以避免渲染问题。

<span class="token comment">&lt;!-- more --></span>

在 <span class="token code-snippet code keyword">`&lt;!-- more -->`</span> 注释下方的内容不会被当作摘要。
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
    <h3 id="headers" tabindex="-1">
      <a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers
    </h3>
    <ul>
      <li>类型： <code v-pre>PageHeader[]</code></li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">interface</span> <span class="token class-name">PageHeader</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token builtin">number</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  slug<span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">:</span> PageHeader<span class="token punctuation">[</span><span class="token punctuation">]</span>
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
        <p>该 Page 的小标题。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#markdown-headers"
              >配置 &gt; markdown.headers</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="data" tabindex="-1">
      <a class="header-anchor" href="#data" aria-hidden="true">#</a> data
    </h3>
    <ul>
      <li>类型： <code v-pre>PageData</code></li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">interface</span> <span class="token class-name">PageData</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span>
  frontmatter<span class="token operator">:</span> PageFrontmatter
  excerpt<span class="token operator">:</span> <span class="token builtin">string</span>
  headers<span class="token operator">:</span> PageHeader<span class="token punctuation">[</span><span class="token punctuation">]</span>
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
        <p>该 Page 的数据。</p>
        <p>Page 数据可以在客户端代码中使用。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/client-api.html#usepagedata"
              >客户端 API &gt; usePageData</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/plugin-api.html#extendspage"
              >插件 API &gt; extendsPage</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="content" tabindex="-1">
      <a class="header-anchor" href="#content" aria-hidden="true">#</a> content
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的未经渲染的原始内容。</p>
      </li>
    </ul>
    <h3 id="contentrendered" tabindex="-1">
      <a class="header-anchor" href="#contentrendered" aria-hidden="true">#</a>
      contentRendered
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的渲染后的内容。</p>
      </li>
    </ul>
    <h3 id="date" tabindex="-1">
      <a class="header-anchor" href="#date" aria-hidden="true">#</a> date
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的日期，遵从 'yyyy-MM-dd' 格式。</p>
      </li>
      <li>
        <p>示例：</p>
        <ul>
          <li><code v-pre>'0000-00-00'</code></li>
          <li><code v-pre>'2021-08-16</code>'</li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#date"
              >Frontmatter &gt; date</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="deps" tabindex="-1">
      <a class="header-anchor" href="#deps" aria-hidden="true">#</a> deps
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的依赖。</p>
        <p>
          举例来说，如果在页面中导入了代码片段，那么被导入文件的绝对路径就会被添加到
          <code v-pre>deps</code> 中。
        </p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#markdown-importcode"
              >配置 &gt; markdown.importCode</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="links" tabindex="-1">
      <a class="header-anchor" href="#links" aria-hidden="true">#</a> links
    </h3>
    <ul>
      <li>类型： <code v-pre>MarkdownLink[]</code></li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownLink</span> <span class="token punctuation">{</span>
  raw<span class="token operator">:</span> <span class="token builtin">string</span>
  relative<span class="token operator">:</span> <span class="token builtin">string</span>
  absolute<span class="token operator">:</span> <span class="token builtin">string</span>
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
    <ul>
      <li>
        <p>详情：</p>
        <p>该 Page 中的链接。</p>
      </li>
    </ul>
    <h3 id="pathinferred" tabindex="-1">
      <a class="header-anchor" href="#pathinferred" aria-hidden="true">#</a>
      pathInferred
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 根据文件路径推断出的路由路径。</p>
        <p>
          默认情况下，路由路径是根据 Markdown
          源文件的相对文件路径推断出来的。然而，用户可能会显式指定页面路由，比如通过
          <a href="#permalink">permalink</a>
          来指定该页面最终使用的路由路径。因此我们在 Page
          属性中保留推断出来的路径，以便于你在某些情况下可能会用到它。
        </p>
        <p>
          如果该 Page 不是来自于 Markdown 源文件，那么该属性会为
          <code v-pre>null</code> 。
        </p>
      </li>
      <li>
        <p>示例：</p>
        <ul>
          <li><code v-pre>'/'</code></li>
          <li><code v-pre>'/foo.html'</code></li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/guide/page.html#%E8%B7%AF%E7%94%B1"
              >指南 &gt; 页面 &gt; 路由</RouterLink
            >
          </li>
          <li><a href="#path">Node API &gt; Page 属性 &gt; path</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="pathlocale" tabindex="-1">
      <a class="header-anchor" href="#pathlocale" aria-hidden="true">#</a>
      pathLocale
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 路由路径的 Locale 前缀。</p>
        <p>
          它是根据页面的 Markdown 源文件相对路径、以及用户配置的
          <code v-pre>locales</code> 的键推断得到的。
        </p>
      </li>
      <li>
        <p>示例：</p>
        <ul>
          <li><code v-pre>'/'</code></li>
          <li><code v-pre>'/en/'</code></li>
          <li><code v-pre>'/zh/'</code></li>
        </ul>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#locales"
              >配置 &gt; locales</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="permalink" tabindex="-1">
      <a class="header-anchor" href="#permalink" aria-hidden="true">#</a>
      permalink
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的永久链接。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#permalink"
              >Frontmatter &gt; permalink</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#permalinkpattern"
              >Frontmatter &gt; permalinkPattern</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="routemeta" tabindex="-1">
      <a class="header-anchor" href="#routemeta" aria-hidden="true">#</a>
      routeMeta
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Record&lt;string, unknown&gt;</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>附加到 vue-router 路由记录上的额外数据。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/frontmatter.html#routemeta"
              >Frontmatter &gt; routeMeta</RouterLink
            >
          </li>
          <li>
            <a
              href="https://router.vuejs.org/zh/api/#meta"
              target="_blank"
              rel="noopener noreferrer"
              >vue-router &gt; API 参考 &gt; RouteRecordRaw &gt;
              meta<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">
        Route Meta 和 Page Data 的区别是什么？
      </p>
      <p>
        <a href="#routemeta">Route Meta</a> 和
        <a href="#data">Page Data</a> 都可以在客户端代码中使用。然而， Route
        Meta 是附加在路由记录上的，因此当用户进入你的站点时，所有页面的 Route
        Meta 都会立即被加载。相比之下， Page Data
        是存储在单独的文件中的，只有在用户进入对应页面时才会被加载。
      </p>
      <p>
        因此，不建议在 Route Meta
        中存储大量的信息，否则在站点有很多页面时，将会影响站点的初始加载速度。
      </p>
    </div>
    <h3 id="sfcblocks" tabindex="-1">
      <a class="header-anchor" href="#sfcblocks" aria-hidden="true">#</a>
      sfcBlocks
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 中提取出的 Vue SFC Blocks 。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/config.html#markdown-sfc"
              >配置 &gt; markdown.sfc</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="slug" tabindex="-1">
      <a class="header-anchor" href="#slug" aria-hidden="true">#</a> slug
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的 Slug 。</p>
        <p>它是根据页面的 Markdown 源文件的文件名推断得到的。</p>
      </li>
    </ul>
    <h3 id="filepath" tabindex="-1">
      <a class="header-anchor" href="#filepath" aria-hidden="true">#</a>
      filePath
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的 Markdown 源文件的绝对路径。</p>
        <p>
          如果该 Page 不是来自于 Markdown 源文件，那么该属性会为
          <code v-pre>null</code> 。
        </p>
      </li>
    </ul>
    <h3 id="filepathrelative" tabindex="-1">
      <a class="header-anchor" href="#filepathrelative" aria-hidden="true">#</a>
      filePathRelative
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>该 Page 的 Markdown 源文件的相对路径。</p>
        <p>
          如果该 Page 不是来自于 Markdown 源文件，那么该属性会为
          <code v-pre>null</code> 。
        </p>
      </li>
    </ul>
  </div>
</template>
