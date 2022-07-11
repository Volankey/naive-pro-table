<template>
  <div>
    <h1 id="google-analytics" tabindex="-1">
      <a class="header-anchor" href="#google-analytics" aria-hidden="true">#</a>
      google-analytics
    </h1>
    <NpmBadge package="@vuepress/plugin-google-analytics" />
    <p>
      将
      <a
        href="https://analytics.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Google Analytics<ExternalLinkIcon
      /></a>
      集成到 VuePress 中。
    </p>
    <p>
      该插件会通过引入
      <a
        href="https://developers.google.com/analytics/devguides/collection/gtagjs"
        target="_blank"
        rel="noopener noreferrer"
        >gtag.js<ExternalLinkIcon
      /></a>
      来启用
      <a
        href="https://support.google.com/analytics/answer/10089681"
        target="_blank"
        rel="noopener noreferrer"
        >Google Analytics 4<ExternalLinkIcon
      /></a>
      。
    </p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-google-analytics@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-google-analytics'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h2 id="上报事件" tabindex="-1">
      <a class="header-anchor" href="#上报事件" aria-hidden="true">#</a>
      上报事件
    </h2>
    <p>
      Google Analytics 会
      <a
        href="https://support.google.com/analytics/answer/9234069"
        target="_blank"
        rel="noopener noreferrer"
        >自动收集部分事件<ExternalLinkIcon
      /></a>
      ，比如 <code v-pre>page_view</code>, <code v-pre>first_visit</code> 等。
    </p>
    <p>
      因此，如果你只是想收集站点的一些基础数据，你只需要正确设置
      <a href="#id">Measurement ID</a> ，不需要再额外做其他事情。
    </p>
    <p>
      在引入该插件之后，一个全局的 <code v-pre>gtag()</code> 函数会被挂载到
      <code v-pre>window</code> 对象上，你可以使用它进行
      <a
        href="https://developers.google.com/analytics/devguides/collection/ga4/events"
        target="_blank"
        rel="noopener noreferrer"
        >自定义事件的上报<ExternalLinkIcon
      /></a>
      。
    </p>
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <h3 id="id" tabindex="-1">
      <a class="header-anchor" href="#id" aria-hidden="true">#</a> id
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          Google Analytics 4 的 Measurement ID ，应以
          <code v-pre>'G-'</code> 开头。
        </p>
        <p>
          你可以通过
          <a
            href="https://support.google.com/analytics/answer/9539598"
            target="_blank"
            rel="noopener noreferrer"
            >这里<ExternalLinkIcon
          /></a>
          的指引来找到你的 Measurement ID 。注意区分 Google Analytics 4 的
          Measurement ID （即 &quot;G-&quot; 开头的 ID） 和 Universal Analytics
          的 Tracking ID （即 &quot;UA-&quot; 开头的 ID）。
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
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span><span class="token punctuation">,</span>
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
      </div>
    </div>
  </div>
</template>
