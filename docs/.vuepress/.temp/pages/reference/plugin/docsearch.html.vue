<template>
  <div>
    <h1 id="docsearch" tabindex="-1">
      <a class="header-anchor" href="#docsearch" aria-hidden="true">#</a>
      docsearch
    </h1>
    <NpmBadge package="@vuepress/plugin-docsearch" />
    <p>
      Integrate
      <a
        href="https://docsearch.algolia.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Algolia DocSearch<ExternalLinkIcon
      /></a>
      into VuePress, which can provide search to your documentation site.
    </p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Default theme will add DocSearch to the navbar once you configure this
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
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-docsearch@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> docsearchPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-docsearch'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h2 id="get-search-index" tabindex="-1">
      <a class="header-anchor" href="#get-search-index" aria-hidden="true">#</a>
      Get Search Index
    </h2>
    <p>
      You need to
      <a
        href="https://docsearch.algolia.com/apply/"
        target="_blank"
        rel="noopener noreferrer"
        >submit the URL of your site<ExternalLinkIcon
      /></a>
      to join the DocSearch program. The DocSearch team will send
      <a href="#apikey">apiKey</a> and <a href="#indexname">indexName</a> to
      your email once the index is generated. Then you can configure this plugin
      to enable DocSearch in VuePress.
    </p>
    <p>
      Alternatively, you can
      <a
        href="https://docsearch.algolia.com/docs/run-your-own/"
        target="_blank"
        rel="noopener noreferrer"
        >run your own crawler<ExternalLinkIcon
      /></a>
      to generate the index, and then use your own <a href="#appId">appId</a>,
      <a href="#apikey">apiKey</a> and <a href="#indexname">indexName</a> to
      configure this plugin.
    </p>
    <details class="custom-container details">
      <summary>Official crawler config</summary>
      <div class="language-javascript ext-js line-numbers-mode">
        <pre
          v-pre
          class="language-javascript"
        ><code><span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'YOUR_APP_ID'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'YOUR_API_KEY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rateLimit</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">startUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// These are urls which algolia start to craw</span>
    <span class="token comment">// If your site is divided in to mutiple parts,</span>
    <span class="token comment">// you may want to set mutiple entry links</span>
    <span class="token string">'https://YOUR_WEBSITE_URL/'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sitemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// if you are using sitemap plugins (e.g.: vuepress-plugin-sitemap2), you may provide one</span>
    <span class="token string">'https://YOUR_WEBSITE_URL/sitemap.xml'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignoreCanonicalTo</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclusionPatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// You can use this to stop algolia crawing some paths</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">discoveryPatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// These are urls which algolia looking for,</span>
    <span class="token string">'https://YOUR_WEBSITE_URL/**'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Crawler schedule, set it according to your docs update frequency</span>
  <span class="token literal-property property">schedule</span><span class="token operator">:</span> <span class="token string">'at 02:00 every 1 day'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// you may have mutiple actions, especially when you are deploying mutiple docs under one domain</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// name the index with name you like</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'YOUR_INDEX_NAME'</span><span class="token punctuation">,</span>
      <span class="token comment">// paths where the index take effect</span>
      <span class="token literal-property property">pathsToMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'https://YOUR_WEBSITE_URL/**'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// controls how algolia extracts records from your site</span>
      <span class="token function-variable function">recordExtractor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $<span class="token punctuation">,</span> helpers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// options for @vuepress/theme-default</span>
        <span class="token keyword">return</span> helpers<span class="token punctuation">.</span><span class="token function">docsearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">recordProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lvl0</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">selectors</span><span class="token operator">:</span> <span class="token string">'.sidebar-heading.active'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">'Documentation'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl1</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl2</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl3</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl4</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h4'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl5</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h5'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl6</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h6'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'.theme-default-content p, .theme-default-content li'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">indexHeadings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">initialIndexSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// controls how index are initialized</span>
    <span class="token comment">// only has effects before index are initialize</span>
    <span class="token comment">// you may need to delete your index and recraw after modification</span>
    <span class="token constant">YOUR_INDEX_NAME</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">attributesForFaceting</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">'lang'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributesToRetrieve</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hierarchy'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">,</span> <span class="token string">'anchor'</span><span class="token punctuation">,</span> <span class="token string">'url'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributesToHighlight</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hierarchy'</span><span class="token punctuation">,</span> <span class="token string">'hierarchy_camel'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributesToSnippet</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'content:10'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">camelCaseAttributes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hierarchy'</span><span class="token punctuation">,</span> <span class="token string">'hierarchy_radio'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">searchableAttributes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl0)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl0)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl1)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl1)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl2)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl2)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl3)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl3)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl4)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl4)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl5)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl5)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio_camel.lvl6)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_radio.lvl6)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl0)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl0)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl1)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl1)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl2)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl2)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl3)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl3)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl4)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl4)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl5)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl5)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy_camel.lvl6)'</span><span class="token punctuation">,</span>
        <span class="token string">'unordered(hierarchy.lvl6)'</span><span class="token punctuation">,</span>
        <span class="token string">'content'</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">distinct</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributeForDistinct</span><span class="token operator">:</span> <span class="token string">'url'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customRanking</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'desc(weight.pageRank)'</span><span class="token punctuation">,</span>
        <span class="token string">'desc(weight.level)'</span><span class="token punctuation">,</span>
        <span class="token string">'asc(weight.position)'</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ranking</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'words'</span><span class="token punctuation">,</span>
        <span class="token string">'filters'</span><span class="token punctuation">,</span>
        <span class="token string">'typo'</span><span class="token punctuation">,</span>
        <span class="token string">'attribute'</span><span class="token punctuation">,</span>
        <span class="token string">'proximity'</span><span class="token punctuation">,</span>
        <span class="token string">'exact'</span><span class="token punctuation">,</span>
        <span class="token string">'custom'</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">highlightPreTag</span><span class="token operator">:</span> <span class="token string">'&lt;span class="algolia-docsearch-suggestion--highlight">'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">highlightPostTag</span><span class="token operator">:</span> <span class="token string">'&lt;/span>'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minWordSizefor1Typo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minWordSizefor2Typos</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowTyposOnNumericTokens</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minProximity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ignorePlurals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">advancedSyntax</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributeCriteriaComputedByMinProximity</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">removeWordsIfNoResults</span><span class="token operator">:</span> <span class="token string">'allOptional'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
        <div class="highlight-lines">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <div class="highlight-line">&nbsp;</div>
          <br /><br /><br /><br /><br /><br /><br /><br />
          <div class="highlight-line">&nbsp;</div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
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
      <p>
        The above <code v-pre>recordProps</code> is the configuration used for
        the default theme. You can modify them according to the theme you are
        using.
      </p>
      <p>
        Notice that the
        <code v-pre
          >initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code
        >
        fields must include <code v-pre>'lang'</code> to make this plugin work
        properly.
      </p>
    </details>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        If you are not using default theme, or you meet any problems when using
        docsearch, you can also check the above example crawler config, and
        ahead to
        <a
          href="https://crawler.algolia.com/admin/crawlers/"
          target="_blank"
          rel="noopener noreferrer"
          >Algolia Crawler<ExternalLinkIcon /></a
        >, and edit your config with 'Editor' panel in project sidebar.
      </p>
    </div>
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <h3 id="apikey" tabindex="-1">
      <a class="header-anchor" href="#apikey" aria-hidden="true">#</a> apiKey
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Required: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          The <code v-pre>apiKey</code> that you received from the DocSearch
          team, or generated by yourself.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api#apikey"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; apiKey<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="indexname" tabindex="-1">
      <a class="header-anchor" href="#indexname" aria-hidden="true">#</a>
      indexName
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Required: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          The <code v-pre>indexName</code> that you received from the DocSearch
          team, or generated by yourself.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api#indexname"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; indexName<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="appid" tabindex="-1">
      <a class="header-anchor" href="#appid" aria-hidden="true">#</a> appId
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Required: <code v-pre>true</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>It defines your own application ID.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api#appid"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; appId<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="searchparameters" tabindex="-1">
      <a class="header-anchor" href="#searchparameters" aria-hidden="true">#</a>
      searchParameters
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>SearchParameters</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>Parameters of Algolia Search API.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api/#searchparameters"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; searchParameters<ExternalLinkIcon
            /></a>
          </li>
          <li>
            <a
              href="https://www.algolia.com/doc/api-reference/search-api-parameters/"
              target="_blank"
              rel="noopener noreferrer"
              >Algolia &gt; Search API Parameters<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="placeholder" tabindex="-1">
      <a class="header-anchor" href="#placeholder" aria-hidden="true">#</a>
      placeholder
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'Search docs'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>The placeholder attribute of the search input.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api/#placeholder"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; placeholder<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="disableuserpersonalization" tabindex="-1">
      <a
        class="header-anchor"
        href="#disableuserpersonalization"
        aria-hidden="true"
        >#</a
      >
      disableUserPersonalization
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
        <p>
          Whether to disable all personalized features: recent searches,
          favorite searches, etc.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api/#disableuserpersonalization"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt;
              disableUserPersonalization<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="initialquery" tabindex="-1">
      <a class="header-anchor" href="#initialquery" aria-hidden="true">#</a>
      initialQuery
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>The initial query when the modal opens.</p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api/#initialquery"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; initialQuery<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="translations" tabindex="-1">
      <a class="header-anchor" href="#translations" aria-hidden="true">#</a>
      translations
    </h3>
    <ul>
      <li>
        <p>Type: <code v-pre>Partial&lt;DocSearchTranslations&gt;</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          Allow replacing the default text in the DocSearch button or modal.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <a
              href="https://docsearch.algolia.com/docs/api/#translations"
              target="_blank"
              rel="noopener noreferrer"
              >DocSearch &gt; Options &gt; translations<ExternalLinkIcon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="locales" tabindex="-1">
      <a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales
    </h3>
    <ul>
      <li>
        <p>
          Type: <code v-pre>Record&lt;string, DocsearchPluginOptions&gt;</code>
        </p>
      </li>
      <li>
        <p>Details:</p>
        <p>Options of this plugin in different locales.</p>
        <p>All other options of this plugin are acceptable in locale config.</p>
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
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'&lt;API_KEY>'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'&lt;INDEX_NAME>'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Search Documentation'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'Search Documentation'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
    <h2 id="styles" tabindex="-1">
      <a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles
    </h2>
    <p>
      You can customize styles via CSS variables that provided by
      <a
        href="https://docsearch.algolia.com/docs/styling"
        target="_blank"
        rel="noopener noreferrer"
        >@docsearch/css<ExternalLinkIcon /></a
      >:
    </p>
    <div class="language-css ext-css line-numbers-mode">
      <pre
        v-pre
        class="language-css"
      ><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>28<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 33<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-spacing</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-icon-stroke-width</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 159<span class="token punctuation">,</span> 175<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>101<span class="token punctuation">,</span> 108<span class="token punctuation">,</span> 133<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* modal */</span>
  <span class="token property">--docsearch-modal-width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 246<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 3px
      8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* searchbox */</span>
  <span class="token property">--docsearch-searchbox-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>235<span class="token punctuation">,</span> 237<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* hit */</span>
  <span class="token property">--docsearch-hit-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>68<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">rgb</span><span class="token punctuation">(</span>212<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* key */</span>
  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
    -225deg<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>213<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 228<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>248<span class="token punctuation">,</span> 248<span class="token punctuation">,</span> 248<span class="token punctuation">)</span> 100%
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>205<span class="token punctuation">,</span> 205<span class="token punctuation">,</span> 230<span class="token punctuation">)</span><span class="token punctuation">,</span> inset 0 0 1px 1px
      #fff<span class="token punctuation">,</span> 0 1px 2px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 35<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* footer */</span>
  <span class="token property">--docsearch-footer-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> 0 -1px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>224<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 232<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 -3px 6px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>69<span class="token punctuation">,</span> 98<span class="token punctuation">,</span> 155<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
    <h2 id="components" tabindex="-1">
      <a class="header-anchor" href="#components" aria-hidden="true">#</a>
      Components
    </h2>
    <h3 id="docsearch-1" tabindex="-1">
      <a class="header-anchor" href="#docsearch-1" aria-hidden="true">#</a>
      Docsearch
    </h3>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          This plugin will register a
          <code v-pre>&lt;Docsearch /&gt;</code> component globally, and you can
          use it without any props.
        </p>
        <p>
          Put this component to where you want to place the docsearch button.
          For example, default theme puts this component to the end of the
          navbar.
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
