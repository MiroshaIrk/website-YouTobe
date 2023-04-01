

function toggleNav() {
  const burgerBtn = document.getElementById('burger');
  const hiddenNav = document.querySelectorAll('.hidden-nav');
  const sidebar = document.querySelector('aside');
  const links = document.querySelectorAll('.nav-link');
  const content = document.querySelector('.content');
  const mobileSearch = document.querySelector('#mobile-search');
  const openSearchBtn = document.querySelector('#open-search');
  const closeSearchBtn = document.querySelector('#close-search');

  burgerBtn.addEventListener('click', () => {
    hiddenNav.forEach(navItem => navItem.classList.toggle('hidden'));
    links.forEach(link => link.classList.toggle('active'));
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  });
  openSearchBtn.addEventListener('click', () => {
    mobileSearch.classList.remove('hidden');
  });
  closeSearchBtn.addEventListener('click', () => {
    mobileSearch.classList.add('hidden');
  });



}

toggleNav();