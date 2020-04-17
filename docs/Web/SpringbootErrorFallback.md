# Springboot 项目开发常见错误

## 记一次低级失误

#### 疑象丛生
深夜撸码，也许是因为有点困，随手创建了一个controller后就去改别的地方，改完后一运行，连swagger的页面都无法访问，打断点到我配置的第一个interceptor中，发现preHandle中的object对象是我在运行之前创建的那个controller，遂进入controller类查找错误。
```java
@Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object object)
```
#### 水落石出
我在创建controller时，将url作为@RestController注解的默认值填了进去。

错误:
```java
@RestController("/appUser")
public class AppUserController {
}
```

正确：
```java
@RestController()
@RequestMapping("/appUser")
public class AppUserController {
```

#### 收获
1. 在interceptor的prehandle方法中，通过查看object的属性，可以知道发生异常访问时url指向的controller。
2. 困了就去睡觉，别瞎jb写