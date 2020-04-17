## 各类控件版本号保持统一
在Android开发环境中，各类SDK具有向下兼容的特性。所以在==app/src/build.gradle==中，版本号应低于SDK Manager中已有的SDK版本号

## 运行环境
可以在虚拟机（AVD）上直接运行，也可以把Andriod设备连接到电脑上后，直接通过adb把apk安装到Andriod设备上。

## 项目的导入
应该导入到项目的根目录到Android Studio中。

根目录——有gradle文件那一级。