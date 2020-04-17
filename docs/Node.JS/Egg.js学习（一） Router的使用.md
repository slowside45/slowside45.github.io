[TOC]
## Router的使用
#### 一、RESTful API的CRUD
```
 router.resources("router", "url", controller)；
```
- *参数说明*
    + **router**：路由的名称，这个属性只是为了辨识，没有特定的key-value关系
    + **url**: 遵循RESTful API 规范设计的API的url值
    + **controller**： 最外层controller的url值
    
- *RESTful API 的controller*
1. 在部署了sequelize插件的egg.js框架中，controller的调用顺序为：
          
```
graph LR
A[最外层Controller] --> B[service中的controller]
B --> C[model类中sequelize插件封装好的controller]
```
2. 在最外层Controller中，有框架预封装好的CRUD方法，如果需要使用它们， 只需要在controller文件中显示声明即可.
   
+ Eg:
```
router.resources('users', 'api/v1/users', controller.v1.users);
```
以下方法自动生成，若不需要，不显示声明即可
```
graph LR
A[create] --> B[POST   /api/v1/users]
I[index] --> J[GET /api/v1/users]
K[new] --> L[GET /api/v1/users/new]
C[show] --> D[GET /api/v1/users/:id]
M[edit] --> N[GET /api/v1/users/:id/edit]
E[delete] --> F[DELETE /api/v1/users/:id]
G[update] --> H[PUT /api/v1/users/:id]

```
***
#### 二、中间件的使用
```
router.<method>(<api>,<middleware>,<controller>);
```
+ method: HTTP Method
+ api: 根据需要设置的api的url的值
+ middleware：路由中要加载的中间件的的文件名，去掉 _ （如果需要使用多个中间件，用逗号分隔来实现串联的效果）
+ controller: 控制器的url
****
#### 三、Router —— 参数获取
(1). 获取url中的参数
+ 命名参数，使用ctx.params.id来获取
+ 查询字符串，使用ctx.query.<变量名>来获取
+ 正则表达式，使用ctx.params来获取
```
module.exports = app => {
    app.router.get('/user/:id/:name', app.controller.user.info) // id和name都是命名参数，使用ctx.params.id方式获取
    app.router.get('/search', app.controller.search.index) // 对于search?name=xxx，使用ctx.query.name获取
}
```
(2). 获取表单的参数
+ 表单参数的获取，可以通过ctx.request.body获取，如：
```
// app/controller/form.js
exports.post = async ctx => {
    ctx.body = `Body: ${JSON.stringify(ctx.request.body)}`
}
```