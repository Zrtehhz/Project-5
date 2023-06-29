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

	// si c'est un int (float) ou une value.

	// Sinon je demande à ce que il récupère ma balise ou ma classe/id


		let chiffre = 0;
		const dots = document.querySelectorAll('.dot');
		let paragraphe = document.querySelector('p');
		let bannerImg = document.querySelector('#banner-img');
		let flecheGauche = document.querySelector('.arrow_left');
		let flecheDroite = document.querySelector('.arrow_right');


		// Ma fonction updateDots fait ceci : 
		// Elle itère sur chaque élément dot du tableau dots en utilisant la méthode forEach.
		// Pour chaque dot, la fonction vérifie si son index correspond à la valeur de chiffre :
		// Si l'index de l'élément dot est égal à la valeur de chiffre, alors la classe CSS 'active' est ajoutée à cet élément en utilisant dot.classList.add('active'). 
		// Et inversement, si l'élément dot n'est pas égal à la valeur chiffre alors la classe CSS 'active' est supprimé.

	function updateDots() {
		dots.forEach((dot, index) => {
			if (index === chiffre) {
				dot.classList.add('active'); 
			} else {
			  dot.classList.remove('active'); 
			}
		});
	}


// chiffre += sens; ajoute la valeur de sens à la variable chiffre. Cela permet de changer l'index actuel de la diapositive en fonction de la valeur de sens.
//   Si la valeur de chiffre est supérieure ou égale à la longueur du tableau slides, cela signifie que l'index dépasse le nombre de diapositives disponibles.
// Dans ce cas, chiffre est réinitialisé à 0, ce qui permet de boucler et de revenir à la première diapositive.

//Si la valeur de chiffre est inférieure à 0, cela signifie que l'index est négatif. Dans ce cas, chiffre est réinitialisé à slides.length - 1,
// ce qui permet de boucler et de revenir à la dernière diapositive.
// Si une diapositive existe à l'index chiffre dans le tableau slides, alors les actions suivantes sont effectuées :

//met à jour la source de l'image dans un élément du DOM avec l'URL de l'image de la diapositive correspondante.

//met à jour le contenu HTML d'un élément du DOM avec la ligne de balise (tagline) de la diapositive correspondante.

//Enfin, la fonction updateDots() est appelée pour mettre à jour les indicateurs (dots) des diapositives, exemple : image 1 signifie que ma dot sera placé en 1 sur 4.


function ChangementDeSlide(sens) {
			chiffre += sens;
			if (chiffre >= slides.length)
			chiffre = 0;
			else if (chiffre < 0)
			chiffre = slides.length - 1;

				if (slides[chiffre]) {
					bannerImg.src = slides[chiffre].image;
					paragraphe.innerHTML = slides[chiffre].tagLine;
				}

				updateDots();

		}

	// J'y ajoute un eventListener sur mes flèches, au clic de souris, 
	// dans la console, sa affiche mon message et J'appelle ma fonction "ChangementDeSlide" avec l'argument -1. ( -1 signifie vers la gauche)

		flecheGauche.addEventListener('click', function onClick() {
			console.log('la flèche de gauche fonctionne bien');
			ChangementDeSlide(-1);
		});


	// J'y ajoute un eventListener sur mes flèches, au clic de souris, 
	// dans la console, sa affiche mon message et J'appelle ma fonction "ChangementDeSlide" avec l'argument 1. ( 1 signifie vers la droite)

		flecheDroite.addEventListener('click', function onClick() {
			console.log('la flèche de droite fonctionne bien');
			ChangementDeSlide(1);
		});



