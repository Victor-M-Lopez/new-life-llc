window.onscroll = function() {navScroll()};
const buttons = document.querySelectorAll('[data-carousel--btn]')


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
    .closest('[data-carousel')
    .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1; 
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;

    delete activeSlide.dataset.active;
  })
})


let companyLogo = document.querySelector('.company_logo');
let overlay = document.getElementById('nav__overlay'); 

function navScroll() {
  if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    overlay.style.opacity = '0.8'
    companyLogo.style.opacity = '1';
  }
  else {
    overlay.style.opacity = '0'
    companyLogo.style.opacity = '0';
  }
}

function openMenu() {
  document.body.classList += " menu--open" 
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

function openService() {
  document.body.classList += " open--slide"
}

function closeService() {
  document.body.classList.remove("open--slide");
}
