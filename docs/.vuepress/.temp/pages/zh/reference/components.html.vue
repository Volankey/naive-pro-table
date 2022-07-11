<template>
  <div>
    <h1 id="内置组件" tabindex="-1">
      <a class="header-anchor" href="#内置组件" aria-hidden="true">#</a>
      内置组件
    </h1>
    <NpmBadge package="@vuepress/client" />
    <h2 id="clientonly" tabindex="-1">
      <a class="header-anchor" href="#clientonly" aria-hidden="true">#</a>
      ClientOnly
    </h2>
    <ul>
      <li>使用：</li>
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
        <p>详情：</p>
        <p>
          该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR)
          过程中被渲染到 HTML 内。
        </p>
        <p>
          如果一个组件在 <code v-pre>setup()</code> 中直接使用 浏览器 / DOM API
          ，它会导致构建过程报错，因为这些 API 在 Node.js
          的环境中是无法使用的。在这种情况下，你可以选择一种方式：
        </p>
        <ul>
          <li>
            修改这个组件，只在 <code v-pre>onBeforeMount()</code> 或
            <code v-pre>onMounted()</code> Hook 中使用 浏览器 / DOM API 。
          </li>
          <li>使用 <code v-pre>&lt;ClientOnly&gt;</code> 包裹这个组件。</li>
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
              <li>类型： <code v-pre>string</code></li>
              <li>是否必须： <code v-pre>false</code></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p>使用：</p>
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
        <p>详情：</p>
        <p>该组件会渲染页面的 Markdown 内容。</p>
        <p>
          页面 Key 是页面路由的
          <a
            href="https://router.vuejs.org/zh/api/#name-2"
            target="_blank"
            rel="noopener noreferrer"
            >name<ExternalLinkIcon
          /></a>
          。如果没有传入 <code v-pre>pageKey</code> Prop
          ，它会渲染当前路由下的页面。
        </p>
        <p>该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。</p>
      </li>
      <li>
        <p>参考：</p>
        <ul>
          <li>
            <RouterLink to="/zh/reference/node-api.html#key"
              >Node API &gt; Page 属性 &gt; key</RouterLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
