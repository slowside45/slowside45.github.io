[TOC]
## 一、**扩展运算符的应用**

可以看做是rest参数的逆运算，它能把一组数组转换为用逗号拆分的参数序列。

#### 1. 合并数组
```
var arr1 = ['a','b'];
var arr2 = ['c','d'];
var newArr = [...arr1,...arr2] // ['a','b','c','d']
```
#### 2. 与解构赋值结合
==如果扩展运算符用来给数组赋值，那么它只能放在参数的最后一位。==
```
const [first,...second] = [1,2,3,4,5];
first //1
rest // [2,3,4,5]
```
```
const [fitst,...rest] = [];
first //undefined 因为没有与之匹配的变量，取值失败，所以是undefined
rest  // []
```

#### 3. 将字符串转换为数组
```
var str = 'hello';
var arr = [...str];
//或者写成
var arr = [...'hello'];
arr // ['h','e','l','l','o']
```
==将字符串转换为数组后，通过获取数组的length属性，就能得到转换之前的字符串的长度==
## 二、 Array.from()
####　1. 将类似于数组的对象转换为数组
length属性决定了数组转换后有多长，任何带有length属性的对象都可以被转换为数组

==缺少索引==
```
var arr = Array.from({
    0: 'l',
    1: 'e',   //缺少2号索引，转换出来的数组在2号索引位置上值为空
    3: 'o',
    length: 4   //length属性控制转换成数组后，数组的长度
})
```
--> ['l','e','','o']
---

==缺少length属性==
```
var arr = Array.from({
    0: 'l',
    1: 'e',
    2: 'o',
    //缺少length属性
})
```
--> 空数组
---

==对象具有不能转换为索引号的属性名：==
```
var arr = Array.from({
    a: 'l',
    b: 'e',
    c: 'o',
    length: 3
})
```
--> 空数组
---
==2. Array.from的第二个参数==

**from()方法可以接收第二个参数： Array.from(arrObj,==function(){}==),这个函数的作用类似于map()方法，它会对传入的arrObj对象中的每个属性进行处理后返回。**
```
let arrObj = {
    0: 2,
    1: 3,
    length: 2
};
let arr = Array.from(arrObj, param => param*param);
arr // [4,9]
```
+ 使用from( ) 方法控制函数运行的次数
```
Array.from({length:3}， _=> console.log(0));

```
可以把需要控制的函数放在==箭头函数的返回值部分==，在这个例子中，需要把每次的输出值提取出来转换为一个长度为3的数组，装满这个数组后，该from方法停止，内部的箭头函数停止运行，这样一来就达到了控制内部函数运行次数的目的。  

## 三、 Array.of()
**可以用来代替new Array( )**, 该方法总是返回参数值所组成的数组。

而 new Array()方法只有在参数个数大于等于2时才会新建一个数组，若只有一个参数，这个参数会被认为是指定新数组的长度。
```
Array arr1 = new Array(3);
arr1 // [ , , ]
Array arr2 = Array.of(3);
arr2 //[3]
```