let currentIndex = 0;
let navLogo = document.querySelector('#nav_logo');

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

function showSlide(index) {
	const images = document.querySelectorAll('.carousel-images img');
	const totalImages = images.length;

	// Wrap around the slides
	if (index >= totalImages) {
		currentIndex = 0;
	} else if (index < 0) {
		currentIndex = totalImages - 1;
	} else {
		currentIndex = index;
	}

	const offset = -currentIndex * 100; // Calculate offset for translation
	document.querySelector(
		'.carousel-images'
	).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
	showSlide(currentIndex + 1);
}

function prevSlide() {
	showSlide(currentIndex - 1);
}

showSlide(currentIndex);
// Initialize the carousel by showing the first slide

const navBar = document.querySelector('nav');
window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		navBar.classList.add('solid');
		navLogo.style.visibility = 'visible';
	} else {
		navBar.classList.remove('solid');
		navLogo.style.visibility = 'hidden';
	}
});
