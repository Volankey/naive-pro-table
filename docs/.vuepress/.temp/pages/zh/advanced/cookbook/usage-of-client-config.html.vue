<template>
  <div>
    <h1 id="客户端配置的使用方法" tabindex="-1">
      <a class="header-anchor" href="#客户端配置的使用方法" aria-hidden="true"
        >#</a
      >
      客户端配置的使用方法
    </h1>
    <p>
      你可以直接在你的项目中使用
      <RouterLink
        to="/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"
        >客户端配置文件</RouterLink
      >
      。或者，在你的插件或者主题中，使用
      <RouterLink to="/zh/reference/plugin-api.html#clientconfigfile"
        >clientConfigFile</RouterLink
      >
      Hook ：
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
      在客户端配置文件中，<code v-pre>@vuepress/client</code> 包提供了一个
      <RouterLink to="/zh/reference/client-api.html#defineclientconfig"
        >defineClientConfig</RouterLink
      >
      函数来帮助你定义客户端配置：
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
      <code v-pre>enhance</code> 函数既可以是同步的，也可以是异步的。它接收一个
      Context 参数，包含以下属性：
    </p>
    <ul>
      <li>
        <code v-pre>app</code> 是由
        <a
          href="https://staging-cn.vuejs.org/api/application.html#create-app"
          target="_blank"
          rel="noopener noreferrer"
          >createApp<ExternalLinkIcon
        /></a>
        创建的 Vue 应用实例。
      </li>
      <li>
        <code v-pre>router</code> 是由
        <a
          href="https://router.vuejs.org/zh/api/index.html#createrouter"
          target="_blank"
          rel="noopener noreferrer"
          >createRouter<ExternalLinkIcon
        /></a>
        创建的路由实例。
      </li>
      <li>
        <code v-pre>siteData</code> 是一个根据用户配置生成的 Ref 对象，包含
        <RouterLink to="/zh/reference/config.html#base">base</RouterLink>,
        <RouterLink to="/zh/reference/config.html#lang">lang</RouterLink>,
        <RouterLink to="/zh/reference/config.html#title">title</RouterLink>,
        <RouterLink to="/zh/reference/config.html#description"
          >description</RouterLink
        >, <RouterLink to="/zh/reference/config.html#head">head</RouterLink> 和
        <RouterLink to="/zh/reference/config.html#locales">locales</RouterLink
        >。
      </li>
    </ul>
    <p>
      <code v-pre>enhance</code> 函数会在客户端应用创建后被调用，你可以对 Vue
      应用添加各种能力。
    </p>
    <h3 id="注册-vue-组件" tabindex="-1">
      <a class="header-anchor" href="#注册-vue-组件" aria-hidden="true">#</a>
      注册 Vue 组件
    </h3>
    <p>
      你可以通过
      <a
        href="https://staging-cn.vuejs.org/api/application.html#app-component"
        target="_blank"
        rel="noopener noreferrer"
        >app.component<ExternalLinkIcon
      /></a>
      方法来注册 Vue 全局组件：
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
    <h3 id="使用不支持-ssr-的功能" tabindex="-1">
      <a class="header-anchor" href="#使用不支持-ssr-的功能" aria-hidden="true"
        >#</a
      >
      使用不支持 SSR 的功能
    </h3>
    <p>
      VuePress 会在构建过程中生成一个 SSR
      应用，用以对页面进行预渲染。一般而言，如果一段代码在客户端应用 Mount
      之前就使用了浏览器或 DOM API ，我们就认为其对 SSR 不友好，即不支持 SSR 。
    </p>
    <p>
      我们已经提供了一个
      <RouterLink to="/zh/reference/components.html#clientonly"
        >ClientOnly</RouterLink
      >
      组件来包裹不支持 SSR 的内容。
    </p>
    <p>
      在 <code v-pre>enhance</code> 函数中，你可以使用
      <RouterLink to="/zh/reference/client-api.html#ssr"
        ><code v-pre>__VUEPRESS_SSR__</code></RouterLink
      >
      标记来处理这种情况。
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
    <h3 id="使用-router-方法" tabindex="-1">
      <a class="header-anchor" href="#使用-router-方法" aria-hidden="true">#</a>
      使用 Router 方法
    </h3>
    <p>
      你可以使用 vue-router 提供的
      <a
        href="https://router.vuejs.org/zh/api/index.html#router-%E6%96%B9%E6%B3%95"
        target="_blank"
        rel="noopener noreferrer"
        >Router 方法<ExternalLinkIcon
      /></a>
      。例如，添加导航钩子：
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
        我们不推荐使用
        <code v-pre>addRoute</code> 方法来添加动态路由，因为这些路由记录
        <strong>不会</strong> 在构建模式中被预渲染出来。
      </p>
      <p>当然，如果你了解了这种用法的缺点，你还是可以这样使用。</p>
    </div>
    <h2 id="setup" tabindex="-1">
      <a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup
    </h2>
    <p>
      <code v-pre>setup</code> 函数会在客户端 Vue 应用的
      <a
        href="https://staging-cn.vuejs.org/api/composition-api-setup.html"
        target="_blank"
        rel="noopener noreferrer"
        >setup<ExternalLinkIcon
      /></a>
      Hook 中被调用。
    </p>
    <h3 id="使用组合式-api" tabindex="-1">
      <a class="header-anchor" href="#使用组合式-api" aria-hidden="true">#</a>
      使用组合式 API
    </h3>
    <p>
      你可以把 <code v-pre>setup</code> 函数当作根组件的
      <a
        href="https://staging-cn.vuejs.org/api/composition-api-setup.html"
        target="_blank"
        rel="noopener noreferrer"
        >setup<ExternalLinkIcon
      /></a>
      Hook 中的一部分。因此，所有的组合式 API 都可以在这里使用。
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
    <span class="token comment">// 获取当前的路由位置</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 或者 vue-router 实例</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 供给一个值，可以被布局、页面和其他组件注入</span>
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
    <h3 id="使用不支持-ssr-的功能-1" tabindex="-1">
      <a
        class="header-anchor"
        href="#使用不支持-ssr-的功能-1"
        aria-hidden="true"
        >#</a
      >
      使用不支持 SSR 的功能
    </h3>
    <p>
      在 <code v-pre>setup</code> 函数中，<RouterLink
        to="/zh/reference/client-api.html#ssr"
        ><code v-pre>__VUEPRESS_SSR__</code></RouterLink
      >
      标记同样可用。
    </p>
    <p>
      使用不支持 SSR 的功能的另一种方式就是将他们放在
      <a
        href="https://staging-cn.vuejs.org/api/composition-api-lifecycle.html#onmounted"
        target="_blank"
        rel="noopener noreferrer"
        >onMounted<ExternalLinkIcon
      /></a>
      Hook 中：
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
      <span class="token comment">// 在 mounted 之后使用 DOM API</span>
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
      <code v-pre>rootComponents</code>
      是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。
    </p>
    <p>该选项的典型使用方式就是放置一些全局的 UI 组件，比如全局弹窗等：</p>
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
