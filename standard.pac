/*
  Algorithm-designed and Built with all the love in the world by XiaoXi.
  Project homepage: https://github.com/yanranxiaoxi/AWLC
  Thanks for: https://github.com/clowwindy/gfwlist2pac

  ANNOTATION
    Whitelists have higher priority than blacklists.
*/

var proxy = "SOCKS5 127.0.0.1:1080;";

var blacklist_domains = {
// Alphabet
  "1ucrs.com": 1,
  "466453.com": 1,
  "abc.xyz": 1,
  "adsense.com": 1,
  "adsensecustomsearchads.com": 1,
  "adsenseformobileapps.com": 1,
  "adwords.com": 1,
  "adwords.net": 1,
  "adwords.org": 1,
  "ampproject.com": 1,
  "ampproject.net": 1,
  "ampproject.org": 1,
  "android.com": 1,
  "androidify.com": 1,
  "appspot.com": 1,
  "bazel.build": 1,
  "blogger.com": 1,
  "blogspot.ae": 1,
  "blogspot.am": 1,
  "blogspot.ba": 1,
  "blogspot.be": 1,
  "blogspot.bg": 1,
  "blogspot.ca": 1,
  "blogspot.ch": 1,
  "blogspot.cl": 1,
  "blogspot.co": 1,
  "blogspot.co.id": 1,
  "blogspot.co.il": 1,
  "blogspot.co.ke": 1,
  "blogspot.co.nz": 1,
  "blogspot.co.uk": 1,
  "blogspot.co.za": 1,
  "blogspot.com": 1,
  "blogspot.com.ar": 1,
  "blogspot.com.au": 1,
  "blogspot.com.br": 1,
  "blogspot.com.co": 1,
  "blogspot.com.eg": 1,
  "blogspot.com.mt": 1,
  "blogspot.com.my": 1,
  "blogspot.com.tr": 1,
  "blogspot.com.uy": 1,
  "blogspot.cz": 1,
  "blogspot.de": 1,
  "blogspot.dk": 1,
  "blogspot.fi": 1,
  "blogspot.fr": 1,
  "blogspot.gr": 1,
  "blogspot.hk": 1,
  "blogspot.hr": 1,
  "blogspot.hu": 1,
  "blogspot.ie": 1,
  "blogspot.in": 1,
  "blogspot.is": 1,
  "blogspot.it": 1,
  "blogspot.jp": 1,
  "blogspot.kr": 1,
  "blogspot.li": 1,
  "blogspot.lt": 1,
  "blogspot.lu": 1,
  "blogspot.mx": 1,
  "blogspot.nl": 1,
  "blogspot.no": 1,
  "blogspot.org": 1,
  "blogspot.pt": 1,
  "blogspot.ro": 1,
  "blogspot.ru": 1,
  "blogspot.se": 1,
  "blogspot.sg": 1,
  "blogspot.sk": 1,
  "blogspot.sn": 1,
  "brocaproject.com": 1,
  "chromium.org": 1,
  "chronicle.security": 1,
  "chronicleforgood.com": 1,
  "crossmediapanel.com": 1,
  "dataliberation.org": 1,
  "deepmind.com": 1,
  "digitalassetlinks.org": 1,
  "domains.google": 1,
  //"doubleclick.net": 1,
  "doubleclickusercontent.com": 1,
  "earlydays.google": 1,
  "fastlane.ci": 1,
  "g.co": 1,
  "g.dev": 1,
  "g.page": 1,
  "get.app": 1,
  "ggpht.com": 1,
  "gmail.com": 1,
  "golang.com": 1,
  "golang.net": 1,
  "golang.org": 1,
  "goo.gl": 1,
  "google.ae": 1,
  "google.am": 1,
  "google.as": 1,
  "google.at": 1,
  "google.az": 1,
  "google.ba": 1,
  "google.be": 1,
  "google.bi": 1,
  "google.bg": 1,
  "google.bs": 1,
  "google.ca": 1,
  "google.cd": 1,
  "google.cg": 1,
  "google.ch": 1,
  "google.ci": 1,
  "google.cl": 1,
  //"google.cn": 1,
  "google.co": 1,
  "google.co.bw": 1,
  "google.co.ck": 1,
  "google.co.cr": 1,
  "google.co.hu": 1,
  "google.co.id": 1,
  "google.co.il": 1,
  "google.co.im": 1,
  "google.co.in": 1,
  "google.co.je": 1,
  "google.co.jp": 1,
  "google.co.ke": 1,
  "google.co.kr": 1,
  "google.co.ls": 1,
  "google.co.ma": 1,
  "google.co.nz": 1,
  "google.co.th": 1,
  "google.co.tz": 1,
  "google.co.ug": 1,
  "google.co.uk": 1,
  "google.co.uz": 1,
  "google.co.ve": 1,
  "google.co.vi": 1,
  "google.co.za": 1,
  "google.co.zm": 1,
  "google.com": 1,
  "google.com.af": 1,
  "google.com.ag": 1,
  "google.com.ai": 1,
  "google.com.ar": 1,
  "google.com.au": 1,
  "google.com.bd": 1,
  "google.com.bh": 1,
  "google.com.bo": 1,
  "google.com.br": 1,
  "google.com.bz": 1,
  "google.com.co": 1,
  "google.com.cu": 1,
  "google.com.dm": 1,
  "google.com.do": 1,
  "google.com.ec": 1,
  "google.com.eg": 1,
  "google.com.et": 1,
  "google.com.fj": 1,
  "google.com.gi": 1,
  "google.com.gt": 1,
  "google.com.hk": 1,
  "google.com.jm": 1,
  "google.com.ly": 1,
  "google.com.mt": 1,
  "google.com.mx": 1,
  "google.com.my": 1,
  "google.com.na": 1,
  "google.com.nf": 1,
  "google.com.ni": 1,
  "google.com.np": 1,
  "google.com.om": 1,
  "google.com.pa": 1,
  "google.com.pe": 1,
  "google.com.ph": 1,
  "google.com.pk": 1,
  "google.com.pr": 1,
  "google.com.py": 1,
  "google.com.sa": 1,
  "google.com.sb": 1,
  "google.com.sg": 1,
  "google.com.sv": 1,
  "google.com.tj": 1,
  "google.com.tr": 1,
  "google.com.tw": 1,
  "google.com.ua": 1,
  "google.com.uy": 1,
  "google.com.vc": 1,
  "google.com.vn": 1,
  "google.cz": 1,
  "google.de": 1,
  "google.dj": 1,
  "google.dk": 1,
  "google.ee": 1,
  "google.es": 1,
  "google.fi": 1,
  "google.fm": 1,
  "google.fr": 1,
  "google.gg": 1,
  "google.gl": 1,
  "google.gm": 1,
  "google.gr": 1,
  "google.hk": 1,
  "google.hn": 1,
  "google.hr": 1,
  "google.ht": 1,
  "google.hu": 1,
  "google.ie": 1,
  "google.in": 1,
  "google.info": 1,
  "google.io": 1,
  "google.is": 1,
  "google.it": 1,
  "google.jo": 1,
  "google.jp": 1,
  "google.kg": 1,
  "google.kr": 1,
  "google.kz": 1,
  "google.li": 1,
  "google.lk": 1,
  "google.lt": 1,
  "google.lu": 1,
  "google.lv": 1,
  "google.mn": 1,
  "google.ms": 1,
  "google.mu": 1,
  "google.mw": 1,
  "google.mx": 1,
  "google.net": 1,
  "google.nl": 1,
  "google.no": 1,
  "google.nu": 1,
  "google.off.ai": 1,
  "google.org": 1,
  "google.ph": 1,
  "google.pl": 1,
  "google.pn": 1,
  "google.pt": 1,
  "google.ro": 1,
  "google.ru": 1,
  "google.rw": 1,
  "google.sc": 1,
  "google.se": 1,
  "google.sg": 1,
  "google.sh": 1,
  "google.sk": 1,
  "google.sm": 1,
  "google.sn": 1,
  "google.tk": 1,
  "google.tm": 1,
  "google.to": 1,
  "google.tp": 1,
  "google.tt": 1,
  "google.vg": 1,
  "google.vn": 1,
  "google.vu": 1,
  "google.ws": 1,
  "googleacquisitionmigration.com": 1,
  "googleapis.com": 1,
  "googleblog.com": 1,
  "googlecert.net": 1,
  "googlecloud.com": 1,
  "googledomains.com": 1,
  "googledrive.com": 1,
  "googlemail.com": 1,
  "googlemaps.com": 1,
  "googlephotos.com": 1,
  "googleplay.com": 1,
  "googleplus.com": 1,
  "googlestore.com": 1,
  "googlesupport.com": 1,
  //"googletagmanager.com": 1,
  //"googletagservices.com": 1,
  "googlesyndication.com": 1,
  "googleusercontent.com": 1,
  "googlevideo.com": 1,
  "googleweblight.com": 1,
  //"google-analytics.com": 1,
  "google-syndication.com": 1,
  "go-lang.com": 1,
  "go-lang.net": 1,
  "grow.google": 1,
  "gstatic.com": 1,
  "gsuite.com": 1,
  "gvt5.com": 1,
  "hats.goog": 1,
  "hey.gle": 1,
  "iamremarkable.org": 1,
  "keyhole.com": 1,
  "lanternal.com": 1,
  "lers.google": 1,
  "liftware.com": 1,
  "liftware.jp": 1,
  "nel.goog": 1,
  "nomulus.foo": 1,
  "ok.gle": 1,
  "page.link": 1,
  "picasa.com": 1,
  "picasaweb.com": 1,
  "picasaweb.net": 1,
  "picasaweb.org": 1,
  "picnik.com": 1,
  "pixate.com": 1,
  "pki.goog": 1,
  "rbm.goog": 1,
  "registry.google": 1,
  "registry-qa.google": 1,
  "registry-sandbox.google": 1,
  "savethedate.foo": 1,
  "searchingforsyria.org": 1,
  "tfhub.dev": 1,
  "thinkwithgoogle.com": 1,
  "tiltbrush.com": 1,
  "translate.goog": 1,
  "unfiltered.news": 1,
  "webmproject.org": 1,
  "webrtc.org": 1,
  "withgoogle.com": 1,
  "writely.com": 1,
  "xplr.co": 1,
  "youtube.com": 1,
  "youtube-nocookie.com": 1,
  "ytimg.com": 1,
  "zynamics.com": 1,
// BBC
  "bbc.co.uk": 1,
  "bbci.co.uk": 1,
  "bbc.com": 1,
// box
  "box.com": 1,
// Discord
  "discordapp.com": 1,
// Disqus
  "disqus.com": 1,
  "disquscdn.com": 1,
// Dropbox
  "dropbox.com": 1,
  "dropboxstatic.com": 1,
  "dropboxusercontent.com": 1,
// DuckDuckGo
  "duckduckgo.com": 1,
// ExHentai
  "e-hentai.org": 1,
// Facebook
  "facebook.com": 1,
  "facebook.hu": 1,
  "facebook.in": 1,
  "facebook.nl": 1,
  "facebook.se": 1,
  "fb.com": 1,
  "fb.me": 1,
  "fbcdn.net": 1,
  "fbsbx.com": 1,
// Firefox
  "send.firefox.com": 1,
// Flickr
  "flickr.com": 1,
  "staticflickr.com": 1,
  "yimg.com": 1,
// EL Combo
  "erolord.com": 1,
// Instagram
  "cdninstagram.com": 1,
  "instagram.com": 1,
// Line
  "line.me": 1,
  "line-apps.com": 1,
  "line-scdn.net": 1,
  "static.line.naver.jp": 1,
// Mega
  "mega.co.nz": 1,
  "mega.nz": 1,
// Microsoft
  "onedrive.live.com": 1,
// Pinterest
  "pin.it": 1,
  "pinimg.com": 1,
  "pinterest.at": 1,
  "pinterest.be": 1,
  "pinterest.ca": 1,
  "pinterest.ch": 1,
  "pinterest.cl": 1,
  "pinterest.co": 1,
  "pinterest.co.at": 1,
  "pinterest.co.kr": 1,
  "pinterest.co.nz": 1,
  "pinterest.co.uk": 1,
  "pinterest.com": 1,
  "pinterest.com.au": 1,
  "pinterest.com.bo": 1,
  "pinterest.com.ec": 1,
  "pinterest.com.mx": 1,
  "pinterest.com.pe": 1,
  "pinterest.com.py": 1,
  "pinterest.com.uy": 1,
  "pinterest.com.vn": 1,
  "pinterest.de": 1,
  "pinterest.dk": 1,
  "pinterest.ec": 1,
  "pinterest.engineering": 1,
  "pinterest.es": 1,
  "pinterest.fr": 1,
  "pinterest.hu": 1,
  "pinterest.id": 1,
  "pinterest.ie": 1,
  "pinterest.in": 1,
  "pinterest.info": 1,
  "pinterest.it": 1,
  "pinterest.jp": 1,
  "pinterest.kr": 1,
  "pinterest.mx": 1,
  "pinterest.nl": 1,
  "pinterest.nz": 1,
  "pinterest.pe": 1,
  "pinterest.ph": 1,
  "pinterest.pt": 1,
  "pinterest.ru": 1,
  "pinterest.se": 1,
  "pinterest.th": 1,
  "pinterest.tw": 1,
  "pinterest.uk": 1,
  "pinterest.vn": 1,
  "pinterestmail.com": 1,
// pixiv
  //"pixiv.me": 1,
  "pixiv.net": 1,
  "pixivision.net": 1,
  //"pximg.net": 1,
// Pornhub
  "phncdn.com": 1,
  "pornhub.com": 1,
// Quora
  "quora.com": 1,
  "quoracdn.net": 1,
// RawGit
  "rawgit.com": 1,
// Shadowsocks
  "shadowsocks.org": 1,
// Steam
  "steamcommunity.com": 1,
// Telegram
  "t.me": 1,
  "telegra.ph": 1,
  "telegram.me": 1,
  "telegram.org": 1,
  "telesco.pe": 1,
// The New York Times
  "nytimes.com": 1,
// Tor Project
  "torproject.org": 1,
// Tumblr
  "tumblr.com": 1,
// Twitch
  "ext-twitch.tv": 1,
  "jtvnw.net": 1,
  "ttvnw.net": 1,
  "twitch.com": 1,
  "twitch.tv": 1,
  "twitchcdn.net": 1,
  "twitchsvc.net": 1,
// Twitter
  "ads-twitter.com": 1,
  "t.co": 1,
  "twimg.com": 1,
  "twitter.com": 1,
  "twitter.jp": 1,
// Vimeo
  "vimeo.com": 1,
  //"vimeocdn.com": 1,
// WhatsApp
  "whatsapp.com": 1,
  "whatsapp.net": 1,
// Wikipedia
  "wikipedia.org": 1,
};

var whitelist_domains = {
  "fonts.googleapis.com": 1,
  "fonts.gstatic.com": 1,
  "ssl.gstatic.com": 1,
  "www.gstatic.com": 1,
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(blacklist_domains, host)) {
			    if (hasOwnProperty.call(whitelist_domains, host)) {
				  return direct;
				} else {
				  return proxy;
				}
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(blacklist_domains, suffix)) {
			if (hasOwnProperty.call(whitelist_domains, host)) {
			  return direct;
			} else {
			  return proxy;
			}
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
