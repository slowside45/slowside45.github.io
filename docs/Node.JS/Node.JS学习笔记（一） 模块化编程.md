[TOC]
## 一、模块的含义
一个.js文件就可以称之为一个模块
## 二、模块的优点
+ 可以在工作中通过引入模块来减少开发量
+ 避免函数名和变量名冲突
## 三、使用方法
#### Step1 在模块中设置对外接口：
```
module.exports = variable_name;
```
例子：
```
//hello.js模块
'use strict';
var s = 'Hello';
function greet(name){
    console.log(s+','+name+'!');
}
module.exports = greet
```
*==module.exports==的值表示该模块需要向外传递的属性或函数的名称*
#### Step2 模块的调用：
```
var m = require('other_module_name');
```
例子：
```
'use strict';
//引入hello模块
var greet = require('./hello');
var s = 'Michael';
greet(s);
```
*require()的参数需要包含==需要引入的模块名==和==模块的相对路径==*

- [x] **相同目录下的模块引入**: 若需要被引入的模块与当前模块在同一目录下，则需要在require的参数开头写当前目录 ==.==
- [x] **不同目录下的模块引入**：
直接把需要引入的模块名作为require的参数值，引擎将会在全局下查找对应名称的模块
## 四、Troubleshoot
#### 1. 加载时找不到模块
```
module.js
    throw err;
          ^
Error: Cannot find module 'hello'
    at Function.Module._resolveFilename
    at Function.Module._load
    ...
    at Function.Module._load
    at Function.Module.runMain
```
遇到这个错误，你要检查：

+ 模块名是否写对了；
+ 模块文件是否存在；
+ 相对路径是否写对了。

Eg: *加载的模块与当前模块在同一目录下*
```
//正确写法
var greet = require('./hello');
//错误写法
var greet = require('hello');
```
## 五、基本模块
#### 1. global
JS中的全局对象叫window，而node.js中的全局对象叫global
#### 2. process
管理node当前环境中的进程。

##### process.nextTick()：下一轮事件事件循环执行
##### 状态相应回调函数
```
process.on('状态标识符',function(){
  ...  
});
```
## 六、常用模块
#### (一)fs模块
##### 1.读文件
###### (1)异步
```
'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```
#### 注意：sample.txt文件必须在当前目录下，且文件编码为utf-8
###### (2)同步
```
'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);
```
+ 原异步调用的回调函数的data被函数直接返回，函数名需要改为readFileSync，其它参数不变。

+ 如果同步读取文件发生错误，则需要用try...catch捕获该错误：
##### 2. 写文件
###### (1)异步
使用fs.writeFile();
```
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```
+ writeFile()的参数依次为文件名、数据和回调函数。
+ 如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。
+ 回调函数由于只关心成功与否，因此只需要一个err参数。

###### (2)异步
使用writeFileSync();
```
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);
```
##### 3.stat:获取文件详细信息
```
'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
```
### （二）、Stream模块
输入流，输出流。与Java中的I/O编程相似。

#### 1. 读取数据：
```
'use strict';

var fs = require('fs');
// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');
//data事件可能会有多次，每次传递的chunk是流的一部分数据。
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

```
#### 2. 写入数据：

```
'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();
```
+ 所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。
#### 3. pipe
把一个Readable和一个Writable串起来后，所有数据从Readable自动进入Writable，叫做pipe

**方法：使用Readable中的pipe()方法:**
```
ReadStream对象.pipe(WriteStream对象)
```

Eg:把一个文件流和另一个文件流串起来
```
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
```
+ 默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：

```
readable.pipe(writable, { end: false });

```
