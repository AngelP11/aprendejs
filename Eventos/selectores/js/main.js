;(function(w,d){

var $ = function selector (selector) {
	if (selector.indexOf('#')==0) {
		return d.querySelector(selector);
	}else {
		return d.querySelectorAll(selector);
	}
}

var iten3 = $('#tres');

iten3.style.backgroundColor = 'yellow';

//next element previousElementSibling
var nextEl = iten3.nextElementSibling;
nextEl.style.backgroundColor = 'pink';

//previous element previousElementSibling
var prevEl = iten3.previousElementSibling;
prevEl.style.backgroundColor = 'lightblue';


//parent element parentNode
var parentEl = iten3.parentNode;
parentEl.style.border = '1px solid black';

//children element children
var childrenEl = iten3.children[0];
childrenEl.style.color = 'red';

console.log(iten3);

})(window,document);