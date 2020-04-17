# Springboot 排坑日志

## Service 无法通过@Autowired 方式依赖注入

当出现如下报错时：

```
Action:
Consider defining a bean of type 'seconds47.service.TopicService' in your configuration.

Description:
Field topicService in seconds47.restAPI.topics required a bean of type 'seconds47.service.TopicService' that could not be found
```

- 解决办法：

在运行类加入注解：@ComponentScan(value={"xx.xx.xx","xx,xx,xx"})，把 service、controller、repository 等文件的包都引进来，就能解决

## 配置文件参数读取

### 一、注解方式读取

1. @PropertySource 配置文件路径设置，在类上添加注解，如果在默认路径下可以不添加该注解。
   需要用@PropertySource 的有：

例如非 application.properties，classpath:config/my.properties 指的是 src/main/resources 目录下 config 目录下的 my.properties 文件，
例如有多配置文件引用，若两个配置文件中有相同属性名的值，则取值为最后一个配置文件中的值
在 application.properties 中的文件，直接使用@Value 读取即可，application 的读取优先级最高
@PropertySource({"classpath:config/my.properties","classpath:config/config.properties"})
public class cn.com.test.TestController

2. @Value 属性名，在属性名上添加该注解
   @Value("\${my.name}")
   private String myName;

1. 使用 mysql 8.0 时，jdbc 驱动包需要使用`com.mysql.cj.jdbc.Driver`
1. 入口类需要放在一个自定义的 package 内，否则会报错
1. `@ComponentScan`注解的使用：入口类如果和 bean、controller 等类在同一个包下，则不用单独申明，如果不在同一包下，需要单独声明，扫描其他包下的 controller、bean 等，从而进行依赖注入，例：

```
@ComponentScan({"com.agree.controller","com.agree.entity","com.agree.repository","com.agree.service"})
```

4. 连接数据库时，发生`Access Denined`的错误：

```
properties方式配置的话，只要填写正确的用户名和密码，一般不会出错。如果在yml中进行配置，需要在数据库密码两边加上""
```

- 错误配置：

```
spring:
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&characterSetResults=utf8&useSSL=false
    username: root
    password: 000000
```

- 正确配置：

```
spring:
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&characterSetResults=utf8&useSSL=false
    username: root
    password: "000000"
```

## SpringBoot 常用配置

### @RequestBody 注解的注意事项

1. @RequestBody 需要把所有请求参数作为 json 解析，因此，不能包含 key=value 这样的写法在请求 url 中，所有的请求参数都是一个 json
2. 直接通过浏览器输入 url 时，@RequestBody 获取不到 json 对象，需要用 java 编程或者基于 ajax 的方法请求，将 Content-Type 设置为 application/json

### 常用的 25 个注解：

