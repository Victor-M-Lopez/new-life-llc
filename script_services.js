let navLogo = document.querySelector('#nav_logo');
let navLink = document.querySelectorAll('.nav_links--black');
const navBar = document.querySelector('nav');

window.addEventListener('scroll', function () {
	for (let i = 0; i < navLink.length; i++) {
		if (window.scrollY > 100) {
			navBar.classList.add('solid');
			navLogo.style.visibility = 'visible';
			navLink[i].style.color = '#fff';
		} else {
			navBar.classList.remove('solid');
			navLogo.style.visibility = 'hidden';
			navLink[i].style.color = '#000';
		}
	}
});
