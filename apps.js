const mobileNav = document.querySelector('.home__navMobile');
const burgerMenu = document.querySelector('.home__navBars');
const mobileLinks = document.querySelectorAll('.nav__mobileLink')

function openNav(e) {
	mobileNav.style.transform = "translateX(0%)";
}

function closeNav(e) {
	mobileNav.style.transform = "translateX(-100%)";
}

burgerMenu.addEventListener('click', openNav);
mobileLinks.forEach(mobileLink => mobileLink.addEventListener('click', closeNav));
