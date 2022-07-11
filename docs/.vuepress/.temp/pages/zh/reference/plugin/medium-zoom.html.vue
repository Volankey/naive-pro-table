<template>
  <div>
    <h1 id="medium-zoom" tabindex="-1">
      <a class="header-anchor" href="#medium-zoom" aria-hidden="true">#</a>
      medium-zoom
    </h1>
    <NpmBadge package="@vuepress/plugin-medium-zoom" />
    <p>
      将
      <a
        href="https://github.com/francoischalifour/medium-zoom#readme"
        target="_blank"
        rel="noopener noreferrer"
        >medium-zoom<ExternalLinkIcon
      /></a>
      集成到 VuePress 中，为图片提供可缩放的功能。
    </p>
    <p>该插件已经集成到默认主题中。</p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
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
      <span class="token comment">// 配置项</span>
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
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <h3 id="selector" tabindex="-1">
      <a class="header-anchor" href="#selector" aria-hidden="true">#</a>
      selector
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>':not(a) &gt; img'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>可缩放的图片的选择器。</p>
        <p>
          默认情况下，该插件会使
          <code v-pre>&lt;a&gt;</code> 标签以外的所有图片都支持缩放。
        </p>
      </li>
    </ul>
    <h3 id="delay" tabindex="-1">
      <a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>number</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>500</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>以毫秒为单位的延迟。</p>
        <p>
          在切换路由进入一个新页面时，该插件会在一定延迟后才使页面内的图片支持缩放。
        </p>
      </li>
    </ul>
    <h3 id="zoomoptions" tabindex="-1">
      <a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a>
      zoomOptions
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>Object</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>medium-zoom 的配置项。</p>
      </li>
      <li>
        <p>参考：</p>
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
    <h2 id="样式" tabindex="-1">
      <a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式
    </h2>
    <p>
      你可以通过
      <a href="#zoomoptions">zoomOptions</a>
      对大部分的缩放样式进行自定义，不过作为补充，该插件同样提供了一些 CSS
      变量：
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
        <p>详情：</p>
        <p>
          返回该插件使用的 <code v-pre>Zoom</code> 实例，便于你直接使用实例上的
          <a
            href="https://github.com/francoischalifour/medium-zoom#methods"
            target="_blank"
            rel="noopener noreferrer"
            >methods<ExternalLinkIcon
          /></a>
          。
        </p>
        <p>
          该插件会在切换路由进入当前页面时使图片支持缩放。但如果你要动态添加新图片，那么你可能就需要这个方法来让这些新图片也支持缩放。
        </p>
        <p>
          该插件在 <code v-pre>Zoom</code> 实例上额外添加了一个
          <code v-pre>refresh</code> 方法，它将使用
          <a href="#selector">selector</a> 作为默认参数，先调用
          <code v-pre>zoom.detach()</code> 再调用
          <code v-pre>zoom.attach()</code>
          ，便于你快速刷新当前页面图片的缩放状态。
        </p>
      </li>
      <li>
        <p>示例：</p>
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

    <span class="token comment">// ... 进行了一些操作，在当前页面添加了新的图片</span>

    <span class="token comment">// 此时你可能需要手动调用 `refresh` 来让这些新图片支持缩放</span>
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
