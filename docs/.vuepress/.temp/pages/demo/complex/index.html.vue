<template>
  <div>
    <h1 id="复杂示例" tabindex="-1">
      <a class="header-anchor" href="#复杂示例" aria-hidden="true">#</a>
      复杂示例
    </h1>
    <ClientOnly>
      <ComplexDemo />
    </ClientOnly>
    <div class="language-vue ext-vue line-numbers-mode">
      <pre
        v-pre
        class="shiki"
        style="background-color: #1e1e1e"
      ><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">template</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #808080">&lt;</span><span style="color: #569CD6">div</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    name:</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #808080">&lt;</span><span style="color: #569CD6">n-input</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">customParamsStore</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">customParamsValue</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">search</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">style</span><span style="color: #D4D4D4">=</span><span style="color: #CE9178">&quot;width: 300px&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      @</span><span style="color: #9CDCFE">update</span><span style="color: #D4D4D4">:</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">customParamsStore</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">updateCustomParams</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;search&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">$event</span><span style="color: #D4D4D4">)</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #808080">&gt;&lt;/</span><span style="color: #569CD6">n-input</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    age:</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #808080">&lt;</span><span style="color: #569CD6">n-input-number</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">customParamsStore</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">customParamsValue</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">age</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">style</span><span style="color: #D4D4D4">=</span><span style="color: #CE9178">&quot;width: 300px; display: inline-block&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      @</span><span style="color: #9CDCFE">update</span><span style="color: #D4D4D4">:</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">customParamsStore</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">updateCustomParams</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;age&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">$event</span><span style="color: #D4D4D4">)</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #808080">&gt;&lt;/</span><span style="color: #569CD6">n-input-number</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0">ProTable</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">ref</span><span style="color: #D4D4D4">=</span><span style="color: #CE9178">&quot;proTableRef&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">style</span><span style="color: #D4D4D4">=</span><span style="color: #CE9178">&quot;margin-top: 20px&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">columns</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">columns</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">api-request</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">apiRequest</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">pagination</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #D4D4D4">{</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">showSizePicker:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">showQuickJumper:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">defaultPageSize:</span><span style="color: #D4D4D4"> </span><span style="color: #B5CEA8">14</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">defaultPage:</span><span style="color: #D4D4D4"> </span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">pageSizes:</span><span style="color: #D4D4D4"> [</span><span style="color: #B5CEA8">14</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">20</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">50</span><span style="color: #D4D4D4">]</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">date-formatter</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #CE9178">&#39;dd/MM/yyyy&#39;</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">customParamsStore</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #9CDCFE">customParamsStore</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">      :</span><span style="color: #9CDCFE">data-table-props</span><span style="color: #D4D4D4">=</span><span style="color: #D4D4D4">&quot;</span><span style="color: #D4D4D4">{</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">rowClassName:</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">rowClassName</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">maxHeight:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;500px&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span><span style="color: #D4D4D4">&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">    /</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #808080">&lt;/</span><span style="color: #569CD6">div</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">template</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">script</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">lang</span><span style="color: #D4D4D4">=</span><span style="color: #CE9178">&quot;ts&quot;</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">setup</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">NTag</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">NInput</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">NInputNumber</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;naive-ui&#39;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">h</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">ref</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">ProTable</span><span style="color: #D4D4D4">, { </span><span style="color: #9CDCFE">useCustomParamsStore</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;naive-ui-protable-alpha&#39;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">type</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">ApiRequest</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">ProColumn</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">ProTableIns</span></span>
