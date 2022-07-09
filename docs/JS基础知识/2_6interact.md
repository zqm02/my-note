# 交互：alert、prompt 和 confirm

由于我们将使用浏览器作为我们的演示环境，让我们看几个与用户交互的函数:`alert`、`prompt`和`confirm`。

## alert

它会显示一条信息，并等待用户按下"ok"
例如:

```js
alert("Hello");
```

弹出的这个带有信息的小窗口被称为**模态窗**。"modal"意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到它们处理完窗口。在上面实例这种情况下--直到用户点击"确定"按钮。

## prompt

`prompt`函数接收两个参数:

```js
    result = prompt(title,[default]);
```

浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。
`title`
显示给用户的文本
`default`
可选的第二个参数，指定 input 框的初始值。

> **语法中的方括号`[...]`**
> 上述语法中`default`周围的方括号表示参数是可选的，不是必需的。

访问者可以在提示输入框栏中输入一些内容，然后按"确定"键。然后我们在`result`中获取该文本。或者他们可以按取消键或按`Esc`键取消输入，然后我们得到`null`作为`result`。
`result`将返回用户在`input`框输入的文本，如果用户取消了输入，则返回`null`。
举个例子:

```js
let age = prompt("Hello old are you ?, 100");

alert(`You are ${age} years old !`); //You are years old !
```

> **IE 浏览器会提供默认值**
> 第二个参数是可选的。但是如果我们不提供的话，Internet Explorer 会把`undefined`插入到 prompt。
> 我们可以在 Internet Explorer 中运行下面这段代码来看看效果：
>
> ```js
> let test = prompt("Test");
> ```
>
> 所以，为了 prompt 在 IE 中有好的效果，我们建议始终提供第二个参数：
>
> ```js
> let test = prompt("Test", "");
> ```
>
> **不过，IE 浏览器已经退役**

## confirm

语法:

```js
result = confirm(question);
```

`confirm`函数显示一个带有`question`以及确定和取消两个按钮的模态窗口
点击确定返回`true`,点击取消返回`false`。
例如:

```js
let isBoss = confirm("Are you the boss?");

alert(isBoss); //如果"确定"按钮被按下，则显示true
```

# 总结

我们学习了与用户交互的 3 个浏览器的特定函数:
`alert`
显示信息。
`prompt`
显示信息要求用户输入文本。点击确定按钮返回文本，点击取消或按下`Esc`键返回`null`。
`confirm`
显示信息等待用户点击确定或取消。点击确定返回`true`,点击取消或按下`Esc`键返回`false`。

这些方法都是模态的，它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。
上述所有方法有两个限制： 1.模态窗口的确切位置有浏览器决定。通常在页面中心。 2.窗口的确切外观也却决于浏览器。我们不能修改它。

这就是简单的代价。还有其他一些方式可以显示更漂亮的窗口，并与用户进行更丰富的交互，但如果"花里胡哨"不是非常重要，那使用本节讲的这些方法也挺好。。。。
