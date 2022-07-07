# Hello,world!

本教程的这一部分内容是关于 JavaScript 语言本身的。
但是，我们需要一个工作环境来运行我们的脚本，由于本教程是在线的，所以浏览器是一个不错的选择。我们会尽可能少地使用浏览器特定的命令(比如`alert`)，所以如果你打算专注于另一个环境(比如 node.js)，你就不必多花时间来关心这些特定指令了。我们将在本教程的[下一部分](https://zh.javascript.info/ui)中专注于浏览器中的 JavaScript。
首先，让我们看看如何将脚本添加到网页上。对于服务器端环境（比如 Node.js），你只需要使用诸如`node my.js`的命令来执行它。

## “script”标签

我们几乎可以使用`<script>`标签将 JavaScript 程序插入到 HTML 文档的任何位置。
比如：

```js
<!DOCTYPE HTML>
 <html>
 <body>

   <p>script标签之...</p>

   <script>
        alert('hello,world!');
   </script>

   <p>...script标签之后</p>

   </body>
   </html>
```

你可以通过点击右上角的“播放”按钮来运行这个例子。
`<script>`标签中包裹了 JavaScript 代码，当浏览器遇到`<script>`标签，代码就会自动运行。

## 现代的标记(markup)

`<script>`标签有一些现在很少用到的特性(attribute),但是我们可以在老代码中找到它们：`type`特性:`<sctipt type=...>`
在老的 HTML4 中，要求 script 标签有`type`特性。通常是`type="text/javascript"`。这样的特性声明现在已经不再是需要。而且，现代的 HTML 标准已经王全改变了此特性的含义。现在，它可以用于 JavaScript 模块。但这是一个高阶话题，我们将在本教程的另一部分探讨 JavaScript 模块。

`language`特性：`<script language=...>`
这个特性完全是为了显示脚本使用的语言。这个特性已经没有任何意义，因为语言默认就是 JavaScript。不再需要使用它了。

**脚本前后的注释**
在非常古老的书籍和指南中，你可能会在`<script>`标签里面找到注释，就像这样：

```js
    <script type="text/javascript"><!---...---></script>
```

现代 JavaScript 中已经不这样使用了。这些注释用于不支持`<script>`标签的古老的浏览器隐藏 JavaScript 代码的。由于最近 15 年内发布的浏览器都没有这样的问题，因此这样的注释能帮你辨认除一些老掉牙的代码。

## 外部脚本

如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。
脚本文件可以通过`src`特性(attribute)添加到 HTML 文件中。

```js
<script src="/path/to/script.js"></script>
```

这里，`/path/to/script.js`是脚本文件从网站根目录开始的绝对路径。当然也可以提供当前页面的相对路径。例如，`src="script.js"`，就像`src="./script.js"`，表示当前文件夹中的`"script.js"`文件。

我们也可以提供一个完整的 URL 地址 例如：

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

要附加多个脚本，请使用多个标签：

```js
    <script src="/js/script1.js"></script>
    <script src=""/js/script2.js></script>
```

> 请注意：
> 只有最简单的脚本才可以嵌入到 HTML 中。更复杂的脚本存放在单独的文件中。
> 使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的[缓存](https://en.wikipedia.org/wiki/Web_cache)中。
> 之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。
> 这可以节省流量，并使得页面(加载)更快。

> > **如果设置`src`特性，`<script>`标签内容将会被忽略**。
> > 一个单独的`<script>`标签不能同时有`src`特性和内部包裹的代码。
> > 这样将不会工作：
> >
> > ```js
> > <script src="file.js">
> > alert(1);   //此内容会被忽略，因为设定了src
> > ```
> >
> > 我们必须进行选择，要么使用外部的`<script src="...">`,要么使用正常的包裹代码的`<script>`。
> > 为了让上面的例子工作，我们可以将它分成两个`<script>`标签。
> >
> > ```js
> > <script src="file.js"></script>
> > <script>
> >   alert(1);
> > </script>
> > ```

## 总结

- 我们可以使用一个`<script>`标签将 JavaScript 代码添加到页面中。
- `type` 和`language`特性(attribute)不是必需的。
- 外部的脚本可以通过`<script src="/path/to/script.js"><script>`的方式插入
