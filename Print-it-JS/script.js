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

// Je défini ( let ) la variable chiffre à 0.
// Je créer une fonction appelé ChangementDeSlide avec un argument, ( sens) dans ma fonction j'y ajoute
// la variable chiffre, qui est égal à 0, + le sens de mon slide ( si ces gauche ou droite ).
// If (si) chiffre est supérieur au sens de mon slides ( longueur ) - 1 ( changement de slide ) alors il renvoi 0
// If ( si) chiffre 0 est inférieur à 0 alors il renvoi le sens de mon slides en longueur - 1.
// Il va chercher dans mon document HTML, l'élément appelé 'slide', il prend la source d'image de mon slide, puis ajoute ( le slides ( les images en gros ) + 0 (chiffre))


let chiffre = 0;
let dots = document.querySelector('dots');
let paragraphe = document.querySelector('p');
let bannerImg = document.querySelector('.banner-img');

let flecheGauche = document.querySelector('.arrow_left');
let flecheDroite = document.querySelector('.arrow_right');

let maxSlides = slides.length;


function ChangementDeSlide(sens) {
	chiffre = chiffre + sens;
	if (chiffre >= slides.lengh - 1)
	chiffre = 0;
	if (chiffre <= 0)
	chiffre = slides.length - 1;
	bannerImg = "./assets/images/slideshow/" + slides[chiffre]; 
	paragraphe.innerHTML = slides[chiffre].tagLine;
}

flecheGauche.addEventListener('click', function onClick() {
	console.log('la flèche de gauche fonctionne bien');
	
	ChangementDeSlide(1);
	
	
	})
	

flecheDroite.addEventListener('click', function onClick() {
	console.log('la flèche de droite fonctionne bien');
	
	ChangementDeSlide(0);
		
	})
		
	
