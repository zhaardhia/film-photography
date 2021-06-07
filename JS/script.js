var idxSlide = 1;
showSlides(idxSlide);


function plusSlides(n) {
  showSlides(idxSlide += n);
}


function showSlides(n) {
    var i, slide = document.getElementsByClassName("slide");
  

    if (n < 1) {
        idxSlide = slide.length
    }
    if (n > slide.length) {
        idxSlide = 1
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[idxSlide-1].style.display = "block";   
}

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});

// Hamburger bar
const menuToggle = document.querySelector('.navbar-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});