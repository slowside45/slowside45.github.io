[TOC]
## Vue界面的架构流程
![image](https://mc.qcloudimg.com/static/img/d63005a5d785358289fab9f0ea997aff/image.png)

## 一、组件 (Component)
在Vue中，把页面称作组件，一般被放在结构目录下的components文件夹里

## 二、路由 (Router)
控制组件与url的映射，在结构目录下的router文件夹里的js文件中来进行配置
+ 子路由的配置
```
{
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: '/',
          component: page1
        },
        {
          path: 'info',
          component: page2
        }
      ]
    }
```
+ 公共部分
```
<template>
    <div>公用部分</div>
    <router-view/>
</template>