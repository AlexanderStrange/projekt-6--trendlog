function localStorage(){
	if (typeof(Storage) !== "undefined"){
		localStorage.setItem("expandedImg", "dataOne");

		document.querySelector(".containerpreview").innerHTML = localStorage.getItem("dataOne")
	} else {
	  document.querySelector(".containerpreview").innerHTML = "Sorry, your browser does not support Web Storage...";
}
