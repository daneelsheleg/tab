var btn = document.getElementsByClassName('btn');
var a = document.getElementsByClassName('news');


function() {
	for( var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', addClass);
		btn[i].setAttribute('data-position', i);
		a[i].setAttribute('data-position', i);
	}
}
