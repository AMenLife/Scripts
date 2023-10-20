// ==UserScript==
// @name        手机百度搜索净化
// @version     1.9
// @author      大萌主
// @description  在手机百度搜索结果页面隐藏广告和推荐内容和禁止搜索结果自动播放，提升搜索体验。
// @match       https://m.baidu.com/*
// @match       https://www.baidu.com/*
// @run-at       document-start
// @grant        none
// @namespace https://greasyfork.org/users/452911
// ==/UserScript==

(function() {
    'use strict';

    let style = document.createElement('style');
    style.innerHTML = `.ec_wise_ad *,.ad-wrapper,[srcid^='xcx_'],[srcid='guanfanghao'],[srcid='note_lead'],DIV#page-relative.se-page-relative,[data-video-player='true'],[srcid^='app_mobile_simple'],[srcid='lego_tpl'],[srcid='sp_purc_atom'],[srcid='zk_sc_header'],[srcid='med_wz'],[srcid='fw_on_newsite_three'],[srcid='wenda_inquiry'],[srcid='b2b_straight_wise_vertical_na'],DIV.c-container.ec-container,[data-tpl='adv_wenku_fc'],[tpl='recommend_list_san'],[srcid='yl_recommend_list'] {display: none !important;}`;
    document.head.appendChild(style);
})();
