[TOC]
## 一、ES6模块加载机制
ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6模块本身，因为它不是对象。
## 二、严格模式
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

严格模式主要有以下限制。
```
变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错
不能使用前缀 0 表示八进制数，否则报错
不能删除不可删除的属性，否则报错
不能删除变量delete prop，会报错，只能删除属性delete global[prop]
eval不会在它的外层作用域引入变量
eval和arguments不能被重新赋值
arguments不会自动反映函数参数的变化
不能使用arguments.callee
不能使用arguments.caller
禁止this指向全局对象
不能使用fn.caller和fn.arguments获取函数调用的堆栈
增加了保留字（比如protected、static和interface）
```
+ 其中，尤其需要注意this的限制。ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。
## 三、export命令
+ export命令规定的必须是可以对外的接口，其必须与模块内变量建立一一对应的关系。
+ export命令必须出现在模块的顶层位置，不能在方法里，或者类里。

#### 1. 变量
```
// 报错
export 1;

// 报错
var m = 1;
export m;
```
上面两种写法都会报错，因为没有提供对外的接口.1只是一个值，不是接口。正确的写法，应该设置一个对外的接口。
```
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```
#### 2. function和class
```
// 报错
function f() {}
export f;
// 正确
export function f() {};

// 正确
function f() {}
export {f};
```
export语句输出的接口，与其对应的值是动态绑定关系，通过该接口，可以取到模块内部实时的值。
```
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```
上面代码输出变量foo，值为bar，500 毫秒之后变成baz。
#### 3. export default
+ 该命令可以为模块指定默认输出。在使用import命令导入时，就可以用任意名称指向export输出的对象（或属性）
```
// export-default.js
export default function () {
  console.log('foo');
}
```
```
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```
+ 该命令在一个模块中只能用一次
+ 本质上是输出了一个被声明的，名为default的变量，所以它后面不能跟变量声明语句。
+ 使用default命令的输出，在对应的import中不需要用｛｝括起来，如果是普通的export，需要用｛｝括起来 
## 四、import...from...命令
#### 1. 导入
+ 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

```
// main.js
import {firstName, lastName, year} from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```
+ import导入的变量是只读类型，其值不可修改，其名字可用as命令修改。如果导入的是对象，可以修改对象的属性值。但是建议把import导入的变量都当做只读变量，不去修改。
+ import命令具有提升效果，会自动提升到模块顶部
+ import命令中不能使用表达式和==在import之前==没被赋值的变量
#### 适用场合。

##### （1）按需加载。

import()可以在需要的时候，再加载某个模块。
```
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```
上面代码中，import()方法放在click事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。

##### （2）条件加载

import()可以放在if代码块，根据不同的情况，加载不同的模块。
```
if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
```
上面代码中，如果满足条件，就加载模块 A，否则加载模块 B。

##### （3）动态的模块路径

import()允许模块路径动态生成。
```
import(f())
.then(...);
```
上面代码中，根据函数f的返回结果，加载不同的模块。
## 五、export和import的复合写法 -- export...from...
如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。
```
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```
## 六、模块的继承
+ 在子模块中输入export...from '父模块名称'