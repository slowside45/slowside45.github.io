[TOC]
## 框架选型

![](https://raw.githubusercontent.com/SunShinewyf/issue-blog/master/assets/technical/20.png)

* 基础框架 eggjs：http://eggjs.org/zh-cn/
* ORM 框架：egg-sequelize：https://github.com/eggjs/egg-sequelize
* JSON Web Token(JWT)插件 egg-jwt：https://github.com/okoala/egg-jwt
* 权限控制 node_acl：https://github.com/OptimalBits/node_acl
* 邮件发送 nodemailer：https://github.com/nodemailer/nodemailer

## 数据库 ORM 设计

**安装：**

```bash
$ npm i --save egg-sequelize
$ npm install --save mysql2
```

**配置：**

app/config/plugin.js 配置：

```js
exports.sequelize = {
  enable: true,
  package: "egg-sequelize"
};
```

app/config/config.default.js 配置：

```js
// 数据库信息配置
exports.sequelize = {
  // 数据库类型
  dialect: "mysql",
  // host
  host: "localhost",
  // 端口号
  port: "3306",
  // 用户名
  username: "root",
  // 密码
  password: "xxx",
  // 数据库名
  database: "AEMM"
};
```

**Model 层：**

app/db.js：

```js
const uuidv1 = require("uuid/v1");

function generateUUID() {
  return uuidv1().replace(/-/g, "");
}

function defineModel(app, name, attributes) {
  const { UUID } = app.Sequelize;

  let attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull || true;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: true
      };
    }
  }

  attrs.id = {
    type: UUID,
    primaryKey: true,
    defaultValue: () => {
      return generateUUID();
    }
  };

  return app.model.define(name, attrs, {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    version: true,
    freezeTableName: true
  });
}

module.exports = { defineModel };
```

app/model/User.js：

```js
const db = require("../db");

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const User = db.defineModel(app, "users", {
    username: { type: STRING, unique: true, allowNull: false }, // 用户名
    email: { type: STRING, unique: true, allowNull: false }, // 邮箱
    password: { type: STRING, allowNull: false }, // 密码
    name: STRING, // 姓名
    sex: INTEGER, // 用户性别：1男性, 2女性, 0未知
    age: INTEGER, // 年龄
    avatar: STRING, // 头像
    company: STRING, // 公司
    department: STRING, // 部门
    telePhone: STRING, // 联系电话
    mobilePhone: STRING, // 手机号码
    info: STRING, // 备注说明
    roleId: STRING, // 角色id
    status: STRING, // 用户状态
    token: STRING, // 认证 token
    lastSignInAt: DATE // 上次登录时间
  });

  return User;
};
```

## restful API 用户认证设计

 请求头：

```
X-AmebaCloud-AppId: {your app id}
X-AmebaCloud-AppKey: {you app key}
X-AmebaCloud-ApiVersion: {ameba cloud service version}
X-AmebaCloud-ChannelId:{channelId}
Authorization: Bearer {access_token}
```

注：access_token 为登录后返回的 token 值。

返回值：

```json
{
  "code": "0",
  "message": "描述信息",
  "data": []
}
```

egg-jwt 基于 [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) 实现，完整文档可以参考 [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)。jwt 对象挂载在 app 对象下，可以通过 app.jwt 访问 jwt 的三个方法：

* jwt.sign(payload, secretOrPrivateKey, [options, callback])————生成 token 字符串
* jwt.verify(token, secretOrPublicKey, [options, callback])————校验 token 合法性
* jwt.decode(token [, options])————token 译码

**安装：**

```bash
$ npm i egg-jwt --save
```

**配置：**

app/config/plugin.js 配置：

```js
exports.jwt = {
  enable: true,
  package: "egg-jwt"
};
```

app/config/config.default.js 配置：

```js
exports.jwt = {
  enable: false,
  secret: "xxxxxxxxxxxxx"
};
```

## 用户权限设计

基于用户的权限管理：

假如做权限管理功能的时候都依赖基于用户的权限管理，那么一旦产生变化就会发现这种实现方式的局限性。基于角色的权限管理：「权限」的作用是用来区分某一数据是否允许某种角色的用户进行操作。「权限」只和「角色」对应，而用户也和「角色」对应，为用户赋予角色，然后管理角色的权限，完成了权限与用户的解耦。

```js
{
  "*":{
    "read": true,
    "write": true
  }
}
```

参考：
- https://leancloud.cn/docs/acl-guide.html#hash-180328360
- https://github.com/OptimalBits/node_acl
- https://github.com/eggjs/egg-userrole

## 异常统计

stacktrace-js: https://github.com/stacktracejs/stacktrace.js