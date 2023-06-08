var bbMemo = {
    memos: "https://demo.usememos.com/",
    limit: "10",
    creatorId: "101",
    domId: "#bber"
};
if (typeof bbMemos !== "undefined") {
    for (var key in bbMemos) {
        if (bbMemos[key]) {
            bbMemo[key] = bbMemos[key]
        }
    }
}
function loadCssCode(e) {
    var t = document.createElement("style");
    t.type = "text/css";
    t.rel = "stylesheet";
    t.appendChild(document.createTextNode(e));
    var o = document.getElementsByTagName("head")[0];
    o.appendChild(t)
}
var allCSS = ".memo-container{margin-top:0.5rem;display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));border:1px solid #f0f0f0;padding:1rem;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-property:box-shadow,transform;transition-property:box-shadow,transform;}.memo-container:hover,.memo-container:focus,.memo-container:active{-webkit-transform:scale(1.01);transform:scale(1.01);}.memo-container>.memo-header{margin-bottom:0.5rem;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:flex-start;font-size:.875rem;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity));}.memo-content-text>p:last-child{margin-bottom:0;}.memo-content-text>p{margin-bottom:0.25rem;height:auto;min-height:24px;width:100%;white-space:pre-wrap;overflow-wrap:break-word;font-size:1rem;line-height:1.5rem;}.memo-content-text a.link{color:var(--post-link-color);}.memo-content-text a.link:hover{color:var(--link-hover-color);}.memo-content-text .img{display:block;max-width:100%;cursor:pointer;border-radius:0.25rem;height:auto;vertical-align:middle;webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;outline:2px solid transparent;outline-offset:2px;-webkit-tap-highlight-color:transparent;}code{color:rgb(170,170,170);}.memo-content-text pre p{display:inline-block;}.memo-content-text pre p:empty{display:none;}button.load-btn.button-load{background-color:#ffffff;color:rgb(150,150,150);border:1px solid #f0f0f0;border-radius:10px;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-property:box-shadow,transform;transition-property:box-shadow,transform;padding:10px 24px;}button.load-btn.button-load:hover,button.load-btn.button-load:focus,button.load-btn.button-load:active{-webkit-transform:scale(1.01);transform:scale(1.01);}.memo-content-text a{color:#007bff;}.post-preview{max-width:780px;height:210px;margin:1em auto;position:relative;display:flex;background:#fff;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.25);}.post-preview--meta{width:75%;padding:25px;overflow:hidden;}.post-preview--middle{line-height:28px;}.post-preview--title{font-size:18px;margin:0!important;}.post-preview--title a{text-decoration:none;}.post-preview--date{font-size:14px;color:#999;}.post-preview--excerpt{font-size:14px;line-height:1.825;}.post-preview--excerpt p{display:inline;margin:0;}.post-preview--image{height:210px!important;width:auto;float:right;border-top-right-radius:2px!important;border-bottom-right-radius:2px!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important;}@media (max-width:550px){.post-preview{width:95%;}.post-preview--excerpt{display:none;}.post-preview--middle{line-height:19px;}}.rating{display:block;line-height:15px;}.rating-star{display:inline-block;width:75px;height:15px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAClCAYAAAAUAAAYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNrs3T9rFEEcxvG7qEQIglaCICKkin9AUEtBKxU7wS61VlYivgWj70TtNFj5BqzE7qxEWwsxKIoYn4UtluFmbm8nczvzm+/BjxyuDwNzu3uXD0+46f7LC5PA45Hm+WTYw1x2LRDc0jzTXB+wqMlsaLPutz8fDFjYZHYauAz3NBvt83XNnyUWNpn1nVm3OsHmsb3EomazzZnVXKMPNcc0xzUnNKc0Rzv/77fms+Z7O3vt9b1eU7bZrNN68l5zcolX4ofmsuZXTdnmMvyi2dR86Bmcac62P6vKrnVubpc0bxYE32nOab45N8YqsvPeDfcD4SOav4HjprPuu+H5BTt9LXDMfNbdLPfT678Fx6vKupt1o/O8+R3pkOaJ5/iktqx7z/qp+aq5q/nY+fczmheaK03Gs7D5rLtZdzSvA6/Ebc2u55j57HQB0TzW7AzkjiKzny6+2hlKNE8juMNcFqKBaIZndRlCNBBNgmx7ZkE0fbLtZkE0EA1EM17WuQwhGogGooFoss6296y52cNO+J6HLJoPaFdbsvA9zGerIxrPh85eWYgGooFoDiQbuAxp0UA0EVmdWbRo+ma1WbRoIBqIZtzsnHdDWjQQDUQD0WSbde5ZS2UhmtqJJtSEiVkXooFoIJre2VATJmZdiKZ2ogk1YSb8oVMvDeUPnSAaiCaPJkzMuhANRAPRQDQpsqEmTMy6EI11oolpwkA0EA1EcyDZmCYMRAPR+LMxTZjqiCamCQPRQDQQzehNGIgGooFoIJpVZ2OaMBBN7USTqgkD0UA0EE3vbKomDERTO9GkasKYJJpUTRiIBqKBaEZvwkA0EA1EA9GkyKZqwkA01olmrCYMRAPRQDR9LkO+0QmiKbAJUyTRjNWEgWggGohm9CYMRAPRQDQQzZDsWE0YiMYC0eTYhIFoIJrKiCbHJgxEY4FocmzCZEs0OTZhIBqIpjKiybEJA9FANBANROPL5tiEgWhKIJoSmzAQDURjjGhKbMJANCUQTYlNmNGIpsQmDEQD0RgjmhKbMBANRAPR1Es0JTZhIJpciMZaEwaigWgKJBprTRiIJheisdaESUo01powEA1EUyDRWGvCQDQQDURjm2isNWEgmlURzWw2q4pZIBqIJkOiCVyGJpkFolkV0ejMMvel28mIRptl7ku3IRqIpjCimfNuaJpZIBqIBqIpm2ice5Z5ZonJupvVkMRu4JW4qXnrOWY++1+AAQBw9BJSCTeN9wAAAABJRU5ErkJggg==);overflow:hidden;}.allstar10{background-position:0px 0px;}.allstar9{background-position:0px -15px;}.allstar8{background-position:0px -30px;}.allstar7{background-position:0px -45px;}.allstar6{background-position:0px -60px;}.allstar5{background-position:0px -75px;}.allstar4{background-position:0px -90px;}.allstar3{background-position:0px -105px;}.allstar2{background-position:0px -120px;}.allstar1{background-position:0px -135px;}.allstar0{background-position:0px -150px;}.rating-average{color:#777;display:inline-block;font-size:13px;margin-left:10px;}";
loadCssCode(allCSS);
var limit = bbMemo.limit;
var memos = bbMemo.memos;
var page = 1
  , offset = 0
  , nextLength = 0
  , nextDom = "";
