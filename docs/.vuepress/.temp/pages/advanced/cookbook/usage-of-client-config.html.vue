<template>
  <div>
    <h1 id="usage-of-client-config" tabindex="-1">
      <a class="header-anchor" href="#usage-of-client-config" aria-hidden="true"
        >#</a
      >
      Usage of Client Config
    </h1>
    <p>
      You can make use of the
      <RouterLink to="/guide/configuration.html#client-config-file"
        >client config file</RouterLink
      >
      directly in your project, or specify the file path in your plugin or theme
      via
      <RouterLink to="/reference/plugin-api.html#clientconfigfile"
        >clientConfigFile</RouterLink
      >
      hook:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>

<span class="token keyword">const</span> pluginOrTheme <span class="token operator">=</span> <span class="token punctuation">{</span>
  clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./path/to/clientConfig.ts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      Inside the client config file, <code v-pre>@vuepress/client</code> package
      provides a helper function
      <RouterLink to="/reference/client-api.html#defineclientconfig"
        >defineClientConfig</RouterLink
      >
      to help you define the client config:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
    <h2 id="enhance" tabindex="-1">
      <a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance
    </h2>
    <p>
      The <code v-pre>enhance</code> function could be either synchronous or
      asynchronous. It accepts a context param with following properties:
    </p>
    <ul>
      <li>
        <code v-pre>app</code> is the Vue application instance that created by
        <a
          href="https://vuejs.org/api/application.html#createapp"
          target="_blank"
          rel="noopener noreferrer"
          >createApp<ExternalLinkIcon /></a
        >.
      </li>
      <li>
        <code v-pre>router</code> is the Vue Router instance that created by
        <a
          href="https://router.vuejs.org/api/#createrouter"
          target="_blank"
          rel="noopener noreferrer"
          >createRouter<ExternalLinkIcon /></a
        >.
      </li>
      <li>
        <code v-pre>siteData</code> is a ref of an object that generated from
        user config, including
        <RouterLink to="/reference/config.html#base">base</RouterLink>,
        <RouterLink to="/reference/config.html#lang">lang</RouterLink>,
        <RouterLink to="/reference/config.html#title">title</RouterLink>,
        <RouterLink to="/reference/config.html#description"
          >description</RouterLink
        >, <RouterLink to="/reference/config.html#head">head</RouterLink> and
        <RouterLink to="/reference/config.html#locales">locales</RouterLink>.
      </li>
    </ul>
    <p>
      The <code v-pre>enhance</code> function will be invoked after the client
      app is created. It's possible to implement any enhancements to the Vue
      application.
    </p>
    <h3 id="register-vue-components" tabindex="-1">
      <a
        class="header-anchor"
        href="#register-vue-components"
        aria-hidden="true"
        >#</a
      >
      Register Vue Components
    </h3>
    <p>
      You can register global Vue components via the
      <a
        href="https://vuejs.org/api/application.html#app-component"
        target="_blank"
        rel="noopener noreferrer"
        >app.component<ExternalLinkIcon
      /></a>
      method:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'MyComponent'</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
    <h3 id="use-non-ssr-friendly-features" tabindex="-1">
      <a
        class="header-anchor"
        href="#use-non-ssr-friendly-features"
        aria-hidden="true"
        >#</a
      >
      Use Non-SSR-Friendly Features
    </h3>
    <p>
      VuePress will generate a SSR application to pre-render pages during build.
      Generally speaking, if a code snippet is using Browser / DOM APIs before
      client app is mounted, we call it non-SSR-friendly.
    </p>
    <p>
      We already provides a
      <RouterLink to="/reference/components.html#clientonly"
        >ClientOnly</RouterLink
      >
      component to wrap non-SSR-friendly content.
    </p>
    <p>
      In the <code v-pre>enhance</code> function, you can make use of the
      <RouterLink to="/reference/client-api.html#ssr"
        ><code v-pre>__VUEPRESS_SSR__</code></RouterLink
      >
      flag for that purpose.
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__VUEPRESS_SSR__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> nonSsrFriendlyModule <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'non-ssr-friendly-module'</span><span class="token punctuation">)</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      </div>
    </div>
    <h3 id="use-router-methods" tabindex="-1">
      <a class="header-anchor" href="#use-router-methods" aria-hidden="true"
        >#</a
      >
      Use Router Methods
    </h3>
    <p>
      You can make use of the
      <a
        href="https://router.vuejs.org/api/#router-methods"
        target="_blank"
        rel="noopener noreferrer"
        >Router Methods<ExternalLinkIcon
      /></a>
      that provided by vue-router. For example, add navigation guard:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> router <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'before navigation'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'after navigation'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      </div>
    </div>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>
        It's not recommended to use <code v-pre>addRoute</code> method to add
        dynamic routes here, because those routes will <strong>NOT</strong> be
        pre-rendered in build mode.
      </p>
      <p>But you can still do that if you understand the drawback.</p>
    </div>
    <h2 id="setup" tabindex="-1">
      <a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup
    </h2>
    <p>
      The <code v-pre>setup</code> function would be invoked inside the
      <a
        href="https://vuejs.org/api/composition-api-setup.html"
        target="_blank"
        rel="noopener noreferrer"
        >setup<ExternalLinkIcon
      /></a>
      hook of the client vue app.
    </p>
    <h3 id="use-composition-api" tabindex="-1">
      <a class="header-anchor" href="#use-composition-api" aria-hidden="true"
        >#</a
      >
      Use Composition API
    </h3>
    <p>
      You can take the <code v-pre>setup</code> function as part of the
      <a
        href="https://vuejs.org/api/composition-api-setup.html"
        target="_blank"
        rel="noopener noreferrer"
        >setup<ExternalLinkIcon
      /></a>
      hook of the root component. Thus, all composition APIs are available here.
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// get the current route location</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// get the vue-router instance</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// provide a value that can be injected by layouts, pages and other components</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'count'</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
    <h3 id="use-non-ssr-friendly-features-1" tabindex="-1">
      <a
        class="header-anchor"
        href="#use-non-ssr-friendly-features-1"
        aria-hidden="true"
        >#</a
      >
      Use Non-SSR-Friendly Features
    </h3>
    <p>
      In the <code v-pre>setup</code> function, the
      <RouterLink to="/reference/client-api.html#ssr"
        ><code v-pre>__VUEPRESS_SSR__</code></RouterLink
      >
      flag is also available.
    </p>
    <p>
      Another way to use non-ssr-friendly features is to put them inside the
      <a
        href="https://vuejs.org/api/composition-api-lifecycle.html#onmounted"
        target="_blank"
        rel="noopener noreferrer"
        >onMounted<ExternalLinkIcon
      /></a>
      hook:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// use DOM API after mounted</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
      </div>
    </div>
    <h2 id="rootcomponents" tabindex="-1">
      <a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a>
      rootComponents
    </h2>
    <p>
      The <code v-pre>rootComponents</code> is a components array to be placed
      directly into the root node of the client vue app.
    </p>
    <p>
      Typical usage of this option is to put some global UI components, like
      global popup or so:
    </p>
    <div class="language-typescript ext-ts line-numbers-mode">
      <pre
        v-pre
        class="language-typescript"
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>
<span class="token keyword">import</span> GlobalPopup <span class="token keyword">from</span> <span class="token string">'./components/GlobalPopup.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span>GlobalPopup<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
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
  </div>
</template>
