const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip');

var i =0;
var message = 'Search';
var speed = 100;

searchBtn.addEventListener('click',() =>{
  search.style.width = '40%';
  search.style.paddingLeft = '50px';
  search.style.cursor = 'text';
  search.focus();

  search.setAttribute('placeholder', 'Search');
  typeWriter();
})

function typeWriter() {
  if (i < message.lenght) {
    message = search.getAttribute('placeholder') + message.charAt(i);
    search.setAttribute('placeholder',message);
    i++;
    setTimeout(typewriter, speed);
  }
}

search.addEventListener('keydown', () => {
  tip.style.visibility = 'visible';
  tip.style.opacity = '1';
})
