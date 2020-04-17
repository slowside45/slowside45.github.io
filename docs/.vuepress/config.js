module.exports = {
    //网站标题
    title: 'Joey Studio',
    // 主页描述
    description: 'Joey Studio',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/icon.png'
        }]
    ],
    // 要部署的仓库名字
    base: '/',
    dest: './docs/.vuepress/dist',
    serviceWorker: true,
    head: [
        ['link', {
            rel: 'icon',
            href: '/icon.png'
        }]
    ],
    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            // text为导航栏显示文字，link为路径，即文件夹名字，注意不要丢了名字前后的'/'
            {
                text: '主页',
                link: '/'
            },
            {
                text: '工具',
                link: '/Web/'
            },
            // {
            //     text: 'Nginx',
            //     link: '/nginx/'
            // },
            {
                text: "微服务",
                link: '/SpringCloud/'
            },
            // {
            //     text: 'Android',
            //     link: '/Android/'
            // },
            {
                text: '关于我',
                link: '/about/'
            },
            {
                text: 'Github',
                link: 'https://github.com/slowside45'
            }
        ],
        // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
        // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
        sidebar: {
            '/Web/': [
                "",
                "JetBrain-getKey.md",
                "learn-springboot.md",
                "SpringbootErrorFallback.md"
                // {
                //     title: "Spring Boot错误笔记",
                //     collapsable: true,
                //     children: [
                //         ["SpringbootErrorFallback#simple-error", "一次低级失误"]
                //     ]
                // },
                // {
                //     title: "Spring Boot排坑日志",
                //     collapsable: true,
                //     children: [
                //         ["learn-spring-boot#diary", "排坑日志"]
                //     ]
                // }
            ],
            '/SpringCloud/': [
                'eureka.md',
                'eureka-plus.md'
            ]
            // '/Android/': [{
            //         title: "广播机制",
            //         collapsable: true,
            //         children: [
            //             ["Android开发学习笔记（六）广播机制.md#一、广播接收器的创建与注册", "广播的创建与接收"],
            //             ["Android开发学习笔记（六）广播机制.md#二、发送自定义广播", "发送自定义广播"],
            //             ["Android开发学习笔记（六）广播机制.md#三、使用本地广播", "使用本地广播"]
            //         ]
            //     },
            //     {
            //         title: "代码混淆",
            //         collapsable: true,
            //         children: [
            //             ["Android开发学习笔记（五）混淆.md#基本混淆", "基本混淆"]
            //         ]
            //     }
            // ],


            // ''空字符串代表主页，显示README.md中的内容
        },
    }
}