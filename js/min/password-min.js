const setPassword="intuitive",homepageUrl="/poly/home";function setCookie(e,o,t){var n=new Date;n.setTime(n.getTime()+60*t*60*1e3);var i="expires="+n.toUTCString();document.cookie=e+"="+o+"; "+i}function getCookie(e){for(var o=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var i=t[n];" "==i.charAt(0);)i=i.substring(1);if(-1!=i.indexOf(o))return i.substring(o.length,i.length)}return null}function isValid(){document.getElementById("password").value==setPassword?setCookie("hgapoly","seen",1):(alert("Sorry, that is the wrong password."),event.preventDefault())}window.onload=function(){"seen"==getCookie("hgapoly")&&(window.location.href=homepageUrl)};