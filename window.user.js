// ==UserScript==
// @name         Roblox-InApp-Disable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable InApp for roblox
// @author       RobloxDevs
// @match        https://*.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.navigator.msLaunchUri = (url) => {
        const iframe = document.createElement('iframe');
        iframe.id = 'gamelaunch';
        iframe.className = 'hidden';
        iframe.src = url.replace('InApp', 'InBrowser');
        document.getElementsByTagName('body')[0].append(iframe);
    }; // Hack IE method
})();
