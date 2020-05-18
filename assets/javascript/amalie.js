// BURGERMENU
function burgermenu(){
	var burgerOne = document.querySelector(".TRVFSS");
		if (burgerOne.style.display == "flex") {
			burgerOne.style.display = "none";
		} else{
			burgerOne.style.display = "flex";
		}
	var burgerTwo = document.querySelector(".SFAP");
		if (burgerTwo.style.display == "flex") {
			burgerTwo.style.display = "none";
		} else{
			burgerTwo.style.display = "flex";
		}
}

// Navigation (‘Back’, navigationsprikker og ‘Next’)
