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
        text: "JQ学习",
        link: "/jq/jq1.html/",
        activeMatch: "/jq/",
      },
      {
        text: "Vue2学习",
        link: "/vue/vue1.html",
        activeMatch: "/vue/",
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
        cpollaapsible: true,
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
        ],
      },
      {
        text: "JQ学习",
        collapsible: true,
        items: [
          { text: "JQ的第一课堂", link: "/jq/jq1.md" },
          { text: "JQ的第二课堂", link: "/jq/jq2.md" },
        ],
      },
      {
        text: "Vue2学习",
        collapsible: true,
        items: [
          { text: "vue2的第一课堂", link: "/vue/vue1.md" },
          { text: "vue2的第二课堂", link: "/vue/vue2.md" },
        ],
      },
    ],
  },
};
