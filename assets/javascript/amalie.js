// BURGERMENU
function burgermenu(){
	var burgerOne = document.getElementById("TRVFSS");
		if (burgerOne.style.display == "flex") {
			burgerOne.style.display = "none";
		} else{
			burgerOne.style.display = "flex";
		}
	var burgerTwo = document.getElementById("SFAP");
		if (burgerTwo.style.display == "flex") {
			burgerTwo.style.display = "none";
		} else{
			burgerTwo.style.display = "flex";
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
		step = window.location.href.slice(0, (window.location.href.length - (step1Page.length + 5))) + step2Page + '.html';
		window.location.href = step;
	} else if (window.location.href.indexOf(step2Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step2Page.length + 5))) + step3Page + '.html';
		window.location.href = step;
	} else if (window.location.href.indexOf(step3Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step3Page.length + 5))) + step4Page + '.html';
		window.location.href = step;
	}
}
//back
function back(){
	if (window.location.href.indexOf(step4Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step4Page.length + 5))) + step3Page + '.html';
		console.log(step);
		window.location.href = step;
	} else if (window.location.href.indexOf(step3Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step3Page.length + 5))) + step2Page + '.html';
		window.location.href = step;
	} else if (window.location.href.indexOf(step2Page) > 0){
		step = window.location.href.slice(0, (window.location.href.length - (step2Page.length + 5))) + step1Page + '.html';
		window.location.href = step;
	}
}
