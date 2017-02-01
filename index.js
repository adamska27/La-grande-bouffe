
// Recuperer les donnees
var contenu = {
  name: 'La bonne bouffe',
  description: 'Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. Vous pourrez échanger avec cette passionnée de cuisine et repartir avec des conseils pour reproduire sa cuisine inimitable',
  images: [
    'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',
    'images/poulet.jpg',
    'images/tagine.jpeg',
    'images/salade.jpeg'
  ],
  baseline: 'La promo7 vous régale',
  addresse: '51, rue de Vincennes',
  codePostale: '93100',
  ville: 'Montreuil',
  carte: [
    {
      name: 'Poulet aux morilles',
      image: 'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
      description: 'Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.',
      price: '23 €'
    },
    {
      name: 'Tagine aux pruneaux',
      image:'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
      description: 'Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau et des pruneaux issus de l\'agriculture biologique',
      price: '18 €'
    },
    {
      name: 'Salade de saison',
      image: 'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg',
      description: 'Toujours à l\'heure, la salade de saison vous régalera avec ses légumes',
      price: '14 €'
    }
  ]
}


var imag = document.getElementById('image');
imag.src = contenu.images[0];
var imag = document.getElementById('image1');
imag.src = contenu.images[1];
var imag = document.getElementById('image2');
imag.src = contenu.images[2];
var imag = document.getElementById('image3');
imag.src = contenu.images[3];


// Function slider
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


// h1 main
var main = document.getElementById('mains');
var h11 = document.createElement("h1");
var hh = h11.innerHTML = contenu.name+'<h1 id = h1-description></h1>';
main.appendChild (h11);

//La description main
var p1 = document.createElement("p");
p1.classList.add("description");
p1.innerHTML = contenu.description+'<p id = p-description></p>';
main.appendChild (p1);

// Récupérer données pour la carte des menus

var contenuMenu = document.getElementById("container-menu");
var menuCarte = contenu.carte;

function creationMenu () {
  for (var i = 0; i < menuCarte.length; i++) {
    var menuElt = document.createElement("div");
    var borderImage = document.createElement("div");
    var imageElt = document.createElement("img");
    var contentElt = document.createElement("div");
    var nomElt = document.createElement("h3");
    var descriptionElt = document.createElement("p");

    menuElt.classList.add("menus");
    borderImage.style.border = "2px black solid";
    borderImage.style.padding = "10px";
    borderImage.style.backgroundColor = "rgb(0,0,0)";
    imageElt.src = menuCarte[i].image;
    contentElt.classList.add("content");
    imageElt.classList.add("image-responsive");
    nomElt.textContent = menuCarte[i].name;
    descriptionElt.textContent = menuCarte[i].description;

    borderImage.appendChild(imageElt);
    menuElt.appendChild(borderImage);
    contentElt.appendChild(nomElt);
    contentElt.appendChild(descriptionElt);
    menuElt.appendChild(contentElt);
    contenuMenu.appendChild(menuElt);
  }
}

creationMenu();

// map js

function initMap() {
       // Create a map object and specify the DOM element for display.
       var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         scrollwheel: false,
         zoom: 8
       });
     };

// partie footer

var foot = document.getElementById('footer-text');
var newspan = document.createElement('span');
var contentspan = newspan.innerHTML = contenu.baseline + '<span></span><br>';
foot.appendChild(newspan);


var newspan2 = document.createElement('span');
contentspan = newspan2.innerHTML = contenu.addresse + '<span></span><br>';
foot.appendChild(newspan2);

var newspan3 = document.createElement('span');
contentspan = newspan3.innerHTML = contenu.codePostale + '<span></span><br>';
foot.appendChild(newspan3);

var newspan4 = document.createElement('span');
contentspan = newspan4.innerHTML = contenu.ville + '<span></span><br>';
foot.appendChild(newspan4);




//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.baseline+'<span></span><br>';
// foot.appendChild (footSpan);
//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.addresse+'<span></span><br>';
// foot.appendChild (footSpan);
//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.codePostale+'<span></span><br>';
// foot.appendChild (footSpan);
//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.ville+'<span></span><br>';
// foot.appendChild (footSpan);
