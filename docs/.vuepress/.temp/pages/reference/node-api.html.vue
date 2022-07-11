<template>
  <div>
    <h1 id="node-api" tabindex="-1">
      <a class="header-anchor" href="#node-api" aria-hidden="true">#</a> Node
      API
    </h1>
    <NpmBadge package="@vuepress/core" />
    <p>
      Node API is provided by
      <a
        href="https://www.npmjs.com/package/@vuepress/core"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/core<ExternalLinkIcon
      /></a>
      package. It is a dependency of the
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      package, and you can also install it separately:
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
      The app instance is available in all hooks of
      <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>.
    </p>
    <p>
      The <code v-pre>BuildApp</code> and <code v-pre>DevApp</code> share almost
      the same properties and methods, except <a href="#build">build</a> and
      <a href="#dev">dev</a> method.
    </p>
    <h3 id="createbuildapp" tabindex="-1">
      <a class="header-anchor" href="#createbuildapp" aria-hidden="true">#</a>
      createBuildApp
    </h3>
    <ul>
      <li>Signature:</li>
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
      <li>Parameters:</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>config</td>
          <td><code v-pre>AppConfig</code></td>
          <td>Config to create a VuePress app.</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          Create a build mode app instance, which is used for building static
          files.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">build</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createBuildApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// initialize and prepare</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// build</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// process onGenerated hook</span>
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
        Also see:
        <ul>
          <li><a href="#build">Node API &gt; App Methods &gt; build</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="createdevapp" tabindex="-1">
      <a class="header-anchor" href="#createdevapp" aria-hidden="true">#</a>
      createDevApp
    </h3>
    <ul>
      <li>Signature:</li>
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
      <li>Parameters:</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>config</td>
          <td><code v-pre>AppConfig</code></td>
          <td>Config to create a VuePress app.</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          Create a dev mode app instance, which is used for starting a dev
          server.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token function-variable function">dev</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createDevApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// initialize and prepare</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// start dev server</span>
  <span class="token keyword">const</span> closeDevServer <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">dev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// set up file watchers</span>
  <span class="token keyword">const</span> watchers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// restart dev server</span>
  <span class="token keyword">const</span> <span class="token function-variable function">restart</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token comment">// close all watchers</span>
      <span class="token operator">...</span>watchers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// close current dev server</span>
      <span class="token function">closeDevServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">dev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// process onWatched hook</span>
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
        Also see:
        <ul>
          <li><a href="#dev">Node API &gt; App Methods &gt; dev</a></li>
        </ul>
      </li>
    </ul>
    <h2 id="app-properties" tabindex="-1">
      <a class="header-anchor" href="#app-properties" aria-hidden="true">#</a>
      App Properties
    </h2>
    <h3 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> options
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>AppOptions</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options of VuePress app.</p>
        <p>
          The options come from the <code v-pre>config</code> argument in
          <a href="#createbuildapp">createBuildApp</a> /
          <a href="#createdevapp">createDevApp</a>, while all optional fields
          will be filled with a default value.
        </p>
      </li>
    </ul>
    <h3 id="sitedata" tabindex="-1">
      <a class="header-anchor" href="#sitedata" aria-hidden="true">#</a>
      siteData
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>SiteData</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Site data that set by user, including all the
          <RouterLink to="/reference/config.html#site-config"
            >site config</RouterLink
          >, which will be used in client side.
        </p>
      </li>
    </ul>
    <h3 id="version" tabindex="-1">
      <a class="header-anchor" href="#version" aria-hidden="true">#</a> version
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Version of VuePress app, i.e. version of
          <code v-pre>@vuepress/core</code> package.
        </p>
      </li>
    </ul>
    <h3 id="env-isbuild" tabindex="-1">
      <a class="header-anchor" href="#env-isbuild" aria-hidden="true">#</a>
      env.isBuild
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Environment flag used to identify whether the app is running in build
          mode, i.e. whether a <a href="#createbuildapp">BuildApp</a> instance.
        </p>
      </li>
    </ul>
    <h3 id="env-isdev" tabindex="-1">
      <a class="header-anchor" href="#env-isdev" aria-hidden="true">#</a>
      env.isDev
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Environment flag used to identify whether the app is running in dev
          mode, i.e. whether a <a href="#createdevapp">DevApp</a> instance.
        </p>
      </li>
    </ul>
    <h3 id="env-isdebug" tabindex="-1">
      <a class="header-anchor" href="#env-isdebug" aria-hidden="true">#</a>
      env.isDebug
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Environment flag used to identify whether the debug mode is enabled.
        </p>
      </li>
    </ul>
    <h3 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      markdown
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>MarkdownIt</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          The
          <a
            href="https://github.com/markdown-it/markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it<ExternalLinkIcon
          /></a>
          instance used for parsing markdown content.
        </p>
        <p>
          It is only available in and after
          <RouterLink to="/reference/plugin-api.html#oninitialized"
            >onInitialized</RouterLink
          >
          hook.
        </p>
      </li>
    </ul>
    <h3 id="layouts" tabindex="-1">
      <a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Record&lt;string, string&gt;</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          The layout components map, of which the key is the layout name, the
          value is the absolute file path of the layout component.
        </p>
        <p>
          It is only available in and after
          <RouterLink to="/reference/plugin-api.html#oninitialized"
            >onInitialized</RouterLink
          >
          hook.
        </p>
      </li>
    </ul>
    <h3 id="pages" tabindex="-1">
      <a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Page[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>The <a href="#page">Page</a> object array.</p>
        <p>
          It is only available in and after
          <RouterLink to="/reference/plugin-api.html#oninitialized"
            >onInitialized</RouterLink
          >
          hook.
        </p>
      </li>
    </ul>
    <h2 id="app-methods" tabindex="-1">
      <a class="header-anchor" href="#app-methods" aria-hidden="true">#</a> App
      Methods
    </h2>
    <h3 id="dir" tabindex="-1">
      <a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir
    </h3>
    <ul>
      <li>
        <p>Utils:</p>
        <ul>
          <li><code v-pre>dir.cache()</code>: resolve to cache directory</li>
          <li><code v-pre>dir.temp()</code>: resolve to temp directory</li>
          <li><code v-pre>dir.source()</code>: resolve to source directory</li>
          <li><code v-pre>dir.dest()</code>: resolve to dest directory</li>
          <li>
            <code v-pre>dir.client()</code>: resolve to
            <code v-pre>@vuepress/client</code> directory
          </li>
          <li><code v-pre>dir.public()</code>: resolve to public directory</li>
        </ul>
      </li>
      <li>
        <p>Signature:</p>
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
        <p>Details:</p>
        <p>
          Utils to resolve the absolute file path in corresponding directory.
        </p>
        <p>
          If you don't provide any arguments, it will return the absolute path
          of the directory.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token comment">// resolve the absolute file path of the `${sourceDir}/README.md`</span>
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
      <li>Signature:</li>
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
      <li>Parameters:</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>file</td>
          <td><code v-pre>string</code></td>
          <td>
            Filepath of the temp file that going to be wrote. Relative to temp
            directory.
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td><code v-pre>string</code></td>
          <td>Content of the temp file that going to be wrote.</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>Details:</p>
        <p>A method to write temp file.</p>
        <p>
          The written file could be imported via <code v-pre>@temp</code> alias
          in client files.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// write temp file in onPrepared hook</span>
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
      ><code><span class="token comment">// import temp file in client code</span>
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
      <li>Signature:</li>
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
        <p>Details:</p>
        <p>Initialize VuePress app.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/advanced/architecture.html#core-process-and-hooks"
              >Advanced &gt; Architecture &gt; Core Process and
              Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="prepare" tabindex="-1">
      <a class="header-anchor" href="#prepare" aria-hidden="true">#</a> prepare
    </h3>
    <ul>
      <li>Signature:</li>
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
        <p>Details:</p>
        <p>Prepare client temp files.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/advanced/architecture.html#core-process-and-hooks"
              >Advanced &gt; Architecture &gt; Core Process and
              Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="build" tabindex="-1">
      <a class="header-anchor" href="#build" aria-hidden="true">#</a> build
    </h3>
    <ul>
      <li>Signature:</li>
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
        <p>Details:</p>
        <p>Generate static site files.</p>
        <p>This method is only available in <code v-pre>BuildApp</code>.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#createbuildapp">Node API &gt; App &gt; createBuildApp</a>
          </li>
          <li>
            <RouterLink to="/advanced/architecture.html#core-process-and-hooks"
              >Advanced &gt; Architecture &gt; Core Process and
              Hooks</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="dev" tabindex="-1">
      <a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev
    </h3>
    <ul>
      <li>Signature:</li>
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
        <p>Details:</p>
        <p>Start dev server.</p>
        <p>This method is only available in <code v-pre>DevApp</code>.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#createdevapp">Node API &gt; App &gt; createDevApp</a>
          </li>
          <li>
            <RouterLink to="/advanced/architecture.html#core-process-and-hooks"
              >Advanced &gt; Architecture &gt; Core Process and
              Hooks</RouterLink
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
      <li>Signature:</li>
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
      <li>Parameters:</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>app</td>
          <td><code v-pre>App</code></td>
          <td>The VuePress app instance.</td>
        </tr>
        <tr>
          <td>options</td>
          <td><code v-pre>PageOptions</code></td>
          <td>Options to create VuePress page.</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>Details:</p>
        <p>Create a VuePress page object.</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/core'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// create an extra page in onInitialized hook</span>
  <span class="token keyword">async</span> <span class="token function">onInitialized</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token keyword">await</span> <span class="token function">createPage</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/foo.html'</span><span class="token punctuation">,</span>
        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>
          layout<span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\
# Foo Page

Hello, world.
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
        Also see:
        <ul>
          <li><a href="#pages">Node API &gt; App Properties &gt; pages</a></li>
          <li>
            <RouterLink to="/advanced/cookbook/adding-extra-pages.html"
              >Cookbook &gt; Adding Extra Pages</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="page-properties" tabindex="-1">
      <a class="header-anchor" href="#page-properties" aria-hidden="true">#</a>
      Page Properties
    </h2>
    <h3 id="key" tabindex="-1">
      <a class="header-anchor" href="#key" aria-hidden="true">#</a> key
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Identifier of the page.</p>
        <p>
          The page key would be used as the
          <a
            href="https://router.vuejs.org/api/#name-2"
            target="_blank"
            rel="noopener noreferrer"
            >name<ExternalLinkIcon
          /></a>
          of the page route.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/components.html#content"
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Route path of the page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/page.html#routing"
              >Guide &gt; Page &gt; Routing</RouterLink
            >
          </li>
          <li>
            <a href="#pathinferred"
              >Node API &gt; Page Properties &gt; pathInferred</a
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
        <p>Details:</p>
        <p>Title of the page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html#title"
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Language of the page.</p>
      </li>
      <li>
        <p>Example:</p>
        <ul>
          <li><code v-pre>'en-US'</code></li>
          <li><code v-pre>'zh-CN'</code></li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html#title"
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
        <p>Type: <code v-pre>PageFrontmatter</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Frontmatter of the page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html"
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Excerpt of the page.</p>
        <p>
          If a Markdown file contains a
          <code v-pre>&lt;!-- more --&gt;</code> comment, any content above the
          comment will be extracted and rendered as excerpt.
        </p>
        <p>
          If you are building a custom theme for blogging, it would be helpful
          to generate a post list with excerpts.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code>Lines above <span class="token code-snippet code keyword">`&lt;!-- more -->`</span> comment would be used as excerpt.

It's recommended to wrap the comment with empty lines to avoid rendering issue.

<span class="token comment">&lt;!-- more --></span>

Lines below <span class="token code-snippet code keyword">`&lt;!-- more -->`</span> comment would not be used as excerpt.
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
      <li>Type: <code v-pre>PageHeader[]</code></li>
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
        <p>Details:</p>
        <p>Headers of the page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/config.html#markdown-headers"
              >Config &gt; markdown.headers</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="data" tabindex="-1">
      <a class="header-anchor" href="#data" aria-hidden="true">#</a> data
    </h3>
    <ul>
      <li>Type: <code v-pre>PageData</code></li>
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
        <p>Details:</p>
        <p>Data of the page.</p>
        <p>Page data would be available in client side.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/client-api.html#usepagedata"
              >Client API &gt; usePageData</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/plugin-api.html#extendspage"
              >Plugin API &gt; extendsPage</RouterLink
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Raw content of the page.</p>
      </li>
    </ul>
    <h3 id="contentrendered" tabindex="-1">
      <a class="header-anchor" href="#contentrendered" aria-hidden="true">#</a>
      contentRendered
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Rendered content of the page.</p>
      </li>
    </ul>
    <h3 id="date" tabindex="-1">
      <a class="header-anchor" href="#date" aria-hidden="true">#</a> date
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Date of the page, in 'yyyy-MM-dd' format.</p>
      </li>
      <li>
        <p>Example:</p>
        <ul>
          <li><code v-pre>'0000-00-00'</code></li>
          <li><code v-pre>'2021-08-16</code>'</li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html#date"
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
        <p>Type: <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Dependencies of the page.</p>
        <p>
          For example, if users import code snippet in the page, the absolute
          file path of the imported file would be added to
          <code v-pre>deps</code>.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/config.html#markdown-importcode"
              >Config &gt; markdown.importCode</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="links" tabindex="-1">
      <a class="header-anchor" href="#links" aria-hidden="true">#</a> links
    </h3>
    <ul>
      <li>Type: <code v-pre>MarkdownLink[]</code></li>
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
        <p>Details:</p>
        <p>Links of the page.</p>
      </li>
    </ul>
    <h3 id="pathinferred" tabindex="-1">
      <a class="header-anchor" href="#pathinferred" aria-hidden="true">#</a>
      pathInferred
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Route path of the page that inferred from file path.</p>
        <p>
          By default, the route path is inferred from the relative file path of
          the Markdown source file. However, users may explicitly set the route
          path, e.g. <a href="#permalink">permalink</a>, which would be used as
          the final route path of the page. So we keep the inferred path as a
          page property in case you may need it.
        </p>
        <p>
          It would be <code v-pre>null</code> if the page does not come from a
          Markdown source file.
        </p>
      </li>
      <li>
        <p>Example:</p>
        <ul>
          <li><code v-pre>'/'</code></li>
          <li><code v-pre>'/foo.html'</code></li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/page.html#routing"
              >Guide &gt; Page &gt; Routing</RouterLink
            >
          </li>
          <li><a href="#path">Node API &gt; Page Properties &gt; path</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="pathlocale" tabindex="-1">
      <a class="header-anchor" href="#pathlocale" aria-hidden="true">#</a>
      pathLocale
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Locale prefix of the page route path.</p>
        <p>
          It is inferred from the relative file path of the Markdown source file
          and the key of <code v-pre>locales</code> option in user config.
        </p>
      </li>
      <li>
        <p>Example:</p>
        <ul>
          <li><code v-pre>'/'</code></li>
          <li><code v-pre>'/en/'</code></li>
          <li><code v-pre>'/zh/'</code></li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/config.html#locales"
              >Config &gt; locales</RouterLink
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
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Permalink of the page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html#permalink"
              >Frontmatter &gt; permalink</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/frontmatter.html#permalinkpattern"
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
        <p>Type: <code v-pre>Record&lt;string, unknown&gt;</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Custom data to be attached to the route record of vue-router.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/frontmatter.html#routemeta"
              >Frontmatter &gt; routeMeta</RouterLink
            >
          </li>
          <li>
            <a
              href="https://router.vuejs.org/api/#meta"
              target="_blank"
              rel="noopener noreferrer"
              >vue-router &gt; API Reference &gt; RouteRecordRaw &gt;
              meta<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">
        What's the difference between route meta and page data?
      </p>
      <p>
        Both <a href="#routemeta">route meta</a> and
        <a href="#data">page data</a> is available in client side. However,
        route meta is attached to the route record, so the route meta of all
        pages would be loaded at once when users enter your site. In the
        contrast, page data is saved in separated files, which would be loaded
        only when users enter the corresponding page.
      </p>
      <p>
        Therefore, it's not recommended to store large amounts of info into
        route meta, otherwise the initial loading speed will be affected a lot
        when your site has a large number of pages.
      </p>
    </div>
    <h3 id="sfcblocks" tabindex="-1">
      <a class="header-anchor" href="#sfcblocks" aria-hidden="true">#</a>
      sfcBlocks
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Extracted vue SFC blocks of the page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/config.html#markdown-sfc"
              >Config &gt; markdown.sfc</RouterLink
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Slug of the page.</p>
        <p>It is inferred from the filename of the Markdown source file.</p>
      </li>
    </ul>
    <h3 id="filepath" tabindex="-1">
      <a class="header-anchor" href="#filepath" aria-hidden="true">#</a>
      filePath
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Absolute path of the Markdown source file of the page.</p>
        <p>
          It would be <code v-pre>null</code> if the page does not come from a
          Markdown source file.
        </p>
      </li>
    </ul>
    <h3 id="filepathrelative" tabindex="-1">
      <a class="header-anchor" href="#filepathrelative" aria-hidden="true">#</a>
      filePathRelative
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Relative path of the Markdown source file of the page.</p>
        <p>
          It would be <code v-pre>null</code> if the page does not come from a
          Markdown source file.
        </p>
      </li>
    </ul>
  </div>
</template>
