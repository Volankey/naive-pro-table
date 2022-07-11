<template>
  <div>
    <h1 id="built-in-components" tabindex="-1">
      <a class="header-anchor" href="#built-in-components" aria-hidden="true"
        >#</a
      >
      Built-in Components
    </h1>
    <NpmBadge package="@vuepress/client" />
    <h2 id="clientonly" tabindex="-1">
      <a class="header-anchor" href="#clientonly" aria-hidden="true">#</a>
      ClientOnly
    </h2>
    <ul>
      <li>Usage:</li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NonSsrFriendlyComponent</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          This component and its children will only be rendered in client-side.
          That means, it will not be rendered to HTML during build (SSR).
        </p>
        <p>
          If a component is trying to access Browser / DOM APIs directly in
          <code v-pre>setup()</code>, an error will occur during build because
          those APIs are unavailable in Node.js environment. In such case, you
          could do either:
        </p>
        <ul>
          <li>
            Modify the component to only access Browser / DOM APIs in
            <code v-pre>onBeforeMount()</code> or
            <code v-pre>onMounted()</code> hook.
          </li>
          <li>
            Wrap the component with <code v-pre>&lt;ClientOnly&gt;</code>.
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="content" tabindex="-1">
      <a class="header-anchor" href="#content" aria-hidden="true">#</a> Content
    </h2>
    <ul>
      <li>
        <p>Props:</p>
        <ul>
          <li>
            pageKey
            <ul>
              <li>Type: <code v-pre>string</code></li>
              <li>Required: <code v-pre>false</code></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p>Usage:</p>
      </li>
    </ul>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre
        v-pre
        class="language-markdown"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token attr-name">page-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v-xxxxxx<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ul>
      <li>
        <p>Details:</p>
        <p>This component will render the Markdown content of a page.</p>
        <p>
          The page key is the
          <a
            href="https://router.vuejs.org/api/#name-2"
            target="_blank"
            rel="noopener noreferrer"
            >name<ExternalLinkIcon
          /></a>
          of the page route. If the <code v-pre>pageKey</code> prop is not
          provided, it will render the page of current route.
        </p>
        <p>
          This component is mainly for developing themes. You won't need it in
          most cases.
        </p>
      </li>
      <li>
        <p>Also see:</p>
        <ul>
          <li>
            <RouterLink to="/reference/node-api.html#key"
              >Node API &gt; Page Properties &gt; key</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
