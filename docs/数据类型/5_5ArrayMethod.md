# 数组方法

数组提供的方法有很多。为了方便起见，在本章中，我们将按组讲解。

## 添加/移除数组元素

我们已经学了从数组的首端或尾端添加和删除元素的方法:

- `arr.push(...items)`--从尾端添加元素。
- `arr.pop()`--从尾端提取元素。
- `arr.shift()`--从首端提取元素。
- `arr.unsift(...items)`--从首端添加元素。

这里还有其他几种方法。

**splice**

如何从数组中删除元素？

数组是对象，所以我们可以尝试使用`delete`:

```js
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert(arr[1]); // undefined

// now arr = ["I" , "home"];
alert(arr.length); // 3
```

元素被删除了，但数组仍然有 3 个元素，我们可以看到`arr.length == 3`。

这很正常，因为`delete obj.key`是通过`key`来移除对应的值。对于对象来说是可以的。但是对于数组来说，我们通常希望剩下的元素能够移动并占据被释放的位置。我们希望得到一个更短的数组。

所以应该使用特殊的方法。

[arr.spllice](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)方法可以说是处理数组的瑞士军刀。它可以做所有的事情:
添加，删除和插入元素。

语法是:

```js
    arr.splice(start[,deleteCount,elem1,...,elemN]);
```

它从索引`start`开始修改`arr`:删除`deleteCount`个元素并在当前位置插入`elem1,...,elemN`。最后返回被删除的元素所组成的数组。

通过例子我们可以很容易地掌握这个方法。

让我们从删除开始:

```js
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // 从索引 1 开始删除 1 个元素

alert(arr); // ["I" , "JavaScript"]
```

简单，对吧？从索引`1`开始删除`1`个元素。(译注：当只填写了`splice`的`start`参数时，将删除从索引`start`开始的所有数组项)

在下一个例子中，我们删除了 3 个元素，并用另外两个元素替换它们:

```js
let arr = ["I", "study", "JavaScript", "right", "now"];

// 删除数组的前三项，并使用其他内容代替它们
arr.splice(0, 3, "Let's", "dance");

alert(arr); // 现在 ["Let's", "dance", "righy", "now"]
```

在这里我们可看到`splice`返回了被删除的元素所组成的数组:

```js
let arr = ["I", "study", "JavaScript", "right", "now"];

// 删除前两个元素
let removed = arr.splice(0, 2);

alert(removed); // "I","study"  <---被从数组中删除了的元素
```

我们可以将`deleteCount`设置为`0`，`splice`方法就能插入元素而不用删除任何元素:

```js
let arr = ["I", "study", "JavaScript"];

// 从索引 2 开始
// 删除 0 个元素
// 然后插入 "complex" 和 "language"
arr.splice(2, 0, "complex", "language");

alert(arr); //"I","study","complex","language","JavaScript"
```

> **允许负向索引**
> 在这里和其他数组方法中，负向索引都是被允许的。它们从数组末尾计算位置，如下所示:
>
> ```js
> let arr = [1, 2, 5];
>
> // 从索引 -1 (尾端前一位)
> // 删除 0 个元素
> // 然后插入 3 和 4
> arr.splice(-1, 0, 3, 4);
>
> alert(arr); // 1,2,3,4,5
> ```

**slice**
[arr.slice](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)方法比`arr.splice`简单得多。

语法是:

```js
arr.slice([start], [end]);
```

它会返回一个新数组，将所有从索引`start`到`end`(不包括`end`)的数组复制到一个新的数组。
`start`和`end`都可以是负数，在这种情况下，从末尾计算索引。

它和字符串的`str.slice`方法有点像，就是把子字符串替换成子数组。

例如:

```js
let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s(复制从位置 1 到位置 3 的元素)

alert(arr.slice(-2)); // s,t(复制从位置 -2 到尾端的元素)
```

我们也可以不带参数地调用它:`arr.slice()`会创建一个`arr`副本。其通常用于获取副本，以进行不影响原始数组的进一步转换。

**concat**
[arr.concat](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)创建一个新数组，其中包含来自于其他数组和其他项的值。

语法:

```js
    arr.concat(arg1,arg2...);
```

它接受任意数量的参数--数组或值都可以。

结果是一个包含来自于`arr`，然后是`arg1`,`arg2`的元素的新数组。

如果参数`argN`是一个数组，那么其中的所有元素都会被复制。否则，将复制参数本身。

