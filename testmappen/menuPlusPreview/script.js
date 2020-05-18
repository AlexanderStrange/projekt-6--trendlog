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
