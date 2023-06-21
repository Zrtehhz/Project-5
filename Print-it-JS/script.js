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

// Je defini avec let (= à var) mes variables ainsi que ce qu'elle correspondent

// si c'est un int (float) ou une value, qui recupère dans mon code html la balise ou l'id/class

	let chiffre = 0;
	let dots = document.querySelector('.dots');
	let dot = dots.querySelector('.dot');
	let paragraphe = document.querySelector('p');
	let bannerImg = document.querySelector('#banner-img');
	let flecheGauche = document.querySelector('.arrow_left');
	let flecheDroite = document.querySelector('.arrow_right');


// Je défini ma fonction, lui ajoute un nom Changement de slide ainsi qu'un argument "sens"
// Si 0 >= à mon slides.length alors il renvoi 0 et si inversement il renvoi 1
// Si ma slide correspond à 0 alors il change d'images et de paragraphe

	function ChangementDeSlide(sens) {
		  chiffre = chiffre + sens;
 		 if (chiffre >= slides.length)
 		   chiffre = 0;
 		 else if (chiffre < -1)
   		 chiffre = slides.length - 1;

			if (slides[chiffre]) {
				bannerImg.src = slides[chiffre].image;
				paragraphe.innerHTML = slides[chiffre].tagLine;
			  }
	}

// J'y ajoute un eventListener sur mes flèches, au clic de souris, 
// dans la console, sa affiche mon message et sa change d'image et de paragraphe

	flecheGauche.addEventListener('click', function onClick() {
  		console.log('la flèche de gauche fonctionne bien');
  		ChangementDeSlide(-1);
	});

	flecheDroite.addEventListener('click', function onClick() {
  		console.log('la flèche de droite fonctionne bien');
  		ChangementDeSlide(1);
	});

