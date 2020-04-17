[TOC]
### app目录下的文件夹
##### 1. libs —— 存放第三方jar包
##### 2. java —— 存放所有java代码
##### 3. res —— 存放在项目中所使用到的所有图片、布局、字符串等资源：
+ drawable: 图片资源
+ values: 字符串资源
+ layout: 布局资源
+ mipmap: 应用图标

**res/valuls/colors:**
```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
</resources>
```
- [ ] 项目中添加的任何文件都会在R文件中生成一个相应的资源id。例如color字符串，在代码中可以通过 ==R.color.colorPrimary== 获得该字符串的引用
- [ ] 在XML中通过 ==@color/colorPrimary== 获得该字符串的引用
##### 4.  AndroidManifest.xml —— 整个Andriod项目的配置文件，在程序中定义的四大组件都需要在这个文件中进行注册
---
### 两个build.gradle文件
+ Gradle是一个用来构建项目的插件
+ jcenter是一个代码托管仓库，很多开源项目都将代码托管在jcenter上
#### 一、最外层的build.gradle
```
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.0'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        jcenter()
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}

```
#### 二、 app目录下的build.gradle
```
//省略版本声明
buildTypes {
        release { //type： debug版和release版
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
// minifyEnable表示是否混淆代码
```