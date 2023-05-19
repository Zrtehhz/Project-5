const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let chiffre = 0;

function ChangementDeSlide(sens) {
	chiffre = chiffre + sens;
	if (chiffre > slides.lengh - 1)
	chiffre = 0;
	if (chiffre < 0)
	chiffre = slides.length - 1;
	document.getElementById('slide').src = "assets/images/slideshow/" + slide[chiffre]; 
}
