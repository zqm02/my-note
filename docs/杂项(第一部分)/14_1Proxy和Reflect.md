# Proxy 和 Reflect

一个`Proxy`对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。

Proxy 被用于了许多库和某些浏览器框架。在本文中，我们将看到许多实际应用。

## Proxy

语法:

```js
let proxy = new Proxy(target, handler);
```

- `target`--是要包装的对象，可以是任何东西，包括函数。
- `handler`--代理配置:带有"捕捉器"("traps",即拦截操作的方法)的对象。比如`get`捕捉器用于读取`target`的属性，`set`捕捉器用于写入`target`的属性，等等。

对`proxy`进行操作，如果在`handler`中存在相应的捕捉器，则它将运行，并且 Proxy 有机会对其进行处理，否则将直接对 target 进行处理。

首先，让我们创建一个没有任何捕捉器的代理(Proxy):

```js
let target = {};
let proxy = new Proxy(target, {}); //空的 handler 对象

proxy.test = 5; //写入 proxy 对象 (1)
alert(target.test); //5，test 属性出现在了 target 中！

alert(proxy.test); //5,我们也可以从 proxy 对象读取它 (2)

for (let key in proxy) alert(key); //test,迭代也正常工作 (3)
```

由于没有捕捉器，所以对`proxy`的操作直接转发给了`target`。

1. 写入操作`proxy.test=`会将值写入`target`。
2. 读取操作`proxy.test`会从`terget`返回对应的值。
3. 迭代`proxy`会从`target`返回对应的值。

我们可以看到，没有任何捕捉器，`proxy`是一个`target`的透明包装器(wrapper)。

![picture](../assert/imgs/proxy.png)

`Proxy`是一种特殊的"奇异对象(exotic object)"。它没有自己的属性。如果`handler`为空，则透明地将操作转发给`target`。

要激活更多功能，让我们添加捕捉器。

我们可以用它们拦截什么？

对于对象的大多数操作，JavaScript 规范中有一个所谓的"内部方法"，它描述了最底层的工作方式。例如`[[Get]]`，用于读取属性的内部方法，`[[Set]]`，用于写入属性的内部方法，等等。这些方法仅在规范中使用，我们不能直接通过方法名调用它们。

Proxy 捕捉器会拦截这些方法的调用。它们在[proxy 规范](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)和下表中被列出。

对于每个内部方法，此表中有一个捕捉器:可用于添加到`new Proxy`的`handler`参数中以拦截操作的方法名称:
|**内部方法**|**Handler 方法**|**何时触发**|
|:----:|:----:|:----:|
|[[Get]]|get|读取属性|
|[[Set]]|set|写入属性|
|[[HasProperty]]|has|`in`操作符|
|[[Delete]]|deleteProperty|`delete`操作符|
|[[Call]]|apply|函数调用|
|[[Construct]]|construct|`new`操作符|
|[[GetPrototypeOf]]|getPrototypeOf|[Object.getPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)|
|[[SetPrototypeOf]]|setPrototypeOf|[Object.setPrototypeOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)|
|[[IsExtensible]]|isExtensions|[Object.isExtensible](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)|
|[[PreventExtensions]]|preventExtensions|[Object.preventExtensions](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)|
|[[DefineOwnProperty]]|defineProperty|[Object.defineProperty](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.defineProperties](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)|
|[[GetOwnProperty]]|getOwnPropertyDescriptor|[Object.getOwnPropertyDescriptor](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), for...in,Object.keys/values/entries|
|[[OwnPropertyKeys]]|ownKeys|[Object.getOwnPropertyNames](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames), [Object.getOwnPropertysymbols](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols), `for..in`, `Object.keys/values/entries`|

> **不变量(Invariant)**
> JavaScript 强制执行某些不变量--内部方法和捕捉器必须满足的条件。
>
> 其中大多数用于返回值:
>
> - `[[Set]]`如果值已成功写入，则必须返回`true`，否则返回`false`。
> - `[[Delete]]`如果已经成功删除该值，则必须返回`true`，否则返回`false`。
> - ....依此类推，我们将在下面的示例中看到更多内容。
>
> 还有其他一些不变量，例如:
>
> - 应用于代理(proxy)对象的
>   `[[GetPrototypeOf]]`，必须返回与应用于被代理对象的`[[GetPrototypeOf]]`相同的值。换句话说，读取代理对象的原型始终返回被代理对象的原型。
>
> 捕捉器可以拦截这些操作，但是必须遵循上面这些规则。
>
> 不变量确保语言功能的正确和一致的行为。完整的不变量列表在[规范](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)中。如果你不做奇怪的事情，你可能就不会违反它们。

让我们来看看它们是如何在实际示例中工作的。

## 带有"get"捕捉器的默认值

最常见的捕捉器是用于读取/写入的属性。
要拦截读取操作，`handler`应该有`get(target,property,receiver)`方法。

读取属性时触发该方法，参数如下:

