if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const l=e=>a(e,r),f={module:{uri:r},exports:b,require:l};i[r]=Promise.all(d.map((e=>f[e]||l(e)))).then((e=>(c(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2017/341ac1e6.html",revision:"fb7ac61551c7a7524c3628fa9b5e992c"},{url:"2017/b93101ab.html",revision:"efe84bf7a32afeb1fc3231c42818e58c"},{url:"2017/cb92d708.html",revision:"8ea92f72486b1b22e42678cc13f08318"},{url:"2017/eac40a64.html",revision:"2486d6704a2d0c54f4e8973a99d705c4"},{url:"2017/eedcfe1c.html",revision:"e74ca6cbde4ddeaf7e1346189547a06b"},{url:"2018/29c199b6.html",revision:"a889e511629097c491b6407befdf9d8e"},{url:"2018/317afbc8.html",revision:"7b2c347db54eb4b06663147952d6ccfa"},{url:"2018/e73c603a.html",revision:"17d2b1efd2681bcfc6dcb5a01bf627df"},{url:"2019/314a5df4.html",revision:"71344ae4858cfdb429aa3f9cd49745f2"},{url:"2019/85322f98.html",revision:"6cd7e2fc5b07e4227cdf393f97be6c0a"},{url:"2019/8a82280f.html",revision:"548a81ba7a026744ce4a10893a6dabce"},{url:"2019/90206356.html",revision:"b4bc3d989a586ab92e9488f805e0abab"},{url:"2021/156c3684.html",revision:"348183498b71e28594ccc45abad5b24a"},{url:"2021/244f7c76.html",revision:"2149b81f0563ab44eaa34874b5ee5314"},{url:"2021/6857bb45.html",revision:"4424ad97e9dc59b7b3b4087e5fb1d7da"},{url:"2021/7e0d420b.html",revision:"870f8e6a5d2e5035abeaf2509f9d010c"},{url:"2021/8327832e.html",revision:"2c26927f990946a539af736d02e130c9"},{url:"2021/882b6242.html",revision:"7b5f9bdef436fdfc90fc031810b2e14f"},{url:"2021/89f51950.html",revision:"86dcb8dea0d1958b9854b15ef93a5b0c"},{url:"2021/de19f54c.html",revision:"a60b336ce7c2b6cdcbf385f0b890807a"},{url:"2021/e3e6b5d8.html",revision:"55e47715144dbc8d47edef0e7c8c264e"},{url:"2022/1387fd73.html",revision:"9d0e031472cdb953450c07d376a11883"},{url:"2022/342aa622.html",revision:"d45bce0d9f5e917957e3e4b52435661d"},{url:"2022/36a001e5.html",revision:"d3c2e12e17198d491b39ef9d7d40a3af"},{url:"2022/68647b75.html",revision:"e3cd420cff056da89e78369c5d065633"},{url:"2022/82e8a6ff.html",revision:"3146e5cda5ff7e29018b2e3e34497074"},{url:"2022/88405098.html",revision:"02f685e248634339e6fe685ac0c258a9"},{url:"2022/93a53ee.html",revision:"8e1f9242be0bec986c6cbb2021306935"},{url:"2022/d0290d4f.html",revision:"c8e7df8ced719a39f0271a9920439167"},{url:"2022/d701f25.html",revision:"c26b2843a242b14aa91962b09a138c3e"},{url:"2022/df7a6812.html",revision:"2c826789f34fb9dcd6eb8d9f0a1f65be"},{url:"2022/e61e410b.html",revision:"59115347f2018fa4079482d410be9ed4"},{url:"2022/ee234ca2.html",revision:"034130e60308bb1440b17c17dc9e4ede"},{url:"2022/f4d722c5.html",revision:"79fe2830608d2a177fdba5dbe5ca886a"},{url:"2023/156e4c13.html",revision:"31323c1ddb556e03cade62515e1ad20d"},{url:"2023/176559d4.html",revision:"e88b0d62c376a35cd1d78fa5bfa82d37"},{url:"2023/1c81ee10.html",revision:"92034a6e4d09236826cba034d70d8a92"},{url:"2023/507a5d86.html",revision:"0a338ccf297ce513560e658ee93b9311"},{url:"2023/54321412.html",revision:"c9daf60d2a0986773d0c7ebc6db01c9d"},{url:"2023/61795a18.html",revision:"07bd2e93f6860bd86ef811935c340770"},{url:"2023/63a51e75.html",revision:"47db84d295ede4c94a2069cf3a2faabe"},{url:"2023/6d58ffa9.html",revision:"6d98ab4911687ebcc9d915c69c8d607f"},{url:"2023/8828c81e.html",revision:"58812bd2aec69aede1f2a7243cedf308"},{url:"2023/94ed24f6.html",revision:"21a71e61480e3b033c2497caaabbc16c"},{url:"2023/b564ae15.html",revision:"0ae5cf10cab694201e7d57ccd15b4a9f"},{url:"2023/bc338f20.html",revision:"d7a16a43e784f49d1e2a02173c91acf5"},{url:"about/index.html",revision:"553c666f6520af55c89497f296ae1c9a"},{url:"archives/2017/05/index.html",revision:"9ab5d044f6d8da84296c3d2502e095ac"},{url:"archives/2017/06/index.html",revision:"80c329390a9737609d15bb0c0c1de9b9"},{url:"archives/2017/08/index.html",revision:"52e3301cd18bd13494cb4ce57a64f102"},{url:"archives/2017/12/index.html",revision:"ad50f3d954404a1e3fa063fe4b13a2ab"},{url:"archives/2017/index.html",revision:"e0673d33ae3b75211258f34efdd0740b"},{url:"archives/2018/04/index.html",revision:"600aae55d88ce3cc79ef38ac442e3f65"},{url:"archives/2018/05/index.html",revision:"b35214541da976657388280fef58bba7"},{url:"archives/2018/10/index.html",revision:"c74b3a551de318ccb10d66c713aa0b34"},{url:"archives/2018/index.html",revision:"f428c36d1333715b98da5b2d53197932"},{url:"archives/2019/01/index.html",revision:"a471d20845fa3c227a5e040a99f36fea"},{url:"archives/2019/03/index.html",revision:"e15ccbc759216accdb622f56406b20e4"},{url:"archives/2019/04/index.html",revision:"a223d2aa1118e68bd727fff41a322ff0"},{url:"archives/2019/08/index.html",revision:"c891551a3a9148659e1dff572bdb5705"},{url:"archives/2019/index.html",revision:"92d037211b67f1c0c5c4bd0ae12d9cc2"},{url:"archives/2021/03/index.html",revision:"90619a5dff160ad06c218e10960f6a82"},{url:"archives/2021/10/index.html",revision:"5c19ca99d43588ecd0a935c7e4301847"},{url:"archives/2021/12/index.html",revision:"857eb1245c6a109526fc5ec54be401c5"},{url:"archives/2021/index.html",revision:"9bb5f0a4cc0cb94e16aad6df9139f29e"},{url:"archives/2022/01/index.html",revision:"260972f6605e5734bcabf57757c3f932"},{url:"archives/2022/04/index.html",revision:"0631e0d5a8bac1e9dd252e736907ccd7"},{url:"archives/2022/06/index.html",revision:"b14375dfede093c6705e666d49da01a2"},{url:"archives/2022/07/index.html",revision:"92c3fe9783da0ea60790ac5e9917a1d0"},{url:"archives/2022/08/index.html",revision:"d1582fafc8a962067fe1ac8cb22850a7"},{url:"archives/2022/09/index.html",revision:"ad5a5fbfcb116978091c6e96ebafdbb7"},{url:"archives/2022/10/index.html",revision:"cafc5778f6f04c801f24bbb587227dbe"},{url:"archives/2022/11/index.html",revision:"b9a2e1c789d3fc7ebc6d56b7b814c2e2"},{url:"archives/2022/index.html",revision:"f945570721ae268ed241cd396a0664c7"},{url:"archives/2022/page/2/index.html",revision:"5f5a7d2e377c1a31e8a2f7aebf6fabc4"},{url:"archives/2023/01/index.html",revision:"04462cceff25ddc465a74c0cd28a5f30"},{url:"archives/2023/04/index.html",revision:"16d1e391d50c8f755f06a0d47854fcaa"},{url:"archives/2023/05/index.html",revision:"c594886652fcd5f5b94affded43ee09f"},{url:"archives/2023/06/index.html",revision:"a16cdd2a7a22cdd45e63a9f740b2fe90"},{url:"archives/2023/07/index.html",revision:"922f768c0c3113da5bb4d21fa305f3fe"},{url:"archives/2023/index.html",revision:"c25ffb12711d40e0a79aa56791d98d25"},{url:"archives/2023/page/2/index.html",revision:"4972b02b092313b4c9f4e0f6aec860a8"},{url:"archives/index.html",revision:"6ceb69a0592213e78ec24b314419bd1c"},{url:"archives/page/2/index.html",revision:"f2336a5d004c55d08f32534c9f6fb4c5"},{url:"archives/page/3/index.html",revision:"13af5effb5ec8982c247a89732756e17"},{url:"archives/page/4/index.html",revision:"1a6f8195b78f8ec200fe6939b89bc1fd"},{url:"archives/page/5/index.html",revision:"8ed73a14b914644a62018c0a6441d011"},{url:"categories/index.html",revision:"63078be00484dd7df058397616629777"},{url:"categories/Linux/index.html",revision:"ab84ecb4604563a5f9657a7e3444e296"},{url:"categories/macOS/index.html",revision:"3af30ffdaab5983868feb0a9c428e912"},{url:"categories/分享/index.html",revision:"93666fea30a39e2cfd33ea6d3f095788"},{url:"categories/分享/page/2/index.html",revision:"3ba7ac54708872ddc1828b26bc6377f8"},{url:"categories/推荐/index.html",revision:"44dacc509c1ac4b479043e798b512d63"},{url:"categories/日志/index.html",revision:"e74bc20cd0e5af40409d5046f6e1d520"},{url:"categories/测试/index.html",revision:"0b5df2a7ef9382217303330c01d148c7"},{url:"categories/照片/index.html",revision:"0c8035753fbefcfaa9f1560050161d87"},{url:"css/index.css",revision:"e96019e71b38a7460e865aa01ef2c9de"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gbook/index.html",revision:"7afed9d90b56e3ba5427d51cce5320d4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"22def9bc66c545ad816d3f073420a84e"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/marked.js",revision:"0125b05794f94e05bc46116f8580d19e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/talk.js",revision:"120e1a5f36eca2b750ccfbf8a1497840"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"9847e7f278f57f709d3e531868828bbb"},{url:"memos/index.html",revision:"c5cd71662c102a3a0f7e6056d1eb6090"},{url:"music/index.html",revision:"5f0255782a0404fc4a1dd579b854fbd5"},{url:"page/2/index.html",revision:"9dfbcaa621390c06aed0e16c3c97e6bb"},{url:"page/3/index.html",revision:"3ee9bb69c9f34ccd8ba1fbe9e4d2f1d3"},{url:"page/4/index.html",revision:"bbb7295e25f236e9bc1f566aa700e6b1"},{url:"page/5/index.html",revision:"48534fc4b8f5e075e02f821ec066d324"},{url:"photos/index.html",revision:"700416e3f76748843b8a62c4eed020b5"},{url:"tags/amd/index.html",revision:"fb9148aecf26bd49e4734f4c0f9a9cd8"},{url:"tags/bcm943224/index.html",revision:"51e7b2e8e6648abafcc8d0929c3e50fe"},{url:"tags/bios/index.html",revision:"f96b12349e95109e1e734ec491d63248"},{url:"tags/centos/index.html",revision:"acc2dcf0f6f8d1eb1fa28755146f8835"},{url:"tags/chajian/index.html",revision:"92f82880c73a16c9f2607210dee043cb"},{url:"tags/chatgpt/index.html",revision:"e78e4a78a4f47b793fa681c0bebfe25e"},{url:"tags/cloud-torrent/index.html",revision:"c4a79c16ec76b58b3fe030eb1b859008"},{url:"tags/cloudflare/index.html",revision:"911f75c029a29ae5d0942270bccda205"},{url:"tags/clover/index.html",revision:"0a20e35347853e803d468955d3c87067"},{url:"tags/CommentsByQQ/index.html",revision:"93f9d858ea27abdee58baa63f3891c91"},{url:"tags/docker/index.html",revision:"e6c186ad649dd5ed2d8a4df3bd0c0910"},{url:"tags/DSM918/index.html",revision:"97f5ef52af5bd5c56cd9bec965ee0d26"},{url:"tags/edid/index.html",revision:"e4e09c45ede7cd7b56556f6a1ede5850"},{url:"tags/fliqlo/index.html",revision:"4a7d832cc5ff58dda16e966b10f56d0c"},{url:"tags/h97i/index.html",revision:"8505191cf02f93963a398d06a39bf6fa"},{url:"tags/hackintool/index.html",revision:"65ffb01caa8710a6ca319cd8a465d2ad"},{url:"tags/Hexo/index.html",revision:"e85e078db4d07afee4082c09345c82bd"},{url:"tags/homebrew/index.html",revision:"98c44e115419d0e251f99f9a3142f795"},{url:"tags/i5/index.html",revision:"fdfe180d2d5b02020ccdcd819cd163c2"},{url:"tags/index.html",revision:"83036dcf125885a3e8c59461e9913fb9"},{url:"tags/lede/index.html",revision:"c6c7fd6ec5749270a8d283892788a2e6"},{url:"tags/linux/index.html",revision:"055f673ccdc76c09aab38052005cc2e5"},{url:"tags/LOL/index.html",revision:"3580d1a1a38c4825d0bc269845f83212"},{url:"tags/macos/index.html",revision:"e44c308867d403d874c373ae8aa83128"},{url:"tags/memos/index.html",revision:"429c5fbf66286ae4c1171e1c25900596"},{url:"tags/Memos/index.html",revision:"3aebb87e16d51b8177a88b63195fd67b"},{url:"tags/nec/index.html",revision:"526d3674531eeca914c8a5b7bc4187e3"},{url:"tags/note4x/index.html",revision:"8c4fffda595e02718bf523e67f6b9579"},{url:"tags/nvme/index.html",revision:"8553522506202a29ab208157cfc4501d"},{url:"tags/office/index.html",revision:"2442195fc1ec4ab964adb5c56acac38b"},{url:"tags/opencore/index.html",revision:"4be0a57654da1e1731e4c5158f943a22"},{url:"tags/openwrt/index.html",revision:"bab923730fe2f81bc88b35e7679349ea"},{url:"tags/rng/index.html",revision:"1b29abafcbfdc3a437fa6b9d5bda843b"},{url:"tags/S8/index.html",revision:"e415809cb32407f79dc9a3b2563390fe"},{url:"tags/samsung/index.html",revision:"8a0c474e836f5556bab2887d76ee4fb3"},{url:"tags/service/index.html",revision:"306b51fbce5c41eb1140704bd7a6120c"},{url:"tags/shadowsocks/index.html",revision:"e0dc55fa8e18963ebe8e5273ee9f2710"},{url:"tags/SNH48/index.html",revision:"c67f47b2013228ad5fbf97cd0d047e4c"},{url:"tags/ssr/index.html",revision:"51885987ceb15513b329bb1e488f6ae5"},{url:"tags/torrent/index.html",revision:"e711612197bebd137a5dca376c140345"},{url:"tags/Twikoo/index.html",revision:"9b26d6b3544130f59e0d12f0ff530109"},{url:"tags/typecho/index.html",revision:"5b1fb288bdba3725d69421332d7f8d87"},{url:"tags/V2RAY/index.html",revision:"f00e817dfa334ed3662f716b54903457"},{url:"tags/vk22/index.html",revision:"11afbf51efbbc48bbeff7f29db108a27"},{url:"tags/vk22t/index.html",revision:"779804903b19cf010db0b49aac31d579"},{url:"tags/vk23/index.html",revision:"4bf994cbb58f3fb4b428411a243a64de"},{url:"tags/wget/index.html",revision:"b7c95a122d683f6ad67c79eea45df768"},{url:"tags/windows/index.html",revision:"d6e2217e0e94d19259d69ad0d393b35b"},{url:"tags/zip/index.html",revision:"d7a53f0b5a1322e019aecb2a24ae6b47"},{url:"tags/下载/index.html",revision:"c20b74e5b0624df24ceea1c4ec6f9c9d"},{url:"tags/主控/index.html",revision:"f9c6983e69cbb7cbd41a688512da9c60"},{url:"tags/主板/index.html",revision:"e939bf2ce81009ba93265fd2684e1f1a"},{url:"tags/何沅君/index.html",revision:"4116fbf195d1465a430271c042207e53"},{url:"tags/作品/index.html",revision:"04882f2780f3e27beff253189cd1327a"},{url:"tags/修复/index.html",revision:"dc0ec3ad14ed181abb66b7b4bd3a3932"},{url:"tags/倚天屠龙记/index.html",revision:"e3ed1e8fec699e6adb88577d0fe3e378"},{url:"tags/免驱/index.html",revision:"37e83a6e7b706945fd9a829c5f3352e0"},{url:"tags/养女/index.html",revision:"b9c16b45de5570f5399ea9132432479f"},{url:"tags/列表/index.html",revision:"3f40653f81492a254b867efbec7626ae"},{url:"tags/刷机/index.html",revision:"cb92a905817c8909832bdfac3e6abd02"},{url:"tags/剧情/index.html",revision:"fc0d2eeab5105cb80923be08b8429777"},{url:"tags/厂商/index.html",revision:"156d5eeea388dc121bf91b8f91ab02b5"},{url:"tags/命令/index.html",revision:"44036f28e5422dc1f7e23283dc5a9175"},{url:"tags/固态/index.html",revision:"3c6a0a22d544ccf186b4679cc2bedb81"},{url:"tags/地址/index.html",revision:"294fb2d45aecefdbf4d7f1fd5b210161"},{url:"tags/夏普屏/index.html",revision:"5fd788870ba098ab2f434ffe17b7845d"},{url:"tags/安卓/index.html",revision:"35ac893bb89147ba4bd3fd934f758eaa"},{url:"tags/安装/index.html",revision:"e56f927e0fec785a44d99dd3a93c63b2"},{url:"tags/完稿/index.html",revision:"07fea5d2e278a6f51d2872b955902b0b"},{url:"tags/官塘/index.html",revision:"13ada25e0c9ecaf8f56355ae295f5d99"},{url:"tags/小说/index.html",revision:"7b67bcdb8313faefc295dc0cc98ae294"},{url:"tags/小龙女/index.html",revision:"abdb561744a2a5631f90bbce5ed08dca"},{url:"tags/开卡/index.html",revision:"889b9d227d5572353469d8d69a98983c"},{url:"tags/开头/index.html",revision:"80c360b35b0c69e55b00e77897ae4cab"},{url:"tags/张艺兴/index.html",revision:"5481be93839a98632bd658af608fe464"},{url:"tags/归档/index.html",revision:"67205b5a9f9258eeb2c6184a6cc1c300"},{url:"tags/影视剧/index.html",revision:"ccd67e243509e357c16e9428deb70a0e"},{url:"tags/情况/index.html",revision:"fcf721915ae8bcb965841d7daccc6b46"},{url:"tags/打赏/index.html",revision:"83d18459a7cfafcd109c103e53deb205"},{url:"tags/扬声器/index.html",revision:"e373b32fb3e2a4cbd82c229f78da71b9"},{url:"tags/拳头/index.html",revision:"5dfeb0a75c6d721a722e4751bb9db162"},{url:"tags/教程/index.html",revision:"4431c74b1bab8f4035c5b652f5286827"},{url:"tags/文件/index.html",revision:"261f77dbeed0cd334588bc3d0f7f4176"},{url:"tags/无声/index.html",revision:"4ea6c6649c69f0b051cad855da81915a"},{url:"tags/时间同步/index.html",revision:"4a5b166dcc89e95ae0da083df8a83988"},{url:"tags/旷世奇恋/index.html",revision:"1f78286b1d0343eb4a126552d3a5c403"},{url:"tags/显卡/index.html",revision:"3174adab2ca28caf799c8ac39d8afd77"},{url:"tags/杨过/index.html",revision:"9fa8f43806096eb89515f055b10fb925"},{url:"tags/梯子/index.html",revision:"90a4693197c9fa9e3d1865c4b081e1a2"},{url:"tags/求婚/index.html",revision:"b975b715781f26ea447ee98dfd6945a4"},{url:"tags/求婚大作战/index.html",revision:"b1f1844ef2bd364c63d7335acf0b100c"},{url:"tags/注册/index.html",revision:"f86042e2f088cc53bfce07145fd65623"},{url:"tags/测评/index.html",revision:"57fd6260aa4503440a1b581102fdbd0e"},{url:"tags/测试/index.html",revision:"1b957b0f4b65da19f20acc42cb7b1002"},{url:"tags/海力士/index.html",revision:"f6ca18f6ecd8a5ee9a7e87a77a26879f"},{url:"tags/演技/index.html",revision:"2d5f5677008069b5f82e901fa83343b0"},{url:"tags/焊盘/index.html",revision:"e439a7b9e73b0ab11d8bf7d092d70bdf"},{url:"tags/版本/index.html",revision:"a30ac7e70219d75c438a13bc7db8918a"},{url:"tags/狗尾续貂/index.html",revision:"477d617d2d600d7c16e63cdfa353eb34"},{url:"tags/珠海/index.html",revision:"9b2c24cedf8f4ee103e5ad9c2fdc94f7"},{url:"tags/硬盘/index.html",revision:"a5c61089a7c67007277b056a54084116"},{url:"tags/硬盘盒/index.html",revision:"7123c1a9a440dcde4000df886dfe02f1"},{url:"tags/磁力/index.html",revision:"68431a3a36e35711e679f9bcef8d4f33"},{url:"tags/神雕/index.html",revision:"3b57fce0ab8fe334b7137a265c679537"},{url:"tags/科学上网/index.html",revision:"756818684c62366500d497a81e41eed6"},{url:"tags/笔记本/index.html",revision:"55c0a25ca727baddd86b6e75be67da7f"},{url:"tags/精粤/index.html",revision:"5de41d5c9c9e63ca392f1db13b7407a4"},{url:"tags/红米/index.html",revision:"ce1b8334b2b3ebbed6decc12b0a7e46e"},{url:"tags/绵羊/index.html",revision:"b6e43d63dd5f670575724e2f494bd6a5"},{url:"tags/编程器/index.html",revision:"c93d55b53bfb6d2d7a27ae0a18870e02"},{url:"tags/网剧/index.html",revision:"d0cb6319705507e3588a9c67f1606a34"},{url:"tags/网卡/index.html",revision:"3a6676be2ba7bc9214f09d762eb2319d"},{url:"tags/群晖/index.html",revision:"a77a82fdd2adbb57631aa46b62b4cddb"},{url:"tags/英雄联盟/index.html",revision:"9309a17862d63caeaf1bd9d298f74f2b"},{url:"tags/苹果/index.html",revision:"1372a43c43494d0a13968deddcc3ade2"},{url:"tags/软路由/index.html",revision:"9c043c569ea5bb2cf544592d09fd9aa3"},{url:"tags/邵庄/index.html",revision:"4545e653dd5e76c0dc55123778797237"},{url:"tags/金庸/index.html",revision:"24ba604690c7fe4b2dbd350c59969e5d"},{url:"tags/镜像/index.html",revision:"90d9cfd64aa8de60fbe426bc6f21ca85"},{url:"tags/阴雨天/index.html",revision:"f43f96a6586fe82985bf2f3179c1a06a"},{url:"tags/陈都灵/index.html",revision:"8bfc3cc0ee9a867f24f7eb7e143d138c"},{url:"tags/颗粒/index.html",revision:"0969d73feb43e1aa55c44d4ee2e9210f"},{url:"tags/驱动/index.html",revision:"0e7abcdcfc4916049337f68b7c22ca0f"},{url:"tags/魔趣/index.html",revision:"285b645986506b2974e3dcbbe890af44"},{url:"tags/黑群晖/index.html",revision:"b58ae3d2ae68e43c85ab4e18b2c00c4d"},{url:"tags/黑苹果/index.html",revision:"1825aecd86941546d22f17a359c93ae6"}],{}),e.registerRoute(/^https:\/\/blog\.loliko\.cn\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
