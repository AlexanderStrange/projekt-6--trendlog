const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener("click", () =>{
  navLinks.classList.toggle("open");
});

//checkbox system !om checkbox er blevet valgt eller ej!

function is_checked(){
  var dataOne = document.getElementById('dataOne').checked;
  var dataTwo = document.getElementById('dataTwo').checked;
  var dataThree = document.getElementById('dataThree').checked;

if(dataOne==false && dataTwo==false && dataThree==false)  {
  alert('please select some data before you go further');
  return false;
  }

else {
  return true;
    }

}
