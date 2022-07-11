<template>
  <div>
    <h1 id="config" tabindex="-1">
      <a class="header-anchor" href="#config" aria-hidden="true">#</a> Config
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// set config here</span>
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
    <h2 id="basic-config" tabindex="-1">
      <a class="header-anchor" href="#basic-config" aria-hidden="true">#</a>
      Basic Config
    </h2>
    <h3 id="locales" tabindex="-1">
      <a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales
    </h3>
    <ul>
      <li>
        <p>
          Type:
          <code v-pre
            >{ [path: string]: Partial&lt;DefaultThemeLocaleData&gt; }</code
          >
        </p>
      </li>
      <li>
        <p>Default: <code v-pre>{}</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify locales for i18n support.</p>
        <p>
          All the options inside the
          <a href="#locale-config">Locale Config</a> section can be used in
          locales.
        </p>
        <p>
          This option will only take effect in default theme, so don't confuse
          with <code v-pre>locales</code> in
          <RouterLink to="/reference/config.html#locales"
            >Site Config</RouterLink
          >.
        </p>
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
    <h2 id="locale-config" tabindex="-1">
      <a class="header-anchor" href="#locale-config" aria-hidden="true">#</a>
      Locale Config
    </h2>
    <p>
      Config of this section can be used as normal config, and can also be used
      in the <a href="#locales">locales</a> option.
    </p>
    <h3 id="colormode" tabindex="-1">
      <a class="header-anchor" href="#colormode" aria-hidden="true">#</a>
      colorMode
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>'auto' | 'light' | 'dark'</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'auto'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Default color mode.</p>
        <p>
          If set to <code v-pre>'auto'</code>, the initial color mode will be
          automatically set according to
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
            target="_blank"
            rel="noopener noreferrer"
            >prefers-color-scheme<ExternalLinkIcon /></a
          >.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#colormodeswitch"
              >Default Theme &gt; Config &gt; colorModeSwitch</a
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Enable color mode switching or not.</p>
        <p>
          If set to <code v-pre>true</code>, a button to switch color mode will
          be displayed in the navbar.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#colormode">Default Theme &gt; Config &gt; colorMode</a>
          </li>
          <li>
            <a href="#togglecolormode"
              >Default Theme &gt; Config &gt; toggleColorMode</a
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>/</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the path of the homepage.</p>
        <p>This will be used for:</p>
        <ul>
          <li>the logo link of the navbar</li>
          <li>the <em>back to home</em> link of the 404 page</li>
        </ul>
      </li>
    </ul>
    <h3 id="navbar" tabindex="-1">
      <a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar
    </h3>
    <ul>
      <li>
        <p>
          Type: <code v-pre>false | (NavbarItem | NavbarGroup | string)[]</code>
        </p>
      </li>
      <li>
        <p>Default: <code v-pre>[]</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Configuration of navbar.</p>
        <p>Set to <code v-pre>false</code> to disable navbar.</p>
        <p>
          To configure the navbar items, you can set it to a
          <em>navbar array</em>, each item of which could be a
          <code v-pre>NavbarItem</code> object, a
          <code v-pre>NavbarGroup</code> object, or a string:
        </p>
        <ul>
          <li>
            A <code v-pre>NavbarItem</code> object should have a
            <code v-pre>text</code> field and a <code v-pre>link</code> field,
            could have an optional <code v-pre>activeMatch</code> field.
          </li>
          <li>
            A <code v-pre>NavbarGroup</code> object should have a
            <code v-pre>text</code> field and a
            <code v-pre>children</code> field. The
            <code v-pre>children</code> field should be a <em>navbar array</em>,
            too.
          </li>
          <li>
            A string should be the path to the target page file. It will be
            converted to a <code v-pre>NavbarItem</code> object, using the page
            title as <code v-pre>text</code>, and the page route path as
            <code v-pre>link</code>.
          </li>
        </ul>
      </li>
      <li>
        <p>Example 1:</p>
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
      <span class="token comment">// string - page file path</span>
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
      <li>Example 2:</li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// nested group - max depth is 2</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Group'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'SubGroup'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/group/sub/foo.md'</span><span class="token punctuation">,</span> <span class="token string">'/group/sub/bar.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// control when should the item be active</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Group 2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Always active'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
            <span class="token comment">// this item will always be active</span>
            <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Active on /foo/'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/not-foo/'</span><span class="token punctuation">,</span>
            <span class="token comment">// this item will be active when current route path starts with /foo/</span>
            <span class="token comment">// regular expression is supported</span>
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
        <p>Type: <code v-pre>null | string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the url of logo image.</p>
        <p>The logo image will be displayed at the left end of the navbar.</p>
        <p>Set to <code v-pre>null</code> to disable logo.</p>
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
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// public file path</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/hero.png'</span><span class="token punctuation">,</span>
    <span class="token comment">// url</span>
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
        Also see:
        <ul>
          <li>
            <RouterLink to="/guide/assets.html#public-files"
              >Guide &gt; Assets &gt; Public Files</RouterLink
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
        <p>Type: <code v-pre>null | string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the url of logo image to be used in dark mode.</p>
        <p>
          You can make use of this option if you want to use different logo
          config in dark mode.
        </p>
        <p>
          Set to <code v-pre>null</code> to disable logo in dark mode. Omit this
          option to use <a href="#logo">logo</a> in dark mode.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li><a href="#logo">Default Theme &gt; Config &gt; logo</a></li>
          <li>
            <a href="#colormode">Default Theme &gt; Config &gt; colorMode</a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="repo" tabindex="-1">
      <a class="header-anchor" href="#repo" aria-hidden="true">#</a> repo
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the repository url of your project.</p>
        <p>
          This will be used as the link of the <em>repository link</em>, which
          will be displayed as the last item of the navbar.
        </p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// If you set it in the form of `organization/repository`</span>
    <span class="token comment">// we will take it as a GitHub repo</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'vuejs/vuepress'</span><span class="token punctuation">,</span>
    <span class="token comment">// You can also set it to a URL directly</span>
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the repository label of your project.</p>
        <p>
          This will be used as the text of the <em>repository link</em>, which
          will be displayed as the last item of the navbar.
        </p>
        <p>
          If you don't set this option explicitly, it will be automatically
          inferred from the <a href="#repo">repo</a> option.
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the text of the <em>select language menu</em>.</p>
        <p>
          The <em>select language menu</em> will appear next to the repository
          button in the navbar when you set multiple
          <RouterLink to="/reference/config.html#locales">locales</RouterLink>
          in your site config.
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the <code v-pre>aria-label</code> attribute of the
          <em>select language menu</em>.
        </p>
        <p>This is mainly for a11y purpose.</p>
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the name of the language of a locale.</p>
        <p>
          This option will <strong>only take effect inside</strong> the
          <a href="#locales">locales</a> of your theme config. It will be used
          as the language name of the locale, which will be displayed in the
          <em>select language menu</em>.
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
          Type:
          <code v-pre
            >false | 'auto' | SidebarConfigArray | SidebarConfigObject</code
          >
        </p>
      </li>
      <li>
        <p>Default: <code v-pre>'auto'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Configuration of sidebar.</p>
        <p>
          You can override this global option via
          <RouterLink to="/reference/default-theme/frontmatter.html#sidebar"
            >sidebar</RouterLink
          >
          frontmatter in your pages.
        </p>
        <p>Set to <code v-pre>false</code> to disable sidebar.</p>
        <p>
          If you set it to <code v-pre>'auto'</code>, the sidebar will be
          automatically generated from the page headers.
        </p>
        <p>
          To configure the sidebar items manually, you can set this option to a
          <em>sidebar array</em>, each item of which could be a
          <code v-pre>SidebarItem</code> object or a string:
        </p>
        <ul>
          <li>
            A <code v-pre>SidebarItem</code> object should have a
            <code v-pre>text</code> field, could have an optional
            <code v-pre>link</code> field and an optional
            <code v-pre>children</code> field. The
            <code v-pre>children</code> field should be a
            <em>sidebar array</em>. When a <code v-pre>SidebarItem</code> object
            is placed at the root-level, it could have an extra optional
            <code v-pre>collapsible</code> field to control whether it is
            collapsible.
          </li>
          <li>
            A string should be the path to the target page file. It will be
            converted to a <code v-pre>SidebarItem</code> object, whose
            <code v-pre>text</code> is the page title,
            <code v-pre>link</code> is the page route path, and
            <code v-pre>children</code> is automatically generated from the page
            headers.
          </li>
        </ul>
        <p>
          If you want to set different sidebar for different sub paths, you can
          set this option to a <em>sidebar object</em>:
        </p>
        <ul>
          <li>The key should be the path prefix.</li>
          <li>The value should be a <em>sidebar array</em>.</li>
        </ul>
      </li>
      <li>
        <p>Example 1:</p>
      </li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// sidebar array</span>
    <span class="token comment">// all pages will use the same sidebar</span>
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
          <span class="token comment">// string - page file path</span>
          <span class="token string">'/foo/bar.md'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// string - page file path</span>
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
      <li>Example 2:</li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// sidebar object</span>
    <span class="token comment">// pages under different sub paths will use different sidebar</span>
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
      <li>Example 3:</li>
    </ul>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// collapsible sidebar</span>
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
        <p>Type: <code v-pre>number</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>2</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Set the maximum depth of the sidebar children which are automatically
          generated from the page headers.
        </p>
        <ul>
          <li>Set to <code v-pre>0</code> to disable all levels of headers.</li>
          <li>
            Set to <code v-pre>1</code> to include
            <code v-pre>&lt;h2&gt;</code> headers.
          </li>
          <li>
            Set to <code v-pre>2</code> to include
            <code v-pre>&lt;h2&gt;</code> and
            <code v-pre>&lt;h3&gt;</code> headers.
          </li>
          <li>...</li>
        </ul>
        <p>
          The max value depends on which levels of headers you have extracted
          via
          <RouterLink to="/reference/config.html#markdown-headers"
            >markdown.headers.level</RouterLink
          >.
        </p>
        <p>
          The default value of <code v-pre>markdown.headers.level</code> is
          <code v-pre>[2, 3]</code>, so the default max value of
          <code v-pre>sidebarDepth</code> is <code v-pre>2</code>.
        </p>
        <p>
          You can override this global option via
          <RouterLink
            to="/reference/default-theme/frontmatter.html#sidebardepth"
            >sidebarDepth</RouterLink
          >
          frontmatter in your pages.
        </p>
      </li>
    </ul>
    <h3 id="editlink" tabindex="-1">
      <a class="header-anchor" href="#editlink" aria-hidden="true">#</a>
      editLink
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
        <p>Enable the <em>edit this page</em> link or not.</p>
        <p>
          You can override this global option via
          <RouterLink to="/reference/default-theme/frontmatter.html#editlink"
            >editLink</RouterLink
          >
          frontmatter in your pages.
        </p>
      </li>
    </ul>
    <h3 id="editlinktext" tabindex="-1">
      <a class="header-anchor" href="#editlinktext" aria-hidden="true">#</a>
      editLinkText
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'Edit this page'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the text of the <em>edit this page</em> link.</p>
      </li>
    </ul>
    <h3 id="editlinkpattern" tabindex="-1">
      <a class="header-anchor" href="#editlinkpattern" aria-hidden="true">#</a>
      editLinkPattern
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the pattern of the <em>edit this page</em> link.</p>
        <p>
          This will be used for generating the <em>edit this page</em> link.
        </p>
        <p>
          If you don't set this option, the pattern will be inferred from the
          <a href="#docsrepo">docsRepo</a> option. But if your documentation
          repository is not hosted on a common platform, for example, GitHub,
          GitLab, Bitbucket, Gitee, etc., you have to set this option explicitly
          to make the <em>edit this page</em> link work.
        </p>
      </li>
      <li>
        <p>Usage:</p>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code v-pre>:repo</code></td>
              <td>The docs repo url, i.e. <a href="#docsrepo">docsRepo</a></td>
            </tr>
            <tr>
              <td><code v-pre>:branch</code></td>
              <td>
                The docs repo branch, i.e. <a href="#docsbranch">docsBranch</a>
              </td>
            </tr>
            <tr>
              <td><code v-pre>:path</code></td>
              <td>
                The path of the page source file, i.e.
                <a href="#docsdir">docsDir</a> joins the relative path of the
                page file
              </td>
            </tr>
          </tbody>
        </table>
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
      The generated link will look like
      <code v-pre
        >'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md'</code
      >.
    </p>
    <h3 id="docsrepo" tabindex="-1">
      <a class="header-anchor" href="#docsrepo" aria-hidden="true">#</a>
      docsRepo
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the repository url of your documentation source files.</p>
        <p>
          This will be used for generating the <em>edit this page</em> link.
        </p>
        <p>
          If you don't set this option, it will use the
          <a href="#repo">repo</a> option by default. But if your documentation
          source files are in a different repository, you will need to set this
          option.
        </p>
      </li>
    </ul>
    <h3 id="docsbranch" tabindex="-1">
      <a class="header-anchor" href="#docsbranch" aria-hidden="true">#</a>
      docsBranch
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'main'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the repository branch of your documentation source files.</p>
        <p>
          This will be used for generating the <em>edit this page</em> link.
        </p>
      </li>
    </ul>
    <h3 id="docsdir" tabindex="-1">
      <a class="header-anchor" href="#docsdir" aria-hidden="true">#</a> docsDir
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
        <p>
          Specify the directory of your documentation source files in the
          repository.
        </p>
        <p>
          This will be used for generating the <em>edit this page</em> link.
        </p>
      </li>
    </ul>
    <h3 id="lastupdated" tabindex="-1">
      <a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a>
      lastUpdated
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
        <p>Enable the <em>last updated timestamp</em> or not.</p>
        <p>
          You can override this global option via
          <RouterLink to="/reference/default-theme/frontmatter.html#lastupdated"
            >lastUpdated</RouterLink
          >
          frontmatter in your pages. Notice that if you have already set this
          option to <code v-pre>false</code>, this feature will be disabled
          totally and could not be enabled in locales nor page frontmatter.
        </p>
      </li>
    </ul>
    <h3 id="lastupdatedtext" tabindex="-1">
      <a class="header-anchor" href="#lastupdatedtext" aria-hidden="true">#</a>
      lastUpdatedText
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'Last Updated'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the text of the <em>last updated timestamp</em> label.</p>
      </li>
    </ul>
    <h3 id="contributors" tabindex="-1">
      <a class="header-anchor" href="#contributors" aria-hidden="true">#</a>
      contributors
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
        <p>Enable the <em>contributors list</em> or not.</p>
        <p>
          You can override this global option via
          <RouterLink
            to="/reference/default-theme/frontmatter.html#contributors"
            >contributors</RouterLink
          >
          frontmatter in your pages. Notice that if you have already set this
          option to <code v-pre>false</code>, this feature will be disabled
          totally and could not be enabled in locales nor page frontmatter.
        </p>
      </li>
    </ul>
    <h3 id="contributorstext" tabindex="-1">
      <a class="header-anchor" href="#contributorstext" aria-hidden="true">#</a>
      contributorsText
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'Contributors'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the text of the <em>contributors list</em> label.</p>
      </li>
    </ul>
    <h3 id="tip" tabindex="-1">
      <a class="header-anchor" href="#tip" aria-hidden="true">#</a> tip
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'TIP'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the default title of the tip
          <RouterLink
            to="/reference/default-theme/markdown.html#custom-containers"
            >custom containers</RouterLink
          >.
        </p>
      </li>
    </ul>
    <h3 id="warning" tabindex="-1">
      <a class="header-anchor" href="#warning" aria-hidden="true">#</a> warning
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'WARNING'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the default title of the warning
          <RouterLink
            to="/reference/default-theme/markdown.html#custom-containers"
            >custom containers</RouterLink
          >.
        </p>
      </li>
    </ul>
    <h3 id="danger" tabindex="-1">
      <a class="header-anchor" href="#danger" aria-hidden="true">#</a> danger
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'DANGER'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the default title of the danger
          <RouterLink
            to="/reference/default-theme/markdown.html#custom-containers"
            >custom containers</RouterLink
          >.
        </p>
      </li>
    </ul>
    <h3 id="notfound" tabindex="-1">
      <a class="header-anchor" href="#notfound" aria-hidden="true">#</a>
      notFound
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string[]</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>['Not Found']</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the messages of the 404 page.</p>
        <p>
          The message will be randomly picked from the array when users enter
          the 404 page.
        </p>
      </li>
    </ul>
    <h3 id="backtohome" tabindex="-1">
      <a class="header-anchor" href="#backtohome" aria-hidden="true">#</a>
      backToHome
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'Back to home'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the text of the <em>back to home</em> link in the 404 page.
        </p>
      </li>
    </ul>
    <h3 id="openinnewwindow" tabindex="-1">
      <a class="header-anchor" href="#openinnewwindow" aria-hidden="true">#</a>
      openInNewWindow
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'open in new window'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Specify the <code v-pre>sr-only</code> text of the
          <RouterLink
            to="/reference/plugin/external-link-icon.html#externallinkicon"
            >ExternalLinkIcon</RouterLink
          >.
        </p>
        <p>This is mainly for a11y purpose.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#themeplugins-externallinkicon"
              >Default Theme &gt; Config Reference &gt;
              themePlugins.externalLinkIcon</a
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'toggle color mode'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Title text for the color mode toggle button.</p>
        <p>This is mainly for a11y purpose.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#colormodeswitch"
              >Default Theme &gt; Config &gt; colorModeSwitch</a
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'toggle sidebar'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Title text for sidebar toggle button.</p>
        <p>This is mainly for a11y purpose.</p>
      </li>
    </ul>
    <h2 id="plugins-config" tabindex="-1">
      <a class="header-anchor" href="#plugins-config" aria-hidden="true">#</a>
      Plugins Config
    </h2>
    <h3 id="themeplugins" tabindex="-1">
      <a class="header-anchor" href="#themeplugins" aria-hidden="true">#</a>
      themePlugins
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>Configure the plugins that used by default theme.</p>
        <p>
          Default theme is using some plugins by default. You can disable a
          plugin if you really do not want to use it. Make sure you understand
          what the plugin is for before disabling it.
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Enable
          <RouterLink to="/reference/plugin/active-header-links.html"
            >@vuepress/plugin-active-header-links</RouterLink
          >
          or not.
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-backtotop" tabindex="-1">
      <a class="header-anchor" href="#themeplugins-backtotop" aria-hidden="true"
        >#</a
      >
      themePlugins.backToTop
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
          Enable
          <RouterLink to="/reference/plugin/back-to-top.html"
            >@vuepress/plugin-back-to-top</RouterLink
          >
          or not.
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
        <p>Type: <code v-pre>Record&lt;ContainerType, boolean&gt;</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Enable custom containers that powered by
          <RouterLink to="/reference/plugin/container.html"
            >@vuepress/plugin-container</RouterLink
          >
          or not.
        </p>
        <p><code v-pre>ContainerType</code> type is:</p>
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
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink
              to="/reference/default-theme/markdown.html#custom-containers"
              >Default Theme &gt; Markdown &gt; Custom Containers</RouterLink
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Enable
          <RouterLink to="/reference/plugin/external-link-icon.html"
            >@vuepress/plugin-external-link-icon</RouterLink
          >
          or not.
        </p>
      </li>
    </ul>
    <h3 id="themeplugins-git" tabindex="-1">
      <a class="header-anchor" href="#themeplugins-git" aria-hidden="true">#</a>
      themePlugins.git
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
          Enable
          <RouterLink to="/reference/plugin/git.html"
            >@vuepress/plugin-git</RouterLink
          >
          or not.
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Enable
          <RouterLink to="/reference/plugin/medium-zoom.html"
            >@vuepress/plugin-medium-zoom</RouterLink
          >
          or not.
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
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Enable
          <RouterLink to="/reference/plugin/nprogress.html"
            >@vuepress/plugin-nprogress</RouterLink
          >
          or not.
        </p>
      </li>
    </ul>
  </div>
</template>
