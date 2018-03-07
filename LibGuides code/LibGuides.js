window.onload = function(e){ 
var newparent=document.getElementById('s-lg-guide-name');
var title =document.getElementById('s-lg-guide-main');
title.insertBefore(newparent, title.childNodes[0]);
var desc = document.getElementById('s-lg-guide-description');
title.insertBefore(desc, title.childNodes[1]);
}

