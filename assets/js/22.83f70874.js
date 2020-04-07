(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{324:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"一、-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、 基本概念")]),e._v(" "),a("h3",{attrs:{id:"一-入口-entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-入口-entry","aria-hidden":"true"}},[e._v("#")]),e._v(" (一) 入口 [entry]")]),e._v(" "),a("p",[e._v("指示webpack从哪个模块作为构建项目的起点。")]),e._v(" "),a("p",[e._v("通过在 webpack.config.js中配置==entry==属性，来指定一个或多个入口：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  entry: './path/to/my/entry/file.js'\n};\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"二-出口-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-出口-output","aria-hidden":"true"}},[e._v("#")]),e._v(" (二) 出口 [output]")]),e._v(" "),a("p",[e._v("在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括以下两点：")]),e._v(" "),a("ul",[a("li",[e._v("output.filename：编译文件的文件名；")]),e._v(" "),a("li",[e._v("output.path: 对应一个绝对路径，此路径是你希望一次性打包的目录。")])]),e._v(" "),a("p",[e._v("配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './path/to/my/entry/file.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'my-first-webpack.bundle.js'\n  }\n};\n")])])]),a("ul",[a("li",[e._v("path是node.js中的一个核心模块，用于操作文件路径")])]),e._v(" "),a("h3",{attrs:{id:"（三）loader-转换器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（三）loader-转换器","aria-hidden":"true"}},[e._v("#")]),e._v(" （三）loader [ 转换器 ]")]),e._v(" "),a("p",[e._v("loader可以把任何类型的文件转换为webpack可以理解的文件类型。")]),e._v(" "),a("p",[e._v("在module.rules中配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const path = require('path');\n\nconst config = {\n    output:{\n        filename: 'my-first-webpack.bundle.js'\n    },\n    module:{\n        rules:[\n            {test: /\\.txt$/, use: 'raw-loader'}\n        ]\n    }\n};\nmodule.exports = config;\n")])])]),a("p",[e._v("这三种配置方式等效：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{test: /\\.css$/, use: 'css-loader'}\n{test: /\\.css$/, loader: 'css-loader'，options: { modules: true }}\n{test: /\\.css$/, use: {\n    loader: 'css-loader',\n    options: {\n      modules: true\n    }\n}}\n")])])]),a("p",[e._v("注：loader/query 可以和 options 可以在同一级使用，但是不要使用 use 和 options 在同一级使用。")]),e._v(" "),a("ul",[a("li",[e._v("test： 表示哪个或哪些文件需要被loader编译")]),e._v(" "),a("li",[e._v("use: 表示使用哪个loader")])]),e._v(" "),a("h3",{attrs:{id:"四-plugins-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-plugins-插件","aria-hidden":"true"}},[e._v("#")]),e._v(" (四)Plugins [ 插件 ]")]),e._v(" "),a("p",[e._v("在config文件中先require需要使用到的插件，然后在Plugins节点下，使用new来创建插件的对象")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装\nconst webpack = require('webpack'); // 用于访问内置插件\n\nconst config = {\n  module: {\n    rules: [\n      { test: /\\.txt$/, use: 'raw-loader' }\n    ]\n  },\n  plugins: [\n    new webpack.optimize.UglifyJsPlugin(),\n    new HtmlWebpackPlugin({template: './src/index.html'})\n  ]\n};\n\nmodule.exports = config;\nwebpack 提供许多开箱可用的插件！查阅我\n")])])])])}],!1,null,null,null);n.options.__file="Webpack学习笔记（一） 基本概念.md";t.default=n.exports}}]);