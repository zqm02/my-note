import{_ as e,c as t,o as r,a as o}from"./app.d682e3ea.js";const f=JSON.parse('{"title":"\u4EE3\u7801\u7F16\u8F91\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"IDE","slug":"ide"},{"level":2,"title":"\u8F7B\u91CF\u7F16\u8F91\u5668","slug":"\u8F7B\u91CF\u7F16\u8F91\u5668"},{"level":2,"title":"\u4E0D\u8981\u4E89\u5435","slug":"\u4E0D\u8981\u4E89\u5435"}],"relativePath":"JS/1_3code-editor.md"}'),a={name:"JS/1_3code-editor.md"},n=o('<h1 id="\u4EE3\u7801\u7F16\u8F91\u5668" tabindex="-1">\u4EE3\u7801\u7F16\u8F91\u5668 <a class="header-anchor" href="#\u4EE3\u7801\u7F16\u8F91\u5668" aria-hidden="true">#</a></h1><p>\u7A0B\u5E8F\u5458\u63A5\u89E6\u65F6\u95F4\u6700\u957F\u7684\u5C31\u662F\u4EE3\u7801\u7F16\u8F91\u5668\u3002 \u4EE3\u7801\u7F16\u8F91\u5668\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF1AIDE(\u96C6\u6210\u5F00\u53D1\u73AF\u5883)\u548C\u8F7B\u91CF\u7F16\u8F91\u5668\u3002\u5F88\u591A\u4EBA\u559C\u6B22\u8FD9\u4E24\u79CD\u5404\u9009\u4E00\u4E2A\u3002</p><h2 id="ide" tabindex="-1">IDE <a class="header-anchor" href="#ide" aria-hidden="true">#</a></h2><p><a href="https://en.wikipedia.org/wiki/Integrated_development_environment" target="_blank" rel="noopener noreferrer">IDE</a>(\u96C6\u6210\u5F00\u53D1\u73AF\u5883)\u662F\u6307\u7528\u4E8E\u7BA1\u7406\u6574\u4E2A\u9879\u76EE\u7684\uFF0C\u5177\u6709\u5F3A\u5927\u529F\u80FD\u7684\u7F16\u8F91\u5668\u3002\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A\u7F16\u8F91\u5668\uFF0C\u800C\u4E14\u8FD8\u662F\u4E2A\u5B8C\u6574\u7684\u201C\u5F00\u53D1\u73AF\u5883\u201D\u3002 IDE \u52A0\u8F7D\u9879\u76EE(\u901A\u5E38\u5305\u542B\u5F88\u591A\u6587\u4EF6)\uFF0C\u5E76\u4E14\u5141\u8BB8\u518D\u4E0D\u540C\u6587\u4EF6\u4E4B\u95F4\u5BFC\u822A(navigation)\u3002IDE \u8FD8\u63D0\u4F9B\u57FA\u4E8E\u6574\u4E2A\u9879\u76EE(\u4E0D\u4EC5\u4EC5\u662F\u6253\u5F00\u7684\u6587\u4EF6)\u7684\u81EA\u52A8\u8865\u5168\u529F\u80FD\uFF0C\u96C6\u6210\u7248\u672C\u63A7\u5236(\u5982 git),\u96C6\u6210\u6D4B\u8BD5\u73AF\u5883\u7B49\u4E00\u4E9B\u5176\u4ED6\u201C\u9879\u76EE\u5C42\u9762\u201D\u7684\u4E1C\u897F \u5982\u679C\u4F60\u8FD8\u6CA1\u8003\u8651\u597D\u9009\u54EA\u4E00\u4E2A IDE\uFF0C\u53EF\u4EE5\u8003\u8651\u4E0B\u9762\u4E24\u4E2A\uFF1A</p><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>(\u8DE8\u5E73\u53F0\uFF0C\u514D\u8D39)</li><li><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">Webstorm</a>(\u8DE8\u5E73\u53F0\uFF0C\u6536\u8D39)\u3002</li></ul><p>\u5BF9\u4E8E Windows \u7CFB\u7EDF\u6765\u8BF4\uFF0C\u4E5F\u6709\u4E2A\u53EB&quot;Visual Studio&quot;\u7684 IDE,\u8BF7\u4E0D\u8981\u8DDF&quot;Visual Studio Code&quot;\u6DF7\u6DC6\u3002&quot;Visual Studio&quot;\u662F\u4E00\u4E2A\u6536\u8D39\u7684\uFF0C\u5F3A\u5927\u7684 Windows \u4E13\u7528\u7F16\u8F91\u5668\uFF0C<a href="http://xn--6kq67f80au6t6n7anx7a.NET" target="_blank" rel="noopener noreferrer">\u5B83\u5341\u5206\u9002\u7528\u4E8E.NET</a> \u5F00\u53D1\u3002\u7528\u5B83\u8FDB\u884C JavaScript \u5F00\u53D1\u4E5F\u4E0D\u9519\u3002 &quot;Visual Studio&quot;\u6709\u4E00\u4E2A\u514D\u8D39\u7684\u7248\u672C<a href="https://www.visualstudio.com/vs/community/" target="_blank" rel="noopener noreferrer">Visual Studio Community</a>\u3002</p><p>\u5F88\u591A IDE \u662F\u6536\u8D39\u7684\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002\u8D2D\u4E70 IDE \u7684\u8D39\u7528\u5BF9\u4E8E\u4E00\u4E2A\u5408\u683C\u7684\u7A0B\u5E8F\u5458\u7684\u85AA\u6C34\u6765\u8BF4\uFF0C\u80AF\u5B9A\u7B97\u4E0D\u4E86\u4EC0\u4E48\uFF0C\u6240\u4EE5\u53BB\u9009\u4E00\u4E2A\u5BF9\u4F60\u6765\u8BF4\u6700\u597D\u7684\u5427\u3002</p><h2 id="\u8F7B\u91CF\u7F16\u8F91\u5668" tabindex="-1">\u8F7B\u91CF\u7F16\u8F91\u5668 <a class="header-anchor" href="#\u8F7B\u91CF\u7F16\u8F91\u5668" aria-hidden="true">#</a></h2><p>&quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;\u6CA1\u6709 IDE \u529F\u80FD\u90A3\u4E48\u5F3A\u5927\uFF0C\u4F46\u5B83\u4EEC\u4E00\u822C\u5F88\u5FEB\uFF0C\u4F18\u96C5\u4E14\u7B80\u5355\u3002 &quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;\u4E3B\u8981\u7528\u4E8E\u5FEB\u901F\u6253\u5F00\u548C\u7F16\u8F91\u6587\u4EF6\u3002 &quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;\u548C&quot;IDE&quot;\u6700\u5927\u7684\u533A\u522B\u662F\uFF0CIDE \u4E00\u822C\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u5728\u5F00\u542F\u7684\u65F6\u5019\u9700\u8981\u52A0\u8F7D\u66F4\u591A\u7684\u6570\u636E\uFF0C\u5982\u679C\u9700\u8981\u7684\u8BDD\u8FD8\u4F1A\u5206\u6790\u9879\u76EE\u7ED3\u6784\u7B49\u3002\u5982\u679C\u6211\u4EEC\u53EA\u9700\u8981\u7F16\u8F91\u4E00\u4E2A\u6587\u4EF6\uFF0C\u90A3\u4E48&quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;\u4F1A\u66F4\u5FEB\u3002 \u5B9E\u9645\u4E0A\uFF0C&quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;\u4E00\u822C\u90FD\u6709\u5404\u79CD\u5404\u6837\u7684\u63D2\u4EF6\uFF0C\u8FD9\u4E9B\u63D2\u4EF6\u53EF\u4EE5\u505A\u76EE\u5F55\u7EA7(directory-level)\u7684\u8BED\u6CD5\u5206\u6790\u4E0E\u4EE3\u7801\u8865\u5168\u3002\u6240\u4EE5&quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;\u4E0E&quot;IDE&quot;\u4E5F\u6CA1\u6709\u4E25\u683C\u7684\u754C\u9650\u3002 \u4E0B\u9762\u662F\u4E00\u4E9B\u4F60\u503C\u5F97\u5173\u6CE8\u7684&quot;\u8F7B\u91CF\u7F16\u8F91\u5668&quot;:</p><ul><li><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom</a>(\u8DE8\u5E73\u53F0\uFF0C\u514D\u8D39)</li><li><a href="http://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">Sublime Text</a>(\u8DE8\u5E73\u53F0\uFF0C\u5171\u4EAB\u8F6F\u4EF6)</li><li><a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">Notepad++</a>(Windows\uFF0C\u514D\u8D39)</li><li><a href="http://www.vim.org/" target="_blank" rel="noopener noreferrer">vim</a>\u548C<a href="https://www.gnu.org/software/emacs/" target="_blank" rel="noopener noreferrer">Emacs</a> \u5982\u679C\u6015\u4F60\u77E5\u9053\u600E\u4E48\u4F7F\u7528\u5B83\u7684\u8BDD\u3002</li></ul><h2 id="\u4E0D\u8981\u4E89\u5435" tabindex="-1">\u4E0D\u8981\u4E89\u5435 <a class="header-anchor" href="#\u4E0D\u8981\u4E89\u5435" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u5217\u8868\u4E2D\u7684\u7F16\u8F91\u5668\u90FD\u662F\u6211\u548C\u6211\u7684\u670B\u53CB(\u4ED6\u4EEC\u90FD\u662F\u6211\u8BA4\u4E3A\u5F88\u4F18\u79C0\u7684\u5F00\u53D1\u8005)\u5DF2\u7ECF\u4F7F\u7528\u4E86\u5F88\u957F\u65F6\u95F4\u5E76\u4E14\u5F88\u6EE1\u610F\u7684\u3002 \u5F53\u7136\u8FD8\u6709\u5F88\u591A\u5176\u4ED6\u5F88\u597D\u7684\u7F16\u8F91\u5668\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u4E00\u4E2A\u4F60\u6700\u559C\u6B22\u7684\u3002 \u9009\u62E9\u7F16\u8F91\u5668\u5C31\u50CF\u9009\u62E9\u5176\u4ED6\u5DE5\u5177\u4E00\u6837\uFF0C\u662F\u5F88\u4E2A\u4EBA\u5316\u7684\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u4F60\u7684\u9879\u76EE\uFF0C\u4E60\u60EF\u53CA\u4E2A\u4EBA\u7231\u597D\u3002</p>',12),i=[n];function l(u,d,s,p,h,_){return r(),t("div",null,i)}var m=e(a,[["render",l]]);export{f as __pageData,m as default};