<span class="line"><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;naive-ui-protable-alpha&#39;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">useRouter</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">router</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">useRouter</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #9CDCFE">console</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">log</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createSourceData</span><span style="color: #D4D4D4"> = (</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">: { </span><span style="color: #9CDCFE">age</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">; </span><span style="color: #9CDCFE">search</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4"> },</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">sort</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">any</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">filter</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">any</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">page</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">pageSize</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">): { </span><span style="color: #9CDCFE">pageSize</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">; </span><span style="color: #9CDCFE">itemCount</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">; </span><span style="color: #9CDCFE">data</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">Column</span><span style="color: #D4D4D4">[] } </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">data</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">Column</span><span style="color: #D4D4D4">[] = </span><span style="color: #569CD6">new</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Array</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">pageSize</span><span style="color: #D4D4D4">).</span><span style="color: #DCDCAA">fill</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">).</span><span style="color: #DCDCAA">map</span><span style="color: #D4D4D4">((</span><span style="color: #9CDCFE">_</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">idx</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> ({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">name:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;Jonny&#39;</span><span style="color: #D4D4D4"> + ((</span><span style="color: #9CDCFE">page</span><span style="color: #D4D4D4"> - </span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">) * </span><span style="color: #9CDCFE">pageSize</span><span style="color: #D4D4D4"> + </span><span style="color: #9CDCFE">idx</span><span style="color: #D4D4D4">) + </span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">search</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">age:</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">age</span><span style="color: #D4D4D4"> ? </span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">age</span><span style="color: #D4D4D4"> : </span><span style="color: #B5CEA8">10</span><span style="color: #D4D4D4"> + </span><span style="color: #9CDCFE">idx</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">sex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;man&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">favorates:</span><span style="color: #D4D4D4"> [</span><span style="color: #CE9178">&#39;pinao&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #CE9178">&#39;gita&#39;</span><span style="color: #D4D4D4">],</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">avatar:</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #CE9178">&#39;https://camo.githubusercontent.com/b8ebecade711b9ae1fa306e7a1c9dd680fb56b0e2b9f015fec9cbad343570353/68747470733a2f2f6e6169766575692e6f73732d636e2d686f6e676b6f6e672e616c6979756e63732e636f6d2f6e616976656c6f676f2e737667&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">birthday:</span><span style="color: #D4D4D4"> +</span><span style="color: #569CD6">new</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Date</span><span style="color: #D4D4D4">() - (</span><span style="color: #B5CEA8">10</span><span style="color: #D4D4D4"> + </span><span style="color: #9CDCFE">idx</span><span style="color: #D4D4D4">) * </span><span style="color: #B5CEA8">3600</span><span style="color: #D4D4D4"> * </span><span style="color: #B5CEA8">1000</span><span style="color: #D4D4D4"> * </span><span style="color: #B5CEA8">24</span><span style="color: #D4D4D4"> * </span><span style="color: #B5CEA8">365</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">lastLogin:</span><span style="color: #D4D4D4"> +</span><span style="color: #569CD6">new</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Date</span><span style="color: #D4D4D4">() - (</span><span style="color: #B5CEA8">10</span><span style="color: #D4D4D4"> + </span><span style="color: #9CDCFE">idx</span><span style="color: #D4D4D4">) * </span><span style="color: #4EC9B0">Math</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">random</span><span style="color: #D4D4D4">() * </span><span style="color: #B5CEA8">3600</span><span style="color: #D4D4D4"> * </span><span style="color: #B5CEA8">24</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">otherInfo:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">parents:</span><span style="color: #D4D4D4"> [</span><span style="color: #CE9178">&#39;Jan&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #CE9178">&#39;Pony&#39;</span><span style="color: #D4D4D4">]</span></span>
<span class="line"><span style="color: #D4D4D4">    }</span></span>
<span class="line"><span style="color: #D4D4D4">  }))</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">return</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">pageSize:</span><span style="color: #D4D4D4"> </span><span style="color: #B5CEA8">14</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">itemCount:</span><span style="color: #D4D4D4"> </span><span style="color: #B5CEA8">50</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">data</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">customParamsStore</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">useCustomParamsStore</span><span style="color: #D4D4D4">&lt;{</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">search</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4"> | </span><span style="color: #4EC9B0">null</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">age</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4"> | </span><span style="color: #4EC9B0">null</span></span>
<span class="line"><span style="color: #D4D4D4">}&gt;(</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">search:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">null</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">age:</span><span style="color: #D4D4D4"> </span><span style="color: #B5CEA8">1</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">age:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">type:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;number&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #DCDCAA">transform</span><span style="color: #9CDCFE">:</span><span style="color: #D4D4D4"> (</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #C586C0">return</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">parseInt</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span></span>
<span class="line"><span style="color: #D4D4D4">    }</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">type</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Column</span><span style="color: #D4D4D4"> = {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">name</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">age</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">birthday</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">lastLogin</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">sex</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">&#39;man&#39;</span><span style="color: #D4D4D4"> | </span><span style="color: #CE9178">&#39;woman&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">favorates</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">[]</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">otherInfo</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">parents</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">[]</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">proTableRef</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">ref</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">ProTableIns</span><span style="color: #D4D4D4"> | </span><span style="color: #4EC9B0">null</span><span style="color: #D4D4D4">&gt;(</span><span style="color: #569CD6">null</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">columns</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">ref</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">ProColumn</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">Column</span><span style="color: #D4D4D4">&gt;[]&gt;([</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;name&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;name&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">key:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;name&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">ellipsis:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">copyable:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;age&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;age&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">key:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;age&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">sorter:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">sortOrder:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">false</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">syncRouteSorter:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">name:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;age&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">rule:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">type:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;string&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span></span>
<span class="line"><span style="color: #D4D4D4">    }</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;sex&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;sex&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">key:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;sex&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">filter:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">sorter:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">sortOrder:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">false</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">syncRouteSorter:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">name:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;sexsort&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">rule:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">type:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;string&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span></span>
<span class="line"><span style="color: #D4D4D4">    },</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">syncRouteFilter:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">name:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;sexfilter&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">rule:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">type:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;array&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span></span>
<span class="line"><span style="color: #D4D4D4">    },</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">valueEnum:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">all:</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">label:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;全部&#39;</span><span style="color: #D4D4D4"> },</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">man:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">label:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;男&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">      },</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #9CDCFE">woman:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">label:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;女&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">disabled:</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">true</span></span>
<span class="line"><span style="color: #D4D4D4">      }</span></span>
<span class="line"><span style="color: #D4D4D4">    }</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;birthday&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;birthday&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">valueType:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;date&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;last login&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;lastLogin&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">valueType:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;fromNow&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;favoraties&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;favorates&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">key:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;favorates&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #DCDCAA">render</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">favorates</span><span style="color: #D4D4D4">) {</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #C586C0">return</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">favorates</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">map</span><span style="color: #D4D4D4">((</span><span style="color: #9CDCFE">favorate</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #DCDCAA">h</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">NTag</span><span style="color: #D4D4D4">, { </span><span style="color: #9CDCFE">style:</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">marginRight:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;10px&#39;</span><span style="color: #D4D4D4"> } }, { </span><span style="color: #DCDCAA">default</span><span style="color: #9CDCFE">:</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">favorate</span><span style="color: #D4D4D4"> })</span></span>
<span class="line"><span style="color: #D4D4D4">      )</span></span>
<span class="line"><span style="color: #D4D4D4">    }</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;avatar&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;avatar&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">valueType:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;img&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">  },</span></span>
<span class="line"><span style="color: #D4D4D4">  {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">title:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;parents&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">key:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;parents&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">dataIndex:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;otherInfo.parents&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">])</span></span>
<span class="line"><span style="color: #569CD6">function</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">rowClassName</span><span style="color: #D4D4D4">() {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">return</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;td-relative&#39;</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">apiRequest</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">ApiRequest</span><span style="color: #D4D4D4"> = (</span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">sort</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">filter</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">page</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">pageSize</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">console</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">log</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;fetch query: &#39;</span><span style="color: #D4D4D4">, {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">sort</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">filter</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">page</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">pageSize</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">return</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">resolve</span><span style="color: #D4D4D4">(</span><span style="color: #DCDCAA">createSourceData</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">params</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">sort</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">filter</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">page</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">pageSize</span><span style="color: #D4D4D4">))</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">style</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D7BA7D">.td-relative</span><span style="color: #D4D4D4"> </span><span style="color: #D7BA7D">.n-data-table-td</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">position</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">relative</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">style</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre>
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
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
  </div>
</template>
