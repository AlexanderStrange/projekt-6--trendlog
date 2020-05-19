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

// Navigation (‘Back’, navigationsprikker og ‘Next’)
	let step = 'step1';
	var step1 = document.getElementById('dot1');
	var step2 = document.getElementById('dot2');
	var step3 = document.getElementById('dot3');
	var step4 = document.getElementById('dot4');
function next(){
	if (step == 'step1'){
		step = 'step2';
		step1.classList.remove("dotactive")
		step1.classList.add("dotafter");
		step2.classList.add("dotactive");
	} else if (step == 'step2'){
		step = 'step3';
		step2.classList.remove("dotactive")
		step2.classList.add("dotafter");
		step3.classList.add("dotactive");
	} else if (step == 'step3'){
		step = 'step4';
		step3.classList.remove("dotactive")
		step3.classList.add("dotafter");
		step4.classList.add("dotactive");
	}
}
function back(){
	if (step == 'step4'){
		step = 'step3';
		step4.classList.remove("dotactive");
		step3.classList.remove("dotafter");
		step3.classList.add("dotactive")
	} else if (step == 'step3'){
		step = 'step2';
		step3.classList.remove("dotactive");
		step2.classList.remove("dotafter");
		step2.classList.add("dotactive")
	} else if (step == 'step2'){
		step = 'step1';
		step2.classList.remove("dotactive");
		step1.classList.remove("dotafter");
		step1.classList.add("dotactive")
	}
}