- `target`--是目标对象，该对象被作为第一个参数传递给`new Proxy`。
- `property`--目标属性名
- `receiver`--如果目标属性是一个 getter 访问器属性，则`receiver`就是本次读取属性所在的`this`对象。通常，这就是`proxy`对象本身(或者，如果我们从 proxy 继承，则是从该 proxy 继承的对象)。现在我们不需要此参数，因此稍后我们将对其进行详细介绍。

让我们用`get`来实现一个对象的默认值。

我们将创建一个对不存在的数组项返回`0`的数组。

通常，当人们尝试获取不存在的数组项时，他们会得到`undefined`，但是我们在这将常规数组包装到代理(proxy)中，以捕获读取操作，并在没有要读取的属性的时返回`0`:

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; //默认值
    }
  },
});

alert(numbers[1]); // 1
alert(numbers[123]); // 0 (没有这个数组项)
```

正如我们所看到的，使用`get`捕捉器很容易实现。

我们可以用`Proxy`来实现"默认"值得任何逻辑。

想象一下，我们有一本词典，上面有短语及其翻译:

```js
let dictionary = {
  Hello: "Hola",
  Bye: "Adios",
};

alert(dictionary["Hello"]); //Hola
alert(dictionary["Welcome"]); // undefined
```

现在，如果没有我们要读取的短语，那么从`dictionary`读取它将返回`undefined`。但实际上，返回一个未翻译的短语通常比`undefined`要好。因此，让我们在这种情况下返回一个未翻译的短语来代替`undefined`。

为此，我们将把`dictionary`包装进一个拦截读取操作的代理:

```js
let dictionary = {
  Hello: "Hola",
  Bye: "Adios",
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    //拦截读取属性操作
    if (phrase in target) {
      //如果词典中有该短语
      return target[phrase]; //返回其翻译
    } else {
      //否则返回未翻译的短语
      return phrase;
    }
  },
});

//在词典中查找任意短语！
//最坏的环境也只是它们没有被翻译
alert(dictionary["Hello"]); //Hola
alert(dictionary["Welcone to Proxy"]); //Welcome to Proxy (没有被翻译)
```

> **请注意：**
> 请注意代理如何覆盖变量:
>
> ```js
>   dictionary = new Proxy(dictionary,...);
> ```
>
> 代理应该在所有地方都完全代替目标对象。目标对象被代理后，任何人都不应该再引用目标对象。否则很容易搞砸。

## 使用"set"捕捉器进行验证

假设我们想要一个专门用于数字的数组。如果添加了其他类型的值，则应该抛出一个错误。

当写入属性时，`set`捕捉器被触发。
`set(target,property,value,receiver)`:

- `target`--是目标对象，该对象被作为第一个参数传递给`new Proxy`,
- `property`--目标属性名称，
- `value`--目标属性的值，
- `receiver`--与`get`捕捉器类似，仅与 setter 访问器属性相关。

如果写入操作(setter)成功，`set`捕捉器应该返回`true`，否则返回`false`(触发`TypeError`)。

让我们用它来验证新值:

```js
let numbers = [];

numbers = new Proxy(numbers, {
  //(*)
  set(target, prop, val) {
    // 拦截写入属性操作
    if (typeof val == "number") {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1); //添加成功
numbers.push(2); //添加成功
alert("Length is:" + numbers.length); //2

numbers.push("test"); //TypeError (proxy 的'set' 返回false)

alert("This line is never reached (error in the line above)");
```

请注意:数组的内建方法依然有效！值被使用`push`方法添加到数组。当值被添加到数组后，数组的`length`属性会自动添加。我们的代理对象 proxy 不会破坏任何东西。

我们不必重写诸如`push`和`unshift`等添加元素的数组方法，就可以再其中添加检查，因为在内部它们使用代理所拦截的`[[Set]]`操作。

因此，代码简洁明了。

> **别忘了返回`true`**
> 如上所述，要保持不变量。
>
> 对于`set`操作，它必须成功写入时返回`true`。
>
> 如果我们忘记这样做，或者返回假(falsy)值，则该操作将触发`TypeError`。

## 使用"ownKeys"和"getOwnPropertyDescriptor"进行迭代

`Object.keys`,`for...in`循环和大多数其他遍历对象属性的方法都是用内部方法`[[OwnPropertyKeys]]`(由`ownKeys`捕捉器拦截)来获取属性列表。

这些方法在细节上有所不同:

- `Object.getOwnPropertyNames(obj)`返回非 symbol 键。
- `Object.getOwnPropertySymbols(obj)`返回 symbol 键。
- `Object.keys/values()`返回带有`enumerable`标志的非 symbol 键/值(属性标志在[属性标志和属性描述符](https://zh.javascript.info/property-descriptors)一章有详细讲解)。
- `for..in`循环遍历所有带有`enumerable`标志的非 symbol 键，以及原型对象的键。

....但是所有这些都从该列表开始。

在下面这个示例中，我们使用`ownKeys`捕捉器拦截`for..in`对`user`的遍历，并使用`Object.keys`和`Object.values`来跳过以下划线`_`开头的属性:

```js
let user = {
  name: "John",
  age: 30,
  _password: "***",
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !keys.startsWith("_"));
  },
});

