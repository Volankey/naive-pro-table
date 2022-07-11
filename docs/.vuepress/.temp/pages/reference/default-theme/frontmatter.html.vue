<template>
  <div>
    <h1 id="frontmatter" tabindex="-1">
      <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a>
      Frontmatter
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <h2 id="all-pages" tabindex="-1">
      <a class="header-anchor" href="#all-pages" aria-hidden="true">#</a> All
      Pages
    </h2>
    <p>Frontmatter in this section will take effect in all types of pages.</p>
    <h3 id="externallinkicon" tabindex="-1">
      <a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a>
      externalLinkIcon
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Provided by
          <RouterLink
            to="/reference/plugin/external-link-icon.html#externallinkicon"
            >@vuepress/plugin-external-link-icon</RouterLink
          >.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink
              to="/reference/default-theme/config.html#themeplugins-externallinkicon"
              >Default Theme &gt; Config Reference &gt;
              themePlugins.externalLinkIcon</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="navbar" tabindex="-1">
      <a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Show navbar on this page or not.</p>
        <p>
          If you disable navbar in theme config, this frontmatter will not take
          effect.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/config.html#navbar"
              >Default Theme &gt; Config &gt; navbar</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="pageclass" tabindex="-1">
      <a class="header-anchor" href="#pageclass" aria-hidden="true">#</a>
      pageClass
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Add extra class name to this page.</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class</span>
<span class="token punctuation">---</span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Then you can customize styles of this page in
      <code v-pre>.vuepress/styles/index.scss</code> file:
    </p>
    <div class="language-scss ext-scss line-numbers-mode">
      <pre
        v-pre
        class="language-scss"
      ><code><span class="token selector">.theme-container.custom-page-class </span><span class="token punctuation">{</span>
  <span class="token comment">/* page styles */</span>
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
        Also see:
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/styles.html#style-file"
              >Default Theme &gt; Styles &gt; Style File</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="home-page" tabindex="-1">
      <a class="header-anchor" href="#home-page" aria-hidden="true">#</a> Home
      Page
    </h2>
    <p>Frontmatter in this section will only take effect in home pages.</p>
    <h3 id="home" tabindex="-1">
      <a class="header-anchor" href="#home" aria-hidden="true">#</a> home
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify whether the page is homepage or a normal page.</p>
        <p>
          If you don't set this frontmatter or set it to
          <code v-pre>false</code>, the page would be a
          <a href="#normal-page">normal page</a>.
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
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="heroimage" tabindex="-1">
      <a class="header-anchor" href="#heroimage" aria-hidden="true">#</a>
      heroImage
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the url of the hero image.</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># public file path</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/hero.png
<span class="token comment"># url</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png</span>
<span class="token punctuation">---</span></span>
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
    <h3 id="heroimagedark" tabindex="-1">
      <a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a>
      heroImageDark
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the url of hero image to be used in dark mode.</p>
        <p>
          You can make use of this option if you want to use different heroImage
          config in dark mode.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a href="#heroimage"
              >Default Theme &gt; Frontmatter &gt; heroImage</a
            >
          </li>
          <li>
            <RouterLink to="/reference/default-theme/config.html#colormode"
              >Default Theme &gt; Config &gt; colorMode</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="heroalt" tabindex="-1">
      <a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the <code v-pre>alt</code> attribute of the hero image.</p>
        <p>This will fallback to the <a href="#heroText">heroText</a>.</p>
      </li>
    </ul>
    <h3 id="herotext" tabindex="-1">
      <a class="header-anchor" href="#herotext" aria-hidden="true">#</a>
      heroText
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the the hero text.</p>
        <p>
          This will fallback to the site
          <RouterLink to="/reference/config.html#title">title</RouterLink>.
        </p>
        <p>Set to <code v-pre>null</code> to disable hero text.</p>
      </li>
    </ul>
    <h3 id="tagline" tabindex="-1">
      <a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string | null</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the the tagline.</p>
        <p>
          This will fallback to the site
          <RouterLink to="/reference/config.html#description"
            >description</RouterLink
          >.
        </p>
        <p>Set to <code v-pre>null</code> to disable tagline.</p>
      </li>
    </ul>
    <h3 id="actions" tabindex="-1">
      <a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions
    </h3>
    <ul>
      <li>Type:</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token operator">|</span> <span class="token string">'secondary'</span>
<span class="token punctuation">}</span><span class="token operator">></span>
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
        <p>Configuration of the action buttons.</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Introduction
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary</span>
<span class="token punctuation">---</span></span>
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
    <h3 id="features" tabindex="-1">
      <a class="header-anchor" href="#features" aria-hidden="true">#</a>
      features
    </h3>
    <ul>
      <li>Type:</li>
    </ul>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>Details:</p>
        <p>Configuration of the features list.</p>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Simplicity First
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Minimal setup with markdown<span class="token punctuation">-</span>centered project structure helps you focus on writing.
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue<span class="token punctuation">-</span>Powered
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Enjoy the dev experience of Vue<span class="token punctuation">,</span> use Vue components in markdown<span class="token punctuation">,</span> and develop custom themes with Vue.
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Performant
    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress generates pre<span class="token punctuation">-</span>rendered static HTML for each page<span class="token punctuation">,</span> and runs as an SPA once a page is loaded.</span>
