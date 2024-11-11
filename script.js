navBar = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		navBar.classList.add('solid');
	} else {
		navBar.classList.remove('solid');
	}
});

const exitBtn = document.querySelector('#exit-btn');
const navModal = document.querySelector('#nav_modal');
let hamburgerBtn = document.querySelector('#hamburger_menu');
let modalLinks = document.querySelectorAll('.nav_modal--list');

for (let i = 0; i < modalLinks.length; i++) {
	modalLinks[i].addEventListener('click', function () {
		navModal.classList.remove('show_modal');
	});
}

hamburgerBtn.addEventListener('click', function () {
	navModal.classList.add('show_modal');
});

exitBtn.addEventListener('click', function () {
	navModal.classList.remove('show_modal');
});