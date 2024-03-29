/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "我的笔记", // 顶部左侧标题
  head: [
    // 设置 描述 和 关键词
    [
      "meta",
      {
        name: "keywords",
        content: "我的笔记 一起学习 面试 面试经历 面经 ",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "此文档主要用于记录个人学习笔记",
      },
    ],
  ],
  // 项目的根路径
  base: "/my-note/",
  // 语言
  lang: "zh-CN",

  markdown: {
    theme: "vitesse-light",
    lineNumbers: true,
  },
  themeConfig: {
    // 顶部导航
    nav: [
      {
        text: "JS简介",
        link: "/JS简介/1_1introduction.html",
        activeMatch: "/JS简介/",
      },

      {
        text: "JS基础知识",
        link: "/JS基础知识/2_1HelloWorld.html",
        activeMatch: "/JS基础知识/",
      },

      {
        text: "代码质量",
        link: "/代码质量/3_1debug.html",
        activeMatch: "/代码质量/",
      },
      {
        text: "Object基础知识",
        link: "/Object基础知识/4_1Object.html",
        activeMatch: "/Object基础知识/",
      },
      {
        text: "数据类型",
        link: "/数据类型/5_1PrimitivetypeMethods.html",
        activeMatch: "/数据类型/",
      },
      {
        text: "函数进阶内容",
        link: "/函数进阶内容/6_1recursion.html",
        activeMatch: "/函数进阶内容/",
      },
      {
        text: "对象属性配置",
        link: "/对象属性配置/7_1AttributeTag.html",
        activeMatch: "/对象属性配置/",
      },
      {
        text: "原型，继承",
        link: "/原型，继承/8_1prototypal_inheritance.html",
        activeMatch: "原型，继承",
      },
      {
        text: "类",
        link: "/类/9_1Class.html",
        activeMatch: "类",
      },
      {
        text: "错误处理",
        link: "/错误处理/10_1ErrorHandling.html",
        activeMatch: "错误处理",
      },
      {
        text: "Promise,async/await",
        link: "/Promise/11_1CallBack.html",
        activeMatch: "Promise",
      },
    ],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/cll123456/common-study" },
    // ],
    // 编辑链接
    // editLink: {
    //   pattern:
    //     "https://github.com/cll123456/common-study/edit/master/docs/docs/:path",
    //   text: "前往GitHub编辑此页",
    // },
    // 顶部导航
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present zqm & my-note Contributors",
    },
    // 上次编辑的日期
    lastUpdatedText: "上次更新",
    // 侧边栏
    sidebar: [
      {
        text: "JS简介",
        collapsible: true,
        items: [
          { text: "1.1JS简介", link: "/JS简介/1_1introduction.md" },
          { text: "1.2JS手册与规范", link: "/JS简介/1_2standard.md" },
          { text: "1.3编辑器", link: "/JS简介/1_3code-editor.md" },
          { text: "1.4开发者控制台", link: "/JS简介/1_4console.md" },
        ],
      },

      {
        text: "JS基础知识",
        collapsible: true,
        items: [
          { text: "2.1Hello,World!", link: "/JS基础知识/2_1HelloWorld.md" },
          { text: "2.2代码结构", link: "/JS基础知识/2_2code-structure.md" },
          {
            text: "2.3现代模式，'use strict'",
            link: "/JS基础知识/2_3use-strict.md",
          },
          { text: "2.4变量", link: "/JS基础知识/2_4variate.md" },
          { text: "2.5数据类型", link: "/JS基础知识/2_5DataType.md" },
          { text: "2.6交互", link: "/JS基础知识/2_6interact.md" },
          { text: "2.7类型转换", link: "/JS基础知识/2_7TypeCast.md" },
          { text: "2.8基础运算符", link: "/JS基础知识/2_8BaseOperator.md" },
          { text: "2.9值的比较", link: "/JS基础知识/2_9ValueComparison.md" },
          {
            text: "2.10条件分支",
            link: "/JS基础知识/2_10ConditionalBranch.md",
          },
          {
            text: "2.11逻辑运算符",
            link: "/JS基础知识/2_11LogicalOperator.md",
          },
          {
            text: "2.12空值合并运算符",
            link: "/JS基础知识/2_12NullishCoalescing.md",
          },
          {
            text: "2.13循环",
            link: "/JS基础知识/2_13circulation.md",
          },
          {
            text: "2.14switch语句",
            link: "/JS基础知识/2_14switch.md",
          },
          {
            text: "2.15函数",
            link: "/JS基础知识/2_15function.md",
          },
          {
            text: "2.16函数表达式",
            link: "/JS基础知识/2_16FunctionExpression.md",
          },
          {
            text: "2.17箭头函数",
            link: "/JS基础知识/2_17ArrowFunction.md",
          },
          {
            text: "2.18JavaScript特性",
            link: "/JS基础知识/2_18JSspeciality.md",
          },
        ],
      },

      {
        text: "代码质量",
        collapsible: true,
        items: [
          { text: "3.1在浏览器中调试", link: "/代码质量/3_1debug.md" },
          { text: "3.2代码风格", link: "/代码质量/3_2CodeStyle.md" },
          { text: "3.3注释", link: "/代码质量/3_3annotation.md" },
          { text: "3.4忍者代码", link: "/代码质量/3_4NinjaCode.md" },
          { text: "3.5使用Mocha自动化测试", link: "/代码质量/3_5Mocha.md" },
          { text: "3.6 Polyfill和转译器", link: "/代码质量/3_6Polyfill.md" },
        ],
      },
      {
        text: "Object基础知识",
        collapsible: true,
        items: [
          { text: "4.1对象", link: "/Object基础知识/4_1Object.md" },
          { text: "4.2对象引用和复制", link: "/Object基础知识/4_2copy.md" },
          { text: "4.3垃圾回收", link: "/Object基础知识/4_3recycle.md" },
          { text: "4.4对象方法,“this”", link: "/Object基础知识/4_4method.md" },
          {
            text: "4.5构造器和操作符",
            link: "/Object基础知识/4_5constructor.md",
          },
          { text: "4.6可选链", link: "/Object基础知识/4_6OptionalChain.md" },
          { text: "4.7symbol类型", link: "/Object基础知识/4_7symbol.md" },
          {
            text: "4.8对象--原始值转换",
            link: "/Object基础知识/4_8valueConversion.md",
          },
        ],
      },
      {
        text: "数据类型",
        collapsible: true,
        items: [
          {
            text: "5.1原始类型的方法",
            link: "/数据类型/5_1PrimitivetypeMethods.md",
          },
          {
            text: "5.2数字类型",
            link: "/数据类型/5_2NumberType.md",
          },
          {
            text: "5.3字符串",
            link: "/数据类型/5_3String.md",
          },
          {
            text: "5.4数组",
            link: "/数据类型/5_4Array.md",
          },
          {
            text: "5.5数组方法",
            link: "/数据类型/5_5ArrayMethod.md",
          },
          {
            text: "5.6Iterable object(可迭代对象)",
            link: "/数据类型/5_6IterableObject.md",
          },
          {
            text: "5.7Map and Set(映射和集合)",
            link: "/数据类型/5_7MapSet.md",
          },
          {
            text: "5.8WeakMap and WeakSet",
            link: "/数据类型/5_8WeakMapWeakSet.md",
          },
          {
            text: "5.9Object.keys,values,entries",
            link: "/数据类型/5_9Objectkeys.md",
          },
          {
            text: "5.10解构赋值",
            link: "/数据类型/5_10Destructuring.md",
          },
          {
            text: "5.11日期和时间",
            link: "/数据类型/5_11Date.md",
          },
          {
            text: "5.12JSON方法,toJSON",
            link: "/数据类型/5_12JSON.md",
          },
        ],
      },
      {
        text: "函数进阶内容",
        collapsible: true,
        items: [
          {
            text: "6.1递归和堆栈",
            link: "/函数进阶内容/6_1recursion.md",
          },
          {
            text: "6.2Rest参数与Spread语法",
            link: "/函数进阶内容/6_2Rest.md",
          },
          {
            text: "6.3变量作用域，闭包",
            link: "/函数进阶内容/6_3closure.md",
          },
          {
            text: "6.4老旧的“var”",
            link: "/函数进阶内容/6_4var.md",
          },
          {
            text: "6.5全局对象",
            link: "/函数进阶内容/6_5globalObject.md",
          },
          {
            text: "6.6函数对象,NFE",
            link: "/函数进阶内容/6_6FuncObj.md",
          },
          {
            text: "6.7“new Function”语法",
            link: "/函数进阶内容/6_7NewFunc.md",
          },
          {
            text: "6.8调度:setTimeout和setInterval",
            link: "/函数进阶内容/6_8dispatch.md",
          },
          {
            text: "6.9装饰器模式和转发,call/apply",
            link: "/函数进阶内容/6_9Decorator.md",
          },
          {
            text: "6.10函数绑定",
            link: "/函数进阶内容/6_10FuncBind.md",
          },
          {
            text: "6.11深入理解箭头函数",
            link: "/函数进阶内容/6_11ArrowFunction.md",
          },
        ],
      },
      {
        text: "对象属性配置",
        collapsible: true,
        items: [
          {
            text: "7.1属性标志和属性描述符",
            link: "/对象属性配置/7_1AttributeTag.md",
          },
          {
            text: "7.2属性的getter和setter",
            link: "/对象属性配置/7_2getter.md",
          },
        ],
      },
      {
        text: "原型,继承",
        collapsible: true,
        items: [
          {
            text: "8.1原型继承",
            link: "/原型，继承/8_1prototypal_inheritance.md",
          },
          {
            text: "8.2F.prototype",
            link: "/原型，继承/8_2Fprototype.md",
          },
          {
            text: "8.3原生的原型",
            link: "/原型，继承/8_3ObjectPrototype.md",
          },
          {
            text: "8.4原型方法,没有_proto_的对象",
            link: "/原型，继承/8_4Prototypemethod.md",
          },
        ],
      },
      {
        text: "类",
        collapsible: true,
        items: [
          {
            text: "9.1Class基本语法",
            link: "/类/9_1Class.md",
          },
          {
            text: "9.2类继承",
            link: "/类/9_2ClassInheritance.md",
          },
          {
            text: "9.3静态属性和静态方法",
            link: "/类/9_3StaticAttribute.md",
          },
          {
            text: "9.4私有的和受保护的属性和方法",
            link: "/类/9_4privateProperty.md",
          },
          {
            text: "9.5扩展内建类",
            link: "/类/9_5ExtendsClass.md",
          },
          {
            text: "9.6类检查",
            link: "/类/9_6Instanceof.md",
          },
          {
            text: "9.7Mixin模式",
            link: "/类/9_7Mixin.md",
          },
        ],
      },
      {
        text: "错误处理",
        collapsible: true,
        items: [
          {
            text: "10.1错误处理,try..catch",
            link: "/错误处理/10_1ErrorHandling.md",
          },
          {
            text: "10.2自定义Error,扩展Error",
            link: "/错误处理/10_2CustomError.md",
          },
        ],
      },
      {
        text: "Promise,async/await",
        collapsible: true,
        items: [
          {
            text: "11.1简介:回调",
            link: "/Promise/11_1CallBack.md",
          },
          {
            text: "11.2Promise",
            link: "/Promise/11_2Promise.md",
          },
          {
            text: "11.3Promise链",
            link: "/Promise/11_3PromiseChain.md",
          },
          {
            text: "11.4使用promise进行错误处理",
            link: "/Promise/11_4ErrorHandling.md",
          },
          {
            text: "11.5Promise API",
            link: "/Promise/11_5API.md",
          },
          {
            text: "11.6Promisification",
            link: "/Promise/11_6Promisification.md",
          },
          {
            text: "11.7Microtask",
            link: "/Promise/11_7Microtask.md",
          },
          {
            text: "11.8asyns/await",
            link: "/Promise/11_8async.md",
          },
        ],
      },
    ],
  },
};
