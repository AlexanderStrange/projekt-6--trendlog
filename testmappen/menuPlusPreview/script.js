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
// script for previewet og miniaturer
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
