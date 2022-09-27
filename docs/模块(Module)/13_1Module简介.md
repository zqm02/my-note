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

在下面的这个例子中，我们导入了两个脚本，`hello.js`尝试使用在`user.js`中声明的变量`user`。它失败了，因为它是一个单独的模块(你在控制台中可以看到报错):

????
????
????

模块应该`export`它们想要被外部访问的内容，并`import`它们所需要的内容。

- `user.js`应该导出`user`变量。
- `hello.js`应该导入从`user.js`模块中导入它。

换句话说，对于模块，我们使用导入/导出而不是依赖全局变量。

这是正确的变体:

????
????
????

在浏览器中，对于 HTML 页面，每个`<script type="module">`都存在独立的顶级作用域。

下面是同一页面上的两个脚本，都是`type="module"`。它们看不到彼此的顶级变量:

```js
  <script type="module">
  //变量仅在这个 module script 内可见
  let user = "John";
  </script>

  <script type="module">
  alert(user);  //Error:user is not defined
  </script>
```

> **请注意:**
> 在浏览器中，我们可以通过将变量显式地分配给`window`的一个属性，使其成为窗口级别的全局变量。
> 例如，`window.user="John"`。
>
> 这样所有脚本都会看到它，无论脚本是否带有`type="module"`。
>
> 也就是说，创建这种全局变量并不是一个好的方式。请尽量避免这样做。

### 模块代码仅在第一次导入时被解析

如果同一个模块被导入到多个其他位置，那么它的代码只会执行一次，即在第一次被导入时。然后将其导出(export)的内容提供给进一步的导入(importer)。

只执行一次会产生很重要的影响，我们应该意识到这一点。

让我们看几个例子。

首先，如果执行一个模块中的代码会带来副作用(side-effect)，例如显示一条消息，那么多次导入它只会触发一次显示--即第一次:

```js
//📁 alert.js
alert("Module is evaluated!");
```

```js
  // 在不同的文件中导入相同的模块

  //📁 1.js
  import `./alert.js`;  //Module is evaluated!

  //📁 2.js
  import `./alert.js`;  //(什么都不显示)
```

第二次导入什么也没显示，因为模块已经执行过了。

这里有一条规则:顶层模块代码应该用于初始化，创建模块特定的内部数据结构。如果我们需要多次调用某些东西--我们应该将其以函数的形式导出，就像我们在上面使用`sayHi`那样。

现在，让我们看一个更复杂的例子。

我们假设一个模块导出了一个对象:

```js
  //📁 admin.js
  export let admin = {
    name:"John";
  }
```

如果这个模块被导入到多个文件中，模块仅在第一次被导入时被解析，并创建`admin`对象，然后将其传入到所有的导入。

所有的导入都只获得了一个唯一的`admin`对象:

```js
  //📁 1.js
  import {admin} from `./admin.js`;
  admin.name = "Pete";

  //📁 2.js
  import {admin} from './admin.js';
  alert(admin.name); //Pete

  //1.js 和 2.js 引用的是同一个 admin 对象
  //在 1.js 中对对象做的更改，在 2.js 中也是可见的
```

正如你所看到的，当在`1.js`中修改了导入的`admin`中的`name`属性时，我们在`2.js`中可以看到新的`admin.name`。

这正是因为该模块只执行了一次。生成导出，然后这些导出在导入之间共享，因此如果更改了`admin`对象，在其他导入中也会看到。

**这种行为实际上非常方便，因为它允许我们"配置"模块。**

换句话说，模块可以提供需要配置的通用功能。例如身份验证需要凭证。那么模块可以导出一个配置对象，期望外部代码可以对其进行赋值。

这是经典的使用模式:

1. 模块导出一些配置方法，例如一个配置对象。
2. 在第一次导入时，我们对其进行初始化，写入其属性。可以在应用顶级脚本中进行此操作。
3. 进一步地导入使用模块。

例如，`admin.js`模块可能提供了某些功能(例如身份验证)，但希望凭证可以从模块之外赋值到`config`对象:

```js
//📁 admin.js
export let config = {};

export function sayHi() {
  alert(`Ready to serve,${config.user}!`);
}
```

这里，`admin.js`导出了`config`对象(最初是空的，但也可能有默认属性)。

然后，在`init.js`中，我们应用地第一个脚本，我们从`init.js`导入了`config`并设置了`config.user`:

```js
//📁 init.js
import { config } from "./admin.js";
config.user = "Pete";
```

....现在模块`admin.js`已经是被配置过的了。

其他导入可以调用它，它会正确显示当前用户:

```js
//📁 another.js
import { sayHi } from "./admin.js";

sayHi(); //Ready to serve, Pete!
```

#### import.meta

`import.meta`对象包含于当前模块的信息。

它的内容取决于其所在的环境。在浏览器环境中，它包含当前的 URL，或者如果它是在 HTML 中的话，则包含当前页面的 URL。

```js
<script type="module">
  alert(import.meta.url); //脚本的 URL //对于内联脚本来说，则是当前 HTML 页面的
  URL
</script>
```

#### 在一个模块中，"this"是 undefined

这是一个小功能，但为了完整性，我们应该提到它。

在一个模块中，顶级`this`是 undefined

将其与非模块脚本进行比较会发现，非模块脚本的顶级`this`是全局对象。

```js
  <script>
  alert(this);  //window
  </script>

  <script type="module">
  alert(this);  // undefined
  </script>
```

## 浏览器特定功能

与常规脚本相比，拥有`type="module"`标识的脚本有一些特定于浏览器的差异。

如果你是第一个阅读或者你不打算在浏览器中使用 JavaScript，那么你可以跳过本节内容。

### 模块脚本是延迟的

模块脚本 **总是** 被延迟的，于`defer`特性(在脚本:async，defer 一章中描述的)对外部脚本和内联脚本(inline script)的影响是相同。

也就是说:

- 下载外部模块脚本
