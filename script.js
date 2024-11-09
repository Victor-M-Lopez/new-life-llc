navBar = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		navBar.classList.add('solid');
	} else {
		navBar.classList.remove('solid');
	}
});