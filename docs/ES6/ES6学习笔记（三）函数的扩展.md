[TOC]
## 函数的length属性
+ 指定了默认值以后，函数的length属性，将返回没有指定默认属性的参数的个数。
+ 如果指定了默认值的参数不是尾参数，那么length属性不会把该参数之后的参数个数计入
+ 如果指定了首参数的默认值，那么length属性为0。因为后面的参数个数不会计入length。
```
(function(...args){}).length //0
```
## 一、作用域
只要在函数的构造部分==声明了参数==，==并为参数设定了默认值==，函数进行声明和初始化时，参数会形成一个单独的作用域。
+ 在此作用域内，即使该参数名称与全局变量冲突，也以该作用域中该参数的值为主。
+ 如果没有在函数的构造部分==声明参数==，==只给参数设定了默认值==，那么该参数会指向全局中具有相同名称的全局变量，如果没有对应的全局变量，则会报错。
```
var x = 1;
function f(x,y=x){
    console.log(y);
}
f(2) //2
```
在此代码中，当函数被调用，会形成一个单独的作用域。在此作用域内，变量x=2将作为y的值，而不是全局变量x=1. 
```
let x = 1;
function f(y=x){
    let x = 2;
    console.log(y);
}
f() //1
```
在此代码中，给函数参数y设定了默认值x，但没有去声明参数x，所以没有形成一个单独的作用域。

尽管在函数内有变量x=2，但是在函数被调用时，默认值y=x会指向函数外部的全局变量。

```
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1
```
三个不同的作用域：

1️⃣ 全局变量x=1

2️⃣ 首参数x与参数y的内部匿名函数 

3️⃣ foo函数内部的 var x = 3

var x与foo(x,y)不是同一个x，作用域也不同，在foo函数的输出部分，console.log(x)指向的是foo函数内部的var x = 3.
```
var x = 1;
function foo(x, y = function() { x = 2; }) {
  x = 3;
  y();
  console.log(x);
}

foo() // 2
x // 1
```
把foo函数内部的var去掉以后，foo函数内部的x指向的就是参数x。

## 二、实际应用
#### 1. 利用参数默认值，使某个参数被省略时抛出异常
```
function throwIfMissing(){
   throw new Error('Missing parameter'); 
}
function foo(mustProvided = throwIfMissing){
    return mustProvided;
}
foo(); //throw error
```
+ 当运行foo函数时，如果没有提供mustProvided参数，则函数参数默认值 -- throwIfMissing将会被执行，抛出异常。
+ 相反地，如果需要标注某个参数可以被省略，那么就把它的默认值设为 ==undefined==

#### 2. rest参数
rest参数形式为 ...变量名， 用于获取该函数中该变量之前的参数(也包括它自身),并把它们打包成一个数组。这样可以不用使用arguments对象。
==注意:== rest参数不可放在中间，只能放在末尾

**arguments与rest变量的区别**

+ rest参数只包括那些没有给出名称的参数，arguments包含所有参数；
+ arguments对象不是真正的array，而rest参数是Array的实例，可以直接应用sort, map, forEach, pop等方法；
+ arguments对象拥有一些自己额外的功能。
---
==求和函数==
```
    function sum(...rest){
        let sum = 0;
        for(var a of rest){
            sum += rest;
        }
        return sum;
    }
    sum(1,2,3); //6
```
---
==数组元素push==
```
    function push(arr,...items){
        items.forEach(function(item){
            arr.push(item);
            console.log(item);
        });
    }
    var a = [];
    push(a,1,2,3);
```
---
## 三. 严格模式
+ 只要函数参数用了默认值，解构赋值，或扩展运算符，那么在函数内都不能显示设定严格模式  ('use strict')

**两种解决方法：**
1. 在全局设置严格模式
2. 在函数外嵌套一个无参立即执行的父函数，在父函数中设定严格模式。

## 四. name属性
+ 函数的name属性，代表着该函数的函数名,而对于匿名函数，ES5和ES6有一些不同：
```
var f = function(){
    //ES5
    f.name;//''
    //ES6
    f.name; //'f'
}
```
+ Function构造函数返回的函数实例，name属性的值为==anonymous==
+ bind返回的函数，name属性值会加上==bound==前缀
## 五. Arrow 函数
作为没有方法名的函数最合适
### 1. 单参数
```
var f = v => v;
```
等同于：
```
var f = function(v){
    return v;
};
```
### 2. 不需要参数
```
var f = () => 5;
或
var f = _ => 5;
```
等同于：
```
var f= function(){
    return 5;
}
```
### 3. 多个参数
```
var f = (num1,num2) => num1+num2;
```
等同于：
```
var f = function(num1,num2){
    return num1+num2;
}
```
### 4. 返回值个数大于1(返回一个对象)
```
//报错
let cache = id => {id:id, name: 'temp'}
//花括号需加上括号
let cache = id => ({id:id, name: 'temp'})
```
本来是作为一个对象返回，但是如果只用花括号括起来，就会被解析成一段代码块，一段代码块是无法直接返回的，所以需要用括号括起来，才能被解析为一个对象。  

### 5. 与变量解构结合使用
```
const full = ({first,last}) => first+'解构'+last;
```
等同于
```
const full = function(person){
    return person.first+'解构'+person.last;
}
```
- [x] 原来参数不是first和last吗，怎么成了对象的属性？
```
person对象只是一个形参，传入的参数({first,last})是一个对象参数，这个对象参数可以与任意对象匹配，person只是举个例子。first，last是对象的属性。
```
### 6. 简单数组操作
```
// Easy array filtering, mapping, ...  
  
var arr = [5, 6, 13, 0, 1, 18, 23];  
var sum = arr.reduce((a, b) => a + b);  // 66  
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]  
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]  
```
### 7. 箭头函数使用注意事项
 (1) 函数体内的this总是指向函数执行时所在的对象，而不是谁调用它，this指向谁
 Eg:
 ```
 function foo(){
     setTimeOut(() => {
         console.log('id',this.id);
     },100);
 }
 var id = 21;
 foo.call({id: 42}); //42
 ```
在此代码中，函数foo的参数是一个箭头函数setTimeOut(), 其中的this.id指向的是foo对象的id

 (2) 不可用new创建箭头函数
 
 (3) 不可使用arguments对象，因为箭头函数体内没有这个对象，可用rest参数代替
 
 Eg:
 ```
 function replace(...params){
     //使用arguments,函数形参可以不设置
     console.log(arguments[2],arguments[0],arguments[1]);
     //使用rest
     console.log(params[2],params[0],params[1]);
     
 }
 replace(2,4,6); //6 2 4
 var replace = (...params) ==> ({params[2],params[0],params[1]})
 ```
 
## 六、函数绑定运算符
**函数绑定运算符是一组双冒号** ( : : ), **双冒号左边是一个对象，右边是一个函数，这个运算符表示将左边的对象作为上下文环境，绑定在右边的函数上**

+ 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在右边的对象上。
```
var method = :: console.log;

==>等同于

var method = console.log.bind(console);
```