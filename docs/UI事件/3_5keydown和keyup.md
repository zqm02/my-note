# 键盘:keydown 和 keyup

在我们学习键盘的相关内容之前，请注意，在现代设备上，还有其他"输入内容"的方法。例如，人们使用语音识别或用鼠标复制/粘贴

因此，如果我们想要跟踪`<input>`字段中的所有输入，那么键盘事件是不够的。无论如何，还需要一个名为`input`的事件来跟踪`<input>字段中的更改。对于这样的任务来说，这可能是一个更好的选择。

当我们想要处理键盘行为时，应该使用键盘事件(虚拟键盘也算)。例如，对方向键`UP`和`Down`或热键(包括按键的组合)作出反应。

## keydown 和 keyup

当一个按键被按下时，会触发`keydown`事件，而当按键被释放时，会触发`keyup`事件。

#### event.code 和 event.key

事件对象的`key`属性允许获取字符，而事件对象的`code`属性则允许获取"物理按键代码"。

例如，同一个按键 Z，可以与或不与`Shift`一起按下。我们会得到两个不同的字符:小写的`z`和大写的`Z`。

`event.key`正是这个字符，并且它将是不同的。但是，`event.code`是相同的:

| **key** | `event.key` | `event.code` |
| :-----: | :---------: | :----------: |
|    Z    |   z(小写)   |     KeyZ     |
| Shift+Z |   Z(大写)   |     KeyZ     |

如果用户使用不同的语言，那么切换到另一种语言将产生完全不同的字符，而不是`"Z"`。它将成为`event.key`的值，而`event.code`则始终都是一样的`"KeyZ"`。

> **"KeyZ"和其他按键代码**
> 每个按键的代码都取决于该按键在键盘上的位置。[UI 事件代码规范]()中描述了按键代码。
>
> 例如:
>
> - 字符键的代码为
>   `"Key<letter>"`:`"KeyA"`,`KeyB`等。
> - 数字键的代码
>   `Digit<number>`:`"Digit0"`,`"Digit1"`等。
> - 特殊按键的代码为按键的名字:`"Enter"`,`"Backspace"`,`"Tab"`等。
>
> 有几种广泛应用的键盘布局，该规范给出了每种布局的按键代码。

> \*\*大小写敏感:`"KeyZ"`，不是`keyZ`
> 这是显而易见的，但还是会搞错。
>
> 请规避错误类型:它是`KeyZ`,而不是`keyZ`。像`event.code == "keyZ"`这样的检查不起作用:`"key"`的首字母必须大写。

如果按键没有给出任何字符呢？例如，<kbd>Shift</kbd>或 <kbd>F1</kbd> 或其他。对于这些按键，它们的`event.key`与`event.code`大致相同:

|       **Key**        | `event.key` |       `event.code`        |
| :------------------: | :---------: | :-----------------------: |
|    <kbd>F1</kbd>     |    `F1`     |           `F1`            |
| <kbd>Backspace</kbd> | `Backspace` |        `Backspace`        |
|   <kbd>Shift</kbd>   |   `Shift`   | `ShiftRight`或`ShiftLeft` |

请注意，`event.code`准确地标明了哪个按键按下了。例如，大多数键盘有两个<kbd>Shift</kbd>,一个在左边，一个在右边。`event.code`会准确地告诉我们按下了哪个键，而`event.key`对按键的"含义"负责:它是什么(一个“Shift”)。

假设，我们要处理一个热键:<kbd>Ctrl+Z</kbd>(或 Mac 上的<kbd>Cmd+Z</kbd>)。大多数文本编辑器将“撤销”行为挂在其上。我们可以在`keydown`上设置一个监听器，并检查哪个按键被按下了。

这里有个难题:在这样的监听器中，我们应该检查`event.key`的值还是`event.code`的值？

一方面，`event.key`的值是一个字符，它随语言而改变。如果访问者在 OS 中使用多种语言，并在它们之间进行切换，那么相同的按键将给出多种语言，并在它们之间进行切换，那么相同的按键将给出不同的字符。因此检查`event.code`会更好，因为它总是相同的。

像这样:

```js
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) {
    alert("Undo");
  }
});
```

另一方面，`event.code`有一个问题。对于不同的键盘布局，相同的按键可能会具有不同的字符。

例如，下面是美式布局("QWERTY")和德式布局("QWERTZ")--来自 Wikipedia：

[pic](../.vitepress/dist/assets/keydown1.png)

对于同一个按键，美式布局为"Z",而德式布局为"Y"(字母被替换了)。

从字面上看，对于使用德式布局键盘的人来说，但他们按下<kbd>Y</kbd>时，`event.code`将等于`KeyZ`。

如果我们在代码中检查`event.code == 'KeyZ'`,那么对于使用德式布局键盘的人来说，当他们按下<kbd>Y</kbd>时,这个测试就通过了。

听起来很奇怪，但事实确实如此。