[常用注解](https://www.jianshu.com/p/2be4524fe5a8?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)

### Spring Boot 中的配置文件：

```
server.port=9090 # 服务端口号
server.tomcat.uri-encoding=UTF-8 #以Tomcat为web容器时的字符编码
spring.data.mongodb.uri=mongodb://localhost:27017/mydb #mongodb连接

spring.application.name=customer # 应用名称，一般就是项目名称，这个名称在SpringCloud中比较关键
spring.profiles.active=dev #指定当前的活动配置文件，主要用于多环境多配置文件的应用中
spring.http.encoding.charset=UTF-8 #http请求的字符编码
spring.http.multipart.max-file-size=10MB #设置文件上传时单个文件的大小限制
spring.http.multipart.max-request-size=100MB #设置文件上传时总文件大小限制

spring.mvc.static-path-pattern=/** #设置静态资源的请求路径
spring.resources.static-locations=classpath:/static/,classpath:/public/ #指定静态资源的路径

##以下是使用MySQL数据库的配置
hibernate.dialect=org.hibernate.dialect.MySQL5Dialect #指定数据库方言
hibernate.show_sql=true #是否显示sql语句
hibernate.hbm2dll.auto=update #设置使用Hibernate的自动建表方式
entitymanager.packagesToScan=com.zslin #设置自动扫描的包前缀

spring.datasource.url=jdbc:mysql://localhost:3306/customer?\
useUnicode=true&characterEncoding=utf-8&useSSL=true&autoReconnect=true #数据库链接
spring.datasource.username=root #数据库用户名
spring.datasource.password=123 #数据库用户对应的密码
spring.datasource.driver-class-name=com.mysql.jdbc.Driver #数据库驱动名称

```

## 参数校验(Validate 注解)

| 注解名       | 用法                                                            |
|--------------|-----------------------------------------------------------------|
| @Null        | 验证对象是否为空                                                |
| @NotNull     | 验证对象是否为非空                                              |
| @AssertTrue  | 验证 boolean 对象是否为 true                                    |
| @AssertFalse | 验证 boolean 对象是否为 false                                   |
| @Min         | 验证 number 和 string 对象是否大等于指定的值                    |
| @Max         | 验证 number 和 string 对象是否小等于指定的值                    |
| @DecimalMin  | 验证 number 和 string 对象是否大等于指定的值，小数存在精度      |
| @FecimalMax  | 验证 number 和 string 对象是否小等于指定的值，小数存在精度      |
| @Size        | 验证对象（array,collection,map,string）长度是否在给定的范围之内 |
| @Digits      | 验证 number 和 string 的构成是否合法                            |
| @Last        | 验证 date 和 calendar 对象是否在当前时间之前                    |
| @Future      | 验证 date 和 calendar 对象是否在当前时间之后                    |
| @Pattern     | 验证 string 对象是否符合正则表达式的规则                        |
| @Email       | 验证邮箱                                                        |

- 举例

```Java
    @Size(min=3, max=20, message="用户名长度只能在3-20之间")
    @pattern (regexp="[a-za-z0-9._%+-]+@[a-za-z0-9.-]+\\.[a-za-z]{2,4}", message="邮件格式错误")
    @Length(min = 5, max = 20, message = "用户名长度必须位于5到20之间")
    @Email(message = "比如输入正确的邮箱")
    @NotNull(message = "用户名称不能为空")
    @Max(value = 100, message = "年龄不能大于100岁")
    @Min(value= 18 ,message= "必须年满18岁！" )
    @AssertTrue(message = "bln4 must is true")
    @AssertFalse(message = "blnf must is falase")
    @DecimalMax(value="100",message="decim最大值是100")
    @DecimalMin(value="100",message="decim最小值是100")
    @Pattern(regexp="^(\\d{18,18}|\\d{15,15}|(\\d{17,17}[x|X]))$", message="身份证格式错误")
```

<span id="redis">
...
</span>

# Redis 排坑日志

1. 在命令行中配置 requirepass(访问数据库所需的密码)，有时候不会生效，需要到 Redis 根目录下，在`redis.windows.conf`文件中加入 requirepass.
2. Redis 不要安装在 C 盘，否则在连接时会出现 Access Denied 的错误
3. 在本地启动 redis 服务时，有两种启动方式：

- 第一种： redis-server（不建议）

```$xslt
这种启动方式，默认不带密码，如此情况下，客户端发送了一个带密码的请求，服务端没有设置密码校验，会导致报错
```

- 第二种：redis-server redis.windows.conf

```$xslt
需要事先在redis.windows.conf配置文件中加入requirepass，再按照这种方式启动，就不会有报错
```

# Oracle 排坑日志

1. 在 Springboot 的实体类中，Table 注解的值加上双引号后会被自动解析成大写。Oracle 数据库对大小写敏感，所以建议表名、字段名均采用大写。
2. 实体类的属性如果是小驼峰，会被MyBatis自动解析成带有下划线的形式，传入数据库中，造成错误：
```java
@TableId
private String id;
private String weChatId;
private String userStr;
private Date createdAt;

// 自动解析后
### SQL: INSERT INTO wechatAppExperimenter  ( id, created_at, user_str, we_chat_id )  VALUES  ( ?, ?, ?, ? )
### Cause: java.sql.SQLSyntaxErrorException: Unknown column 'created_at' in 'field list'
```
- 解决办法：
在application.yml里添加一行配置，关闭驼峰到下划线的映射即可
```yml
mybatis-plus.configuration.map-underscore-to-camel-case=false

```
