// ==UserScript==
// @name  知乎直接看
// @author  大萌主
// @version      6.0
// @description 不用打开app就能看知乎回答、看评论，去广告
// @match  *://www.zhihu.com/*
// @exclude *://zhuanlan.zhihu.com/*
// @run-at document-start
// @namespace https://greasyfork.org/users/452911
// ==/UserScript==

//知乎直接看
(function(){
var customUserAgent = 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/84.0.4147.105 mobile Safari/537.36 SearchCraft baiduboxapp';
 

            Object.defineProperty(navigator, 'userAgent', {
              value: customUserAgent,
              writable: false
            });
 

 
console.log(navigator.userAgent);

})();

setTimeout(function(){
let el = document.querySelectorAll("[class]");
el.forEach(function(item){
    item.style.cursor = 'pointer';
    item.onclick = function(){
        setTimeout(function(){
    
let el = document.querySelector('div.css-1k10w8f');
el.style.cursor = 'pointer'
el.onclick = function(){    let i = 0;
let timer = setInterval(() => {
  if (i >= 2) {
    clearInterval(timer);
    return;
  }

document.querySelector('BUTTON.Button.css-1b6xkse').click();
  i++;
}, 150);
}
document.querySelector('.css-1k10w8f').innerHTML = "关闭评论";
}, 1000);
    }
});
}, 3000);

setTimeout(function(){
    //执行css
const style = document.createElement('style');
  style.innerHTML = `
    DIV.KfeCollection-VipRecommendCard,
          A.MBannerAd,
          A.MHotFeedAd,
          .MRelateFeedAd,
          .WeiboAd-wrap,
          div[id^="div-gpt-ad"] {
            display: none !important;
          }
         DIV.css-tpyajk {
         width: 55%;
    }
  `;
  document.head.appendChild(style);
}, 1000);
