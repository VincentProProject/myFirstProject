// Code pour le bouton "scrollToTopButton"
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  // Afficher ou masquer le bouton en fonction de la position de défilement
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      // Vous pouvez ajuster cette valeur selon vos besoins
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Défilement vers le haut de la page lorsque le bouton est cliqué
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un défilement fluide
    });
  });
});

// Code pour le menu hamburger
document.getElementById("toggleMenu").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var ul = menu.querySelector("ul");

  // Si ul est déjà à l'intérieur de toggleMenu, le remettre dans le menu
  if (this.contains(ul)) {
    menu.appendChild(ul);
  } else {
    // Sinon, le placer à l'intérieur de toggleMenu
    this.appendChild(ul);
  }

  // Ajouter ou supprimer la classe active pour afficher ou masquer le menu
  menu.classList.toggle("active");
});

function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  // document.getElementById("flipkart-navbar").style.width = "50%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}