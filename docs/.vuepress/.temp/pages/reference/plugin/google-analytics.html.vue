<template>
  <div>
    <h1 id="google-analytics" tabindex="-1">
      <a class="header-anchor" href="#google-analytics" aria-hidden="true">#</a>
      google-analytics
    </h1>
    <NpmBadge package="@vuepress/plugin-google-analytics" />
    <p>
      Integrate
      <a
        href="https://analytics.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Google Analytics<ExternalLinkIcon
      /></a>
      into VuePress.
    </p>
    <p>
      This plugin will import
      <a
        href="https://developers.google.com/analytics/devguides/collection/gtagjs"
        target="_blank"
        rel="noopener noreferrer"
        >gtag.js<ExternalLinkIcon
      /></a>
      for
      <a
        href="https://support.google.com/analytics/answer/10089681"
        target="_blank"
        rel="noopener noreferrer"
        >Google Analytics 4<ExternalLinkIcon /></a
      >.
    </p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
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
    <h2 id="reporting-events" tabindex="-1">
      <a class="header-anchor" href="#reporting-events" aria-hidden="true">#</a>
      Reporting Events
    </h2>
    <p>
      Google Analytics will
      <a
        href="https://support.google.com/analytics/answer/9234069"
        target="_blank"
        rel="noopener noreferrer"
        >automatically collect some events<ExternalLinkIcon /></a
      >, such as <code v-pre>page_view</code>, <code v-pre>first_visit</code>,
      etc.
    </p>
    <p>
      So if you only want to collect some basic data of your site, you don't
      need to do anything else except setting the
      <a href="#id">Measurement ID</a> correctly.
    </p>
    <p>
      After using this plugin, the global <code v-pre>gtag()</code> function is
      available on the <code v-pre>window</code> object, and you can use it for
      <a
        href="https://developers.google.com/analytics/devguides/collection/ga4/events"
        target="_blank"
        rel="noopener noreferrer"
        >custom events reporting<ExternalLinkIcon /></a
      >.
    </p>
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="id" tabindex="-1">
      <a class="header-anchor" href="#id" aria-hidden="true">#</a> id
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          The Measurement ID of Google Analytics 4, which should start with
          <code v-pre>'G-'</code>.
        </p>
        <p>
          You can follow the instructions
          <a
            href="https://support.google.com/analytics/answer/9539598"
            target="_blank"
            rel="noopener noreferrer"
            >here<ExternalLinkIcon
          /></a>
          to find your Measurement ID. Notice the difference between Google
          Analytics 4 Measurement ID (i.e. &quot;G-&quot; ID) and Universal
          Analytics Tracking ID (i.e. &quot;UA-&quot; ID).
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
