[TOC]
## let语句
### 1. 声明
###### ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
```
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```
--- 
### 2.for循中的let
在for循环中，若在设置循环次数变量时，用let声明，该变量就只在本轮循环有效，每一次的循环，都会有一个新的变量i。

##### 用var声明循环变量

```
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
+ 因为变量i是用var声明的，所以全局只有一个i,每一次循环，i的值都会发生变化。a[i]中和console.log(i)中的i指向的是同一个i。
+ 循环结束后数组a的值是方法console.log(i)的返回值，该返回值在循环结束后是10
```
graph TD
A[数组a中的每个元素] --> B[i]
```
##### 用let声明循环体内部变量
```
var a = [];
for (let i=0; i < 10; i++){
    a[i] = function () {
        console.log(i);
    };
}
a[6](); //6
```
+ 这里使用let来声明变量i，则每次循环都会有一个新的变量i，数组a中每个元素指向一个不同的变量i。

+ JS的引擎会自动存储上一轮循环的值，初始化本轮i的值时，就在上一轮的值的基础上继续计算

### 3. 在for循环中，循环变量和循环体内部变量有独立的作用域
```
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```
设置循环的部分是父作用域，循环体内部是子作用域。父作用域会被子作用域覆盖。

### 4.不存在变量提升
JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部。

+ 在非严格模式下，变量和其赋值都会被提升到顶部
+ 在严格模式下，只有变量的声明会被提升到顶部，其赋值不会被提升到顶部。

使用var命令，可以使变量在被声明之前被使用，只不过值是undefined。
在ES6中，必须先用let声明对象后，再使用变量。否则会报错ReferenceError。

### 5. 暂时性死区 TDZ

只要在块级作用域中出现let命令，它所声明的变量就绑定了该作用域，在该let命令声明变量前不得使用该变量，即便是在块级作用域外部已经声明过也不行。
```
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
```

### 6. 不允许重复声明

+ let不允许在相同作用域内，重复声明同一个变量。
```
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```
+ 因此，不能在函数内部重新声明参数。
```
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
+ 内层作用域可以定义外层作用域的同名变量。这样的情况，不属于重复声明变量。
```
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
```
### 7.块级作用域

+ 由于let的作用域仅在当前块级内，不同的块级作用域分离。
```
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
+ 上面的函数有两个代码块，都声明了变量n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。

+ 在块级作用域内声明函数，需注意两点：
```
1. 写成函数表达式，而不是函数声明语句
// 函数声明语句
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```
```
2. 函数体外部一定要嵌套大括号
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}
```
## const命令
### 1.声明
+ 一经声明，就必须赋值，否则会报错。
```
const a;//error
const a = 1;
```
+ const类型变量，一经声明，不可更改。
+ 其余属性与let相似。

### 2. 只读属性的本质
 并不是const变量的值不可改变，而是const变量指向的对象所属的内存地址不可改变。
 + 对于简单类型的变量，如字符等，值就保存在变量所指的内存地址。所以可以简单类型的变量可看成常亮。
 + 对于复杂类型的变量，如数组，对象，变量指向的内存地址中，只保存着指针，而指针才指向具体的值，所以const命令只能保证这个内存地址中的指针不变，而不能保证指针所指的具体值不变。
 ```
 Eg1:
 const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
 ```
```
Eg2:
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```
## 顶层对象的属性
用var声明全局变量等同于为顶层对象的属性赋值。
```
var a = 1;
window.a; //1
```
用let,const声明全局变量，不等同于为顶层对象的属性赋值。
```
let b = 1;
window.b; //undefined
const c = 1；
window.c; //undefined
```

## global对象
**顶层对象**
```
graph LR
A[浏览器] --> B[window]
D[node] --> C[global]
```
