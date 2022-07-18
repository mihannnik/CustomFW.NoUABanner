// ==UserScript==
// @name         NoUABanner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       mihannnik
// @match        https://*.customfw.xyz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=customfw.xyz
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
     console.log('Starting');
    while(document.querySelector('[class="js hide-scroll"]') == null)
    {
        await sleep(1000);
    }
    console.log('Removing');
    var item = document.querySelector('[class="js hide-scroll"]');
    item.style.overflow = "scroll"
    document.getElementById('stay-for-ukraine-popup').remove();
    document.getElementById('ukranian-flag').remove();
    console.log('Done');
})();

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
