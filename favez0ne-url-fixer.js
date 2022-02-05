// ==UserScript==
// @name         favez0ne url fixer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove annoing ads
// @author       user77553
// @match        https://www.favez0ne.net/search.php
// @icon         https://www.google.com/s2/favicons?domain=favez0ne.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    jQuery("a").each(function() {
        jQuery(this).attr('href', jQuery(this).attr('href').replace(/https:\/\/adf.ly\/2081874\//, ''))
})
})()