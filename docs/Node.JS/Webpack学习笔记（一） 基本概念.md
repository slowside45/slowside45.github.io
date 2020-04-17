##  一、 基本概念
### (一) 入口 [entry]
指示webpack从哪个模块作为构建项目的起点。

通过在 webpack.config.js中配置==entry==属性，来指定一个或多个入口：
```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```
---
### (二) 出口 [output]
在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括以下两点：

+ output.filename：编译文件的文件名；
+ output.path: 对应一个绝对路径，此路径是你希望一次性打包的目录。

配置：
```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
+ path是node.js中的一个核心模块，用于操作文件路径

### （三）loader [ 转换器 ]
loader可以把任何类型的文件转换为webpack可以理解的文件类型。

在module.rules中配置：
```
const path = require('path');

const config = {
    output:{
        filename: 'my-first-webpack.bundle.js'
    },
    module:{
        rules:[
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
};
module.exports = config;
```
这三种配置方式等效：
```
{test: /\.css$/, use: 'css-loader'}
{test: /\.css$/, loader: 'css-loader'，options: { modules: true }}
{test: /\.css$/, use: {
    loader: 'css-loader',
    options: {
      modules: true
    }
}}
```
注：loader/query 可以和 options 可以在同一级使用，但是不要使用 use 和 options 在同一级使用。
+ test： 表示哪个或哪些文件需要被loader编译
+ use: 表示使用哪个loader

### (四)Plugins [ 插件 ]
在config文件中先require需要使用到的插件，然后在Plugins节点下，使用new来创建插件的对象
```
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
webpack 提供许多开箱可用的插件！查阅我
```

