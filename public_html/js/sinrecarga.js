/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 window.onload = function () {
                if (typeof history.pushState === "function") {
                    history.pushState("jibberish", null, null);
                    window.onpopstate = function () {
                        history.pushState('newjibberish', null, null);

                    };
                } else {
                    var ignoreHashChange = true;
                    window.onhashchange = function () {
                        if (!ignoreHashChange) {
                            ignoreHashChange = true;
                            window.location.hash = Math.random();

                        } else {
                            ignoreHashChange = false;
                        }
                    };
                }
            }

