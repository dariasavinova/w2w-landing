// SLIDER 
$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1.2,
		infinite: false,
		touchThreshold: 10,
		speed: 200,
		swipeToSlide: true,
	})
})



// POPUP MENU
const popup = document.querySelector('.popup')
const popup2 = document.querySelector('#popup-en')
const menuBurger = document.querySelector('.header__menu')
const menuBurger2 = document.querySelector('#header__menu2')
const pageRu = document.querySelector('.wrapper')
const pageEn = document.querySelector('.wrapper2')
const closePopup = document.querySelector('.popup__close')
const closePopup2 = document.querySelector('#popup__close')

menuBurger.addEventListener('click', () => {
	popup.classList.add('visible')
	pageRu.classList.add('greyBg')
})

menuBurger2.addEventListener('click', () => {
	popup2.classList.add('visible')
	pageEn.classList.add('greyBg')
})

closePopup.addEventListener('click', () => {
	popup.classList.remove('visible')
	pageRu.classList.remove('greyBg')
})

closePopup2.addEventListener('click', () => {
	popup2.classList.remove('visible')
	pageEn.classList.remove('greyBg')
})



// ENG
const en = document.querySelector('#en')
const ru = document.querySelector('#ru2')


en.addEventListener('click', function () {
	pageEn.classList.remove('hidden')
	pageRu.classList.add('hidden')
	pageEn.classList.add('visible')
	$('.slider').slick("refresh")
	popup.classList.remove('visible')
	pageRu.classList.remove('greyBg')
})

ru.addEventListener('click', function () {
	pageRu.classList.remove('hidden')
	pageEn.classList.add('hidden')
	$('.slider').slick("refresh")
	pageRu.classList.add('visible')
	popup2.classList.remove('visible')
	pageEn.classList.remove('greyBg')
})


// POPUP BTN
const chooseBtn = document.querySelectorAll('.slider__item-btn')
const popupPhoto = document.querySelector('.popup2__photo')
const closePhotoPopup = document.querySelector('.popup2__close')
const chooseBtnEn = document.querySelectorAll('#slider__item-btn')
const popupPhotoEn = document.querySelector('#popup2__photo')
const closePhotoPopupEn = document.querySelector('#popup2__close')


for (btn = 0; btn < chooseBtn.length; btn++) {
	chooseBtn[btn].addEventListener('click',() => {
		popupPhoto.style.display = "block";

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})

	pageRu.classList.add('greyBg')
})}

for (btn = 0; btn < chooseBtnEn.length; btn++) {
	chooseBtnEn[btn].addEventListener('click', () => {
	popupPhotoEn.style.display = "block";
	popupPhoto.style.display = "none";
	pageRu.classList.remove('greyBg')

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})

	pageEn.classList.add('greyBg')
})
}

closePhotoPopup.addEventListener('click', () => {
	popupPhoto.style.display = "none";
	pageRu.classList.remove('greyBg')
})

closePhotoPopupEn.addEventListener('click', () => {
	popupPhotoEn.style.display = "none";
	pageEn.classList.remove('greyBg')
})
