// ==UserScript==
// @name     BiliBili-Hide
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  隐藏顶部去广告插件提示以及搜索框的热搜
// @author       ForACGN
// @match    https://www.bilibili.com/*
// @grant    none
// ==/UserScript==

(function() {
    "use strict";

    var adblock = document.querySelector(".adblock-tips");
    adblock.remove();

    var hideTrending = function(event) {
        document.querySelector(".trending").style.display="none";
        document.querySelector(".trending").hidden = true;
    }
    document.addEventListener("mousemove", hideTrending);
    document.addEventListener("mousedown", hideTrending);

    var searchPanel = document.querySelector(".search-panel");
    var searchInput = document.querySelector(".nav-search-input");
    var searchForm = document.querySelector("#nav-searchform");

    searchPanel.addEventListener("focus", hideTrending);
    searchForm.addEventListener("blur", hideTrending);
    searchForm.addEventListener("focus", hideTrending);
    searchForm.addEventListener("input", hideTrending);
    searchForm.addEventListener("keydown", hideTrending);
    searchForm.addEventListener("keyup", hideTrending);
    searchForm.addEventListener("submit", hideTrending);
    searchInput.addEventListener("blur", hideTrending);
    searchInput.addEventListener("focus", hideTrending);
    searchInput.addEventListener("input", hideTrending);
    searchInput.addEventListener("keydown", hideTrending);
    searchInput.addEventListener("keyup", hideTrending);
})();
