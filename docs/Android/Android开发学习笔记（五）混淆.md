## 基本混淆
两个常用的混淆命令，注意一颗星表示只是保持该包下的类名，而子包下的类名还是会被混淆；而两颗星表示把本包和所包含的子包下的类名都保留。

```
-keep class cn.hadcn.test.**
-keep class cn.hadcn.test.*
```

如果既想保持类名，又想保持里面的内容不被混淆，就执行以下方法
```
-keep class com.example.bean.* { ; }
```

在此基础上，我们也可以使用Java的基本规则来保护特定类不被混淆，比如我们可以用extend，implement等这些Java规则。如下例子就避免所有继承Activity的类被混淆

## 特殊混淆
1. 代码混淆压缩比，在0~7之间，默认为5，一般不做修改
```
-optimizationpasses 5

```
2. 混合时不使用大小写混合，混合后的类名为小写
```
-dontusemixedcaseclassnames
```
3. 指定不去忽略非公共库的类
```
-dontskipnonpubliclibraryclasses
```
4. 指定不去忽略非公共库的类成员
```
-dontskipnonpubliclibraryclassmembers
```
5. 不做预校验，加快速度
```
-dontpreverify
```
6. 保留Annotation
```
-keepattributes Annotation,InnerClasses
```
7. 避免混淆泛型
```
-keepattributes Signature

```