//"ownKeys"过滤掉了 _password
for (let key in user) alert(key); //name,然后是 age

//对这些方法的效果相同:
alert(Object.keys(user)); //name,age
alert(Object.values(user)); //John,30
```

到目前为止，它仍然有效。

尽管如此，但如果我们返回对象中不存在的键，
`Object.keys`并不会列出这些键:

```js
let user = {};

user = new Proxy(user, {
  ownKeys(target) {
    return ["a", "b", "c"];
  },
});

alert(Object.keys(user)); //<empty>
```

为什么？原因很简单:`Object.keys`仅返回带有`enumerable`标志的属性。为了检查它，该方法会对每个属性调用内部方法`[[GetOwnProperty]]`来获取[它的描述符(descriptor)](https://zh.javascript.info/property-descriptors)。在这里，由于没有属性，其描述符为空，没有`enumerable`标志，因此它被略过。

为了让`Object.keys`返回一个属性，我们需要它要么存在于带有`enumerable`标志的对象，要么我们可以拦截对`[[GetOwnproperty]]`的调用(捕捉器`getOwnPropertyDescriptor`可以做到这一点)，并返回带有`enumber:true`的描述符。

这是关于此的一个例子:

```js
let user = {};

user = new Proxy(user, {
  ownkeys(target) {
    //一旦要获取属性列表就会被调用
    return ["a", "b", "c"];
  },

  getOwnPropertyDescriptor(target, prop) {
    //被每个属性调用
    return {
      enumerable: true,
      configurable: true,
      /*...其他标志，可能是"value:...."*/
    };
  },
});

alert(Object.keys(user)); //a,b,c
```

让我们再次注意:如果该属性在对象中不存在，那么我们只需要拦截`[[GetOwnProperty]]`。

## 具有"deleteProperty"和其他捕捉器的受保护属性

有一个普遍的约定，即以下划线`_`开头的属性和方法是内部的。不应从对象外部访问它们。

从技术上讲，我们也是能访问到这样的属性的:

```js
let user = {
  name: "John",
  _password: "secret",
};

alert(user._password); //secret
```

让我们使用代理来防止对以`_`开头的属性的任何访问。

我们将需要以下捕捉器:

- `get`读取此类属性时抛出错误，
- `set`写入属性时抛出错误，
- `deleteProperty`删除属性时抛出错误，
- `ownKeys`在使用`for..in`和像`Object.keys`这样的方法排除以`_`开头的属性。

代码如下:

```js
let user = {
  name: "John",
  _password: "***",
};

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startWith("_")) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return typeof value === "function" ? value.bind(target) : value; //(*)
  },
  set(target, prop, val) {
    //拦截属性写入
    if (prop.startWith("_")) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    //拦截属性删除
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownkeys(target) {
    //拦截读取属性列表
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

//"get"不允许读取_password
try {
  alert(user._password); //Error:Access deined
} catch (e) {
  alert(e.message);
}

//"set"不允许写入_password
try {
  user._password = "test"; //Error:Access deined
} catch (e) {
  alert(e.message);
}

//"deleteProperty" 不允许删除_password
try {
  delete user._password; //Error:Access deined
} catch (e) {
  alert(e.message);
}

//"ownkeys" 将_password过滤出去
for (let key in user) alert(key); //name
```

请注意在`(*)`行中`get`捕捉器的重要细节:

```js
  get(target,prop) {
    //...
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value; //(*)
  }
```

为什么我们需要一个函数去调用`value.bind(target)`?

原因是对象方法(例如`user.checkPassword()`)必须能够访问`_password`:

```js
user = {
  //...
  checkPassword(value) {
    //对象方法必须能读取_password;
  },
};
```

对`user.checkPassword()`的调用会将被代理的对象`user`作为`this`(点符号之前的对象会成为`this`)，因此，当它尝试访问`this._password`时，`get`捕捉器将激活(在任何属性读取时，它都会被触发)并抛出错误。

因此，我们在`(*)`行中将对象方法的上下文绑定到原始对象`target`。然后，它们将来的调用将使用`target`作为`this`，不会触发任何捕捉器。

该解决方案通常可行，但并不理想，因为一个方法可能会将未被代理的对象传递到其他地方，然后我们就会陷入困境:原始对象在哪里，被代理的对象在哪里？

此外，一个对象可能会被代理多次(多个代理可能会对该对象添加不同的"调整")，并且如果我们将未包装的对象传递给方法，则可能会产生意想不到的后果。

因此，在任何地方都不应该使用这种代理。

> **类的私有属性**
> 现代 JavaScript 引擎原生支持 class 中的私有属性，这些私有属性以`#`为前缀。它们在[私有的和受保护的属性和方法](https://zh.javascript.info/private-protected-properties-methods)一章中有详细描述。无需代理(proxy)。
>
> 但是，此类属性有其自身的问题。特别是，它们是不可继承的。
