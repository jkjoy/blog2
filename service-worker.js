if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const l=e=>d(e,c),s={module:{uri:c},exports:n,require:l};i[c]=Promise.all(a.map((e=>s[e]||l(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2017/cloud-torrent-for-centos-one-click-installation/index.html",revision:"7c89abfc4778e146cea32a7f377e7753"},{url:"2017/kill/index.html",revision:"9f7aaae450ddbea0b12de6cf77dda771"},{url:"2017/proposal-battle/index.html",revision:"91bc64e54fcf23c979684bd3a85874bd"},{url:"2017/zhuhai-morning/index.html",revision:"91420b9470790a9b2d760890a7da42cc"},{url:"2017/zhuhai-rainy-day-chinese-fa-du/index.html",revision:"dea6342f81178985a258a4e55e2dc3f4"},{url:"2018/after-the-kuchong-of-league-legends-global-finals/index.html",revision:"4e3150b4f5b295020a412ac3b37a8970"},{url:"2018/linux-next-click-to-build-ss/index.html",revision:"165b32ff965804b2379bf36c68668468"},{url:"2018/the-condor-heroes-is-actually-a-ethical-novel/index.html",revision:"9e98a38d382ae2c88c4544f87b0c6ef8"},{url:"2019/about/index.html",revision:"024d1e3578e5b4873fae0853da580e09"},{url:"2019/centos-one-click-installation-shadowsocksr-service-with-singlemulti-port-management/index.html",revision:"597300c7d84c480cd5a0591688874fdb"},{url:"2019/little-sheep-snh48-xu-yang-yuzhuo/index.html",revision:"5ccbd1180cecd9e964817b2b4313c128"},{url:"2019/remember-to-restore-the-ssd-solid-state-re-opening-card/index.html",revision:"cd7cba0ca417ebcd9ae25d4662f216dd"},{url:"2019/the-new-version-of-yi-tian-tu-long-ji-actor-yan-value-online-deeply-strip-xiaohua-dan/index.html",revision:"333b8a2defb37f0ee14b193b1fdce6b0"},{url:"2021/about-nec-vk22t-add-nvme-driver/index.html",revision:"de8dbe34964d8c7f37f134752d20241f"},{url:"2021/fat-cat-rx560-4g-vbios-backup/index.html",revision:"30e8375096995e1eca27e652fe32eae4"},{url:"2021/jingyue-h97mvhi5-5575r-oc067-guide-big-sur111/index.html",revision:"b931c29c780c70ca11a8ef8f83de0c90"},{url:"2021/nec-vk22-black-apple-opencore-guide/index.html",revision:"f6a51706a726895f8202b249a83fad32"},{url:"2021/nec-vk22t-bios-add-nvme-module-support/index.html",revision:"f22c21bb01be1904adabbef0a8a9d42f"},{url:"2021/nec-vk22t-bios-backup/index.html",revision:"a1f11f81a7cf34482963c7865de4edf3"},{url:"2021/nec-vk22t-evaluation/index.html",revision:"cc6fe19ec8f92f5ff2493f4177363a7e"},{url:"2021/nvme-module-small/index.html",revision:"47cd8611c182ecffb50947181b9ffc8d"},{url:"2021/onda-h410ipc-codec-extraction/index.html",revision:"f08667e8e423508c5d447fd28a9a8adb"},{url:"2022/2023-black-apple-amd-free-drived-card-buying-recommendation/index.html",revision:"387dc658e951957513fa447896723766"},{url:"2022/asus-b150met-m2rx560-black-apple-oc085-guide/index.html",revision:"28146a85489a07edab21643dcc7285d0"},{url:"2022/black-apple-solid-state-pit-guideline/index.html",revision:"a8afffbce8ec865bfdbd18e060a79871"},{url:"2022/jingyue-h97i-gmain-black-apple-guide/index.html",revision:"ba2f493c85f6f8e20da598307354ba7e"},{url:"2022/local-installation-package-command-under-linux/index.html",revision:"10e76991a0f129e556cd664b9ad0e53d"},{url:"2022/macos-and-windows-dual-systems-are-not-synchronized/index.html",revision:"3b2b6d0b29b6c1bfe4a0a782eaec1919"},{url:"2022/macos-lock-screen-clock-fliqlo/index.html",revision:"4e53e81c8168e9576e15675d0ae52796"},{url:"2022/macos-one-click-installation-homebrew-domestic-mirror/index.html",revision:"807b7302cea7d8692de9341d34073a3f"},{url:"2022/nec-vk22t-black-apple-oc080-guide-macos124/index.html",revision:"10bcfaad3afc719f2842f9baafbd8696"},{url:"2022/nec-vk23t-comparison-experience-vk22t/index.html",revision:"03dc4f6b4ae72ced845d69db405924c7"},{url:"2022/office2016-mac-version-download-install-crack-activation/index.html",revision:"f426f17133c3aeca5a907e26afcd25eb"},{url:"2022/typecho-plug-in-commentsbyqq-modified-version/index.html",revision:"b5c633c54d9adf981165530d3c9e1beb"},{url:"2022/vk23-black-apple-opencore085-guide-macos1261/index.html",revision:"57f0058d02ee31412995c88ce9e702b4"},{url:"2023/2023-methods-to-register-chatgpt-in-china/index.html",revision:"dc0e1f108264386c60630d8fabd75b61"},{url:"2023/hexo-use-guide/index.html",revision:"3388e8f6acfb6a56fdec8d9442c04134"},{url:"2023/qv2ray-client-and-kernel-download/index.html",revision:"eccb10693b11b496bdc91599067231e8"},{url:"2023/the-magic-fun-has-poured-androids-flashing-era-and-officially-announced-end/index.html",revision:"56789517cd316ed4ede99fc34cc9943b"},{url:"about/index.html",revision:"a78b8943d94adf3dfe65b22c0570346d"},{url:"archives/2017/05/index.html",revision:"131ab540e30457b4f2c4713345903a8b"},{url:"archives/2017/06/index.html",revision:"be514569e72172da049d08046077658f"},{url:"archives/2017/08/index.html",revision:"63ec57eb490f0208833f3519b31c7800"},{url:"archives/2017/12/index.html",revision:"64bbc939bf2964df33f1c2e331a20a22"},{url:"archives/2017/index.html",revision:"38334ed28724cee6e193467a86a0b8c3"},{url:"archives/2018/04/index.html",revision:"411c48d2249521f83bbc81752db84567"},{url:"archives/2018/05/index.html",revision:"3e647dd5143796375f7e171d0435aeb9"},{url:"archives/2018/10/index.html",revision:"0de940599584574f49df6bda72128e69"},{url:"archives/2018/index.html",revision:"cb6b82de0857fb6ce087429baa569765"},{url:"archives/2019/01/index.html",revision:"e52f8c0d0a7bfeec8c3efddcb1064846"},{url:"archives/2019/03/index.html",revision:"bb67395c175e26cfa60339de2f469502"},{url:"archives/2019/04/index.html",revision:"7884b776ea69557b61d2dbc4cc4e919f"},{url:"archives/2019/08/index.html",revision:"b28455c8d3b3e13560e1d81c13621278"},{url:"archives/2019/index.html",revision:"97a99e29d49e006d42bfb9a376097b7c"},{url:"archives/2021/03/index.html",revision:"e137417dd4e7159c2c9e20972662febd"},{url:"archives/2021/10/index.html",revision:"bab8cd842069cf8edc91d2860be4d15b"},{url:"archives/2021/12/index.html",revision:"40d4c502b55f38c6bfdd2468f077dc31"},{url:"archives/2021/index.html",revision:"16a0e29b19bbab523d858fda06a00298"},{url:"archives/2022/01/index.html",revision:"cfd4c18c93bddad53c7ee1ee69e84e93"},{url:"archives/2022/04/index.html",revision:"ea1050059ad60c3299a9279e2019426a"},{url:"archives/2022/06/index.html",revision:"d59c19eb06d859a7c946e9f659baaf8b"},{url:"archives/2022/07/index.html",revision:"fb144497f0842a063f81d0c6c453de9b"},{url:"archives/2022/08/index.html",revision:"cea2eb29dcd687f340e855fda4d22414"},{url:"archives/2022/09/index.html",revision:"5790d40da166f8c92e37af7567b0113f"},{url:"archives/2022/10/index.html",revision:"d09bf66b0f4fb42b9d0a0b89ec62946d"},{url:"archives/2022/11/index.html",revision:"6012126e37ccd6c34fcccd57ed4371d3"},{url:"archives/2022/index.html",revision:"20ee05aa21ec31a833a9447218644316"},{url:"archives/2022/page/2/index.html",revision:"8689489282070ee58dce9bfd3815af16"},{url:"archives/2023/01/index.html",revision:"83a0a6d52454ce92877dcbf881885fd4"},{url:"archives/2023/04/index.html",revision:"322db931d56f47a48a94674605872f3d"},{url:"archives/2023/index.html",revision:"9610eb6404e4349a25abb6cdf2e9dcfb"},{url:"archives/index.html",revision:"a0594a5f90044cc1e6c57de41211a517"},{url:"archives/page/2/index.html",revision:"82382d19b63615f85a760c5baedc7da0"},{url:"archives/page/3/index.html",revision:"0008e0dbf9d37ab857d22169290921fa"},{url:"archives/page/4/index.html",revision:"b87a28b5a989680ef6db74ed7bde1da5"},{url:"artitalk/index.html",revision:"72f86aa035559107d242b4a7252cb764"},{url:"categories/hexo/index.html",revision:"90220500c86e594d689a0f6c0faae23b"},{url:"categories/index.html",revision:"8928c8e3058223ff9ec4879a1e573bc7"},{url:"categories/linux/index.html",revision:"c63c3cab7251be393f3a7e20a064fe65"},{url:"categories/Linux/index.html",revision:"17740ff6f75714dc629248ff331f4430"},{url:"categories/macOS/index.html",revision:"8adba973671f9eb8efb8633aa02c7702"},{url:"categories/分享/index.html",revision:"d97d2cf98c9feee573e0706f5ea2fa69"},{url:"categories/分享/page/2/index.html",revision:"d0d9e05958d9538e8b9424ca97c55d44"},{url:"categories/推荐/index.html",revision:"de1fa993f4c2df249601e4f587dc7061"},{url:"categories/日志/index.html",revision:"32cb5a92e5cb694e019867e15921f19b"},{url:"categories/照片/index.html",revision:"8e167a378ebd9dceef733f9f01435322"},{url:"css/index.css",revision:"e96019e71b38a7460e865aa01ef2c9de"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gbook/index.html",revision:"e273a6aa7b91ea190b2b22f8f32dc681"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"fa6a1680ea8edd92b1fa24f54a17adf1"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"4468d47e9e138fd30c2d71ffbf158d23"},{url:"link/links.html",revision:"9088ae5d0aa4198a188d996f590cd23c"},{url:"music/index.html",revision:"90997a6225db39e27c1b73df318243d6"},{url:"page/2/index.html",revision:"1b9217bcf45d852e0f6218570ec491a8"},{url:"page/3/index.html",revision:"077a2141ed8597d8ddb53a8cbcc517e0"},{url:"page/4/index.html",revision:"c6ff54e2f834a6e65370bc74236ffa17"},{url:"photos/index.html",revision:"3760394be67ecdef2f1624cbeccd64ee"},{url:"tags/amd/index.html",revision:"f61b746a2fcd2d748ef7c230f13d96f2"},{url:"tags/bcm943224/index.html",revision:"4ed5a023fc05edf1e071aa29ef0c42b6"},{url:"tags/bios/index.html",revision:"e18c4d4f51d3cd4e1bd617a925bd731f"},{url:"tags/centos/index.html",revision:"2001922b619b8160f3e8625ebeac1f1c"},{url:"tags/chajian/index.html",revision:"6484095231aba3b37187f75baf02b849"},{url:"tags/chatgpt/index.html",revision:"d4a129e0413b2043ae47345d10c1a82c"},{url:"tags/cloud-torrent/index.html",revision:"beba00ec07f2853bbf5fd776ef35cb02"},{url:"tags/clover/index.html",revision:"3cf501d7c83b848523a39a357125de41"},{url:"tags/CommentsByQQ/index.html",revision:"c3d6819c8ae2dd9406544a29406d8dca"},{url:"tags/edid/index.html",revision:"24a37fef23924e550587c886c6ca8cf1"},{url:"tags/fliqlo/index.html",revision:"8aa18fc6d97c88cc0a2fbe97ab19719e"},{url:"tags/h97i/index.html",revision:"f0935e3821f21ea316ce2248a057e083"},{url:"tags/hackintool/index.html",revision:"e186a8ac258cb10883025090b08c11c2"},{url:"tags/hexo/index.html",revision:"a648a9a78b3a3f70d6796c1dd85c5b5b"},{url:"tags/homebrew/index.html",revision:"581d1923ca15ea95a8fe570082316748"},{url:"tags/i5/index.html",revision:"95c9fc01106c76144e2e62f0e3382138"},{url:"tags/index.html",revision:"c9ebeabc134880a4498c2a175883b2b7"},{url:"tags/linux/index.html",revision:"67e45d3cb0c829c18c896dc547de3a80"},{url:"tags/LOL/index.html",revision:"a99d9c831a8b623cee4ec42fed691875"},{url:"tags/macos/index.html",revision:"01ecf40042673b85d962ff795653882d"},{url:"tags/nec/index.html",revision:"2e2d334e9de2b01dda64681a9204cde0"},{url:"tags/note4x/index.html",revision:"5bcfba92ef040b8002a36747445b2174"},{url:"tags/nvme/index.html",revision:"53597dfc37ce801fabcde3de058949eb"},{url:"tags/office/index.html",revision:"27eb105dfe925427f2632daead891886"},{url:"tags/opencore/index.html",revision:"27ce697c33a3ccdf056e06ae46d8ec86"},{url:"tags/rng/index.html",revision:"46790baf856a7c41d7d7db0471d76c84"},{url:"tags/S8/index.html",revision:"42d5888fdefbfc1237135979c0f085dc"},{url:"tags/samsung/index.html",revision:"b9234cc4253fa29b26ffdca58bfc4ec3"},{url:"tags/service/index.html",revision:"947acf8ad93f3d0a24b545e2d1743ff7"},{url:"tags/shadowsocks/index.html",revision:"826f75159fc0784328831a226e4e6c9b"},{url:"tags/SNH48/index.html",revision:"656bc027795e0b6cf10068efbd08bb60"},{url:"tags/ssr/index.html",revision:"e04ba1e6ed12d0df0fdabb5865df8266"},{url:"tags/torrent/index.html",revision:"989468556101a5eea1b852bd5189a78c"},{url:"tags/typecho/index.html",revision:"bb63c9fe5e47c76eb56a8a8377eb2d02"},{url:"tags/V2RAY/index.html",revision:"9033f3419d0a1f2e45751a2b8e63bb6d"},{url:"tags/vk22/index.html",revision:"fb58267d08f043d8ed6e3386594cac2a"},{url:"tags/vk22t/index.html",revision:"e151c3e9dff8b32f0890e2c25001c090"},{url:"tags/vk23/index.html",revision:"02a9302a4efd2790e37c521831b7d012"},{url:"tags/wget/index.html",revision:"5208dc8330d62ee33fb4cbccbe59962f"},{url:"tags/windows/index.html",revision:"2c8577f5889adb64bd00df21a3eb05a2"},{url:"tags/zip/index.html",revision:"7b8a180097d18d3c295ef918babe2bc5"},{url:"tags/下载/index.html",revision:"f732aa31630be177f5916893331ef2d2"},{url:"tags/主控/index.html",revision:"b40952c551b757e2f30f7a7955633d68"},{url:"tags/主板/index.html",revision:"2ab02aebeb0ede6a214b8e5165f0a8f4"},{url:"tags/何沅君/index.html",revision:"71270924f489037f155f489be739d2f4"},{url:"tags/作品/index.html",revision:"0619c08b9614afe4458a49b4c213a590"},{url:"tags/修复/index.html",revision:"f2d5056dc981a707c8ec29a78df7ebf8"},{url:"tags/倚天屠龙记/index.html",revision:"2fb75c459e99c539372425637ae7c990"},{url:"tags/免驱/index.html",revision:"105af1aeaf989e40463d1e2ca213489a"},{url:"tags/养女/index.html",revision:"d9180fde7be2a8334f6ccfeefad202f7"},{url:"tags/列表/index.html",revision:"71d3f2903fe43d8c5cdf307b2c4b477d"},{url:"tags/刷机/index.html",revision:"bb7467837f655bf93cfb6db2d21b1f96"},{url:"tags/剧情/index.html",revision:"a0593854c86b9417431e8f176dc31860"},{url:"tags/厂商/index.html",revision:"762a13f9c91030bcc047b82fb5b9172d"},{url:"tags/命令/index.html",revision:"e629844eb22fa657e8cd29a31447c5c5"},{url:"tags/固态/index.html",revision:"b02ce9a19dd4bb8f00b24e519a5d10c8"},{url:"tags/地址/index.html",revision:"3fbf91878ff1e50505fbcc2851beec4e"},{url:"tags/夏普屏/index.html",revision:"8db2353efe5a361c573f241fea7ba7db"},{url:"tags/安卓/index.html",revision:"6e192a76a817a28739dd1ec6a83b77e0"},{url:"tags/安装/index.html",revision:"765f3d31dc7e6b30a5628242bf62df4c"},{url:"tags/完稿/index.html",revision:"a885131954b66cc5ad18173dd02eeda8"},{url:"tags/官塘/index.html",revision:"91ca883ec0994616f52329fcef2eb16c"},{url:"tags/小说/index.html",revision:"25336310ecef17db556df412b40700fe"},{url:"tags/小龙女/index.html",revision:"d38f3b451407e6be282c05d49b58de07"},{url:"tags/开卡/index.html",revision:"8c00418b6584967f400b37210aa38692"},{url:"tags/开头/index.html",revision:"64a259facf764a218034fff324e06ef3"},{url:"tags/张艺兴/index.html",revision:"571b503e82afad826bf55dc24dfeb63b"},{url:"tags/归档/index.html",revision:"b9cddd293f175fd672e378adeafd4bb4"},{url:"tags/影视剧/index.html",revision:"07e507f67687ec6aa8d65900bc90201f"},{url:"tags/情况/index.html",revision:"ba520db482bc4a1e7830f2d4946d919d"},{url:"tags/打赏/index.html",revision:"b08f7c971915b3f14934dd626ded55ea"},{url:"tags/扬声器/index.html",revision:"2cbf456cc7afa464c40cdc0ed18b0fb3"},{url:"tags/拳头/index.html",revision:"9ef6aca2c8780c94987a2898ada96352"},{url:"tags/教程/index.html",revision:"ad0fcc49e80e7d8cd933f011e657d100"},{url:"tags/文件/index.html",revision:"cfae656869d1e8e3d7ed6ff1bf5f2adb"},{url:"tags/无声/index.html",revision:"6e6a9292133ee1bbd6d7de94923d63c4"},{url:"tags/时间同步/index.html",revision:"a9e3f3345d2248663e782d364ed79a11"},{url:"tags/旷世奇恋/index.html",revision:"35e821d1856bc0e219cc10f98744b749"},{url:"tags/显卡/index.html",revision:"b314f96c89fee2cba249d04ed6b59b6d"},{url:"tags/杨过/index.html",revision:"eb254f0d45d2330620d4072dfe45171d"},{url:"tags/梯子/index.html",revision:"52d27dec8b7243621146e0816011b517"},{url:"tags/求婚/index.html",revision:"b350276d7ecc7ef204566abb77f81323"},{url:"tags/求婚大作战/index.html",revision:"678a09f60d09bdaf53d370ee1510b715"},{url:"tags/注册/index.html",revision:"45bf503859acdc31d79d4aa6bcaad614"},{url:"tags/测评/index.html",revision:"201fdfe090831e086a5ce73d9893f5b1"},{url:"tags/海力士/index.html",revision:"0ddd666655d153985220bb94fa96df68"},{url:"tags/演技/index.html",revision:"1f53964c1cbed21761fb51fe4936587a"},{url:"tags/焊盘/index.html",revision:"99911cfc4ba94964ba2c28bc633bb72f"},{url:"tags/版本/index.html",revision:"d12a67a9ae742a8ab07b23ee686df1c4"},{url:"tags/狗尾续貂/index.html",revision:"3093131b6bf05b6a194e488f68f735e0"},{url:"tags/珠海/index.html",revision:"30cff55378dafac33dd836621bcca0d2"},{url:"tags/硬盘/index.html",revision:"af38be3f72ace69c2c9972bcbbb6a8ab"},{url:"tags/硬盘盒/index.html",revision:"4b5e69750a63cda857b5b3389df0609d"},{url:"tags/磁力/index.html",revision:"8d00aa4a2ebc027dd2ea38542c009483"},{url:"tags/神雕/index.html",revision:"eb1b6b4a93a63d346da47d2269344689"},{url:"tags/笔记本/index.html",revision:"dfed6fd0262a2df111050d15146e42e7"},{url:"tags/精粤/index.html",revision:"2ddf7e66f7a8b4dbafe28b9b880b702f"},{url:"tags/红米/index.html",revision:"e573e94ea4bc2d1ae6f35710990bca72"},{url:"tags/绵羊/index.html",revision:"6aa6065990c09821a71dd71ff5d53be5"},{url:"tags/编程器/index.html",revision:"494cced61272c64cf67a70b73c8e89a0"},{url:"tags/网剧/index.html",revision:"b8c0a5725f048646dfaafb130af658a7"},{url:"tags/网卡/index.html",revision:"290af3bea8c63222ed2d581a15757927"},{url:"tags/英雄联盟/index.html",revision:"53b556471cbf769c32a57a8bda2baec7"},{url:"tags/苹果/index.html",revision:"957dee4bc1f8faaec8115e80f18be0d4"},{url:"tags/邵庄/index.html",revision:"b735f1132ab79e1edaf6c16d3e19dfd0"},{url:"tags/金庸/index.html",revision:"1c2a832d3a0a2325c3ac4362caed8e70"},{url:"tags/阴雨天/index.html",revision:"f9501f848a4d67a8d189a4730c7a2362"},{url:"tags/陈都灵/index.html",revision:"aea596bad804211b09a4fa7ae143354f"},{url:"tags/颗粒/index.html",revision:"1ec6f25a7589860cbb45b910542487d2"},{url:"tags/驱动/index.html",revision:"bddc8546dde60830273a6c4f0eb7d708"},{url:"tags/魔趣/index.html",revision:"b579a71282c35575e7c3a45af2574090"},{url:"tags/黑苹果/index.html",revision:"695519af690dc769d5b55a436b0e1052"}],{}),e.registerRoute(/^https:\/\/blog\.loliko\.cn\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
