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
    "revision": "10ca130ce52ad37e21ac84fb322eca2f"
  },
  {
    "url": "assets/css/0.styles.13b2961f.css",
    "revision": "96e4b11d9dda331b19de3c069426278f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.db8e678a.js",
    "revision": "61ba87824dd90630bcc3dbeb34e4a94d"
  },
  {
    "url": "assets/js/11.5c1eb8ad.js",
    "revision": "0c915ffbd43ae78c196919652ecfed94"
  },
  {
    "url": "assets/js/12.d15ed2a4.js",
    "revision": "6c93a1a11afa89d9f4b19fa7ed2e52f5"
  },
  {
    "url": "assets/js/13.8bdc81d8.js",
    "revision": "42cfce7b75dc8e393e779fa51e22a6ca"
  },
  {
    "url": "assets/js/14.8b12efc1.js",
    "revision": "37b7d1652631909b635b6fd954b6689b"
  },
  {
    "url": "assets/js/15.1ef8ffd3.js",
    "revision": "f52be2b10b1881ac8e5d28ae7486dbaf"
  },
  {
    "url": "assets/js/16.369121b3.js",
    "revision": "6c020c5be175793a3ece90ec20420ce3"
  },
  {
    "url": "assets/js/17.68fdbd10.js",
    "revision": "6bbeaed6d19b794ebd3fef6727d8104e"
  },
  {
    "url": "assets/js/18.9fd255f3.js",
    "revision": "c401ba7b609a33a423cf1a75bb204df6"
  },
  {
    "url": "assets/js/19.54892263.js",
    "revision": "d939bbda7df27d7b0d45d7e5b914bca6"
  },
  {
    "url": "assets/js/2.5ff38531.js",
    "revision": "e88ee5fb0761ba5dae0542ecd1152d5d"
  },
  {
    "url": "assets/js/20.be67a428.js",
    "revision": "14bc23809675b1b43107c83a93ada279"
  },
  {
    "url": "assets/js/21.b9a16fe9.js",
    "revision": "65aa498f68d61dc159152d6f2d0ec605"
  },
  {
    "url": "assets/js/22.12af2087.js",
    "revision": "e7be32fb078dd66a3d51209714273f85"
  },
  {
    "url": "assets/js/23.0c470238.js",
    "revision": "2fc01750fbffb6dfe9dce7e4ac8c34bb"
  },
  {
    "url": "assets/js/24.085a44a9.js",
    "revision": "b73fcc6d928d10fdc5fb06266b6d86d3"
  },
  {
    "url": "assets/js/25.caa5aa12.js",
    "revision": "ad8c53d5323508d10b38b671bb33f344"
  },
  {
    "url": "assets/js/26.3f72036d.js",
    "revision": "aa82218955d2f8242968abd72feea3c2"
  },
  {
    "url": "assets/js/27.95261a3a.js",
    "revision": "8ac6111f78bb790327b5f4fb29a37ef7"
  },
  {
    "url": "assets/js/28.e8e2020f.js",
    "revision": "3ca81202f0b24aa5f29c70eee99f501f"
  },
  {
    "url": "assets/js/29.a3ff4929.js",
    "revision": "52f22502ad4b4af86d9106de459bfc3c"
  },
  {
    "url": "assets/js/3.e5a4ecba.js",
    "revision": "3c8ca693a4773729e0b0d062ea346c13"
  },
  {
    "url": "assets/js/30.412f1d13.js",
    "revision": "ce54964121a257e50a7c815e20e1a6ea"
  },
  {
    "url": "assets/js/31.98e336cc.js",
    "revision": "f19dc407475cee2db398c26f538dd68e"
  },
  {
    "url": "assets/js/32.a1c2e16f.js",
    "revision": "45452ed7f9506c5772aa5afb6969f722"
  },
  {
    "url": "assets/js/33.a5a33b62.js",
    "revision": "dfbc14663be8728b1e26aa7c71da2050"
  },
  {
    "url": "assets/js/34.20a27ac1.js",
    "revision": "65627cb25392f88b519af4079ce47ec1"
  },
  {
    "url": "assets/js/4.8632be54.js",
    "revision": "83fabd738970612265f5adf85a207104"
  },
  {
    "url": "assets/js/5.18e0df29.js",
    "revision": "7aed1f9fed791f6509a0235319a52b03"
  },
  {
    "url": "assets/js/6.e820e03d.js",
    "revision": "f797b0e98b1d34a20f12ddd845fe5c5c"
  },
  {
    "url": "assets/js/7.fd689d0a.js",
    "revision": "866c5649897c8336d5dcacd6dc49f151"
  },
  {
    "url": "assets/js/8.b70933c5.js",
    "revision": "1a88db1335d69b93a6583f240fadb3b8"
  },
  {
    "url": "assets/js/9.e20bfd1a.js",
    "revision": "fc3208abfd0bca856121c30cd486dcf4"
  },
  {
    "url": "assets/js/app.c3c76339.js",
    "revision": "a4c49bad7aa5248ded22b864dfb5cf9d"
  },
  {
    "url": "basics/EventLoop.html",
    "revision": "40d21e6bcb040d96816a1a1332608448"
  },
  {
    "url": "basics/index.html",
    "revision": "a01fb14c18c85889257b843335cec700"
  },
  {
    "url": "basics/web缓存策略.html",
    "revision": "947e3f3022497299d95d85fb0f868b40"
  },
  {
    "url": "basics/如何学习前端.html",
    "revision": "423a2a2e5f202643d7d9259a8c9de75b"
  },
  {
    "url": "basics/重绘和和回流.html",
    "revision": "f561f193782adb29c471e9ed1600e071"
  },
  {
    "url": "css/index.html",
    "revision": "f60cf0555dc4d391ca1defdb5b47352f"
  },
  {
    "url": "css/layout/index.html",
    "revision": "c1de42d74aa62170449e52b315ac4658"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "6c45c36ad17efde82bb64ceabac7f9a9"
  },
  {
    "url": "efficiency/gulp使用总结.html",
    "revision": "0c7ceeb006628235d463631463c08561"
  },
  {
    "url": "efficiency/index.html",
    "revision": "ecc9616ffb9ef0359c885ac8b6a2c6f2"
  },
  {
    "url": "efficiency/你不知道的构建工具.html",
    "revision": "fe900b62f55f11884a6fb0dfc2e436e8"
  },
  {
    "url": "frame/index.html",
    "revision": "2b5cecb9dc23f8469709e8c851ed2f7e"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images/build-tools.jpeg",
    "revision": "8a513b7c6fcf35babd6987f533e08c52"
  },
  {
    "url": "images/data-type-change.jpg",
    "revision": "d470ad60245385d5d8d5be1bc078ff40"
  },
  {
    "url": "images/data-type-change.png",
    "revision": "3e0a1d9cf107008836e0b71bb98a6eaf"
  },
  {
    "url": "images/eventloop-1.jpg",
    "revision": "3a59c624e6ff95a7e8c5a23c979f5abe"
  },
  {
    "url": "images/eventloop-2.jpg",
    "revision": "21654d2e72b82610d9b9fdcb5fc9b31f"
  },
  {
    "url": "images/fe-pro-tree.jpg",
    "revision": "349d21d387d1b158fdfc5bf7f02edcfc"
  },
  {
    "url": "images/frame.jpg",
    "revision": "5c78cad63c12fd77202dd7b8d7df2f7e"
  },
  {
    "url": "images/front_end_build_tools.png",
    "revision": "367e3e724894f250a8ca709c7eada921"
  },
  {
    "url": "images/Function.prototype.bind.png",
    "revision": "4fd58df4d263bc6208582f5d2975166c"
  },
  {
    "url": "images/module-tools.jpg",
    "revision": "eb4502e5eb69998e568b6097c41d72af"
  },
  {
    "url": "images/obj.__proto__.constructor.png",
    "revision": "6d937fe8232b7a6c6f6940ee6a431ce9"
  },
  {
    "url": "images/obj.__proto__.png",
    "revision": "9bfa35483f4da441350deeac8aca2ea1"
  },
  {
    "url": "images/reflux-redrawing.png",
    "revision": "aeb50e474cb98bd798421dadda17eb9a"
  },
  {
    "url": "images/this.png",
    "revision": "69a475acbeefd3c961dee22851f5b0a2"
  },
  {
    "url": "images/undefined@2x.png",
    "revision": "500891194fbaaa55e1bc48ece4410319"
  },
  {
    "url": "images/what-is-front-end-dev.png",
    "revision": "e63ca0895a3c783f0792148dadd82a46"
  },
  {
    "url": "images/图解原型链.svg",
    "revision": "8b6a8ba9e5e7c1c3900cf48708b96df3"
  },
  {
    "url": "index.html",
    "revision": "a8e9d8a777e26eea5f9fb268da80656f"
  },
  {
    "url": "javascript/basics/index.html",
    "revision": "0e382a23d2fb520c796d255784d0ba15"
  },
  {
    "url": "javascript/basics/JS原始类型有那些.html",
    "revision": "76c424a33a84ed2a88435914ad4e4960"
  },
  {
    "url": "javascript/basics/new的原理.html",
    "revision": "7f343835bf08d124ceaf446de3134eb2"
  },
  {
    "url": "javascript/basics/作用域问题.html",
    "revision": "90e97e22eb829351d79bd2f82281c912"
  },
  {
    "url": "javascript/basics/原型和原型链.html",
    "revision": "ab572f735e56a1df2d0a3aefb5121f25"
  },
  {
    "url": "javascript/basics/改变this那些事.html",
    "revision": "703a689c089d2a33271e3b33bd034816"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "fadcbd4015005ac5c666931af7b158df"
  },
  {
    "url": "javascript/es5/引用数据类型.html",
    "revision": "cfe2045a782cbec67f9367f080b6d31c"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "73b81c2eccf33eb01da4219f6cea37d5"
  },
  {
    "url": "javascript/es7/index.html",
    "revision": "165a2f7d2c38734cebd17f8755071c78"
  },
  {
    "url": "javascript/es8/index.html",
    "revision": "f24daf171a5cecad16093966eb187f3e"
  },
  {
    "url": "javascript/index.html",
    "revision": "1e637e3eafb8fa3f701c59aed874124e"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "question/index.html",
    "revision": "bcf9b69c5547fe5f56445062d89432c5"
  },
  {
    "url": "react/index.html",
    "revision": "69b46fcb10936b0e77af1b0f44ff1e75"
  },
  {
    "url": "vue/index.html",
    "revision": "b2ce2d314d539e358958334c8763bb1f"
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
