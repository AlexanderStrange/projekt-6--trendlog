// TEST - localStorage
function testSessto(){
	if (sessionStorage.getItem("graf1") != null) {
		document.getElementById("bilbox").src = sessionStorage.getItem("graf1");
	}
}

// sessionStorage
// setItem - på 'NEXT'-button
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
