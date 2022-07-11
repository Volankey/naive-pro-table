<template>
  <div>
    <h1 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      Markdown
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <h2 id="custom-containers" tabindex="-1">
      <a class="header-anchor" href="#custom-containers" aria-hidden="true"
        >#</a
      >
      Custom Containers
    </h2>
    <ul>
      <li>
        <p>Usage:</p>
        <div class="language-markdown ext-md line-numbers-mode">
          <pre
            v-pre
            class="language-markdown"
          ><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [title]
[content]
:::
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
            <div class="line-number"></div>
            <div class="line-number"></div>
          </div>
        </div>
        <p>
          The <code v-pre>type</code> is required, and the
          <code v-pre>title</code> and <code v-pre>content</code> are optional.
        </p>
        <p>Supported <code v-pre>type</code> :</p>
        <ul>
          <li><code v-pre>tip</code></li>
          <li><code v-pre>warning</code></li>
          <li><code v-pre>danger</code></li>
          <li><code v-pre>details</code></li>
          <li>
            Alias of
            <RouterLink to="/reference/default-theme/components.html#codegroup"
              >CodeGroup</RouterLink
            >
            and
            <RouterLink
              to="/reference/default-theme/components.html#codegroupitem"
              >CodeGroupItem</RouterLink
            >:
            <ul>
              <li><code v-pre>code-group</code></li>
              <li><code v-pre>code-group-item</code></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p>Example 1 (default title):</p>
      </li>
    </ul>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::
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
    <p><strong>Output</strong></p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>This is a tip</p>
    </div>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>This is a warning</p>
    </div>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>This is a dangerous warning</p>
    </div>
    <details class="custom-container details">
      <p>This is a details block</p>
    </details>
    <ul>
      <li>Example 2 (custom title):</li>
    </ul>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span></span>
<span class="token punctuation">```</span></span>
:::
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
    <p><strong>Output</strong></p>
    <div class="custom-container danger">
      <p class="custom-container-title">STOP</p>
      <p>Danger zone, do not proceed</p>
    </div>
    <details class="custom-container details">
      <summary>Click me to view the code</summary>
      <div class="language-javascript ext-js line-numbers-mode">
        <pre
          v-pre
          class="language-javascript"
        ><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span>
</code></pre>
        <div class="line-numbers" aria-hidden="true">
          <div class="line-number"></div>
        </div>
      </div>
    </details>
    <ul>
      <li>Example 3 (code group alias):</li>
    </ul>
    <p><strong>Input</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>:::: code-group
::: code-group-item FOO
<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span></span>
<span class="token punctuation">```</span></span>
:::
::: code-group-item BAR
<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span></span>
<span class="token punctuation">```</span></span>
:::
::::
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
      </div>
    </div>
    <p><strong>Output</strong></p>
    <CodeGroup>
      <CodeGroupItem title="FOO">
        <div class="language-javascript ext-js line-numbers-mode">
          <pre
            v-pre
            class="language-javascript"
          ><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
          </div></div
      ></CodeGroupItem>
      <CodeGroupItem title="BAR">
        <div class="language-javascript ext-js line-numbers-mode">
          <pre
            v-pre
            class="language-javascript"
          ><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span>
</code></pre>
          <div class="line-numbers" aria-hidden="true">
            <div class="line-number"></div>
          </div></div
      ></CodeGroupItem>
    </CodeGroup>
  </div>
</template>
