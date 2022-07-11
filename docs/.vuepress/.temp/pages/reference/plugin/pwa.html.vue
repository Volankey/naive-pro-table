<template>
  <div>
    <h1 id="pwa" tabindex="-1">
      <a class="header-anchor" href="#pwa" aria-hidden="true">#</a> pwa
    </h1>
    <NpmBadge package="@vuepress/plugin-pwa" />
    <p>
      Make your VuePress site a
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
        target="_blank"
        rel="noopener noreferrer"
        >Progressive Web Application (PWA)<ExternalLinkIcon /></a
      >.
    </p>
    <p>
      This plugin uses
      <a
        href="https://developers.google.com/web/tools/workbox/modules/workbox-build"
        target="_blank"
        rel="noopener noreferrer"
        >workbox-build<ExternalLinkIcon
      /></a>
      to generate service worker file, and uses
      <a
        href="https://github.com/yyx990803/register-service-worker"
        target="_blank"
        rel="noopener noreferrer"
        >register-service-worker<ExternalLinkIcon
      /></a>
      to register service worker.
    </p>
    <h2 id="usage" tabindex="-1">
      <a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage
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
    <h2 id="web-app-manifests" tabindex="-1">
      <a class="header-anchor" href="#web-app-manifests" aria-hidden="true"
        >#</a
      >
      Web App Manifests
    </h2>
    <p>
      To make your website fully compliant with PWA, you need to create a
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Manifest"
        target="_blank"
        rel="noopener noreferrer"
        >Web app manifests<ExternalLinkIcon
      /></a>
      file and set the icons, colors, etc. for your PWA.
    </p>
    <p>
      You need to put your manifest file and icons into the
      <RouterLink to="/guide/assets.html#public-files"
        >public files directory</RouterLink
      >. In the following example, we assume that you are using the default
      public directory <code v-pre>.vuepress/public</code>.
    </p>
    <ol>
      <li>Create manifest file</li>
    </ol>
    <p>Typically <code v-pre>.vuepress/public/manifest.webmanifest</code>:</p>
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
      <li>Generate PWA icons</li>
    </ol>
    <p>
      To make your PWA more accessible, you need to generate some icons, and put
      them inside the public directory.
    </p>
    <p>
      Make sure the path of icons matches the <code v-pre>icons</code> field in
      your manifest file:
    </p>
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
        Some tools can help to do that. For example,
        <a
          href="https://realfavicongenerator.net/"
          target="_blank"
          rel="noopener noreferrer"
          >Favicon Generator<ExternalLinkIcon
        /></a>
        would help you to generate icons together with a sample manifest file.
      </p>
    </div>
    <ol start="3">
      <li>Set tags in head</li>
    </ol>
    <p>
      You also need to set some tags via
      <RouterLink to="/reference/config.html#head">head</RouterLink> option to
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag"
        target="_blank"
        rel="noopener noreferrer"
        >deploy the manifest<ExternalLinkIcon /></a
      >:
    </p>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'manifest'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/manifest.webmanifest'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'meta'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'theme-color'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'#3eaf7c'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ...other tags</span>
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
    <h2 id="options" tabindex="-1">
      <a class="header-anchor" href="#options" aria-hidden="true">#</a> Options
    </h2>
    <p>
      This plugin accepts all parameters of workbox-build's
      <a
        href="https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW"
        target="_blank"
        rel="noopener noreferrer"
        >generateSW method<ExternalLinkIcon
      /></a>
      in its options, except <code v-pre>globDirectory</code> and
      <code v-pre>swDest</code>.
    </p>
    <p>
      For example, you can set <code v-pre>skipWaiting: true</code> to auto
      activate the new service worker once it is ready:
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
      But if you omit <code v-pre>skipWaiting</code> or set it to
      <code v-pre>false</code>, you have to activate the new service worker
      manually:
    </p>
    <ul>
      <li>
        For users, you can use our
        <RouterLink to="/reference/plugin/pwa-popup.html">pwa-popup</RouterLink>
        plugin together.
      </li>
      <li>
        For developers, you can use our
        <a href="#composition-api">composition API</a> to take control of the
        service worker behavior.
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
        <p>Type: <code v-pre>string</code></p>
      </li>
      <li>
        <p>Default: <code v-pre>'service-worker.js'</code></p>
      </li>
      <li>
        <p>Details:</p>
        <p>
          File path of the generated service worker file, which is relative to
          the
          <RouterLink to="/reference/config.html#dest">dest</RouterLink>
          directory.
        </p>
        <p>
          The service worker file will only be generated in
          <code v-pre>build</code> mode.
        </p>
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
        <p>Details:</p>
        <p>Returns the event emitter of this plugin.</p>
        <p>
          You can add listener function to events that provided by
          <a
            href="https://github.com/yyx990803/register-service-worker"
            target="_blank"
            rel="noopener noreferrer"
            >register-service-worker<ExternalLinkIcon /></a
          >.
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
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service worker is active.'</span><span class="token punctuation">)</span>
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
      <li>Parameters:</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>registration</td>
          <td><code v-pre>ServiceWorkerRegistration</code></td>
          <td>The registration of the service worker you want activate</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <p>Details:</p>
        <p>
          Call
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting"
            target="_blank"
            rel="noopener noreferrer"
            >skipWaiting()<ExternalLinkIcon
          /></a>
          to activate the waiting service worker.
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
      ><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  usePwaEvent<span class="token punctuation">,</span>
  useSkipWaiting<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The waiting service worker is available.'</span><span class="token punctuation">)</span>
      <span class="token comment">// activate the waiting service worker</span>
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
