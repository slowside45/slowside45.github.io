[TOC]
## 一、活动是什么
包含用户界面的组件，用于与用户交互
```
graph LR
A[自定义活动] -->|继承| B[AppCompatActivity]
B[AppCompatActivity] -->|继承| C[Activity]
```
项目中任何活动都应该重写Activity的 **onCreate()** 方法
## 二、布局的设计
+ 一个活动 对应一个布局
+ 布局中的元素都应该有唯一标识符（id），在xml中引用一个id，语法是：
```
@id/id_name

//和引用一个string之类的元素类似： 
//例如想引用res下某个string的引用，就是@string/{string_name}
```
+ 在xml定义一个引用，语法是：
```
android:id = @+id/{id_name}

```
## 三、活动注册
+ 在 AndroidManifest.xml下，Android Studio会自动在 **<application>** 标签内创建 **<activity>** 标签
+ 和Java程序一样，活动也有Main活动，在 **<activity>** 标签内的  **<intent-filter>** 标签中为主活动设置MAIN action和LAUNCHER category：
```
<intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
```
## 四、 Intent
+ Intent用于在不同组件之间传递数据。
+ Intent有多个构造函数的重载
### （一）显式Intent
#### （1）Intent对象的构建
Intent(Context packageContext, Class<?> cls)
1. **Context：** 第一个参数要求提供启动活动的上下文（当前活动类名.this）
2. **Class:** 第二个参数Class指定想要启动的目标活动 （要启动的的活动类名.class）
#### （2）调用startActivity()，intent入参
Active类提供了一个 ==startActivity()== 方法，这个方法专门用于启动活动。
```
Intent intent = new Intent(<当前活动的类名>.this, <准备要启动的活动的类名>.Class);
startActivity(intent);
```
这样就完成了Intent的使用。
### （二）隐式Intent
#### 1. 启动自己程序内的活动
在Intent中指定action和category，凡是可以响应这个action与category（缺一不可）的活动，都会被启动。
+ 每个Intent只能指定一个action,但是可以指定多个category
```
Intent intent = new Intent(<action的值>);
intent.addCategory(<category的值>);
```
+ ==android.intent.category.DEFAULT==是一种默认的category，在调用startActivity()方法的时候会自动将这个category添加到Intent中
```
graph LR
A[包含action和category的Intent对象] --> B[在Mainfest中被定义了响应的action与category的活动]
```
#### 2. 启动外部程序的活动
+ 调用外部活动时，需要用系统内置动作作为intent的初始化参数。
+ intent.setData(Uri.parse())： parse中的数据有不同的种类，只有在manifest中响应了该种类数据的活动会被启动，否则就直接启动外部程序的活动。
```
Intent intent = new Intent(Intent.Action_DIAL); //系统内置动作
intent.setData(Uri.parse("tel:10086"));  //setData
startActivity(intent);
```
## 五、活动间的数据传递
### （一）向下一个活动传递数据
存数据到intent中：
```
intent.putExtra("<key>",<value>);
```
从intent中把数据取出：
```
Intent intent = getIntent();
intent.getStringExtra("<key>");
//对于不同类型的数据，取数据的方法也不一样
//getIntExtra()
//getBooleanExtra()
//......
```
### （二）向上一个活动返回数据
1. 使用startActivityForResult()启动活动
```
startActivityForResult(intent, <requestCode>);
```
其中intent是已构建完成的intent对象，requestCode是一个自己设定的具有唯一性的请求码。这里假设它是1
2. 在被启动的活动中添加返回数据的逻辑
```
Intent intent = new Intent();
intent.putExtra("data_return", "Hello FirstActivity");
setResult(RESULT_OK, intent);
finishi();
```
+ setResult()方法中的第一个参数是resultCode,一般用来给上一个活动的onResultActivity() 方法提供参数
+ 在finish（）方法执行完毕后会销毁当前活动，然后回调上一个活动的onAcivityResult()方法。
3. 在上一个活动中编写onActivityResult()方法，get返回的数据
```
public void onActivityResult(int requestCode, int resultCode, Intent data){
    switch(requestCode) {
        case 1: //根据之前设定的requestCode的值来调用不同的逻辑
            if (resultCode == RESULT_OK) {
                String returnedData = data.getStringExtra("data_return");
                Log.d("FirstActivity", returnedData);
            }
            break;
        default:
    }
}
```
```
graph LR
A[startActivityForResult开启一个活动] -->|传递requestCode与intent对象| B[被开启的活动]
B -->|添加返回数据逻辑| C[上一个活动]
C --> |接收返回的数据| D[完毕]
```

## 六、生命周期
### （一）返回栈
活动在被创建后入栈，后进先出
### （二）活动状态
1. 运行状态： 位于栈顶
2. 暂停状态： 不再位于栈顶但仍然可见
3. 停止状态： 不再处于栈顶并且完全不可见
4. 销毁状态： 从返回栈中移除
### （三）活动的生存期
![image](https://note.youdao.com/yws/public/resource/68d6a573fe6b5c8fadb12ade71079ab8/xmlnote/55111D3FD4564A408E70A4748EF9918A/6536)
### （四）恢复被回收的活动
#### 数据保存
**onSaveInstanceState()** 这个回调方法保证活动在被回收之前被调用：
```
在父类AppCompatActivity中有这么两个方法：
protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        this.getDelegate().onSaveInstanceState(outState);
    }

    @NonNull
    public AppCompatDelegate getDelegate() {
        if (this.mDelegate == null) {
            this.mDelegate = AppCompatDelegate.create(this, this);
        }

        return this.mDelegate;
    }
```
##### onSaveInstanceState(Bundle outState)
+ Bundle携带一系列方法用来保存数据：putString(), putInt() ....
```
outState.putString( key, value );

```
+ 在Activity中重写 onSaveInstanceState(Bundle outState)方法来进行数据保存
#### 数据读取
在Activity中修改onCreate()方法：
```
============old==========
protected void onSaveInstanceState(Bundle outState){
super.onCreate(savedInstanceState);
...
=========================

=============new=========
if(savedInstanceState != null){
    String tempData = savedInstanceState.getString("<key>");
//tempData是取到的数据，可以自由对它进行处理
=========================
}
}
```

## 七、使用Intent或Bundle进行数据传递的差异分析
如果涉及多个Activity的传值：
+ 使用Intent： 
每跨一次Activity，就要进行一次get & set
+ 使用Bundle：
1. 把值存到Bundle中，然后把Bundle存到Intent中，不用在中途取出bundle中的值，只需要依次往后传bundle对象。
```
存：intent.putExtras(bundles);
取：Bundle bundle = this.getIntent.getExtras();
```
2. Bundle对象中可以存放对象，存放的对象需要实现Serializable接口
User类：
```
public class User implements Serializable {
    //...
}
```
把User对象存入Bundle对象中：
```
Bundle bundle = new Bundle();
User user = new User();
bundle.putSerializable("user", user); //<key-value>
```
## 八、活动的启动模式
启动模式分为四种：
+ standard（默认模式）：创建一个新的实例，入栈顶
+ singleTop：如果当前栈顶有相同活动，则不创建新实例
+ singleTask：如果当前栈堆有相同活动，则不创建新实例
+ singleInstance：创建一个新栈堆，并创建新活动实例入栈（活动关闭后若栈堆中已无任何活动，则关闭栈堆）
在AndroidManifest.xml中进行配置
```
<activity android:launchMode: {launchmode}>
```