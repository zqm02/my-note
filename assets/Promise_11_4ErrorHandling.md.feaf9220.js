import{_ as s,c as n,o as a,a as p}from"./app.1609d545.js";const E=JSON.parse('{"title":"\u4F7F\u7528 promise \u8FDB\u884C\u9519\u8BEF\u5904\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9690\u5F0F try...catch","slug":"\u9690\u5F0F-try-catch"},{"level":2,"title":"\u518D\u6B21\u629B\u51FA (Rethrowing)","slug":"\u518D\u6B21\u629B\u51FA-rethrowing"},{"level":2,"title":"\u672A\u5904\u7406\u7684 rejection","slug":"\u672A\u5904\u7406\u7684-rejection"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"Promise/11_4ErrorHandling.md"}'),l={name:"Promise/11_4ErrorHandling.md"},o=p(`<h1 id="\u4F7F\u7528-promise-\u8FDB\u884C\u9519\u8BEF\u5904\u7406" tabindex="-1">\u4F7F\u7528 promise \u8FDB\u884C\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u4F7F\u7528-promise-\u8FDB\u884C\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h1><p>promise \u94FE\u5728\u9519\u8BEF(error)\u4E2D\u5341\u5206\u5F3A\u5927\u3002\u5F53\u4E00\u4E2A promise \u88AB reject \u65F6\uFF0C\u63A7\u5236\u6743\u5C06\u79FB\u81F3\u6700\u8FD1\u7684 rejection \u5904\u7406\u7A0B\u5E8F\u3002\u8FD9\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u975E\u5E38\u65B9\u4FBF\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u4EE3\u7801\u4E2D\u6240<code>fetch</code>\u7684 URL \u662F\u9519\u7684(\u6CA1\u6709\u8FD9\u4E2A\u7F51\u7AD9)\uFF0C<code>.catch</code>\u5BF9\u8FD9\u4E2A error \u8FDB\u884C\u4E86\u5904\u7406:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#6C7834;">fetch</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;https://no-such-server.balala&quot;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//reject</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">response</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">response</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">json</span><span style="color:#8E8F8B;">())</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">err</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">err</span><span style="color:#8E8F8B;">));</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//TypeError:Failed to fetch (\u8FD9\u91CC\u7684\u6587\u5B57\u53EF\u80FD\u6709\u6240\u4E0D\u540C)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0C<code>.catch</code>\u4E0D\u5FC5\u662F\u7ACB\u5373\u7684\u3002\u5B83\u53EF\u80FD\u5728\u4E00\u4E2A\u6216\u591A\u4E2A<code>.then</code>\u4E4B\u540E\u51FA\u73B0\u3002</p><p>\u6216\u8005\uFF0C\u53EF\u80FD\u8BE5\u7F51\u7AD9\u4E00\u5207\u6B63\u5E38\uFF0C\u4F46\u54CD\u5E94\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002\u6355\u83B7\u6240\u6709 error \u7684\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\uFF0C\u5C06<code>.catch</code>\u9644\u52A0\u5230\u94FE\u7684\u672B\u5C3E:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">fetch</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;/article/promise-chaining/user.json&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">response</span><span style="color:#AB5959;">=&gt;</span><span style="color:#8C862B;">response</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">json</span><span style="color:#8E8F8B;">())</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">user</span><span style="color:#AB5959;">=&gt;</span><span style="color:#6C7834;">fetch</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">\`https://api.github.com/users/</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">user</span><span style="color:#8E8F8B;">.</span><span style="color:#B56959;">name</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">\`</span><span style="color:#8E8F8B;">));</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">response</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">response</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">json</span><span style="color:#8E8F8B;">())</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">githubUser</span><span style="color:#AB5959;">=&gt;new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">resolve</span><span style="color:#8E8F8B;">,</span><span style="color:#8C862B;">reject</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">let</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">img</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">document</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">createElement</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;img&#39;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8C862B;">img</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">src</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">githubUser</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">avatar_url</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8C862B;">img</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">className</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;promise-avatar-example&quot;</span><span style="color:#8E8F8B;">;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8C862B;">document</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">body</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">append</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">img</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B58451;">setTimeout</span><span style="color:#8E8F8B;">(()</span><span style="color:#AB5959;">=&gt;</span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#8C862B;">img</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">remove</span><span style="color:#8E8F8B;">();</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#6C7834;">resolve</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">githubUser</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#8E8F8B;">},</span><span style="color:#296AA3;">3000</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">error</span><span style="color:#AB5959;">=&gt;</span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">error</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">message</span><span style="color:#8E8F8B;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u6837\u7684<code>.catch</code>\u6839\u672C\u4E0D\u4F1A\u88AB\u89E6\u53D1\u3002\u4F46\u662F\u5982\u679C\u4E0A\u8FF0\u6D88\u606F\u4EFB\u610F\u4E00\u4E2A promise rejected(\u7F51\u7EDC\u95EE\u9898\u6216\u8005\u65E0\u6548\u7684 json \u6216\u5176\u5B83)\uFF0C<code>.catch</code>\u5C31\u4F1A\u6355\u83B7\u5B83\u3002</p><h2 id="\u9690\u5F0F-try-catch" tabindex="-1">\u9690\u5F0F try...catch <a class="header-anchor" href="#\u9690\u5F0F-try-catch" aria-hidden="true">#</a></h2><p>promise \u7684\u6267\u884C\u8005(executor)\u548C promise \u7684\u5904\u7406\u7A0B\u5E8F\u5468\u56F4\u6709\u4E00\u4E2A&quot;\u9690\u5F0F\u7684<code>try...catch</code>&quot;\u3002\u5982\u679C\u53D1\u751F\u5F02\u5E38\uFF0C\u5C31\u4F1A\u88AB\u6355\u83B7\uFF0C\u5E76\u88AB\u89C6\u4E3A rejected \u8FDB\u884C\u5904\u7406\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">resolve</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">reject</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">throw</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Error</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Whoop!&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#8E8F8B;">}).</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">alert</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//Error:Whoop!</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>....\u4E0E\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u5DE5\u4F5C\u4E0A\u5B8C\u5168\u76F8\u540C:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">resolve</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">reject</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">reject</span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Error</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Whoop!&quot;</span><span style="color:#8E8F8B;">));</span></span>
<span class="line"><span style="color:#8E8F8B;">}).</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">alert</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//Error:Whoop!</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728 executor \u5468\u56F4\u7684&quot;\u9690\u5F0F<code>try...catch</code>&quot;\u81EA\u52A8\u6355\u83B7\u4E86 error\uFF0C\u5E76\u5C06\u5176\u53D8\u4E3A rejected promise\u3002</p><p>\u8FD9\u4E0D\u4EC5\u4EC5\u53D1\u751F\u5728 executor \u51FD\u6570\u4E2D\uFF0C\u540C\u6837\u4E5F\u53D1\u751F\u4E86\u5176\u5904\u7406\u7A0B\u5E8F\u4E2D\u3002\u5982\u679C\u6211\u4EEC\u5728<code>.then</code>\u5904\u7406\u7A0B\u5E8F\u4E2D<code>throw</code>\uFF0C\u8FD9\u610F\u5473\u7740 promise rejected\uFF0C\u56E0\u6B64\u63A7\u5236\u6743\u79FB\u4EA4\u81F3\u6700\u8FD1\u7684 error \u5904\u7406\u7A0B\u5E8F\u3002</p><p>\u8FD9\u662F\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">resolve</span><span style="color:#8E8F8B;">,</span><span style="color:#8C862B;">reject</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#6C7834;">resolve</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;ok&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}).</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">result</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">=&gt;</span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#6C7834;">balala</span><span style="color:#8E8F8B;">();</span><span style="color:#393A34;">   </span><span style="color:#A0ADA0;">//\u6CA1\u6709\u8FD9\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}.</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">alert</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">//ReferenceError:balala is not defined</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6700\u540E\u7684<code>.catch</code>\u4E0D\u4EC5\u4F1A\u6355\u83B7\u663E\u5F0F\u7684 rejection\uFF0C\u8FD8\u4F1A\u6355\u83B7\u5B83\u4E0A\u9762\u7684\u5904\u7406\u7A0B\u5E8F\u4E2D\u610F\u5916\u51FA\u73B0\u7684 error\u3002</p><h2 id="\u518D\u6B21\u629B\u51FA-rethrowing" tabindex="-1">\u518D\u6B21\u629B\u51FA (Rethrowing) <a class="header-anchor" href="#\u518D\u6B21\u629B\u51FA-rethrowing" aria-hidden="true">#</a></h2><p>\u6B63\u5982\u6211\u4EEC\u5DF2\u7ECF\u6CE8\u610F\u5230\u7684\uFF0C\u94FE\u5C3E\u7AEF\u7684<code>.catch</code>\u7684\u8868\u73B0\u6709\u70B9\u50CF<code>try...catch</code>\u3002\u6211\u4EEC\u53EF\u80FD\u6709\u8BB8\u591A\u4E2A<code>.then</code>\u5904\u7406\u7A0B\u5E8F\uFF0C\u7136\u540E\u5728\u5C3E\u7AEF\u7528\u4E00\u4E2A<code>.catch</code>\u5904\u7406\u4E0A\u9762\u7684\u6240\u6709 error\u3002</p><p>\u5728\u5E38\u89C4\u7684<code>try..catch</code>\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790 error\uFF0C\u5982\u679C\u6211\u4EEC\u65E0\u6CD5\u5904\u7406\u5B83\uFF0C\u53EF\u4EE5\u5C06\u5176\u518D\u6B21\u629B\u51FA\u3002\u5BF9\u4E8E promise \u6765\u8BF4\uFF0C\u8FD9\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><p>\u5982\u679C\u6211\u4EEC\u5728<code>.catch</code>\u4E2D<code>throw</code>\uFF0C\u90A3\u4E48\u63A7\u5236\u6743\u5C31\u4F1A\u88AB\u79FB\u4EA4\u5230\u4E0B\u4E00\u4E2A\u6700\u8FD1\u7684 error \u5904\u7406\u7A0B\u5E8F\u3002\u5982\u679C\u6211\u4EEC\u5904\u7406\u8BE5 error \u5E76\u6B63\u5E38\u5B8C\u6210\uFF0C\u90A3\u4E48\u5B83\u5C06\u7EE7\u7EED\u5230\u6700\u8FD1\u7684\u6210\u529F\u7684<code>.then</code>\u5904\u7406\u7A0B\u5E8F\u3002</p><p>\u5728\u4E0B\u9762\u7684\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>.catch</code>\u6210\u529F\u5904\u7406\u4E86 error:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A0ADA0;">//\u6267\u884C\u6D41:catch -&gt; then</span></span>
<span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">resolve</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">reject</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">throw</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Error</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Whoops!&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#8E8F8B;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">error</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;The error is handled, continue normally&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Next successful handler runs&quot;</span><span style="color:#8E8F8B;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u91CC<code>.catch</code>\u5757\u6B63\u5E38\u5B8C\u6210\u3002\u6240\u4EE5\u4E0B\u4E00\u4E2A\u6210\u529F\u7684<code>.then</code>\u5904\u7406\u7A0B\u5E8F\u5C31\u4F1A\u88AB\u8C03\u7528\u3002</p><p>\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>.catch</code>\u7684\u53E6\u4E00\u79CD\u60C5\u51B5\u3002<code>(*)</code>\u884C\u7684\u5904\u7406\u7A0B\u5E8F\u6355\u83B7\u4E86 error\uFF0C\u4F46\u65E0\u6CD5\u5904\u7406\u5B83(\u4F8B\u5982\uFF0C\u5B83\u53EA\u77E5\u9053\u5982\u4F55\u5904\u7406<code>URLError</code>)\uFF0C\u6240\u4EE5\u5B83\u5C06\u5176\u518D\u6B21\u629B\u51FA:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A0ADA0;">//\u6267\u884C\u6D41:catch =&gt; catch</span></span>
<span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">resolve</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">reject</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">throw</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Error</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Whoops!&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#8E8F8B;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">error</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">// (*)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">error</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">instanceof</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">URLError</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">      </span><span style="color:#A0ADA0;">//\u5904\u7406\u5B83</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">else</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Can&#39;t handle such error&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">throw</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">error</span><span style="color:#8E8F8B;">;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//\u518D\u6B21\u629B\u51FA error \u6216\u53E6\u5916\u4E00\u4E2A error,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">/* \u4E0D\u5728\u8FD9\u91CC\u8FD0\u884C */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">catch</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">error</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">//(**)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">\`The unknown error has occured:</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">error</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">\`</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">//\u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u5185\u5BB9 =&gt; \u6267\u884C\u6B63\u5E38\u8FDB\u884C</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6267\u884C\u4ECE\u7B2C\u4E00\u4E2A<code>.catch(*)</code>\u6CBF\u7740\u94FE\u8DF3\u8F6C\u81F3\u4E0B\u4E00\u4E2A<code>(**)</code>\u3002</p><h2 id="\u672A\u5904\u7406\u7684-rejection" tabindex="-1">\u672A\u5904\u7406\u7684 rejection <a class="header-anchor" href="#\u672A\u5904\u7406\u7684-rejection" aria-hidden="true">#</a></h2><p>\u5F53\u4E00\u4E2A error \u6CA1\u6709\u88AB\u5904\u7406\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF0C\u6211\u4EEC\u5FD8\u4E86\u5728\u94FE\u7684\u5C3E\u7AEF\u9644\u52A0<code>.then</code>\uFF0C\u50CF\u8FD9\u6837:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">noSuchFunction</span><span style="color:#8E8F8B;">();</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//\u8FD9\u91CC\u51FA\u73B0 error (\u6CA1\u6709\u8FD9\u4E2A\u51FD\u6570)</span></span>
<span class="line"><span style="color:#8E8F8B;">}).</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">(()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;">//\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u529F\u7684 promise \u5904\u7406\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#8E8F8B;">});</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// \u5C3E\u7AEF\u6CA1\u6709 .catch!</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u51FA\u73B0 error,promsie \u7684\u72B6\u6001\u53D8\u4E3A&quot;rejected&quot;\uFF0C\u7136\u540E\u6267\u884C\u5E94\u8BE5\u8DF3\u8F6C\u81F3\u6700\u8FD1\u7684 rejection \u5904\u7406\u7A0B\u5E8F\u3002\u4F46\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5E76\u6CA1\u6709\u8FD9\u6837\u7684\u5904\u7406\u7A0B\u5E8F\u3002\u56E0\u6B64 error \u4F1A&quot;\u5361\u4F4F&quot;\u3002\u6CA1\u6709\u4EE3\u7801\u6765\u5904\u7406\u5B83\u3002</p><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u5C31\u50CF\u4EE3\u7801\u4E2D\u5E38\u89C4\u7684\u672A\u5904\u7406\u7684 error \u4E00\u6837\uFF0C\u8FD9\u610F\u5473\u7740\u67D0\u4E9B\u4E1C\u897F\u51FA\u4E86\u95EE\u9898\u3002</p><p>\u5F53\u53D1\u751F\u4E00\u4E2A\u5E38\u89C4\u7684 error \u5E76\u4E14\u672A\u88AB<code>try...catch</code>\u6355\u83B7\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\u811A\u672C\u6B7B\u4E86\uFF0C\u5E76\u5728\u63A7\u5236\u53F0\u4E2D\u7559\u4E0B\u4E86\u4E00\u4E2A\u4FE1\u606F\u3002\u5BF9\u4E8E\u5728 promise \u4E2D\u672A\u88AB\u5904\u7406\u7684 rejection\uFF0C\u4E5F\u4F1A\u53D1\u751F\u7C7B\u4F3C\u7684\u4E8B\u3002</p><p>JavaScript \u5F15\u64CE\u4F1A\u8DDF\u8E2A\u6B64\u7C7B rejection\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4F1A\u751F\u6210\u4E00\u4E2A\u5168\u5C40\u7684 error\u3002\u5982\u679C\u4F60\u8FD0\u884C\u4E0A\u9762\u8FD9\u4E2A\u4EE3\u7801\uFF0C\u4F60\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u4E2D\u770B\u5230\u3002\u3001</p><p>\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>unhandledrejection</code>\u4E8B\u4EF6\u6765\u6355\u83B7\u8FD9\u7C7B error:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#8C862B;">window</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">addEventListener</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;unhandledrejection&quot;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">event</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">  </span><span style="color:#A0ADA0;">//\u8FD9\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\u6709\u4E24\u4E2A\u7279\u6B8A\u7684\u5C5E\u6027:</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">event</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">promise</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//[object Promise] -\u751F\u6210\u8BE5\u5168\u5C40 error \u7684 promise</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">alert</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">event</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">reason</span><span style="color:#8E8F8B;">);</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// Error:Whoops!-\u672A\u5904\u7406\u7684 error \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#8E8F8B;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Promise</span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">throw</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Error</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;Whoops!&quot;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"><span style="color:#8E8F8B;">});</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//\u6CA1\u6709\u7528\u6765\u5904\u7406 error \u7684 catch</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u4E2A\u4E8B\u4EF6\u662F<strong>HTML \u6807\u51C6</strong>\u7684\u4E00\u90E8\u5206\u3002</p><p>\u5982\u679C\u51FA\u73B0\u4E86\u4E00\u4E2A error,\u5E76\u4E14\u5728\u8FD9\u6CA1\u6709 <code>.catch</code>\uFF0C\u90A3\u4E48<code>unhandledrejection</code>\u5904\u7406\u7A0B\u5E8F\u5C31\u4F1A\u88AB\u89E6\u53D1\uFF0C\u5E76\u83B7\u53D6\u5177\u6709 error \u76F8\u5173\u4FE1\u606F\u7684<code>event</code>\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u80FD\u505A\u4E00\u4E0B\u540E\u7EED\u5904\u7406\u4E86\u3002</p><p>\u901A\u5E38\u6B64\u7C7B error \u662F\u65E0\u6CD5\u56DE\u590D\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u6700\u597D\u7684\u89E3\u51B3\u65B9\u6848\u662F\u5C06\u95EE\u9898\u544A\u77E5\u7528\u6237\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5C06\u4E8B\u4EF6\u62A5\u544A\u7ED9\u670D\u52A1\u5668\u3002</p><p>\u5728 Node.js \u7B49\u975E\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF0C\u6709\u5176\u4ED6\u7528\u4E8E\u8DDF\u8E2A\u672A\u5904\u7406\u7684 error \u7684\u65B9\u6CD5\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li><code>.catch</code>\u5904\u7406 promise \u4E2D\u7684\u5404\u79CD error:\u5728<code>reject()</code>\u8C03\u7528\u4E2D\u7684\uFF0C\u6216\u8005\u5728\u5904\u7406\u7A0B\u5E8F\u4E2D\u629B\u51FA\u7684 error\u3002</li><li>\u5982\u679C\u7ED9\u5B9A<code>.then</code>\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570(\u5373 error \u5904\u7406\u7A0B\u5E8F)\uFF0C\u90A3\u4E48<code>.then</code>\u4E5F\u4F1A\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u6355\u83B7 error\u3002</li><li>\u6211\u4EEC\u5E94\u8BE5\u5C06<code>.catch</code>\u51C6\u786E\u5730\u653E\u5230\u6211\u4EEC\u60F3\u8981\u5904\u7406 error\uFF0C\u5E76\u77E5\u9053\u5982\u4F55\u5904\u7406\u8FD9\u4E9B error \u7684\u5730\u65B9\u3002\u5904\u7406\u7A0B\u5E8F\u5E94\u8BE5\u5206\u6790 error(\u53EF\u4EE5\u81EA\u5B9A\u4E49 error \u7C7B\u6765\u5E2E\u52A9\u5206\u6790)\u5E76\u518D\u6B21\u629B\u51FA\u672A\u77E5\u7684 error(\u5B83\u4EEC\u53EF\u80FD\u662F\u7F16\u7A0B\u9519\u8BEF)\u3002</li><li>\u5982\u679C\u6CA1\u6709\u529E\u6CD5\u4ECE error \u4E2D\u6062\u590D\uFF0C\u4E0D\u4F7F\u7528<code>.catch</code>\u4E5F\u53EF\u4EE5\u3002</li><li>\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u6211\u4EEC\u90FD\u5E94\u8BE5\u6709<code>unhandledrejection</code>\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F(\u7528\u4E8E\u6D4F\u89C8\u5668\uFF0C\u4EE5\u53CA\u5176\u4ED6\u73AF\u5883\u7684\u6A21\u62DF)\uFF0C\u4EE5\u8DDF\u8E2A\u672A\u5904\u7406\u7684 error \u5E76\u544A\u77E5\u7528\u6237(\u53EF\u80FD\u8FD8\u6709\u6211\u4EEC\u7684\u670D\u52A1\u5668)\u6709\u5173\u4FE1\u606F\uFF0C\u4EE5\u4F7F\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u6C38\u8FDC\u4E0D\u4F1A&quot;\u6B7B\u6389&quot;\u3002</li></ul>`,44),e=[o];function r(c,t,y,i,B,A){return a(),n("div",null,e)}var u=s(l,[["render",r]]);export{E as __pageData,u as default};
