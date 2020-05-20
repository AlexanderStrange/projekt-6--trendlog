const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip');

var i =0;

searchBtn.addEventListener('click',() =>{
  search.style.width = '80%';
  search.style.paddingLeft = '60px';
  search.style.cursor = 'text';
  search.focus();
})

function typeWriter() {
  if (i < message.lenght) {
  }
}

search.addEventListener('keydown', () => {
  tip.style.visibility = 'visible';
  tip.style.opacity = '1';
})
