// ==UserScript==
// @name         禁止百度搜索自动播放视频
// @version      1.0
// @description  让百度搜索结果的视频无法自动播放
// @author       ChatGPT
// @match        https://m.baidu.com/*
// @match        https://www.baidu.com/*
// @grant        none
// @run-at       document-start
// @namespace https://greasyfork.org/users/452911
// ==/UserScript==

(function() {
    'use strict';

    let style = document.createElement('style');
    style.innerHTML = `[data-video-player='true'] {display: none !important;}`;
    document.head.appendChild(style);
})();
