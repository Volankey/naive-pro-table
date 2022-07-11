<template>
  <div>
    <h1 id="plugin-api" tabindex="-1">
      <a class="header-anchor" href="#plugin-api" aria-hidden="true">#</a>
      Plugin API
    </h1>
    <NpmBadge package="@vuepress/core" />
    <p>
      Plugin API is supported by
      <a
        href="https://www.npmjs.com/package/@vuepress/core"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/core<ExternalLinkIcon
      /></a>
      package. You could check out
      <RouterLink to="/reference/node-api.html">Node API</RouterLink> for how to
      use the VuePress app instance in plugin hooks.
    </p>
    <h2 id="overview" tabindex="-1">
      <a class="header-anchor" href="#overview" aria-hidden="true">#</a>
      Overview
    </h2>
    <p>
      Plugins should be used before initialization. The basic options will be
      handled once the plugin is used:
    </p>
    <ul>
      <li><a href="#name">name</a></li>
      <li><a href="#multiple">multiple</a></li>
    </ul>
    <p>The following hooks will be processed when initializing app:</p>
    <ul>
      <li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li>
      <li><a href="#extendsmarkdown">extendsMarkdown</a></li>
      <li><a href="#extendspageoptions">extendsPageOptions</a></li>
      <li><a href="#extendspage">extendsPage</a></li>
      <li><a href="#oninitialized">onInitialized</a></li>
    </ul>
    <p>The following hooks will be processed when preparing files:</p>
    <ul>
      <li><a href="#clientconfigfile">clientConfigFile</a></li>
      <li><a href="#onprepared">onPrepared</a></li>
    </ul>
    <p>The following hooks will be processed in dev / build:</p>
    <ul>
      <li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li>
      <li><a href="#alias">alias</a></li>
      <li><a href="#define">define</a></li>
      <li><a href="#onwatched">onWatched</a></li>
      <li><a href="#ongenerated">onGenerated</a></li>
    </ul>
    <blockquote>
      <p>
        Check out
        <RouterLink to="/advanced/architecture.html#core-process-and-hooks"
          >Advanced &gt; Architecture &gt; Core Process and Hooks</RouterLink
        >
        to understand the process better.
      </p>
    </blockquote>
    <h2 id="basic-options" tabindex="-1">
      <a class="header-anchor" href="#basic-options" aria-hidden="true">#</a>
      Basic Options
    </h2>
    <h3 id="name" tabindex="-1">
      <a class="header-anchor" href="#name" aria-hidden="true">#</a> name
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Name of the plugin.</p>
        <p>
          It will be used for identifying plugins to avoid using a same plugin
          multiple times, so make sure to use a unique plugin name.
        </p>
        <p>It should follow the naming convention:</p>
        <ul>
          <li>Non-scoped: <code v-pre>vuepress-plugin-foo</code></li>
          <li>Scoped: <code v-pre>@org/vuepress-plugin-foo</code></li>
        </ul>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li><a href="#multiple">Plugin API &gt; multiple</a></li>
        </ul>
      </li>
    </ul>
    <h3 id="multiple" tabindex="-1">
      <a class="header-anchor" href="#multiple" aria-hidden="true">#</a>
      multiple
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
        <p>Declare whether the plugin can be used multiple times.</p>
        <p>
          If set to <code v-pre>false</code>, when using plugins with the same
          name, the one used previously will be replaced by the one used later.
        </p>
        <p>
          If set to <code v-pre>true</code>, plugins with the same name could be
          used multiple times and won't be replaced.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li><a href="#name">Plugin API &gt; name</a></li>
        </ul>
      </li>
    </ul>
    <h2 id="development-hooks" tabindex="-1">
      <a class="header-anchor" href="#development-hooks" aria-hidden="true"
        >#</a
      >
      Development Hooks
    </h2>
    <h3 id="alias" tabindex="-1">
      <a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >Record&lt;string, any&gt; | ((app: App) =&gt; Record&lt;string,
            any&gt;)</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Path aliases definition.</p>
        <p>This hook accepts an object or a function that returns an object.</p>
      </li>
      <li>
        <p>Example:</p>
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
          Type:
          <code v-pre
            >string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Path of client config file.</p>
        <p>
          This hook accepts an absolute file path, or a function that returns
          the path.
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
        Also see:
        <ul>
          <li>
            <RouterLink to="/reference/client-api.html#defineclientconfig"
              >Client API &gt; defineClientConfig</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/advanced/cookbook/usage-of-client-config.html"
              >Advanced &gt; Cookbook &gt; Usage of Client Config</RouterLink
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
          Type:
          <code v-pre
            >Record&lt;string, any&gt; | ((app: App) =&gt; Record&lt;string,
            any&gt;)</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Define global constants replacements.</p>
        <p>This hook accepts an object or a function that returns an object.</p>
        <p>
          This can be useful for passing variables to client files. Note that
          the values will be automatically processed by
          <code v-pre>JSON.stringify()</code>.
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
          Type:
          <code v-pre
            >(options: BundlerOptions, app: App) =&gt; void |
            Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Bundler options extension.</p>
        <p>
          This hook accepts a function that will receive the bundler options.
        </p>
        <p>This hook can be used for modifying bundler options.</p>
        <p>
          You could determine which bundler the user is using by
          <code v-pre>app.options.bundler.name</code>.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <p>
      Adding default
      <a
        href="https://vuejs.org/api/application.html#app-config-compileroptions"
        target="_blank"
        rel="noopener noreferrer"
        >app.compilerOptions.isCustomElement<ExternalLinkIcon
      /></a>
      option:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">bundlerOptions<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// extends options of @vuepress/bundler-vite</span>
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

    <span class="token comment">// extends options of @vuepress/bundler-webpack</span>
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
        Also see:
        <ul>
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
    <h3 id="extendsmarkdownoptions" tabindex="-1">
      <a class="header-anchor" href="#extendsmarkdownoptions" aria-hidden="true"
        >#</a
      >
      extendsMarkdownOptions
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >(options: MarkdownOptions, app: App) =&gt; void |
            Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Markdown options extension.</p>
        <p>
          This hook accepts a function that will receive the markdown options.
        </p>
        <p>This hook can be used for modifying markdown options.</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <p>Modifying the default header levels that going to be extracted:</p>
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
        Also see:
        <ul>
          <li>
            <RouterLink to="/reference/config.html#markdown"
              >Config &gt; markdown</RouterLink
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
          Type:
          <code v-pre
            >(md: Markdown, app: App) =&gt; void | Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Markdown enhancement.</p>
        <p>
          This hook accepts a function that will receive an instance of
          <code v-pre>Markdown</code> powered by
          <a
            href="https://github.com/markdown-it/markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it<ExternalLinkIcon
          /></a>
          in its arguments.
        </p>
        <p>
          This hook can be used for using extra markdown-it plugins and
          implementing customizations.
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
          Type:
          <code v-pre
            >(options: PageOptions, app: App) =&gt; void |
            Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Page options extension.</p>
        <p>
          This hook accepts a function that will receive the options of
          <code v-pre>createPage</code>.
        </p>
        <p>This hook can be used for modifying page options</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <p>
      Set permalink pattern for pages in <code v-pre>_posts</code> directory:
    </p>
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
        Also see:
        <ul>
          <li>
            <RouterLink to="/reference/node-api.html#createpage"
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
          Type:
          <code v-pre
            >(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Page extension.</p>
        <p>
          This hook accepts a function that will receive a
          <code v-pre>Page</code> instance.
        </p>
        <p>
          This hook can be used for adding extra properties or modifying current
          properties on <code v-pre>Page</code> object.
        </p>
        <p>
          Notice that changes to <code v-pre>page.data</code> and
          <code v-pre>page.routeMeta</code> can be used in client side code.
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
    <p>In client component:</p>
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
        Also see:
        <ul>
          <li>
            <RouterLink to="/reference/client-api.html#usepagedata"
              >Client API &gt; usePageData</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/node-api.html#data"
              >Node API &gt; Page Properties &gt; data</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/reference/node-api.html#routemeta"
              >Node API &gt; Page Properties &gt; routeMeta</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="lifecycle-hooks" tabindex="-1">
      <a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a>
      Lifecycle Hooks
    </h2>
    <h3 id="oninitialized" tabindex="-1">
      <a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a>
      onInitialized
    </h3>
    <ul>
      <li>
        <p>
          Type: <code v-pre>(app: App) =&gt; void | Promise&lt;void&gt;</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>This hook will be invoked once VuePress app has been initialized.</p>
      </li>
    </ul>
    <h3 id="onprepared" tabindex="-1">
      <a class="header-anchor" href="#onprepared" aria-hidden="true">#</a>
      onPrepared
    </h3>
    <ul>
      <li>
        <p>
          Type: <code v-pre>(app: App) =&gt; void | Promise&lt;void&gt;</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          This hook will be invoked once VuePress app has finished preparation.
        </p>
      </li>
    </ul>
    <h3 id="onwatched" tabindex="-1">
      <a class="header-anchor" href="#onwatched" aria-hidden="true">#</a>
      onWatched
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >(app: App, watchers: Closable[], restart: () =&gt;
            Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code
          >
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          This hook will be invoked once VuePress app has started dev-server and
          watched files change.
        </p>
        <p>
          The <code v-pre>watchers</code> is an array of file watchers. When
          changing config file, the dev command will be restarted and those
          watchers will be closed. If you are adding new watchers in this hook,
          you should push your watchers to the
          <code v-pre>watchers</code> array, so that they can be closed
          correctly when restarting.
        </p>
        <p>
          The <code v-pre>restart</code> is a method to restart the dev command.
          When calling this method, the <code v-pre>watchers</code> array will
          be closed automatically.
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
          Type: <code v-pre>(app: App) =&gt; void | Promise&lt;void&gt;</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          This hook will be invoked once VuePress app has generated static
          files.
        </p>
      </li>
    </ul>
  </div>
</template>