<span class="token punctuation">---</span></span>
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
    <h3 id="footer" tabindex="-1">
      <a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the content of the footer.</p>
      </li>
    </ul>
    <h3 id="footerhtml" tabindex="-1">
      <a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a>
      footerHtml
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Allow HTML in footer or not.</p>
        <p>
          If you set it to <code v-pre>true</code>, the
          <a href="#footer">footer</a> will be treated as HTML code.
        </p>
      </li>
    </ul>
    <h2 id="normal-page" tabindex="-1">
      <a class="header-anchor" href="#normal-page" aria-hidden="true">#</a>
      Normal Page
    </h2>
    <p>Frontmatter in this section will only take effect in normal pages.</p>
    <h3 id="editlink" tabindex="-1">
      <a class="header-anchor" href="#editlink" aria-hidden="true">#</a>
      editLink
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>boolean</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Enable the <em>edit this page</em> link in this page or not.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/config.html#editlink"
              >Default Theme &gt; Config &gt; editLink</RouterLink
            >
          </li>
        </ul>
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
        <p>
          Specify the pattern of the <em>edit this page</em> link of this page.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink
              to="/reference/default-theme/config.html#editlinkpattern"
              >Default Theme &gt; Config &gt; editLinkPattern</RouterLink
            >
          </li>
        </ul>
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
        <p>Details:</p>
        <p>Enable the <em>last updated timestamp</em> in this page or not.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/config.html#lastupdated"
              >Default Theme &gt; Config &gt; lastUpdated</RouterLink
            >
          </li>
        </ul>
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
        <p>Details:</p>
        <p>Enable the <em>contributors list</em> in this page or not.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/config.html#contributors"
              >Default Theme &gt; Config &gt; contributors</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
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
        <p>Details:</p>
        <p>Configure the sidebar of this page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/config.html#sidebar"
              >Default Theme &gt; Config &gt; sidebar</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="sidebardepth" tabindex="-1">
      <a class="header-anchor" href="#sidebardepth" aria-hidden="true">#</a>
      sidebarDepth
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>number</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Configure the sidebar depth of this page.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/default-theme/config.html#sidebardepth"
              >Default Theme &gt; Config &gt; sidebarDepth</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="prev" tabindex="-1">
      <a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>NavLink | string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the link of the previous page.</p>
        <p>
          If you don't set this frontmatter, the link will be inferred from the
          sidebar config.
        </p>
        <p>
          To configure the prev link manually, you can set this frontmatter to a
          <code v-pre>NavLink</code> object or a string:
        </p>
        <ul>
          <li>
            A <code v-pre>NavLink</code> object should have a
            <code v-pre>text</code> field and a <code v-pre>link</code> field.
          </li>
          <li>
            A string should be the path to the target page file. It will be
            converted to a <code v-pre>NavLink</code> object, whose
            <code v-pre>text</code> is the page title, and
            <code v-pre>link</code> is the page route path.
          </li>
        </ul>
      </li>
      <li>
        <p>Example:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># NavLink</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html

<span class="token comment"># NavLink - external url</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com

<span class="token comment"># string - page file path</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md

<span class="token comment"># string - page file relative path</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md</span>
<span class="token punctuation">---</span></span>
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
      </div>
    </div>
    <h3 id="next" tabindex="-1">
      <a class="header-anchor" href="#next" aria-hidden="true">#</a> next
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>NavLink | string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Specify the link of the next page.</p>
        <p>
          If you don't set this frontmatter, the link will be inferred from the
          sidebar config.
        </p>
        <p>The type is the same as <a href="#prev">prev</a> frontmatter.</p>
      </li>
    </ul>
  </div>
</template>
