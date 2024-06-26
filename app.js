const openEl = document.querySelector('.open-btn');
const closeEl = document.querySelector('.close-btn');
const sidebarEl = document.querySelector('#sidebar');
const btnContainer = document.querySelector('.btn-contaainer');

openEl.addEventListener('click', function () {
  sidebarEl.classList.add('sidebaropen');
  btnContainer.classList.add('showSidebar');
});

closeEl.addEventListener('click', function(){
  sidebarEl.classList.remove('sidebaropen');
  btnContainer.classList.remove('showSidebar');
})

console.log(sidebarEl);