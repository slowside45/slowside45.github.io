[TOC]
## 一、类内的方法
```
class Point(){
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        console.log('param1 is:'+ x + ',' + 'prama2 is:' + y);
    }
    toString1(){
        ...
    }
}
```
+ constructor()是构造器
+ toString()和toString1是类内的普通方法，在类内写方法不用逗号分隔。
## 二、prototype属性
+ 类内的所有方法，都定义在类的prototype属性上
```
class Point {
  constructor() 
  {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};

```
+ 使用Object.assign()向类内添加方法
```
class Point(){
    constructor(){
        ......
    }
}

Object.assign(Point.prototype,{
   toString(){}, 
   toValue(){},
});
```

## 三、类不存在变量提升
类不存在变量提升（hoist），这一点与 ES5 完全不同。
```
new Foo(); // ReferenceError
class Foo {}
```
上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。
```
{
  let Foo = class {};
  class Bar extends Foo {
  }
}
```

上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义。

## 四、私有方法和私有属性
在属性或者方法名前加上#符号，跟private一个意思.

另外，私有属性也可以设置 getter 和 setter 方法。
```
class Counter {
  #xValue = 0;

  get #x() { return #xValue; }
  set #x(value) {
    this.#xValue = value;
  }

  constructor() {
    super();
    // ...
  }
}
```
## 五、getter 和 setter
#### (1)get和set关键字
与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```
#### (2)Descriptor属性
+ 存值函数和取值函数是设置在属性的 Descriptor 对象上的。
```
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);

"get" in descriptor  // true
"set" in descriptor  // true
```