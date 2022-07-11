<template>
  <div>
    <h1 id="client-api" tabindex="-1">
      <a class="header-anchor" href="#client-api" aria-hidden="true">#</a>
      Client API
    </h1>
    <NpmBadge package="@vuepress/client" />
    <p>
      Client API is provided by
      <a
        href="https://www.npmjs.com/package/@vuepress/client"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/client<ExternalLinkIcon
      /></a>
      package, which is used for developing client files.
    </p>
    <h2 id="composition-api" tabindex="-1">
      <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a>
      Composition API
    </h2>
    <h3 id="usepagedata" tabindex="-1">
      <a class="header-anchor" href="#usepagedata" aria-hidden="true">#</a>
      usePageData
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the page data ref object of current page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/node-api.html#data"
              >Node API &gt; Page Properties &gt; data</RouterLink
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
    <h3 id="usepagefrontmatter" tabindex="-1">
      <a class="header-anchor" href="#usepagefrontmatter" aria-hidden="true"
        >#</a
      >
      usePageFrontmatter
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the frontmatter ref object of current page.</p>
        <p>
          The value is the <code v-pre>frontmatter</code> property of the page
          data.
        </p>
      </li>
    </ul>
    <h3 id="usepagehead" tabindex="-1">
      <a class="header-anchor" href="#usepagehead" aria-hidden="true">#</a>
      usePageHead
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the head config ref object of current page.</p>
        <p>
          The value is obtained by merging and deduplicating
          <RouterLink to="/reference/frontmatter.html#head">head</RouterLink>
          frontmatter and
          <RouterLink to="/reference/config.html#head">head</RouterLink> config.
        </p>
      </li>
    </ul>
    <h3 id="usepageheadtitle" tabindex="-1">
      <a class="header-anchor" href="#usepageheadtitle" aria-hidden="true">#</a>
      usePageHeadTitle
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the head title ref object of current page.</p>
        <p>The value is obtained by joining the page title and site title.</p>
      </li>
    </ul>
    <h3 id="usepagelang" tabindex="-1">
      <a class="header-anchor" href="#usepagelang" aria-hidden="true">#</a>
      usePageLang
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the language ref object of current page.</p>
        <p>
          The value is the <code v-pre>lang</code> property of the page data.
        </p>
      </li>
    </ul>
    <h3 id="useroutelocale" tabindex="-1">
      <a class="header-anchor" href="#useroutelocale" aria-hidden="true">#</a>
      useRouteLocale
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the locale path ref object of current route.</p>
        <p>
          The value is one of the keys of the
          <RouterLink to="/reference/config.html#locales">locales</RouterLink>
          config.
        </p>
      </li>
    </ul>
    <h3 id="usesitedata" tabindex="-1">
      <a class="header-anchor" href="#usesitedata" aria-hidden="true">#</a>
      useSiteData
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the site data ref object.</p>
      </li>
    </ul>
    <h3 id="usesitelocaledata" tabindex="-1">
      <a class="header-anchor" href="#usesitelocaledata" aria-hidden="true"
        >#</a
      >
      useSiteLocaleData
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Returns the site data ref object of current locale.</p>
        <p>
          The properties of current locale have been merged into the root-level
          properties.
        </p>
      </li>
    </ul>
    <h2 id="helpers" tabindex="-1">
      <a class="header-anchor" href="#helpers" aria-hidden="true">#</a> Helpers
    </h2>
    <h3 id="defineclientconfig" tabindex="-1">
      <a class="header-anchor" href="#defineclientconfig" aria-hidden="true"
        >#</a
      >
      defineClientConfig
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          Helper for creating
          <RouterLink to="/reference/plugin-api.html#clientconfigfile"
            >clientConfigFile</RouterLink
          >.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/advanced/cookbook/usage-of-client-config.html"
              >Advanced &gt; Cookbook &gt; Usage of Client Config</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="withbase" tabindex="-1">
      <a class="header-anchor" href="#withbase" aria-hidden="true">#</a>
      withBase
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          Prefix URL with site
          <RouterLink to="/reference/config.html#base">base</RouterLink>.
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
        </ul>
      </li>
    </ul>
    <h2 id="constants" tabindex="-1">
      <a class="header-anchor" href="#constants" aria-hidden="true">#</a>
      Constants
    </h2>
    <p>There are some constants that available in the client side code.</p>
    <p>
      To shim the types of these constants in client side code, add
      <code v-pre>@vuepress/client/types</code> to your
      <code v-pre>tsconfig.json</code>:
    </p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@vuepress/client/types"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
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
    <h3 id="vuepress-version" tabindex="-1">
      <a class="header-anchor" href="#vuepress-version" aria-hidden="true">#</a>
      <code v-pre>__VUEPRESS_VERSION__</code>
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Version of VuePress core package.</p>
      </li>
    </ul>
    <h3 id="vuepress-dev" tabindex="-1">
      <a class="header-anchor" href="#vuepress-dev" aria-hidden="true">#</a>
      <code v-pre>__VUEPRESS_DEV__</code>
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          An environment flag indicating whether it is currently running in
          <code v-pre>dev</code> mode.
        </p>
      </li>
    </ul>
    <h3 id="vuepress-ssr" tabindex="-1">
      <a class="header-anchor" href="#vuepress-ssr" aria-hidden="true">#</a>
      <code v-pre>__VUEPRESS_SSR__</code>
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          An environment flag indicating whether it is currently running in
          server-side-rendering (SSR) build.
        </p>
      </li>
    </ul>
    <h2 id="advanced" tabindex="-1">
      <a class="header-anchor" href="#advanced" aria-hidden="true">#</a>
      Advanced
    </h2>
    <h3 id="resolvers" tabindex="-1">
      <a class="header-anchor" href="#resolvers" aria-hidden="true">#</a>
      resolvers <Badge text="experimental" />
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Record&lt;string, Function&gt;</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          An reactive object, methods of which determining how to resolve global
          computed.
        </p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <p>
      Customizing the format of <code v-pre>&lt;title&gt;</code> in client
      config file:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig<span class="token punctuation">,</span> resolvers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolvers<span class="token punctuation">.</span><span class="token function-variable function">resolvePageHeadTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span>page<span class="token punctuation">,</span> siteLocale<span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>siteLocale<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> > </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>page<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
      </div>
    </div>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>
        <code v-pre>resolvers</code> will affect the basic functionality of
        VuePress. Please make sure you have fully understood its purpose before
        modifying it.
      </p>
    </div>
  </div>
</template>
