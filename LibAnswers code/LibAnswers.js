
window.onload = function(e){ 
	var q=document.getElementById("s-la-askform-32368");
	var p=document.getElementById("s-la-box-32370");
	p.appendChild(q)
	$('.s-la-navbar').insertAfter('.s-la-breadcrumbs');
	$('#s-la-header-public').insertAfter('.s-la-navbar');
	$('#footer').insertAfter('#s-la-page-maincontent')
	var ul = document.getElementById('s-la-headerlinks');
	nodeList= ul.childNodes;
nodeList[3].remove();

}

