window.onscroll = function () {
	const header = document.querySelector('.header-inner')
	const sticky = header.offsetTop

	if (window.pageYOffset > sticky) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
}
