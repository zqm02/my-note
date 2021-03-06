# 忍者代码

> 学而不思则罔，思而不学则殆 ------孔子《论语》

过去的程序员忍者使用这些技巧，来使代码维护者的头脑更加敏锐。代码审查大师在测试任务中寻找它们。
一些新入门的开发者有时候甚至比忍者程序员能够更好地使用它们。
仔细阅读本文，找出你是谁--一个忍者、一个新手、或者一个代码审查者？

> **检测到讽刺意味**
> 许多人试图追随忍者的脚步。只有极少数成功了。

## 简介是智慧的灵魂

把代码尽可能写得短。展示出你是多么的聪明啊。
在编程中，多使用一些巧妙的编程语言特性。
例如，看一下这个三元运算符`'?'`:

```js
// 从一个著名的 JavaScript 库中截取的代码
i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0;
```

很酷，对吗？如果你这样写了，那些看到这一行代码并尝试去理解`i`的值是什么的开发者，就会有一个"快活的"时光了。然后会来寻找你寻求答案。
告诉他短一点总是更好的。引导他进入忍者之路。

## 一个字母的变量

> 道隐无名。夫唯道善贷且成。-----老子《道德经》

另一个缩减代码量的方法是，到处使用单字母的变量名。例如：`a`、`b`、`c`。
短变量就像森林中真正的忍者一样。一下就找不到了。没有人能够通过编辑器的"搜索"功能找到它。即使有人做到了，他也不能"破译"出变量名`a`,`b`到底是什么意思。

.....但是有一个例外的情况。一个真正的忍者绝不会在`"for"`循环中使用`i`作为计数器。在任何地方都可以，但是这里不会用。你随便一找，就能找到很多不寻常的字母。例如`x`,`y`。

使用一个不寻常的变量名多酷啊，尤其是在长达 1-2 页(如果可以的话，你可以写得更长)的循环体中使用的时候。如果某人要研究循环内部实现的时候，他就很难很快地找出变量`x`其实是循环计数器啦。

## 使用缩写

如果团队规则中禁止使用一个字母和模糊的命名-那就缩短命名，使用缩写吧。
像这样：

- `list`-`lst`
- `userAgent`-`ua`
- `browser`-`brsr`
- .....等等

只有具有真正良好直觉的人，才能够理解这样的命名。尽可能地缩短一切。只有真正有价值的人，才能够维护这种代码的开发。

## Soar high，抽象化

> 大方无隅
> 大器晚成
> 大音希声
> 大象无形-----老子(道德经)

当选择一个名字时，尽可能尝试使用最抽象的词语。例如`obj`,`data`,`value`,`item`,`elem`等

- **一个变量的理想名称是`data`**。在任何能用的地方都使用它。的确，每个变量都持有**数据(data)**，对吧？

  ...但是`data`已经用过了怎么办？可以尝试一下`value`，它也很普遍。毕竟，一个变量总会有一个**值(value)**，对吧？

- **根据变量的类型为变量命名**:`str`,`num`......
  尝试一下吧。新手可能会诧异-这些名字对于忍者来说真的有用吗？事实上，有用的！

  一方面，变量名仍然有着一些含义。它说明了变量内是什么:一个字符串、一个数字或是其他的东西。但是当一个局外人试图理解代码时，他会惊讶地发现实际上没有任何有效信息！最终就无法修改你精心思考过的代码。

  我们可以通过代码调试，很容易地看出值的类型。但是变量名的含义呢？它存了哪一个字符串或数字？

  如果思考的深度不够，是没有办法搞明白的。

- **....但是如果找不到更多这样的名字呢？**
  可以加一个数字：`data1`,`item2`,`elem5`.....

## 注意测试

只有一个真正细心的程序员才能理解你的代码。但是怎么检验呢？
**方式之一--使用相似的变量名，像`date`和`data`。**
尽你所能地将它们混合在一起。
想快速阅读这种代码是不可能的。并且如果有一个错别字时.....额......我们卡在这好长时间了，到饭点了(⊙v⊙)。

## 智能同义词

> 道，可道，非常道。名，可名，非常名。----老子(道德经)

对**同一个**东西使用**类似**的命名，可以使生活更有趣，并且能够展现你的创造力。
例如，函数前缀。如果一个函数的功能是在屏幕上展示一个消息--名称可以以`display...`开头，例如`displayMessage`。如果另一个函数展示别的东西，比如一个用户名，名称可以以`show...`开头(例如`showName`)。
暗示这些函数之间有微妙的差异，实际上没有。
与团队中的其他忍者们达成一个协议:如果张三在他的代码中以`display...`来开始一个"显示"函数，那么李四可以用`render...`，王二可以使用`paint...`。你可以发现代码变得多么地有趣多样啊。

......现在是帽子戏法！

对于有非常重要的差异的两个函数-使用相同的前缀。