例如:

```js
let arr = [1, 2];

// 从 arr 和 [3,4] 创建一个新数组
alert(arr.concat([3, 4])); // 1,2,3,4

// 从 arr 和 [3,4] 和 [5,6] 创建一个新数组
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// 从 arr 、 [3,4] 、 5 和 6 创建一个新数组
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
```

通常，它只复制数组中的元素。其他对象，即使它们看起来像数组一样，但仍然会被作为一个整体添加:

```js
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

alert(arr.concat(arrayLike)); // 1,2,[object Object]
```

.....但是，如果类数组对象具有
`Symbol.isConcatSpreadable`属性，那么它就会被`concat`当作一个数组来处理:此对象中的元素将被添加:

```js
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else"
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert(arr.concat(arrayLike));   // 1,2,something,else
```

## 遍历:forEach

[arr.forEach](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)方法允许为数组的每个元素都运行一个函数。

语法:

```js
arr.forEach(function (item, index, array) {
  //...do something with item
});
```

例如，下面这个程序显示了数组的每个元素:

```js
// 对每个元素调用 alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

而这段代码更详细地介绍了它们在目标数组中的位置:

```js
        ["Bilbo","Gandalf","Nazgul"].forEach((item,index,array)) => {
            alert(`${item} is at index ${index} in ${array}`);
        }
```

该函数的结果(如果它有返回)会被抛弃和忽略。

## 在数组中搜索

现在，让我们介绍在数组中进行搜索的方法。

**indexOf/lastIndexOf 和 includes**

[arr.indexOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)和[arr.includes](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)方法语法相似，并且作用基本上也与字符串的方法相同，只不过这里是对数组元素而不是字符进行操作:

- `arr.indexOf(item,from)`--从索引`from`开始搜索`item`，如果找到则返回索引，否则返回`-1`。
- `arr.includes(item,from)`--从索引`from`开始搜索`item`，如果找到则返回`true`(译注:如果没找到，则返回`false`)。

通常使用这些方法时只会传入一个参数:传入`item`开始搜索。默认情况下，搜索是从头开始的。

例如:

```js
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true
```

请注意，`indexOf`和`includes`使用严格相等`===`进行比较。所以，如果我们搜索`false`，它会准确找到`false`而不是数字`0`。

如果我们想检查数组中是否包含元素`item`，并且不需要知道其确切的索引，那么`arr.includes`是首选。

方法[arr.lastIndexOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)与`indexOf`相同，但从右向左查找。

```js
    let fruits = ["Apple","Orange","Apple"];

    alert(arr.indexOf("Apple"));   // 0 (第一个 Apple)
    alert(arr.lastIndexOf("Apple"));  2 (最后一个 Apple)
```

> **方法`includes`可以正确的处理`NaN`**
> 方法`includes`的一个次要但值得注意的特性是，它可以正确处理`NaN`，这与`indexOf`不同:
>
> ```js
> const arr = [NaN];
> alert(arr.indexOf(NaN)); // -1 (错，应该为 0 )
> alert(arr.includes(NaN)); // true
> ```
>
> 这是因为`includes`是在比较晚的时候才被添加到 JavaScript 中的，并且在内部使用了更新了的比较算法。

**find 和 findIndex/findLastIndex**

想象一下，我们有一个对象数组。我们如何找到具有特定条件的对象？

这时可以用[arr.find](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/find)方法。

语法如下:

```js
let result = arr.find(function (item, index, array) {
  //如果然会true,则返回 item 并停止迭代
  //对于假值(falsy)的情况，则返回 undefined
});
```

依次对数组中的每个元素调用该函数:

- `item`是元素
- `index`是它的索引
- `array`是数组本身

如果它返回`true`，则搜索停止，并返回`item`。如果没有搜索到，则返回`undefined`。

例如，我们有一个存储用户的数组，每个用户都有`id`和`name`字段。让我们找到`id == 1`的那个用户:

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John
```

在现实生活中，对象数组是非常常见的，所以`find`方法非常有用。

注意在这个例子中，我们传给了`find`一个单参数函数`item => item.id == 1`。这很典型，并且`find`方法的其他参数很少使用。

[arr.findIndex](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)方法(与`arr.find`)具有相同的语法，但它返回找到的元素的索引，而不是元素本身。如果没找到，则返回`-1`。

