[TOC]
## 一、属性的表示法
**ES6允许直接写入变量和函数，作为对象的属性和方法**，注意要用{ }把变量括起来

+ 变量简写
```
const a = 'agree';
const lee = {a};
lee // 具有属性a，值为'agree' {a: 'agree'}
```
```
function(x,y){
    return {x,y};
    //等同于
    return {x:x,y:y};
}
f(1,2) // Object{x:1,y:2}
```
+ 函数简写
```
const o = {
    method(){
        return "agree";
    },
    employee
};
//等同于
const o = {
    method: function(){
        return "agree";
    }
    employee: employee
};
```
## 二、属性名的表示法
+ 有两种方法可以表示对象的属性名：
##### 1. 直接用标识符表示对象的属性名：
```
let a = 'agree';
a就是这个标识符
```
##### 2. 用表达式表示对象的属性名，表达式要放在方括号内：
```
let ['a'+'bc'] = 'agree';
abc // 'agree'
['a'+'bc']是这个标识符
```
##### 3. 属性名表达式与属性名简写不可同时使用
```
const foo = 'bar';
const bar = 'abc';
const baz = {[foo]}; //报错
```
##### 4. 属性名是对象
属性名会被自动转换成字符串[object Object]
```
const key1 = {a:1};
const key2 = {b:2};

const myObj = {
    [key1]: 'value1',
    [key2]: 'value2'
};

myObj // Object{[object Object]: "valueB"}
```