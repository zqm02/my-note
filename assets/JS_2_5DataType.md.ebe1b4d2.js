import{_ as s,c as n,o as a,a as e}from"./app.dce0d7ba.js";const b=JSON.parse('{"title":"\u6570\u636E\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"Number \u7C7B\u578B","slug":"number-\u7C7B\u578B"},{"level":2,"title":"BigInt \u7C7B\u578B","slug":"bigint-\u7C7B\u578B"},{"level":2,"title":"String \u7C7B\u578B","slug":"string-\u7C7B\u578B"},{"level":2,"title":"Boolean \u7C7B\u578B(\u903B\u8F91\u7C7B\u578B)","slug":"boolean-\u7C7B\u578B-\u903B\u8F91\u7C7B\u578B"},{"level":2,"title":"null \u503C","slug":"null-\u503C"},{"level":2,"title":"undefined \u503C","slug":"undefined-\u503C"},{"level":2,"title":"Object \u7C7B\u578B\u548C Symbol \u7C7B\u578B","slug":"object-\u7C7B\u578B\u548C-symbol-\u7C7B\u578B"},{"level":2,"title":"typeof \u8FD0\u7B97\u7B26","slug":"typeof-\u8FD0\u7B97\u7B26"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"JS/2_5DataType.md"}'),l={name:"JS/2_5DataType.md"},o=e(`<h1 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h1><p>JavaScript \u4E2D\u7684\u503C\u90FD\u662F\u5177\u6709\u7279\u5B9A\u5C5E\u6027\u7684\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5B57\u7B26\u4E32\u6216\u6570\u5B57\u3002 \u5728 JavaScript \u4E2D\u6709 8 \u4E2D\u6570\u636E\u7C7B\u578B(\u6CE8\u91CA\uFF1A7 \u4E2D\u539F\u59CB\u7C7B\u578B 1 \u4E2D\u5F15\u7528\u7C7B\u578B)\u3002 \u6211\u4EEC\u53EF\u4EE5\u5C06\u4EFB\u4F55\u7C7B\u578B\u7684\u503C\u5B58\u5165\u53D8\u91CF\u3002\u4F8B\u5982\uFF1A\u4E00\u4E2A\u53D8\u91CF\u53EF\u4EE5\u5728\u524D\u4E00\u523B\u662F\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E0B\u4E00\u523B\u5C31\u5B58\u50A8\u4E00\u4E2A\u6570\u5B57\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A0ADA0;">//\u6CA1\u6709\u9519\u8BEF</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">message</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;hello&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#8C862B;">message</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">123456</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5141\u8BB8\u8FD9\u79CD\u64CD\u4F5C\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4F8B\u5982\uFF1AJavaScript\uFF0C\u88AB\u79F0\u4E3A&quot;\u52A8\u6001\u7C7B\u578B&quot;(dynamically typed)\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u610F\u601D\u662F\u867D\u7136\u7F16\u7A0B\u8BED\u8A00\u4E2D\u6709\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4F46\u662F\u4F60\u5B9A\u4E49\u7684\u53D8\u91CF\u5E76\u4E0D\u4F1A\u5728\u5B9A\u4E49\u540E\uFF0C\u88AB\u9650\u5236\u4E3A\u67D0\u4E00\u6570\u636E\u7C7B\u578B\u3002</p><h2 id="number-\u7C7B\u578B" tabindex="-1">Number \u7C7B\u578B <a class="header-anchor" href="#number-\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">n</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">123</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#8C862B;">n</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">12.345</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>number \u7C7B\u578B\u4EE3\u8868\u6574\u6570\u548C\u6D6E\u70B9\u6570\u3002 \u6570\u5B57\u53EF\u4EE5\u6709\u5F88\u591A\u64CD\u4F5C\uFF0C\u6BD4\u5982\uFF1A\u4E58\u6CD5<code>*</code>,\u9664\u6CD5<code>/</code>,\u52A0\u6CD5<code>+</code>,\u51CF\u6CD5<code>-</code>\u7B49\u7B49\u3002 \u9664\u4E86\u5E38\u89C4\u7684\u6570\u5B57\uFF0C\u8FD8\u5305\u62EC\u6240\u8C13\u7684&quot;\u7279\u6B8A\u6570\u503C(\u201Cspecial numeric values\u201D)&quot;\u4E5F\u5C5E\u4E8E\u8FD9\u79CD\u7C7B\u578B\uFF1A<code>Infinity</code>\u3001<code>-Infinity</code>\u548C<code>NaN</code>\u3002</p><ul><li><p><code>Infinity</code>\u4EE3\u8868\u6570\u5B66\u6982\u5FF5\u4E2D\u7684<a href="https://en.wikipedia.org/wiki/Infinity" target="_blank" rel="noopener noreferrer">\u65E0\u7A77\u5927</a>\u221E\u3002\u662F\u4E00\u4E2A\u6BD4\u4EFB\u4F55\u6570\u5B57\u90FD\u5927\u7684\u7279\u6B8A\u503C\u3002 \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9664\u4EE5 0 \u6765\u5F97\u5230\u5B83\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">1</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">/</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// Infinity</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6216\u8005\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u4F7F\u7528\u5B83\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#A65E2B;">Infinity</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//Infinity</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li><li><p><code>NaN</code>\u4EE3\u8868\u4E00\u4E2A\u8BA1\u7B97\u9519\u8BEF\u3002\u5B83\u662F\u4E00\u4E2A\u4E0D\u6B63\u786E\u7684\u6216\u8005\u4E00\u4E2A\u672A\u5B9A\u4E49\u7684\u6570\u5B66\u64CD\u4F5C\u6240\u5F97\u5230\u7684\u7ED3\u679C\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;not a number&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">/</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">2</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//NaN,\u8FD9\u6837\u7684\u9664\u6CD5\u662F\u9519\u8BEF\u7684</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>NaN</code>\u662F\u7C98\u6027\u7684\u3002\u4EFB\u4F55\u5BF9<code>NaN</code>\u7684\u8FDB\u4E00\u6B65\u6570\u5B66\u8FD0\u7B97\u90FD\u4F1A\u8FD4\u56DE<code>NaN</code>:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#A65E2B;">NaN</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//NaN</span></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">3</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">NaN</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//NaN</span></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;not a number&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">/</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">-</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//NaN</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6240\u4EE5\uFF0C\u5982\u679C\u5728\u6570\u5B66\u8868\u8FBE\u5F0F\u4E2D\u6709\u4E00\u4E2A<code>NaN</code>\uFF0C\u4F1A\u88AB\u4F20\u64AD\u5230\u6700\u7EC8\u7ED3\u679C(\u53EA\u6709\u4E00\u4E2A\u4F8B\u5916:<code>NaN ** 0</code>\u7ED3\u679C\u4E3A <code>1</code>)</p><blockquote><p><strong>\u6570\u5B66\u8FD0\u7B97\u662F\u5B89\u5168\u7684</strong> \u5728 JavaScript \u4E2D\u505A\u6570\u5B66\u8FD0\u7B97\u662F\u5B89\u5168\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u505A\u4EFB\u4F55\u4E8B\uFF1A\u9664\u4EE5 0\uFF0C\u5C06\u975E\u6570\u5B57\u5B57\u7B26\u4E32\u89C6\u4E3A\u6570\u5B57\uFF0C\u7B49\u7B49\u3002 \u811A\u672C\u6C38\u8FDC\u4E0D\u4F1A\u56E0\u4E3A\u4E00\u4E2A\u81F4\u547D\u7684\u9519\u8BEF(&quot;\u6B7B\u4EA1&quot;)\u800C\u505C\u6B62\u3002\u6700\u574F\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u4E00\u4E2A<code>NaN</code>\u7684\u7ED3\u679C\u3002</p></blockquote><p>\u7279\u6B8A\u7684\u6570\u503C\u5C5E\u4E8E&quot;number&quot;\u7C7B\u578B\u3002\u5F53\u7136\uFF0C\u5BF9&quot;\u7279\u6B8A\u7684\u6570\u503C&quot;\u8FD9\u4E2A\u8BCD\u7684\u4E00\u822C\u8BA4\u8BC6\u662F\uFF0C\u5B83\u4EEC\u5E76\u4E0D\u662F\u6570\u5B57\u3002</p><h2 id="bigint-\u7C7B\u578B" tabindex="-1">BigInt \u7C7B\u578B <a class="header-anchor" href="#bigint-\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5728 JavaScript \u4E2D\uFF0C&quot;number&quot;\u7C7B\u578B\u65E0\u6CD5\u8868\u793A\u5927\u4E8E(2<sup>52</sup>-1)(\u5373<code>9007199254740091</code>),\u6216\u8005\u5C0F\u4E8E-(2<sup>52</sup>-1)\u7684\u6574\u6570\u3002\u8FD9\u662F\u5176\u5185\u90E8\u8868\u793A\u5F62\u5F0F\u5BFC\u81F4\u7684\u6280\u672F\u9650\u5236\u3002 \u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u8303\u56F4\u5C31\u8DB3\u591F\u4E86\uFF0C\u4F46\u6709\u65F6\u6211\u4EEC\u9700\u8981\u5F88\u5927\u7684\u6570\u5B57\uFF0C\u4F8B\u5982\u7528\u4E8E\u52A0\u5BC6\u6216\u5FAE\u5999\u7CBE\u5EA6\u7684\u65F6\u95F4\u6233\u3002 <code>BigInt</code>\u7C7B\u578B\u662F\u6700\u8FD1\u88AB\u6DFB\u52A0\u5230 JavaScript \u8BED\u8A00\u4E2D\u7684\uFF0C\u7528\u4E8E\u8868\u793A\u4EFB\u610F\u957F\u5EA6\u7684\u6574\u6570\u3002 \u53EF\u4EE5\u901A\u8FC7\u5C06<code>n</code>\u9644\u52A0\u5230\u6574\u6570\u5B57\u6BB5\u7684\u7684\u672B\u5C3E\u6765\u521B\u5EFA<code>BigInt</code>\u503C\u3002</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A0ADA0;">//\u5C3E\u90E8\u7684&quot;n&quot; \u8868\u793A\u8FD9\u662F\u4E00\u4E2A BigInt \u7C7B\u578B</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">bigInt</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1234567890123456789012345678901234567890</span><span style="color:#AB5959;">n</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7531\u4E8E\u5F88\u5C11\u9700\u8981 <code>BigInt</code> \u7C7B\u578B\u7684\u6570\u5B57\uFF0C\u6211\u4EEC\u5728\u8FD9\u6CA1\u6709\u5BF9\u5176\u8FDB\u884C\u8BB2\u89E3\uFF0C\u6211\u4EEC\u5728\u5355\u72EC\u7684\u7AE0\u8282 <a href="https://zh.javascript.info/bigint" target="_blank" rel="noopener noreferrer">BigInt</a> \u4E2D\u4E13\u95E8\u5BF9\u5176\u8FDB\u884C\u4E86\u4ECB\u7ECD\u3002\u5F53\u4F60\u9700\u8981\u4F7F\u7528\u90A3\u6837\u7684\u5927\u6570\u5B57\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u53BB\u9605\u8BFB\u8BE5\u7AE0\u8282\u3002</p><blockquote><p><strong>\u517C\u5BB9\u6027\u95EE\u9898</strong> \u76EE\u524D Firefox/Chrome/Edge/Safari \u5DF2\u7ECF\u652F\u6301<code>BigInt</code>\u4E86\uFF0C\u4F46 IE \u8FD8\u6CA1\u6709\u3002 \u4F60\u53EF\u4EE5\u67E5\u770B<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility" target="_blank" rel="noopener noreferrer"><em>MDN</em> BigInt \u517C\u5BB9\u8868</a>\u4EE5\u4E86\u89E3\u54EA\u4E9B\u7248\u672C\u7684\u6D4F\u89C8\u5668\u5DF2\u7ECF\u652F\u6301 BigInt \u4E86\u3002</p></blockquote><h2 id="string-\u7C7B\u578B" tabindex="-1">String \u7C7B\u578B <a class="header-anchor" href="#string-\u7C7B\u578B" aria-hidden="true">#</a></h2><p>JavaScript \u4E2D\u7684\u5B57\u7B26\u4E32\u5FC5\u987B\u88AB\u62EC\u5728\u5F15\u53F7\u91CC\u3002</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">str</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Hello&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">str2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;Single quotes are ok too&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">phrase</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\`can embed another </span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">str</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">\`</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728 JavaScript \u4E2D\u6709\u4E09\u79CD\u5305\u542B\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u3002 1.\u53CC\u5F15\u53F7\uFF1A <code>&quot;Hello&quot;</code> 2.\u5355\u5F15\u53F7: <code>&#39;Hello&#39;</code> 3.\u53CD\u5F15\u53F7\uFF1A <code>Hello</code> \u53CC\u5F15\u53F7\u548C\u5355\u5F15\u53F7\u90FD\u662F&quot;\u7B80\u5355&quot;\u5F15\u7528\uFF0C\u5728 JavaScript \u4E2D\u4E24\u8005\u51E0\u4E4E\u6CA1\u6709\u4EC0\u4E48\u5DEE\u522B\u3002 \u53CD\u5F15\u53F7\u662F<strong>\u529F\u80FD\u6269\u5C55</strong>\u5F15\u53F7\u3002\u5B83\u4EEC\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7\u5C06\u53D8\u91CF\u548C\u8868\u8FBE\u5F0F\u5305\u88C5\u5728<code>\${...}</code>\u4E2D\uFF0C\u6765\u5C06\u5B83\u4EEC\u5F15\u5165\u5230\u5B57\u7B26\u4E32\u4E2D\u3002\u4F8B\u5982:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">name</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;John&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//\u952E\u5165\u4E00\u4E2A\u53D8\u91CF</span></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">\`Hello,</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">name</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">!\`</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// Hello,John!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//\u5D4C\u5165\u4E00\u4E2A\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">\`the result is </span><span style="color:#8E8F8B;">\${</span><span style="color:#296AA3;">1</span><span style="color:#B56959;"> </span><span style="color:#AB5959;">+</span><span style="color:#B56959;"> </span><span style="color:#296AA3;">2</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">\`</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//the result is 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>\${...}</code>\u5185\u7684\u8868\u8FBE\u5F0F\u4F1A\u88AB\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u7ED3\u679C\u4F1A\u6210\u4E3A\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206\u3002\u53EF\u4EE5\u5728<code>\${...}</code>\u5185\u653E\u7F6E\u4EFB\u4F55\u4E1C\u897F:\u8BF8\u5982\u540D\u4E3A<code>name</code>\u7684\u53D8\u91CF\u6216\u8005\u8BF8\u5982<code>1+2</code>\u7684\u7B97\u6570\u8868\u8FBE\u5F0F\uFF0C\u6216\u8005\u5176\u4ED6\u4E00\u4E9B\u66F4\u590D\u6742\u7684\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4EC5\u4EC5\u5728\u53CD\u5F15\u53F7\u5185\u6709\u6548\uFF0C\u5176\u4ED6\u5F15\u53F7\u4E0D\u5141\u8BB8\u8FD9\u79CD\u5D4C\u5165\u3002</p></li></ul><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;the result is \${1+2}&quot;</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//the result is \${1+2}(\u4F7F\u7528\u53CC\u5F15\u53F7\u5219\u4E0D\u4F1A\u8BA1\u7B97\${...}\u91CC\u7684\u5185\u5BB9)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p><strong>javasctipt \u4E2D\u6CA1\u6709 character \u7C7B\u578B\u3002</strong> \u5728\u4E00\u4E9B\u8BED\u8A00\u4E2D\uFF0C\u5355\u4E2A\u5B57\u7B26\u6709\u4E00\u4E2A\u7279\u6B8A\u7684&quot;character&quot;\u7C7B\u578B\u6CA1\u5728 c \u8BED\u8A00\u548C Java \u8BED\u8A00\u4E2D\u88AB\u79F0\u4E3A&quot;char&quot;\u3002 \u5728 JavaScript \u4E2D\u6CA1\u6709\u8FD9\u79CD\u7C7B\u578B\u3002\u53EA\u6709\u4E00\u79CD<code>string</code>\u7C7B\u578B\u6BCF\u4E00\u4E2A\u5B57\u7B26\u4E32\u53EF\u4EE5\u5305\u542B\u96F6\u4E2A\uFF08\u4E3A\u7A7A\uFF09\u3001\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u3002</p></blockquote><h2 id="boolean-\u7C7B\u578B-\u903B\u8F91\u7C7B\u578B" tabindex="-1">Boolean \u7C7B\u578B(\u903B\u8F91\u7C7B\u578B) <a class="header-anchor" href="#boolean-\u7C7B\u578B-\u903B\u8F91\u7C7B\u578B" aria-hidden="true">#</a></h2><p>Boolean \u7C7B\u578B\u4EC5\u5305\u542B\u4E24\u4E2A\u503C:<code>true</code>\u548C<code>false</code>\u3002 \u8FD9\u79CD\u7C7B\u578B\u901A\u5E38\u7528\u4E8E\u5B58\u50A8\u8868\u793A yes \u6216 no \u7684\u503C\uFF1A<code>true</code>\u610F\u5473\u7740&quot;yes\uFF0C\u6B63\u786E&quot;,<code>false</code>\u610F\u5473\u7740&quot;no,\u4E0D\u6B63\u786E&quot;. \u6BD4\u5982:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">nameFieldChecked</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// yes, name field is checked</span></span>
<span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">ageFieldChecked</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// no, age field is bot checked</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5E03\u5C14\u503C\u4E5F\u53EF\u4F5C\u4E3A\u6BD4\u8F83\u7684\u7ED3\u679C:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">isGreater</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">4</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">isGreater</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//true (\u6BD4\u8F83\u7684\u7ED3\u679C\u662F&quot;yes&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="null-\u503C" tabindex="-1">null \u503C <a class="header-anchor" href="#null-\u503C" aria-hidden="true">#</a></h2><p>\u7279\u6B8A\u7684<code>null</code>\u503C\u4E0D\u5C5E\u4E8E\u4E0A\u8FF0\u4EFB\u4F55\u4E00\u79CD\u7C7B\u578B\u3002 \u5B83\u6784\u6210\u4E86\u4E00\u4E2A\u72EC\u7ACB\u7684\u7C7B\u578B\uFF0C\u53EA\u5305\u542B<code>null</code>\u503C\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">age</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">null</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u76F8\u6BD4\u8F83\u4E8E\u5176\u4ED6\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0CJavaScript \u4E2D<code>null</code>\u4E0D\u662F\u4E00\u4E2A&quot;\u5BF9\u4E0D\u5B58\u5728\u7684<code>object</code>\u7684\u5F15\u7528&quot;\u6216\u8005&quot;null \u6307\u9488&quot;\u3002 JavaScript \u4E2D\u7684<code>null</code>\u4EC5\u4EC5\u662F\u4E00\u4E2A\u4EE3\u8868&quot;\u65E0&quot;\u3001&quot;\u7A7A&quot;\u3001\u6216&quot;\u503C\u672A\u77E5&quot;\u7684\u7279\u6B8A\u503C\u3002 \u4E0A\u9762\u7684\u4EE3\u7801\u8868\u793A<code>age</code>\u662F\u672A\u77E5\u7684\u3002</p><h2 id="undefined-\u503C" tabindex="-1">undefined \u503C <a class="header-anchor" href="#undefined-\u503C" aria-hidden="true">#</a></h2><p>\u7279\u6B8A\u503C<code>undefined</code>\u548C<code>null</code>\u4E00\u6837\u81EA\u6210\u7C7B\u578B\u3002 <code>undefined</code>\u7684\u542B\u4E49\u662F<code>\u672A\u88AB\u8D4B\u503C</code>\u3002 \u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u5DF2\u88AB\u58F0\u660E\uFF0C\u4F46\u672A\u88AB\u8D4B\u503C\uFF0C\u90A3\u4E48\u5B83\u7684\u503C\u5C31\u662F<code>undefined</code>:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">age</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">age</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// \u5F39\u51FA &quot;undefined&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4ECE\u6280\u672F\u4E0A\u8BB2\uFF0C\u53EF\u4EE5\u663E\u793A\u5730\u5C06<code>undefined</code>\u8D4B\u503C\u7ED9\u53D8\u91CF:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">age</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">100</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//\u5C06\u503C\u4FEE\u6539\u4E3A undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">age</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">undefined</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">age</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;undefined&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>....\u4F46\u662F\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002\u901A\u5E38<code>null</code>\u5C06\u4E00\u4E2A&quot;\u672A\u77E5&quot;\u7684\u503C\u5199\u5165\u53D8\u91CF\u4E2D\uFF0C\u800C<code>undefined</code>\u5219\u4FDD\u7559\u4F5C\u4E3A\u672A\u8FDB\u884C\u521D\u59CB\u5316\u7684\u4E8B\u7269\u7684\u9ED8\u8BA4\u521D\u59CB\u503C\u3002</p><h2 id="object-\u7C7B\u578B\u548C-symbol-\u7C7B\u578B" tabindex="-1">Object \u7C7B\u578B\u548C Symbol \u7C7B\u578B <a class="header-anchor" href="#object-\u7C7B\u578B\u548C-symbol-\u7C7B\u578B" aria-hidden="true">#</a></h2><p><code>object</code>\u7C7B\u578B\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u7C7B\u578B\u3002 \u5176\u4ED6\u6240\u6709\u7684\u6570\u636E\u7C7B\u578B\u90FD\u88AB\u79F0\u4E3A\u201C\u539F\u59CB\u7C7B\u578B\u201D\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u7684\u503C\u53EA\u5305\u542B\u4E00\u4E2A\u5355\u72EC\u7684\u5185\u5BB9\uFF08\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u6216\u8005\u5176\u4ED6\uFF09\u3002\u76F8\u53CD\uFF0C<code>object</code>\u5219\u7528\u4E8E\u5B58\u50A8\u6570\u636E\u96C6\u5408\u548C\u66F4\u590D\u6742\u7684\u5B9E\u4F53\u3002 <code>symbol</code>\u7C7B\u578B\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002\u6211\u4EEC\u5728\u8FD9\u91CC\u63D0\u5230\u7684<code>symbol</code>\u7C7B\u578B\u662F\u4E3A\u4E86\u5B8C\u6574\u6027\uFF0C\u4F46\u6211\u4EEC\u8981\u5728\u5B66\u5B8C<code>object</code>\u7C7B\u578B\u540E\u518D\u5B66\u4E60\u5B83\u3002</p><h2 id="typeof-\u8FD0\u7B97\u7B26" tabindex="-1">typeof \u8FD0\u7B97\u7B26 <a class="header-anchor" href="#typeof-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p><code>typeof</code>\u8FD0\u7B97\u7B26\u8FD4\u56DE\u53C2\u6570\u7684\u7C7B\u578B\u3002\u5F53\u6211\u4EEC\u60F3\u8981\u5206\u522B\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u503C\u7684\u65F6\u5019\uFF0C\u6216\u8005\u60F3\u5FEB\u901F\u8FDB\u884C\u6570\u636E\u7C7B\u578B\u68C0\u9A8C\u65F6\uFF0C\u975E\u5E38\u6709\u7528\u3002</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">undefined</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;undefined&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;number&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">10</span><span style="color:#AB5959;">n</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;bigint&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;boolean&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;foo&quot;</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;string&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Symbol</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;id&quot;</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;symbol&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">Math</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;object&quot; (1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">null</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;object&quot; (2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">alert</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;object&quot; (3)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6700\u540E\u4E09\u884C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u8BF4\u660E\uFF1A</p><ul><li><code>math</code>\u662F\u4E00\u4E2A\u63D0\u4F9B\u6570\u5B66\u8FD0\u7B97\u7684\u5185\u5EFA<code>object</code>\u3002\u6211\u4EEC\u4F1A\u5728<a href="https://zh.javascript.info/number" target="_blank" rel="noopener noreferrer">\u6570\u5B57\u7C7B\u578B</a>\u4E00\u8282\u4E2D\u5B66\u4E60\u5B83\u3002</li><li><code>typeof null</code> \u7684\u7ED3\u679C\u4E3A<code>&quot;object&quot;</code>\u3002\u8FD9\u662F\u5B98\u65B9\u627F\u8BA4\u7684<code>typeof</code>\u7684\u9519\u8BEF\uFF0C\u8FD9\u4E2A\u95EE\u9898\u6765\u81EA\u4E8E JavaScript \u8BED\u8A00\u7684\u65E9\u671F\u9636\u6BB5\uFF0C\u5E76\u4E14\u4E3A\u4E86\u517C\u5BB9\u6027\u800C\u4FDD\u7559\u4E86\u4E0B\u6765\u3002<code>null</code>\u7EDD\u5BF9\u4E0D\u662F\u4E00\u4E2A<code>object</code>\u3002<code>null</code>\u6709\u81EA\u5DF1\u7684\u7C7B\u578B\uFF0C\u5B83\u662F\u4E00\u4E2A\u7279\u6B8A\u503C\u3002<code>typeof</code>\u7684\u884C\u4E3A\u5728\u8FD9\u91CC\u662F\u9519\u8BEF\u7684\u3002</li><li><code>typeof alert</code>\u7684\u7ED3\u679C\u662F&quot;function&quot;,\u56E0\u4E3A\u6211\u4EEC\u4F1A\u5728\u4E0B\u4E00\u7AE0\u5B66\u4E60\u5230\u51FD\u6570\uFF0C\u90A3\u65F6\u6211\u4EEC\u4F1A\u4E86\u89E3\u5230\uFF0C\u5728 JavaScript \u8BED\u8A00\u4E2D\u6CA1\u6709\u4E00\u4E2A\u7279\u522B\u7684&quot;function&quot;\u7C7B\u578B\u3002\u51FD\u6570\u96B6\u5C5E\u4E8E<code>object</code>\u7C7B\u578B\u3002\u4F46\u662F<code>typeof</code>\u4F1A\u5BF9\u51FD\u6570\u533A\u5206\u5BF9\u5F85\uFF0C\u5E76\u8FD4\u56DE<code>function</code>\u3002\u8FD9\u4E5F\u662F\u6765\u81EA\u4E8E JavaScript \u8BED\u8A00\u7684\u65E9\u671F\u95EE\u9898\u3002\u4ECE\u6280\u672F\u4E0A\u8BB2\uFF0C\u8FD9\u79CD\u884C\u4E3A\u662F\u4E0D\u6B63\u786E\u7684\uFF0C\u4F46\u5728\u5B9E\u9645\u7F16\u7A0B\u4E2D\u5374\u975E\u5E38\u65B9\u4FBF\u3002</li></ul><blockquote><p><strong><code>typeof(x)</code>\u8BED\u6CD5</strong> \u4F60\u53EF\u80FD\u4F1A\u9047\u5230\u53E6\u4E00\u79CD\u8BED\u6CD5:<code>typeof(x)</code>\u3002\u5B83\u4E0E<code>typeof x</code>\u76F8\u540C\u3002 \u7B80\u5355\u70B9\u8BF4\uFF1A<code>typeof</code>\u662F\u4E00\u4E2A\u64CD\u4F5C\u7B26\uFF0C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u3002\u8FD9\u91CC\u7684\u62EC\u53F7\u4E0D\u662F<code>typeof</code>\u7684\u4E00\u90E8\u5206\u3002\u5B83\u662F\u6570\u5B66\u8FD0\u7B97\u5206\u7EC4\u7684\u62EC\u53F7\u3002 \u901A\u5E38\uFF0C\u8FD9\u6837\u7684\u62EC\u53F7\u91CC\u5305\u542B\u7684\u662F\u4E00\u4E2A\u6570\u5B66\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982:<code>(2 + 2)</code>,\u4F46\u662F\u8FD9\u91CC\u5B83\u53EA\u5305\u542B\u4E00\u4E2A\u53C2\u6570<code>(x)</code>,\u4ECE\u8BED\u6CD5\u4E0A\u8BB2\uFF0C\u5B83\u4EEC\u5141\u8BB8\u5728<code>typeof</code>\u8FD0\u7B97\u548C\u5176\u53C2\u6570\u4E4B\u95F4\u4E0D\u6253\u7A7A\u683C\uFF0C\u6709\u4E9B\u4EBA\u559C\u6B22\u8FD9\u6837\u7684\u98CE\u683C\u3002 \u6709\u4E9B\u4EBA\u559C\u6B22\u7528<code>typeof(x)</code>\uFF0C\u5C3D\u7BA1<code>typeof x</code>\u8BED\u6CD5\u66F4\u4E3A\u5E38\u89C1\u3002</p></blockquote><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>JavaScript \u4E2D\u6709\u516B\u79CD\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B(\u6CE8\u91CA\uFF1A\u524D\u4E03\u79CD\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u79F0\u4E3A\u539F\u59CB\u7C7B\u578B\uFF0C\u800C<code>object</code>\u4E3A\u590D\u6742\u6570\u636E\u7C7B\u578B)\u3002</p><ul><li><code>number</code> \u7528\u4E8E\u4EFB\u4F55\u6570\u636E\u7C7B\u578B\u7684\u6570\u5B57\uFF1A\u6574\u6570\u6216\u6D6E\u70B9\u6570\uFF0C\u5728 \xB1(2<sup>52</sup>-1) \u8303\u56F4\u5185\u7684\u6574\u6570\u3002</li><li><code>bigint</code> \u7528\u4E8E\u4EFB\u610F\u957F\u5EA6\u7684\u6574\u6570\u3002</li><li><code>string</code> \u7528\u4E8E\u5B57\u7B26\u4E32\uFF1A\u4E00\u4E2A\u5B57\u7B26\u4E32\u53EF\u4EE5\u5305\u542B 0 \u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\uFF0C\u6240\u4EE5\u6CA1\u6709\u5355\u72EC\u7684\u5355\u5B57\u7B26\u7C7B\u578B\u3002</li><li><code>boolean</code> \u7528\u4E8E<code>true</code>\u548C<code>false</code>\u3002</li><li><code>null</code> \u7528\u4E8E\u672A\u77E5\u7684\u503C--\u53EA\u6709\u4E00\u4E2A<code>null</code>\u503C\u7684\u72EC\u7ACB\u7C7B\u578B\u3002</li><li><code>undefined</code> \u7528\u4E8E\u672A\u5B9A\u4E49\u7684\u503C--\u53EA\u6709\u4E00\u4E2A<code>undefined</code> \u503C\u7684\u72EC\u7ACB\u7C7B\u578B\u3002</li><li><code>symbol</code> \u7528\u4E8E\u552F\u4E00\u7684\u6807\u8BC6\u7B26\u3002</li><li><code>object</code> \u7528\u4E8E\u66F4\u590D\u6742\u7684\u6570\u636E\u7ED3\u6784\u3002</li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>typeof</code>\u8FD0\u7B97\u7B26\u67E5\u770B\u5B58\u50A8\u5728\u53D8\u91CF\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u3002</p><ul><li>\u901A\u5E38\u7528\u4F5C<code>typeof x</code>\uFF0C\u4F46<code>typeof(x)</code>\u4E5F\u53EF\u884C\u3002</li><li>\u4EE5\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u8FD4\u56DE\u7C7B\u578B\u540D\u79F0\uFF0C\u4F8B\u5982\uFF1A<code>&quot;string&quot;</code>\u3002</li><li><code>typeof null</code>\u4F1A\u8FD4\u56DE<code>object</code>--\u8FD9\u662F JavaScript \u7F16\u7A0B\u8BED\u8A00\u7684\u4E00\u4E2A\u9519\u8BEF\uFF0C\u5B9E\u9645\u4E0A\u5B83\u5E76\u4E0D\u662F\u4E00\u4E2A<code>object</code>\u3002</li></ul>`,38),p=[o];function c(r,t,i,d,y,u){return a(),n("div",null,p)}var B=s(l,[["render",c]]);export{b as __pageData,B as default};