[arr.finLastIndex](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)方法类似于`findIndex`，但从右向左搜索，类似于`lastIndexOf`。

这是一个例子:

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// 寻找第一个 John 的索引
alert(users.findIndex((user) => user.name == "John")); // 0

// 寻找最后一个 John 的索引
alert(users.findLastIndex((user) => user.name == "John")); // 3
```

**filter**
`find`方法搜索的是使函数返回`true`的第一个(单个)元素/

如果需要匹配的有很多，我们可以使用[arr.filter(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)。

语法与`find`大致相同，但是`filter`返回的是所有匹配元素组成的数组:

```js
    let results = arr.filter(function(item,index,array) {
        // 如果 true item 被push 到 results，迭代继续
        // 如果什么都没找到，则返回空数组
    })；
```

例如:

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// 返回前两个用户的数组、
let someUsers = users.filter((item) => item.id < 3);

alert(someUsers.length); // 2
```

## 转换数组

让我们继续学习进行数组转换和重新排序的方法。

**map**
[arr.map](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/map)方法是最有用和经常使用的方法之一。

它对数组的每个元素都调用函数，并返回结果数组。

语法:

```js
let results = arr.map(function (item, index, array) {
  // 返回新值而不是当前元素
});
```

例如，在这里我们将每个元素转换为它的字符串长度:

```js
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6
```

**sort(fn)**

[arr.sort](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)方法对数组进行**原位(in-place)**排序，更改元素的顺序。(译注:原位是指在此数组内，而非生成一个新数组。)

它还返回排序后的数组，但是返回值通常会被忽略，因为修改了`arr`本身。

语法:

```js
let arr = [1, 2, 15];

//该方法重新排列了 arr 的内容
arr.sort();

alert(arr); // 1,15,2
```

你有没有注意到结果有什么奇怪的地方？

顺序变成了`1,15,2`。不对，但为什么呢？

**这些元素默认情况下被按字符串进行排序**

从字面上看，所有元素都被转换为字符串，然后进行比较。对于字符串，按照词典顺序进行排序，实际上应该是`"2" > "5"`。

要使用我们自己的排序顺序，我们需要提供一个函数作为`arr.sort()`的参数。

该函数应该比较两个任意值并返回:

```js
function compare(a, b) {
  if (a > b) return 1; // 如果第一个值比第二个值大
  if (a == b) return 0; // 如果两个值相等
  if (a < b) return -1; // 如果第一个值比第二个值小
}
```

例如，按数字进行排序:

```js
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

alert(arr); // 1,2,15
```

现在结果符合预期了。

我们思考一下这里发生了什么。`arr`可以是任何内容的数组，对吗？它可能包含数字，字符串，对象或其他任何内容。我们有一组**一些元素**。要对其进行排序，我们需要一个**排序函数**来确认如何比较这些元素。默认是按字符串进行排序的。

`arr.sort(fn)`方法实现了通用的排序算法。我们不需要关心它的内部工作原理(大多数情况下都是经过[快速排序](https://en.wikipedia.org/wiki/Quicksort)或[Timsort](https://en.wikipedia.org/wiki/Timsort)算法优化的)。它将遍历数组，使用提供的函数比较其元素并对其重新排序，我们所需要的就是提供执行比较的函数`fn`。

顺便说一句，如果我们想知道要比较哪些元素--那么什么都不会阻止 alert 它们:

```js
[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  alert(a + "<>" + b);
  return a - b;
});
```

该算法可以在此过程中，将一个元素与多个其他元素进行比较，但是它会尝试进行尽可能少的比较。

> **比较函数可以返回任何数字**
> 实际上，比较函数只需要返回一个正数表示"大于"，一个负数表示"小于"。
>
> 通过这个原理我们可以编写更短的函数:
>
> ```js
> let arr = [1, 2, 15];
>
> arr.sort(function (a, b) {
>   return a - b;
> });
>
> alert(arr); // 1,2,15
> ```

> **箭头函数最好**
> 你还记得[箭头函数](https://zh.javascript.info/arrow-functions-basics)吗？这里使用箭头函数会更加简洁:
>
> ```js
> arr.sort(a,b) => a - b;
> ```
>
> 这与上面更长的版本完全相同。

> **使用`localeCompare`for strings**
> 你记得[字符串比较](https://zh.javascript.info/string#correct-comparisons)算法吗？默认情况下，它通过字母的代码比较字母。
