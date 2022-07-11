<template>
  <div>
    <h1 id="pwa" tabindex="-1">
      <a class="header-anchor" href="#pwa" aria-hidden="true">#</a> pwa
    </h1>
    <NpmBadge package="@vuepress/plugin-pwa" />
    <p>
      使你的 VuePress 站点成为一个
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps"
        target="_blank"
        rel="noopener noreferrer"
        >渐进式 Web 应用 (PWA)<ExternalLinkIcon /></a
      >.
    </p>
    <p>
      该插件使用
      <a
        href="https://developers.google.com/web/tools/workbox/modules/workbox-build"
        target="_blank"
        rel="noopener noreferrer"
        >workbox-build<ExternalLinkIcon
      /></a>
      来生成 Service Worker 文件，并通过
      <a
        href="https://github.com/yyx990803/register-service-worker"
        target="_blank"
        rel="noopener noreferrer"
        >register-service-worker<ExternalLinkIcon
      /></a>
      来注册 Service Worker 。
    </p>
    <h2 id="使用方法" tabindex="-1">
      <a class="header-anchor" href="#使用方法" aria-hidden="true">#</a>
      使用方法
    </h2>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">npm</span> i -D @vuepress/plugin-pwa@next
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code><span class="token keyword">const</span> <span class="token punctuation">{</span> pwaPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vuepress/plugin-pwa'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
    <h2 id="web-app-manifests" tabindex="-1">
      <a class="header-anchor" href="#web-app-manifests" aria-hidden="true"
        >#</a
      >
      Web App Manifests
    </h2>
    <p>
      为了使你的网站符合 PWA 的要求，你需要创建一个
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/Manifest"
        target="_blank"
        rel="noopener noreferrer"
        >Web app manifests<ExternalLinkIcon
      /></a>
      文件，并且为你的 PWA 设置图标、颜色等信息。
    </p>
    <p>
      你需要将你的 Manifest 文件和图标放置在
      <RouterLink to="/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"
        >Public 目录</RouterLink
      >
      下。在下述的示例中，我们假设你正在使用默认的 Public 目录
      <code v-pre>.vuepress/public</code> 。
    </p>
    <ol>
      <li>创建 Manifest 文件</li>
    </ol>
    <p>通常是 <code v-pre>.vuepress/public/manifest.webmanifest</code> ：</p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"VuePress"</span><span class="token punctuation">,</span>
  <span class="token property">"short_name"</span><span class="token operator">:</span> <span class="token string">"VuePress"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Vue-powered Static Site Generator"</span><span class="token punctuation">,</span>
  <span class="token property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/index.html"</span><span class="token punctuation">,</span>
  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
  <span class="token property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
  <span class="token property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#3eaf7c"</span><span class="token punctuation">,</span>
  <span class="token property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icons/android-chrome-192x192.png"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"192x192"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icons/android-chrome-384x384.png"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"384x384"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
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
      </div>
    </div>
    <ol start="2">
      <li>生成 PWA 图标</li>
    </ol>
    <p>
      为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public
      目录下。
    </p>
    <p>确保图标的路径匹配 Manifest 文件中的 <code v-pre>icons</code> 字段：</p>
    <ul>
      <li>
        <code v-pre
          >.vuepress/public/images/icons/android-chrome-192x192.png</code
        >
      </li>
      <li>
        <code v-pre
          >.vuepress/public/images/icons/android-chrome-384x384.png</code
        >
      </li>
    </ul>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        一些工具可以帮助你做这些事。比如
        <a
          href="https://realfavicongenerator.net/"
          target="_blank"
          rel="noopener noreferrer"
          >Favicon Generator<ExternalLinkIcon
        /></a>
        可以帮助你生成图片以及一个 Manifest 文件样例。
      </p>
    </div>
    <ol start="3">
      <li>设置 Head 中的标签</li>
    </ol>
    <p>
      你还需要通过
      <RouterLink to="/zh/reference/config.html#head">head</RouterLink>
      配置项来设置一些标签，用来
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag"
        target="_blank"
        rel="noopener noreferrer"
        >部署你的 Manifest 文件<ExternalLinkIcon
      /></a>
      。
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'manifest'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/manifest.webmanifest'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'meta'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'theme-color'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'#3eaf7c'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ...其他标签</span>
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
    <h2 id="配置项" tabindex="-1">
      <a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项
    </h2>
    <p>
      该插件的配置项可以接收 workbox-build 中
      <a
        href="https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW"
        target="_blank"
        rel="noopener noreferrer"
        >generateSW 方法<ExternalLinkIcon
      /></a>
      除了 <code v-pre>globDirectory</code> 和
      <code v-pre>swDest</code> 以外的所有参数。
    </p>
    <p>
      比如，你可以设置 <code v-pre>skipWaiting: true</code> ，这将在新的 Service
      Worker 就绪之后立即激活它：
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
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
    <p>
      但是如果你不设置 <code v-pre>skipWaiting</code> 或设置为
      <code v-pre>false</code> ，你就需要手动激活新的 Service Worker 。
    </p>
    <ul>
      <li>
        对于用户，你可以配合我们提供的
        <RouterLink to="/zh/reference/plugin/pwa-popup.html"
          >pwa-popup</RouterLink
        >
        插件一起使用。
      </li>
      <li>
        对于开发者，你可以使用该插件提供的
        <a href="#composition-api">Composition API</a> 来控制 Service Worker
        的行为。
      </li>
    </ul>
    <h3 id="serviceworkerfilename" tabindex="-1">
      <a class="header-anchor" href="#serviceworkerfilename" aria-hidden="true"
        >#</a
      >
      serviceWorkerFilename
    </h3>
    <ul>
      <li>
        <p>类型： <code v-pre>string</code></p>
      </li>
      <li>
        <p>默认值： <code v-pre>'service-worker.js'</code></p>
      </li>
      <li>
        <p>详情：</p>
        <p>
          生成的 Service Worker 文件路径，该路径是
          <RouterLink to="/zh/reference/config.html#dest">dest</RouterLink>
          目录的相对路径。
        </p>
        <p>Service Worker 文件只会在 <code v-pre>build</code> 模式下生成。</p>
      </li>
    </ul>
    <h2 id="composition-api" tabindex="-1">
      <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a>
      Composition API
    </h2>
    <h3 id="usepwaevent" tabindex="-1">
      <a class="header-anchor" href="#usepwaevent" aria-hidden="true">#</a>
      usePwaEvent
    </h3>
    <ul>
      <li>
        <p>详情：</p>
        <p>返回该插件的 Event Emitter 。</p>
        <p>
          你可以为
          <a
            href="https://github.com/yyx990803/register-service-worker"
            target="_blank"
            rel="noopener noreferrer"
            >register-service-worker<ExternalLinkIcon
          /></a>
          提供的事件添加事件监听器。
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
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service worker 已经生效。'</span><span class="token punctuation">)</span>
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
      </div>
    </div>
    <h3 id="useskipwaiting" tabindex="-1">
      <a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a>
      useSkipWaiting
    </h3>
    <ul>
      <li>参数：</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>registration</td>
          <td><code v-pre>ServiceWorkerRegistration</code></td>
          <td>你想要激活的 Service Worker 的 Registration</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>详情：</p>
        <p>
          调用
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting"
            target="_blank"
            rel="noopener noreferrer"
            >skipWaiting()<ExternalLinkIcon
          /></a>
          来激活处于 Waiting 状态的 Service Worker 。
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
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  usePwaEvent<span class="token punctuation">,</span>
  useSkipWaiting<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在 Waiting 状态的 Service Worker 已经就绪。'</span><span class="token punctuation">)</span>
      <span class="token comment">// 激活 Waiting 状态的 Service Worker</span>
      <span class="token function">useSkipWaiting</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span>
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
