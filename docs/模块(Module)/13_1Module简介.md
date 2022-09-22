# 模块(Module)简介

随着我们的应用越来越大，我们想要将其拆分成多个文件，即所谓的"模块(Module)"。一个模块可以包含用于特定目的的类或函数库。

很长一段时间，JavaScript 都没有语言级(language-level)的模块语法。这不是一个问题，因为最初的脚本又小又简单，所以没必要将其模块化。

但是最终脚本变得越来越复杂，因此社区发明了许多种方法来将代码组织到模块中，使用特殊的库按需加载模块。

列举一些(出于历史原因):

- [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition)--最古老的模块系统之一，最初由[require.js](http://requirejs.org/)库实现。
- [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)--为 Node.js 服务器创建的模块系统。
- [UMD](https://github.com/umdjs/umd)--另外一个模块系统，建议作为通用的模块系统，它与 AMD 和 CommonJS 都兼容。

现在，它们都在慢慢成为历史的一部分，但我们仍然可以在旧脚本中找到它们。

语言级的模块系统在 2015 年的时候出现在了标准(ES6)中，此后逐渐发展，现在已经得到了所有主流浏览器和 Node.js 的支持。因此，我们将从现在开始学习现代 JavaScript 模块(module)。

## 什么是模块

一个模块(module)就是一个文件。一个脚本就是一个模块。就这么简单。

模块可以相互加载，并可以使用特殊的指令`export`和`import`来交换功能，从另一个模块调用一个模块的函数:

- `export`关键字标记了可以从当前模块外部访问的变量和函数。
- `import`关键字允许从其他模块导入功能。

例如，我们有一个`sayHi.js`文件导出了一个函数:

```js
//📁 sayHi.js
export function sayHi(user) {
  alert(`Hello,${user}!`);
}
```

....然后另一个文件可能导入并使用了这个函数:

```js
// 📁 main.js

import { sayHi } from "./sayHi.js";

alert(sayHi); //function ...
sayHi("John"); //Hello,John!
```

`import`指令通过相对于当前文件的路径`./sayHi.js`加载模块，并将导入的函数`sayHi`分配(assign)给相应的变量。

让我们在浏览器中运行一下这个示例。

由于模块支持特殊的关键字和功能，因此我们必须通过使用
`<script type="module">`特性(attribute)来告诉浏览器，此脚本应该被当作模块(module)来对待。

???
???
???

浏览器会自动获取并解析(evaluate)导入的模块(如果需要，还可以分析该模块的导入)，然后运行该脚本。

> **模块只通过 HTTP(s)工作，而非本地**
> 如果你尝试通过`file://`协议在本地打开一个网页，你会发现`import/export`指令不起作用。你可以使用本地 Web 服务器，例如[static-server](https://www.npmjs.com/package/static-server#getting-started),或者使用编辑器的"实时服务器"功能，例如 VS Code 的[Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)来测试模块。

## 模块核心功能

与"常规"脚本相比，模块有什么不同呢？

下面是一些核心的功能，对浏览器和服务器的 JavaScript 来说都有效。

### 始终使用"use strict"

模块始终在严格模式下运行。例如，对于个未声明的变量赋值将产生错误(译注：在浏览器控制台可以看到 error 信息)。

```js
<script type="module">a = 5; //error</script>
```

#### 模块级作用域

每个模块都有自己的顶级作用域(top-level scope)。换句话说，一个模块中的顶级作用域变量和函数在其他脚本中是不可见的。
