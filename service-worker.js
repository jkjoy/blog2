if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>d(e,r),b={module:{uri:r},exports:n,require:l};i[r]=Promise.all(a.map((e=>b[e]||l(e)))).then((e=>(c(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2017/2017-06-05-marry/index.html",revision:"8b2dee0d833e9039d4b7218acd940b78"},{url:"2017/2017-06-26-zhuhai/index.html",revision:"7f71e6f95d127f50968818120fe927db"},{url:"2017/2017-08-17-shabusi/index.html",revision:"abcc6869d02d9ce135c8844b6066ebfe"},{url:"2017/2017-12-02-zhuhai/index.html",revision:"27647f20812d23b330b0613fb157d745"},{url:"2017/cloud-torrent-for-centos-yi-jian-an-zhuang/index.html",revision:"23eb5e547c38ae3ded043ff9975de6fc"},{url:"2018/2018-04-17-shendiao/index.html",revision:"2b32d5d678ca84b7c1b83977cf671bbe"},{url:"2018/2018-05-04-linux-SS/index.html",revision:"13fb8ed3989e7c292983c52afde742eb"},{url:"2018/2018-10-21-lol-s8/index.html",revision:"5bbb6d2d6534aed9cdf40b2a9abd9022"},{url:"2019/2019-01-12-SNH48-xuyang/index.html",revision:"e74eca85edcedc0fe87d8359c838d46a"},{url:"2019/2019-03-03-yitian/index.html",revision:"e47db2080b1a45d7efb92f3d4de0de3f"},{url:"2019/2019-04-03-CentOS-ShadowsocksR/index.html",revision:"234e607c669e40914a0e1af43c8a54a4"},{url:"2019/2019-08-01-SSD/index.html",revision:"8fda91a1d4b31071687dc3a410ea2ecd"},{url:"2019/about/index.html",revision:"d676ea33b5a8d589f5714e46af780cb3"},{url:"2021/2021-03-24-h97m-vh+i5_5575r_oc0.6.7-big_sur_/index.html",revision:"b0fe83119a48771d3f8d111a16e8a839"},{url:"2021/2021-10-10-NEC_VK22_opencore/index.html",revision:"eb4ccc50d0159cf56362d123875fef6f"},{url:"2021/2021-10-10-NEC_VK22t/index.html",revision:"318614677f9192a19bad20ad3c14373a"},{url:"2021/2021-10-11-nec_vk22t-nvme/index.html",revision:"8d34106ab5a46bedfc4aac0bdb142cc8"},{url:"2021/2021-10-13-nec_vk22t_bios/index.html",revision:"a20e064fd8e850b07cedafa68cf6f101"},{url:"2021/2021-10-13-nvme-mod-small/index.html",revision:"36aef27b42173801661933f1de924047"},{url:"2021/2021-10-19-NEC_vk22t_bios_nvme/index.html",revision:"17df0070921c048ba8ec3d4d55224d4f"},{url:"2021/2021-10-19-onda_h410ipc_codec/index.html",revision:"666668e1ce95c23f9d56d7e0eab21dc4"},{url:"2021/2021-12-14-rx560_4g_vbios/index.html",revision:"074ff6b5aa82a0cff3cb5451098efbec"},{url:"2022/2022-01-21-2023-amd-gpu/index.html",revision:"3991ceb732d08e46d2df5d7345d80d56"},{url:"2022/2022-04-12-ssd/index.html",revision:"c5bf4b688f8e6d731c7cdcce89deb6f4"},{url:"2022/2022-06-01-NEC_VK22T-OC0.8.0-macOS12.4/index.html",revision:"ccd7aa3e8b5d4d930b47ceaba2e6e920"},{url:"2022/2022-07-22-H97i_gmaing/index.html",revision:"2f9a4990a30aa9c51fc430cbfb51ad71"},{url:"2022/2022-07-27-Linux-cms/index.html",revision:"ce78363521877de53a00cc26db4acc68"},{url:"2022/2022-07-29-macOS-homebrew/index.html",revision:"54b5ca16d3aa137eabb8cd99ca0689ec"},{url:"2022/2022-08-08-macOS-fliqlo/index.html",revision:"79aaa941f9ae86a44c523119354ed898"},{url:"2022/2022-09-19-Typecho-CommentsByQQ/index.html",revision:"1a575b349cd4d73e78334d9a0680b1c8"},{url:"2022/2022-10-14-office2016_Mac_/index.html",revision:"dfa28198adf3e3104c7cd7b792a60348"},{url:"2022/2022-10-21-b150m-et_m2+rx560/index.html",revision:"f1314c56f27fac99fabae1b50a779fd1"},{url:"2022/2022-11-08-NEC_VK23T-vs-VK22T/index.html",revision:"564884afef19fa834786338f3d2dcdce"},{url:"2022/2022-11-08-VK23-OpenCore0.8.5/index.html",revision:"1e18a3f34d1cbf83b9d2779054a7726b"},{url:"2022/2022-11-15-macOS-Windows-time/index.html",revision:"5af864afe83461f380056841cec35d5c"},{url:"2023/2023-guo-nei-zhu-ce-chatgpt-de-fang-fa/index.html",revision:"e10fef5ce3c25413c164b04d46314545"},{url:"2023/hello-world/index.html",revision:"4598f61b5e26172a798fdeab73e50940"},{url:"2023/mokee-rom/index.html",revision:"87dd232666f75baff594edd04cd5b523"},{url:"2023/qv2ray-ke-hu-duan-ji-nei-he-xia-zai/index.html",revision:"cc2fa441c3ba45fc25dab53c02f0c797"},{url:"about/index.html",revision:"367f2a89a7af1e6b2f0f310492c164a5"},{url:"archives/2017/05/index.html",revision:"501c09c9ed686b4ef19f1838c9506331"},{url:"archives/2017/06/index.html",revision:"1d3aae0f75674f2516a4df3ff9f06b0b"},{url:"archives/2017/08/index.html",revision:"cca2ebdd0e0ca528b4a95b2e1fd84429"},{url:"archives/2017/12/index.html",revision:"fab9b19e9f945ca1e490282b0b8c42d2"},{url:"archives/2017/index.html",revision:"289d0789bf65148994d2032ecc439ccf"},{url:"archives/2018/04/index.html",revision:"c47e0a9c67ad9a44aa93165f328393b6"},{url:"archives/2018/05/index.html",revision:"cb4e4ef2efc91bf1a52a488d0bf9e791"},{url:"archives/2018/10/index.html",revision:"0ac6a0385bd54913cd29605a56b9e99e"},{url:"archives/2018/index.html",revision:"8c43c056f1a30bdbdeb3efea216f7f0d"},{url:"archives/2019/01/index.html",revision:"48c273ba8dd290cfab9d5325cae2b643"},{url:"archives/2019/03/index.html",revision:"08858958273e12ca3b53ff48f620a649"},{url:"archives/2019/04/index.html",revision:"dd656b90cdc7566d4e5ae7a82b8f678a"},{url:"archives/2019/08/index.html",revision:"dd0099a05e53f0a1844428c20207983e"},{url:"archives/2019/index.html",revision:"db14dea84054e688db69192f942e874d"},{url:"archives/2021/03/index.html",revision:"aa0617c8c687e1c79d9272806a679b4a"},{url:"archives/2021/10/index.html",revision:"e58f2263d9255f523c994c500e195772"},{url:"archives/2021/12/index.html",revision:"26763e7082d2cc6be618c2e611b4af3f"},{url:"archives/2021/index.html",revision:"0981fb138da1726aea9ceb16a63ecd57"},{url:"archives/2022/01/index.html",revision:"f1ff3bc602ce529d0b420912ef1b2440"},{url:"archives/2022/04/index.html",revision:"32d497d732ee065f0d4e0805059765d7"},{url:"archives/2022/06/index.html",revision:"c7a2223df7ffcefa2e3d1342edebefda"},{url:"archives/2022/07/index.html",revision:"316d0bba12d9eb0818e5fb4e1f424105"},{url:"archives/2022/08/index.html",revision:"2244ff56ad8dc5e8c63ea9e32fb8b180"},{url:"archives/2022/09/index.html",revision:"6789d15183e7719486625b6c28eb65a2"},{url:"archives/2022/10/index.html",revision:"f7f85cbab94e3b92abffdd382c13eccc"},{url:"archives/2022/11/index.html",revision:"73e8cb1c511eb356d735af0c294c9e4b"},{url:"archives/2022/index.html",revision:"3514fc8514c258cce39720f62472a672"},{url:"archives/2022/page/2/index.html",revision:"2d4239cf185834fb59b46d6b55044436"},{url:"archives/2023/01/index.html",revision:"47029b73a4faa81b4f4906d5477bf4b6"},{url:"archives/2023/04/index.html",revision:"5559944c0030b07746cebde0f5be696d"},{url:"archives/2023/index.html",revision:"1fddbd5bafa63ca3df87948c220acb4b"},{url:"archives/index.html",revision:"a9c2c278e7efb6375996e9733cccbd5a"},{url:"archives/page/2/index.html",revision:"cfdc70f5bb6d5c5bb269e955e136d308"},{url:"archives/page/3/index.html",revision:"7916c69433ee759dd761554c8c6fc27e"},{url:"archives/page/4/index.html",revision:"bf18c67d23c1856c73847587c74d6a04"},{url:"artitalk/index.html",revision:"833ab6aaa05ac9cded2d5e818a5f6415"},{url:"categories/index.html",revision:"a662d11b9c737a74878657d4220e917c"},{url:"categories/macOS/index.html",revision:"e981419a7a660dec473f6a0b68d66ce4"},{url:"categories/分享/index.html",revision:"5cc71bde1b8e944d3c520143f5e336dd"},{url:"categories/推荐/index.html",revision:"364a0b66e3f2e0388dac4e9c8f12d321"},{url:"categories/日志/index.html",revision:"339a2e951006fb7abf507bbea47c3e2d"},{url:"categories/照片/index.html",revision:"41c8731ab11ada3254b2143e952cf8bd"},{url:"css/index.css",revision:"3b48b1543c80829d03f8f535078e43a4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gbook/index.html",revision:"84ddf3f4d83bb3c995c96f39d65f4e5a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b41ffb75654621ab8de67301513fce61"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"1b01c8ea9bfa551bdb26b2bb8117c6ac"},{url:"music/index.html",revision:"084f95746f69345a5d2c7996e165c27f"},{url:"page/2/index.html",revision:"57fb1d14cde8b11f492b26a259cf2ead"},{url:"page/3/index.html",revision:"8e8720ae96db833282e3bea2adbd46b7"},{url:"page/4/index.html",revision:"6a822e6f5c18385c8d6df9faa8c8ca9a"},{url:"photos/index.html",revision:"095d3c5471d1c440e1dab3ae86eb6ef1"},{url:"tags/amd/index.html",revision:"5d3672c02465e1975392e42fa7de8e40"},{url:"tags/bcm943224/index.html",revision:"f689d43d57c352fdd9a43341a7f27a30"},{url:"tags/bios/index.html",revision:"5dba76d7112f26d9416aa98f9e815aab"},{url:"tags/centos/index.html",revision:"53e127a5743fbfc7ea1ba978fb103ee9"},{url:"tags/chajian/index.html",revision:"feca7c8259cabb5591ae86ccbbebc310"},{url:"tags/chatgpt/index.html",revision:"babdf90514294cfa736f03a996afbbb1"},{url:"tags/cloud-torrent/index.html",revision:"821885066e07c360d611a1a54ba18c78"},{url:"tags/clover/index.html",revision:"2d248f0768153fd49c1126ce690c60e6"},{url:"tags/CommentsByQQ/index.html",revision:"68340a46b3cfd477210fe72a0e6eeeab"},{url:"tags/edid/index.html",revision:"7ccf3d3bc58631b318908e44618e0058"},{url:"tags/fliqlo/index.html",revision:"01c9f90962aa31c6929973dba8d86011"},{url:"tags/h97i/index.html",revision:"5b0a29c03e9a8f8bd120e4fdf78f5305"},{url:"tags/hackintool/index.html",revision:"d3d3c6e477510787e415c216763a56fa"},{url:"tags/homebrew/index.html",revision:"77ce0b22ce051ef25f9a480122ed9449"},{url:"tags/i5/index.html",revision:"afdcd10a4bdcda8c1e23ea54feac1c93"},{url:"tags/index.html",revision:"85d9f99f381897b89da6c5ef1686f964"},{url:"tags/linux/index.html",revision:"b0e960a19966f7d135bb084656ac1061"},{url:"tags/LOL/index.html",revision:"d24f90ed39899ed5420a008d9ad8ac3c"},{url:"tags/macos/index.html",revision:"29d8d6d85938689e71cf326e8a548a6c"},{url:"tags/nec/index.html",revision:"a5c33a0ddbd0e9184b1dc1524b14624b"},{url:"tags/note4x/index.html",revision:"c52a8c06391b87a00b045d65927ae275"},{url:"tags/nvme/index.html",revision:"e02cc7b1b3447f29466c42603d75cc51"},{url:"tags/office/index.html",revision:"1d1a7ee86f69e083d3b1d039bb0f926a"},{url:"tags/opencore/index.html",revision:"f92bd20b88c08e5b0c681a740683a4e0"},{url:"tags/rng/index.html",revision:"6cd5e8d1e8e90ee91770a91f8b6d48c2"},{url:"tags/S8/index.html",revision:"123a4ea01ee94f68eb2051387ed54f5f"},{url:"tags/samsung/index.html",revision:"6396e21fc0ba1d0997388f56909bd9d1"},{url:"tags/service/index.html",revision:"657c2136a9bb215ba940b633b8e4c642"},{url:"tags/shadowsocks/index.html",revision:"e9d3bdffba6fced38ba3074425bb06b9"},{url:"tags/SNH48/index.html",revision:"a99223a9510f5f2a87d85fa0e68f8421"},{url:"tags/ssr/index.html",revision:"211fb4a398bf3f6904b818a68e2601a9"},{url:"tags/torrent/index.html",revision:"89d8c8dca0999488681dbad9dbf05bb5"},{url:"tags/typecho/index.html",revision:"b217546442c3c8cc6a237af5cd0522fa"},{url:"tags/vk22/index.html",revision:"4ed7553bbe7959f7673f56025d904ec2"},{url:"tags/vk22t/index.html",revision:"8f7d685193b6111604519a40d5d6ca57"},{url:"tags/vk23/index.html",revision:"ac19d7290cf421ab62614e8cf903fa61"},{url:"tags/wget/index.html",revision:"591965ca8b629877cc26e21a07a06352"},{url:"tags/windows/index.html",revision:"36f7db066ed8ab13cca8497e2ba69fa8"},{url:"tags/zip/index.html",revision:"05d45cb3b9fceb80d3dedba1c2810707"},{url:"tags/下载/index.html",revision:"0773f621ea33b0d3d46dec4b3f071092"},{url:"tags/主控/index.html",revision:"244f184a5edac1c0e69a607ab96d9fd5"},{url:"tags/主板/index.html",revision:"fb0bd14b1e71f627cb29a38733230670"},{url:"tags/何沅君/index.html",revision:"be0ca1394d4ef0098ee98657eebfdf27"},{url:"tags/作品/index.html",revision:"064b8941afe5f4344bb804c52df15210"},{url:"tags/修复/index.html",revision:"92793f86f1583d1351256cd45d6e6888"},{url:"tags/倚天屠龙记/index.html",revision:"c8eb3a636b1c5dc0e7b5ba3b226a6652"},{url:"tags/免驱/index.html",revision:"343385c3f3d29c0f910c199e0819f1a1"},{url:"tags/养女/index.html",revision:"413efbbc584093266b2de72763357b43"},{url:"tags/列表/index.html",revision:"de04015c4f05821cddbc2afe33b6722c"},{url:"tags/剧情/index.html",revision:"4fb15aa2c459214d2942b669d5b845d0"},{url:"tags/厂商/index.html",revision:"0acb3f22e98c3633867b2e361401b0df"},{url:"tags/命令/index.html",revision:"6f30e3d476a544eaebdf2d3b0c8ee0e8"},{url:"tags/固态/index.html",revision:"52841a93953d6ff9a5bcade71287414d"},{url:"tags/地址/index.html",revision:"51e45208c387cadd5bf712a470742ba3"},{url:"tags/夏普屏/index.html",revision:"9f4b1601a2029bc9afc5006d48685a9f"},{url:"tags/安装/index.html",revision:"7a4d299c17f6b26caa60c825fd00f1e4"},{url:"tags/完稿/index.html",revision:"fa1b09d57237835c0bd0d232e2b91428"},{url:"tags/官塘/index.html",revision:"0ed56fa2ebcb57f1b0311aa03d387d04"},{url:"tags/小说/index.html",revision:"46ec124ee0a6c148cc0c8af85a5d3a85"},{url:"tags/小龙女/index.html",revision:"763e89334cc0da90178f935106f7e7ef"},{url:"tags/开卡/index.html",revision:"81f4ceec5b877c60f6e31e6289f03a4f"},{url:"tags/开头/index.html",revision:"a3f434ec390a270e176b64f4ca33ba53"},{url:"tags/张艺兴/index.html",revision:"1340891e0eef9a18663b425dc75b93c8"},{url:"tags/归档/index.html",revision:"46fd70e64850dcfb988a71533ca489b1"},{url:"tags/影视剧/index.html",revision:"f0fa7ddafec066b644b537ec06ed798b"},{url:"tags/情况/index.html",revision:"b98a7a9ad7583fc5301fe4fd120f7cb0"},{url:"tags/打赏/index.html",revision:"ced12030ba28d06896e229c75fa7d498"},{url:"tags/扬声器/index.html",revision:"17874441c3a1f8e52ab12ecc54255f8f"},{url:"tags/拳头/index.html",revision:"87062d2ff880bad28020e4d0171abae7"},{url:"tags/教程/index.html",revision:"d3466dbbef9476b0ada92490a0ba1014"},{url:"tags/文件/index.html",revision:"604ca76274ed5f84c4b9f0d39af72f9c"},{url:"tags/无声/index.html",revision:"fd65111dab5bc56b8a2bfa03a005f7cf"},{url:"tags/时间同步/index.html",revision:"eacaf5942d3c61f07bb1bea16b571339"},{url:"tags/旷世奇恋/index.html",revision:"1da7a82acac6ad894385cf9536b4f2bd"},{url:"tags/显卡/index.html",revision:"f6ca5a62f05bfb13f3c42a1c5c29b43d"},{url:"tags/杨过/index.html",revision:"075e4a1c365f01e362c2d3d63e6533b9"},{url:"tags/求婚/index.html",revision:"5fdfd93c985938d844c42be2281a5ad7"},{url:"tags/求婚大作战/index.html",revision:"3b6220c7b7109ba36bfb3641ca1be501"},{url:"tags/注册/index.html",revision:"36d7adfacd0152bb18c20d0d6a9bc196"},{url:"tags/测评/index.html",revision:"7daa423b67d9407d81f83e125a9f4438"},{url:"tags/海力士/index.html",revision:"f62342aaf0e7cd2a29b8aab1b289cf04"},{url:"tags/演技/index.html",revision:"90f192da3cc6079946050877f84a4d9e"},{url:"tags/焊盘/index.html",revision:"be2dcd304fe1c60dfb41bec65e035fa4"},{url:"tags/版本/index.html",revision:"95d42e02417b1914631e7a54208a5216"},{url:"tags/狗尾续貂/index.html",revision:"34da6646a4f24abe6212f638b0ea5b0d"},{url:"tags/珠海/index.html",revision:"aa7c0d70e03d76e6a7391e0613ec4951"},{url:"tags/硬盘/index.html",revision:"67cfc8e5712dfdfac10460c6488b4b0b"},{url:"tags/硬盘盒/index.html",revision:"01994024fa0db4785066ca65a0da4a78"},{url:"tags/磁力/index.html",revision:"02f3b4c3cd669344a492bc555d76a505"},{url:"tags/神雕/index.html",revision:"2f9dd4c858f23f19f64d6b8b64a18dd2"},{url:"tags/笔记本/index.html",revision:"391a6970e6a48e167c4ce1f5a1f094ed"},{url:"tags/精粤/index.html",revision:"7b94b956865fa4f7e35b820b73c20365"},{url:"tags/红米/index.html",revision:"407b7f267cb4ad1ee57a883796440114"},{url:"tags/绵羊/index.html",revision:"1470527badc9706b67676bba936f8048"},{url:"tags/编程器/index.html",revision:"f53999bebbd7cbb8d2a4f20163dd3511"},{url:"tags/网剧/index.html",revision:"f7562c757c9260bf8535867b3b076e00"},{url:"tags/网卡/index.html",revision:"8e141dd525cff54eba90065b2e467ced"},{url:"tags/英雄联盟/index.html",revision:"73d40e5f8bed67e30b9852cf7eb2bebf"},{url:"tags/苹果/index.html",revision:"e0aead8dbad6b883b7469ed384c4a321"},{url:"tags/邵庄/index.html",revision:"cdc33b473d90cd74fb3709dce7d5b6e2"},{url:"tags/金庸/index.html",revision:"da2c37d3901b66e08d3c93d4fdc0339a"},{url:"tags/阴雨天/index.html",revision:"36481700fda644556ad03b141c6c2cdf"},{url:"tags/陈都灵/index.html",revision:"b47f0a9993bdfcbdc8a5fc730c3fb278"},{url:"tags/颗粒/index.html",revision:"0d1cf9466594fc4b3c1b4bc2d66ba403"},{url:"tags/驱动/index.html",revision:"97e226a16fe22a70f785d3086a63d8cc"},{url:"tags/魔趣/index.html",revision:"f508eadc793a8f2e3aea413a818cee9f"},{url:"tags/黑苹果/index.html",revision:"c87393bee0d241b826ec025dfb7fb13c"}],{}),e.registerRoute(/^https:\/\/blog\.loliko\.cn\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
