/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68d4dc79f4b92d831ee3096fb42cb799"
  },
  {
    "url": "about/index.html",
    "revision": "c72ef933d4ab82f6fb7d9df0b9e58dab"
  },
  {
    "url": "assets/css/0.styles.fb6ef450.css",
    "revision": "086b965cd5ddfb20f4704e758d118d65"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/back.64352abe.png",
    "revision": "64352abef662041515a51398a1c58c4b"
  },
  {
    "url": "assets/img/image-20200408022556581.5767bec8.png",
    "revision": "5767bec8f226060dedfa9673060ec20a"
  },
  {
    "url": "assets/img/image-20200408022623423.1dcd90e0.png",
    "revision": "1dcd90e0a5096132bd847098dac834b8"
  },
  {
    "url": "assets/img/image-20200408023531899.dbe49bd3.png",
    "revision": "dbe49bd3438ad28c7cf3bbccefdc1121"
  },
  {
    "url": "assets/img/image-20200408023628422.35a30c12.png",
    "revision": "35a30c12248c422365f3c3d813564a87"
  },
  {
    "url": "assets/img/image-20200408023948172.5c31196f.png",
    "revision": "5c31196f4101ee39ca7c4fe50266c195"
  },
  {
    "url": "assets/img/image-20200408024001457.4b67307b.png",
    "revision": "4b67307b2582d272489f4ed28fcb0974"
  },
  {
    "url": "assets/img/image-20200408024125758.82d5f721.png",
    "revision": "82d5f72100723f92f8986bef322ef92a"
  },
  {
    "url": "assets/img/image-20200408024838595.a27c57b0.png",
    "revision": "a27c57b0f92a3ae02d4059fcc846ff82"
  },
  {
    "url": "assets/img/image-20200408025000140.da2c671b.png",
    "revision": "da2c671b3a53d8c84271c677bd3703e1"
  },
  {
    "url": "assets/img/image-20200408030247853.7088f277.png",
    "revision": "7088f27790bf0276eea9384d18d82ad6"
  },
  {
    "url": "assets/img/image-20200408030454398.e9d9314b.png",
    "revision": "e9d9314b0052ce20f8e95963b3c91d06"
  },
  {
    "url": "assets/img/image-20200408030509021.26e7f413.png",
    "revision": "26e7f413e73751519f63f2261382bda7"
  },
  {
    "url": "assets/img/image-20200408030553573.11e06940.png",
    "revision": "11e06940112100d0fc29f9e773c100f9"
  },
  {
    "url": "assets/img/image-20200408030752728.6fea3fb3.png",
    "revision": "6fea3fb31b3f9576e09d21ffba74cb04"
  },
  {
    "url": "assets/img/image-20200408030801066.a42b1742.png",
    "revision": "a42b1742718c8397ee05bdec91153b86"
  },
  {
    "url": "assets/img/image-20200408030922721.57e5f81b.png",
    "revision": "57e5f81b515d675cd983cb77d13bb6c5"
  },
  {
    "url": "assets/img/image-20200408031030626.5db48c44.png",
    "revision": "5db48c443601c16d9267130b766e3ff7"
  },
  {
    "url": "assets/img/image-20200408031211916.f0badd4c.png",
    "revision": "f0badd4c05d8f767e84ec34f5d14c67a"
  },
  {
    "url": "assets/img/image-20200408031300013.a04db829.png",
    "revision": "a04db82910c3190fd9a71d4758990e76"
  },
  {
    "url": "assets/img/image-20200408032803657.f83c2433.png",
    "revision": "f83c243392e96147fa67f89c18a3cb8f"
  },
  {
    "url": "assets/img/image-20200408033450383.50509743.png",
    "revision": "50509743d52dca9bb5ead496fc9c598c"
  },
  {
    "url": "assets/img/image-20200408033558255.8790d991.png",
    "revision": "8790d9910eccc5e23684517881e9c527"
  },
  {
    "url": "assets/img/image-20200408033632732.10ad69ee.png",
    "revision": "10ad69ee536f5b2f040b6202f050d932"
  },
  {
    "url": "assets/img/image-20200408033642464.e36e086d.png",
    "revision": "e36e086dbac0f897abec331062a8b8b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad74828c.js",
    "revision": "58cddd6768a1284be7bc1edf78787a4c"
  },
  {
    "url": "assets/js/11.febff9ad.js",
    "revision": "3a0b50de1b4cad21b39f5563d4fd9592"
  },
  {
    "url": "assets/js/12.965a7db6.js",
    "revision": "228643b472f0377d8780e29c62b00914"
  },
  {
    "url": "assets/js/13.ff464b4a.js",
    "revision": "8c6ebb49089f03c84856fc3ee3036b7e"
  },
  {
    "url": "assets/js/14.77211fa2.js",
    "revision": "861e511ede45cbb49bdae17f5af3b829"
  },
  {
    "url": "assets/js/15.a8ebaf23.js",
    "revision": "ef4e5dee72f30ea50bc3a38b4db87f60"
  },
  {
    "url": "assets/js/16.1c808406.js",
    "revision": "49181fc796000e44d0ca38cb088ae7aa"
  },
  {
    "url": "assets/js/17.eb2609ad.js",
    "revision": "ba171fefd6094e54cff4856b827b467f"
  },
  {
    "url": "assets/js/18.a57c4dcb.js",
    "revision": "27e3f59382221ac532ae41fab957d99a"
  },
  {
    "url": "assets/js/19.45de9095.js",
    "revision": "caf70870fe6479eef79f72041d8a1b57"
  },
  {
    "url": "assets/js/2.5a98a6a1.js",
    "revision": "888e4209e5de6838ccdd14719cc76049"
  },
  {
    "url": "assets/js/20.3890a0dc.js",
    "revision": "d262e986231cfd4c96b9b3ef113a496e"
  },
  {
    "url": "assets/js/21.12c4cf59.js",
    "revision": "e77ab4eb237ddd24ab837de9f61caf18"
  },
  {
    "url": "assets/js/22.83f70874.js",
    "revision": "0fb5d1dfc0eb8a65ac789da290c17b28"
  },
  {
    "url": "assets/js/23.6912cfc1.js",
    "revision": "86938941f2f1c356f78bee1b4efc66d5"
  },
  {
    "url": "assets/js/24.547c12d4.js",
    "revision": "42ee70252e7ed87cd87e412fa7082ddb"
  },
  {
    "url": "assets/js/25.ea4c2b82.js",
    "revision": "1638e99828817f8021c7754976192530"
  },
  {
    "url": "assets/js/26.9137f71d.js",
    "revision": "83bdc44a1250202aebbd4c08beaeb1f7"
  },
  {
    "url": "assets/js/27.769a107f.js",
    "revision": "9c84a4b6f81e181861c1745ed7035e18"
  },
  {
    "url": "assets/js/28.d0a482c4.js",
    "revision": "6cfe09df44e16d0184468b37fc38f375"
  },
  {
    "url": "assets/js/29.860aeae4.js",
    "revision": "eca01b130b8a9ae6edeb326d88ebf824"
  },
  {
    "url": "assets/js/3.b5328e1b.js",
    "revision": "9d0c40b3df367de6d9770b526c381598"
  },
  {
    "url": "assets/js/30.fe511a2a.js",
    "revision": "e434a6ab13d5048481827dbc7877578b"
  },
  {
    "url": "assets/js/31.6ab4ce31.js",
    "revision": "850363886e43baefea06cc93ca6aa2d8"
  },
  {
    "url": "assets/js/4.40de6c06.js",
    "revision": "1329269f735ff29c0ee04b3ac0eeea4b"
  },
  {
    "url": "assets/js/5.a7dcf9c5.js",
    "revision": "b84ee3a691cf2972dfea923ae8da9c55"
  },
  {
    "url": "assets/js/6.f937cbb4.js",
    "revision": "9557e080bacc536640e49e7d3f12f6fb"
  },
  {
    "url": "assets/js/7.c4f7c54b.js",
    "revision": "e3c229d71186fe1b2bd7b6d8010a588c"
  },
  {
    "url": "assets/js/8.5d6c7a02.js",
    "revision": "53acc9b9041c91e62c098cdfdecc80a2"
  },
  {
    "url": "assets/js/9.a356cbd1.js",
    "revision": "7a6676d0dc78acf64a7b0efd87fabcb3"
  },
  {
    "url": "assets/js/app.90032a51.js",
    "revision": "f9b2a698f532d1815247ca2884edc9a4"
  },
  {
    "url": "ES6/ ES6学习笔记（四） 数组的扩展.html",
    "revision": "2fc70e94033a9074b3a4f7dc5b9b154e"
  },
  {
    "url": "ES6/ES6学习笔记（一） let与const命令.html",
    "revision": "dd9e77a1019bfe1e924e82cfb8e7e3b1"
  },
  {
    "url": "ES6/ES6学习笔记（七）Class的基本语法.html",
    "revision": "b830b01a4209d12ba64ddda55fffac31"
  },
  {
    "url": "ES6/ES6学习笔记（三）函数的扩展.html",
    "revision": "62e348a76e203d338995b60a9bea9466"
  },
  {
    "url": "ES6/ES6学习笔记（二） 变量的解构赋值.html",
    "revision": "0fa9dcfc0e4e3415530480e97b88274a"
  },
  {
    "url": "ES6/ES6学习笔记（五） 对象的扩展.html",
    "revision": "03303613e5193de33afdb7358f6af105"
  },
  {
    "url": "ES6/ES6学习笔记（八）Module的语法.html",
    "revision": "c7c0ab768a67684cb98a7a70df41f706"
  },
  {
    "url": "ES6/ES6学习笔记（六） 异步编程.html",
    "revision": "1d92547ab16beba5a48e35ae1ee673b6"
  },
  {
    "url": "ES6/index.html",
    "revision": "9e026ed954dc4354952e131d77c275ed"
  },
  {
    "url": "img/back.png",
    "revision": "64352abef662041515a51398a1c58c4b"
  },
  {
    "url": "img/SpringCloud/image-20200408022556581.png",
    "revision": "5767bec8f226060dedfa9673060ec20a"
  },
  {
    "url": "img/SpringCloud/image-20200408022623423.png",
    "revision": "1dcd90e0a5096132bd847098dac834b8"
  },
  {
    "url": "img/SpringCloud/image-20200408023016810.png",
    "revision": "b394f44a32b026d4fd303365f2dc846e"
  },
  {
    "url": "img/SpringCloud/image-20200408023044243.png",
    "revision": "f57fdbc3bbfd3ec9aab802d66a0b2a05"
  },
  {
    "url": "img/SpringCloud/image-20200408023208279.png",
    "revision": "1bcb06d5a674b3c9d0812a050f1aedc6"
  },
  {
    "url": "img/SpringCloud/image-20200408023531899.png",
    "revision": "dbe49bd3438ad28c7cf3bbccefdc1121"
  },
  {
    "url": "img/SpringCloud/image-20200408023628422.png",
    "revision": "35a30c12248c422365f3c3d813564a87"
  },
  {
    "url": "img/SpringCloud/image-20200408023948172.png",
    "revision": "5c31196f4101ee39ca7c4fe50266c195"
  },
  {
    "url": "img/SpringCloud/image-20200408024001457.png",
    "revision": "4b67307b2582d272489f4ed28fcb0974"
  },
  {
    "url": "img/SpringCloud/image-20200408024045811.png",
    "revision": "90497247777d05b865dece17d1dcae74"
  },
  {
    "url": "img/SpringCloud/image-20200408024125758.png",
    "revision": "82d5f72100723f92f8986bef322ef92a"
  },
  {
    "url": "img/SpringCloud/image-20200408024838595.png",
    "revision": "a27c57b0f92a3ae02d4059fcc846ff82"
  },
  {
    "url": "img/SpringCloud/image-20200408025000140.png",
    "revision": "da2c671b3a53d8c84271c677bd3703e1"
  },
  {
    "url": "img/SpringCloud/image-20200408030247853.png",
    "revision": "7088f27790bf0276eea9384d18d82ad6"
  },
  {
    "url": "img/SpringCloud/image-20200408030446349.png",
    "revision": "e9d9314b0052ce20f8e95963b3c91d06"
  },
  {
    "url": "img/SpringCloud/image-20200408030454398.png",
    "revision": "e9d9314b0052ce20f8e95963b3c91d06"
  },
  {
    "url": "img/SpringCloud/image-20200408030509021.png",
    "revision": "26e7f413e73751519f63f2261382bda7"
  },
  {
    "url": "img/SpringCloud/image-20200408030553573.png",
    "revision": "11e06940112100d0fc29f9e773c100f9"
  },
  {
    "url": "img/SpringCloud/image-20200408030728063.png",
    "revision": "2291c08e31124c9752f75ec3893e3e3d"
  },
  {
    "url": "img/SpringCloud/image-20200408030752728.png",
    "revision": "6fea3fb31b3f9576e09d21ffba74cb04"
  },
  {
    "url": "img/SpringCloud/image-20200408030801066.png",
    "revision": "a42b1742718c8397ee05bdec91153b86"
  },
  {
    "url": "img/SpringCloud/image-20200408030922721.png",
    "revision": "57e5f81b515d675cd983cb77d13bb6c5"
  },
  {
    "url": "img/SpringCloud/image-20200408031030626.png",
    "revision": "5db48c443601c16d9267130b766e3ff7"
  },
  {
    "url": "img/SpringCloud/image-20200408031211916.png",
    "revision": "f0badd4c05d8f767e84ec34f5d14c67a"
  },
  {
    "url": "img/SpringCloud/image-20200408031300013.png",
    "revision": "a04db82910c3190fd9a71d4758990e76"
  },
  {
    "url": "img/SpringCloud/image-20200408032803657.png",
    "revision": "f83c243392e96147fa67f89c18a3cb8f"
  },
  {
    "url": "img/SpringCloud/image-20200408033450383.png",
    "revision": "50509743d52dca9bb5ead496fc9c598c"
  },
  {
    "url": "img/SpringCloud/image-20200408033558255.png",
    "revision": "8790d9910eccc5e23684517881e9c527"
  },
  {
    "url": "img/SpringCloud/image-20200408033628866.png",
    "revision": "10ad69ee536f5b2f040b6202f050d932"
  },
  {
    "url": "img/SpringCloud/image-20200408033630631.png",
    "revision": "10ad69ee536f5b2f040b6202f050d932"
  },
  {
    "url": "img/SpringCloud/image-20200408033632732.png",
    "revision": "10ad69ee536f5b2f040b6202f050d932"
  },
  {
    "url": "img/SpringCloud/image-20200408033642464.png",
    "revision": "e36e086dbac0f897abec331062a8b8b7"
  },
  {
    "url": "img/Violet and Purple Sales Presentation.png",
    "revision": "907b415e4ee2ccc852825faf2d322b7f"
  },
  {
    "url": "index.html",
    "revision": "69f8d7b97b69a4549995d9f5a2333459"
  },
  {
    "url": "Node.JS/Egg.js Node服务设计教程.html",
    "revision": "93cf00392198e2d0c1d3166fc30d2bc4"
  },
  {
    "url": "Node.JS/Egg.js学习（一） Router的使用.html",
    "revision": "1921063dcdfd8448b31f49e92868db23"
  },
  {
    "url": "Node.JS/Egg.js学习（二） 插件的使用.html",
    "revision": "97dd05a37810d045cd5cecb8a1eb804d"
  },
  {
    "url": "Node.JS/Koa2学习笔记.html",
    "revision": "47dc07f0f6a0e3105d1e686466f55537"
  },
  {
    "url": "Node.JS/Node.JS学习笔记（一） 模块化编程.html",
    "revision": "2ba96fda592f79c7e1dd011572a0feec"
  },
  {
    "url": "Node.JS/npm环境变量配置与模块安装.html",
    "revision": "a6cec53b6bc95c564062717151aca9af"
  },
  {
    "url": "Node.JS/READE.html",
    "revision": "7c758d87babeab0319d77204f7d9045a"
  },
  {
    "url": "Node.JS/Vue学习笔记（一）组件与路由的基本概念.html",
    "revision": "c9361ef2b1cdd06cceb0ea956c5cb478"
  },
  {
    "url": "Node.JS/Vue学习笔记（二）实战：组件库开发.html",
    "revision": "667109a7b3fd9c7e7b860deacacd1210"
  },
  {
    "url": "Node.JS/Webpack学习笔记（一） 基本概念.html",
    "revision": "1aa610f0b8b20bd57a43106c389e31dd"
  },
  {
    "url": "SpringCloud/eureka.html",
    "revision": "312765b2e564e71c939f32248153035c"
  },
  {
    "url": "SpringCloud/index.html",
    "revision": "5686e1489c369905055d8c498cb3fd48"
  },
  {
    "url": "Web/index.html",
    "revision": "97d2868cc29233c1e4552ba988b7b01c"
  },
  {
    "url": "Web/JetBrain-getKey.html",
    "revision": "ab8c08b1d701f5a95d9f27f41384dd98"
  },
  {
    "url": "Web/learn-springboot.html",
    "revision": "f48502b2fccccd71a201f3662ee6519e"
  },
  {
    "url": "Web/SpringbootErrorFallback.html",
    "revision": "be28643a2831737ea1faa063867ead72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
