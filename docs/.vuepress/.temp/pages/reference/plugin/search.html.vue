<template>
  <div>
    <h1 id="search" tabindex="-1">
      <a class="header-anchor" href="#search" aria-hidden="true">#</a> search
    </h1>
    <NpmBadge package="@vuepress/plugin-search" />
    <p>Provide local search to your documentation site.</p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Default theme will add search box to the navbar once you configure this
        plugin correctly.
      </p>
      <p>
        This plugin may not be used directly in other themes, so you'd better
        refer to the documentation of your theme for more details.
      </p>
    </div>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-search@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-search'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
    <h2 id="local-search-index" tabindex="-1">
      <a class="header-anchor" href="#local-search-index" aria-hidden="true"
        >#</a
      >
      Local Search Index
    </h2>
    <p>
      This plugin will generate search index from your pages locally, and load
      the search index file when users enter your site. In other words, this is
      a lightweight built-in search which does not require any external
      requests.
    </p>
    <p>
      However, when your site has a large number of pages, the size of search
      index file would be very large, which could slow down the page loading
      speed. In this case, we recommend you to use a more professional solution
      -
      <RouterLink to="/reference/plugin/docsearch.html">docsearch</RouterLink>.
    </p>
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="locales" tabindex="-1">
      <a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales
    </h3>
    <ul>
      <li>
        <p>
          Type: <code v-pre>Record&lt;string, { placeholder: string }&gt;</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>The text of the search box in different locales.</p>
        <p>
          If this option is not specified, it will fallback to default text.
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
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Search'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'搜索'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <ul>
      <li>
        Also see:
        <ul>
          <li>
            <RouterLink to="/guide/i18n.html">Guide &gt; I18n</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="hotkeys" tabindex="-1">
      <a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys
    </h3>
    <ul>
      <li>Type: <code v-pre>(string | HotKeyOptions)[]</code></li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre v-pre class="language-typescript"><code>File not found</code></pre>
      <div class="line-numbers" aria-hidden="true"></div>
    </div>
    <ul>
      <li>
        <p>Default: <code v-pre>['s', '/']</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the
          <a
            href="http://keycode.info/"
            target="_blank"
            rel="noopener noreferrer"
            >event.key<ExternalLinkIcon
          /></a>
          of the hotkeys.
        </p>
        <p>When hotkeys are pressed, the search box input will be focused.</p>
        <p>Set to an empty array to disable hotkeys.</p>
      </li>
    </ul>
    <h3 id="maxsuggestions" tabindex="-1">
      <a class="header-anchor" href="#maxsuggestions" aria-hidden="true">#</a>
      maxSuggestions
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>number</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>5</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the maximum number of search results.</p>
      </li>
    </ul>
    <h3 id="issearchable" tabindex="-1">
      <a class="header-anchor" href="#issearchable" aria-hidden="true">#</a>
      isSearchable
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>(page: Page) =&gt; boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>() =&gt; true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          A function to determine whether a page should be included in the
          search index.
        </p>
        <ul>
          <li>Return <code v-pre>true</code> to include the page.</li>
          <li>Return <code v-pre>false</code> to exclude the page.</li>
        </ul>
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
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// exclude the homepage</span>
      <span class="token function-variable function">isSearchable</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
    <h3 id="getextrafields" tabindex="-1">
      <a class="header-anchor" href="#getextrafields" aria-hidden="true">#</a>
      getExtraFields
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>(page: Page) =&gt; string[]</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>() =&gt; []</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>A function to add extra fields to the search index of a page.</p>
        <p>
          By default, this plugin will use page title and headers as the search
          index. This option could help you to add more searchable fields.
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
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// allow searching the `tags` frontmatter</span>
      <span class="token function-variable function">getExtraFields</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tags <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
    <h2 id="styles" tabindex="-1">
      <a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles
    </h2>
    <p>You can customize the style of the search box via CSS variables:</p>
    <div class="language-css ext-css line-numbers-mode">
      <pre v-pre class="language-css"><code>File not found</code></pre>
      <div class="line-numbers" aria-hidden="true"></div>
    </div>
    <h2 id="components" tabindex="-1">
      <a class="header-anchor" href="#components" aria-hidden="true">#</a>
      Components
    </h2>
    <h3 id="searchbox" tabindex="-1">
      <a class="header-anchor" href="#searchbox" aria-hidden="true">#</a>
      SearchBox
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          This plugin will register a
          <code v-pre>&lt;SearchBox /&gt;</code> component globally, and you can
          use it without any props.
        </p>
        <p>
          Put this component to where you want to place the search box. For
          example, default theme puts this component to the end of the navbar.
        </p>
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        This component is mainly used for theme development. You don't need to
        use it directly in most cases.
      </p>
    </div>
  </div>
</template>
