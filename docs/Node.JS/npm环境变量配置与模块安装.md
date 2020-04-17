### 1.npm的作用
npm的作用是对Node.js的依赖包进行管理
### 2.更改默认模块安装路径
1. 在nodejs根目录下创建两个空文件夹，一个cache，一个global
![image](https://note.youdao.com/yws/public/resource/b126d7c7743c15d727cc8a2cae48b8ca/xmlnote/3BC3595207E54FFC8354AF2E4CD77A0A/3273)

2. 创建完两个空文件夹之后，打开cmd命令窗口，输入

npm config set prefix "D:\Develop\nodejs\node_global"
npm config set cache "D:\Develop\nodejs\node_cache"
3. 进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入【D:\Develop\nodejs\node_global\node_modules】，将【用户变量】下的【Path】修改为【D:\Develop\nodejs\node_global】

### 3. 模块的安装： 
```
npm install <模块名> -g
(-g表示安装全局变量，若没有-g标签，则默认安装到当前路径)
```