//lokal Storage preview//
function preview(){
if (localStorage.getItem('dataOne')) {
  document.getElementById('expandedImg').src = localStorage.getItem('dataOne');
}

}
