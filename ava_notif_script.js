// ==UserScript==
// @name         AVA Push notification.
// @namespace    http://www.amazon.com
// @version      0.1
// @description  try to take over the world!
// @author       riemas@
// @credits      ostmeier@
// @match        http://avaobserver-beta.integ.amazon.com/
// @grant        none
// ==/UserScript==


var interval = setInterval(function() {


(function() {
    'use strict';
    var x = document.getElementById("app").querySelectorAll(".alert");


   console.log(x.length)
    if(x.length >0){
     console.log("full")
        notifyMe();
    }


function notifyMe() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
            var notify = new Notification('ALERT', {
                body: 'You have: ' + x.length + ' open Alerts on AVA'  ,
                icon: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
            });
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification('ALERT', {
                        body: 'You have: ' + x.length + ' open Alerts on AVA'  ,
                        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}



})();

    }, 15000);
