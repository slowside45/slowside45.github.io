# 前言 

广播应该在特定的场景中，去调用特定的对象，让特定的对象完成特定的任务，而
不是在广播中完成特定的任务。如果广播中的逻辑处理耗费大量时间的话，会造成应用崩溃

## 一、广播接收器的创建与注册

### 1. 创建接收器对象

  创建一个类，继承 BroadcastReceiver, 重写onReceive方法，在其中处理接收广播后的逻辑

### 2. 注册接收器

#### 动态注册

  在 onCreated() 方法中进行广播接收器注册
> (1) 创建IntentFilter作为监听过滤器，为其添加action属性作为监听目标的filter。

> (2) 新建接收器对象

> (3) 调用registerReceriver(networkChangeReceiver, intentFilter)进行注册。
- 在 onDestroy() 方法中取消注册
> 动态注册的广播一定要在活动销毁后取消注册：
```
public void onDestroy() {
    super.onDestroy();
    unregisterReceiver(监听器对象);
}
```

#### 静态注册

通过new -> Broadcast新建在AndroidManifest.xml中进行广播注册：

- 在`<application>`标签中：

```XML
<receiver
    android:name = "广播接收器类的相对路径"
    android:icon ...
    android:label ...
    ...
>
    <intent-filter>
        <action android:name = " {目标Action} " />
    </intent-filter>
</recevier>
```

- 静态注册的Receiver，它的生命周期从开机就已经开始。如果需要监听系统开机广播，需要在AndroidManifest.xml中加入Permission:
```
<user-permisson android:name="android.permisson.RECEIVE_BOOT_COMPLETED" />
```
## 二、发送自定义广播
**自定义广播&内置广播**
- 广播根据其触发方式分为两种，一种是系统内置广播，如网络状态变化，系统会自动发送广播，开机，系统也会自动发送广播。另外一种则是自定义广播，用户需要自己定义触发广播的条件与广播的内容。
### 1. 发送标准广播
- 标准广播：发出广播后，所有为该广播内容注册过的接收器都能收到该广播（同时）
- 发送广播： 在Activity的context中有默认方法 sendBroadcast(intent) 可以发送广播，广播的相关属性被定义在intent中。 
### 2. 发送有序广播
- 有序广播：发出广播后，各个接收器按照优先级高低接收广播，如果在通信中途广播被absort，则不继续传递
- 拦截广播：在接收器中调用abortBroadcast()，广播经过此拦截器后被拦截，不在向后传递
- 发送有序广播：在Activity中调用sendOrderBroadcast(intent,{option权限相关配置})
> * 在AndroidManifest.xml中配置广播的优先度:
>   `<intent-filter android:priority="{优先度-int}">`
## 三、使用本地广播
> 前面所介绍的广播都是系统全局广播，在同一个系统中发出的所有广播可以被其他任何应用程序监听到。并且我们也可以接受来自于任何应用程序的广播，安全性较差。本地广播只能接受来自于本应用中发出的广播

### 1. 创建本地广播管理器
```
LocalBroadcastManager localBroadcastManager = LocalBroadcastManager.getInstance(this); //获取管理器实例
```
### 2. 发送本地广播
```
创建好广播intent对象，然后
localBroadcastManager.sendBroadcast(intent); //发送本地广播
```
### 3. 本地广播接收器
```
IntentFilter intentFilter = new IntentFilter();
intentFilter.addAction("<The Specific Action>");//定义filter
LocalReceiver localReceiver = new LocalReceiver(); //创建监听器对象
localBroadcast.registerReceiver(localReceiver,intentFilter);//注册监听器

class LocalReceiver extends BroadcastReceiver {
    @Override
    public void onReceiver(Context context, Intent intent){
        ..... //运行逻辑
    }
}

```
+ 本地广播Receiver无法通过静态注册来接收广播。
+ 正在发送的广播不会离开Receiver所在的程序内部
+ 其他程序发送的广播不会被本地广播Receiver接收到
+ 发送本地广播比发送系统全局广播更高效
