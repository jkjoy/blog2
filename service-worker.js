if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const l=e=>d(e,r),s={module:{uri:r},exports:b,require:l};i[r]=Promise.all(a.map((e=>s[e]||l(e)))).then((e=>(c(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2017/341ac1e6.html",revision:"dea71ec763f15b6050902b81cf33e2ce"},{url:"2017/b93101ab.html",revision:"5b6ac0626a05f7bcdd2cd49b3a397c4a"},{url:"2017/cb92d708.html",revision:"d775bedd0e39aa047b32733379163928"},{url:"2017/eac40a64.html",revision:"039153de8c03dffe1acaddc83110b49d"},{url:"2017/eedcfe1c.html",revision:"ec3891a69a2ad6aec9a2bf6d76c9b6e9"},{url:"2018/29c199b6.html",revision:"4bb948f9b05358e6b6eeb85a11293d6d"},{url:"2018/317afbc8.html",revision:"254d45b63c1c4a535e009d507889244f"},{url:"2018/e73c603a.html",revision:"81d09f15b9a263945eec51ee9bdeb7b7"},{url:"2019/314a5df4.html",revision:"0cd06c4a3f3fffc9f454179b3c2bc556"},{url:"2019/85322f98.html",revision:"6c541e6ede15c51598f6d2841d2dd349"},{url:"2019/8a82280f.html",revision:"e2ff478a4c80bca975c37e92affea626"},{url:"2019/90206356.html",revision:"0114917371aa0911f918012b394a521e"},{url:"2021/156c3684.html",revision:"f26b8d5dbac437e597e97891ce44a991"},{url:"2021/244f7c76.html",revision:"c2e645f80079502a1ed619f211f66267"},{url:"2021/6857bb45.html",revision:"69421d493fb14b95dffc471179c2b7f3"},{url:"2021/7e0d420b.html",revision:"8040d89c06bd34394d05bd7f581d9e5d"},{url:"2021/8327832e.html",revision:"528020b0ba25fe8da10081b100d024c1"},{url:"2021/882b6242.html",revision:"02a3135cf01cf5f9727ed7028c3c2e84"},{url:"2021/89f51950.html",revision:"b680905c464f38e6048512e3ddfa9a54"},{url:"2021/de19f54c.html",revision:"00688284ed9f825571fa1340e203d1a7"},{url:"2021/e3e6b5d8.html",revision:"2368e54f0e4cd66f975834e647518ade"},{url:"2022/1387fd73.html",revision:"f6628ad07f7cdd583bae399ef0d97604"},{url:"2022/342aa622.html",revision:"b51cfc03ab12dfd9ab896d155c2f6547"},{url:"2022/36a001e5.html",revision:"1e49f5e12ea2779ac57843cbd6abbe04"},{url:"2022/68647b75.html",revision:"0e2634947b751e62de5fe4ccffdd04eb"},{url:"2022/82e8a6ff.html",revision:"d85187a587e6af5892a5d19940440c0c"},{url:"2022/88405098.html",revision:"80045fc7e7b6804cfc5260833089e5c6"},{url:"2022/93a53ee.html",revision:"cdd0d928886ae392178f851ef319b3e4"},{url:"2022/d0290d4f.html",revision:"2e479f5e5977566c063a619e3847bf1f"},{url:"2022/d701f25.html",revision:"c83e1aee8188cf61982b5b001cc4fd0e"},{url:"2022/df7a6812.html",revision:"a3dc089330b5b7d237a77a52dad28f03"},{url:"2022/e61e410b.html",revision:"d821f2a6fcd069c63f0a5ea074071d9e"},{url:"2022/ee234ca2.html",revision:"46472cea9ec43bdc308cacdafe02ddbc"},{url:"2022/f4d722c5.html",revision:"c2d7bddede851ad1e8cf18fff54516ef"},{url:"2023/156e4c13.html",revision:"e68c0862752363cc8d4508e6bb56a176"},{url:"2023/176559d4.html",revision:"6cb79c17e58bd9a7e953f65927f7de60"},{url:"2023/1c81ee10.html",revision:"8de95c4727d41f17b6074c4e68a8c62d"},{url:"2023/507a5d86.html",revision:"79624dffec0a3180e3ee203ce3cebdea"},{url:"2023/54321412.html",revision:"b182c5a23e8156665496d157be91a617"},{url:"2023/61795a18.html",revision:"4516d842224bd42ab726aa6cc3b0b5a6"},{url:"2023/63a51e75.html",revision:"e49ead3349a7636416e0b1c79bbe4692"},{url:"2023/6d58ffa9.html",revision:"e13cb6511e9500e139d4a5ccc12bee94"},{url:"2023/8828c81e.html",revision:"8a1622d7c54ca27842f1b0f3540ec788"},{url:"2023/94ed24f6.html",revision:"f8895b18cf78a77e8423fb06a89d0205"},{url:"2023/b564ae15.html",revision:"7d3684731b30946a1fd99d04ec192a0b"},{url:"2023/bc338f20.html",revision:"8d0856d8d3ddb583645b58c9c26bb732"},{url:"2023/e48ebe86.html",revision:"4ff36e2f7d138c502d7bf3d3dc605afc"},{url:"about/index.html",revision:"462a99b9d34a43654c517df99f1357da"},{url:"archives/2017/05/index.html",revision:"f5d44ab58cd835a0c04951a70fd70697"},{url:"archives/2017/06/index.html",revision:"7828705a78ca97b189d369002127bba8"},{url:"archives/2017/08/index.html",revision:"98cdc5392fc23e3f610b180b3547b04c"},{url:"archives/2017/12/index.html",revision:"386ad3c53a8293115b23abaac3a219c9"},{url:"archives/2017/index.html",revision:"cc26076f7041e8472fda91fced78e289"},{url:"archives/2018/04/index.html",revision:"44a3678ed5f7903c32148ec9cd45fcc1"},{url:"archives/2018/05/index.html",revision:"ea48cc9c3a058560ca231b34d903584e"},{url:"archives/2018/10/index.html",revision:"777e28cdd253bef7fb9aa915d407dc2a"},{url:"archives/2018/index.html",revision:"3e088deb7944ab0dd01f05fb7138c4e4"},{url:"archives/2019/01/index.html",revision:"5b619385d1761acc7ba1eb8eda134668"},{url:"archives/2019/03/index.html",revision:"22a3fba7614e5b33c1a5850918ea6c65"},{url:"archives/2019/04/index.html",revision:"e7a767a44839aaddf97a3e66afa15433"},{url:"archives/2019/08/index.html",revision:"23ef2eb143624d90262f44424bb8188e"},{url:"archives/2019/index.html",revision:"63068103a1e61d977440a649e6ee40bf"},{url:"archives/2021/03/index.html",revision:"acbb7245b529cc99cab607710e27b082"},{url:"archives/2021/10/index.html",revision:"39dcbe1cab8a0c2af08c22dfc715227e"},{url:"archives/2021/12/index.html",revision:"f597d07a724eb05c0e3bfdea83628c27"},{url:"archives/2021/index.html",revision:"1f54dcd5bec3e1f10e758229768000c2"},{url:"archives/2022/01/index.html",revision:"6e8bb13b3e42219cb84b219c314b847d"},{url:"archives/2022/04/index.html",revision:"6f0739434875274f51498d2e81a54de8"},{url:"archives/2022/06/index.html",revision:"8574f8b66cf35be19b9718cd67b11e9e"},{url:"archives/2022/07/index.html",revision:"5755a69c9dba498c2aba48fa4a531c9b"},{url:"archives/2022/08/index.html",revision:"5fb4414c4754b4249b9e34ba50427a1d"},{url:"archives/2022/09/index.html",revision:"3ba66c7ea1f1a9b660afc399171c924a"},{url:"archives/2022/10/index.html",revision:"c957ff5ec43914e285140f7826eeca6a"},{url:"archives/2022/11/index.html",revision:"44bd522e6879c6aab8d3503dd087d451"},{url:"archives/2022/index.html",revision:"238ce905be77d021b910dab12d34b0cc"},{url:"archives/2022/page/2/index.html",revision:"a1577e7a55ab49fe514e1680b2ce3052"},{url:"archives/2023/01/index.html",revision:"8bd19f876f055da0880febe406cba58f"},{url:"archives/2023/04/index.html",revision:"93f2774067305751cae6f2d6c9d5ae18"},{url:"archives/2023/05/index.html",revision:"b45cafd52b170e26b3a7b0f8807a5da1"},{url:"archives/2023/06/index.html",revision:"54334c6c66ec137fefb9652f328db7a8"},{url:"archives/2023/07/index.html",revision:"2c64705e2389b7ac2a1067d12b3f357a"},{url:"archives/2023/index.html",revision:"8c3359f76adedb8c4011220e82ea9039"},{url:"archives/2023/page/2/index.html",revision:"3d2d367d6a28a8558d9f969574db0fbb"},{url:"archives/index.html",revision:"0177b8765d2f97e8e5d8085e626e0813"},{url:"archives/page/2/index.html",revision:"218038f4f11a82b78d3ae01ad7cacada"},{url:"archives/page/3/index.html",revision:"0f0d198303354faa42206864216b0b38"},{url:"archives/page/4/index.html",revision:"2350fdb0ec796d0d9b94c1ae80a79ccf"},{url:"archives/page/5/index.html",revision:"4a839f63c21fd05e4d8443dfd4ebcedd"},{url:"categories/index.html",revision:"62e166f4102e1e20a44077bd669238ed"},{url:"categories/Linux/index.html",revision:"2d8a03c1c01e2397adb7a561188c4b4e"},{url:"categories/macOS/index.html",revision:"8c7bfb52bf6db43ecd4f805bdd615c39"},{url:"categories/分享/index.html",revision:"080b7a8bb47c52d17d5a43ad1d5c82b2"},{url:"categories/分享/page/2/index.html",revision:"40928dfd6e13e1328a67c1b64696821a"},{url:"categories/推荐/index.html",revision:"9f4754863294de74b5c364b40cc961ae"},{url:"categories/日志/index.html",revision:"66fa1544d5ce25cef600a84eb1d42bd9"},{url:"categories/测试/index.html",revision:"479545ab625c33f393d6bdaa7750fdb2"},{url:"categories/照片/index.html",revision:"95dfc297b2c7190d564f89b7415e18b2"},{url:"css/index.css",revision:"ab863906c90c33d1705a67871df25eaa"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/index.html",revision:"e8c32a251997c042680779182a0172dd"},{url:"gbook/index.html",revision:"df8af13f3b24a1e579b099a861843613"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f6c956a97eec10b80caf4e73f4684520"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/marked.js",revision:"0125b05794f94e05bc46116f8580d19e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/talk.js",revision:"120e1a5f36eca2b750ccfbf8a1497840"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"6af80b77b6b002740d2bd8cd1a788fb3"},{url:"memos/index.html",revision:"c200ec853dbcf5aff62e72430372ece3"},{url:"music/index.html",revision:"5c3aed2fb930bd256955471d674876a8"},{url:"page/2/index.html",revision:"98a60a01267dffe3d2e115174d734b7d"},{url:"page/3/index.html",revision:"d811638b25da55a112ffbfc1b267ac52"},{url:"page/4/index.html",revision:"c3e892f447e7ac39e4a21eb0f7395638"},{url:"page/5/index.html",revision:"95937dfdf7f0006c1c75816ee22ff0d5"},{url:"photos/index.html",revision:"fb53e1bdea59e8a4e19a790ccc074742"},{url:"tags/amd/index.html",revision:"bfca9b549e224fa24429584e60b324ae"},{url:"tags/bcm943224/index.html",revision:"0fd5d2318d70513c464c73ca1c6960df"},{url:"tags/bios/index.html",revision:"30da111a8ac22a0dc30f398f6a78d03c"},{url:"tags/centos/index.html",revision:"95f9646c8b1b8d7d733e6cdaa234ebb3"},{url:"tags/chajian/index.html",revision:"524152da125788c4177562149bd7a85a"},{url:"tags/chatgpt/index.html",revision:"d7b275f1ccde8d541346e0ccbd59fb08"},{url:"tags/cloud-torrent/index.html",revision:"b4a2a251a063895c3fb280d1619561b1"},{url:"tags/cloudflare/index.html",revision:"f6f0571d201a0c18e3e5e67c9ad7a6ab"},{url:"tags/clover/index.html",revision:"a038548efadf1fe856fc8da08e5af353"},{url:"tags/CommentsByQQ/index.html",revision:"4c250a952d9b12e53734d26cdca84c81"},{url:"tags/docker/index.html",revision:"cf8f5dafc993007ee36653bebf5a97fb"},{url:"tags/Docker/index.html",revision:"8bb0eda5e1faef66ca58acb7ed103590"},{url:"tags/DSM918/index.html",revision:"01c7cf446f9cab05d8ec22856d6d90a8"},{url:"tags/edid/index.html",revision:"06d119c569d41720ec4555cc3143720a"},{url:"tags/fliqlo/index.html",revision:"74e5c969f9e52befbb7abff1d0785081"},{url:"tags/h97i/index.html",revision:"fd7d465eeb98bdc7a264cf1fb1ae90ec"},{url:"tags/hackintool/index.html",revision:"b505bd27fc4a8a1f89d38df2b282cdca"},{url:"tags/Hexo/index.html",revision:"3b12d6ff76409ea6ce1c708072684c9d"},{url:"tags/homebrew/index.html",revision:"593cd3f4b2357151f57ffb9176cc1f23"},{url:"tags/i5/index.html",revision:"557c0e9b686c57d364825419010187b0"},{url:"tags/index.html",revision:"ddbe0b9449736d5b610fb263ad4c2851"},{url:"tags/lede/index.html",revision:"80271418fcdda6b6ff98c87a20d2e83b"},{url:"tags/linux/index.html",revision:"c266c7b257cbe3c39812cdc00d4679a7"},{url:"tags/LOL/index.html",revision:"dcfccc92cdd60b60933c2a9641766088"},{url:"tags/macos/index.html",revision:"ab1e823613bb10c1588af832876cad00"},{url:"tags/memos/index.html",revision:"1bff6d73589a9c1a9d2a84b71edd30de"},{url:"tags/Memos/index.html",revision:"062678b4114e8ce11d688a834f9b7cd8"},{url:"tags/nec/index.html",revision:"d10ea6788bc2d4ec2175166b2ae57450"},{url:"tags/note4x/index.html",revision:"6c2901d8cd7b397af20bab97b3f01ca1"},{url:"tags/nvme/index.html",revision:"f27d322c460203e5912837d0af33a348"},{url:"tags/office/index.html",revision:"52a3c6ad3902245a57ed53253264e52f"},{url:"tags/opencore/index.html",revision:"ad2e6b9e65ef0882890031cfc8391510"},{url:"tags/openwrt/index.html",revision:"eb553b2801aa9131a7b54c34d8059c49"},{url:"tags/Pleroma/index.html",revision:"0943fbd1b96056f1855282c490d54899"},{url:"tags/rng/index.html",revision:"617fca249c034c855b91c58264f88aae"},{url:"tags/S8/index.html",revision:"d800decd98fefa7464e377ac7b745d14"},{url:"tags/samsung/index.html",revision:"77dc3b23cadb075c9172feb6bd6af584"},{url:"tags/service/index.html",revision:"67c0dbf00d158b3e6403f9180513da60"},{url:"tags/shadowsocks/index.html",revision:"46bdebf54b427d631be33769cc94808c"},{url:"tags/SNH48/index.html",revision:"e3a4290edb62ecc67bb86cd01fe3fb7b"},{url:"tags/ssr/index.html",revision:"b516321df1a955d68b0bda4145cc7d33"},{url:"tags/torrent/index.html",revision:"b64df3580be65a3bda3c9250e28ce134"},{url:"tags/Twikoo/index.html",revision:"71cf32f5566ec9bfe643282ee33c243e"},{url:"tags/typecho/index.html",revision:"828b95f1d3cdf418deb962e6a4a0a56d"},{url:"tags/V2RAY/index.html",revision:"9febb0a6de67d60cbb44c07242cad53c"},{url:"tags/vk22/index.html",revision:"e8dfc1d314bafa2c44eadce4563ea50d"},{url:"tags/vk22t/index.html",revision:"a37d9c3ccd77d58082eeb7aec37867ea"},{url:"tags/vk23/index.html",revision:"e8328980b09b33fe38977993c66f47e3"},{url:"tags/wget/index.html",revision:"d4dc906e78eb16549978a84376e29a17"},{url:"tags/windows/index.html",revision:"9c159e13efe2b691ea918741529c049f"},{url:"tags/zip/index.html",revision:"15ebfc7ebfccec65f960ecbb458ec7fa"},{url:"tags/下载/index.html",revision:"50e6dfe95ba052e72beca5389eb12e36"},{url:"tags/主控/index.html",revision:"192f15702d03a8ba5c5d0b6c5948b469"},{url:"tags/主板/index.html",revision:"f341b3217e31e96797c71ec4bfed8db0"},{url:"tags/何沅君/index.html",revision:"61ee1a08da61f0c8ea34e1156abc7146"},{url:"tags/作品/index.html",revision:"75f6a86dbe89bf3a239efeb9d6c6bac3"},{url:"tags/修复/index.html",revision:"023e49e0e826595eea6440825bec7065"},{url:"tags/倚天屠龙记/index.html",revision:"b7d629b62b71cdc2e41b93e092ca49ae"},{url:"tags/免驱/index.html",revision:"82a3d6d5fedce46774204c9a0a46cc32"},{url:"tags/养女/index.html",revision:"8c7f4da0d2d12ee4e488c85a4e13d1e0"},{url:"tags/列表/index.html",revision:"57d4a441d138e00b0be416d1fe0205ae"},{url:"tags/刷机/index.html",revision:"5d245c42dcd7cd2e4565b6930e5ca92e"},{url:"tags/剧情/index.html",revision:"c3a740886257a7ebf128d0001420f0cd"},{url:"tags/厂商/index.html",revision:"438891b45f5e82203b87ca57959a8281"},{url:"tags/命令/index.html",revision:"1f250918bba831387803d10eff3f3dab"},{url:"tags/固态/index.html",revision:"8811097fb947fe9099b8237d898dc43c"},{url:"tags/地址/index.html",revision:"612c27c1d0c129508189b3999f31f418"},{url:"tags/夏普屏/index.html",revision:"b1c698975ec6b8333fb25e0c8390729c"},{url:"tags/安卓/index.html",revision:"c3249e4369ac167e636246ef39d6f8b8"},{url:"tags/安装/index.html",revision:"0e513ebee2b99d8a78741f8e7e599568"},{url:"tags/完稿/index.html",revision:"144fec0b35b11f97dc56507a3e111934"},{url:"tags/官塘/index.html",revision:"a68088d1d6bb823f6993e7c4679ad4f3"},{url:"tags/小说/index.html",revision:"080a1657f737eb6149245317478a192b"},{url:"tags/小龙女/index.html",revision:"46ddda6800e99cf337198ca3a6bdabcf"},{url:"tags/开卡/index.html",revision:"a0eeb62be03a7062d6274354643ec07a"},{url:"tags/开头/index.html",revision:"992a7d29f917fb62fabdc60acbec18c2"},{url:"tags/张艺兴/index.html",revision:"47f4e14b2040fc447f11a49374b653d0"},{url:"tags/归档/index.html",revision:"be07fcefe9ae129c17fde804ed7ba04f"},{url:"tags/影视剧/index.html",revision:"ddd5729c1ac93cc123bc8e9b7e753d53"},{url:"tags/情况/index.html",revision:"495d8656137a4d0e4489d1ca9116f6b1"},{url:"tags/打赏/index.html",revision:"8f7a5bc016667a85288e58968ae6b1b0"},{url:"tags/扬声器/index.html",revision:"82207f358e47751dd17702295260f7db"},{url:"tags/拳头/index.html",revision:"83e793c96b0e6b5ebbf8ae3f11992ff2"},{url:"tags/教程/index.html",revision:"c23ba18fad4e059f066360e89ee49a8e"},{url:"tags/文件/index.html",revision:"2188a1834f4c59a1539b363441da94ad"},{url:"tags/无声/index.html",revision:"f6ec8d5c1281852a8a2283c6dca73575"},{url:"tags/时间同步/index.html",revision:"d4641bbb320cc357e9b85a61615d7c0f"},{url:"tags/旷世奇恋/index.html",revision:"713e572f13663d08cc43815e690eea62"},{url:"tags/显卡/index.html",revision:"33c418b1a3d374f553966b28fdd01b9a"},{url:"tags/杨过/index.html",revision:"b741d243383f797794271ef57388427a"},{url:"tags/梯子/index.html",revision:"ca52bed842fefa9b3aad81ca78634d5c"},{url:"tags/求婚/index.html",revision:"fbdeb612f825e7e63d956323ebbf45af"},{url:"tags/求婚大作战/index.html",revision:"043a38b357581c10567e3db363b4d77f"},{url:"tags/注册/index.html",revision:"70cd61c6f898a462cbdbc9f6f7b91eb6"},{url:"tags/测评/index.html",revision:"7ba62862b228314f896739a8ce81b06e"},{url:"tags/测试/index.html",revision:"13823622256dc9650b782879309d8f05"},{url:"tags/海力士/index.html",revision:"b9f84290bb9e03630a5acf8e9e2b5073"},{url:"tags/演技/index.html",revision:"953d0a173950ea6961b744ca6b705f7e"},{url:"tags/焊盘/index.html",revision:"14a972125400be8bfd7ad98063904fbc"},{url:"tags/版本/index.html",revision:"74342bc39ed6c9c37187fca1af56608c"},{url:"tags/狗尾续貂/index.html",revision:"b7a7a2528f1efc0c2dc9ffe62316b5c2"},{url:"tags/珠海/index.html",revision:"574746b3067e0fb22996047d19eb9172"},{url:"tags/硬盘/index.html",revision:"f44d9b7258d0270a1fbe0e6fb10c7316"},{url:"tags/硬盘盒/index.html",revision:"30b4cb8b6a832792cea11c8b28a18fd8"},{url:"tags/磁力/index.html",revision:"7fc1ee90df496e2fa450c876c88cb37b"},{url:"tags/神雕/index.html",revision:"c1884df3571bb58530881e6aea8199b1"},{url:"tags/科学上网/index.html",revision:"b1c027fb093e7c4a3b985ceb106a491a"},{url:"tags/笔记本/index.html",revision:"858c88421d289c264d20b0c0283a39d8"},{url:"tags/精粤/index.html",revision:"3f3fe38f044c0e19a118ac73ac6ffa0c"},{url:"tags/红米/index.html",revision:"aebce194e6b74f987189ea04250ce8cd"},{url:"tags/绵羊/index.html",revision:"cfaa4041c844a4a17aae45e6eeca7700"},{url:"tags/编程器/index.html",revision:"0bd178336b7127b089e3e23c12af1112"},{url:"tags/网剧/index.html",revision:"9657796ff5b31cb98535dcdd5a1bceda"},{url:"tags/网卡/index.html",revision:"6ea67d65fff6e86d12335d4cb843fd96"},{url:"tags/群晖/index.html",revision:"c7db0eb94198114a336529592686fc2b"},{url:"tags/英雄联盟/index.html",revision:"e480de976dc2a75a2efb790d5581c5c5"},{url:"tags/苹果/index.html",revision:"735b8c1342d563d5221a10cbe0257863"},{url:"tags/软路由/index.html",revision:"95bfd786345318bbdb4772a9ce629f6d"},{url:"tags/邵庄/index.html",revision:"6373ea285dcfabb2c18a9ab75c3198b8"},{url:"tags/金庸/index.html",revision:"5a30dab217a3face0a4078a67c03ae80"},{url:"tags/镜像/index.html",revision:"a1bee3560a3c800c1f3c10f2f26bcc97"},{url:"tags/阴雨天/index.html",revision:"a1444bec3eeefbafeb0072216c299d73"},{url:"tags/陈都灵/index.html",revision:"52ec0ec81eb666b60d3bbd9508739b42"},{url:"tags/颗粒/index.html",revision:"5420995232ef6804dd818e1186535a62"},{url:"tags/驱动/index.html",revision:"08bb71eda4238d9fdf2dbbcb351a0f26"},{url:"tags/魔趣/index.html",revision:"194eb7f14f448c4e7c611055bdc1c4da"},{url:"tags/黑群晖/index.html",revision:"d4c74f88bbe1ba37b87b4c5068775632"},{url:"tags/黑苹果/index.html",revision:"d7de5adc40ebe39fdfb43800da510ff6"},{url:"talks/index.html",revision:"8d93cdaffa5c979cdf5608dbd5d02b7f"}],{}),e.registerRoute(/^https:\/\/blog\.loliko\.cn\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
