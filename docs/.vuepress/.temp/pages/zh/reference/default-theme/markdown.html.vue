<template>
  <div>
    <h1 id="markdown" tabindex="-1">
      <a class="header-anchor" href="#markdown" aria-hidden="true">#</a>
      Markdown
    </h1>
    <NpmBadge package="@vuepress/theme-default" />
    <h2 id="自定义容器" tabindex="-1">
      <a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a>
      自定义容器
    </h2>
    <ul>
      <li>
        <p>使用：</p>
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
          <code v-pre>type</code> 是必需的， <code v-pre>title</code> 和
          <code v-pre>content</code> 是可选的。
        </p>
        <p>支持的 <code v-pre>type</code> 有：</p>
        <ul>
          <li><code v-pre>tip</code></li>
          <li><code v-pre>warning</code></li>
          <li><code v-pre>danger</code></li>
          <li><code v-pre>details</code></li>
          <li>
            <RouterLink
              to="/zh/reference/default-theme/components.html#codegroup"
              >CodeGroup</RouterLink
            >
            和
            <RouterLink
              to="/zh/reference/default-theme/components.html#codegroupitem"
              >CodeGroupItem</RouterLink
            >
            的别名：
            <ul>
              <li><code v-pre>code-group</code></li>
              <li><code v-pre>code-group-item</code></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p>示例 1 （默认标题）：</p>
      </li>
    </ul>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
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
    <p><strong>输出</strong></p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>这是一个提示</p>
    </div>
    <div class="custom-container warning">
      <p class="custom-container-title">WARNING</p>
      <p>这是一个警告</p>
    </div>
    <div class="custom-container danger">
      <p class="custom-container-title">DANGER</p>
      <p>这是一个危险警告</p>
    </div>
    <details class="custom-container details">
      <p>这是一个 details 标签</p>
    </details>
    <ul>
      <li>示例 2 （自定义标题）：</li>
    </ul>
    <p><strong>输入</strong></p>
    <div class="language-markdown ext-md line-numbers-mode">
      <pre v-pre class="language-markdown"><code>::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span></span>
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
    <p><strong>输出</strong></p>
    <div class="custom-container danger">
      <p class="custom-container-title">STOP</p>
      <p>危险区域，禁止通行</p>
    </div>
    <details class="custom-container details">
      <summary>点击查看代码</summary>
      <div class="language-javascript ext-js line-numbers-mode">
        <pre
          v-pre
          class="language-javascript"
        ><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span>
</code></pre>
        <div class="line-numbers" aria-hidden="true">
          <div class="line-number"></div>
        </div>
      </div>
    </details>
    <ul>
      <li>示例 3 （Code Group 别名）：</li>
    </ul>
    <p><strong>输入</strong></p>
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
    <p><strong>输出</strong></p>
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
