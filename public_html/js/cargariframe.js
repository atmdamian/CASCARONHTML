/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loadIframe(iframeName, url) {
    if (window.frames[iframeName]) {
        window.frames[iframeName].location = url;
        return false;
    }
    return true;
}

