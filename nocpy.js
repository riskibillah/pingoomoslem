message="KONTEN BLOG INI DILINDUNGI HAK CIPTA";function NoRightClick(a){if(((navigator.appName=="Microsoft Internet Explorer")&&(event.button>1))||((navigator.appName=="Netscape")&&(a.which>1))){alert(message);return !1}}document.onmousedown=NoRightClick;var message="KONTEN BLOG INI DILINDUNGI HAK CIPTA";function clickIE(){if(document.all){(message);return !1}}function clickNS(a){if(document.layers||(document.getElementById&&!document.all)){if(a.which==2||a.which==3){(message);return !1}}}if(document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS}else{document.onmouseup=clickNS;document.oncontextmenu=clickIE}document.oncontextmenu=new Function("return false");function disableselect(a){return !1}