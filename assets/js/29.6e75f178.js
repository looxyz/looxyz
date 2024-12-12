(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{349:function(t,a,e){"use strict";e.r(a);var r=e(25),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),a("p",[t._v("任何包含 YAML front matter 的 Markdown 文件都将由 "),a("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gray-matter"),a("OutboundLink")],1),t._v(" 处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("title: Blogging Like a Hacker\nlang: en-US")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("在这些三条虚线之间，你可以设置预定义变量（参见"),a("a",{attrs:{href:"#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F"}},[t._v("下面")]),t._v("），甚至可以创建自己的自定义变量。 然后，您可以使用 "),a("code",[a("RouterLink",{attrs:{to:"/guide/global-computed.html#frontmatter"}},[t._v("$frontmatter")])],1),t._v(" 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在 VuePress 中，Front matter 是 "),a("strong",[t._v("可选的")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"其他格式的-front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他格式的-front-matter"}},[t._v("#")]),t._v(" 其他格式的 Front Matter")]),t._v(" "),a("p",[t._v("除了 YAML 之外，VuePress 也支持 JSON 或者 "),a("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),a("OutboundLink")],1),t._v(" 格式的 front matter。")]),t._v(" "),a("p",[t._v("JSON front matter 需要以花括号开头和结尾：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),a("p",[t._v("TOML front matter 需要显式地标注为 TOML：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),a("h2",{attrs:{id:"预定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预定义变量"}},[t._v("#")]),t._v(" 预定义变量")]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("h1_title || siteConfig.title")])])]),t._v(" "),a("p",[t._v("当前页面的标题。")]),t._v(" "),a("h3",{attrs:{id:"lang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("en-US")])])]),t._v(" "),a("p",[t._v("当前页面的语言。")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("siteConfig.description")])])]),t._v(" "),a("p",[t._v("当前页面的描述。")]),t._v(" "),a("h3",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" layout")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("Layout")])])]),t._v(" "),a("p",[t._v("设置当前页面的布局组件。")]),t._v(" "),a("h3",{attrs:{id:"permalink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("siteConfig.permalink")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/guide/permalinks.html"}},[t._v("Permalinks")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"metatitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[t._v("#")]),t._v(" metaTitle")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("`${page.title} | ${siteConfig.title}`")])])]),t._v(" "),a("p",[t._v("重写默认的 meta title。")]),t._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("指定额外的要注入的 meta 标签：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("h2",{attrs:{id:"默认主题的预定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认主题的预定义变量"}},[t._v("#")]),t._v(" 默认主题的预定义变量")]),t._v(" "),a("h3",{attrs:{id:"navbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[t._v("#")]),t._v(" navbar")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#禁用导航栏"}},[t._v("默认主题配置 > 禁用导航栏")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" sidebar")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean|'auto'")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#侧边栏"}},[t._v("默认主题配置 > 侧边栏")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"prev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prev"}},[t._v("#")]),t._v(" prev")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean|string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#上-下一篇链接"}},[t._v("默认主题配置 > 上 / 下一篇链接")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" next")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean|string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#上-下一篇链接"}},[t._v("默认主题配置 > 上 / 下一篇链接")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[t._v("#")]),t._v(" search")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#内置搜索"}},[t._v("默认主题配置 > 内置搜索")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" tags")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#内置搜索"}},[t._v("默认主题配置 > 内置搜索")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);