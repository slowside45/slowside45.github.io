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
    "revision": "994875b67ff30088208a2f11eb0a2ec8"
  },
  {
    "url": "about/index.html",
    "revision": "9b1dd5f5fc4be92fac8e88d0a158292b"
  },
  {
    "url": "Android/Android开发学习笔记（一）Android Studio的初始化配置.html",
    "revision": "d4b8c05894084dfda0a1888c137d25d9"
  },
  {
    "url": "Android/Android开发学习笔记（三）活动（Activity）.html",
    "revision": "3fe0a598e47f7bbf3de4272961edbfb8"
  },
  {
    "url": "Android/Android开发学习笔记（二）基础项目结构.html",
    "revision": "9f483b9f532656b4a8c290a3dfe5cf03"
  },
  {
    "url": "Android/Android开发学习笔记（五）混淆.html",
    "revision": "f6816b7a010940530b07d98fdcaa67e3"
  },
  {
    "url": "Android/Android开发学习笔记（六）广播机制.html",
    "revision": "aadb5d43825df1990b1773fd5036b75a"
  },
  {
    "url": "Android/Android开发学习笔记（四）网络技术.html",
    "revision": "cde234ac439cccb250cc8a7378be8b67"
  },
  {
    "url": "Android/index.html",
    "revision": "e13b22fb514f5d35895a2760abd47e7c"
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
    "url": "assets/img/eureka-simple-model.7048c947.png",
    "revision": "7048c947bcf1650c37ebeceb77c423ce"
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
    "url": "assets/img/image-20200409164557525.2aac1c85.png",
    "revision": "2aac1c8572b9511633ceb4f367536a15"
  },
  {
    "url": "assets/img/image-20200409165535031.c33048a4.png",
    "revision": "c33048a4f1290fd8be35be6d312196d4"
  },
  {
    "url": "assets/img/image-20200409165850980.03c26a10.png",
    "revision": "03c26a10b715666ebdccf137bf3d2a15"
  },
  {
    "url": "assets/img/image-20200409170048402.92b866fe.png",
    "revision": "92b866fe257e1c3967e67a493e8385a7"
  },
  {
    "url": "assets/img/image-20200409170149793.77068c27.png",
    "revision": "77068c27fdd8c664198efde65c8dbf6b"
  },
  {
    "url": "assets/img/image-20200409170227534.dfc8d1a8.png",
    "revision": "dfc8d1a8d15ea281497190e86080dfaa"
  },
  {
    "url": "assets/img/image-20200409170253807.11e2090f.png",
    "revision": "11e2090f95be37e20768f365ebd234fd"
  },
  {
    "url": "assets/img/image-20200409170601960.f3cab972.png",
    "revision": "f3cab9721c8c4976a111ce3f6e1480bc"
  },
  {
    "url": "assets/img/image-20200409171127296.cc3f549f.png",
    "revision": "cc3f549fa30d1df1af126ebcd703f698"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df869b81.js",
    "revision": "2b8b6f127fa92a70cd8562e9ee097e70"
  },
  {
    "url": "assets/js/11.ca769e48.js",
    "revision": "74eaeec87c8999d27c7ae3cbb3da74ef"
  },
  {
    "url": "assets/js/12.054daf01.js",
    "revision": "fcf24473717351f17cb61cbec4d3eb71"
  },
  {
    "url": "assets/js/13.a59e5c03.js",
    "revision": "902f6b16ed8094c340d93a16e3ca002a"
  },
  {
    "url": "assets/js/14.0b0c8a1d.js",
    "revision": "678f7fae8727a78c49f273496010b19a"
  },
  {
    "url": "assets/js/15.a62e713d.js",
    "revision": "9184937101d8341062c1806d451b2ff1"
  },
  {
    "url": "assets/js/16.1f5c82f7.js",
    "revision": "8a2c03d9ec93f239f763fdbacb8df266"
  },
  {
    "url": "assets/js/17.12cc41fd.js",
    "revision": "91334bb75bb3f33d2d95445194577cb6"
  },
  {
    "url": "assets/js/18.9a24a91a.js",
    "revision": "3069766bcbbe303ca9ca42bba2c8c789"
  },
  {
    "url": "assets/js/19.f6abe518.js",
    "revision": "8cd0b2048b40d5b775a6f47583528fcc"
  },
  {
    "url": "assets/js/2.154dcc5e.js",
    "revision": "f365986b4465770cb27ea647ed2bad7a"
  },
  {
    "url": "assets/js/20.e65b6931.js",
    "revision": "2fadad12bbd55419f6719077e96dacb3"
  },
  {
    "url": "assets/js/21.0b676c70.js",
    "revision": "d7b460e2204112efd2a4198231b9e8b2"
  },
  {
    "url": "assets/js/22.439a1331.js",
    "revision": "801ada945e172b5fe12c428e727f6989"
  },
  {
    "url": "assets/js/23.ba536dc8.js",
    "revision": "91de1b5ae279d52f333f397f3201dd8e"
  },
  {
    "url": "assets/js/24.c320b32b.js",
    "revision": "556337d358e21539c5e7a67cfe4e9875"
  },
  {
    "url": "assets/js/25.3e421fe3.js",
    "revision": "105a8889dfb25d4f3c9ea34aa6634dad"
  },
  {
    "url": "assets/js/26.2231c0ca.js",
    "revision": "a2681384896671eb52b652917dbbfdde"
  },
  {
    "url": "assets/js/27.bcc817c1.js",
    "revision": "eb91d1162ec2769ad642ccfc4b6633c4"
  },
  {
    "url": "assets/js/28.c2c3d444.js",
    "revision": "5267638b167fea285b41e6350c68f582"
  },
  {
    "url": "assets/js/29.2ead0a19.js",
    "revision": "43e3c8af07506fec2e918c970c32ad4d"
  },
  {
    "url": "assets/js/3.2d1485e9.js",
    "revision": "abf7b18088654e48e4eb768a284b6c98"
  },
  {
    "url": "assets/js/30.1255fe73.js",
    "revision": "1698dc6b4797c2d1da80c86375a39712"
  },
  {
    "url": "assets/js/31.560e43a1.js",
    "revision": "9aff0085920296cce4c3f7b9f7991605"
  },
  {
    "url": "assets/js/32.4763ce13.js",
    "revision": "cd6366b7c57279b157320ad6ac85a40e"
  },
  {
    "url": "assets/js/33.f65b93ac.js",
    "revision": "9e2ad4ddf14a647aaadecbe2cbcb48c6"
  },
  {
    "url": "assets/js/34.503ff2e4.js",
    "revision": "dffee7aa1b1a6d36f53aa07b66044400"
  },
  {
    "url": "assets/js/35.abff669d.js",
    "revision": "f470b6265bf9701b9d32ec609c3f82cb"
  },
  {
    "url": "assets/js/36.aa126b1a.js",
    "revision": "174c4ba7399042fad121e59bb743dd0e"
  },
  {
    "url": "assets/js/37.92bebcb1.js",
    "revision": "5cdbf69a40ed8b96a8693c223748b911"
  },
  {
    "url": "assets/js/38.c3c64b7f.js",
    "revision": "027d5882fae64ecf0385a859965cbd7d"
  },
  {
    "url": "assets/js/39.d86c8f5e.js",
    "revision": "c5e77fb721a7707b6e5856db4c2e9a42"
  },
  {
    "url": "assets/js/4.bff3c410.js",
    "revision": "0b47808aeb1720d48673be42577e9960"
  },
  {
    "url": "assets/js/40.17162130.js",
    "revision": "aa23ff0cffe558bf0df7f92101a2f50f"
  },
  {
    "url": "assets/js/5.dae9ed13.js",
    "revision": "346bc817d2f6b0777c6aaa378cc1895b"
  },
  {
    "url": "assets/js/6.0e78168f.js",
    "revision": "6be06aac72c3ed3182cd46f7b40cd344"
  },
  {
    "url": "assets/js/7.080d07e2.js",
    "revision": "9b9c4e0e07e4d7218cf58057296df68d"
  },
  {
    "url": "assets/js/8.b51527e8.js",
    "revision": "442451255d388b395f01b0ae4805e557"
  },
  {
    "url": "assets/js/9.47e0dfdd.js",
    "revision": "ba0a78024f387100483e0d1a62d12e6f"
  },
  {
    "url": "assets/js/app.6496ed3f.js",
    "revision": "8d35f6a18d2337bc6096081c64b3fdce"
  },
  {
    "url": "ES6/ES6学习笔记（一） let与const命令.html",
    "revision": "98501b5e7a2fe9c538a061596541bc87"
  },
  {
    "url": "ES6/ES6学习笔记（七）Class的基本语法.html",
    "revision": "b7b589070b8828fdcb67fe3c86c8c84d"
  },
  {
    "url": "ES6/ES6学习笔记（三）函数的扩展.html",
    "revision": "9872ac1afc059ae7b076bcd568363947"
  },
  {
    "url": "ES6/ES6学习笔记（二） 变量的解构赋值.html",
    "revision": "5e6ad263682889d9d7c117ecc8e82a7f"
  },
  {
    "url": "ES6/ES6学习笔记（五） 对象的扩展.html",
    "revision": "c9e832145c277c308abdb8b380074e8a"
  },
  {
    "url": "ES6/ES6学习笔记（八）Module的语法.html",
    "revision": "500a4ae2e0c7c2af0ea0427eadf7c711"
  },
  {
    "url": "ES6/ES6学习笔记（六） 异步编程.html",
    "revision": "6f36984abf46023f7e4e483b9057daa9"
  },
  {
    "url": "ES6/ES6学习笔记（四） 数组的扩展.html",
    "revision": "cf40cc1da475789e8de44c23877b7666"
  },
  {
    "url": "ES6/index.html",
    "revision": "8abb47642fbdd6ae1d6b658f31693e3d"
  },
  {
    "url": "img/back.png",
    "revision": "64352abef662041515a51398a1c58c4b"
  },
  {
    "url": "img/SpringCloud/eureka-simple-model.png",
    "revision": "7048c947bcf1650c37ebeceb77c423ce"
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
    "url": "img/SpringCloud/image-20200409164557525.png",
    "revision": "2aac1c8572b9511633ceb4f367536a15"
  },
  {
    "url": "img/SpringCloud/image-20200409165535031.png",
    "revision": "c33048a4f1290fd8be35be6d312196d4"
  },
  {
    "url": "img/SpringCloud/image-20200409165850980.png",
    "revision": "03c26a10b715666ebdccf137bf3d2a15"
  },
  {
    "url": "img/SpringCloud/image-20200409170048402.png",
    "revision": "92b866fe257e1c3967e67a493e8385a7"
  },
  {
    "url": "img/SpringCloud/image-20200409170149793.png",
    "revision": "77068c27fdd8c664198efde65c8dbf6b"
  },
  {
    "url": "img/SpringCloud/image-20200409170227534.png",
    "revision": "dfc8d1a8d15ea281497190e86080dfaa"
  },
  {
    "url": "img/SpringCloud/image-20200409170253807.png",
    "revision": "11e2090f95be37e20768f365ebd234fd"
  },
  {
    "url": "img/SpringCloud/image-20200409170601960.png",
    "revision": "f3cab9721c8c4976a111ce3f6e1480bc"
  },
  {
    "url": "img/SpringCloud/image-20200409171127296.png",
    "revision": "cc3f549fa30d1df1af126ebcd703f698"
  },
  {
    "url": "img/Violet and Purple Sales Presentation.png",
    "revision": "907b415e4ee2ccc852825faf2d322b7f"
  },
  {
    "url": "index.html",
    "revision": "24ddcbba0ff6fde7994dc84c524f10e2"
  },
  {
    "url": "JVM/jvm.html",
    "revision": "a54b85c2df8655424d7c0ba668669e2f"
  },
  {
    "url": "Node.JS/Egg.js Node服务设计教程.html",
    "revision": "e7b4950ad74367ec67995f17adff3b68"
  },
  {
    "url": "Node.JS/Egg.js学习（一） Router的使用.html",
    "revision": "b7974629d510fd9b482920868bd8310e"
  },
  {
    "url": "Node.JS/Egg.js学习（二） 插件的使用.html",
    "revision": "484f6737991f37c045302a14e031c18c"
  },
  {
    "url": "Node.JS/Koa2学习笔记.html",
    "revision": "fcf83c05469b9b6ee5a90240282a5b41"
  },
  {
    "url": "Node.JS/Node.JS学习笔记（一） 模块化编程.html",
    "revision": "04173fcfa8ec478a443786df50f0773c"
  },
  {
    "url": "Node.JS/npm环境变量配置与模块安装.html",
    "revision": "49bb30f3944707464e4bad5d23310219"
  },
  {
    "url": "Node.JS/READE.html",
    "revision": "358fd8399d700edb757c852e05e051fe"
  },
  {
    "url": "Node.JS/Vue学习笔记（一）组件与路由的基本概念.html",
    "revision": "f33d8a980be034ee0cd8f89f2e105f5a"
  },
  {
    "url": "Node.JS/Vue学习笔记（二）实战：组件库开发.html",
    "revision": "905fb17700fbf4c8d8a8639b7c7236e4"
  },
  {
    "url": "Node.JS/Webpack学习笔记（一） 基本概念.html",
    "revision": "18ee5f9a09f6b62b37ec00f337beac7e"
  },
  {
    "url": "SpringCloud/eureka-plus.html",
    "revision": "a20279bda2efd190753e1ed8868862e9"
  },
  {
    "url": "SpringCloud/eureka.html",
    "revision": "3eecf3f4c19b28c1ebb1318a8f989f8a"
  },
  {
    "url": "SpringCloud/index.html",
    "revision": "3c1b4e297101f257d6d9da94eab23d8e"
  },
  {
    "url": "Web/index.html",
    "revision": "e087c26fd62893f9f01d8225ea18fdc4"
  },
  {
    "url": "Web/JetBrain-getKey.html",
    "revision": "fe592e23a5a81aeb2992455e0666b736"
  },
  {
    "url": "Web/learn-springboot.html",
    "revision": "1af17561ac26b35ef3fa0c8730c8136f"
  },
  {
    "url": "Web/SpringbootErrorFallback.html",
    "revision": "f0ef34796873544397d14123f4fc15b5"
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
