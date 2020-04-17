## 一、WebView
## 二、HttpURLConnection
## 三、JS与Java的交互
在android应用中加载JS文件，JS文件要存放在src/main/android_asset文件夹下。
```
webview.loadUrl("file:///android_asset/index.html");
```
