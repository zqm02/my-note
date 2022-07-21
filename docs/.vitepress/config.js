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
        link: "/Object基础知识/Object.html",
        activeMatch: "/Object基础知识/",
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
        items: [{ text: "4.1对象", link: "/Object基础知识/4_1Object.md" }],
      },
    ],
  },
};
