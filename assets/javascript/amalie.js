// BURGERMENU
var burgerOne = document.getElementById("TRVFSS");
var burgerTwo = document.getElementById("SFAP");
function burgermenu(){
	if (!burgerOne.classList.contains('isVisible')) {
		burgerOne.classList.add('isVisible');
	} else{
		burgerOne.classList.remove('isVisible');
	}
	if (!burgerTwo.classList.contains('isVisible')) {
		burgerTwo.classList.add('isVisible');
	} else{
		burgerTwo.classList.remove('isVisible');
	}
}

// SESSIONSTORAGE
	// setItem
function setItemSesSto(){
	const itemSesSto = document.getElementById("expandedImg").src;
	sessionStorage.setItem("veardi", itemSesSto);
}
	// getItem
function getItemSesSto(){
	if (sessionStorage.getItem("veardi") != null) {
		document.getElementById("sessto").src = sessionStorage.getItem("veardi");
	}
}

// NAVIGATION (‘Back’, navigationsprikker og ‘Next’)
	let step = 'step1';
	let step1Page = 'data';
	let step2Page = 'layout';
	let step3Page = 'colours';
	let step4Page = 'final-preview';
	//next
function next(){
	if (window.location.href.indexOf(step1Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step1Page.length))) + step2Page + '.html';
		window.location.href = step;
	} else if (window.location.href.indexOf(step2Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step2Page.length))) + step3Page + '.html';
		window.location.href = step;
	} else if (window.location.href.indexOf(step3Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step3Page.length))) + step4Page + '.html';
		window.location.href = step;
	}
}
	//back
function back(){
	if (window.location.href.indexOf(step4Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step4Page.length))) + step3Page + '.html';
		console.log(step);
		window.location.href = step;
	} else if (window.location.href.indexOf(step3Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step3Page.length))) + step2Page + '.html';
		window.location.href = step;
	} else if (window.location.href.indexOf(step2Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step2Page.length))) + step1Page + '.html';
		window.location.href = step;
	}
}
