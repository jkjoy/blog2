if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const b=e=>d(e,c),l={module:{uri:c},exports:n,require:b};i[c]=Promise.all(a.map((e=>l[e]||b(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2017/2017-06-05-marry/index.html",revision:"1aea228fd008145d7b5740cdd94e336b"},{url:"2017/2017-06-26-zhuhai/index.html",revision:"f31485523c7cac050394b82cba84a214"},{url:"2017/2017-08-17-shabusi/index.html",revision:"3c4088dc81ca68295fa628576d9f8e51"},{url:"2017/2017-12-02-zhuhai/index.html",revision:"e3d3c85ddd8fe7f7b67f89de2a984bae"},{url:"2017/cloud-torrent-for-centos-yi-jian-an-zhuang/index.html",revision:"cb19482b29c7b67c899c5d9d0462cf03"},{url:"2018/2018-04-17-shendiao/index.html",revision:"4de13fd8a1a2d54fa206e7b0ecb339ee"},{url:"2018/2018-05-04-linux-SS/index.html",revision:"3ebe45a9872d6659201686fa9fdd6419"},{url:"2018/2018-10-21-lol-s8/index.html",revision:"a39ccbb325869e6a15f24263f85b63b5"},{url:"2019/2019-01-12-SNH48-xuyang/index.html",revision:"4ba4101f3680b6ecb6d5eedda3df6046"},{url:"2019/2019-03-03-yitian/index.html",revision:"7238bf4a070b189b8c6a04a8c3cbb50c"},{url:"2019/2019-04-03-CentOS-ShadowsocksR/index.html",revision:"f2b20b808fa6a80c2bff818c2fafb457"},{url:"2019/2019-08-01-SSD/index.html",revision:"40c48f186298acf3ddafeebef6b321e3"},{url:"2019/about/index.html",revision:"6235931ff716e2cb4184c378377c449e"},{url:"2021/2021-03-24-h97m-vh+i5_5575r_oc0.6.7-big_sur_/index.html",revision:"f39664c36b038b06e75e931aeb3d6ed4"},{url:"2021/2021-10-10-NEC_VK22_opencore/index.html",revision:"3c063432e743323c98a9ee42a1f577cd"},{url:"2021/2021-10-10-NEC_VK22t/index.html",revision:"557ae8f04656e9214602d5c46ba8865d"},{url:"2021/2021-10-11-nec_vk22t-nvme/index.html",revision:"ddd48af67c2c22b49904de814ad706a2"},{url:"2021/2021-10-13-nec_vk22t_bios/index.html",revision:"8c238420617861f55f75e0815b5f8158"},{url:"2021/2021-10-13-nvme-mod-small/index.html",revision:"c547ee449d5b2670e4acbe44c31b286f"},{url:"2021/2021-10-19-NEC_vk22t_bios_nvme/index.html",revision:"8b5f96387b3e914eee0e5583d8883bfb"},{url:"2021/2021-10-19-onda_h410ipc_codec/index.html",revision:"dd43a141b6a3d3fa29a9b3404280cc30"},{url:"2021/2021-12-14-rx560_4g_vbios/index.html",revision:"341ff6f32b7ea773bc4e34dd02f82a63"},{url:"2022/2022-01-21-2023-amd-gpu/index.html",revision:"794a6cb4818d99a09f446f49c30fb70a"},{url:"2022/2022-04-12-ssd/index.html",revision:"52d5bec53b3172e24fd771c466ceb61f"},{url:"2022/2022-06-01-NEC_VK22T-OC0.8.0-macOS12.4/index.html",revision:"7370e3ee064ec6f0d70e6703202aabed"},{url:"2022/2022-07-22-H97i_gmaing/index.html",revision:"9da4c9f157060b687222e5d571c12a6c"},{url:"2022/2022-07-27-Linux-cms/index.html",revision:"7f645ea535848971368839858a68f91a"},{url:"2022/2022-07-29-macOS-homebrew/index.html",revision:"d0cbecff54589440f7ec6aa540996c67"},{url:"2022/2022-08-08-macOS-fliqlo/index.html",revision:"ec84f6930d10ec0d78bcb05a0427ca5b"},{url:"2022/2022-09-19-Typecho-CommentsByQQ/index.html",revision:"3047842db68497f2631fb05eff602530"},{url:"2022/2022-10-14-office2016_Mac_/index.html",revision:"7d8c8c48868a18710f0d0766b5dd734b"},{url:"2022/2022-10-21-b150m-et_m2+rx560/index.html",revision:"403b6da76eae7031623e8a7cad2d7f44"},{url:"2022/2022-11-08-NEC_VK23T-vs-VK22T/index.html",revision:"6b9f42760114bedb45b4ddd9a529e225"},{url:"2022/2022-11-08-VK23-OpenCore0.8.5/index.html",revision:"101b426ea831a8acd4de063f47e06c8c"},{url:"2022/2022-11-15-macOS-Windows-time/index.html",revision:"414f6f75747ffc22c2030a47643f28b4"},{url:"2023/2023-guo-nei-zhu-ce-chatgpt-de-fang-fa/index.html",revision:"d5f0f7d5b7a10416b052a2f08bc030b2"},{url:"2023/hello-world/index.html",revision:"0e87f54b77b21ea433abd4e7744fc291"},{url:"2023/mokee-rom/index.html",revision:"d78dd95b78e3fca8b479d8751a94386e"},{url:"2023/qv2ray-ke-hu-duan-ji-nei-he-xia-zai/index.html",revision:"6b3a296313b915aeafb5f914decd8bef"},{url:"about/index.html",revision:"01716299df33f0a5ee6a0d727b77fd03"},{url:"archives/2017/05/index.html",revision:"0a9d2dbb2de241099ff87f4242287b8b"},{url:"archives/2017/06/index.html",revision:"d0bd29f3b2f8f3f9cabbd2e1d91a58b4"},{url:"archives/2017/08/index.html",revision:"8c08caf3a87e3a2b2cf8610fec047190"},{url:"archives/2017/12/index.html",revision:"0c462728d7cb113ec28b0d5c0b90b3f7"},{url:"archives/2017/index.html",revision:"1a6fe5346f3accc5ee98f7b4a0841ee8"},{url:"archives/2018/04/index.html",revision:"9ea8a9f0fec0f83e3a8760d50ca5dd3c"},{url:"archives/2018/05/index.html",revision:"39244446965e239b97a6297d6804e91d"},{url:"archives/2018/10/index.html",revision:"f12254faf3759fd67d029680425379d7"},{url:"archives/2018/index.html",revision:"2a62671de76a4e9f138f88f26e99d7d9"},{url:"archives/2019/01/index.html",revision:"58268ed50ac471dc112729a2c67d4a1b"},{url:"archives/2019/03/index.html",revision:"3760b606b26ddb23da0a397248cda6c1"},{url:"archives/2019/04/index.html",revision:"ab818b0b48ae050940d07b7d5ce32e5c"},{url:"archives/2019/08/index.html",revision:"a441d7530cc8731765879bb356233b66"},{url:"archives/2019/index.html",revision:"f2c3bcc286b75b7d3123cc1ae2e6e758"},{url:"archives/2021/03/index.html",revision:"0d469878b11731be1f2714a6a28e8dd5"},{url:"archives/2021/10/index.html",revision:"80edd2d4383e0f129642e4357de8b5f4"},{url:"archives/2021/12/index.html",revision:"d5cc6e491463cb1049f418ea37b8c234"},{url:"archives/2021/index.html",revision:"8c2686768530d91640fbdc579797881c"},{url:"archives/2022/01/index.html",revision:"4d71f1c41ed76bbefa5b9fd7516d231d"},{url:"archives/2022/04/index.html",revision:"24630654b73624e52652128194a14414"},{url:"archives/2022/06/index.html",revision:"c7985aff7712d9174ea47a3148b90af6"},{url:"archives/2022/07/index.html",revision:"f9166dfbec747a65f190890ee9e2bef7"},{url:"archives/2022/08/index.html",revision:"732f7cc856b8393745f7a51e77676567"},{url:"archives/2022/09/index.html",revision:"c374cdb59e765cee2ce9574dd66d9eeb"},{url:"archives/2022/10/index.html",revision:"1a4c7d2c2d02e4853fc0d309cd27f9ce"},{url:"archives/2022/11/index.html",revision:"cb180cf4bc077b8beb3099ec68eca2de"},{url:"archives/2022/index.html",revision:"35a5f405b85b6eda7e66e99db15836f8"},{url:"archives/2022/page/2/index.html",revision:"1fa8797ef9e8cb58a0e15509c0ab29bf"},{url:"archives/2023/01/index.html",revision:"72d8bb6dd49f0caa4d5f2778fa0bf767"},{url:"archives/2023/04/index.html",revision:"b7597b35aef116ec2d502574803a494e"},{url:"archives/2023/index.html",revision:"d8ba58b097741dc43ed0f7a3017de163"},{url:"archives/index.html",revision:"299ea0e33d9c9a768ca5eae21ad3c31e"},{url:"archives/page/2/index.html",revision:"a31f19b98ca28d39b072b29a0c7616ef"},{url:"archives/page/3/index.html",revision:"0705e162ce88beaa68059d3810872a57"},{url:"archives/page/4/index.html",revision:"c827d3875c0512dc762f779ca677d701"},{url:"artitalk/index.html",revision:"97b64079d9d99c160431073bbcc17971"},{url:"categories/index.html",revision:"49abfb9497837e685e817029d2872095"},{url:"categories/macOS/index.html",revision:"3c18ea51addce63ab5f667067041d488"},{url:"categories/分享/index.html",revision:"adceb676d984e0e701ab4f5ab5738eb9"},{url:"categories/推荐/index.html",revision:"cc9ecee09ac8622f219b86127804166c"},{url:"categories/日志/index.html",revision:"f4ffe9f91d08179f298184b7a8119b1d"},{url:"categories/照片/index.html",revision:"de60c4c3ca57a94ab5c26126dd127f8a"},{url:"css/index.css",revision:"3b48b1543c80829d03f8f535078e43a4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gbook/index.html",revision:"3a4b44c4df315a2a7c0af402c22ad7c5"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ff1811454cc220f56cc4055cba23af1e"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"a04dfbc78e80b8a9ec0a35fe0281dc7a"},{url:"music/index.html",revision:"37770bd79e28e5ab2cf462f7ad367586"},{url:"page/2/index.html",revision:"b90fc1c296877a3fe1535597269cccb2"},{url:"page/3/index.html",revision:"689da330d203106e91896bb4fdfa8e32"},{url:"page/4/index.html",revision:"912684ac4cb2dad1e2856a64fbf07d83"},{url:"photos/index.html",revision:"3062f23f4ad02b8c54736140376f7430"},{url:"tags/amd/index.html",revision:"838264527e730453c61584fcb3833cb1"},{url:"tags/bcm943224/index.html",revision:"ae7cb3374dddbeca92a35b5142df9691"},{url:"tags/bios/index.html",revision:"429ab5b5a20b518b109bdf1d4c5fd9ad"},{url:"tags/centos/index.html",revision:"fe3aa9ef511d2d8184c919f3de344e3e"},{url:"tags/chajian/index.html",revision:"ce93f36a475e9565e8d2f85df5118fe9"},{url:"tags/chatgpt/index.html",revision:"7a5b4cd661f313243e19516a741e8624"},{url:"tags/cloud-torrent/index.html",revision:"4ad2e1938fddf8aa3e2a0809d235ac9d"},{url:"tags/clover/index.html",revision:"bd48549ea8e49ebc059d8b0cc06711ae"},{url:"tags/CommentsByQQ/index.html",revision:"4ce2a9aa441e1ac6b7ef3825f2b1c352"},{url:"tags/edid/index.html",revision:"3d230f5de2577ac81cfe1a94dc675fcb"},{url:"tags/fliqlo/index.html",revision:"e5f8e5671165d70816cc9bd0812d94c0"},{url:"tags/h97i/index.html",revision:"0fc2a09d31d86ba4651af3ee27b498f0"},{url:"tags/hackintool/index.html",revision:"93c0a566c9617cd3c91150549ed451b9"},{url:"tags/homebrew/index.html",revision:"5b66ebb141dcf3bbc0bc19f9197502ba"},{url:"tags/i5/index.html",revision:"7b4c366160cd85e61b174b9351a0bc11"},{url:"tags/index.html",revision:"8013568eba04cbb5bd2d84660cb89e6f"},{url:"tags/linux/index.html",revision:"b03fc5093c5c162f7454f7945f88d41d"},{url:"tags/LOL/index.html",revision:"4803c43372dde7ee1e60e9f0924b8959"},{url:"tags/macos/index.html",revision:"6b921f47f610a56d819fe821cabf5389"},{url:"tags/nec/index.html",revision:"27b1044959038d1091e2f5cca385c3d1"},{url:"tags/note4x/index.html",revision:"ce4fa329ddc540872436ec950c25e044"},{url:"tags/nvme/index.html",revision:"1eb8f870a45d35a300d52e1337f9bf05"},{url:"tags/office/index.html",revision:"480778caaf2ee51a8201f024c4d44585"},{url:"tags/opencore/index.html",revision:"13d22da094852328b515e964a9aa29b8"},{url:"tags/rng/index.html",revision:"491095908e2c13daf7b912a6a569b967"},{url:"tags/S8/index.html",revision:"e9870c975e6b9fd94e580a89cfbde9ed"},{url:"tags/samsung/index.html",revision:"3f6472be18918305cbbcc7d99f575293"},{url:"tags/service/index.html",revision:"443fdd45b0e37fa70121407c8bcb4b92"},{url:"tags/shadowsocks/index.html",revision:"6f40a156742ea44ed6b1bec5bd670f3c"},{url:"tags/SNH48/index.html",revision:"27c21365497d8cd25e73c6dea83adb25"},{url:"tags/ssr/index.html",revision:"9fc52cd7cc345076de664581d1ae4ae3"},{url:"tags/torrent/index.html",revision:"62cbb0bb896f53490f97cdfc9ecaa5bb"},{url:"tags/typecho/index.html",revision:"d350a5a38d66fadd92347abe7e57dc7d"},{url:"tags/vk22/index.html",revision:"accc5c69317f2f261ffd46e58fd97abe"},{url:"tags/vk22t/index.html",revision:"beef371bed4e2f4aa49fb06a3264abdd"},{url:"tags/vk23/index.html",revision:"aec2962be2c9cdd106b19cbf95830960"},{url:"tags/wget/index.html",revision:"b9b36ebbac507f523684c53a439edd16"},{url:"tags/windows/index.html",revision:"ad269eeebd29b5adc94769bc8b86ded8"},{url:"tags/zip/index.html",revision:"2a565612df5a02d74f731da13acf6413"},{url:"tags/下载/index.html",revision:"d37903c8dd0fefa0b10f03d72659f3c6"},{url:"tags/主控/index.html",revision:"478f2494b644f2c5626d5d9b781018b4"},{url:"tags/主板/index.html",revision:"67002ca7652c156c79450187ef524dd7"},{url:"tags/何沅君/index.html",revision:"834331c45df9e009a885edf064e44660"},{url:"tags/作品/index.html",revision:"54fb3f818ffedb50eb3e17d19ccb1e95"},{url:"tags/修复/index.html",revision:"668b68e4b5998fee0c54fdacf82da1ec"},{url:"tags/倚天屠龙记/index.html",revision:"648223842e56fc4949243c5e42ffd2d5"},{url:"tags/免驱/index.html",revision:"c5135a22ea9041b77b15dee76b197bcc"},{url:"tags/养女/index.html",revision:"f8caac4418520bde9863ff874d72cf96"},{url:"tags/列表/index.html",revision:"838712a4812b0ce0722bedb0ef6e88b3"},{url:"tags/剧情/index.html",revision:"d4c0091b95bbd37ed48615679ffd3443"},{url:"tags/厂商/index.html",revision:"75164233b58bdd715e2940893c44cbfa"},{url:"tags/命令/index.html",revision:"e450952c27cb7b02479e042814533769"},{url:"tags/固态/index.html",revision:"84748d3831931b8a0ea5e520dd087f24"},{url:"tags/地址/index.html",revision:"371d4419d518b1873ed5b440341c4668"},{url:"tags/夏普屏/index.html",revision:"4dbb0b7793ca7a9acc899ace7175262d"},{url:"tags/安装/index.html",revision:"73e98e09a2e6f234fed3440898a24e64"},{url:"tags/完稿/index.html",revision:"fa92a766476b91790b8909245771e385"},{url:"tags/官塘/index.html",revision:"d32cb21fc57fc8ef361b4505463e3eb8"},{url:"tags/小说/index.html",revision:"860ccd5ca51390b77e4ce50bbf1a3a35"},{url:"tags/小龙女/index.html",revision:"4063cad702fc3427d9d0dde7ad88bb37"},{url:"tags/开卡/index.html",revision:"55c74bd9cd241b37cbff8ea4d098342a"},{url:"tags/开头/index.html",revision:"fe455e32801ad7cb8a0c968530daa95f"},{url:"tags/张艺兴/index.html",revision:"2bf34846f589c23db8fc20e509845fa2"},{url:"tags/归档/index.html",revision:"a8696766170e0302a46f6badc89707be"},{url:"tags/影视剧/index.html",revision:"08089c5477e6425e655f440857211c3c"},{url:"tags/情况/index.html",revision:"ea6d4a00b913080dbe0f23a9b9c1ec20"},{url:"tags/打赏/index.html",revision:"104ab37b0723beaec5930c0cbd78e1de"},{url:"tags/扬声器/index.html",revision:"2eade34d00a4c9cfc71177093d2dfca6"},{url:"tags/拳头/index.html",revision:"710655dd8e40811b76b971e93a0386ba"},{url:"tags/教程/index.html",revision:"b4d939f796d27dff7321e63d78aa330b"},{url:"tags/文件/index.html",revision:"608dd41882fdb4bfca97b89f06d58d54"},{url:"tags/无声/index.html",revision:"55fa0e6fcad648b756b337b59d1fd1fb"},{url:"tags/时间同步/index.html",revision:"b1a2dbfb2d91a94efec8903c373fc2a0"},{url:"tags/旷世奇恋/index.html",revision:"70a4c5bcd2f975404f3a9cf6cfab47ba"},{url:"tags/显卡/index.html",revision:"9064aaabf42b426aad62c17b5493d6e4"},{url:"tags/杨过/index.html",revision:"d32eb25c0e2fc29543f528efa0f7b309"},{url:"tags/求婚/index.html",revision:"de9a54a73614c2c1b581a7f977445e31"},{url:"tags/求婚大作战/index.html",revision:"4172dcc126156ba83434a42eba80de9f"},{url:"tags/注册/index.html",revision:"857ad259ab03fcb1402dfd33f27bd6d1"},{url:"tags/测评/index.html",revision:"26f9ccdc3c6ec3df9b7dc6cfeed045d0"},{url:"tags/海力士/index.html",revision:"9c5325e314703e6e9b8309334bd4a483"},{url:"tags/演技/index.html",revision:"9a1b060681fd66b6b88045372151a015"},{url:"tags/焊盘/index.html",revision:"65a8d9173f55cdcf5112e39f7f23ef70"},{url:"tags/版本/index.html",revision:"48eaa653715b2a617ec8725ca5279ee1"},{url:"tags/狗尾续貂/index.html",revision:"b780c46b892e2f7560a41178516db9c3"},{url:"tags/珠海/index.html",revision:"300ca1b6cd6ef2a863aa023eb4924298"},{url:"tags/硬盘/index.html",revision:"677fee07061d7ee4803d6b0f48af1e68"},{url:"tags/硬盘盒/index.html",revision:"6f7f2d675ad152e231b94f03ed67800a"},{url:"tags/磁力/index.html",revision:"ded6d4be55d7465b01174435aa5c3180"},{url:"tags/神雕/index.html",revision:"72fab34a7c251dffbb5c6b17a8db3d49"},{url:"tags/笔记本/index.html",revision:"8a07d0306c82558dd15e70a5f6e0d13b"},{url:"tags/精粤/index.html",revision:"c4b7ea40189c20ca5bca64bcefdcb5fb"},{url:"tags/红米/index.html",revision:"01fad4f8780dedbf38a599b690a292a4"},{url:"tags/绵羊/index.html",revision:"e56ab2d07b3c6d7020e2ce740baead4a"},{url:"tags/编程器/index.html",revision:"7f31cf072c359872e97d4f49eab241b8"},{url:"tags/网剧/index.html",revision:"19b3855e9a4781b4ee614fd52c20df07"},{url:"tags/网卡/index.html",revision:"a8cd7aef507c25e56a05e8d8bbcbf780"},{url:"tags/英雄联盟/index.html",revision:"4972661d47f04b46ca6bf1c590aa2716"},{url:"tags/苹果/index.html",revision:"b2a240211d9b97362609e20fac319441"},{url:"tags/邵庄/index.html",revision:"8693459632e26bf31ff00a12ec674288"},{url:"tags/金庸/index.html",revision:"64b8cfd62bd2de00f07a2068ab918535"},{url:"tags/阴雨天/index.html",revision:"271458ead109ee65db7809b0e1540b01"},{url:"tags/陈都灵/index.html",revision:"4e9e9ef5bc109a19fa1e069998fef78e"},{url:"tags/颗粒/index.html",revision:"3a2d69a266eec19aa1e258f33acb37b5"},{url:"tags/驱动/index.html",revision:"b2169416baa81e6a3688cb8e4fd2edc1"},{url:"tags/魔趣/index.html",revision:"7a54b6d35bc4ea3d8402ee7f91f8fab9"},{url:"tags/黑苹果/index.html",revision:"6b10fb5ba3eb6cda92a922b641902fa9"}],{}),e.registerRoute(/^https:\/\/blog\.loliko\.cn\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
