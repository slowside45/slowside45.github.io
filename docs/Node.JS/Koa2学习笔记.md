[TOC]
## 一、Koa2
### （一）初始化
```
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
```
### (二) 运行逻辑
+ 对于每一个http请求，koa将调用我们传入的异步函数来处理：
```
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});
```
+ ctx参数：封装了request和response变量
+ next参数：koa下一步将要执行的异步函数
+ middleware（中间件）: koa把async函数组成一个处理链，每个async函数通过await next()来调用下一个函数。app.use()的顺序决定了middleware在处理链中的顺序。
### （三）附加依赖模块（middleware）
#### 1.koa-router（处理url，不同url对应不同的处理方法）
+ 注册get请求
```
router.get(url,async(ctx.next => {
   .....
});
```
url的值可以是：'/'（默认端口）
    也可以是带变量的值：/<...>/:<param>
+ 在app对象上注册router模块
```
app.use(router.routes());
```
#### 2. koa-bodyparser（解析Request的body部分）
Post请求通常会发送一个表单，或者JSON。它作为request的body发送，但无论是Node.js还是koa的ctx，都不支持解析request的body。
##### （1）初始化
```
const bodyParser = require('kpa-bodyparser');
```
在koa-router之前，把它注册到app对象上
```
app.use(bodyParser());
```