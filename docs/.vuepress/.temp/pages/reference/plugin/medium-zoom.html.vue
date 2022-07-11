<template>
  <div>
    <h1 id="medium-zoom" tabindex="-1">
      <a class="header-anchor" href="#medium-zoom" aria-hidden="true">#</a>
      medium-zoom
    </h1>
    <NpmBadge package="@vuepress/plugin-medium-zoom" />
    <p>
      Integrate
      <a
        href="https://github.com/francoischalifour/medium-zoom#readme"
        target="_blank"
        rel="noopener noreferrer"
        >medium-zoom<ExternalLinkIcon
      /></a>
      into VuePress, which can provide the ability to zoom images.
    </p>
    <p>This plugin has been integrated into the default theme.</p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-medium-zoom@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> mediumZoomPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-medium-zoom'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mediumZoomPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h3 id="selector" tabindex="-1">
      <a class="header-anchor" href="#selector" aria-hidden="true">#</a>
      selector
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>':not(a) &gt; img'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Selector of zoomable images.</p>
        <p>
          By default this plugin will make all images zoomable except those
          inside <code v-pre>&lt;a&gt;</code> tags.
        </p>
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
        <p>Default: <code v-pre>500</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Delay in milliseconds.</p>
        <p>
          After navigating to a new page, this plugin will make images zoomable
          with a delay.
        </p>
      </li>
    </ul>
    <h3 id="zoomoptions" tabindex="-1">
      <a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a>
      zoomOptions
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Object</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options for medium-zoom.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://github.com/francoischalifour/medium-zoom#options"
              target="_blank"
              rel="noopener noreferrer"
              >medium-zoom &gt; Options<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="styles" tabindex="-1">
      <a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles
    </h2>
    <p>
      You can customize most of the zoom styles via
      <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides
      some CSS variables for additional customization:
    </p>
    <div class="language-css ext-css line-numbers-mode">
      <pre v-pre class="language-css"><code>File not found</code></pre>
      <div class="line-numbers" aria-hidden="true"></div>
    </div>
    <h2 id="composition-api" tabindex="-1">
      <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a>
      Composition API
    </h2>
    <h3 id="usemediumzoom" tabindex="-1">
      <a class="header-anchor" href="#usemediumzoom" aria-hidden="true">#</a>
      useMediumZoom
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          Returns the <code v-pre>Zoom</code> instance that used by this plugin,
          so that you can use the instance
          <a
            href="https://github.com/francoischalifour/medium-zoom#methods"
            target="_blank"
            rel="noopener noreferrer"
            >methods<ExternalLinkIcon
          /></a>
          directly.
        </p>
        <p>
          This plugin will make images zoomable after navigating to current
          page. But if you are going to add new images dynamically, you may need
          this method to make those new images zoomable, too.
        </p>
        <p>
          This plugin adds an extra <code v-pre>refresh</code> method on the
          <code v-pre>Zoom</code> instance, which will call
          <code v-pre>zoom.detach()</code> then
          <code v-pre>zoom.attach()</code> with the
          <a href="#selector">selector</a> as the default parameter. It will
          help you to refresh the zoomable images for current page.
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
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMediumZoom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-medium-zoom/lib/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">useMediumZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// ... do something to add new images in current page</span>
  
    <span class="token comment">// then you may need to call `refresh` manually to make those new images zoomable</span>
    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      zoom<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      </div>
    </div>
  </div>
</template>
