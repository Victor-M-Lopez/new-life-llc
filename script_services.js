let navLogo = document.querySelector('#nav_logo');
let navLink = document.querySelectorAll('.nav_links--black');
const navBar = document.querySelector('nav');

const exitBtn = document.querySelector('#exit-btn');
const navModal = document.querySelector('#nav_modal');
const hamburgerBtn = document.querySelector('#hamburger_menu');
let modalLinks = document.querySelectorAll('.nav_modal--list');

for (let i = 0; i < modalLinks.length; i++) {
	modalLinks[i].addEventListener('click', function () {
		navModal.classList.remove('show_modal');
	});
}

window.addEventListener('scroll', function () {
		if (window.scrollY > 100) {
			navBar.classList.add('solid');
		} else {
			navBar.classList.remove('solid');
		}
});

hamburgerBtn.addEventListener('click', function () {
	navModal.classList.add('show_modal');
});

exitBtn.addEventListener('click', function () {
	navModal.classList.remove('show_modal');
});