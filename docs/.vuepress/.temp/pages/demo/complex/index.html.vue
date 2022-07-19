<template>
  <div>
    <h1 id="复杂示例" tabindex="-1">
      <a class="header-anchor" href="#复杂示例" aria-hidden="true">#</a>
      复杂示例
    </h1>
    <ComplexDemo />
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="language-vue"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    name:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-input</span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customParamsStore.customParamsValue.value.search<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 300px</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name"><span class="token namespace">@update:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customParamsStore.updateCustomParams(<span class="token punctuation">'</span>search<span class="token punctuation">'</span>, $event)<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-input</span><span class="token punctuation">></span></span>
    age:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-input-number</span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customParamsStore.customParamsValue.value.age<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> inline-block</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name"><span class="token namespace">@update:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customParamsStore.updateCustomParams(<span class="token punctuation">'</span>age<span class="token punctuation">'</span>, $event)<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-input-number</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProTable</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>proTableRef<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
      <span class="token attr-name">:api-request</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apiRequest<span class="token punctuation">"</span></span>
      <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
        showSizePicker: true,
        showQuickJumper: true,
        defaultPageSize: 14,
        defaultPage: 1,
        pageSizes: [14, 20, 50]
      }<span class="token punctuation">"</span></span>
      <span class="token attr-name">:date-formatter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>dd/MM/yyyy<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
      <span class="token attr-name">:customParamsStore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customParamsStore<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data-table-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
        rowClassName: rowClassName,
        maxHeight: <span class="token punctuation">'</span>500px<span class="token punctuation">'</span>
      }<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> NTag<span class="token punctuation">,</span> NInput<span class="token punctuation">,</span> NInputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'naive-ui'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> ProTable<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCustomParamsStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'naive-ui-protable-alpha'</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span>
  ApiRequest<span class="token punctuation">,</span>
  ProColumn<span class="token punctuation">,</span>
  ProTableIns
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'naive-ui-protable-alpha'</span>

<span class="token keyword">const</span> createSourceData <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> search<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sort</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> number
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pageSize</span><span class="token operator">:</span> number<span class="token punctuation">;</span> itemCount<span class="token operator">:</span> number<span class="token punctuation">;</span> data<span class="token operator">:</span> Column<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">data</span><span class="token operator">:</span> Column<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jonny'</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize <span class="token operator">+</span> idx<span class="token punctuation">)</span> <span class="token operator">+</span> params<span class="token punctuation">.</span>search<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> params<span class="token punctuation">.</span>age <span class="token operator">?</span> params<span class="token punctuation">.</span>age <span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">+</span> idx<span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'man'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">favorates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'pinao'</span><span class="token punctuation">,</span> <span class="token string">'gita'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span>
      <span class="token string">'https://camo.githubusercontent.com/b8ebecade711b9ae1fa306e7a1c9dd680fb56b0e2b9f015fec9cbad343570353/68747470733a2f2f6e6169766575692e6f73732d636e2d686f6e676b6f6e672e616c6979756e63732e636f6d2f6e616976656c6f676f2e737667'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> idx<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">365</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastLogin</span><span class="token operator">:</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> idx<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">parents</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Jan'</span><span class="token punctuation">,</span> <span class="token string">'Pony'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token literal-property property">itemCount</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> customParamsStore <span class="token operator">=</span> useCustomParamsStore<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">transform</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

type Column <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
  <span class="token literal-property property">birthday</span><span class="token operator">:</span> number
  <span class="token literal-property property">lastLogin</span><span class="token operator">:</span> number
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'man'</span> <span class="token operator">|</span> <span class="token string">'woman'</span>
  <span class="token literal-property property">favorates</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token literal-property property">otherInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parents</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> proTableRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>ProTableIns <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> columns <span class="token operator">=</span> ref<span class="token operator">&lt;</span>ProColumn<span class="token operator">&lt;</span>Column<span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ellipsis</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">copyable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sorter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortOrder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">syncRouteSorter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sorter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortOrder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">syncRouteSorter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'sexsort'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">syncRouteFilter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'sexfilter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueEnum</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'全部'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">man</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'男'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">woman</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'女'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'birthday'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'birthday'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span> <span class="token string">'date'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'last login'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'lastLogin'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span> <span class="token string">'fromNow'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'favoraties'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'favorates'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'favorates'</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">favorates</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> favorates<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">favorate</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token function">h</span><span class="token punctuation">(</span>NTag<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> favorate <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'avatar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'avatar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueType</span><span class="token operator">:</span> <span class="token string">'img'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parents'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'parents'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'otherInfo.parents'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">rowClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'td-relative'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">apiRequest</span><span class="token operator">:</span> <span class="token function-variable function">ApiRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params<span class="token punctuation">,</span> sort<span class="token punctuation">,</span> filter<span class="token punctuation">,</span> page<span class="token punctuation">,</span> pageSize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetch query: '</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">,</span>
    sort<span class="token punctuation">,</span>
    filter<span class="token punctuation">,</span>
    page<span class="token punctuation">,</span>
    pageSize
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">createSourceData</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> sort<span class="token punctuation">,</span> filter<span class="token punctuation">,</span> page<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.td-relative .n-data-table-td</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
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
  </div>
</template>
