<template>
  <div>
    <h1 id="active-header-links" tabindex="-1">
      <a class="header-anchor" href="#active-header-links" aria-hidden="true"
        >#</a
      >
      active-header-links
    </h1>
    <NpmBadge package="@vuepress/plugin-active-header-links" />
    <p>
      This plugin will listen to page scroll event. When the page scrolls to a
      certain <em>header anchor</em>, this plugin will change the route hash to
      that <em>header anchor</em> if there is a corresponding
      <em>header link</em>.
    </p>
    <p>
      This plugin is mainly used to develop themes, and has been integrated into
      the default theme. You won't need to use it directly in most cases.
    </p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-active-header-links@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> activeHeaderLinksPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-active-header-links'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">activeHeaderLinksPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="headerlinkselector" tabindex="-1">
      <a class="header-anchor" href="#headerlinkselector" aria-hidden="true"
        >#</a
      >
      headerLinkSelector
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'a.sidebar-item'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Selector of <em>header link</em>.</p>
        <p>
          If a <em>header anchor</em> does not have a corresponding
          <em>header link</em>, this plugin won't change the route hash to that
          anchor when scrolling to it.
        </p>
      </li>
    </ul>
    <h3 id="headeranchorselector" tabindex="-1">
      <a class="header-anchor" href="#headeranchorselector" aria-hidden="true"
        >#</a
      >
      headerAnchorSelector
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'.header-anchor'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Selector of <em>header anchor</em>.</p>
        <p>
          You don't need to specify this option unless you have changed the
          <code v-pre>permalinkClass</code> option of
          <a
            href="https://github.com/valeriangalliat/markdown-it-anchor#readme"
            target="_blank"
            rel="noopener noreferrer"
            >markdown-it-anchor<ExternalLinkIcon
          /></a>
          via
          <RouterLink to="/reference/config.html#markdown-anchor"
            >markdown.anchor</RouterLink
          >.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/guide/markdown.html#header-anchors"
              >Guide &gt; Markdown &gt; Syntax Extensions &gt; Header
              Anchors</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="delay" tabindex="-1">
      <a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>number</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>200</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>The delay of the debounced scroll event listener.</p>
      </li>
    </ul>
    <h3 id="offset" tabindex="-1">
      <a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset
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
        <p>
          Even if you click the link of the <em>header anchor</em> directly, the
          <code v-pre>scrollTop</code> might not be exactly equal to
          <code v-pre>offsetTop</code> of the <em>header anchor</em>, so we add
          an offset to avoid the error.
        </p>
      </li>
    </ul>
  </div>
</template>
