// Pour le bouton du formulaire, création d'une modal pour signifier que la demande de contact a bien été envoyé.

function button() {
    window.alert("Merci pour votre prise de contact et à très vite !")
};

// Création d'une modal contenant l'image sur laquelle l'utilisateur vient de cliquer

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  };

// Ramdom color pink and blue


var colors = ['#FFDEE9', 'B5FFFC', '#D9AFD9', '#97D9E1', '#FAACA8', '#DDD6F3'];

var random_color = colors[Math.floor(Math.random() * colors.length)];
$('.bloc').css("background-color", random_color);

$(".randomColor").each(function() {

//On change la couleur de fond au hasard

$(this).css("background-color", '#'+(Math.random()*0xFFFFFF<<0).toString(16));

})

// Pink Mode

function myFunction() {
  var element = document.body;
  element.classList.toggle("pink-mode");
}

// Shadow Box

const myBox = document.querySelector('.table');
window.setInterval(function Shadow() {
  myBox.classList.toggle("shadowBox");

}, 1050)

const mySecondBox = document.querySelector('.containerportfolioindex');
window.setInterval(function Shadow() {
  mySecondBox.classList.toggle("shadowBox");
}, 1050)

//Button scroll

function buttonScroll(){
  const myScrollButton = document.getElementById('.buttonScroll')
}

// Récupération des blocs
var mainMenu = document.querySelector("#menu");
var burgerMenu = document.querySelector("#menu-burger");

/*===============================*/
/*=== Clic sur le menu burger ===*/
/*===============================*/
// Vérifie si l'événement touchstart existe et est le premier déclenché
var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
	window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);
	// Modification du menu burger
	if(!this.getAttribute("class")) {
		this.setAttribute("class", "clicked");
	} else {
		this.removeAttribute("class");
	}
	// Variante avec x.classList (ou DOMTokenList), pas 100% compatible avant IE 11...
	// burgerMenu.classList.toggle("clicked");

	// Créé l'effet pour le menu slide (compatible partout)
	if(mainMenu.getAttribute("class") != "visible") {
		mainMenu.setAttribute("class", "visible");
	} else {
		mainMenu.setAttribute("class", "invisible");
	}
}, false);