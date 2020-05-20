// function localStorageImag(){
// 	if (localStorage.getItem("test3") != null) {
// 		document.getElementById("test2").src = localStorage.getItem("test3");
// 	}
// 	if (localStorage.getItem("dataTwo") != null) {
// 		document.querySelector(".preview").src = localStorage.getItem("dataTwo");
// 	}
// 	if (localStorage.getItem("dataThree") != null) {
// 		document.querySelector(".preview").src = localStorage.getItem("dataThree");
// 	}
// }

/*
HTML - sættes under hvor item er med value og keyword
<script type="text/javascript">localStorage.setItem("value", "keyword");</script>
*/
// <script type="text/javascript">localStorage.setItem("forkortelse af...", "...det som skal indsættes");</script>

/*
HTML - nye boks til item ('overbil' - 'expandedImg')
*/

// PROJEKT 5
// JavaScript - localStorage

// function checkImages(){
// 	if (localStorage.getItem("fundet1") != null) {
// 		document.getElementById("overbil1").src = localStorage.getItem("fundet1");
// }

// function saveLocal(){
// 	var test1 = document.getElementById("graf1")
// 	if (typeof(Storage) !== "undefined") {
// 		//CANVAS
// 		var imgCanvas = document.createElement("canvas");
// 			imgCanvas.width = test1.width;
// 	    imgCanvas.height = test1.height;
// 	// SET
// 		localStorage.setItem("test", "graf1");
// 	// GET
// 	  document.getElementById("box1").innerHTML = localStorage.getItem("test");
// 	} else {
// 	  document.getElementById("box1").innerHTML = "Sorry, your browser does not support Web Storage...";
// 	}
// }

function saveLocal(){
	if (localStorage.getItem("graf1") != null) {
		document.getElementById("box1").src = localStorage.getItem("graf1");
	}
}
var empty = document.querySelector(".empty");
if (empty.src.match("//:0")){
	silhouet.src = "../../assets/img/graf1.svg";
}