例如，`printPage(page)`函数会使用一个打印机(printer)。`printText(text)`函数会将文字显示到屏幕上。让一个不熟悉的读者来思考一下:"名字为`printMessage(message)`的函数会将消息放到哪里呢？打印机还是屏幕上？"。为了让代码真正耀眼，`printMessage(message)`应该将消息输出到新的窗口中！

## 重用名字

> 始制有名，名亦既止，夫亦将知止，知止可以不殆。----老子(道德经)

仅在绝对必要时才添加新变量。
否则，重用已经存在的名字。直接把新值写进变量即可。

在函数中，尝试仅使用作为参数传递的变量。

这样就很难确定这个变量的值现在是什么了。也不知道它是从哪里来的。目的是提高阅读代码的人的直觉和记忆力。一个直觉较弱的人必须逐步分析代码，跟踪每个代码分支中的更改。

**这个方法的一个进阶方案，在循环或函数中偷偷地替换掉它的值**。
例如：

```js
function ninjsFunction(elem) {
  // 基于变量 elem进行工作的 20 行代码

  elem = clone(elem);

  // 又 20 行代码，现在使用的是 clone 后的 elem 变量。
}
```

想要在后半部分中使用`elem`的程序员会感到很诧异....只有在调试期间，检查代码之后，他才会发现他正在使用克隆过的变量！

经常看到这样的代码，即使对经验丰富的忍者来说也是致命的。

## 下划线的乐趣

在变量名前加上下划线`_`。例如:`_name`,`_value`。如果只有你知道它们的含义，那就非常棒了。或者，加这些下划线只是为了好玩，没有任何意义，那就更棒了！

加下划线可谓是一箭双雕。首先，代码变得更长，可读性更低；并且，你的开发者小伙伴可能会花费很长时间，来弄清楚下划线是什么意思。

聪明的忍者会在代码的一个地方使用下划线，然后在其他地方刻意避免使用它们。这会使代码变得更加脆弱，并提高了代码未来出现错误的可能性。

## 展示你的爱

向大家展示一下你那丰富的情感！像`superElement`,`megaFrame`,`niceItem`这样的名字一定会启发读者。

事实上，从一方面说，看似写了一些东西:`super...`,`mega...`,`nice...`。但是从另一方面来说--并没有提供任何细节。阅读代码的人可能需要耗费一到两个小时的带薪工作时间，冥思苦想来寻找一个隐藏的含义。

## 重叠外部变量

> 处明者不见暗中一物，处暗者能见明中区事----关尹子

对函数内部和外部的变量，使用相同的名称。很简单，不用费劲想新的名称。

```js
    let user = authenticateUser();

    function render() {
        let user = anotherValue();
        ...
        ...许多行代码...
        ...
        ... // 某个程序员想在这里使用 user 变量....
        ...
    }
```

在研究`render`内部代码的程序员可能不会注意到，有一个内部变量`user`屏蔽了外部的`user`变量

然后他会假设`user`仍然是外部的变量然后使用它，
`authenticateUser()`的结果...陷阱出来啦！你好呀，调试器.....

## 无处不在的副作用

有些函数看起来它们不会改变任何东西。例如`isReady()`,`checkPermission()`,`findTags()`....它们被假定用于执行计算、查找和返回数据，而不是更改任何它们自身之外的数据。这被称为"无副作用"。

**一个非常惊喜的技巧就是，除了主要任务之外，给它们添加一个"有用的"行为**。

当你的同事看到被命名为`is....`,`check....`,`find...`的函数改变了某些东西的时候，他脸上肯定是一脸懵逼的表情-这样会扩大你的理性界限。

**另一个惊喜的方式是，返回非标准的结果**

展示你原来的想法！让调用`checkPermission(...)`的开发者，会很疑惑为什么它不能工作。告诉他们:"去读文档吧"。然后给出这篇文章。

## 强大的函数

> 大道泛兮，其左可右----老子(道德经)

不要让函数受限于名字中写的内容。拓宽一些。

例如，函数`validateEmail(email)`可以(除了检查邮件的正确性之外)显示一个错误消息并要求重新输入邮件。

额外的行为在函数名称中不应该很明显。一个真正的忍者会使它们在代码中也不明显。

**将多个行为合并到一起，可以保护你的代码不被重用**

想象一下，另一个开发者只想检查邮箱而不像输出任何信息。你的函数`validateEmail(email)`对他而言就不合适啦。所以他不会找你问关于这些函数的任何事而打断你的思考。

## 总结

上面的所有"建议"都是从真实的代码中提炼出来的....有时候，这些代码是由有经验的开发者写出来的。

- 遵循其中一丢丢，你的代码就会变得充满惊喜。
- 遵循其中的一大部分，你的代码将真正成为你的代码，没有人会想改变它。
- 遵从所有，你的代码将成为寻求启发的年轻开发者的宝贵案例。
