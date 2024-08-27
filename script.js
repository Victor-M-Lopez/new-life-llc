let currentIndex = 0;

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

// Initialize the carousel by showing the first slide
showSlide(currentIndex);

let navLogo = document.querySelector('#nav_logo');

window.addEventListener('scroll', function () {
	const navBar = document.querySelector('nav');
	if (window.scrollY > 100) {
		navBar.classList.add('solid');
		navLogo.style.visibility = 'visible';
	} else {
		navBar.classList.remove('solid');
		navLogo.style.visibility = 'hidden';
	}
});
