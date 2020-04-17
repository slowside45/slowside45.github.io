[TOC]
## 一、JS中实现异步的方法
1. 回调函数
2. Promise对象
3. Thunk函数
4. co模块

## 二、Generator函数
### 1. 运行流程 
Generator是一个封装的异步任务，或者说是异步任务的容器。
它的执行通过两个方法控制：
```
1. field
2. next
yield语句表示暂停，next表示下一步。
```
例子：
```
function* gen(x){
    var y =  yield x + 2;
    return y;
}
//调用该Generator函数
var g = gen(1);
g.next();
g.next();
```
调用Generator函数，不会返回return值，而是会返回一个指针对象。使用next方法可以让指针向后移动到第一个遇到的yield语句。
```
graph TD
A[开始] --> B[Generator函数执行]
B --> P[返回指针对象g]
P --> C[使用指针对象g的next方法]
C -->|指针向后移动| D[到达第一个yield语句 x+2]
D --> E[返回包含当前阶段信息的对象]
E --> F[暂停]
```
==包含当前阶段信息的对象==
```
g.next();
//返回一个包含当前阶段信息的对象，包括value属性和done属性
```
```
graph TD
A[对象] --> B[value]
A --> C[done]
B --> E[yield后面表达式的值]
C --> F[是否执行完毕]
```
### 2. 执行器
Generator函数是异步方法的封装，它们如果需要被应用到实际情况中，就需要满足在特定条件下能够自动运行。执行器能实现这样的功能。

#### (1). Thunk 函数的自动流程管理

Thunk 函数真正的威力，在于可以自动执行 Generator 函数。下面就是一个基于 Thunk 函数的 Generator 执行器。
```
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* g() {
  // ...
}

run(g);
```
上面代码的run函数，就是一个 Generator 函数的自动执行器。内部的next函数就是 Thunk 的回调函数。next函数先将指针移到 Generator 函数的下一步（gen.next方法），然后判断 Generator 函数是否结束（result.done属性），如果没结束，就将next函数再传入 Thunk 函数（result.value属性），否则就直接退出。

有了这个执行器，执行 Generator 函数方便多了。不管内部有多少个异步操作，直接把 Generator 函数传入run函数即可。当然，前提是每一个异步操作，都要是 Thunk 函数，也就是说，跟在yield命令后面的必须是 Thunk 函数。
```
var g = function* (){
  var f1 = yield readFileThunk('fileA');
  var f2 = yield readFileThunk('fileB');
  // ...
  var fn = yield readFileThunk('fileN');
};

run(g);
```
上面代码中，函数g封装了n个异步的读取文件操作，只要执行run函数，这些操作就会自动完成。这样一来，异步操作不仅可以写得像同步操作，而且一行代码就可以执行。

Thunk 函数并不是 Generator 函数自动执行的唯一方案。因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。
#### (2). co模块
co模块规定，yield后面的语句必须是thunk函数或者promise对象
```
//Generator函数
var gen = function* () {
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
//引入co模块
var co = require('co');
co(gen);
```
上面代码中，Generator 函数只要传入co函数，就会自动执行。

co函数返回一个Promise对象，因此可以用then方法添加回调函数。
```
co(gen).then(function (){
  console.log('Generator 函数执行完成');
});
```
上面代码中，等到 Generator 函数执行结束，就会输出一行提示。

## 三、 async函数
async函数，是Generator函数的语法糖，它的实现原理，就是将Generator函数和它的自动执行器打包在同一个函数里。

```
async function f(args){
    // ...
}
```
等同于
```
function f(args){
    return spawn(function* (){
        // ...
    });
}
```
其中spawn函数就可以看作Generetor函数的自动执行器。
### 1. 对Generetor的改进
##### (1) 内置执行器
##### (2) 更好的语义
##### (3) await命令后面可以跟Promise对象，也可以跟原始类型对象(这时为)
##### (4) 返回值是Promise对象，可以用then()方法指定下一步的操作

### 2. 使用注意点
##### (1) 最好把await命令放在 try-catch语句块中
##### (2) 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同步触发。
```
let foo = await function getFoo();
let bar = await function getBar();
```
这两个方法互不影响，完全可以同时触发：
```
///方法一
let [foo,bar] = await Promise.all([getFoo()],[getBar()]);

//方法二
let fooPromise =  getFoo();
let barPromise =  getBar();
let foo = await fooPromise;
let bar = await barPromise;
```
方法二让getFoo()和getBar()同时触发，然后异步保存了它们的返回值(Promise对象)
##### (3)await命令只能用在async函数中

### 3. 异步遍历器(asynciterat)
##### (1) 异步遍历器的创建
```
//创建一个可以被异步遍历的对象
const asyncIterable = createAsyncIterable(['a','b']);

//创建一个异步遍历器
const asyncIterator = asyncIterator = asyncIterable[Symbol.asyncIterator]();

```
```
graph LR 
A[asynciterator] -->|调用next方法| B[Promise对象]
B --> C[调用then方法]
C -->|返回value和result| D[处理返回值]
```
##### (2) 使用异步遍历器
```
asynvIterator.next().then(iterResult1 => {
    console.log(iterResult1);
    return asyncIterator.next();//返回一个Promise对象 
    
}).then(iterResult2 => {
    .....
})........
```
因为异步遍历器的next方法返回的是一个Promise对象，所以可以把它们放在await语句后
```
async function f() {
  const asyncIterable = createAsyncIterable(['a', 'b']);
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  console.log(await asyncIterator.next());
  // { value: 'a', done: false }
  console.log(await asyncIterator.next());
  // { value: 'b', done: false }
  console.log(await asyncIterator.next());
  // { value: undefined, done: true }
}   
```
注意，异步遍历器的next方法是可以连续调用的，不必等到上一步产生的 Promise 对象resolve以后再调用。这种情况下，next方法会累积起来，自动按照每一步的顺序运行下去。下面是一个例子，把所有的next方法放在Promise.all方法里面。
```
const asyncGenObj = createAsyncIterable(['a', 'b']);
const [{value: v1}, {value: v2}] = await Promise.all([
  asyncGenObj.next(), asyncGenObj.next()
]);

console.log(v1, v2); // a b
```
另一种用法是一次性调用所有的next方法，然后await最后一步操作。
```
async function runner() {
  const writer = openFile('someFile.txt');
  writer.next('hello');
  writer.next('world');
  await writer.return();
}

runner();
```
##### (3)for await... of
+ 新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。
```
async function f() {
  for await (const x of createAsyncIterable(['a', 'b'])) {
    console.log(x);
  }
}
// a
// b
```
+ for await...of循环的一个用途，是部署了 asyncIterable 操作的异步接口，可以直接放入这个循环
```
let body = '';

async function f() {
  for await(const data of req) body += data;
  const parsed = JSON.parse(body);
  console.log('got', parsed);
}
```
上面代码中，req是一个 asyncIterable 对象，用来异步读取数据。可以看到，使用for await...of循环以后，代码会非常简洁。

+ 如果next方法返回的 Promise 对象被reject，for await...of就会报错，要用try...catch捕捉。
```
async function () {
  try {
    for await (const x of createRejectingIterable()) {
      console.log(x);
    }
  } catch (e) {
    console.error(e);
  }
}
```
+ 注意，for await...of循环也可以用于同步遍历器。


```
(async function () {
  for await (const x of ['a', 'b']) {
    console.log(x);
  }
})();
// a
// b
```