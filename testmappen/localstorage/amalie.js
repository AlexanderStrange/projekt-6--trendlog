function localStorage(){
	if (localStorage.getItem("dataOne") != null) {
		document.getElementById("expandedImg").src = localStorage.getItem("dataOne");
	}
	if (localStorage.getItem("dataTwo") != null) {
		document.getElementById("expandedImg").src = localStorage.getItem("dataTwo");
	}
	if (localStorage.getItem("dataTwo") != null) {
		document.getElementById("expandedImg").src = localStorage.getItem("dataTree");
	}
	if (localStorage.getItem("fundet4") != null) {
		document.getElementById("expandedImg").src = localStorage.getItem("dataFour");
	}
}

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
/*
function checkImages(){
	if (localStorage.getItem("fundet1") != null) {
		document.getElementById("overbil1").src = localStorage.getItem("fundet1");
	}
*/

// MULIG KODE
/*
function localStorage(){
	if (localStorage.getItem("dataOne") != null) {
		document.getElementById("expandedImg").src = localStorage.getItem("dataOne");
	}
*/