var bbDom = document.querySelector(bbMemo.domId);
var load = '<div class="bb-load"><button class="load-btn button-load">加载中……</button></div>';
if (bbDom) {
    getFirstList();
    meNums();
    var btn = document.querySelector("button.button-load");
    btn.addEventListener("click", function() {
        btn.textContent = "加载中……";
        updateHTMl(nextDom);
        if (nextLength < limit) {
            document.querySelector("button.button-load").remove();
            return
        }
        getNextList()
    })
}
function getFirstList() {
    bbDom.insertAdjacentHTML("afterend", load);
    var e = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit;
    fetch(e).then(e=>e.json()).then(e=>{
        updateHTMl(e.data);
        var t = e.data.length;
        if (t < limit) {
            document.querySelector("button.button-load").remove();
            return
        }
        page++;
        offset = limit * (page - 1);
        getNextList()
    }
    )
}
function getNextList() {
    var e = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit + "&offset=" + offset;
    fetch(e).then(e=>e.json()).then(e=>{
        nextDom = e.data;
        nextLength = nextDom.length;
        page++;
        offset = limit * (page - 1);
        if (nextLength < 1) {
            document.querySelector("button.button-load").remove();
            return
        }
    }
    )
}
function meNums() {
    var e = memos + "api/memo/amount?creatorId=" + bbMemo.creatorId;
    fetch(e).then(e=>e.json()).then(e=>{
        if (e.data) {
            document.getElementById("memonums").innerHTML = e.data
        }
    }
    )
}
function updateHTMl(e) {
    var t = ""
      , o = "";
    const r = /#([^\s#]+?) /g;
    const a = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?">.*<\/a>/g;
    marked.setOptions({
        breaks: true,
        smartypants: true,
        langPrefix: "language-"
    });
    for (var i = 0; i < e.length; i++) {
        var n = e[i].content.replace(r, "<span class='tag-span'>#$1</span> ");
        n = marked.parse(n).replace(a, "<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' style='position:absolute;height:100%;width:100%;'></iframe></div>");
        if (e[i].resourceList && e[i].resourceList.length > 0) {
            var s = e[i].resourceList;
            var l = ""
              , m = ""
              , d = 0;
            for (var p = 0; p < s.length; p++) {
                var c = s[p].type.slice(0, 5);
                if (c == "image") {
                    l += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="' + memos + "o/r/" + s[p].id + "/" + s[p].publicId + "/" + s[p].filename + '"/></figure>';
                    d = d + 1
                }
                if (c !== "image") {
                    m += '<a target="_blank" rel="noreferrer" href="' + memos + "o/r/" + s[p].id + "/" + s[p].publicId + "/" + s[p].filename + '">' + s[p].filename + "</a>"
                }
            }
            if (l) {
                var b = "";
                if (d !== 1) {
                    var b = "grid grid-" + d
                }
                n += '<div class="resimg ' + b + '">' + l + "</div></div>"
            }
            if (m) {
                n += '<p class="datasource">' + m + "</p>"
            }
        }
        t += '<div class="memo-container"><div class="memo-header"><span class="date">' + new Date(e[i].updatedTs * 1e3).toLocaleString() + '</span></div><div class="memo-content-wrapper memo-content"><div class="memo-content-text">' + n + "</div></div></div>"
    }
    var v = "<section class='bb-timeline'><ul class='bb-list-ul'>";
    var g = "</ul></section>";
    o = v + t + g;
    bbDom.insertAdjacentHTML("beforeend", o);
    fetchDB();
    document.querySelector("button.button-load").textContent = "加载更多"
}
function fetchDB() {
    var e = "https://douban.edui.fun/";
    var t = document.querySelectorAll(".bb-timeline a[href*='douban.com/subject/']") || "";
    if (t) {
        for (var o = 0; o < t.length; o++) {
            _this = t[o];
            var r = _this.href;
            var a = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
            var i = r.replace(a, "$1");
            var n = r.replace(a, "$2").toString();
            if (i == "movie") {
                var s = "movie" + n;
                var l = e + "movies/" + n;
                if (localStorage.getItem(s) == null || localStorage.getItem(s) == "undefined") {
                    fetch(l).then(e=>e.json()).then(e=>{
                        let t = "movies" + e.sid;
                        let o = "https://movie.douban.com/subject/" + e.sid + "/";
                        localStorage.setItem(t, JSON.stringify(e));
                        movieShow(o, t)
                    }
                    )
                } else {
                    movieShow(r, s)
                }
            } else if (i == "book") {
                var s = "book" + n;
                var l = e + "v2/book/id/" + n;
                if (localStorage.getItem(s) == null || localStorage.getItem(s) == "undefined") {
                    fetch(l).then(e=>e.json()).then(e=>{
                        let t = "book" + e.id;
                        let o = "https://book.douban.com/subject/" + e.id + "/";
                        localStorage.setItem(t, JSON.stringify(e));
                        bookShow(o, t)
                    }
                    )
                } else {
                    bookShow(r, s)
                }
            }
        }
    }
}
function movieShow(e, t) {
    var o = localStorage.getItem(t);
    var r = JSON.parse(o);
    var a = Math.ceil(r.rating);
    var i = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" + e + "'>《" + r.name + "》</a></h4><div class='rating'><div class='rating-star allstar" + a + "'></div><div class='rating-average'>" + r.rating + "</div></div><time class='post-preview--date'>导演：" + r.director + " / 类型：" + r.genre + " / " + r.year + "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + r.intro.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + r.img + "></div>";
    var n = document.createElement("div");
    var s = ".bb-timeline a[href='" + e + "']";
    var l = document.querySelector(s);
    l.parentNode.replaceChild(n, l);
    n.innerHTML = i
}
function bookShow(e, t) {
    var o = localStorage.getItem(t);
    var r = JSON.parse(o);
    var a = Math.ceil(r.rating.average);
    var i = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" + e + "'>《" + r.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + a + "'></div><div class='rating-average'>" + r.rating.average + "</div></div><time class='post-preview--date'>作者：" + r.author + " </time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + r.summary.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + r.images.medium + "></div>";
    var n = document.createElement("div");
    var s = ".bb-timeline a[href='" + e + "']";
    var l = document.querySelector(s);
    l.parentNode.replaceChild(n, l);
    n.innerHTML = i
}
