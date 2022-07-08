import{_ as s,c as n,o as a,a as e}from"./app.d682e3ea.js";const y=JSON.parse('{"title":"\u73B0\u4EE3\u6A21\u5F0F\uFF0C \\"use strict\\"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\\"use strict\\"","slug":"use-strict"},{"level":2,"title":"\u6D4F\u89C8\u5668\u63A7\u5236\u53F0","slug":"\u6D4F\u89C8\u5668\u63A7\u5236\u53F0"},{"level":2,"title":"\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528\\"use strict\\"\u5417\uFF1F","slug":"\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528-use-strict-\u5417\uFF1F"}],"relativePath":"JS/2_3use-strict.md"}'),o={name:"JS/2_3use-strict.md"},t=e(`<h1 id="\u73B0\u4EE3\u6A21\u5F0F\uFF0C-use-strict" tabindex="-1">\u73B0\u4EE3\u6A21\u5F0F\uFF0C &quot;use strict&quot; <a class="header-anchor" href="#\u73B0\u4EE3\u6A21\u5F0F\uFF0C-use-strict" aria-hidden="true">#</a></h1><p>ES5 \u89C4\u8303\u589E\u52A0\u4E86\u65B0\u7684\u8BED\u8A00\u7279\u6027\u5E76\u4E14\u4FEE\u6539\u4E86\u4E00\u4E9B\u5DF2\u7ECF\u5B58\u5728\u7684\u7279\u6027\u3002\u4E3A\u4E86\u4FDD\u8BC1\u65E7\u7684\u529F\u80FD\u80FD\u591F\u4F7F\u7528\uFF0C\u5927\u90E8\u5206\u7684\u4FEE\u6539\u90FD\u662F\u9ED8\u8BA4\u4E0D\u751F\u6548\u7684\u3002\u4F60\u9700\u8981\u4E00\u4E2A\u7279\u6B8A\u7684\u6307\u4EE4--<code>&quot;use strict&quot;</code>\u6765\u660E\u786E\u5730\u6FC0\u6D3B\u8FD9\u4E9B\u7279\u6027\u3002</p><h2 id="use-strict" tabindex="-1">&quot;use strict&quot; <a class="header-anchor" href="#use-strict" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u6307\u4EE4\u770B\u4E0A\u53BB\u50CF\u4E00\u4E2A\u5B57\u7B26\u4E32<code>&quot;use strict&quot;</code>\u540E\u8005<code>&#39;use strict&#39;</code>\u3002\u5F53\u5B83\u5904\u4E8E\u811A\u672C\u6587\u4EF6\u7684\u9876\u90E8\u65F6\uFF0C\u5219\u6574\u4E2A\u811A\u672C\u6587\u4EF6\u90FD\u5C06\u4EE5&quot;\u73B0\u4EE3&quot;\u6A21\u5F0F\u8FDB\u884C\u5DE5\u4F5C\u3002 \u6BD4\u5982:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&quot;use strict&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">//\u4EE3\u7801\u4EE5\u73B0\u4EE3\u6A21\u5F0F\u5DE5\u4F5C</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>&quot;use strict&quot;</code>\u53EF\u4EE5\u88AB\u653E\u5728\u51FD\u6570\u4F53\u7684\u5F00\u5934\u3002\u8FD9\u6837\u5219\u53EF\u4EE5\u53EA\u5728\u8BE5\u51FD\u6570\u4E2D\u542F\u7528\u4E25\u683C\u6A21\u5F0F\u3002\u4F46\u901A\u5E38\u4EBA\u4EEC\u4F1A\u5728\u6574\u4E2A\u811A\u672C\u4E2D\u542F\u7528\u4E25\u683C\u6A21\u5F0F\u3002</p><blockquote><p><strong>\u786E\u4FDD&quot;use strict&quot;\u51FA\u73B0\u5728\u6700\u9876\u90E8</strong> \u8BF7\u786E\u4FDD<code>&quot;use strict&quot;</code>\u51FA\u73B0\u5728\u6700\u9876\u90E8,\u5426\u5219\u4E25\u683C\u6A21\u5F0F\u53EF\u80FD\u65E0\u6CD5\u542F\u7528\u3002 \u8FD9\u91CC\u7684\u4E25\u683C\u6A21\u5F0F\u5C31\u6CA1\u6709\u542F\u7528\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;some code&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//\u4E0B\u9762\u7684&quot;use strict&quot;\u4F1A\u88AB\u5FFD\u7565\uFF0C\u5FC5\u987B\u5728\u6700\u9876\u90E8\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;use strict&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//\u4E25\u683C\u6A21\u5F0F\u6CA1\u6709\u88AB\u6FC0\u6D3B</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EA\u6709\u6CE8\u91CA\u53EF\u4EE5\u51FA\u73B0\u5728<code>&quot;use strict&quot;</code>\u4E0A\u9762\u3002</p></blockquote><blockquote><p><strong>\u6CA1\u6709\u529E\u6CD5\u53D6\u6D88<code>use strict</code></strong> \u6CA1\u6709\u7C7B\u4F3C\u4E8E<code>&quot;no use strict&quot;</code>\u8FD9\u6837\u7684\u6307\u4EE4\u53EF\u4EE5\u4F7F\u7A0B\u5E8F\u8FD4\u56DE\u9ED8\u8BA4\u6A21\u5F0F\u3002 \u4E00\u65E6\u8FDB\u5165\u4E86\u4E25\u683C\u6A21\u5F0F\uFF0C\u5C31\u6CA1\u6709\u56DE\u5934\u8DEF\u4E86\u3002</p></blockquote><h2 id="\u6D4F\u89C8\u5668\u63A7\u5236\u53F0" tabindex="-1">\u6D4F\u89C8\u5668\u63A7\u5236\u53F0 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u63A7\u5236\u53F0" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u4F7F\u7528<a href="https://zh.javascript.info/devtools" target="_blank" rel="noopener noreferrer">\u5F00\u53D1\u8005\u63A7\u5236\u53F0</a>\u8FD0\u884C\u4EE3\u7801\u65F6\uFF0C\u8BF7\u6CE8\u610F\u5B83\u9ED8\u8BA4\u65F6\u4E0D\u542F\u52A8<code>&quot;use strict&quot;</code>\u7684\u3002 \u6709\u65F6\uFF0C\u5F53<code>&quot;use strict&quot;</code>\u4F1A\u5BF9\u4EE3\u7801\u4EA7\u751F\u4E00\u4E9B\u5F71\u54CD\u65F6\uFF0C\u4F60\u4F1A\u5F97\u5230\u9519\u8BEF\u7684\u7ED3\u679C\u3002 \u90A3\u4E48\uFF0C\u600E\u4E48\u5728\u63A7\u5236\u53F0\u4E2D\u542F\u7528<code>use strict</code>\u5462\uFF1F \u9996\u5148\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u642D\u914D\u4F7F\u7528<code>Shift+Enter</code>\u6309\u952E\u53BB\u8F93\u5165\u591A\u884C\u4EE3\u7801\uFF0C\u7136\u540E\u5C06<code>use strict</code>\u653E\u5728\u4EE3\u7801\u6700\u9876\u90E8\uFF0C\u5C31\u50CF\u8FD9\u6837:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&#39;use strict&#39;</span><span style="color:#8E8F8B;">;</span><span style="color:#AB5959;">&lt;</span><span style="color:#8C862B;">Shift</span><span style="color:#AB5959;">+</span><span style="color:#8C862B;">Enter</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">\u6362\u884C</span><span style="color:#AB5959;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">//...\u4F60\u7684\u4EE3\u7801</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">\u6309\u4E0B</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Enter</span><span style="color:#393A34;"> </span><span style="color:#B58451;">\u4EE5\u8FD0\u884C</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B83\u5728\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u4E2D\u90FD\u6709\u6548\uFF0C\u6BD4\u5982 Firefox \u548C Chrome\u3002 \u5982\u679C\u4F9D\u7136\u4E0D\u884C\uFF0C\u4F8B\u5982\u4F60\u4F7F\u7528\u7684\u65F6\u65E7\u7248\u672C\u7684\u6D4F\u89C8\u5668\uFF0C\u90A3\u4E48\u6709\u4E00\u79CD\u5F88\u4E11\u4F46\u53EF\u9760\u7684\u542F\u7528<code>use strict</code>\u7684\u65B9\u6CD5\u3002\u5C06\u4F60\u7684\u4EE3\u7801\u653E\u5728\u8FD9\u6837\u7684\u5305\u88C5\u5668\u4E2D:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B56959;">&quot;use strict&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;">//...\u4F60\u7684\u4EE3\u7801...</span></span>
<span class="line"><span style="color:#8E8F8B;">})();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528-use-strict-\u5417\uFF1F" tabindex="-1">\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528&quot;use strict&quot;\u5417\uFF1F <a class="header-anchor" href="#\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528-use-strict-\u5417\uFF1F" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u597D\u50CF\u663E\u800C\u6613\u89C1\uFF0C\u4F46\u4E8B\u5B9E\u5E76\u975E\u5982\u6B64\u3002 \u6709\u4EBA\u53EF\u80FD\u4F1A\u5EFA\u8BAE\u5728\u811A\u672C\u7684\u6700\u9876\u90E8\u653E\u7F6E<code>&quot;use strict&quot;</code>\u8FD9\u884C\u4EE3\u7801....\u4F46\u4F60\u77E5\u9053\u66F4\u9177\u7684\u65B9\u5F0F\u5417\uFF1F \u73B0\u4EE3 JavaScript \u652F\u6301&quot;class&quot;\u548C&quot;module&quot;--\u9AD8\u7EA7\u8BED\u8A00\u7ED3\u6784\uFF0C\u5B83\u4EEC\u4F1A\u81EA\u52A8\u542F\u7528<code>use strict</code>\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u5B83\u4EEC\uFF0C\u5219\u65E0\u9700\u6DFB\u52A0<code>&quot;use strict&quot;</code>\u547D\u4EE4\u3002 <strong>\u56E0\u6B64\uFF0C\u76EE\u524D\u6211\u4EEC\u6B22\u8FCE\u5C06<code>&quot;use strict&quot;;</code>\u5199\u5728\u811A\u672C\u7684\u9876\u90E8\u3002\u7A0D\u540E\uFF0C\u5F53\u4F60\u7684\u4EE3\u7801\u5168\u5199\u5728 class \u548C module \u4E2D\u65F6\uFF0C\u4F60\u5219\u53EF\u4EE5\u5C06<code>&quot;use strict&quot;;</code>\u8FD9\u884C\u4EE3\u7801\u7701\u7565\u6389\u3002</strong></p>`,15),l=[t];function p(c,r,i,u,d,b){return a(),n("div",null,l)}var m=s(o,[["render",p]]);export{y as __pageData,m as default};
